jQuery.noConflict();
(function($) {
  $.fn.sameHeight = function() {
    var these = $(this);
    function setHeight() {
      var max = 0;
      these.height('auto').each(function() {
        max = Math.max(max, $(this).height());
      }).height(max);
    };
    $(window).resize(setHeight);
    setHeight();
    return this;
  };
})(jQuery);
