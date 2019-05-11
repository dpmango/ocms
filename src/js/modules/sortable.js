//////////
// SORTABLE
//////////
(function($, APP) {
  APP.Plugins.Sortable = {
    init: function() {
      var sortlist1 = document.getElementById('sortable');
      if (!sortlist1) return;

      new Sortable(sortlist1, {
        handle: '.handle',
        ghostClass: 'change-background',
        animation: 150,
      });
    },
  };
})(jQuery, window.APP);
