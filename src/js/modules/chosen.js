////////////////////
// SELECT CHOSEN
////////////////////
(function($, APP) {
  APP.Plugins.Chosen = {
    init: function() {
      var $chosen = $('[js-select-chosen]');
      if ($chosen.length === 0) return;

      $chosen.each(function(i, select) {
        var $select = $(select);
        var isMultiple = $select.attr('multiple');

        var options = {
          no_results_text: 'Не найдено:',
          hide_results_on_select: false,
          include_group_label_in_selected: true,
          // allow_single_deselect: true,
        };

        if (isMultiple) {
          // create placeholder for keeping number of selected values
          $select.on('chosen:ready', function() {
            var $container = $select.next();
            var numberOfValues = $select.val().length;
            var placeholder = `<a class="chosen-single chosen-single--from-multi">
              <span>${buildPlaceholder(numberOfValues, $select.val())}</span>
              <div><b></b></div>
            </a>`;
            $container.prepend(placeholder);
          });

          // change placeholder on selecting
          $select.on('change', function(evt, params) {
            var numberOfValues = $select.val().length;
            var $container = $select.next();
            var $placeholder = $container.find('.chosen-single--from-multi span');
            $placeholder.text(buildPlaceholder(numberOfValues, $select.val()));
          });
        }

        $select.chosen(options);
      });

      $('.chosen-container input[type=text]').attr('placeholder', 'Поиск...');

      // making selected values deselectable
      _document.on('click', '.chosen-container-multi .result-selected', function() {
        var $option = $(this);
        var $container = $option.closest('.chosen-container-multi');
        var deselectedIndex = $option.data('option-array-index');
        var $originalSelect = $container.prev();
        var value = $($originalSelect.find('option')[deselectedIndex]).attr('value');
        var currentSelectValues = $originalSelect.val();

        // find value and remove from selected values
        var indexInSelected = currentSelectValues.indexOf(value);
        if (indexInSelected === -1) {
          // console.log('err')
          return;
        }
        var newValue = removeFromArray(currentSelectValues, function(x) {
          return x !== value;
        });

        $originalSelect
          .val(newValue)
          .trigger('chosen:updated')
          .trigger('change');
      });

      function buildPlaceholder(number, value) {
        if (number === 1) {
          return value[0];
        }
        return number + ' ' + Plurize(number, 'выбран', 'выбрано', 'выбрано');
      }
    },
  };
})(jQuery, window.APP);
