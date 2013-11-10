var disableMouse = false;
var isMobile = (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent);

if (isMobile) {
	touchType = 'touchstart';
} else {
	touchType = 'click';
};

console.log(touchType);

var app = (function () {

	function _slideControl () {
		$('.slide').on(touchType, function() {
			if (disableMouse === false) {
				disableMouse = true;
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					$('.slide').removeClass('inactive');
				} else {
					$('.slide').removeClass('active').addClass('inactive');
					$(this).addClass('active');
				};
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