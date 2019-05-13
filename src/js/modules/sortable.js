//////////
// SORTABLE
//////////
(function($, APP) {
  APP.Plugins.Sortable = {
    init: function() {
      var $sortable = $('.js-sortable');

      if ($sortable.length === 0) return;

      $sortable.each(function(i, el) {
        new Sortable(el, {
          handle: '.handle',
          ghostClass: 'change-background',
          animation: 150,
        });
      });
    },
  };
})(jQuery, window.APP);
