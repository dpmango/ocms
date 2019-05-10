//////////
// Sticky Kit
//////////
(function($, APP) {
  APP.Plugins.StickyKit = {
    init: function() {
      var $sticky = $('.js-sticky');
      if ($sticky.length === 0) return;

      $sticky.each(function(i, st) {
        var $sticky = $(st);
        var offsetTop = parseInt($sticky.data('offset')) || 0;
        var stickyId = $sticky.data('sticky-id');
        var stickyOptions = {
          scrollEl: 'sticky-scroller',
          stickyBitStickyOffset: offsetTop,
        };

        // call inst
        stickybits('[data-sticky-id="' + stickyId + '"]', stickyOptions);
      });
    },
    destroy: function() {
      // var $sticky = $('.js-sticky');
      // if ($sticky.length === 0) return;
      // $sticky.each(function(i, st) {
      //   var $sticky = $(st);
      // });
    },
  };
})(jQuery, window.APP);
