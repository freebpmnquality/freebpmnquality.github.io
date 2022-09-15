/**
 * Utilities to BPMN efforts and cost.
 * 
 * @author https://github.com/andriikopp
 */
class FinBPMNUtil {
    static AVG_LOC_PER_BPMN_ELEMENT = 7;

    static COCOMO_COEFFICIENT = 2.4;
    static COCOMO_EXPONENT = 1.05;

    static HOURLY_WAGE = 56;

    static PROJECT_STAGES = [{
            name: 'Design',
            mult: 1
        },
        {
            name: 'Implementation',
            mult: 6.5
        },
        {
            name: 'Testing',
            mult: 15
        },
        {
            name: 'Maintenance',
            mult: 100
        }
    ];

    /**
     * Calculate person-hours with respect to given units of work.
     */
    static calculateEfforts(unitsOfWork) {
        return FinBPMNUtil.COCOMO_COEFFICIENT * Math.pow((FinBPMNUtil.AVG_LOC_PER_BPMN_ELEMENT * unitsOfWork) / 1000, FinBPMNUtil.COCOMO_EXPONENT) * 152;
    }

    /**
     * Returns cost of the one unit of work with respect to hourly wage.
     */
    static getUnitCost() {
        return this.calculateEfforts(1) * FinBPMNUtil.HOURLY_WAGE;
    }
}