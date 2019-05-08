//////////
// HEADER
//////////
(function($, APP) {
  APP.Components.Header = {
    init: function() {
      this.setMenuClass();
      this.controlHeaderClass();
    },
    setMenuClass: function() {
      // SET ACTIVE CLASS IN HEADER
      var headerMenuList = $('.primary-menu__link');
      if (headerMenuList.length === 0) return;

      headerMenuList.each(function(i, val) {
        if ($(val).attr('href') === window.location.pathname.split('/').pop()) {
          $(val).addClass('is-active');
        } else {
          $(val).removeClass('is-active');
        }
      });
    },
    controlHeaderClass: function() {
      var $header = $('.header');
      if ($header.length === 0) return;

      $header.attr('data-modifier', false);

      var $modifierElement = $('.page')
        .last()
        .find('[js-header-class]');

      if ($modifierElement.length > 0) {
        $header.attr('data-modifier', $modifierElement.data('class'));
      }
    },
  };
})(jQuery, window.APP);
