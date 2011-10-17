/*
* jquery.sameheight.js v1.1
* http://github.com/sidewaysmilk/jquery-sameheight
*
* Copyright 2011, Justin Force
* Licensed under the MIT license
*
* Set selected elements to the same height as the tallest element in the
* selection. Automatically adjust on $(window).resize()
*/

/*jslint browser: true, white: true */
/*global jQuery */

(function($) {

'use strict';

// add Array.indexOf if it isn't defined
if (!Array.indexOf) {
  Array.prototype.indexOf = function(obj) {
    var i, len = this.length; // for loop vars

    for (i = 0; i < len; i += 1) {
      if (obj === this[i]) {
        return i;
      }
    }
    return -1;
  };
}


// Set all selected elements to the same height
$.fn.sameHeight = function() {

  var these = this; // for use in nested function

  // Set the resize listener, then trigger resize to set height immediately.
  // First set all heights to auto or they will grow when the window resizes.
  // Find the max height by comparing all of the elements, then set the height
  // of the selection
  $(window).resize(function() {
    var max = 0;
    these.height('auto').each(function() {
      max = Math.max(max, $(this).height());
    }).height(max);
  }).resize();

  return this;
};


// Set everything with class="sameheight sh_something" to the same height
$.sameHeight = function() {

  $('.sameheight').each(function() {
    var selectors = [], // array of the "sh_X" class names
    match;              // all elements with className sh_[something]

    match = $(this).attr('class').match(/(sh_\S+)/);
    if (match && match[1] && selectors.indexOf(match[1]) < 0) {
      selectors.push(match[1]);
    }

    $.each(selectors, function() {
      $('.' + this).sameHeight();
    });
  });
};

}(jQuery));

