var recentBPMNModels = [];
var modelNamesIndex = [];

const displayRecentBPMNModels = function() {
    $("#recent-models").empty();

    let num = 1;

    for (let i = recentBPMNModels.length - 1; i >= 0; i--) {
        const modelName = recentBPMNModels[i].name;

        $("#recent-models").append(`
            <a href="javascript:void(0);" class="list-group-item list-group-item-action recent-item" onclick="loadRecentBPMNModel('${modelName}');">
                <span class="badge badge-pill badge-info">${num}</span> <small>${modelName}</small>
            </a>
        `);

        num++;
    }
};

const loadRecentBPMNModel = function(recentModelName) {
    for (let i = 0; i < recentBPMNModels.length; i++) {
        const modelName = recentBPMNModels[i].name;

        if (recentModelName === modelName) {
            lastFileName = modelName;
            $("#file-name").text(modelName);

            const loadedModel = recentBPMNModels[i].content;

            editor.setValue("");
            editor.insert(loadedModel);

            let bpmnXML = editor.getValue();

            defineXMLNamespace(bpmnXML);
            $("#bpmnLink").val("");

            analyzeDoc_Click();

            document.dispatchEvent(readFileEvent);

            window.onbeforeunload = function(e) {
                return "Are you sure you want to leave this page? The changes you made will be lost.";
            };

            break;
        }
    }
};

document.addEventListener("eReadFile", function(e) {
    const loadedModel = editor.getValue();
    const modelName = lastFileName;

    if (modelNamesIndex.includes(modelName)) {
        const index = modelNamesIndex.indexOf(modelName);

        modelNamesIndex.splice(index, 1);
        recentBPMNModels.splice(index, 1);
    }

    recentBPMNModels.push({
        "name": modelName,
        "content": loadedModel
    });

    modelNamesIndex.push(modelName);

    displayRecentBPMNModels();
});