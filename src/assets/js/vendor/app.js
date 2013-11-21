var disableMouse = false;
var touchType = 'touchstart click';

var app = (function () {
	function _adbarhide () {
		if(navigator.userAgent.match(/Android/i)){
			window.scrollTo(0,1);
		}
	}

	function _porthover () {
		$('#portImg4').hover(function(){
			$('#portfolioBlurb').html('<h2>5 Days, 5 apps</h2><p>Day 3 of my 5 days 5 apps project. I created a simple todo list using Angular JS and Underscore.</p><p>The source code is avaliable on <a href="https://github.com/Grainy/fdfa-day3/">GitHub</a> </p>');
		});

		$('#portImg3').hover(function(){
			$('#portfolioBlurb').html('<h2>5 Days, 5 apps</h2><p>Day 2 of my 5 days 5 apps project. Using Ember, Handlebars, Showdown, and Moment, I built a single page web app showing editable blog posts and an about section.</p> <p>The source code is avaliable on <a href="https://github.com/Grainy/fdfa-day2/">GitHub</a> </p>');
		});

		$('#portImg2').hover(function(){
			$('#portfolioBlurb').html('<h2>5 Days, 5 apps</h2><p>I had a week off work where I\'m a front-end dev. So I\'m going to spend this week developing! My aim is to create 5 simple apps in 5 days using frameworks and libraries I\'ve never used, or don\'t know too much about.</p><p> Todays app used Backbone and Underscore to build a one page app listing users. I also added the ability to edit or delete the users.</p><p>The source code is avaliable on <a href="https://github.com/Grainy/fdfa-day1/">GitHub</a> </p>');
		});

		$('#portImg1').hover(function(){
			$('#portfolioBlurb').html('<h2>The old site</h2><p>This was the old design for my personal website, unfortunately the work linked to from its portfolio is no longer avaliable as it was hosted on my universitys server, and like the fool I am, I didn\'t retrieve it before it got deleted :( </p>');
		});
	}

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

	function _scrollers () {
		var portfolioInitiated = false;
		var aboutInitiated = false;
		var contactInitiated = false;

		$('#portfolio').on(touchType, function() {
			_portfolioScroll();
			portfolioInitiated = true;
		});

		$('#about').on(touchType, function() {
			_aboutScroll();
			aboutInitiated = true;
		});

		$('#contact').on(touchType, function() {
			_contactScroll();
			contactInitiated = true;
		});

		$(document).keydown(function(e){
			if (e.keyCode == 37) {
				if ($('*[data-slide="2"]').hasClass('active')) {
					_portfolioScroll();
					portfolioInitiated = true;
				} else if ($('*[data-slide="3"]').hasClass('active')) {
					_aboutScroll();
					aboutInitiated = true;
				} else if ($('*[data-slide="4"]').hasClass('active')) {
					_contactScroll();
					contactInitiated = true;
				}
			}

			if (e.keyCode == 39) {
				if ($('*[data-slide="2"]').hasClass('active')) {
					_portfolioScroll();
					portfolioInitiated = true;
				} else if ($('*[data-slide="3"]').hasClass('active')) {
					_aboutScroll();
					aboutInitiated = true;
				}
			}
		});

		function _portfolioScroll () {
			if (portfolioInitiated === false) {
				setTimeout(function() {
					var portfolioScroll = new iScroll('portfolioWrapper', {
						hScrollbar: false,
						vScrollbar: true,
						scrollbarClass: 'myScrollbar',
						bounce: false
					});
				}, 1000);
			}
		}

		function _aboutScroll () {
			if (aboutInitiated === false) {
				setTimeout(function() {
					var aboutScroll = new iScroll('aboutWrapper', {
						hScrollbar: false,
						vScrollbar: true,
						scrollbarClass: 'myScrollbar',
						bounce: false
					});
				}, 1000);
			}
		}

		function _contactScroll () {
			if (contactInitiated === false) {
				setTimeout(function() {
					var contactScroll = new iScroll('contactWrapper', {
						hScrollbar: false,
						vScrollbar: true,
						scrollbarClass: 'myScrollbar',
						bounce: false
					});
				}, 1000);
			}
		}
	}


	function init () {
		_adbarhide();
		_slideControlKeypress();
		_slideControl();
		_scrollers();
		_porthover();
	}

	return {
		init: init
	};
}());

$(function () {
	app.init();
});