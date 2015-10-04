if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {

    count : function (start, end) {

        console.add(start);

        var testId = setInterval(function(){
            start++;
            console.add(start);
            if(start === end){
                clearInterval(testId);
            }

        },100);

        return {
            cancel:function(){
                clearInterval(testId);
        }};

    }
  };
});