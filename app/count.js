exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var to
    function go () {
      console.log(start++);
      if (start <= end) {
        to = setTimeout(go, 100);
      }
    }
    go();
    return {
      cancel: function () {
        to && clearTimeout(to);
      }
    };
  }
};
