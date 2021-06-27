// BPMN content
let bpmn = null;

/**
 * Open BPMN file dialog.
 */
const openBPMNFile = () => {
    const element = document.createElement('div');

    element.innerHTML = '<input type="file">';

    const fileInput = element.firstChild;

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];

        if (file.name.match(/\.(bpmn)$/)) {
            const reader = new FileReader();

            reader.onload = function() {
                bpmn = reader.result;

                showBPMNDiagram(bpmn);
            };

            reader.readAsText(file);
        } else {
            alert('File is not supported! Open BPMN 2.0 (*.bpmn) files only.');
        }
    });

    fileInput.click();
};

/**
 * Display BPMN diagram.
 */
const showBPMNDiagram = (bpmn) => {
    $('#canvas').empty();

    const viewer = new BpmnJS({ container: '#canvas' });

    viewer.importXML(bpmn, function(err) {
        if (err) {
            alert(err);
        } else {
            const canvas = viewer.get('canvas');

            canvas.zoom('fit-viewport');

            $('#zoom').val(Number.parseInt($('#canvas').height()));

            const overlays = viewer.get('overlays');

            processBPMNFile(bpmn, overlays);
        }
    });
};

/**
 * Resize the canvas.
 */
const resizeCanvas = () => {
    const change = Number.parseInt($('#zoom').val());

    $('#zoomValue').text((change / Number.parseInt($('#zoom').attr('min'))).toFixed(2));

    $('#canvas').height(change);
    $('#canvas').empty();

    const viewer = new BpmnJS({ container: '#canvas' });

    viewer.importXML(bpmn, function(err) {
        if (err) {
            alert(err);
        } else {
            const canvas = viewer.get('canvas');

            canvas.zoom('fit-viewport');

            const overlays = viewer.get('overlays');

            processBPMNFile(bpmn, overlays);
        }
    });
};

/**
 * Process BPMN file content.
 */
const processBPMNFile = (bpmn, overlays) => {
    $('#quality').empty();
    $('#elements').empty();

    const json = QualiBPMNUtil.translateBPMNToJSON(bpmn);
    const processes = QualiBPMNUtil.getProcesses(json);

    for (const process in processes) {
        const flat = QualiBPMNUtil.getFlatProcessElements(processes[process]);
        const evaluated = QualiBPMNUtil.evaluateProcess(flat);

        for (const i in evaluated.elements) {
            const element = evaluated.elements[i];

            const color = element.evaluation.length > 0 ? 'danger' : 'success';
            const symbol = element.evaluation.length > 0 ? '&#10006;' : '&#10004;';

            const message = element.evaluation.length > 0 ?
                element.evaluation[0].image.description :
                'No changes required.';

            overlays.add(element.id, {
                position: {
                    top: -10,
                    left: -10
                },
                html: $('<div class="highlight-overlay">')
                    .html(`<span style="cursor: pointer;" 
                            onclick="$('#messageTitle').text('${element.name === '' ? element.id : element.name}'); 
                                $('#messageBadge').text('${symbol}'); 
                                $('#messageBadge').attr('class', 'badge badge-pill badge-${color}'); 
                                $('#messageText').text('${message}'); 
                                $('#messageModal').modal('show');">
                            <span class="badge badge-pill badge-${color}">${symbol}</span>
                        </span>`)
            });

            $('#elements').append(`<tr>
                <th scope="row">${element.name === '' ? element.id : element.name}</th>
                <td>${element.type}</td>
                <td>${element.incoming}</td>
                <td>${element.outgoing}</td>
                <td>${color}</td>
                <td>${message}</td>
            </tr>`);
        }

        const measured = QualiBPMNUtil.measureSyntacticQuality(evaluated);

        const colors = {
            'low': 'danger',
            'medium': 'warning',
            'high': 'success'
        };

        $('#quality').append(`<tr>
            <th scope="row">${evaluated.name}</th>
            <th scope="row">${measured.validity.crisp.toFixed(2)} 
                <span class="badge badge-pill badge-${colors[measured.validity.linguistic]}" style="font-size: 1rem;">
                    ${measured.validity.linguistic}</span></th>
            <th scope="row">${measured.completeness.crisp.toFixed(2)} 
                <span class="badge badge-pill badge-${colors[measured.completeness.linguistic]}" style="font-size: 1rem;">
                    ${measured.completeness.linguistic}</span></th>
            <th scope="row">${measured.redundancy.crisp.toFixed(2)} 
                <span class="badge badge-pill badge-${colors[measured.redundancy.linguistic]}" style="font-size: 1rem;">
                    ${measured.redundancy.linguistic}</span></th>
        </tr>`);
    }
};

/**
 * Load sample diagram.
 */
$(document).ready(() => {
    const url =
        'https://raw.githubusercontent.com/freebpmnquality/cloud-services/main/analytics/samples/02-start-events.bpmn';

    bpmn = QualiBPMNUtil.getBPMNByURL(url);

    showBPMNDiagram(bpmn);
});