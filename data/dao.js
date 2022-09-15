class DAO {
    static TOKENS_DATA = '../../data/tokens.json';
    static USERS_DATA = '../../data/users.json';

    static GENESIS = 1661688000;

    static getTokensData() {
        const tokensObject = JSON.parse($.ajax({
            type: 'get',
            url: DAO.TOKENS_DATA,
            async: false
        }).responseText);

        tokensObject['liquidity'] = Number.parseInt(tokensObject['liquidity'], 16);
        tokensObject['supply'] = Number.parseInt(tokensObject['supply'], 16);

        const timestampUNIX = Date.now() / 1000;
        const timestampDec = (timestampUNIX - DAO.GENESIS) / 86400;

        for (let address in tokensObject['holders']) {
            const parameter = Number.parseInt(tokensObject['holders'][address]['parameter'], 16);
            const constant = Number.parseInt(tokensObject['holders'][address]['constant'], 16);

            tokensObject['holders'][address] = parameter * timestampDec + constant;
        }

        return tokensObject;
    }

    static getUsersData() {
        const usersObject = JSON.parse($.ajax({
            type: 'get',
            url: DAO.USERS_DATA,
            async: false
        }).responseText);

        return usersObject;
    }
}