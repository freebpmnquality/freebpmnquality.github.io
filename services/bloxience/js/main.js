const LEDGER = new BloxienceChain();

let CHAIN_DATA_JSON = null;

const LEAVING_WARNING_MESSAGE = 'Are you sure to reset the blockchain? Your data will be lost!';
const LARGE_LINK_WARNING_MESSAGE = 'Oops! The link is too large (larger than 2048 characters) for sharing.';

const SERVICE_URL = '/services/bloxience/';

let FORM_DATA_FIELDS = [];

/**
 * Find the SHA256 hash value.
 */
const hashValue = (value) => CryptoJS.SHA256(value).toString().substring(0, 40);

/**
 * Add new block to the ledger.
 */
const addBlock = () => {
    const privateKey = $('#privateKey').val().trim();
    const blockData = $('#blockData').val().trim();

    if (privateKey && blockData) {
        const publicKey = hashValue(privateKey);
        const address = hashValue(publicKey);

        LEDGER.addNewBlock(
            new BloxienceBlock(
                LEDGER.blockchain.length, Date.now(), JSON.parse(blockData), null, address
            )
        );

        alert('New block has been added!');

        displayBlocks(LEDGER);

        $('#blockData').val('');
    } else {
        alert('Enter the private key and block data!');
    }
};

/**
 * Display and validate the ledger.
 */
const displayBlocks = (ledger) => {
    const publicKey = $('#publicKey').val().trim();

    $('#blocks').empty();

    const validBlocks = ledger.checkChainValidity();

    $('#status').text(`Valid blocks: ${validBlocks}/${ledger.blockchain.length}`);

    let fullChainData = '[';

    for (let i = ledger.blockchain.length - 1; i >= 0; i--) {
        const block = ledger.blockchain[i];
        const color = block.isValid ? 'success' : 'danger';

        const isVerified = (hashValue(publicKey) === block.sender) ? `<span class="badge badge-pill badge-light mt-1"><small>verified</small></span>` : '';

        const dateTimeLocal = new Date(block.timestamp).toLocaleString();

        $('#blocks').append(`<div class="alert alert-${color}" role="alert" id="block-${block.index}" style="border-radius: 1rem; overflow-wrap: break-word;">
            <small>
                Block: <kbd>${block.index}</kbd><br>
                Timestamp: <kbd>${dateTimeLocal}</kbd><br>
                Data: <kbd>${block.data}</kbd><br>
                Parent hash: <kbd>${block.precedingHash}</kbd> <kbd>(block ${block.index > 0 ? ledger.getBlockByHash(block.precedingHash).index : 'genesis'})</kbd><br>
                Hash: <kbd>${block.hash}</kbd><br>
                Sender: <kbd>${block.sender}</kbd> ${isVerified}<br>
            </small>
        </div>`);

        if (block.isValid) {
            fullChainData += `{\r\n\t"sender": "${block.sender}",\r\n\t"timestamp" : "${dateTimeLocal}",\r\n\t"data" : ${block.data}\r\n}`;

            if (i > 0) {
                fullChainData += ',\r\n';
            }
        }
    }

    fullChainData += ']';
    CHAIN_DATA_JSON = fullChainData;

    $('#chainDataFull').val(fullChainData);

    for (let i in FORM_DATA_FIELDS) {
        const fieldID = FORM_DATA_FIELDS[i];

        $('#' + fieldID).val('');
    }
};

/**
 * Reset the blockchain
 */
const resetBlockchain = () => {
    if (confirm(LEAVING_WARNING_MESSAGE)) {
        LEDGER.resetToGenesis();

        displayBlocks(LEDGER);
    }
};

/**
 * Generates the private key and the public key.
 */
const generateWallet = () => {
    const privateKey = CryptoJS.SHA256(Math.random().toString()).toString().substring(0, 40);
    const publicKey = hashValue(privateKey);
    const address = hashValue(publicKey);

    $('#privateKey').val(privateKey);
    $('#publicKey').val(publicKey);
    $('#address').val(address);
};

/**
 * Decrypts wallet using the private key.
 */
const decryptWallet = () => {
    const privateKey = $('#privateKey').val().trim();

    if (privateKey) {
        const publicKey = hashValue(privateKey);
        const address = hashValue(publicKey);

        $('#publicKey').val(publicKey);
        $('#address').val(address);
    } else {
        alert('Enter the private key!');
    }

    displayBlocks(LEDGER);
};

const clearWallet = () => {
    $('#privateKey').val('');
    $('#publicKey').val('');
    $('#address').val('');
};

/**
 * Download chain data.
 */
const downloadChain = () => {
    const privateKey = $('#privateKey').val().trim();
    const publicKey = hashValue(privateKey);
    const address = hashValue(publicKey);

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
        encodeURIComponent(JSON.stringify(LEDGER.blockchain)));
    element.setAttribute('download', 'BXNS-' + address + '-' + Date.now().toString() + '.bxns');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

/**
 * Download JSON data.
 */
const downloadJSONChain = () => {
    const privateKey = $('#privateKey').val().trim();
    const publicKey = hashValue(privateKey);
    const address = hashValue(publicKey);

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' +
        encodeURIComponent(CHAIN_DATA_JSON));
    element.setAttribute('download', 'JSON-' + address + '-' + Date.now().toString() + '.json');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

/**
 * Upload chain data.
 */
const uploadChain = () => {
    const input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');

        reader.onload = readerEvent => {
            const content = readerEvent.target.result;
            LEDGER.blockchain = JSON.parse(content);
            displayBlocks(LEDGER);
        }
    }

    input.click();
};

/**
 * Generate the data sharing link.
 */
const shareData = () => {
    const publicKey = $('#publicKey').val().trim();

    let link = SERVICE_URL + '?shared=' + btoa(JSON.stringify(LEDGER.blockchain));

    if (publicKey) {
        link += '&public=' + publicKey;
    }

    if (link.length > 2048) {
        link = LARGE_LINK_WARNING_MESSAGE + ' Download chain data to file and send it instead of sharing a link.';
    }

    $('#chainDataLink').val(link);
    $('#shareModal').modal('show');
};

/**
 * Generate the form sharing link.
 */
const shareDataForm = () => {
    const sharedFields = [];

    for (let i in FORM_DATA_FIELDS) {
        sharedFields.push(FORM_DATA_FIELDS[i].replace('prop_', '').replace(/_/g, ' '));
    }

    let link = SERVICE_URL + '?form=' + JSON.stringify(sharedFields);

    if (link.length > 2048) {
        link = LARGE_LINK_WARNING_MESSAGE;
    }

    $('#chainDataLink').val(link);
    $('#shareModal').modal('show');
};

/**
 * Copy link to clipboard.
 */
const copyToClipboard = () => {
    const sharedLink = document.querySelector('#chainDataLink');
    sharedLink.select();
    document.execCommand('copy');
};

/**
 * Verify an identity using the public key.
 */
const verifyIdentity = () => {
    const publicKey = $('#publicKey').val().trim();

    if (publicKey) {
        const address = hashValue(publicKey);

        $('#address').val(address);
    } else {
        alert('Enter the public key!');
    }

    displayBlocks(LEDGER);
};

/**
 * Toggle private key visibility.
 */
const displayPrivateKey = () => {
    const privateKeyElement = document.getElementById('privateKey');

    if (privateKeyElement.type === 'password') {
        privateKeyElement.type = 'text';
    } else {
        privateKeyElement.type = 'password';
    }
};

/**
 * Open modal window to make a record.
 */
const displayObjectModal = () => {
    $('#objectModal').modal('show');

    $('#record_id').val('id-' + CryptoJS.SHA256(Math.random().toString()).toString());
};

/**
 * Add custom field.
 */
const addFieldObject = () => {
    const fieldName = prompt('Enter the field name:', '');

    if (fieldName && fieldName.length > 0) {
        const fieldID = 'prop_' + fieldName.replace(/\s+/g, '_').toLowerCase().replace(/[^a-z0-9\_]/gi, '');

        if (!FORM_DATA_FIELDS.includes(fieldID)) {
            FORM_DATA_FIELDS.push(fieldID);

            $('#objectFields').append(`<div class="form-group" id="for-${fieldID}">
                <label for="${fieldID}">${fieldName} <a href="javascript:void(0);" onclick="removeField('${fieldID}');"><small>Remove</small></a></label>
                <input type="text" class="form-control" id="${fieldID}" style="border-radius: 1rem;">
            </div>`);
        }
    }
}

/**
 * Remove data object field.
 */
const removeField = (fieldID) => {
    $('#for-' + fieldID).remove();

    FORM_DATA_FIELDS = FORM_DATA_FIELDS.filter(item => item !== fieldID);
};

/**
 * Add a record to the chain.
 */
const saveDataObject = () => {
    const recordId = $('#record_id').val().trim();

    if (recordId) {
        const newRecord = {
            prop_id: recordId
        };

        for (let i in FORM_DATA_FIELDS) {
            const fieldID = FORM_DATA_FIELDS[i];
            const fieldValue = $('#' + fieldID).val().trim();

            if (fieldValue) {
                newRecord[fieldID] = fieldValue;
            }
        }

        $('#blockData').val(JSON.stringify(newRecord));

        $('#objectModal').modal('hide');
    } else {
        alert('Enter the record ID!');
    }
};

/**
 * Access GET parameters.
 */
const getQueryParams = (param) => new URL(window.location.href).searchParams.get(param);

$(document).ready(() => {
    try {
        const shared = getQueryParams('shared');
        const public = getQueryParams('public');

        const form = getQueryParams('form');

        if (shared) {
            LEDGER.blockchain = JSON.parse(atob(shared));
        }

        if (public) {
            $('#publicKey').val(public);

            verifyIdentity();
        }

        if (form) {
            FORM_DATA_FIELDS = JSON.parse(form);

            for (let i in FORM_DATA_FIELDS) {
                const fieldName = FORM_DATA_FIELDS[i];

                const fieldID = 'prop_' + fieldName.replace(/\s+/g, '_').toLowerCase().replace(/[^a-z0-9\_]/gi, '');

                FORM_DATA_FIELDS[i] = fieldID;

                $('#objectFields').append(`<div class="form-group" id="for-${fieldID}">
                    <label for="${fieldID}">${fieldName} <a href="javascript:void(0);" onclick="removeField('${fieldID}');"><small>Remove</small></a></label>
                    <input type="text" class="form-control" id="${fieldID}" style="border-radius: 1rem;">
                </div>`);
            }

            displayObjectModal();
        }
    } catch (err) {
        alert('Oops! ' + err.message);
    } finally {
        displayBlocks(LEDGER);
    }
});

$(window).bind('beforeunload', function() {
    return LEAVING_WARNING_MESSAGE;
});