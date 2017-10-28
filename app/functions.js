functionsAnswers = {
  /**
   * Calls a function fn with the arguments supplied in an array arr
   * 
   * Example: argsAsArray(Math.max, [1, 2, 3, 4, 5, 6])
   * should be 6, the same as Math.max(1, 2, 3, 4, 5, 6);
   * 
   * @param {Function} fn - A function to be called
   * @param {[]} arr - An array of values to be passed to fn
   * @returns Whatever fn would return
   */
  argsAsArray: function argsAsArray(fn, arr) {
    return fn.apply(null, arr);
  },

  /**
   * Makes a function, that when called, will return the string
   * of text beginning with str + ', ';
   * 
   * Example: functionFunction('Hello') should return a function that takes
   * 1 argument, and returns 'Hello, ' + that 1 argument. So
   * functionFunction('Hello')('world') should be 'Hello, world'.
   * 
   * @param {String} str - a string that will appear at the beginning of 
   * any string returned by the function returned from functionFunction.
   * @returns {Function} A function that takes 1 argument, and returns a string
   * that begins with str + ', ' + that 1 argument.
   */
  functionFunction: function functionFunction(str) {
    return arg => `${str}, ${arg}`;
  },
};
