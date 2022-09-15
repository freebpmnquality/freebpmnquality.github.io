var sampleFileMapping = {
    tasks: '01-tasks.bpmn',
    startEvents: '02-start-events.bpmn',
    endEvents: '03-end-events.bpmn',
    intermediateEvents: '04-intermediate-events.bpmn',
    gateways: '05-gateways.bpmn',
    activitiesSemantics: '06-activities-semantics.bpmn'
};

var samples = (fileName) => {
    const prefix = 'https://raw.githubusercontent.com/freebpmnquality/freebpmnquality.github.io/master/samples/';

    return $.ajax({
        type: 'GET',
        url: prefix + fileName,
        async: false
    }).responseText;
};