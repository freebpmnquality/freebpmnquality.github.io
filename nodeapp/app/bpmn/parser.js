function getNamespaces(xmlModel) {
    if (xmlModel.includes('<definitions')) {
        return '';
    }

    let matched = xmlModel.match(/<[a-z]*:definitions/gi);

    if (matched !== null && matched.length > 0) {
        let xmlns = matched[0];
        xmlns = xmlns.replace('<', '').replace(':definitions', '');
        return xmlns;
    }

    return '';
}

function getStructure(xmlModel, namespace) {
    let modelStructure = {};
    let DOMParser = require('xmldom').DOMParser;
    xmlModel = new DOMParser().parseFromString(xmlModel, 'text/xml');
    let processList = xmlModel.getElementsByTagName(namespace + 'process');

    for (let k = 0; k < processList.length; k++) {
        let splits = {};
        let joins = {};
        let uncertainties = {};
        let process = processList[k].childNodes;
        modelStructure[k] = { splits: {}, joins: {} };

        for (let i = 0; i < process.length; i++) {
            if (process[i].nodeName.toLowerCase().includes('gateway'.toLowerCase())) {
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
                    if (uncertainties[process[i].nodeName] === undefined) {
                        uncertainties[process[i].nodeName] = 1;
                    } else {
                        uncertainties[process[i].nodeName]++;
                    }
                }
            }
        }

        modelStructure[k]['splits'] = splits;
        modelStructure[k]['joins'] = joins;
        modelStructure[k]['uncertainties'] = uncertainties;
    }

    return modelStructure;
}

function parse(xmlModel) {
    let namespace = getNamespaces(xmlModel);

    if (namespace.length > 1) {
        namespace = namespace + ':';
    }

    return getStructure(xmlModel, namespace);
}

module.exports.parse = parse;