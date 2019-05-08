//////////
// LEGACY
//////////
(function($, APP) {
  APP.Plugins.Viewport = {
    init: function() {
      _window.on('load ready', this.setViewport);
      _window.on('resize', debounce(this.setViewport, 200));
    },
    setViewport: function() {
      var metaTag = '<meta name="viewport" content="width=device-width, initial-scale=1">';

      if ($(window).width < '768') {
        $('head meta[name="viewport"]').remove();
      } else {
        if ($('head meta[name="viewport"]').length === 0) {
          $('head').append(metaTag);
        }
      }
    },
  };
})(jQuery, window.APP);
