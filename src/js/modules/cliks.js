//////////
// CICKS
//////////
(function($, APP) {
  APP.Plugins.Clicks = {
    init: function() {
      $(document)
        .on('click', '[href="#"]', function(e) {
          e.preventDefault();
        })
        .on('click', '.js-link', function(e) {
          var dataHref = $(this).data('href');
          if (dataHref && dataHref !== '#') {
            e.preventDefault();
            e.stopPropagation();
            Barba.Pjax.goTo(dataHref);
          }
        })
        .on('click', '.js-open-parent', function(e) {
          e.preventDefault();
          e.stopPropagation();
          $(this)
            .parent()
            .toggleClass('is-open');
          $(this)
            .toggleClass('is-open')
            .parent('.project-questions__sidebar-item')
            .children('.project-questions__sidebar-item')
            .slideToggle();
        })
        .on('click', '.js-task-button', function(e) {
          e.preventDefault();
          e.stopPropagation();
          $('.js-task-button').removeClass('is-active');
          $(this).addClass('is-active');
        })
        .on('click', '.js-sidebar-hide', function(e) {
          e.preventDefault();
          e.stopPropagation();
          $('.project-questions__sidebar').toggleClass('is-hide');
          $(this).toggleClass('is-hide');
        })
        .on('click', '.js-open-content-info', function(e) {
          e.preventDefault();
          e.stopPropagation();
          $('.content-info__hidden-info').slideToggle();
          $(this).toggleClass('is-active');
        })

        // .on('mouseover', '.js-open-parent', function(e) {
        //   e.preventDefault();
        //   e.stopPropagation();
        //   $(this).css('background', '#F2F5FA');
        // })
        // .on('mouseout', '.js-open-parent', function(e) {
        //   e.preventDefault();
        //   e.stopPropagation();
        //   $(this).css('background', 'none');
        // })
        // prevent going the same link (if barba is connected)
        .on('click', 'a, .js-link', function(e) {
          var href = $(this).data('href') || $(this).attr('href');
          var path = window.location.pathname;

          if (href === path.slice(1, path.length)) {
            e.preventDefault();
            e.stopPropagation();
          }
        })
        // scroll to section
        .on('click', 'a[href^="#section"]', function() {
          // section scroll
          var el = $(this).attr('href');
          var topTarget = $(el).offset().top;

          // $('body, html').animate({scrollTop: topTarget}, 1000);
          TweenLite.to(window, 1, {
            scrollTo: { y: topTarget, autoKill: false },
            ease: easingSwing,
          });

          return false;
        });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
