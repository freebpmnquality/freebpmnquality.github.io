function suggestChanges(processStructure) {
    let results = {};

    for (let gatewayType in processStructure.splits) {
        results[gatewayType] = {
            splits: {
                nodes: processStructure.splits[gatewayType]['nodes'] != processStructure.joins[gatewayType]['nodes'] &&
                    processStructure.splits[gatewayType]['nodes'] > 0 ? 1 : 0,
                arcs: processStructure.splits[gatewayType]['arcs'] != processStructure.joins[gatewayType]['arcs'] &&
                    processStructure.splits[gatewayType]['arcs'] > 0 ? 1 : 0
            },
            joins: {
                nodes: processStructure.splits[gatewayType]['nodes'] != processStructure.joins[gatewayType]['nodes'] &&
                    processStructure.joins[gatewayType]['nodes'] > 0 ? 1 : 0,
                arcs: processStructure.splits[gatewayType]['arcs'] != processStructure.joins[gatewayType]['arcs'] &&
                    processStructure.joins[gatewayType]['arcs'] > 0 ? 1 : 0
            }
        };
    }

    for (let gatewayType in processStructure.uncertainties) {
        if (results[gatewayType] === undefined) {
            results[gatewayType] = {};
        }

        results[gatewayType].uncertainties = processStructure.uncertainties[gatewayType] > 0 ? 1 : 0;
    }

    return results;
}

module.exports.suggestChanges = suggestChanges;