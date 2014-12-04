$(document).ready(function () {

	$('body').css('visibility','visible').hide().fadeIn('slow');
	var curtainwidth = $('.menu-curtain').width();

	var closed = true;

	document.querySelector( "#nav-toggle " ).addEventListener( "click", function() {
	  this.classList.toggle( "active" );
	});

	$( "#nav-toggle" ).click(function() {

		$( '.cover' ).addClass( 'covertransition' );

		if (closed)
		{
			if (curtainwidth < 1)
			{
				$('.menu-curtain').animate({
				    width: '100%'
					  }, 500, function() {
					    
				});			
			}

			$('.text').css('visibility','hidden').hide().fadeOut('slow');

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
			if (curtainwidth < 1)
			{
				$('.menu-curtain').animate({
				    width: '0px'
					  }, 500, function() {
					    
				});
			}

			$('.social-holder > .fa').css('visibility','hidden').hide().fadeIn('slow');
			$('.menu > li').css('visibility','hidden').hide().fadeIn('slow');
			$('.text').css('visibility','visible').hide().fadeIn('slow');
			 closed = true;
		}

	});

	//PAGE ANIMATIONS


});
