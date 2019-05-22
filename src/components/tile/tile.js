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
        function clearPlaceHolder() {
          if ($el.text().length == 0) {
            $el.empty();
          }
        }

        $el.focus(function() {
          $el.addClass('is-editing');
        });
        $el.blur(function() {
          $el.removeClass('is-editing');
        });

        $el.keyup(clearPlaceHolder);

        $el.click(clearPlaceHolder);

        $el.bind('input', clearPlaceHolder);

        $el.change(clearPlaceHolder);
      });
    },
  };
})(jQuery, window.APP);
