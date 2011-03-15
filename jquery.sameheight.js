/*
* sameHeight jQuery plugin
* http://github.com/sidewaysmilk/jquery-sameheight
*
* Copyright 2011, Justin Force
* Licensed under the MIT license
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

