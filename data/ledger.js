class Ledger {
    static TOKENS_DATA = '../../data/tokens.json';

    static getTimestamp() {
        return Date.now() / 1000;
    }

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

        for (let address in tokenObject['holders']) {
            tokenObject['holders'][address] = Number.parseInt(tokenObject['holders'][address], 16);
        }

        for (let address in tokenObject['holders']) {
            if (address !== tokenObject['owner']) {
                tokenObject['holders'][tokenObject['owner']] -= tokenObject['holders'][address];
            }
        }

        for (let address in tokenObject['holders']) {
            tokenObject['supply'] += tokenObject['holders'][address];
        }

        return tokenObject;
    }

    static getBlockData(symbol) {
        const timestampUNIX = Ledger.getTimestamp();
        const hashValue = CryptoJS.SHA256(JSON.stringify(Ledger.getTokenData(symbol))).toString();

        return {
            hash: hashValue,
            timestamp: timestampUNIX
        };
    }
}