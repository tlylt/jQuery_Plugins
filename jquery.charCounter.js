/**
 *Reflect the character counts while user is typing.
 *Sample html:
 *<textarea id="short-message" maxlength="100"></textarea>
 *<p class="limit">limit: 100 characters</p>
 *Sample usage:
 *$('textarea').charCounter();
 */

(function($) {
  "use strict";

  $.fn.charCounter = function() {
    "use strict";

    $(this).each(function(idx, element) {
      $(element).keyup(function() {
        var maxLength = parseInt($(this).attr("maxlength"), 10);
        var charCount = $(this).val().length;
        var $counter = $(this).siblings(".limit");

        $counter.text(
          "limit: " +
            maxLength +
            " characters. remaining: " +
            (maxLength - charCount)
        );
      });
    });
    return $(this);
  };
})(jQuery);
