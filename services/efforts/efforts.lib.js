class EffortsLib {
    static KILO_LINES = 1000;

    static HOURS_PER_MONTH = 152;

    static PROJECT_COEFFICIENT = 2.4;
    static PROJECT_EXPONENT = 1.05;

    static AVERAGE_HOURLY_WAGE = 28;

    static countLOC(sourceCode) {
        return sourceCode.split('\n').length;
    }

    static toKLOC(LOC) {
        return LOC / EffortsLib.KILO_LINES;
    }

    static estimatePersonHours(KLOC) {
        return EffortsLib.PROJECT_COEFFICIENT * Math.pow(KLOC, EffortsLib.PROJECT_EXPONENT) * EffortsLib.HOURS_PER_MONTH;
    }

    static estimateCost(personHours) {
        return personHours * EffortsLib.AVERAGE_HOURLY_WAGE;
    }

    static getValue(pageURL) {
        const request = new XMLHttpRequest();

        request.open('GET', pageURL, false);
        request.send(null);

        let value = 0;

        if (request.status == 200) {
            const LOC = EffortsLib.countLOC(request.responseText);
            const KLOC = EffortsLib.toKLOC(LOC);
            const personHours = EffortsLib.estimatePersonHours(KLOC);
            const cost = EffortsLib.estimateCost(personHours);

            value = Number.parseFloat(cost.toFixed(2));
        }

        return value;
    }

    static getID() {
        return 'ID' + Date.now().toString() + Number.parseInt(Math.random() * 10E5).toString();
    }
}