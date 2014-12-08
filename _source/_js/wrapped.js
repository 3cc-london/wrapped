$(document).ready(function () {
	

	function minheightResize(){
		var minheight = $('.minheight').width();
		$('.minheight').css("height",minheight);
	}

	window.onresize = minheightResize;     // When the browser changes size
	minheightResize();


	$('body').css('visibility','visible').hide().fadeIn('slow');
	var curtainwidth = $('.text').width();
	var closed = true;

	document.querySelector( "#nav-toggle " ).addEventListener( "click", function() {
	  this.classList.toggle( "active" );
	});

	$( "#nav-toggle" ).click(function() {

		$( '.cover' ).addClass( 'covertransition' );

		if (closed)
		{

			$('.menu-curtain').animate({
				width: '100%'
				}, 500, function() {
					    
			});			


			$('.text').css('visibility','hidden').hide().fadeOut('slow');
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

			$('.menu-curtain').animate({
				width: '0px'
				}, 500, function() {
					    
			});

			$('.social-holder > .fa').css('visibility','hidden').hide().fadeIn('slow');
			$('.menu > li').css('visibility','hidden').hide().fadeIn('slow');
			$('.text').css('visibility','visible').hide().fadeIn('slow');
			$('.left-content').css("z-index","3");
			 closed = true;
		}

	});

	//PAGE ANIMATIONS


});
