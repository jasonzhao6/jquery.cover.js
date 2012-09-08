/*! jQuery.cover v1.0 by Jason Zhao | https://github.com/jasonzhao6 */
(function($) {
  $.fn.extend({
    cover: function() {
      var $html = $('html'),
          $image = $(this),
          imageAlign = {
            h: $image.data('horizontal-align'),
            v: $image.data('vertical-align')
          },
          imageSize = {
            w: $image.data('image-width'),
            h: $image.data('image-height')
          },
          imageAspectRatio = imageSize.w / imageSize.h,
          windowSize, windowAspectRatio,
          initialize = function() {
            if ($html.css('background-size') === 'cover') {
              cssSolutionForModernBrowsers();
            } else {
              jsSolutionForOlderBrowsers();
            }
          },
          cssSolutionForModernBrowsers = function() {
            // Default horizontal alignment to left
            if (imageAlign.h !== 'center' && imageAlign.h !== 'right') {
              imageAlign.h = 'left';
            }
            // Default vertical alignment to top
            if (imageAlign.v !== 'center' && imageAlign.v !== 'bottom') {
              imageAlign.v = 'top';
            }
            $html.css({
              'background-image': 'url(' + $image.attr('src') + ')',
              'background-position': imageAlign.h + ' ' + imageAlign.v
            });
          },
          jsSolutionForOlderBrowsers = function() {
            // Adjust for horizontal alignment, default to left
            switch (imageAlign.h) {
              case 'center':
                imageAlign.h = 2;
                break;
              case 'right':
                imageAlign.h = 1;
                break;
              default:
                imageAlign.h = 1000000;
            }
            // Adjust for vertical alignment, default to top
            switch (imageAlign.v) {
              case 'center':
                imageAlign.v = 2;
                break;
              case 'bottom':
                imageAlign.v = 1;
                break;
              default:
                imageAlign.v = 1000000;
            }
            $(window).resize(resizeAction).trigger('resize');
            $image.show();
          },
          resizeAction = function() {
            windowSize = {
              w: $(window).width(),
              h: $(window).height()
            };
            windowAspectRatio = windowSize.w / windowSize.h;
            // When background image is wider than window
            if (imageAspectRatio > windowAspectRatio) {
              $image.css({
                'left': Math.min(((windowSize.w - imageSize.w * windowSize.h / imageSize.h) / imageAlign.h), 0) + 'px',
                'top': '0',
                'width': 'auto',
                'height': '100%'
              });
            // When window is wider than background image
            } else {
              $image.css({
                'left': '0',
                'top': Math.min(((windowSize.h - imageSize.h * windowSize.w / imageSize.w) / imageAlign.v), 0) + 'px',
                'width': '100%',
                'height': 'auto'
              });
            }
          };
      initialize();
    }
  });
})(jQuery);