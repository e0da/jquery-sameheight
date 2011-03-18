/*
* jquery.sameheight.js v1.0.0
* http://github.com/sidewaysmilk/jquery-sameheight
*
* Copyright 2011, Justin Force
* Licensed under the MIT license
*
* Set selected elements to the same height as the tallest element in the
* selection. Automatically adjust on $(window).resize()
*/

// Set all selected elements to the same height
jQuery.fn.sameHeight = function() {
  var these = this; // store a reference to `this` for use inside inner function

  // Set the resize listener
  jQuery(window).resize(function() {
    var max = 0; // the height of the tallest element

    // Set height to auto first or it'll grow when resized, then find the max
    // height by comparing all of the elements
    these.height('auto').each(function() {
      max = Math.max(max, jQuery(this).height());
    }).height(max); // and set the height of the selection

  }).resize(); // trigger resize to set height initially

  return this; // maintain chaining
};

// Set everything with class="sameheight sh_something" to the same height
jQuery.sameHeight = function() {

  jQuery('.sameheight').each(function() {
    var selectors = []; // array of the "sh_X" class names

    // group by class="sh_whatever"
    var match = jQuery(this).attr('class').match(/(sh_\S+)/);
    if (match && match[1] && selectors.indexOf(match[1]) < 0)
      selectors.push(match[1]);

    // Run $.fn.sameHeight on each selection
    jQuery.each(selectors, function(index, value) {
      jQuery('.' + value).sameHeight();
    });
  });
};

