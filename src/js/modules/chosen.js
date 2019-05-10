////////////////////
// SELECT CHOSEN
////////////////////
(function($, APP) {
  APP.Plugins.Chosen = {
    init: function() {
      var $chosen = $('[js-select-chosen]');
      if ($chosen.length === 0) return;

      $chosen.chosen({ no_results_text: 'Не найдено:' });
      $('.chosen-container input[type=text]').attr('placeholder', 'Поиск...');
    },
  };
})(jQuery, window.APP);
