//////////
// TIPPY
//////////
(function($, APP) {
  APP.Plugins.Tippy = {
    init: function() {
      tippy('.js-tooltip', {
        arrow: true,
        arrowType: 'round',
        animation: 'perspective',
        theme: 'light',
      });
    },
  };
})(jQuery, window.APP);
