if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {

        function ctest(data, res,dirRes, subDir) {

            if(typeof  data.files !== 'undefined'){
                var arrFiles = data['files'];
                for(var i = 0; i <  arrFiles.length; i++){

                    var files = arrFiles[i];
                    if(typeof files === 'string'){
                       res.push(files);
                       if(typeof dirName !== 'undefined' && ( (typeof data.dir !== 'undefined' && data.dir === dirName) || subDir)){
                           subDir = true;
                           dirRes.push(files);
                       }
                    }else{
                       ctest(files,res, dirRes, subDir);
                    }
                }

            }
            return res;

        }

        var fileArray = [];
        var dirFileArray = [];
        var subDir = false;
        var result = ctest(data, fileArray, dirFileArray,subDir);

        if(typeof dirName !== 'undefined'){
            return dirFileArray;
        }else{
            return fileArray;
        }
    },

    permute: function(arr) {

    }
  };
});
