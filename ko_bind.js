//
//

/*
  ko_bind - Programmatic KnockoutJS with jQuery
  Copyright (C) 2011 Daniel Tsadok
  zlib license

  This software is provided 'as-is', without any express or implied
  warranty.  In no event will the authors be held liable for any damages
  arising from the use of this software.

  Permission is granted to anyone to use this software for any purpose,
  including commercial applications, and to alter it and redistribute it
  freely, subject to the following restrictions:

  1. The origin of this software must not be misrepresented; you must not
     claim that you wrote the original software. If you use this software
     in a product, an acknowledgment in the product documentation would be
     appreciated but is not required.
  2. Altered source versions must be plainly marked as such, and must not be
     misrepresented as being the original software.
  3. This notice may not be removed or altered from any source distribution.

*/

(function($) {
  var methods = {};

  methods.bind = function(binder, action) {
    //init data structure to store knockout bindings
    if (!this.data("ko_bindings"))
      this.data("ko_bindings", {});
    
    var ko_bindings = this.data("ko_bindings");
    
    binder = $.trim(binder);
    action = $.trim(action);

    //add to bindings
    ko_bindings[binder] = action;
    
    var a = [];
    for (b in ko_bindings)
    {
      a.push(b + ": " + ko_bindings[b]);
    }

    return this.attr("data-bind", a.join(",")); 
  };
  
  $.fn.ko_bind = function(method)
  {
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else {
      return methods.bind.apply( this, arguments );
    }
  };
})(jQuery);
