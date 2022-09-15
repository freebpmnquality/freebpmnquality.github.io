let bpmnXML = null;

const viewer = new BpmnJS({ container: '#canvas' });

let coloredNodes = [];

let overlays = null;

const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const redirectTo = (url) => {
    window.location.replace(url);
};

const openBPMNFile = () => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        const file = e.target.files[0];

        readFile(file);
    }

    input.click();
};

const readFile = (file) => {
    const reader = new FileReader();

    $('#modelFile').html('<span class="badge badge-pill badge-info">Model</span> ' + file.name);

    reader.readAsText(file);

    reader.onload = function() {
        bpmnXML = reader.result;

        scaleDiagram();
    };
};

const setHourlyWage = () => {
    const hourlyWage = Number.parseInt($('#hourlyWage').val().trim());

    if (hourlyWage && !Number.isNaN(hourlyWage)) {
        FinBPMNUtil.HOURLY_WAGE = hourlyWage;

        scaleDiagram();

        alert('The cost has been recalculated!');
    }
};

const scaleDiagram = () => {
    $('#canvas').height(Number.parseInt($('#slider').val()));

    viewer.importXML(bpmnXML, function(err) {
        if (err) {
            $('#canvas').append('<div class="alert alert-danger bpmn-warning">' + err + '</div>');
        } else {
            const canvas = viewer.get('canvas');

            canvas.zoom('fit-viewport');

            const overlays = viewer.get('overlays');

            estimateCost(overlays);
        }
    });
};

const colorNode = (elementId, overlays, isCorrect) => {
    if (coloredNodes.includes(elementId)) {
        return;
    }

    let cost = '$';
    let status = 'success';
    let tooltip = '';

    if (!isCorrect) {
        cost = '$$$';
        status = 'danger';

        const bpmnLinkParam = getParameterByName('doc');
        let link = 'https://cloudfreebpmnquality.herokuapp.com/analytics/'

        if (bpmnLinkParam) {
            link += '?doc=' + bpmnLinkParam;
        }

        tooltip = `</span><span class="tiptext">This modeling mistake can lead to extra costs. <a href="${link}" target="_blank" style="font-weight: bold;">Why?</a></span>`;
    }

    overlays.add(elementId, {
        position: { top: -10, left: -10 },
        html: $('<div class="highlight-overlay">').html(`<span class="badge badge-pill badge-${status}">${cost}${tooltip}`)
    });

    coloredNodes.push(elementId);
}

const estimateCost = (overlays) => {
    coloredNodes = [];

    $('#detail-estimation').empty();

    const warningsList = QualiBPMNUtilPlainOld.analyzeBPMN(bpmnXML);

    for (const warningsObj in warningsList) {
        const warnings = warningsList[warningsObj].data;

        for (const element in warnings.elementData) {
            colorNode(warnings.elementData[element].id, overlays, warnings.elementData[element].isCorrect);
        }

        $('#detail-estimation').append(`<div class="col mb-4">
            <div class="card" style="border-radius: 1rem;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <h5 style="font-weight: bold;">"${warningsList[warningsObj].process}" process</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <small class="text-center">Defects</small>
                            <div class="card" style="border-radius: 1rem;">
                                <div class="card-body" id="faults-${warningsList[warningsObj].id}"></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <small class="text-center">Efforts ratio</small>
                            <div class="card" style="border-radius: 1rem;">
                                <div class="card-body" id="summ-${warningsList[warningsObj].id}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <small class="text-center">Efforts growth</small>
                            <div class="card" style="border-radius: 1rem;">
                                <div class="card-body" id="data-${warningsList[warningsObj].id}"></div>
                            </div>
                        </div>
                        <div class="col-sm-12 mt-2" id="text-${warningsList[warningsObj].id}"></div>
                    </div>
                </div>
            </div>
        </div>`);

        google.charts.setOnLoadCallback(() => {
            // Line chart
            var columnData = new google.visualization.DataTable();

            columnData.addColumn('string', 'Stage');
            columnData.addColumn('number', 'Dev.');
            columnData.addColumn('number', 'Fix.');

            var processLengthSum = 0;
            var countDefectsSum = 0;

            for (var warning in warningsList) {
                processLengthSum += warningsList[warning].data.processLength();
                countDefectsSum += warningsList[warning].data.countDefects();
            }

            let generalAnalysis = `Total efforts by all considered business processes may be `;

            for (var stage in FinBPMNUtil.PROJECT_STAGES) {
                const dev = FinBPMNUtil.calculateEfforts(processLengthSum) * FinBPMNUtil.PROJECT_STAGES[stage].mult;
                const fix = FinBPMNUtil.calculateEfforts(countDefectsSum) * FinBPMNUtil.PROJECT_STAGES[stage].mult;

                columnData.addRows([
                    [FinBPMNUtil.PROJECT_STAGES[stage].name, dev, fix]
                ]);

                const total = dev + fix;

                const devMoney = dev * FinBPMNUtil.HOURLY_WAGE;
                const fixMoney = fix * FinBPMNUtil.HOURLY_WAGE;

                const totalMoney = total * FinBPMNUtil.HOURLY_WAGE;

                generalAnalysis += `<b>${dev.toFixed(2)} person-hours (≈ $${devMoney.toFixed(2)})</b> for implementation plus <b>${fix.toFixed(2)} person-hours (≈ $${fixMoney.toFixed(2)})</b> for defects fixing at the <b>${FinBPMNUtil.PROJECT_STAGES[stage].name}</b> stage (<b>${total.toFixed(2)} person-hours (≈ $${totalMoney.toFixed(2)})</b> in total), `;
            }

            new google.visualization.SteppedAreaChart(document.getElementById('data-all')).draw(columnData, {
                isStacked: true,
                vAxis: {
                    title: 'Person-hours',
                    logScale: false
                },
                hAxis: {
                    title: 'Project stage'
                },
                legend: {
                    position: 'top'
                },
                colors: ['#58508d', '#ff6e54'],
                pointsVisible: true
            });

            // Bar chart
            var barData = new google.visualization.DataTable();

            barData.addColumn('string', 'Comparison');
            barData.addColumn('number', 'Dev.');
            barData.addColumn('number', 'Fix.');

            barData.addRows([
                [
                    'Person-hours',
                    FinBPMNUtil.calculateEfforts(processLengthSum) * FinBPMNUtil.PROJECT_STAGES[3].mult,
                    FinBPMNUtil.calculateEfforts(countDefectsSum) * FinBPMNUtil.PROJECT_STAGES[3].mult
                ]
            ]);

            new google.visualization.BarChart(document.getElementById('summ-all')).draw(barData, {
                legend: {
                    position: 'top'
                },
                colors: ['#58508d', '#ff6e54'],
                isStacked: true
            });

            const processLengthPercent = (processLengthSum / (processLengthSum + countDefectsSum)) * 100;
            const countDefectsPercent = (countDefectsSum / (processLengthSum + countDefectsSum)) * 100;

            generalAnalysis += `which in total results in <b>${processLengthPercent.toFixed(2)}%</b> of <span style="color: #2f4b7c;"><b>implementation</b></span> efforts and <b>${countDefectsPercent.toFixed(2)}%</b> of <span style="color: #ef5675;"><b>defects fixing</b></span> efforts.`;

            $('#text-all').html(generalAnalysis);
        });

        google.charts.setOnLoadCallback(() => {
            for (var warning in warningsList) {
                // Column chart
                var columnData = new google.visualization.DataTable();

                columnData.addColumn('string', 'Stage');
                columnData.addColumn('number', 'Dev.');
                columnData.addColumn('number', 'Fix.');

                let processAnalysis = `Efforts by <b>"${warningsList[warning].process}"</b> business process may be `;

                for (var stage in FinBPMNUtil.PROJECT_STAGES) {
                    const dev = FinBPMNUtil.calculateEfforts(warningsList[warning].data.processLength()) * FinBPMNUtil.PROJECT_STAGES[stage].mult;
                    const fix = FinBPMNUtil.calculateEfforts(warningsList[warning].data.countDefects()) * FinBPMNUtil.PROJECT_STAGES[stage].mult;

                    columnData.addRows([
                        [FinBPMNUtil.PROJECT_STAGES[stage].name, dev, fix]
                    ]);

                    const total = dev + fix;

                    const devMoney = dev * FinBPMNUtil.HOURLY_WAGE;
                    const fixMoney = fix * FinBPMNUtil.HOURLY_WAGE;

                    const totalMoney = total * FinBPMNUtil.HOURLY_WAGE;

                    processAnalysis += `<b>${dev.toFixed(2)} person-hours (≈ $${devMoney.toFixed(2)})</b> for implementation plus <b>${fix.toFixed(2)} person-hours (≈ $${fixMoney.toFixed(2)})</b> for defects fixing at the <b>${FinBPMNUtil.PROJECT_STAGES[stage].name}</b> stage (<b>${total.toFixed(2)} person-hours (≈ $${totalMoney.toFixed(2)})</b> in total), `;
                }

                new google.visualization.SteppedAreaChart(document.getElementById('data-' + warningsList[warning].id)).draw(columnData, {
                    isStacked: true,
                    vAxis: {
                        title: 'Person-hours'
                    },
                    hAxis: {
                        title: 'Project stage'
                    },
                    legend: {
                        position: 'top'
                    },
                    colors: ['#2f4b7c', '#ef5675']
                });

                // Pie chart
                var pieData = new google.visualization.DataTable();

                pieData.addColumn('string', 'Type');
                pieData.addColumn('number', 'Cost');

                pieData.addRows([
                    [
                        'Dev.',
                        FinBPMNUtil.calculateEfforts(warningsList[warning].data.processLength()) * FinBPMNUtil.PROJECT_STAGES[0].mult
                    ],
                    [
                        'Fix.',
                        FinBPMNUtil.calculateEfforts(warningsList[warning].data.countDefects()) * FinBPMNUtil.PROJECT_STAGES[0].mult
                    ]
                ]);

                new google.visualization.PieChart(document.getElementById('summ-' + warningsList[warning].id)).draw(pieData, {
                    legend: {
                        position: 'top'
                    },
                    colors: ['#2f4b7c', '#ef5675'],
                    pieHole: 0.4
                });

                // Bar chart
                var barData = new google.visualization.DataTable();

                barData.addColumn('string', 'Comparison');
                barData.addColumn('number', 'Correct');
                barData.addColumn('number', 'Fault');

                const correctElements = warningsList[warning].data.processLength() - warningsList[warning].data.countDefects();

                barData.addRows([
                    [
                        'Elements',
                        correctElements,
                        warningsList[warning].data.countDefects()
                    ]
                ]);

                new google.visualization.BarChart(document.getElementById('faults-' + warningsList[warning].id)).draw(barData, {
                    legend: {
                        position: 'top'
                    },
                    colors: ['#2f4b7c', '#ef5675'],
                    isStacked: true
                });

                const processLengthPercent = (warningsList[warning].data.processLength() /
                    (warningsList[warning].data.processLength() + warningsList[warning].data.countDefects())) * 100;
                const countDefectsPercent = (warningsList[warning].data.countDefects() /
                    (warningsList[warning].data.processLength() + warningsList[warning].data.countDefects())) * 100;

                processAnalysis += `which in total results in <b>${processLengthPercent.toFixed(2)}%</b> of <span style="color: #2f4b7c;"><b>implementation</b></span> efforts and <b>${countDefectsPercent.toFixed(2)}%</b> of <span style="color: #ef5675;"><b>defects fixing</b></span> efforts.`;

                $('#text-' + warningsList[warning].id).html(processAnalysis);
            }
        });
    }
};

$(document).ready(() => {
    $('#hourlyWage').val(FinBPMNUtil.HOURLY_WAGE);

    let bpmnLinkParam = getParameterByName('doc');

    if (!bpmnLinkParam) {
        bpmnLinkParam = 'https://raw.githubusercontent.com/freebpmnquality/freebpmnquality.github.io/master/samples/01-tasks.bpmn';
    }

    $("#modelFile").html(`<span class="badge badge-pill badge-info">Model</span> <a href="${bpmnLinkParam}" target="_blank">${bpmnLinkParam}</a><br><a role="button" class="btn btn-sm btn-primary mt-2" style="border-radius: 1rem; font-weight: bold;" href="https://cloudfreebpmnquality.herokuapp.com/analytics/index.html?doc=${bpmnLinkParam}" target="_blank">Analyze model</a>`);

    bpmnXML = QualiBPMNUtilPlainOld.getBPMNByURL(bpmnLinkParam);

    scaleDiagram();
});