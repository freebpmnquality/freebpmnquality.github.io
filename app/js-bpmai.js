var editor = ace.edit("editor");
editor.setTheme("ace/theme/eclipse");
editor.session.setMode("ace/mode/xml");

var viewer = null;

$(document).ready(function() {
    $('#zoombuttons').hide();
    $('#canvas').hide();
    $('#extra-tip').hide();

    let bpmnLinkParam = getParameterByName('doc');

    if (bpmnLinkParam) {
        $('#bpmnLink').val(bpmnLinkParam);

        loadDocumentByLink();
    }

    $('#editor').keyup(function() {
        let bpmnXML = editor.getValue();

        defineXMLNamespace(bpmnXML);
    });

    $('#expand').click(function() {
        $('#editor').height(370);

        editor.resize();
    });

    $('#collapse').click(function() {
        $('#editor').height(170);

        editor.resize();
    });

    $('#clear').click(function() {
        editor.setValue('');

        $('#bpmnLink').val('');

        window.location.href = './';
    });

    $('#paste').click(function() {
        navigator.clipboard.readText().then(clipText => {
            editor.setValue('');
            editor.insert(clipText);

            let bpmnXML = editor.getValue();

            defineXMLNamespace(bpmnXML);

            $('#bpmnLink').val('');
        });
    });

    $('#copy').click(function() {
        navigator.clipboard.writeText(editor.getValue()).then(clipText => {});
    });

    $('#zoomin').click(function() {
        resizeCanvas(50);
        analyzeDoc_Click();
    });

    $('#zoomout').click(function() {
        resizeCanvas(-50);
        analyzeDoc_Click();
    });

    $('#reload').click(function() {
        let bpmnLink = $('#bpmnLink').val();

        if (bpmnLink === null || bpmnLink === '') {
            window.location.href = './index.html';
        } else {
            window.location.href = './index.html?doc=' + bpmnLink;
        }
    });

    $('#analyzeDoc').click(function() {
        analyzeDoc_Click();
    });

    loadSample('dispatch');
});

function analyzeDoc_Click() {
    $('#zoombuttons').show();
    $('#canvas').show();
    $('#extra-tip').show();

    $('#canvas').empty();

    let bpmnXML = editor.getValue();

    let prefix = $('#bpmnPrefix').val();

    if (prefix.length > 1) {
        prefix = prefix + ':';
    }

    viewer = new BpmnJS({ container: '#canvas' });

    viewer.importXML(bpmnXML, function(err) {
        if (err) {
            $('#canvas').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' + err + '</div>');
        } else {
            let canvas = viewer.get('canvas');

            canvas.zoom('fit-viewport');

            let xmlDoc = null;

            if (window.DOMParser) {
                let parser = new DOMParser();
                xmlDoc = parser.parseFromString(bpmnXML, 'text/xml');
            } else {
                xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
                xmlDoc.async = false;
                xmlDoc.loadXML(bpmnXML);
            }

            $('#recommendations').empty();

            var overlays = viewer.get('overlays');
            let elementRegistry = viewer.get('elementRegistry');

            bpmnValidation(xmlDoc, prefix, overlays, elementRegistry);
        }
    });
}

function loadSample(sample) {
    let data = samples[sample];

    editor.setValue('');
    editor.insert(data);

    $('#dragFileName').html(sampleFileMapping[sample] +
        '<br>Drag & drop or click to upload the BPMN 2.0 file');

    defineXMLNamespace(data);

    analyzeDoc_Click();
}

function loadDocumentByLink() {
    let bpmnLink = $('#bpmnLink').val();

    $.get(bpmnLink, function(data) {
        editor.setValue('');
        editor.insert(data);

        defineXMLNamespace(data);
    });
}

function defineXMLNamespace(bpmnXML) {
    if (bpmnXML.includes('<definitions')) {
        $('#bpmnPrefix').val('');
    } else {
        let matched = bpmnXML.match(/<[a-z]*:definitions/gi);

        if (matched !== null && matched.length > 0) {
            let xmlns = matched[0];

            xmlns = xmlns.replace('<', '').replace(':definitions', '');

            $('#bpmnPrefix').val(xmlns);
        }
    }
}

function resizeCanvas(change) {
    let height = parseInt($('#canvas').height());

    if (height > 400 || (height >= 400 && change > 0)) {
        $('#canvas').height(height + change);

        let bpmnXML = editor.getValue();

        viewer.importXML(bpmnXML, function(err) {
            if (err) {
                $('#canvas').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' + err + '</div>');
            } else {
                let canvas = viewer.get('canvas');

                canvas.zoom('fit-viewport');
            }
        });
    }
}

var coloredNodes = [];

function colorNode(elementId, overlays, elementRegistry, tip) {
    if (coloredNodes.includes(elementId)) {
        return;
    }

    var shape = elementRegistry.get(elementId);

    var $overlayHtml =
        $('<div class="highlight-overlay">')
        .css({
            width: shape.width,
            height: shape.height
        })
        .html('<span class="tiptext">' + tip + '</span>');

    overlays.add(elementId, {
        position: {
            top: 0,
            left: 0
        },
        html: $overlayHtml
    });

    coloredNodes.push(elementId);
}

function bpmnValidation(xmlDoc, prefix, overlays, elementRegistry) {
    coloredNodes = [];
    let processList = xmlDoc.getElementsByTagName(prefix + 'process');

    for (let k = 0; k < processList.length; k++) {
        let splits = {};
        let joins = {};

        let process = processList[k].childNodes;

        let processName = processList[k].attributes['name'] === undefined ?
            processList[k].attributes['id'].nodeValue :
            processList[k].attributes['name'].nodeValue;

        let participants = xmlDoc.getElementsByTagName(prefix + 'participant');

        for (let p = 0; p < participants.length; p++) {
            if (participants[p].attributes['processRef'] !== undefined &&
                participants[p].attributes['name'] !== undefined &&
                participants[p].attributes['processRef'].nodeValue === processList[k].attributes['id'].nodeValue) {
                processName = participants[p].attributes['name'].nodeValue;
                break;
            }
        }

        processName = processName === '' ? processList[k].attributes['id'].nodeValue : processName;

        let warnings = {
            invalidTasks: 0,
            invalidEvents: 0,
            gatewaysMismatch: 0,
            startEvents: 0,
            endEvents: 0,
            inclusiveGateways: 0,
            uncertainGateways: 0,
            totalNodes: 0,
            totalGateways: 0,

            validate: function() {
                let r1 = this.totalNodes <= 31 ? 1 : 0;
                let r2 = (this.invalidTasks + this.invalidEvents + this.uncertainGateways) === 0 ? 1 : 0;
                let r3 = Math.min(this.startEvents === 1 ? 1 : 0, this.endEvents === 1 ? 1 : 0);
                let r4 = this.gatewaysMismatch === 0 ? 1 : 0;
                let r5 = this.inclusiveGateways === 0 ? 1 : 0;

                return Math.min(r1, r2, r3, r4, r5);
            }
        }

        $('#recommendations').append('<div class="alert alert-light" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
            'Process <b>"' + processName + '"</b>' + '</div>');

        for (let i = 0; i < process.length; i++) {
            // [start] Tasks analysis
            if (process[i].nodeName.toLowerCase().includes('task'.toLowerCase()) ||
                process[i].nodeName.toLowerCase().includes('subProcess'.toLowerCase())) {
                let name = process[i].attributes['name'] === undefined ?
                    process[i].attributes['id'].nodeValue :
                    process[i].attributes['name'].nodeValue;
                name = name === '' ? process[i].attributes['id'].nodeValue : name;

                let incoming = 0;
                let outgoing = 0;

                for (let j = 0; j < process[i].childNodes.length; j++) {
                    if (process[i].childNodes[j].nodeName.toLowerCase().includes('incoming'.toLowerCase())) {
                        incoming++;
                    }

                    if (process[i].childNodes[j].nodeName.toLowerCase().includes('outgoing'.toLowerCase())) {
                        outgoing++;
                    }
                }

                if (incoming !== 1 || outgoing !== 1) {
                    warnings.invalidTasks++;

                    // color invalid tasks
                    colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                        'Tasks should have one incoming and one outgoing flow');
                }

                if (incoming < 1) {
                    $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                        'Task <b>"' + name + '"</b> does not have incoming flows' + '</div>');
                }

                if (incoming > 1) {
                    $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                        'Task <b>"' + name + '"</b> has several incoming flows' + '</div>');
                }

                if (outgoing < 1) {
                    $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                        'Task <b>"' + name + '"</b> does not have outgoing flows' + '</div>');
                }

                if (outgoing > 1) {
                    $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                        'Task <b>"' + name + '"</b> has several outgoing flows' + '</div>');
                }

                warnings.totalNodes++;
            }
            // [end] Tasks analysis

            // [start] Events analysis
            if (process[i].nodeName.includes('Event')) {
                let name = process[i].attributes['name'] === undefined ?
                    process[i].attributes['id'].nodeValue :
                    process[i].attributes['name'].nodeValue;
                name = name === '' ? process[i].attributes['id'].nodeValue : name;

                let incoming = 0;
                let outgoing = 0;

                for (let j = 0; j < process[i].childNodes.length; j++) {
                    if (process[i].childNodes[j].nodeName.toLowerCase().includes('incoming'.toLowerCase())) {
                        incoming++;
                    }

                    if (process[i].childNodes[j].nodeName.toLowerCase().includes('outgoing'.toLowerCase())) {
                        outgoing++;
                    }
                }

                if (process[i].nodeName.toLowerCase().includes('startEvent'.toLowerCase())) {
                    warnings.startEvents++;

                    if (outgoing !== 1) {
                        // color invalid start events
                        colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                            'Start events should have one outgoing flow');
                    }

                    if (outgoing < 1) {
                        $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                            'Event <b>"' + name + '"</b> does not have outgoing flows' + '</div>');
                    }

                    if (outgoing > 1) {
                        $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                            'Event <b>"' + name + '"</b> has several outgoing flows' + '</div>');
                    }

                    if (warnings.startEvents > 1 && outgoing === 1) {
                        // color extra start events
                        colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                            'There should be one start event');
                    }

                    if (warnings.startEvents > 1 && outgoing === 1) {
                        // color fault extra start events
                        colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                            'There should be one start event; start events should have one outgoing flow');
                    }
                } else if (process[i].nodeName.toLowerCase().includes('endEvent'.toLowerCase())) {
                    warnings.endEvents++;

                    if (incoming !== 1) {
                        // color invalid end events
                        colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                            'End events should have one incoming flow');
                    }

                    if (incoming < 1) {
                        $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                            'Event <b>"' + name + '"</b> does not have incoming flows' + '</div>');
                    }

                    if (incoming > 1) {
                        $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                            'Event <b>"' + name + '"</b> has several incoming flows' + '</div>');
                    }

                    if (warnings.endEvents > 1 && incoming === 1) {
                        // color extra end events
                        colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                            'There should be one end event');
                    }

                    if (warnings.endEvents > 1 && incoming !== 1) {
                        // color fault extra end events
                        colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                            'There should be one end event; start events should have one outgoing flow');
                    }
                } else {
                    if (incoming !== 1 || outgoing !== 1) {
                        warnings.invalidEvents++;

                        // color invalid events
                        colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                            'Intermediate events should have one incoming and one outgoing flow');
                    }

                    if (incoming < 1) {
                        $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                            'Event <b>"' + name + '"</b> does not have incoming flows' + '</div>');
                    }

                    if (incoming > 1) {
                        $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                            'Event <b>"' + name + '"</b> has several incoming flows' + '</div>');
                    }

                    if (outgoing < 1) {
                        $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                            'Event <b>"' + name + '"</b> does not have outgoing flows' + '</div>');
                    }

                    if (outgoing > 1) {
                        $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                            'Event <b>"' + name + '"</b> has several outgoing flows' + '</div>');
                    }
                }

                warnings.totalNodes++;
            }
            // [end] Events analysis

            // [start] Gateways analysis
            if (process[i].nodeName.toLowerCase().includes('gateway'.toLowerCase())) {
                let name = process[i].attributes['name'] === undefined ?
                    process[i].attributes['id'].nodeValue :
                    process[i].attributes['name'].nodeValue;
                name = name === '' ? process[i].attributes['id'].nodeValue : name;

                let incoming = 0;
                let outgoing = 0;

                for (let j = 0; j < process[i].childNodes.length; j++) {
                    if (process[i].childNodes[j].nodeName.toLowerCase().includes('incoming'.toLowerCase())) {
                        incoming++;
                    }

                    if (process[i].childNodes[j].nodeName.toLowerCase().includes('outgoing'.toLowerCase())) {
                        outgoing++;
                    }
                }

                if (incoming === 1 && outgoing > 1) {
                    if (splits[process[i].nodeName] === undefined) {
                        splits[process[i].nodeName] = { 'nodes': 1, 'arcs': incoming + outgoing };
                    } else {
                        let oldNodes = splits[process[i].nodeName]['nodes'];
                        let oldArcs = splits[process[i].nodeName]['arcs'];

                        splits[process[i].nodeName]['nodes'] = oldNodes + 1;
                        splits[process[i].nodeName]['arcs'] = oldArcs + incoming + outgoing;
                    }

                    if (joins[process[i].nodeName] === undefined) {
                        joins[process[i].nodeName] = { 'nodes': 0, 'arcs': 0 };
                    }
                } else if (incoming > 1 && outgoing === 1) {
                    if (joins[process[i].nodeName] === undefined) {
                        joins[process[i].nodeName] = { 'nodes': 1, 'arcs': incoming + outgoing };
                    } else {
                        let oldNodes = joins[process[i].nodeName]['nodes'];
                        let oldArcs = joins[process[i].nodeName]['arcs'];

                        joins[process[i].nodeName]['nodes'] = oldNodes + 1;
                        joins[process[i].nodeName]['arcs'] = oldArcs + incoming + outgoing;
                    }

                    if (splits[process[i].nodeName] === undefined) {
                        splits[process[i].nodeName] = { 'nodes': 0, 'arcs': 0 };
                    }
                } else {
                    warnings.uncertainGateways++;

                    // color invalid gateways
                    colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                        'This gateway is neither split nor join');
                }

                if (process[i].nodeName.toLowerCase().includes('inclusiveGateway'.toLowerCase())) {
                    warnings.inclusiveGateways++;

                    // color OR gateways
                    colorNode(process[i].attributes['id'].nodeValue, overlays, elementRegistry,
                        'It is better to avoid inclusive gateways');
                }

                warnings.totalNodes++;
                warnings.totalGateways++;
            }
            // [end] Gateways analysis
        }

        if (warnings.inclusiveGateways > 0) {
            $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                'Process contains <b>inclusive gateways</b>' + '</div>');
        }

        if (warnings.uncertainGateways > 0) {
            $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                'Process contains <b>undefined gateways</b> (neither splits nor joins)' + '</div>');
        }

        for (var key in splits) {
            if (splits.hasOwnProperty(key) && joins.hasOwnProperty(key)) {
                let gatewaysMismatch = Math.max(Math.abs(splits[key]['nodes'] - joins[key]['nodes']),
                    Math.abs(splits[key]['arcs'] - joins[key]['arcs']));

                warnings.gatewaysMismatch += gatewaysMismatch;

                if (gatewaysMismatch > 0) {
                    $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                        'Gateways mismatch of <b>' + key.replace('bpmn:', '')
                        .replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase() +
                        '</b> type</div>');

                    for (let elem in elementRegistry._elements) {
                        if (elementRegistry._elements[elem].element.type.toLowerCase().includes(key.toLowerCase())) {
                            colorNode(elementRegistry._elements[elem].element.id, overlays, elementRegistry,
                                'Gateways of such type are mismatched');
                        }
                    }
                }
            }
        }

        if (warnings.totalNodes > 31) {
            $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                'Process is too large: it can be decomposed or split into several processes</b></div>');
        }

        if (warnings.startEvents < 1) {
            $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                'Process does not have <b>start events</b></div>');
        }

        if (warnings.startEvents > 1) {
            $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                'Process has several <b>start events</b></div>');
        }

        if (warnings.endEvents < 1) {
            $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                'Process does not have <b>end events</b></div>');
        }

        if (warnings.endEvents > 1) {
            $('#recommendations').append('<div class="alert alert-danger" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                'Process has several <b>end events</b></div>');
        }

        if (warnings.validate()) {
            $('#recommendations').append('<div class="alert alert-info" style="padding: 5px; margin-bottom: 5px; font-size: 14px;">' +
                'No mistakes detected</div>');
        }
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function readFile(file) {
    var reader = new FileReader();

    $('#dragFileName').html(file.name +
        '<br>Drag & drop or click to upload the BPMN 2.0 file');

    reader.readAsText(file);
    reader.onload = function() {
        editor.setValue('');
        editor.insert(reader.result);

        let bpmnXML = editor.getValue();

        defineXMLNamespace(bpmnXML);

        $('#bpmnLink').val('');

        analyzeDoc_Click();

        window.onbeforeunload = function(e) {
            return 'Are you sure you want to leave this page? The changes you made will be lost.';
        };
    };
}

function dropHandler(ev) {
    ev.preventDefault();

    $('#drop_zone').removeClass('highlight-dropzone');
    $('#dragFileName').attr('style', '');

    if (ev.dataTransfer.items) {
        for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            if (ev.dataTransfer.items[i].kind === 'file') {
                var file = ev.dataTransfer.items[i].getAsFile();
                readFile(file);
            }
        }
    }
}

function dragOverHandler(ev) {
    ev.preventDefault();
    $('#drop_zone').addClass('highlight-dropzone');
    $('#dragFileName').attr('style', 'color: #fff !important;');
}

function dragOverLeave(ev) {
    ev.preventDefault();
    $('#drop_zone').removeClass('highlight-dropzone');
    $('#dragFileName').attr('style', '');
}

function dropMouseOver(ev) {
    ev.preventDefault();
    $('#drop_zone').addClass('highlight-dropzone');
    $('#dragFileName').attr('style', 'color: #fff !important;');
}

function dropMouseLeave(ev) {
    ev.preventDefault();
    $('#drop_zone').removeClass('highlight-dropzone');
    $('#dragFileName').attr('style', '');
}

function selectFile() {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        var file = e.target.files[0];
        readFile(file);
    }

    input.click();
}