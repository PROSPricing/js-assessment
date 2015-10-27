if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {

        return fn.call(obj);

    },

    alterObjects : function(constructor, greeting) {

        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {

        var res = [];
        for(var key in obj){

            if(obj.hasOwnProperty(key)){

                var temp = key+': '+obj[key];
                res.push(temp);
            }

        }
        console.log(res);
        return res;
    }
  };
});
