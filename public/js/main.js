$(document).ready(function(){ 
	$('.navbar-toggle').on('click', function () {
		$('.collapse, #mainContainer').toggleClass('in');
	});		
});

$(window).resize(function () {
	if ($(window).width() > 768) {
		$('.collapse, #mainContainer').removeClass('in');
	};
});  
	$(window).bind('scroll', function() {
	var navHeight = $( '#dv-fixed' ).height();
		 if ($(window).scrollTop() > navHeight) {
			 $('#dv-fixed').addClass('fixed');
		 }
		 else {
			 $('#dv-fixed').removeClass('fixed');
		 }
	}); 