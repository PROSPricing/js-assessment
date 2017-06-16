exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum: function(arr) {
    var sum = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove: function(arr, item) {
    var rem = []

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        rem.push(arr[i]);
      }
    }

    return rem;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    var arr = arr1.concat(arr2);

    return arr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count: function(arr, item) {
    var count = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates: function(arr) {
    var duplicates = [], look = {};

    for (var i = 0, len = arr.length; i < len; i++) {
      look[arr[i]] = look[arr[i]] ? look[arr[i]] + 1 : 1;
    }

    for (var item in look) {
      if (look.hasOwnProperty(item) && look[item] > 1) {
        duplicates.push(parseInt(item, 10));
      }
    }

    return duplicates;

  },

  square: function(arr) {
    var square = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      square.push(arr[i] * arr[i]);
    }

    return square;
  },

  findAllOccurrences: function(arr, target) {
    var occ = []

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        occ.push(i);
      }
    }

    return occ;
  }
};
