////////////////
// FORM VALIDATIONS
// jQuery validate plugin https://jqueryvalidation.org
////////////////

(function($, APP) {
  APP.Plugins.Validations = {
    init: function() {
      this.langPack();
      this.applyForms();
    },
    data: {
      validateErrorPlacement: function(error, element) {
        error.addClass('ui-input__validation');
        if (element.is('select')) {
          error.appendTo(element.closest('.selectric-wrapper'));
        } else {
          error.appendTo(element.parent('div'));
        }
      },
      validateHighlight: function(element) {
        var $element = $(element);

        if ($element.is('select')) {
          $element.closest('.selectric-wrapper').addClass('has-error');
        } else {
          $(element).addClass('has-error');
        }
      },
      validateUnhighlight: function(element) {
        var $element = $(element);

        if ($element.is('select')) {
          $element.closest('.selectric-wrapper').removeClass('has-error');
        } else {
          $(element).removeClass('has-error');
        }
      },
      validateSubmitHandler: function(form) {
        $(form).addClass('is-loading');

        // pseudo func
        if ($(form).data('type') === 'add-client') {
          APP.Plugins.Modals.openMfp('#client-already-registered');
        } else {
          alert('форма валидна - отправляем $.ajax');
        }
        // $.ajax({
        //   type: 'POST',
        //   url: $(form).attr('action'),
        //   data: $(form).serialize(),
        //   success: function(response) {
        //     $(form).removeClass('is-loading');
        //     var data = $.parseJSON(response);
        //     if (data.status === 'success') {
        //       // do something I can't test
        //     } else {
        //       $(form)
        //         .find('[data-error]')
        //         .html(data.message)
        //         .show();
        //     }
        //   },
        // });
      },
      masks: {
        phone: {
          required: true,
          normalizer: function(value) {
            var PHONE_MASK = '+X (XXX) XXX-XXXX';
            if (!value || value === PHONE_MASK) {
              return value;
            } else {
              return value.replace(/[^\d]/g, '');
            }
          },
          minlength: 11,
          digits: true,
        },
      },
    },
    langPack: function() {
      /*
       * Translated default messages for the jQuery validation plugin.
       * Locale: RU (Russian; русский язык)
       */
      $.extend($.validator.messages, {
        required: 'Это поле необходимо заполнить.',
        remote: 'Пожалуйста, введите правильное значение.',
        email: 'Пожалуйста, введите корректный адрес электронной почты.',
        url: 'Пожалуйста, введите корректный URL.',
        date: 'Пожалуйста, введите корректную дату.',
        dateISO: 'Пожалуйста, введите корректную дату в формате ISO.',
        number: 'Пожалуйста, введите число.',
        digits: 'Пожалуйста, вводите только цифры.',
        creditcard: 'Пожалуйста, введите правильный номер кредитной карты.',
        equalTo: 'Пожалуйста, введите такое же значение ещё раз.',
        extension: 'Пожалуйста, выберите файл с правильным расширением.',
        maxlength: $.validator.format('Пожалуйста, введите не больше {0} символов.'),
        minlength: $.validator.format('Пожалуйста, введите не меньше {0} символов.'),
        rangelength: $.validator.format(
          'Пожалуйста, введите значение длиной от {0} до {1} символов.'
        ),
        range: $.validator.format('Пожалуйста, введите число от {0} до {1}.'),
        max: $.validator.format('Пожалуйста, введите число, меньшее или равное {0}.'),
        min: $.validator.format('Пожалуйста, введите число, большее или равное {0}.'),
      });
    },
    applyForms: function() {
      var _this = this;
      var $forms = $('.js-validate-form:not(.is-validation-attached)');
      if ($forms.length === 0) return;

      // CONSTRUCTOR LIKE FIRST
      $forms.each(function(i, form) {
        var $form = $(form);

        var validationOptions = {
          errorPlacement: _this.data.validateErrorPlacement,
          highlight: _this.data.validateHighlight,
          unhighlight: _this.data.validateUnhighlight,
          submitHandler: _this.data.validateSubmitHandler,
          // rules to be set in html as well (merged props)
          rules: {
            email: {
              required: true,
              email: true,
            },
            leadPhone: _this.data.masks.phone,
          },
          messages: {
            email: {
              required: 'Заполните это поле',
              email: 'Формат email неверен',
            },
            phone: {
              required: 'Заполните это поле',
              minlength: 'Введите корректный телефон',
            },
          },
        };

        $form.validate(validationOptions);

        $form.addClass('is-validation-attached');
      });
    },
  };
})(jQuery, window.APP);
