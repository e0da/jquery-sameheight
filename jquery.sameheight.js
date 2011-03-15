/*
* sameHeight jQuery plugin
* http://github.com/sidewaysmilk/jquery-sameheight
*
* Copyright 2011, Justin Force
* Licensed under the MIT license
*/

/*
* for $('.someClass').sameHeight()
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
* Applies to everything with class="sameheight sh_something"
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

