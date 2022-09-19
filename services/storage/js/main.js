// ============================================== Objects ==============================================

/**
 * Contract stub.
 */
const EtherBPMNContract = {
    _name: 'EtherBPMN',
    _symbol: 'ETHBPMN',

    _collection: null,
    _models: [],

    // Fetch content by link
    _oracle: (link) => {
        return $.ajax({
            type: this.GET_REQUEST,
            url: link,
            async: false
        }).responseText;
    },

    // Load collection data by URL
    _load: (collectionURL) => {
        EtherBPMNContract._loadRaw(EtherBPMNContract._oracle(collectionURL));
    },

    // Load collection data from file
    _loadRaw: (rawCollectionData) => {
        // clear contract data
        EtherBPMNContract._collection = null;
        EtherBPMNContract._models = [];

        // decode collection data
        const collectionData = JSON.parse(atob(rawCollectionData));

        EtherBPMNContract._collection = collectionData;
        const models = JSON.parse(collectionData.data);

        // check collection validity
        const givenHash = collectionData.hash;

        let calculatedHash = null;

        if (collectionData.parent && collectionData.parentHash) {
            calculatedHash = CryptoJS.SHA256(collectionData.data + collectionData.timestamp + collectionData.parent + collectionData.parentHash).toString();
        } else {
            calculatedHash = CryptoJS.SHA256(collectionData.data + collectionData.timestamp).toString();
        }

        // compare hash values
        if (givenHash === calculatedHash) {
            for (const j in models) {
                // set model timestamp
                models[j].push(collectionData.timestamp);

                // set model owner
                models[j].push(collectionData.owner ? collectionData.owner : 'N/A');

                // add model to the list
                EtherBPMNContract._models.push(models[j]);
            }
        } else {
            throw new Error(`Collection was tampered: '${calculatedHash}' hash expected but '${givenHash}' given.`);
        }
    },

    methods: {
        name: () => {
            return {
                call: (options, callback) => {
                    callback(null, EtherBPMNContract._name);
                }
            };
        },

        symbol: () => {
            return {
                call: (options, callback) => {
                    callback(null, EtherBPMNContract._symbol);
                }
            };
        },

        totalSupply: () => {
            return {
                call: (options, callback) => {
                    callback(null, EtherBPMNContract._models.length);
                }
            };
        },

        tokenURI: (tokenId) => {
            return {
                call: (options, callback) => {
                    if (tokenId >= 0 && tokenId <= EtherBPMNContract._models.length - 1) {
                        callback(null, JSON.stringify({
                            // ERC721 properties
                            name: EtherBPMNContract._models[tokenId][0],
                            description: EtherBPMNContract._models[tokenId][2],
                            image: '/services/storage/img/favicon.png',

                            // Extra meta-data
                            link: EtherBPMNContract._models[tokenId][1],
                            industry: EtherBPMNContract._models[tokenId][3],
                            timestamp: EtherBPMNContract._models[tokenId][4]
                        }));
                    } else {
                        callback(true, null);
                    }
                }
            };
        },

        ownerOf: (tokenId) => {
            return {
                call: (options, callback) => {
                    if (tokenId >= 0 && tokenId <= EtherBPMNContract._models.length - 1) {
                        callback(null, EtherBPMNContract._models[tokenId][5]);
                    } else {
                        callback(true, null);
                    }
                }
            };
        }
    }
};

/**
 * Data-access object for the contract.
 */
const EtherBPMNContractDAO = {
    contract: EtherBPMNContract,

    /**
     * Displays total models.
     */
    modelsCount: function() {
        EtherBPMNContractDAO.contract.methods.totalSupply().call(null, function(err, data) {
            if (err === null) {
                $("#total-models").text(data);
            } else {
                alert(err);
            }
        });
    },

    /**
     * Displays all models from the collection.
     */
    readAllModels: function() {
        EtherBPMNContractDAO.searchModels(null);
    },

    /**
     * Look through models by text fields.
     */
    searchModels: function(searchText) {
        $("#models-list").empty();
        $("#selected-model").empty();

        EtherBPMNContractDAO.contract.methods.totalSupply().call(null, function(err, totalSupply) {
            if (err === null) {
                let foundModels = 0;

                for (let tokenId = 0; tokenId < totalSupply; tokenId++) {
                    EtherBPMNContractDAO.contract.methods.tokenURI(tokenId).call(null, function(err, tokenURI) {
                        if (err === null) {
                            EtherBPMNContractDAO.contract.methods.ownerOf(tokenId).call(null, function(err, ownerOf) {
                                if (err === null) {
                                    const tokenData = JSON.parse(tokenURI);

                                    const title = tokenData.name;
                                    const link = tokenData.link;
                                    const annotation = tokenData.description;
                                    const industry = tokenData.industry;
                                    const timestamp = tokenData.timestamp;
                                    const owner = ownerOf;

                                    let showModel = true;

                                    if (searchText !== null) {
                                        showModel = false;

                                        if (matchQuery(title, searchText) === 1 ||
                                            matchQuery(annotation, searchText) === 1 ||
                                            matchQuery(industry, searchText) === 1) {

                                            showModel = true;
                                            foundModels++;
                                        }
                                    }

                                    if (showModel) {
                                        $("#models-list").append(`<a href="javascript:void(0);" class="list-group-item list-group-item-action mt-1" onclick="showModelData('${title}', '${link}', \`${annotation}\`, '${industry}', '${timestamp}', '${owner}');" style="border-radius: 1rem; word-break: break-all;">
                                            <span class="badge badge-pill badge-info">Model</span>
                                            <small>${title}</small>
                                        </a>`);
                                    }
                                } else {
                                    alert(err);
                                }
                            });
                        } else {
                            alert(err);
                        }
                    });
                }

                if (searchText && foundModels === 0) {
                    $("#models-list").append(`<div class="alert alert-warning" role="alert" style="border-radius: 1rem; margin-bottom: 0rem;">Nothing was found for "${searchText}".</div>`);
                }
            } else {
                alert(err);
            }
        });
    }
};

// ============================================== Service functions ==============================================

/**
 * Match a model property and a search query.
 */
const matchQuery = (property, query) => {
    // tokenize property
    const propertyTokens = property.split(/\s+/).map(element => element.toLowerCase());

    // tokenize query
    const queryTokens = query.split(/\s+/).map(element => element.toLowerCase());

    // matched query tokens to a property
    let queryTokensMatch = Array(queryTokens.length).fill(0);

    for (const i in propertyTokens) {
        for (const j in queryTokens) {

            // compare property tokens to the query tokens
            if (propertyTokens[i].toLowerCase().includes(queryTokens[j].toLowerCase()) ||
                queryTokens[j].toLowerCase().includes(propertyTokens[i].toLowerCase())) {
                queryTokensMatch[j] = 1;
            }
        }
    }

    // calculate matching score
    const score = queryTokensMatch.reduce((a, b) => a + b, 0) / queryTokens.length;

    return score;
};

/**
 * Displays details about a certain model.
 */
const showModelData = function(title, link, annotation, industry, timestamp, owner) {
    timestamp = new Date(Number.parseInt(timestamp)).toLocaleString();

    const evaluationResults = EtherBPMNUtil.evaluateModel(QualiBPMNUtilPlainOld.getBPMNByURL(link));

    const modelQuality = evaluationResults.quality;
    const modelValue = evaluationResults.value;

    // Display the model information
    $("#view-model").modal("show");
    $("#selected-model").html(`<form>
        <div class="form-group row">
            <label for="model-title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="model-title" readonly value="${title}" style="border-radius: 1rem;">
            </div>
        </div>
        <div class="form-group row">
            <label for="model-annotation" class="col-sm-2 col-form-label">Annotation</label>
            <div class="col-sm-10">
                <textarea class="form-control" rows="3" id="model-annotation" readonly style="border-radius: 1rem;">${annotation}</textarea>
            </div>
        </div>
        <div class="form-group row">
            <label for="model-industry" class="col-sm-2 col-form-label">Industry</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="model-industry" readonly value="${industry}" style="border-radius: 1rem;">
            </div>
        </div>
        <div class="form-group row">
            <label for="model-quality" class="col-sm-2 col-form-label">Quality</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="model-quality" readonly value="${modelQuality.toFixed(2)}%" style="border-radius: 1rem;">
            </div>
        </div>
        <div class="form-group row">
            <label for="model-value" class="col-sm-2 col-form-label">Exchange rate</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="model-value" readonly value="$${modelValue.toFixed(2)}" style="border-radius: 1rem;">
            </div>
        </div>
        <div class="form-group row">
            <label for="model-timestamp" class="col-sm-2 col-form-label">Timestamp</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="model-timestamp" readonly value="${timestamp}" style="border-radius: 1rem;">
            </div>
        </div>
        <div class="form-group row">
            <label for="model-owner" class="col-sm-2 col-form-label">Owner</label>
            <div class="col-sm-10">
                <span class="form-control" style="border-radius: 1rem;" readonly>${owner}</span>
            </div>
        </div>
        <button type="button" class="btn btn-sm btn-success" onclick="downloadModel('${link}', '${title}');" style="border-radius: 1rem; font-weight: bold;">Download</button>
        <a role="button" class="btn btn-sm btn-warning" href="/services/analytics/index.html?doc=${link}" target="_blank" style="border-radius: 1rem; font-weight: bold;">Analyze model</a>
        <a role="button" class="btn btn-sm btn-warning"  href="/services/finance/index.html?doc=${link}" target="_blank" style="border-radius: 1rem; font-weight: bold;">Estimate cost</a>
    </form>`);
};

/**
 * Downloads the BPMN 2.0 file.
 */
const downloadModel = (link, title) => {
    $.ajax(link, { dataType: "text" }).done(async function(xml) {
        const element = document.createElement('a');
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(xml));
        element.setAttribute("download", title + ".bpmn");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });
};

/**
 * Search the models.
 */
const searchModel = () => {
    const searchText = $("#search-text").val();

    if (searchText !== undefined && searchText !== null && searchText.length > 0) {
        EtherBPMNContractDAO.searchModels(searchText);
    } else {
        EtherBPMNContractDAO.readAllModels();
    }
};

/**
 * Shows collection uploaded by URL or from file.
 */
const processExternalCollection = () => {
    EtherBPMNContractDAO.modelsCount();
    searchModel();
    let parentInfo = '';

    // get parent collection info if exists
    if (EtherBPMNContractDAO.contract._collection.parent) {
        parentInfo = `<a href="/services/storage/index.html?collection=${EtherBPMNContractDAO.contract._collection.parent}" target="_blank"><small>Parent collection</small></a>`;
    }

    $('#collection-status').html(`<div class="alert alert-success" role="alert" style="border-radius: 1rem;">
        Collection data successfully loaded!<br>${parentInfo}
    </div>`);
};

/**
 * Load collection by link.
 */
const loadCollection = () => {
    $('#loadingSection').show('slow', () => {
        try {
            const collectionURL = $('#collectionURL').val().trim();

            if (collectionURL) {
                EtherBPMNContractDAO.contract._load(collectionURL);
                processExternalCollection();
            }
        } catch (err) {
            $('#collection-status').html(`<div class="alert alert-danger" role="alert" style="border-radius: 1rem;">
                Cannot load collection data!<br><small>${err.message}</small>
            </div>`);
        } finally {
            $('#loadingSection').hide();
        }
    });
};

/**
 * Open file selection dialog.
 */
const readFile = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = function() {
        const fileContent = reader.result;

        if (fileContent) {
            $('#loadingSection').show('slow', () => {
                try {
                    EtherBPMNContractDAO.contract._loadRaw(fileContent);
                    processExternalCollection();

                    $('#collectionURL').val(`etherbpmn://${file.name}`);
                } catch (err) {
                    $('#collection-status').html(`<div class="alert alert-danger" role="alert" style="border-radius: 1rem;">
                        Cannot load collection data!<br><small>${err.message}</small>
                    </div>`);
                } finally {
                    $('#loadingSection').hide();
                }
            });
        }
    };
};

/**
 * Open collection from file.
 */
const uploadCollection = () => {
    try {
        const input = document.createElement('input');
        input.type = 'file';

        input.onchange = e => {
            const file = e.target.files[0];
            readFile(file);
        }

        input.click();
    } catch (err) {
        $('#collection-status').html(`<div class="alert alert-danger" role="alert" style="border-radius: 1rem;">
            Cannot load collection data!<br><small>${err.message}</small>
        </div>`);
    }
};

/**
 * Download collection file to device.
 */
const downloadCollectionFile = (_hash, collectionData) => {
    const element = document.createElement('a');
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(collectionData));
    element.setAttribute("download", _hash + '.etherbpmn');
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

/**
 * Fetch remote collection.
 */
const fetchCollection = () => {
    try {
        const collectionURL = $('#collectionURL').val().trim();

        if (collectionURL) {
            const rawCollectionData = EtherBPMNContract._oracle(collectionURL);
            const collectionData = JSON.parse(atob(rawCollectionData));

            downloadCollectionFile(collectionData.hash, rawCollectionData);
        }
    } catch (err) {
        $('#collection-status').html(`<div class="alert alert-danger" role="alert" style="border-radius: 1rem;">
            Cannot load collection data!<br><small>${err.message}</small>
        </div>`);
    }
}

/**
 * Share collection using the link as GET parameter.
 */
const shareCollection = () => {
    $('#shareModal').modal('show');

    const collectionURL = $('#collectionURL').val().trim();

    if (collectionURL) {
        $('#collectionLink').val('/services/storage/index.html?collection=' + collectionURL);
    }
};

/**
 * Copy link to clipboard.
 */
const copyToClipboard = () => {
    const sharedLink = document.querySelector("#collectionLink");
    sharedLink.select();
    document.execCommand("copy");
};

// Page-scope list of pending models
var STAGING_COLLECTION = [];

/**
 * Add model to the staging collection.
 */
const createModel = () => {
    const newLink = $("#create-link").val().trim();

    if (newLink) {
        try {
            // preliminary check if BPMN 2.0 file can be processed
            QualiBPMNUtilPlainOld.analyzeBPMN(QualiBPMNUtilPlainOld.getBPMNByURL(newLink));

            if (STAGING_COLLECTION.includes(newLink)) {
                throw new Error(`${newLink} model is already pending.`);
            }

            STAGING_COLLECTION.push(newLink);
            showStagingCollection();

            $("#create-link").val('');
        } catch (err) {
            alert(`Cannot process the BPMN 2.0 file! ${err.message}`);
        }
    }
};

/**
 * Clear pending models.
 */
const clearPending = () => {
    STAGING_COLLECTION = [];
    showStagingCollection();
};

/**
 * Display pending models.
 */
const showStagingCollection = () => {
    let stagingModelsList = '';

    for (const i in STAGING_COLLECTION) {
        // default model properties
        let newName = STAGING_COLLECTION[i];
        let newAnnotation = "Model is accessible at " + STAGING_COLLECTION[i];
        let newIndustry = "BPMN";

        const ID = CryptoJS.SHA256(STAGING_COLLECTION[i]).toString();

        // read already set properties
        if ($("#new-name-" + ID).length) newName = $("#new-name-" + ID).val().trim();
        if ($("#new-annotation-" + ID).length) newAnnotation = $("#new-annotation-" + ID).val().trim();
        if ($("#new-industry-" + ID).length) newIndustry = $("#new-industry-" + ID).val().trim();

        // replace missing properties with default
        if (!newName) newName = STAGING_COLLECTION[i];
        if (!newAnnotation) newAnnotation = "Model is accessible at " + STAGING_COLLECTION[i];
        if (!newIndustry) newIndustry = "BPMN";

        stagingModelsList += `<li class="list-group-item list-group-item-action mb-1" style="border-radius: 1rem; word-break: break-all;">
            <span class="badge badge-pill badge-info">Model</span>
            <small>${STAGING_COLLECTION[i]}</small>
            <br>
            <input type="text" class="form-control form-control-sm mt-2" id="new-name-${ID}" placeholder="Name..." style="border-radius: 1rem;" value="${newName}">
            <small class="form-text text-muted">Model name</small>
            <input type="text" class="form-control form-control-sm mt-2" id="new-annotation-${ID}" placeholder="Annotation..." style="border-radius: 1rem;" value="${newAnnotation}">
            <small class="form-text text-muted">Model annotation</small>
            <input type="text" class="form-control form-control-sm mt-2" id="new-industry-${ID}" placeholder="Industry..." style="border-radius: 1rem;" value="${newIndustry}">
            <small class="form-text text-muted">Model industry</small>
            <a class="badge badge-pill badge-danger" href="javascript:void(0);" onclick="removePendingModel('${STAGING_COLLECTION[i]}');">Remove</a>
        </li>`;
    }

    $('#staging-models').empty();
    $('#staging-models').html(stagingModelsList);

    if (STAGING_COLLECTION.length === 0) {
        $('#staging-models').append(`<div class="alert alert-warning" role="alert" style="border-radius: 1rem; margin-bottom: 0rem;"><small>Models were not added yet...</small></div>`);
    }
};

/**
 * Remove pending model.
 */
const removePendingModel = (item) => {
    const index = STAGING_COLLECTION.indexOf(item);

    if (index !== -1) {
        STAGING_COLLECTION.splice(index, 1);
    }

    showStagingCollection();
};

/**
 * Build and download collection file.
 */
const downloadCollection = () => {
    try {
        const ownerPassphrase = $('#owner-id').val().trim();

        // validate passphrase
        if (ownerPassphrase.length < 64 || !(/^[a-zA-Z0-9]+$/i.test(ownerPassphrase))) {
            throw new Error('Use a phrase with at least 64 characters, letters, and numbers.');
        } else if (STAGING_COLLECTION.length > 0) {
            const models = [];

            // create model properties
            for (const i in STAGING_COLLECTION) {
                // default model properties
                let newName = STAGING_COLLECTION[i];
                let newAnnotation = "Model is accessible at " + STAGING_COLLECTION[i];
                let newIndustry = "BPMN";

                const ID = CryptoJS.SHA256(STAGING_COLLECTION[i]).toString();

                // read already set properties
                if ($("#new-name-" + ID).length) newName = $("#new-name-" + ID).val().trim();
                if ($("#new-annotation-" + ID).length) newAnnotation = $("#new-annotation-" + ID).val().trim();
                if ($("#new-industry-" + ID).length) newIndustry = $("#new-industry-" + ID).val().trim();

                // replace missing properties with default
                if (!newName) newName = STAGING_COLLECTION[i];
                if (!newAnnotation) newAnnotation = "Model is accessible at " + STAGING_COLLECTION[i];
                if (!newIndustry) newIndustry = "BPMN";

                // add model record to the collection
                models.push([
                    newName,
                    STAGING_COLLECTION[i],
                    newAnnotation,
                    newIndustry
                ]);
            }

            // prepare collection properties
            const _data = JSON.stringify(models);
            const _timestamp = Date.now();
            const _hash = CryptoJS.SHA256(_data + _timestamp).toString();
            const _owner = CryptoJS.SHA256(ownerPassphrase).toString();

            // collection data object
            const rawCollectionData = {
                data: _data,
                timestamp: _timestamp,
                hash: _hash,
                owner: _owner
            };

            // process parent
            const parentURL = $("#parent-link").val().trim();

            if (parentURL) {
                // preliminary check if parent collection can be processed
                const parentData = JSON.parse(atob(EtherBPMNContractDAO.contract._oracle(parentURL)));

                let parentHash = null;

                if (parentData.parent && parentData.parentHash) {
                    parentHash = CryptoJS.SHA256(parentData.data + parentData.timestamp + parentData.parent + parentData.parentHash).toString();
                } else {
                    parentHash = CryptoJS.SHA256(parentData.data + parentData.timestamp).toString();
                }

                // validate parent hash collection
                if (parentHash !== parentData.hash) {
                    throw new Error(`Parent collection was tampered: '${parentHash}' hash expected but '${parentData.hash}' given.`);
                }

                // append linking data
                rawCollectionData.parent = parentURL;
                rawCollectionData.parentHash = parentHash;

                // re-calculate current hash
                rawCollectionData.hash = CryptoJS.SHA256(_data + _timestamp + parentURL + parentHash).toString();
            }

            // encode collection data
            const collectionData = btoa(JSON.stringify(rawCollectionData));

            downloadCollectionFile(_hash, collectionData);
        } else {
            throw new Error('The collection is empty.');
        }
    } catch (err) {
        alert(`Cannot create new collection! ${err.message}`);
    }
};

/**
 * Generate secure passphrase.
 */
const generatePassphrase = () => {
    $('#owner-id').val(CryptoJS.SHA256(Math.random().toString() + Date.now().toString()).toString());
};

/**
 * Toggle passphrase input.
 */
const togglePassphrase = () => {
    var ownerPassphrase = document.getElementById("owner-id");

    if (ownerPassphrase.type === "password") {
        ownerPassphrase.type = "text";
    } else {
        ownerPassphrase.type = "password";
    }
}

/**
 * Access GET parameters of URL.
 */
const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, '\\$&');

    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

// ============================================== Loading ==============================================

$(document).ready(function() {
    $('#loadingSection').hide();

    const bpmnLinkParam = getParameterByName('collection');

    if (bpmnLinkParam) {
        $('#collectionURL').val(bpmnLinkParam);
    }

    const bpmnSearchParam = getParameterByName('q');

    if (bpmnSearchParam) {
        $('#search-text').val(bpmnSearchParam);
    }

    loadCollection();
});