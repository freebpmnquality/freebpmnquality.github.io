class Ledger {
    static TOKENS_DATA = '../../data/tokens.json';

    static getTokenData(symbol) {
        let tokenObject = JSON.parse($.ajax({
            type: 'get',
            url: Ledger.TOKENS_DATA,
            async: false
        }).responseText);

        tokenObject = tokenObject[symbol];

        tokenObject['price'] = Number.parseInt(tokenObject['price'], 16);
        tokenObject['supply'] = Number.parseInt(tokenObject['supply'], 16);
        tokenObject['created'] = Number.parseInt(tokenObject['created'], 16);

        const timestampUNIX = Date.now() / 1000;
        const timestampDec = (timestampUNIX - tokenObject['created']) / 86400;

        for (let address in tokenObject['holders']) {
            if (address === tokenObject['owner']) {
                const parameter = Number.parseInt(tokenObject['holders'][address]['parameter'], 16);
                const constant = Number.parseInt(tokenObject['holders'][address]['constant'], 16);

                tokenObject['holders'][address] = parameter * timestampDec + constant;
            } else {
                tokenObject['holders'][address] = Number.parseInt(tokenObject['holders'][address], 16);
            }

            tokenObject['supply'] += tokenObject['holders'][address];
        }

        return tokenObject;
    }
}