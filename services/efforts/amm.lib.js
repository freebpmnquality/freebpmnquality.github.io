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

    static async getLiquidity() {
        return Number.parseFloat(await AMMUtil.getTotal() / QualiBPMNTokenVendor.tokensPerUSD());
    }

    static async makePrice(buy) {
        return buy / QualiBPMNTokenVendor.tokensPerUSD;
    }

    static async getTotal() {
        return Number.parseFloat(await QualiBPMNToken.totalSupply());
    }

    static getPricing() {
        return Number.parseFloat(ECommerce.PRODUCTS['SKU_FBPMNQ001'].cost * QualiBPMNTokenVendor.tokensPerUSD);
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