# Bloxience

Educational and research implementation of the blockchain data structure in JavaScript.

- Go to the [homepage](https://cloudfreebpmnquality.herokuapp.com/bloxience/).
- A sandbox for experiments with the blockchain includes "Account" area where private key and public key are randomly generated, put some text data, and add new block to the chain using "Add block" button.
- New blocks added to the chain are shown on top in the right side. "Valid blocks" counter reflects "health" of the chain.
- "Alter block" button is shown for each new block and simulates situation when chain data was tampered. Then invalid blocks will be colored with red and invalid chain will be cut off from the ledger. This means next new block will reference to the last valid block.
- The blockchain lives until the page reload, however, it can be reset earlier using "Reset" button.

This project can be used as the JavaScript blockchain library in other small and medium scale solutions.

It only requires to be included as usual JavaScript file in the HTML page:

```html
<!-- CryptoJS dependency -->
<script src="../js/crypto-js.min.js"></script>

<!-- Blockchain lib -->
<script src="../bloxience/lib/bloxience.js"></script>
```

As it is shown, it uses only the CryptoJS library as the dependency.

Then in JavaScript code it can be used as following:

```javascript
// Create the blockchain instance
const ledger = new BloxienceChain();

// Data that you want to add to the chain
const data = 'Some data.';

// Data sender information
const sender = 'Sender name/ID.';

ledger.addNewBlock(
    new BloxienceBlock(
        ledger.blockchain.length, // block index
        Date.now(), // block timestamp
        data, // block data
        null, // preceding hash (left null)
        sender // sender information
    )
);
```

Other features, such as obtaining the latest block or chain validation are described as methods in ```lib/bloxience.js```.
