exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

    var def = $.Deferred();

    setTimeout(function() {
      def.resolve(value);
    }, 20);

    return def.promise();
  },

  manipulateRemoteData: function(url) {

    var def = $.Deferred();

    $.ajax(url).then(function(resp) {
      var people = $.map(resp.people, function(person) {
        return person.name;
      })
      def.resolve(people.sort());
    })

    return def.promise();
  }
};
