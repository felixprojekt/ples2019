$(document).ready(function() {

	$('.nav-icon').click(function(){
		$(this).toggleClass("open");
		$(".nav").toggleClass("active");
	});

    $(window).scroll(function() {
	    var ScrollTop = $(window).scrollTop();
	    if (ScrollTop > 0) {
	    	$("nav").addClass("sticky");
	    } else {
	    	$("nav").removeClass("sticky")
	    }

	    if(ScrollTop > 1000) {
	    	$(".bg").addClass("active");
	    } else {
	    	$(".bg").removeClass("active");
	    }
	});

	var root = $('html, body');
	$('nav a').click(function() {
		root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 800);
			return false;
	});


});

function openInNewTab(url) {
	var win = window.open(url, '_blank');
	win.focus();
}

