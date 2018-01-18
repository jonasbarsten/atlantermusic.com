// CHANGE BACKGROUND IMAGE BASED ON WIDTH

var backgroundImage = '';

$(document).ready(function(){

	function checkWidth () {
		if ($(window).width() < 600) {
			// SMALL
			backgroundImage = 'url("img/bg-mobile.jpg") no-repeat center center fixed';
		} else {
			// BIG
			backgroundImage = 'url("img/bg-desktop.jpg") no-repeat center center fixed';
		}
	}

	$(window).resize(checkWidth);
	$(window).on("orientationchange",function(){
  		checkWidth();
	});

});

// initialize the application
var app = Sammy('#main', function() {

	
// define a 'route'
  this.get('#/:doc', function() {
	var url = this.params['doc'];

// WHAT TO DO WHEN /#/MENU

	if (url == 'menu') {

		var light = $('#light-iframe').html();
		var jareeze = $('#jareeze-iframe').html();
		$('#light-iframe iframe').remove();
		$('#jareeze-iframe iframe').remove();
		$('#light-iframe').html(light);
		$('#jareeze-iframe').html(jareeze);
		// $('.embed-responsive-item').get(0).stopVideo();
		$('body').css({
			background: backgroundImage,
			'-webkit-background-size': 'cover',
			'-moz-background-size': 'cover',
			'-o-background-size': 'cover',
			backgroundSize: 'cover'
		});
		$('.section').addClass('hidden');
		$('#menu').removeClass('hidden');
		$('#navbar-hamburger').addClass('hidden');
		// $('#navbar-close').removeClass('hidden');
		$('.navbar-header a').css('color', '#000DFE');
		$('a').hover().css('color', '#000DFE');

// WHAT TO DO WHEN DIV TO BE RENDERED WITH ROUTE HAS A CLASS OF "fullscreen-background"

	} else if ($('#' + url).hasClass('fullscreen-background')) {

		$('body').css('background', '#000DFE');
		$('a').hover().css('color', 'white');
		$('.navbar-header a').css('color', '#FFF111');
		$('#' + url).removeClass('hidden');
		$('#menu').addClass('hidden');
		$('#navbar-hamburger').removeClass('hidden');
		// $('#navbar-close').addClass('hidden');

// WHAT TO DO FOR ALL OTHER ROUTES

	}else {

		$('body').css({
			background: backgroundImage,
			'-webkit-background-size': 'cover',
			'-moz-background-size': 'cover',
			'-o-background-size': 'cover',
			backgroundSize: 'cover'
		});
		$('.navbar-header a').css('color', '#000DFE');
		$('a').hover().css('color', '#000DFE');
		$('#' + url).removeClass('hidden');
		$('#menu').addClass('hidden');
		$('#navbar-hamburger').removeClass('hidden');
		// $('#navbar-close').addClass('hidden');
	}
  });
});

// start the application
app.run('#/');

