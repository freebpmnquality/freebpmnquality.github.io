class DAO {
    static TOKENS_DATA = '../../data/tokens.json';
    static USERS_DATA = '../../data/users.json';

    static getTokensData() {
        const tokensObject = JSON.parse($.ajax({
            type: 'get',
            url: DAO.TOKENS_DATA,
            async: false
        }).responseText);

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