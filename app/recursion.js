recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    let files = [];

    function checkAllDir(obj) {
        files = files.concat(obj.files);
        obj.subDirs.length > 0 && obj.subDirs.forEach(dir => checkAllDir(dir));
    }

    function checkDir(obj, dirName) {
        if (obj.dirName === dirName || obj.dirName === 'vendor') {
            files = files.concat(obj.files);
        }
        obj.subDirs.length > 0 && obj.subDirs.forEach(dir => checkDir(dir, dirName))
    }

    dirName ? checkDir(data, dirName) : checkAllDir(data);

    return files;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    let seq = [0];

    function fib(value) {
        if(seq[n]) return seq[n];
        const prevNum = seq[seq.length - 1] || 0;
        seq.push(value);
        return fib(value + prevNum);
    }
    return fib(1);
  },
};
