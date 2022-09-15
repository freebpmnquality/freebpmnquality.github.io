class Ledger {
    static TOKENS_DATA = '../../data/tokens.json';

    static GENESIS = 1661688000;

    static getTokensData() {
        const tokensObject = JSON.parse($.ajax({
            type: 'get',
            url: Ledger.TOKENS_DATA,
            async: false
        }).responseText);

        tokensObject['price'] = Number.parseInt(tokensObject['price'], 16);
        tokensObject['supply'] = Number.parseInt(tokensObject['supply'], 16);

        const timestampUNIX = Date.now() / 1000;
        const timestampDec = (timestampUNIX - Ledger.GENESIS) / 86400;

        for (let address in tokensObject['holders']) {
            if (address === tokensObject['owner']) {
                const parameter = Number.parseInt(tokensObject['holders'][address]['parameter'], 16);
                const constant = Number.parseInt(tokensObject['holders'][address]['constant'], 16);

                tokensObject['holders'][address] = parameter * timestampDec + constant;
            } else {
                tokensObject['holders'][address] = Number.parseInt(tokensObject['holders'][address], 16);
            }

            tokensObject['supply'] += tokensObject['holders'][address];
        }

        return tokensObject;
    }
}