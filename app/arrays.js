if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {

        if(typeof arr !== 'undefined' && typeof item !== 'undefined' && arr.length > 0){

            return arr.indexOf(item);

        }else{
            return -1;
        }

    },

    sum : function(arr) {

        var total = 0;
        if(arr){
            arr.forEach(function(item){
                total+=Number(item);
            });
        }

        return total;

    },

    remove : function(arr, item) {
        var res = [];

        if(arr){
            arr.forEach(function(val){
                if(item !== val){
                    res.push(val);
                }
            });
        }
        return res;
    },

    removeWithoutCopy : function(arr, item) {

        if(arr){
            for(var i=0; i < arr.length; i++ ){
                if(arr[i] === item){
                    arr.splice(i,1);
                    i--;
                }
            }
        }else{
            arr =  [];
        }

        return arr;


    },

    append : function(arr, item) {

        if(arr){

            arr[arr.length] = item;

        }else{
            arr =  [];
        }

        return arr;
    },

    truncate : function(arr) {

        if(arr){

            arr.splice(arr.length-1,1);

        }else{
            arr =  [];
        }

        return arr;
    },

    prepend : function(arr, item) {

        if(arr){

            arr.splice(0,0,item);

        }else{
            arr =  [];
        }

        return arr;
    },

    curtail : function(arr) {

        if(arr){

            arr.splice(0,1);

        }else{
            arr =  [];
        }

        return arr;
    },

    concat : function(arr1, arr2) {
        var res = [];
        if(arr1 && arr2){

            res = arr1.concat(arr2);
        }

        return res;
    },

    insert : function(arr, item, index) {

        if(arr){

            arr.splice(index,0,item);

        }else{
            arr =  [];
        }

        return arr;

    },

    count : function(arr, item) {
        var res = 0;
        if(arr){
            arr.forEach(function(val){
                if(item === val){
                    res++;
                }
            });
        }
        return res;
    },

    duplicates : function(arr) {

        var res = {};
        var dupArray =[];

        if(arr){
            arr.forEach(function(item){
                if(!res[item]){
                    res[item] = item;
                }else if(dupArray.indexOf(item) === -1){
                    dupArray.push(item);
                }
            });
        }

        return dupArray;

    },

    square : function(arr) {


        if(arr){
            for(var i =0; i < arr.length; i++){
                arr[i] = arr[i]*arr[i];
            }
        }else{
            arr = [];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {

        var res = {};
        var resArray =[];

        if(arr){
            arr.forEach(function(item, index){
                if(item === target){
                    resArray.push(index);
                }
            });
        }

        return resArray;
    }
  };
});
