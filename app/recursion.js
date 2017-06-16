exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    var listOfFiles = [];
    var dirs = [];

    function processDir(dir) {
      var i;
      var len;
      var file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    processDir(data);


    return listOfFiles;
  },

  permute: function(arr) {
 var temp = [];
    var answer = [];

    function logResult() {
      answer.push(
        temp.slice()
      );
    }

    function doIt() {
      var i;
      var len;
      var item;

      for (i = 0, len = arr.length; i < len; i++) {
        item = arr.splice(i, 1)[0];

        temp.push(item);

        if (arr.length) {
          doIt();
        } else {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return doIt();
  },

  fibonacci: function(n) {
   function fib(n) {
    if (n <= 1)
      return n;
      return fib(n-1) + fib(n-2);
    }

    return fib(n);
  },

  validParentheses: function(n) {
    var validParentheses = [];
    brackets('', 0, 0, n);  
    
    function brackets(bracket, open, close, pairs)
    {
        if( (open===pairs) && (close===pairs) )
        {
            validParentheses.push(bracket);
        }
        else
        {
            if (open<pairs) {
                brackets(bracket + '(', open+1, close, pairs);
            }
            if (close<open) {
                brackets(bracket + ')', open, close+1, pairs);
            }
        }
    }

    return validParentheses;
  }
};
