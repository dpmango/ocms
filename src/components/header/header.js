//////////
// HEADER
//////////
(function($, APP) {
  APP.Components.Header = {
    init: function() {
      this.setMenuClass();
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
  };
})(jQuery, window.APP);
