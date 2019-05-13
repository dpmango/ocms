//////////
// SORTABLE
//////////
(function($, APP) {
  APP.Plugins.Sortable = {
    init: function() {
      var sortlist1 = document.getElementById('sortable');
      var sortlist2 = document.getElementById('sortablePassport');
      if (!sortlist1) return;
      if (!sortlist2) return;

      // var sortable = $('.sortable');
      // if (sortable.length === 0) return;

      // new Sortable(sortable, {
      //   handle: '.handle',
      //   ghostClass: 'change-background',
      //   animation: 150,
      // });

      new Sortable(sortlist1, {
        handle: '.handle',
        ghostClass: 'change-background',
        animation: 150,
      });

      new Sortable(sortlist2, {
        handle: '.handle',
        ghostClass: 'change-background',
        animation: 150,
      });
    },
  };
})(jQuery, window.APP);
