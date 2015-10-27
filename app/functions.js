if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {

        return fn.apply(fn,arr);
    },

    speak : function(fn, obj) {

        return fn.call(obj);
    },

    functionFunction : function(str) {

        return function(msg){
            return str + ', ' + msg;
        };
    },

    tempFunc:function(x){
        return function(){
            return x*x;
        };
    },

    makeClosures : function(arr, fn) {

        var temp = [];

        for(var i = 0; i < arr.length; i++){
            temp[i] = this.tempFunc(arr[i]);
        }
        return temp;
    },

    partial : function(fn, str1, str2) {

        return function(str){
            return fn.call(fn,str1,str2)+ str.substr(0,str.length-1);
        };
    },

    useArguments : function() {

        var sum = 0;
        for(var i =0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {

        var temp = [];
        for(var i =1;i < arguments.length; i++ ){
            temp.push(arguments[i]);
        }
        return fn.apply(fn,temp);
    },

    partialUsingArguments : function(fn) {

        var temp = [];
        for(var i =1; i < arguments.length; i++){

            temp.push(arguments[i]);
        }

        return function(){

           var temp1 = [];
            for(var i =0; i < arguments.length; i++){

                temp1.push(arguments[i]);
            }

            temp1.forEach(function(item){
                temp.push(item);
            });
            return fn.apply(fn,temp);
        };

    },

    curryIt : function(fn) {

        var temp = [];
        for(var i =1; i < arguments.length; i++){

            temp.push(arguments[i]);
        }

        return function test(arg){
            var temp1 = [];
            for(var i =0; i < arguments.length; i++){
                temp1.push(arguments[i]);
            }
            temp1.forEach(function(item){
                temp.push(item);
            });

            if(temp.length === 3){
                return fn.apply(fn,temp);
            }else{
                return test;
            }

        };
    }
  };
});
