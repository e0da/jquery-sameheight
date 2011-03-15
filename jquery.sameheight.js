/*
* jquery.sameheight.js v1.0.0
* http://github.com/sidewaysmilk/jquery-sameheight
*
* Copyright 2011, Justin Force
* Licensed under the MIT license
*
* Set selected elements to the same height as the tallest element in the
* selection. Automatically adjust when the page is resized.
*/

/*
* $('.someClass').sameHeight()
*
* Set all selected elements to the same height
*/
jQuery.fn.sameHeight = function() {
  var these = this;
  function setHeight() {
    var max = 0;
    these.height('auto').each(function() {
      max = Math.max(max, jQuery(this).height());
    }).height(max);
  };
  jQuery(window).resize(setHeight);
  setHeight();
  return this;
};

/*
* for $.sameHeight()
*
* Applies to everything with class="sameheight sh_something"
*
* Groups by sh_whatever so that multiple sets can be easily created and
* maintained independently, so
* <div class="sameheight sh_top"></div> <div class="sameheight sh_top"></div>
* <div class="sameheight sh_friends left"></div> <div class="sameheight sh_friends somethingElse"></div>
* creates 2 sets of divs which will keep the same height, but will not affect each other.
*/
jQuery.sameHeight = function() {
  jQuery('.sameheight').each(function() {
    jThis = jQuery(this);
    var selectors = [];

    // group by class="sh_whatever"
    var match = jThis.attr('class').match(/(sh_\S+)/);
    if (match && match[1]) {
      if (selectors.indexOf(match[1]) < 0) {
        selectors.push(match[1]);
      }
    }

    jQuery.each(selectors, function(index, value) {
      jQuery('.' + value).sameHeight();
    });
  });
};

