//////////
// HEADER
//////////
(function($, APP) {
  APP.Components.Tile = {
    init: function() {
      this.editableCaption();
    },
    editableCaption: function() {
      var $editable = $('.js-editable-caption');
      if ($editable.length === 0) return;

      $editable.each(function(i, el) {
        var $el = $(el);
        $el.focus(function() {
          $el.addClass('is-editing');
        });
        $el.blur(function() {
          $el.removeClass('is-editing');
        });
      });
    },
  };
})(jQuery, window.APP);
