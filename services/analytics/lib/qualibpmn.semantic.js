/**
 * Checks BPMN activities against semantic rules.
 * 
 * @author https://github.com/andriikopp
 */
class QualiBPMNSemanticUtil {
    static MIN_WORDS = 2;
    static MAX_WORDS = 4;

    static STOP_WORD_LENGTH = 3;

    /**
     * Checks whether an activity label is too simple.
     * 
     * @param {*} name activity label;
     * @returns true if an activity label is too simple or false otherwise.
     */
    static isSimple(name) {
        const words = this.countWords(name);

        return words < this.MIN_WORDS;
    }

    /**
     * Checks whether an activity label is too complex.
     * 
     * @param {*} name activity label;
     * @returns true if an activity label is too complex or false otherwise.
     */
    static isComplex(name) {
        const words = this.countWords(name);

        return words > this.MAX_WORDS;
    }

    /**
     * Counts words in a given string.
     * 
     * @param {*} str input string;
     * @returns number of words.
     */
    static countWords(str) {
        const matches = str.match(/[\w\d\’\'-]+/gi);

        return matches ? matches.filter(word => word.length >= this.STOP_WORD_LENGTH).length : 0;
    }
}