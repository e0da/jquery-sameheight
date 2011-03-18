jquery.sameheight.js
=====================

Very simple jQuery plugin to keep page elements the same height. Selected
elements are set to the height of the tallest element in the selection. The
height is adjusted when the page is resized in case elements in the set are
reflected (e.g. if the page is made narrower, one of your elements may become
taller, so all of your elements will be adjusted to match).

Use
---------------------

Call it like you would any jQuery plugin. This will set all items with
class="blurb" to the same height.

    $('.blurb').sameHeight();

Can also be called as

    $.sameHeight();

And all elements of the format

    <div class="sameheight sh_something"></div>
    <div class="sameheight sh_something"></div>
    <div class="sameheight sh_another anotherClass"></div>
    <div class="sameheight sh_another"></div>
    <div class="sameheight sh_another somethingElse"></div>

will give you two sets that are automatically selected and maintained. To use
it this way, you __must__ include the class "sameheight" __AND__ "sh_ID" where _ID_
is any identifier common to the elements that you want to set to the same
height. It is quite safe to add any other classes that you may need.

Demo
---------------------

For a demo, just see `same_height.html` in action. Play with it. Change the
width of the elements and resize the page.

Copyright and License
---------------------

Copyright © 2011, Justin Force
Licensed under the MIT license

