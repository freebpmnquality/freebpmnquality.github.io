/**
 * Plain old class of BPMN analysis utils.
 * 
 * @author https://github.com/andriikopp
 */
class QualiBPMNUtilPlainOld {

    /**
     * Returns the BPMN code by URL.
     */
    static getBPMNByURL(url) {
        return $.ajax({
            type: this.GET_REQUEST,
            url: url,
            async: false
        }).responseText;
    }

    /**
     * Returns analysis results of BPMN code.
     */
    static analyzeBPMN(bpmnXML, config = [true, true, true, true, true, true, true]) {
        var bpmnPrefix = null;

        if (bpmnXML.includes('<definitions')) {
            bpmnPrefix = '';
        } else {
            var matched = bpmnXML.match(/<[a-z]*:definitions/gi);

            if (matched !== null && matched.length > 0) {
                var xmlns = matched[0];
                xmlns = xmlns.replace('<', '').replace(':definitions', '');
                bpmnPrefix = xmlns;
            }
        }

        if (bpmnPrefix.length > 1) {
            bpmnPrefix = bpmnPrefix + ':';
        }

        var xmlDoc = null;

        if (window.DOMParser) {
            const parser = new DOMParser();
            xmlDoc = parser.parseFromString(bpmnXML, 'text/xml');
        } else {
            xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
            xmlDoc.async = false;
            xmlDoc.loadXML(bpmnXML);
        }

        const processList = xmlDoc.getElementsByTagName(bpmnPrefix + 'process');

        var warningsList = [];

        for (var k = 0; k < processList.length; k++) {
            var process = processList[k].childNodes;

            var processName = processList[k].attributes['name'] === undefined ?
                processList[k].attributes['id'].nodeValue :
                processList[k].attributes['name'].nodeValue;

            var participants = xmlDoc.getElementsByTagName(bpmnPrefix + 'participant');

            for (var p = 0; p < participants.length; p++) {
                if (participants[p].attributes['processRef'] !== undefined &&
                    participants[p].attributes['name'] !== undefined &&
                    participants[p].attributes['processRef'].nodeValue === processList[k].attributes['id'].nodeValue) {
                    processName = participants[p].attributes['name'].nodeValue;
                    break;
                }
            }

            processName = processName === '' ? processList[k].attributes['id'].nodeValue : processName;

            var warnings = {
                invalidTasks: 0,
                invalidEvents: 0,
                invalidGateways: 0,

                totalTasks: 0,
                totalEvents: 0,
                totalGateways: 0,

                syntacticInvalidity: 0,
                semanticInvalidity: 0,

                elementData: [],

                validate: function() {
                    return this.invalidTasks === 0 && this.invalidEvents === 0 && this.invalidGateways === 0;
                },

                syntacticValidity: function() {
                    return this.processLength() === 0 ? 1 : 1 - this.syntacticInvalidity / this.processLength();
                },

                semanticValidity: function() {
                    return this.totalTasks === 0 ? 1 : 1 - this.semanticInvalidity / this.totalTasks;
                },

                getLinquisticValue: function(crisp) {
                    return crisp >= 0.8 ? 'high' :
                        crisp >= 0.63 ? 'medium' :
                        'low';
                },

                countDefects: function() {
                    return this.invalidTasks + this.invalidEvents + this.invalidGateways;
                },

                processLength: function() {
                    return this.totalTasks + this.totalEvents + this.totalGateways;
                }
            };

            for (var i = 0; i < process.length; i++) {
                var elementData = {
                    id: null,
                    name: null,
                    type: null,
                    incoming: 0,
                    outgoing: 0,
                    isCorrect: true,
                    message: null
                };

                // [start] Tasks analysis
                if (process[i].nodeName.toLowerCase().includes('task'.toLowerCase()) ||
                    process[i].nodeName.toLowerCase().includes('subProcess'.toLowerCase())) {
                    warnings.totalTasks++;

                    var name = process[i].attributes['name'] === undefined ?
                        process[i].attributes['id'].nodeValue :
                        process[i].attributes['name'].nodeValue;
                    name = name === '' ? process[i].attributes['id'].nodeValue : name;

                    var incoming = 0;
                    var outgoing = 0;

                    for (var j = 0; j < process[i].childNodes.length; j++) {
                        if (process[i].childNodes[j].nodeName.toLowerCase().includes('incoming'.toLowerCase())) {
                            incoming++;
                        }

                        if (process[i].childNodes[j].nodeName.toLowerCase().includes('outgoing'.toLowerCase())) {
                            outgoing++;
                        }
                    }

                    elementData.id = process[i].attributes['id'].nodeValue;
                    elementData.name = name.replace(/[^a-zA-Z ]/g, '');
                    elementData.type = 'task';
                    elementData.incoming = incoming;
                    elementData.outgoing = outgoing;
                    elementData.isCorrect = true;
                    elementData.message = '';

                    // structural analysis
                    if (incoming !== 1 || outgoing !== 1) {
                        if (config[0]) {
                            warnings.invalidTasks++;
                            warnings.syntacticInvalidity++;

                            elementData.isCorrect = false;
                            elementData.message += 'Tasks should have one incoming and one outgoing flow.';
                        }
                    }

                    // semantic analysis
                    if (QualiBPMNSemanticUtil.isSimple(name)) {
                        if (config[1]) {
                            warnings.invalidTasks++;
                            warnings.semanticInvalidity++;

                            elementData.isCorrect = false;
                            elementData.message += elementData.message.length > 0 ? ' ' : '';
                            elementData.message += 'This activity seems to be too short and too broad to be useful.';
                        }
                    }

                    if (QualiBPMNSemanticUtil.isComplex(name)) {
                        if (config[2]) {
                            warnings.invalidTasks++;
                            warnings.semanticInvalidity++;

                            elementData.isCorrect = false;
                            elementData.message += elementData.message.length > 0 ? ' ' : '';
                            elementData.message += 'This activity seems to be too long and too detailed.';
                        }
                    }

                    if (elementData.isCorrect) {
                        elementData.message = 'No changes required.';
                    }

                    warnings.elementData.push(elementData);
                }
                // [end] Tasks analysis

                // [start] Events analysis
                if (process[i].nodeName.includes('Event')) {
                    warnings.totalEvents++;

                    var name = process[i].attributes['name'] === undefined ?
                        process[i].attributes['id'].nodeValue :
                        process[i].attributes['name'].nodeValue;
                    name = name === '' ? process[i].attributes['id'].nodeValue : name;

                    var incoming = 0;
                    var outgoing = 0;

                    for (var j = 0; j < process[i].childNodes.length; j++) {
                        if (process[i].childNodes[j].nodeName.toLowerCase().includes('incoming'.toLowerCase())) {
                            incoming++;
                        }

                        if (process[i].childNodes[j].nodeName.toLowerCase().includes('outgoing'.toLowerCase())) {
                            outgoing++;
                        }
                    }

                    if (process[i].nodeName.toLowerCase().includes('startEvent'.toLowerCase())) {
                        elementData.id = process[i].attributes['id'].nodeValue;
                        elementData.name = name.replace(/[^a-zA-Z ]/g, '');
                        elementData.type = 'start';
                        elementData.incoming = incoming;
                        elementData.outgoing = outgoing;
                        elementData.isCorrect = true;
                        elementData.message = '';

                        if (outgoing !== 1) {
                            if (config[3]) {
                                warnings.invalidEvents++;
                                warnings.syntacticInvalidity++;

                                elementData.isCorrect = false;
                                elementData.message = 'Start events should have one outgoing flow.';
                            }
                        }

                        if (elementData.isCorrect) {
                            elementData.message = 'No changes required.';
                        }

                        warnings.elementData.push(elementData);
                    } else if (process[i].nodeName.toLowerCase().includes('endEvent'.toLowerCase())) {
                        elementData.id = process[i].attributes['id'].nodeValue;
                        elementData.name = name.replace(/[^a-zA-Z ]/g, '');
                        elementData.type = 'end';
                        elementData.incoming = incoming;
                        elementData.outgoing = outgoing;
                        elementData.isCorrect = true;
                        elementData.message = '';

                        if (incoming !== 1) {
                            if (config[4]) {
                                warnings.invalidEvents++;
                                warnings.syntacticInvalidity++;

                                elementData.isCorrect = false;
                                elementData.message = 'End events should have one incoming flow.';
                            }
                        }

                        if (elementData.isCorrect) {
                            elementData.message = 'No changes required.';
                        }

                        warnings.elementData.push(elementData);
                    } else {
                        elementData.id = process[i].attributes['id'].nodeValue;
                        elementData.name = name.replace(/[^a-zA-Z ]/g, '');
                        elementData.type = 'event';
                        elementData.incoming = incoming;
                        elementData.outgoing = outgoing;
                        elementData.isCorrect = true;
                        elementData.message = '';

                        if (incoming !== 1 || outgoing !== 1) {
                            if (config[5]) {
                                warnings.invalidEvents++;
                                warnings.syntacticInvalidity++;

                                elementData.isCorrect = false;
                                elementData.message = 'Intermediate events should have one incoming and one outgoing flow.';
                            }
                        }

                        if (elementData.isCorrect) {
                            elementData.message = 'No changes required.';
                        }

                        warnings.elementData.push(elementData);
                    }
                }
                // [end] Events analysis

                // [start] Gateways analysis
                if (process[i].nodeName.toLowerCase().includes('gateway'.toLowerCase())) {
                    warnings.totalGateways++;

                    var name = process[i].attributes['name'] === undefined ?
                        process[i].attributes['id'].nodeValue :
                        process[i].attributes['name'].nodeValue;
                    name = name === '' ? process[i].attributes['id'].nodeValue : name;

                    var incoming = 0;
                    var outgoing = 0;

                    for (var j = 0; j < process[i].childNodes.length; j++) {
                        if (process[i].childNodes[j].nodeName.toLowerCase().includes('incoming'.toLowerCase())) {
                            incoming++;
                        }

                        if (process[i].childNodes[j].nodeName.toLowerCase().includes('outgoing'.toLowerCase())) {
                            outgoing++;
                        }
                    }

                    elementData.id = process[i].attributes['id'].nodeValue;
                    elementData.name = name.replace(/[^a-zA-Z ]/g, '');
                    elementData.type = 'event';
                    elementData.incoming = incoming;
                    elementData.outgoing = outgoing;
                    elementData.isCorrect = true;
                    elementData.message = '';

                    if (!((incoming === 1 && outgoing > 1) || (incoming > 1 && outgoing === 1))) {
                        if (config[6]) {
                            warnings.invalidGateways++;
                            warnings.syntacticInvalidity++;

                            elementData.isCorrect = false;
                            elementData.message = 'Gateways should be either splits or joins.';
                        }
                    }

                    if (elementData.isCorrect) {
                        elementData.message = 'No changes required.';
                    }

                    warnings.elementData.push(elementData);
                }
                // [end] Gateways analysis
            }

            warningsList.push({
                id: k,
                process: processName.replace(/[^a-zA-Z ]/g, ''),
                data: warnings
            });
        }

        return warningsList;
    }
}