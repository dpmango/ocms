//////////
// SORTABLE
//////////
(function($, APP) {
  APP.Plugins.Sortable = {
    init: function() {
      var sortlist1 = document.getElementById('items1');
      if ($sortlist1.length === 0) return;

      new Sortable(sortlist1, {
        handle: '.handle',
        ghostClass: 'change-background',
        animation: 150,
      });
    },
  };
})(jQuery, window.APP);
