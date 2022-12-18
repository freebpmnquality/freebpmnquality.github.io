class AMMUtil {

    static getSitemapURLs(website) {
        const results = [];

        const sitemapContent = $.ajax({
            type: 'get',
            url: website + '/sitemap.xml',
            async: false
        }).responseText;

        const parser = new DOMParser();
        const sitemapObject = parser.parseFromString(sitemapContent, 'text/xml');
        const URLs = sitemapObject.getElementsByTagName('url');

        for (let i = 0; i < URLs.length; i++) {
            const urlElement = URLs[i];
            const loc = urlElement.getElementsByTagName('loc')[0].textContent;

            results.push(loc);
        }

        return results;
    }

    static async getCap() {
        return Number.parseFloat(await AMMUtil.getTotal() * await Tokenomics.tokenPrice());
    }

    static async makePrice(buy) {
        return buy * (await AMMUtil.getTokenPriceUSD());
    }

    static async getTotal() {
        return Number.parseFloat(await Tokenomics.totalSupply());
    }

    static async getTokenPriceUSD() {
        const coingeckoPriceResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd');
        const coingeckoPriceJSON = await coingeckoPriceResponse.json();

        return coingeckoPriceJSON.binancecoin.usd * (await Tokenomics.tokenPrice());
    }

    static async getPricing(priceUSD) {
        return priceUSD / (await AMMUtil.getTokenPriceUSD());
    }

    static async getMetaMaskAccounts() {
        if (typeof window.ethereum !== 'undefined') {
            let accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });

            if (accounts === null) {
                throw Error('Please install MetaMask!');
            }
        }

        return await new Web3(window.ethereum).eth.getAccounts();
    }

    static async signMessage(message) {
        const web3 = new Web3(window.ethereum);

        const hash = web3.utils.sha3(message);

        const accounts = await AMMUtil.getMetaMaskAccounts();

        return await web3.eth.personal.sign(hash, accounts[0]);
    }
}