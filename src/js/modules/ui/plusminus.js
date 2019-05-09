//////////
// PLUS/MINUS
//////////
(function($, APP) {
  APP.Plugins.PlusMinus = {
    init: function() {
      var _this = this;
      var $elements = $('[js-ui-counter]');
      if ($elements.length === 0) return;

      _document
        .on('click', '[js-ui-counter] [data-type="plus"]', function() {
          _this.changePlusMinusInput($(this), 'plus');
        })
        .on('click', '[js-ui-counter] [data-type="minus"]', function() {
          _this.changePlusMinusInput($(this), 'minus');
        });
    },
    changePlusMinusInput: function($el, type) {
      var $input = $el.closest('[js-ui-counter]').find('input');
      var $form = $input.closest('form');
      var minValue = $input.attr('min');
      var maxValue = $input.attr('max');
      var inputVal = parseInt($input.val());

      // get new value
      var newValue;
      if (type === 'plus') {
        newValue = inputVal + 1;
      } else if (type === 'minus') {
        newValue = inputVal - 1;
      }

      // limit values
      if (newValue <= minValue) {
        newValue = minValue;
      }
      if (newValue >= maxValue) {
        newValue = maxValue;
      }

      // assign value
      $input.val(newValue);
      $input.trigger('change');

      // trigger form change if present
      if ($form.length > 0) {
        $form.trigger('change');
      }
    },
  };
})(jQuery, window.APP);
