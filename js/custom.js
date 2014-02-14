$(document).ready(function (){
	var fb_fade = $("#facebook");
	fb_fade.bind("inview", function (event, visible){
		if (visible === true) {
			fb_fade.fadeOut(2000, easing="linear");
		} else {
			fb_fade.fadeIn();
		}
	});
});

