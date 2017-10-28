stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let duplicates = [];
    let reduced = str;

    const letterArr = Array.from(str).filter(letter => {
        if (duplicates.includes(letter)) return false;
        duplicates.push(letter);
        return true;
    });

    letterArr.forEach(letter => {
        let regex = new RegExp(`${letter}{${amount}}`);
        let regexReplace = new RegExp(`${letter}+`);
        let replacer = [];
        let count = 0;
        while(count < amount) {
            replacer.push(letter);
            count++;
        }
        replacer = replacer.join('');
        if (regex.test(str)) reduced = reduced.replace(regexReplace, replacer);
    });

    return reduced;
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'bca'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return Array.from(str).reverse().join('');
  },
};
