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

    static getLiquidity() {
        let liquidityAssets = [];

        liquidityAssets = liquidityAssets.concat(AMMUtil.getSitemapURLs('https://freebpmnquality.github.io/'));

        let liquidity = 0;

        for (let asset in liquidityAssets) {
            liquidity += EffortsLib.getValue(liquidityAssets[asset]);
        }

        return liquidity;
    }

    static getLiquidityFromStorage() {
        return Number.parseFloat(DAO.getTokensData().liquidity);
    }

    static makePrice(buy) {
        let liquidity = AMMUtil.getLiquidityFromStorage();

        const total = AMMUtil.getTotal();

        return buy * (liquidity / total);
    }

    static getTotal() {
        return Number.parseFloat(DAO.getTokensData().supply);
    }

    static getPricing() {
        return Number.parseFloat(DAO.getTokensData().price);
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