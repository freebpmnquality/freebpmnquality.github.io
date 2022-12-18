class Tokenomics {
    static tokenAddress = '0x3b0c4a38a7f651f172bf50bd7f6687a8a8624db5';
    static contractABI = JSON.parse(`[{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"uint256","name":"initialTokenPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sellTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newTokenPrice","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]`);
    static web3Provider = 'https://data-seed-prebsc-1-s1.binance.org:8545';

    static async totalSupply() {
        const web3 = new Web3(new Web3.providers.HttpProvider(Tokenomics.web3Provider));
        const contract = new web3.eth.Contract(Tokenomics.contractABI, Tokenomics.tokenAddress);

        const supply = (await contract.methods.totalSupply().call()) / 10 ** 18;

        return supply;
    }

    static async balanceOf(address) {
        const web3 = new Web3(new Web3.providers.HttpProvider(Tokenomics.web3Provider));
        const contract = new web3.eth.Contract(Tokenomics.contractABI, Tokenomics.tokenAddress);

        const balance = (await contract.methods.balanceOf(address).call()) / 10 ** 18;

        return balance;
    }

    static async tokenPrice() {
        const web3 = new Web3(new Web3.providers.HttpProvider(Tokenomics.web3Provider));
        const contract = new web3.eth.Contract(Tokenomics.contractABI, Tokenomics.tokenAddress);

        const price = (await contract.methods.tokenPrice().call()) / 10 ** 18;

        return price;
    }
}