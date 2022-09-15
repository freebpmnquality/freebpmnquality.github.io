var viewer = null;
var editor = '';

// Configs
var configChecks = [true, true, true, true, true, true, true];

function captureConfigs() {
    // Consider config checkboxes
    configChecks = [
        $('#checkTasks').is(':checked'),

        $('#checkSemanticsShort').is(':checked'),
        $('#checkSemanticsLong').is(':checked'),

        $('#checkStartEvents').is(':checked'),
        $('#checkEndEvents').is(':checked'),
        $('#checkIntermediateEvents').is(':checked'),

        $('#checkGateways').is(':checked')
    ];

    // Save configs
    localStorage.setItem('configChecks', JSON.stringify(configChecks));

    analyzeDoc_Click();
}

$(document).ready(function() {
    $('#zoombuttons').hide();
    $('#canvas').hide();
    $('#extra-tip').hide();

    let bpmnLinkParam = getParameterByName('doc');

    if (bpmnLinkParam) {
        $('#bpmnLink').val(bpmnLinkParam);

        loadDocumentByLink();
    }

    $('#slider').change(function() {
        resizeCanvas(Number.parseInt($('#slider').val()));
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

    // Restore configs
    configChecks = JSON.parse(localStorage.getItem('configChecks'));

    if (configChecks === null) {
        configChecks = [true, true, true, true, true, true, true];
    } else {
        $('#checkTasks').prop('checked', configChecks[0]);

        $('#checkSemanticsShort').prop('checked', configChecks[1]);
        $('#checkSemanticsLong').prop('checked', configChecks[2]);

        $('#checkStartEvents').prop('checked', configChecks[3]);
        $('#checkEndEvents').prop('checked', configChecks[4]);
        $('#checkIntermediateEvents').prop('checked', configChecks[5]);

        $('#checkGateways').prop('checked', configChecks[6]);
    }

    // Load sample model
    loadSample(Object.keys(sampleFileMapping)[Object.keys(sampleFileMapping).length - 1]);
});

function analyzeDoc_Click() {
    $('#zoombuttons').show();
    $('#canvas').show();
    $('#extra-tip').show();

    $('#canvas').empty();

    let bpmnXML = editor;

    let prefix = $('#bpmnPrefix').val();

    if (prefix.length > 1) {
        prefix = prefix + ':';
    }

    viewer = new BpmnJS({ container: '#canvas' });

    viewer.importXML(bpmnXML, function(err) {
        if (err) {
            $('#canvas').append('<div class="alert alert-danger bpmn-warning">' + err + '</div>');
        } else {
            let canvas = viewer.get('canvas');

            canvas.zoom('fit-viewport');

            // Call analytics library
            const warningsList = QualiBPMNUtilPlainOld.analyzeBPMN(bpmnXML, configChecks);

            $('#recommendations').empty();

            var overlays = viewer.get('overlays');

            bpmnValidation(warningsList, overlays);

            bpmnEffortsEvaluation(bpmnXML);
        }
    });
}

function bpmnEffortsEvaluation(bpmnXML) {
    const evaluationResults = EtherBPMNUtil.evaluateModel(bpmnXML);

    $('#effortsEstimated').text(evaluationResults.efforts.toFixed(2));
    $('#costEstimated').text(evaluationResults.cost.toFixed(2));

    $('#valueEstimated').text(evaluationResults.value.toFixed(2));
    $('#qualityEstimated').text(evaluationResults.quality.toFixed(2));
}

function loadSample(sample) {
    let data = samples(sampleFileMapping[sample]);

    editor = data;

    $('#file-name').html('<span class="badge badge-pill badge-info">Model</span> ' + sampleFileMapping[sample]);

    defineXMLNamespace(data);

    analyzeDoc_Click();
}

function loadDocumentByLink() {
    let bpmnLink = $('#bpmnLink').val();

    $.get(bpmnLink, function(data) {
        editor = data;

        $('#file-name').html(`<span class="badge badge-pill badge-info">Model</span> <a href="${bpmnLink}" target="_blank">${bpmnLink}</a><br><a role="button" class="btn btn-sm btn-primary mt-2" style="border-radius: 1rem; font-weight: bold;" href="https://cloudfreebpmnquality.herokuapp.com/finance/index.html?doc=${bpmnLink}" target="_blank">Estimate cost</a>`);

        defineXMLNamespace(data);

        analyzeDoc_Click();

        lastFileName = bpmnLink;
        document.dispatchEvent(readFileEvent);
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

function resizeCanvas(height) {
    $('#canvas').height(height);

    let bpmnXML = editor;

    viewer.importXML(bpmnXML, function(err) {
        if (err) {
            $('#canvas').append('<div class="alert alert-danger bpmn-warning">' + err + '</div>');
        } else {
            let canvas = viewer.get('canvas');

            canvas.zoom('fit-viewport');
        }
    });
}

var coloredNodes = [];

function colorNode(elementId, overlays, tip, elementData, isFault = true) {
    if (coloredNodes.includes(elementId)) {
        return;
    }

    const symbol = isFault ? `<span class="badge badge-pill badge-danger">Fault</span>` :
        `<span class="badge badge-pill badge-success">Ok</span>`;
    const message = isFault ? `<span class="tiptext">${tip}</span>` :
        `<span class="finetext">No changes required.</span>`;

    overlays.add(elementId, {
        position: { top: -10, left: -10 },
        html: $('<div class="highlight-overlay">').html(`<span style="cursor: pointer;" onclick="showSuggestionModal('${tip}', '${elementData.name}', '${elementData.type}', ${elementData.incoming}, ${elementData.outgoing})">${symbol}</span>${message}`)
    });

    coloredNodes.push(elementId);
}

function showSuggestionModal(tip, name, type, incoming, outgoing) {
    if (Payment.isSubscribed(enteredPromoCode)) {
        $('#suggestionModal').modal('show');

        $('#tipText').empty();
        $('#tipText').append(tip);

        let suggestion = `<br>Element <b>"${name}"</b> of type <b>${type}</b> has <b>${incoming}</b> incoming sequence flow(s) and <b>${outgoing}</b> outgoing sequence flow(s).`;

        incoming = Number.parseInt(incoming);
        outgoing = Number.parseInt(outgoing);

        // Tasks
        if (type === 'task' && incoming < 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> An incoming sequence flow should be added, since tasks should not run workflow execution.`;
        }

        if (type === 'task' && incoming > 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> Multiple incoming sequence flows should be merged/synchronized using a join gateway that triggers this task.`;
        }

        if (type === 'task' && outgoing < 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> An outgoing sequence flow should be added, since tasks should not terminate workflow execution.`;
        }

        if (type === 'task' && outgoing > 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> Multiple outgoing sequence flows should be branched/parallelized using a split gateway triggered by this task.`;
        }

        if (type === 'task') {
            // semantic analysis
            if (QualiBPMNSemanticUtil.isSimple(name)) {
                suggestion += `<br><span class="badge badge-pill badge-danger">!</span> This activity seems to be too short and too broad to be useful. It may be detailed or merged with another activity.`;
            }

            if (QualiBPMNSemanticUtil.isComplex(name)) {
                suggestion += `<br><span class="badge badge-pill badge-danger">!</span> This activity seems to be too long and too detailed. It may be broken down into its component activities.`;
            }
        }

        // Start events
        if (type === 'start' && outgoing < 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> An outgoing sequence flow should be added, otherwise the start event is useless.`;
        }

        if (type === 'start' && outgoing > 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> Multiple outgoing sequence flows should be branched/parallelized using a split gateway triggered by this start event.`;
        }

        // End events
        if (type === 'end' && incoming < 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> An incoming sequence flow should be added, otherwise the end event is useless.`;
        }

        if (type === 'end' && incoming > 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> Multiple incoming sequence flows should be merged/synchronized using a join gateway that triggers this end event.`;
        }

        // Intermediate events
        if (type === 'event' && incoming < 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> An incoming sequence flow should be added, since intermediate events should not run workflow execution.`;
        }

        if (type === 'event' && incoming > 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> Multiple incoming sequence flows should be merged/synchronized using a join gateway that triggers this intermediate event.`;
        }

        if (type === 'event' && outgoing < 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> An outgoing sequence flow should be added, since intermediate events should not terminate workflow execution.`;
        }

        if (type === 'event' && outgoing > 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> Multiple outgoing sequence flows should be branched/parallelized using a split gateway triggered by this intermediate event.`;
        }

        // Gateways
        if (type === 'gateway' && incoming < 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> An incoming sequence flow should be added, since gateways should not run workflow execution.`;
        }

        if (type === 'gateway' && outgoing < 1) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> An outgoing sequence flow should be added, since gateways should not terminate workflow execution.`;
        }

        if (type === 'gateway' && (incoming > 1 && outgoing > 1)) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> This gateway should be replaced by two gateways: a join (to merge/synchronize the workflow at first) that triggers a split (to branch/parallelize the workflow after).`;
        }

        if (type === 'gateway' && (incoming === 1 && outgoing === 1)) {
            suggestion += `<br><span class="badge badge-pill badge-danger">!</span> The gateway should be either split or join, otherwise the gateway is useless.`;
        }

        $('#tipText').append(suggestion);
    }
}

function bpmnValidation(warningsList, overlays) {
    coloredNodes = [];

    $('#syntacticQuality').empty();
    $('#semanticQuality').empty();

    let countErrors = 0;

    let totalSyntacticValidity = 0;
    let totalSemanticValidity = 0;

    for (const warningsObj in warningsList) {
        const warnings = warningsList[warningsObj].data;
        const processName = warningsList[warningsObj].process;
        const k = warningsList[warningsObj].id;

        for (const element in warnings.elementData) {
            colorNode(warnings.elementData[element].id, overlays, warnings.elementData[element].message, warnings.elementData[element], !warnings.elementData[element].isCorrect);

            if (!warnings.elementData[element].isCorrect) {
                $('#recommendations').append(`<div class="list-group-item list-group-item-action mt-2" style="border-radius: 1rem;"><span class="badge badge-pill badge-danger">${warnings.elementData[element].type}</span> <b>"${warnings.elementData[element].name}"</b>: ${warnings.elementData[element].message}</div>`);

                countErrors++;
            }
        }

        $('#syntacticQuality').append(`<div class="list-group-item list-group-item-action mt-2" style="border-radius: 1rem;">
            <span class="badge badge-pill badge-info">Process</span>
            <span style="font-weight: bold;">${processName}</span><br>
            <div class="mt-1">
                <span id="syntacticQualityValue-${k}" class="badge badge-pill badge-light">0.00</span>
                <span id="syntacticQualityBadge-${k}" class="badge badge-pill badge-light">N/A</span>
            </div>
        </div>`);

        $('#semanticQuality').append(`<div class="list-group-item list-group-item-action mt-2" style="border-radius: 1rem;">
            <span class="badge badge-pill badge-info">Process</span>
            <span style="font-weight: bold;">${processName}</span><br>
            <div class="mt-1">
                <span id="semanticQualityValue-${k}" class="badge badge-pill badge-light">0.00</span>
                <span id="semanticQualityBadge-${k}" class="badge badge-pill badge-light">N/A</span>
            </div>
        </div>`);

        const syntacticValidity = warnings.syntacticValidity();
        const semanticValidity = warnings.semanticValidity();

        totalSyntacticValidity += syntacticValidity;
        totalSemanticValidity += semanticValidity;

        $(`#syntacticQualityValue-${k}`).text((100 * syntacticValidity).toFixed(2) + '%');
        $(`#semanticQualityValue-${k}`).text((100 * semanticValidity).toFixed(2) + '%');

        const syntacticTerm = warnings.getLinquisticValue(syntacticValidity);
        const semanticTerm = warnings.getLinquisticValue(semanticValidity);

        const colors = {
            'high': 'success',
            'medium': 'warning',
            'low': 'danger'
        };

        $(`#syntacticQualityBadge-${k}`).attr('class', `badge badge-pill badge-${colors[syntacticTerm]}`);
        $(`#semanticQualityBadge-${k}`).attr('class', `badge badge-pill badge-${colors[semanticTerm]}`);

        $(`#syntacticQualityBadge-${k}`).text(syntacticTerm);
        $(`#semanticQualityBadge-${k}`).text(semanticTerm);
    }

    totalSyntacticValidity /= warningsList.length;
    totalSemanticValidity /= warningsList.length;

    $('#totalSyntacticQuality').text((100 * totalSyntacticValidity).toFixed(2) + '%');
    $('#totalSemanticQuality').text((100 * totalSemanticValidity).toFixed(2) + '%');

    if (countErrors < 1) {
        $('#recommendations').append('<div class="list-group-item list-group-item-action mt-2" style="border-radius: 1rem;"><span class="badge badge-pill badge-success">Ok</span> No mistakes detected</div>');
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

var readFileEvent = new CustomEvent("eReadFile");
var lastFileName = null;
var uploadedFiles = [];

function readFile(file) {
    var reader = new FileReader();

    if (!uploadedFiles.includes(file.name)) {
        uploadedFiles.push(file.name);
    }

    $('#file-name').html('<span class="badge badge-pill badge-info">Model</span> ' + file.name);

    reader.readAsText(file);

    lastFileName = file.name;

    reader.onload = function() {
        editor = reader.result;

        let bpmnXML = editor;

        defineXMLNamespace(bpmnXML);
        $('#bpmnLink').val('');

        analyzeDoc_Click();

        document.dispatchEvent(readFileEvent);
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