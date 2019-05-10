//////////
// AUTOSIZE
//////////
(function($, APP) {
  APP.Plugins.TextareaAutosize = {
    init: function() {
      autosize($('.js-autosize'));
    },
  };
})(jQuery, window.APP);
