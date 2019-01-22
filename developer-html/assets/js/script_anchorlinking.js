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
	//$('a.scrollto').on('click', function(e){
        //var target = this.hash;    
        //e.preventDefault();
		//$('body').scrollTo(target, 800, {offset: 200, 'axis':'y'});
    //});
	


/* Activate offset padding */
$(document).ready(function () {
    $('a').on('click', function (e) {
        var target = this.hash,
            $target = $(target);

       $('html, body').stop().animate({
        'scrollTop': $target.offset().top-100
    }, 900, 'swing', function () {
    });

        console.log(window.location);

        return false;
    });
});