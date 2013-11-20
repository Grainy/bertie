var disableMouse = false;
var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);
touchType = 'touchstart click';

var app = (function () {

	function _slideControl () {
		$('.slide').on(touchType, function() {
			if (disableMouse === false) {
				disableMouse = true;
				$('.slide').removeClass('active').addClass('inactive');
				$('.content').removeClass('active').css('transition-delay', '0');
				$(this).addClass('active');
				$(this).children('.content').addClass('active').css('transition-delay', '1s');
				setTimeout(function() {
					disableMouse = false;
				}, 1000);
			}
		});
	}

	function _slideControlKeypress () {
		$(document).keydown(function(e){
			if (disableMouse === false) {
				disableMouse = true;
				if (e.keyCode == 37) {
					if ($('*[data-slide="1"]').hasClass('active')){
						$('.slide').removeClass('active').addClass('inactive');
						$('*[data-slide="2"]').addClass('active');
						$('.content').removeClass('active').css('transition-delay', '0');
						$('*[data-slide="2"] .content').addClass('active').css('transition-delay', '1s');

					} else if ($('*[data-slide="2"]').hasClass('active')){
						$('.slide').removeClass('active').addClass('inactive');
						$('*[data-slide="3"]').addClass('active');
						$('.content').removeClass('active').css('transition-delay', '0');
						$('*[data-slide="3"] .content').addClass('active').css('transition-delay', '1s');

					} else if ($('*[data-slide="3"]').hasClass('active')){
						$('.slide').removeClass('active').addClass('inactive');
						$('*[data-slide="4"]').addClass('active');
						$('.content').removeClass('active').css('transition-delay', '0');
						$('*[data-slide="4"] .content').addClass('active').css('transition-delay', '1s');
					}
				}

				if (e.keyCode == 39) {
					if ($('*[data-slide="4"]').hasClass('active')){
						$('.slide').removeClass('active').addClass('inactive');
						$('*[data-slide="3"]').addClass('active');
						$('.content').removeClass('active').css('transition-delay', '0');
						$('*[data-slide="3"] .content').addClass('active').css('transition-delay', '1s');

					} else if ($('*[data-slide="3"]').hasClass('active')){
						$('.slide').removeClass('active').addClass('inactive');
						$('*[data-slide="2"]').addClass('active');
						$('.content').removeClass('active').css('transition-delay', '0');
						$('*[data-slide="2"] .content').addClass('active').css('transition-delay', '1s');

					} else if ($('*[data-slide="2"]').hasClass('active')){
						$('.slide').removeClass('active').addClass('inactive');
						$('*[data-slide="1"]').addClass('active');
						$('.content').removeClass('active').css('transition-delay', '0');
						$('*[data-slide="1"] .content').addClass('active').css('transition-delay', '1s');
					}
				}

				setTimeout(function() {
					disableMouse = false;
				}, 1000);
			}
		});
	}

	function _portfolioScroll () {
		var initiated = false;
		$('#center2').on(touchType, function() {
			if (initiated === false) {
				setTimeout(function() {
					var portfolioScroll = new iScroll('portfolioWrapper', {
						hScrollbar: false,
						vScrollbar: true,
						scrollbarClass: 'myScrollbar'
					});
				}, 1000);
			}
			initiated = true;
		});
	}

	function _aboutScroll () {
		var initiated = false;
		$('#center1').on(touchType, function() {
			if (initiated === false) {
				setTimeout(function() {
					var aboutScroll = new iScroll('aboutWrapper', {
						hScrollbar: false,
						vScrollbar: true,
						scrollbarClass: 'myScrollbar'
					});
				}, 1000);
			}
			initiated = true;
		});
	}

	function _contactScroll () {
		var initiated = false;
		$('#left').on(touchType, function() {
			if (initiated === false) {
				setTimeout(function() {
					var contactScroll = new iScroll('contactWrapper', {
						hScrollbar: false,
						vScrollbar: true,
						scrollbarClass: 'myScrollbar'
					});
				}, 1000);
			}
			initiated = true;
		});
	}


	function init () {
		_slideControlKeypress();
		_slideControl();
		_portfolioScroll();
		_aboutScroll();
		_contactScroll();
	}

	return {
		init: init
	};
}());

$(function () {
	app.init();
});