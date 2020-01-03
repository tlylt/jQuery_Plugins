/**
 * Equalize the heights of different columns
 * Sample usage
 * $('target-item').equalHeight()
 * */
(function($) {
  "use strict";

  $.fn.equalHeight = function() {
    var tallestHeight = 0,
      $items = $(this);

    $items.each(function(idx, element) {
      var itemHeight = $(element).outerHeight();

      if (itemHeight > tallestHeight) {
        tallestHeight = itemHeight;
      }
    });

    $items.css("min-height", tallestHeight);
    return this;
  };
})(jQuery);
