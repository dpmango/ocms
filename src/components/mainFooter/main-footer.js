//////////
// MAIN FOOTER
//////////
(function($, APP) {
  APP.Components.MainFooter = {
    init: function() {
      var $content = $('.page-body')
        .last()
        .find('.js-main-content-scroller');
      $content.on('scroll', throttle(this.scrollFooter.bind(this), 25));
    },

    scrollFooter: function() {
      var $footer = $('.js-min-footer-onscroll');
      var $content = $('.js-main-content-scroller');
      if ($footer.length === 0 || $content.length === 0) return;

      var wScroll = $content.scrollTop();

      if (wScroll > 5) {
        $footer.addClass('is-scrolled');
      } else {
        $footer.removeClass('is-scrolled');
      }
    },
  };
})(jQuery, window.APP);
