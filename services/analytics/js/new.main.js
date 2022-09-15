var recentBPMNModels = [];
var modelNamesIndex = [];

const displayRecentBPMNModels = function(activeModelName) {
    $("#recent-models").empty();

    for (let i = recentBPMNModels.length - 1; i >= 0; i--) {
        const modelName = recentBPMNModels[i].name;
        const isActive = (activeModelName === modelName) ? "active" : "";

        $("#recent-models").append(`
            <a href="javascript:void(0);" class="list-group-item list-group-item-action ${isActive} recent-item mt-1" data-toggle="list" style="border-radius: 1rem;" onclick="loadRecentBPMNModel('${modelName}');"><span class="badge badge-pill badge-info">Model</span> <small>${modelName}</small></a>`);
    }
};

const loadRecentBPMNModel = function(recentModelName) {
    for (let i = 0; i < recentBPMNModels.length; i++) {
        const modelName = recentBPMNModels[i].name;

        if (recentModelName === modelName) {
            lastFileName = modelName;

            if (uploadedFiles.includes(modelName)) {
                $('#file-name').html('<span class="badge badge-pill badge-info">Model</span> ' + modelName);
            } else {
                $('#file-name').html(`<span class="badge badge-pill badge-info">Model</span> <a href="${modelName}" target="_blank">${modelName}</a><br><a role="button" class="btn btn-sm btn-primary mt-2" style="border-radius: 1rem; font-weight: bold;" href="https://cloudfreebpmnquality.herokuapp.com/finance/index.html?doc=${modelName}" target="_blank">Estimate cost</a>`);
            }

            const loadedModel = recentBPMNModels[i].content;

            editor = loadedModel;

            let bpmnXML = editor;

            defineXMLNamespace(bpmnXML);
            $("#bpmnLink").val("");

            analyzeDoc_Click();

            document.dispatchEvent(readFileEvent);

            break;
        }
    }
};

const toggleDark = () => {
    $('html').attr('style', '-webkit-filter: invert(100%); background-color: black;');
};

const toggleLight = () => {
    $('html').attr('style', '-webkit-filter: invert(0%); background-color: white;');
};

document.addEventListener("eReadFile", function(e) {
    const loadedModel = editor;
    const modelName = lastFileName;

    if (!modelNamesIndex.includes(modelName)) {
        recentBPMNModels.push({
            "name": modelName,
            "content": loadedModel
        });

        modelNamesIndex.push(modelName);
    }

    displayRecentBPMNModels(modelName);
});

$(document).ready(function() {
    for (const sample in sampleFileMapping) {
        recentBPMNModels.push({
            "name": sampleFileMapping[sample],
            "content": samples(sampleFileMapping[sample])
        });

        modelNamesIndex.push(sampleFileMapping[sample]);
        uploadedFiles.push(sampleFileMapping[sample]);
    }

    displayRecentBPMNModels(recentBPMNModels[recentBPMNModels.length - 1].name);
});