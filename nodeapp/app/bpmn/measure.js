function originalMismatch(processStructure) {
    let result = 0;

    for (let gatewayType in processStructure.splits) {
        result += Math.abs(processStructure.splits[gatewayType]['arcs'] - processStructure.joins[gatewayType]['arcs']);
    }

    return result;
}

function modifiedMismatch(processStructure) {
    let result = 0;

    for (let gatewayType in processStructure.splits) {
        result += Math.max(Math.abs(processStructure.splits[gatewayType]['nodes'] - processStructure.joins[gatewayType]['nodes']),
            Math.abs(processStructure.splits[gatewayType]['arcs'] - processStructure.joins[gatewayType]['arcs']));
    }

    for (let gatewayType in processStructure.uncertainties) {
        result += processStructure.uncertainties[gatewayType];
    }

    return result;
}

module.exports.originalMismatch = originalMismatch;
module.exports.modifiedMismatch = modifiedMismatch;