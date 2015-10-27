if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

        return {
            then:function(callbak){

                var testId = setTimeout(function(){

                    callbak(value);
                    clearTimeout(testId);
                    return true;
                },100);

            }
        };


    },

    manipulateRemoteData : function(url) {

        var xmlhttpReq = null;
        var callbak = null;

        if(window.XMLHttpRequest){
            xmlhttpReq = new XMLHttpRequest();

        }

        //jshint didnt like it
        //else{
        //    xmlhttpReq = new ActiveXObject('Microsoft.XMLHTTP');
        //}

        xmlhttpReq.open('GET', url, true);
        xmlhttpReq.onreadystatechange = function(){
            if (xmlhttpReq.readyState === 4 && xmlhttpReq.status === 200)
            {
                var res = JSON.parse(xmlhttpReq.responseText).people;
                var names = [];
                for(var i in res){
                    names.push(res[i].name);
                }
                callbak(names.sort());
            }
        };
        xmlhttpReq.send();

        return {
            then:function(callback){
                //alert(callback);
                callbak = callback;

            }
        };



    }
  };
});
