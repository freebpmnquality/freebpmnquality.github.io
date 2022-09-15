# EtherBPMN

Free online software to exchange BPMN models in a distributed blockchain-driven collection.

## How to share models?

- Go to the [homepage](https://cloudfreebpmnquality.herokuapp.com/storage).
- Click "Create collection" button.
- Use a form in the left side of a modal window to add pending models ("Link to a BPMN 2.0 file..." input).
- If necessary, edit properties of pending models using "Model name", "Model annotation", and "Model industry" fields of each pending model.
- Use "Remove" button if necessary to remove certain pending model or use "Clear pending models" button to erase all pending models.
- If necessary, input the ULR of another EtherBPMN collection file to extend existing collection ("Link to the parent EtherBPMN collection file" input).
- Use "Download collection file" to create and download EtherBPMN collection file of currently pending models.
- Make the collection file accessible by URL via the HTTP(S) protocol (e.g., you can treat a collection as the source code, by pushing it to your public GitHub repository and making it accessible as the raw file).
- Use the URL of a raw collection file in order to open it ("Link to the EtherBPMN collection file" input).
- "Parent collection" link is shown for each collection that extends another collection.
- Use "Share" button to exchange collections with others.
- Inside the collection, models could be filtered using "Search..." input field by several properties.
- Each collection item can be clicked to see model information, download a BPMN 2.0 file, analyze model using [QualiBPMN](https://github.com/freebpmnquality/cloud-services/tree/main/analytics) service, and estimate model implementation and fixing cost using [FinBPMN](https://github.com/freebpmnquality/cloud-services/tree/main/analytics) service.

## How it works?

### Tokenomics

Shared models are validated using [QualiBPMN](https://github.com/freebpmnquality/cloud-services/tree/main/analytics) service and then their cost is estimated using [FinBPMN](https://cloudfreebpmnquality.herokuapp.com/finance) service.

*Shared models are **"tokenized"** as **NFT-alike objects** with their own ID, metadata, and owner (i.e. a SHA256 value of the passphrase). This token is not transferrable, exchangeable, or tradeable! Denoted monetary values reflect only the "value" of shared models based on the average hourly wage for business process modeling also taking into account correctness of shared models.*

### Technology

EtherBPMN is a **Distributed Ledger Technology** built using the ideas of **Blockchain** to ensure immutability and timestamping, **Smart Contracts** to ensure programmable logic, and **Git** to ensure a distributed version control system workflow.

#### Ledger

Its ledger technology is inspired by the hash-based approach to link blocks, similar to Blockchain and DAG (Directed Acyclic Graph) structures. E.g. new collection *B* can be linked to collection *A* in order to extend previously created collection *A* with new or revised models. Moreover, another collection *C* can remain stand-alone, not linked to another collections, if there is no reason to do this.

As it is shown below, there are multiple chains and/or DAGs, as well as stand-alone blocks, can exist simultaneously:

| Сhains/DAGs |              |     |              |     |              |     |              |
| ----------- | ------------ | --- | ------------ | --- | ------------ | --- | ------------ |
|             |              |     |              |     | Collection D |     |              |
|             |              |     |              | ↙   |              |     |              |
| (1)         | Collection A | ←   | Collection B |     |              |     |
|             |              |     |              | ↖   |              |     |              |
|             |              |     |              |     | Collection E | ←   | Collection G |
|             |              |     |              |     |              |     |              |
| (2)         | Collection C |     |              |     |              |     |              |
|             |              |     |              |     |              |     |              |
| (3)         | Collection F |     |              |     |              |     |              |
|             |              |     |              |     |              |     |
| (4)         | Collection H | ←   | Collection I | ←   | Collection J |     |              |
|             |              |     |              |     |              |     |              |

Each collection is stored privately or publically by being accessible via the HTTP(S) protocol by link. Parent and child collections may belong to different owners (or to the same person who uses different secret passphrases to identify itself). However, described linking approach makes "traditional" shared web resources more secure and transparent at the same time while using cryptography makes it harder to alter already created collections (it won't be fair to say it is immutable) since they should be extended instead (e.g., the newest collection could be chained to its ancestor and so on, making a distributed tree graph).

Similarly to the Blockchain block structure, each collection has:

| Collection                                                                                                  |
| ----------------------------------------------------------------------------------------------------------- |
| *Data* = [Model {*Title*, *Link*, *Annotation*, *Industry*}] (stringified JSON collection of model records) |
| *Timestamp* (when a collection was created)                                                                 |
| *Parent* **optional** (URL of the parent collection)                                                        |
| *Parent Hash* **optional** (hash of the parent collection)                                                  |
| *Hash* = SHA256(*Data* + *Timestamp* + [*Parent* + *Parent Hash*])                                          |
| *Owner* (hash of the publisher passphrase)                                                                  |

#### Logic

Its logic is implemented as the **Web3**-compatible JavaScript-based "contract", since Ethereum was used as the test platform before (service name **"EtherBPMN"** is a tribute to Ethereum as well):

```javascript
EtherBPMNContract {
    name()
    symbol()
    totalSupply()
    tokenURI()
    ownerOf()
}
```

Therefore, we remain certain compatibility with the **ERC721** standard to represent tokenized BPMN models.

Thus, it can be used as any other **Web3** contract. E.g. to get the total supply (models number) the following construct can be used:

```javascript
EtherBPMNContract.methods.totalSupply().call(null, function(err, data) { /* ... */ });
```
