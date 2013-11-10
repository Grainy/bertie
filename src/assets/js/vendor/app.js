var disableMouse = false;
var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);

if (isMobile) {
	touchType = 'touchstart';
} else {
	touchType = 'click';
};

var app = (function () {

	function _slideControl () {
		$('.slide').on(touchType, function() {
			if (disableMouse === false) {
				disableMouse = true;

				$('.slide').removeClass('active').addClass('inactive');
				$('.content').removeClass('active').css('transition-delay', '0');
				$(this).addClass('active');
				$(this).children('.content').addClass('active').css('transition-delay', '1s');;

				setTimeout(function() {
					disableMouse = false;
				}, 1000);
			};
		});
	};

	function init () {
		_slideControl();
	};

	return {
		init: init
	}
}());

$(function () {
	app.init();
});