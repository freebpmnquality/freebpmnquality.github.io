/**
 * Block structure.
 */
class BloxienceBlock {
    constructor(index, timestamp, data, precedingHash, sender) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = JSON.stringify(data);
        this.precedingHash = precedingHash;
        this.hash = 0;
        this.sender = sender;
        this.isValid = true;
    }
}

/**
 * Chain structure.
 */
class BloxienceChain {
    constructor() {
        this.blockchain = [this.startGenesisBlock()];
    }

    /**
     * Reset to genesis block.
     */
    resetToGenesis() {
        this.blockchain = [this.startGenesisBlock()];
    }

    /**
     * Returns hash of the current block.
     */
    computeHash(block) {
        return CryptoJS.SHA256(block.index + block.precedingHash + block.timestamp + JSON.stringify(block.data) + block.sender).toString();
    }

    /**
     * Returns the very first block in the chain.
     */
    startGenesisBlock() {
        const genesisBlock = new BloxienceBlock(0, 0, 'Genesis block.', 0, 0);
        genesisBlock.hash = this.computeHash(genesisBlock);

        return genesisBlock;
    }

    /**
     * Returns latest valid block to cut off invalid branches.
     */
    obtainLatestBlock() {
        let latestValid = this.blockchain[0];

        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.getBlockByHash(currentBlock.precedingHash);

            if ((currentBlock.hash !== this.computeHash(currentBlock)) ||
                (currentBlock.precedingHash !== precedingBlock.hash) ||
                (!precedingBlock.isValid)) {
                currentBlock.isValid = false;
            } else {
                latestValid = currentBlock;
            }
        }

        return latestValid;
    }

    /**
     * Returns the block by its hash.
     */
    getBlockByHash(hash) {
        for (let i = 0; i < this.blockchain.length; i++) {
            if (this.blockchain[i].hash === hash) {
                return this.blockchain[i];
            }
        }

        return null;
    }

    /**
     * Adds new block to the chain.
     */
    addNewBlock(newBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = this.computeHash(newBlock);

        this.blockchain.push(newBlock);
    }

    /**
     * Returns the number of valid blocks.
     */
    checkChainValidity() {
        let validBlocks = 1;

        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.getBlockByHash(currentBlock.precedingHash);

            if ((currentBlock.hash !== this.computeHash(currentBlock)) ||
                (currentBlock.precedingHash !== precedingBlock.hash) ||
                (!precedingBlock.isValid)) {
                currentBlock.isValid = false;
            } else {
                validBlocks++;
            }
        };

        return validBlocks;
    }
}