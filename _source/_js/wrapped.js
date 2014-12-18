$(document).ready(function () {

	$('body').css('visibility','visible').hide().fadeIn('slow');
	var curtainwidth = $('.text').width();
	var menucurtainwidth = $('.menu-curtain').width();
	var closed = true;
	var selectorclosed = true;
	var windowheight = $(window).height();
	var windowwidth = $(window).width();
	// $('.menu-curtain').css('max-height', windowheight,'!important');

	/**
	***	Open menu curtain function 	
	*/

	function openMenuCurtain(){
		$( '.content-arrow-left' ).css("display", "none");
		$( '.content-arrow-right' ).css("display", "none");
		//Burger Animation
		$('a.toggle').addClass('active');
			
		$('.menu-curtain').animate({
			width: '100%'
			}, 500, function() {
			// Disable vertical scrolling if menu curtain is 100%
			$('body').addClass('overflow');
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
	}

	/**
	***	Remove menu curtain function 	
	*/

	function removeMenuCurtain(){
		$('.menu-curtain').animate({
			width: '0px'
			}, 500, function() {	
			// Enable vertical scrolling if menu curtain is 100%
			$('body').removeClass('overflow');	    
		});

		setTimeout(function()
		{
			$('.menu-curtain ').css("z-index","1");
		}, 500);

		$('a.toggle').removeClass('active');
		$('.social-holder > .fa').css('visibility','hidden').hide().fadeIn('slow');
		$('.menu > li').css('visibility','hidden').hide().fadeIn('slow');
		$('.text').css('visibility','visible').hide().fadeIn('slow');
		$('.left-content').css("z-index","2");
	}

	/**
	*** Open More Work Curtain Function
	*/

	function openWorkCurtain(){
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
	}

	/**
	***	Remove more work curtain function 	
	*/

	function removeWorkCurtain(){
		$('.moreworkrow > li').css('visibility','hidden').hide().fadeIn('slow');
		$( '.content-arrow-left' ).css("display", "block");
		$( '.content-arrow-right' ).css("display", "block");
		$('.right-content').css("z-index","2");

		$('.work-curtain').animate({
			width: '0px'
			}, 500, function() {
					    
		});

		setTimeout(function()
		{
			$('.work-curtain ').css("z-index","1");
		}, 500);
	}

	/**
	***	Remove curtains on background click 	
	*/

	$( '.work-content, .cover, .work-grid' ).click(function() {
		removeWorkCurtain();
		selectorclosed = true;

		if (!closed){
			removeMenuCurtain();
			closed = true;
		}
	});

	/**
	***	Remove curtains on cover click 	
	*/

	$( 'a.toggle' ).click(function() {

		$( '.cover' ).addClass( 'covertransition' );

		//Close work curtain
		removeWorkCurtain();
		selectorclosed = true;
		//

		if (closed)
		{
			// Open menu curtain
			openMenuCurtain();
			closed = false;
			//
		}

		else
		{	
			// Close menu curtain
			removeMenuCurtain();
			closed = true;
			//
		}

	});

	/**
	***	 Work Arrows 
	*/

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
		 });
	});

	/**
	***	 More Work Selector Animation 
	*/

	$( '.work-selector' ).click(function() {
		if (selectorclosed)
		{
			// Close Left Menu 
			removeMenuCurtain();
			closed = true;
			// Open work curtain
			openWorkCurtain();
			selectorclosed = false;
		}
		else
		{
			//Close work curtain
			removeWorkCurtain();
			selectorclosed = true;
		}
	});

	//Image replacement for Services
	$('.textcover').on('mouseover', function(){
		console.log(this);
		$('.a', this).stop().animate({'opacity': '0'}, 300);
	}).on('mouseout', function(){
		$('.a', this).stop().animate({'opacity': '1'}, 300);
	});


// End of Document.load function            
});
