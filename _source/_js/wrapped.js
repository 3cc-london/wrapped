$(document).ready(function () {

	$('body').css('visibility','visible').hide().fadeIn('slow');
	var curtainwidth = $('.text').width();
	var closed = true;
	var selectorclosed = true;

	$( 'a.toggle' ).click(function() {

			$( '.cover' ).addClass( 'covertransition' );

		//Close work selector
			$( '.content-arrow-left' ).css("display", "block");
			$( '.content-arrow-right' ).css("display", "block");

			$('.work-curtain').animate({
				width: '0px'
				}, 500, function() {
					    
			});

			$('.work-curtain ').css("z-index","1");
			$('.moreworkrow > li').css('visibility','hidden').hide().fadeIn('slow');
			 selectorclosed = true;
		//

		if (closed)
		{
			$( '.content-arrow-left' ).css("display", "none");
			$( '.content-arrow-right' ).css("display", "none");
			//Burger Animation
			$(this).toggleClass('active');
			

			$('.menu-curtain').animate({
				width: '100%'
				}, 500, function() {
					    
			});			


			$('.text').css('visibility','hidden').hide().fadeOut('slow');
			$('.menu-curtain ').css("z-index","3");
			$('.left-content').css("z-index","4");

			  setTimeout(function()
			    {
			        var shown = $('.menu > li:first');
			        shown.css('visibility','visible').hide().fadeIn('slow').delay(60);
			        setInterval(function(){
			            if(shown.next().length){
			                shown = shown.next();
			                shown.css('visibility','visible').hide().fadeIn('slow').delay(60);
			            }
			        },80);
			    }, 500);

			  setTimeout(function()
			    {
			        $('.social-holder > .fa').css('visibility','visible').hide().fadeIn('slow');
			    }, 900);

			  closed = false;
		}
		else
		{
			$( '.content-arrow-left' ).css("display", "block");
			$( '.content-arrow-right' ).css("display", "block");
			//Burger Animation
			$(this).toggleClass('active');

			$('.menu-curtain').animate({
				width: '0px'
				}, 500, function() {
					    
			});

			setTimeout(function()
			{
				$('.menu-curtain ').css("z-index","1");
			}, 500);

			$('.social-holder > .fa').css('visibility','hidden').hide().fadeOut('slow');
			$('.menu > li').css('display','none').hide().fadeOut('slow');
			$('.text').css('visibility','visible').hide().fadeIn('slow');
			$('.left-content').css("z-index","3");
			 closed = true;
		}

	});

// Work Arrows

    $('.content-arrow-right').click(function () {
         var pos = $('.image-holder').scrollLeft() + 800;
         $(".image-holder").stop().animate({ scrollLeft:  pos }, 800);
    });


    $('.content-arrow-left').click(function () {
         var pos = $('.image-holder').scrollLeft() - 800;
         $(".image-holder").stop().animate({ scrollLeft	:  pos }, 800);
    });

    $(function() {

   		$('.image-holder').mousewheel(function(event, delta) {
	      this.scrollLeft -= (delta * 1);
	      event.preventDefault();
		  });
	});

//More Work Selector Animation 

	$( '.work-selector' ).click(function() {

		if (selectorclosed)
		{
			//Close Left content 
			$('.menu-curtain').animate({
				width: '0px'
				}, 500, function() {
					    
			});

			$('.social-holder > .fa').css('visibility','hidden').hide().fadeIn('slow');
			$('.menu > li').css('visibility','hidden').hide().fadeIn('slow');
			$('.text').css('visibility','visible').hide().fadeIn('slow');
			$('.menu-curtain ').css("z-index","1");
			$('.left-content').css("z-index","3");
			 closed = true;
			//

			$( '.content-arrow-left' ).css("display", "none");
			$( '.content-arrow-right' ).css("display", "none");

			$('.work-curtain').animate({
				width: '100%'
				}, 500, function() {
					    
			});			

			$('.work-curtain ').css("z-index","3");
			$('.right-content').css("z-index","4");

			setTimeout(function()
			    {
			        var shown = $('.moreworkrow > li:first');
			        shown.css('visibility','visible').hide().fadeIn('slow').delay(15);
			        setInterval(function(){
			            if(shown.next().length){
			                shown = shown.next();
			                shown.css('visibility','visible').hide().fadeIn('slow').delay(15);
			            }
			        },25);
			    }, 100);

			  selectorclosed = false;
		}
		else
		{
			$('.moreworkrow > li').css('visibility','hidden').hide().fadeIn('slow');
			$( '.content-arrow-left' ).css("display", "block");
			$( '.content-arrow-right' ).css("display", "block");

			$('.work-curtain').animate({
				width: '0px'
				}, 500, function() {
					    
			});

			setTimeout(function()
			{
				$('.work-curtain ').css("z-index","1");
			}, 500);

			 selectorclosed = true;
		}

	});

//Image replacement 
	$('.textcover').on('mouseover', function(){
		console.log(this);
		$('.a', this).stop().animate({'opacity': '0'}, 300);
	}).on('mouseout', function(){
		$('.a', this).stop().animate({'opacity': '1'}, 300);
	});
            
});
