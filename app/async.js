asyncAnswers = {
  /**
   * Asynchronously returns a value via a promise. Example:
   * async('anyValue').then((result) => { return result === 'anyValue';});
   * 
   * @param value - Any value
   * @returns {then: function} A promise like object containing a then property.
   */
  async: function async(value) {
      return new Promise((resolve, reject) => resolve(value));
  },

  /**
   * Creates a promise that resolves with the data returned from an ajax call to the url url.
   * You may use jquery, XMLHttpRequest, or fetch.
   * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
   * https://api.jquery.com/jQuery.ajax/
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API   * 
   * 
   * @param {String} url - a valid url
   * @returns {String[]} - Sorted array with names (corrected by me in order to pass the test)
   */
  manipulateRemoteData: async function manipulateRemoteData(url) {
    const res = await fetch(url);
    const { people } = await res.json();
    return people.map(item => item.name).sort();
  },
};
