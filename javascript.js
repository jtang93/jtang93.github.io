(function($) {

$(document).ready(function(){
	
	$(".fixed-nav-bar").hide();	
	
	$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop()>650) {
				$(".fixed-nav-bar").fadeIn();
			} 
			else {
				$(".fixed-nav-bar").fadeOut();
			}
		});
	});
});

$(document).ready(function(){
	$(".scroll").on('click', function(event) {
		if(this.hash !== "") {
			event.preventDefault();
			
			var hash = this.hash;
			
			$("html, body").animate({
				scrollTop: $(hash).offset().top
			}, 800, 'swing');
			
			}
	});
});
})(jQuery);