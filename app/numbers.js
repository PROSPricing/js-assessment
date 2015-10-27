if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

        var temp = parseInt(num,10).toString(2).split('');
        return Number(temp[temp.length-bit]);
    },

    base10: function(str) {

        var num = parseInt(str, 2);
        return Number(num.toString(10));
    },

    convertToBinary: function(num) {

        //var num = parseInt(num, 10);
        return num.toString(2);
    },

    multiply: function(a, b) {

        var decLength = String(b).split('.')[1].length;
        return Number((a*b).toFixed(decLength));
    }
  };
});

