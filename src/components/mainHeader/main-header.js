//////////
// MAIN HEADER
//////////
(function($, APP) {
  APP.Components.MainHeader = {
    init: function() {
      var $content = $('.page-body')
        .last()
        .find('.js-main-content-scroller');
      $content.on('scroll', throttle(this.scrollHeader.bind(this), 25));
    },

    scrollHeader: function() {
      var $header = $('.js-min-header-onscroll');
      var $content = $('.js-main-content-scroller');
      if (($header.length === 0) | ($content.length === 0)) return;

      var wScroll = $content.scrollTop();

      if (wScroll > 5) {
        $header.addClass('is-scrolled');
      } else {
        $header.removeClass('is-scrolled');
      }
    },
  };
})(jQuery, window.APP);
