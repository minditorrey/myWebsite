/*
    Version 1.3.2
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

(function(e){e.fn.viewportChecker=function(t){var n={classToAdd:"visible_scroll",offset:100,callbackFunction:function(e){}};e.extend(n,t);var r=this,i=e(window).height();this.checkElements=function(){var t=navigator.userAgent.toLowerCase().indexOf("webkit")!=-1?"body":"html",s=e(t).scrollTop(),o=s+i;r.each(function(){var t=e(this);if(t.hasClass(n.classToAdd)){return}var r=Math.round(t.offset().top)+n.offset,i=r+t.height();if(r<o&&i>s){t.addClass(n.classToAdd);n.callbackFunction(t)}})};e(window).scroll(this.checkElements);this.checkElements();e(window).resize(function(e){i=e.currentTarget.innerHeight})}})(jQuery)