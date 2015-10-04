if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var r = /\d+/g;
        var res = str.match(r);
        if(!res){
            return false;
        }
        var ret = Number(res[0]);
        if(!isNaN(ret)){
            return true;
        }else{
            return false;
        }
    },

    containsRepeatingLetter : function(str) {
        var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str);
        return hasDuplicates;
    },

    endsWithVowel : function(str) {

    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
