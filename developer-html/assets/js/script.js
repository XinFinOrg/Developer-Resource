'use strict';

$(function() {
	
    page.config({

    smoothScroll: true,

});





/*-----Custom Javascript code-------*/
$('.navbar .btn-success').on('click', function() {
    ga('send', 'event', {
      eventCategory: 'Button',
      eventAction: 'Click',
      eventLabel: 'Buy',
      transport: 'beacon'
    });
});
});

	
	
/* Activate scrollspy menu */
$('body').scrollspy({target: '.sidebar-body', offset: 100});
    


/* Smooth scrolling */
$('a.scrollto').on('click', function(e){
	var target = this.hash;    
	e.preventDefault();
	$('body').scrollTo(target, 800, {offset: 200, 'axis':'y'});
});
	
	
	
	
/* window resize */	
(function ($) {
  var

  win = $(window),
    windowWidth = 0,
    windowHeight = 0,
    timer;

  $(function () {
    windowWidth = win.width();
    windowHeight = win.height();
  });

  $.event.reverse('resize', {
    handler: function (ev, data) {
      var isWindow = this === window;

      if (isWindow && ev.originalEvent) {
        var width = win.width(),
          height = win.height();

        if ((width != windowWidth || height != windowHeight)) {

          windowWidth = width;
          windowHeight = height;
          clearTimeout(timer)
          timer = setTimeout(function () {
            win.trigger("resize");
          }, 1);

        }
        return true;
      }
    }
  });

  return $;
})(jQuery);
