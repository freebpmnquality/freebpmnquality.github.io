class Payment {
    static isSubscribed(account) {
        return account === Ledger.getUsersData().code;
    }

    static orderPromoCode() {
        const date = new Date();
        const month = date.getMonth();
        const base = 'QUALIBPMN';

        if (month >= 8 && month <= 9) {
            return 'SPOOK' + base;
        } else if (month == 10) {
            return 'BLACKFRI' + base;
        } else if (month == 11) {
            return 'WINTER' + base;
        } else if (month == 0) {
            return 'LUNAR' + base;
        } else if (month == 1) {
            return 'ILOVE' + base;
        } else if (month >= 2 || month <= 4) {
            return 'SPRING' + base;
        } else if (month >= 5 || month <= 7) {
            return 'SUMMER' + base;
        }

        hashCode = s => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);

        return hashCode(month.toString() + date.getFullYear().toString() + base);
    }
}