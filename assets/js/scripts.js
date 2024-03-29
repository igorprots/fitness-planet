jQuery(document).ready(function ($) {

	"use strict";

	function initparallax() {
		var a = {
			Android: function Android() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function BlackBerry() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function iOS() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function Opera() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function Windows() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function any() {
				return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
			}
		};
		var trueMobile = a.any();
		if (null == trueMobile) {
			var b = new Scrollax();
			b.reload();
			b.init();
		}
	}

	initparallax();

	function callParallax(e) {
		parallaxIt(e, '.xs-clips, .xs-before-text, .xs-after-text', -100);

	}

	function parallaxIt(e, target, movement) {
		var $this = $('.container');
		var relX = e.pageX - $this.offset().left;
		var relY = e.pageY - $this.offset().top;

		TweenMax.to(target, 1, {
			x: (relX - $this.width() / 2) / $this.width() * movement,
			y: (relY - $this.height() / 2) / $this.height() * movement,
			ease: Power2.easeOut
		})
	}

	function animateProgressBar() {
		$("[data-xs-skill]").each(function (index, el) {
			var $this = $(el);
			var wid = $this.data("xs-skill");
			$this.find('.progress-bar').animate({ width: wid + "%" }, wid * 20);
		});
	}

	// /*==========================================================
	// 	1. Video popup
	// ============================================================*/
	// if ($('.xs-video-btn').length > 0) {
	// 	$('.xs-video-btn').magnificPopup({
	// 		disableOn: 700,
	// 		type: 'iframe',
	// 		mainClass: 'mfp-fade',
	// 		removalDelay: 160,
	// 		preloader: false,
	// 		fixedContentPos: false
	// 	});
	// }

	/*==========================================================
		2. BMI form label animation
	============================================================*/
	if ($('.xs-form').length > 0) {
		$('.xs-form .form-control').on('focus', function (e) {
			$(this).parent('.xs-form-anim').addClass('active');
		});
		$('.xs-form .form-control').on('blur', function (e) {
			var $this = $(this);

			if ('' == $this.val()) {
				$this.parent('.xs-form-anim').removeClass('active');
			}
		});
	}

	/*==========================================================
		3. Owl Carousels
	============================================================*/
	// Slider Carousel
	if ($('.xs-slider-light-owl').length > 0) {
		$('.xs-slider-light-owl').owlCarousel({
			margin: 80,
			loop: true,
			nav: false,
			dots: false,
			// autoplay: true,
			responsive: {
				0: {
					items: 1
				},
			}
		});
	}

	// Testimonial
	if ($('.xs-testimonial-owl').length > 0) {
		$('.xs-testimonial-owl').owlCarousel({
			margin: 10,
			loop: true,
			nav: false,
			autoplay: true,
			responsive: {
				0: {
					items: 1
				}
			}
		});
	}

	// Testimonial Grid
	if ($('.xs-testimonial-grid').length > 0) {
		$('.xs-testimonial-grid').owlCarousel({
			loop: false,
			nav: false,
			margin: 30,
			stagePadding: 30,
			autoplay: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3
				},
			}
		});
	}

	// // Team Carousel
	// if ($('.xs-team-carousel').length > 0) {
	// 	$('.xs-team-carousel').owlCarousel({
	// 		margin: 30,
	// 		loop: true,
	// 		nav: true,
	// 		dots: false,
	// 		stagePadding: 15,
	// 		autoplay: true,
	// 		responsive: {
	// 			0: {
	// 				items: 1
	// 			},
	// 			768: {
	// 				items: 2
	// 			},
	// 			992: {
	// 				items: 3
	// 			}
	// 		}
	// 	});
	// }

	// Service Info Carousel
	if ($('.xs-service-info').length > 0) {
		$('.xs-service-info').owlCarousel({
			loop: true,
			nav: false,
			autoplay: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 4
				}
			}
		});
	}

	// Brand Carousel
	if ($('.xs-brand-owl').length > 0) {
		$('.xs-brand-owl').owlCarousel({
			margin: 60,
			loop: true,
			nav: false,
			dots: false,
			autoplay: true,
			responsive: {
				0: {
					items: 2
				},
				768: {
					items: 3
				},
				992: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		});
	}

	// /*==========================================================
	// 	4. Subscribe form
	// ============================================================*/
	// if ($('.xs-subscribe-form').length > 0) {
	// 	$('.xs-subscribe-form').ajaxChimp({
	// 		url: 'https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b'
	// 	});
	// }

	/*==========================================================
		5. Health Comparison
	============================================================*/
	if ($('.xs-image-comparison').length > 0) {
		$('.xs-image-comparison').twentytwenty({
			no_overlay: true,
			move_slider_on_hover: false,
			move_with_handle_only: true,
			click_to_move: false,
		});
	}

	/*==========================================================
		6. Clips Animation
	============================================================*/
	if ($('.xs-clips, .xs-before-text, .xs-after-text').length > 0) {
		var timeout;

		$('.container').mousemove(function (e) {
			if (timeout) clearTimeout(timeout);
			setTimeout(callParallax.bind(null, e), 200);
		});
	}

	/*==========================================================
		7. Skill Animation
	============================================================*/
	if ($("[data-xs-skill]").length > 0) {
		var waypoint = new Waypoint({
			element: document.getElementsByClassName('progress-bar'),
			handler: function handler(direction) {
				animateProgressBar();
				this.destroy();
			},
			offset: '50%'
		});
	}

	/*=============================================================
		8. Modal Popup
	=========================================================================*/
	if ($('.xs-modal-popup').length > 0) {
		$('.xs-modal-popup').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: false,
			callbacks: {
				beforeOpen: function () {
					this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
				}
			}
		});
	}

	// /*==========================================================
	// 	9. Google Maps
	// ============================================================*/
	// if ($('#xs-map').length > 0) {
	// 	var init = function init() {
	// 		// Basic options for a simple Google Map
	// 		var mapOptions = {
	// 			// How zoomed in you want the map to start at (always required)
	// 			zoom: 11,

	// 			// The latitude and longitude to center the map (always required)
	// 			center: new google.maps.LatLng(40.6700, -73.9400), // New York

	// 			// How you would like to style the map.
	// 			// This is where you would paste any style found on Snazzy Maps.
	// 			styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
	// 		};

	// 		// Get the HTML DOM element that will contain your map
	// 		// We are using a div with id="map" seen below in the <body>
	// 		var mapElement = document.getElementById('xs-map');

	// 		// Create the Google Map using our element and options defined above
	// 		var map = new google.maps.Map(mapElement, mapOptions);

	// 		var mapPin = 'assets/images/map-marker.png';

	// 		// Let's also add a marker while we're at it
	// 		var marker = new google.maps.Marker({
	// 			position: new google.maps.LatLng(40.6700, -73.9400),
	// 			icon: mapPin,
	// 			map: map,
	// 			title: 'Gym!'
	// 		});
	// 	};

	// 	// When the window has finished loading create our google map below
	// 	google.maps.event.addDomListener(window, 'load', init);
	// }


	function email_pattern(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}


	// $('#xs-contact-form').on('submit', function (event) {
	// 	event.preventDefault();

	// 	var xs_contact_name = $('#xs-name'),
	// 		xs_contact_number = $('#xs-phone'),
	// 		xs_contact_email = $('#xs-email'),
	// 		x_contact_massage = $('#xs-message'),
	// 		xs_contact_submit = $('#xs_contact_submit'),
	// 		xs_contact_error = false;

	// 	$('.xpeedStudio_success_message').remove();

	// 	if (xs_contact_name.length > 0) {
	// 		if (xs_contact_name.val().trim() === '') {
	// 			xs_contact_name.addClass('invaild');
	// 			xs_contact_error = true;
	// 			xs_contact_name.focus();
	// 			return false;
	// 		} else {
	// 			xs_contact_name.removeClass('invaild');
	// 		}
	// 	}

	// 	if (xs_contact_email.length > 0) {
	// 		if (xs_contact_email.val().trim() === '') {
	// 			xs_contact_email.addClass('invaild');
	// 			xs_contact_error = true;
	// 			xs_contact_email.focus();
	// 			return false;
	// 		} else if (!email_pattern(xs_contact_email.val().toLowerCase())) {
	// 			xs_contact_email.addClass('invaild');
	// 			xs_contact_error = true;
	// 			xs_contact_email.focus();
	// 			return false;
	// 		} else {
	// 			xs_contact_email.removeClass('invaild');
	// 		}
	// 	}

	// 	if (xs_contact_number.length > 0) {
	// 		if (xs_contact_number.val().trim() === '') {
	// 			xs_contact_number.addClass('invaild');
	// 			xs_contact_error = true;
	// 			xs_contact_number.focus();
	// 			return false;
	// 		} else {
	// 			xs_contact_number.removeClass('invaild');
	// 		}
	// 	}

	// 	if (x_contact_massage.length > 0) {
	// 		if (x_contact_massage.val().trim() === '') {
	// 			x_contact_massage.addClass('invaild');
	// 			xs_contact_error = true;
	// 			x_contact_massage.focus();
	// 			return false;
	// 		} else {
	// 			x_contact_massage.removeClass('invaild');
	// 		}
	// 	}

	// 	if (xs_contact_error === false) {
	// 		xs_contact_submit.before().hide().fadeIn();
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "assets/php/contact-form.php",
	// 			data: {
	// 				'xs_contact_name': xs_contact_name.val(),
	// 				'xs_contact_number': xs_contact_number.val(),
	// 				'xs_contact_email': xs_contact_email.val(),
	// 				'x_contact_massage': x_contact_massage.val(),
	// 			},
	// 			success: function (result) {
	// 				xs_contact_submit.after('<p class="xpeedStudio_success_message">' + result + '</p>').hide().fadeIn();

	// 				setTimeout(() => {
	// 					$(".xpeedStudio_success_message").fadeOut(1000, function () {
	// 						$(this).remove();
	// 					});
	// 				}, 5000);

	// 				$('#xs-contact-form')[0].reset();
	// 			}
	// 		});
	// 	}
	// });


	if ($(window).width() > 991) {

		$('.parallaxie').parallaxie();

		$(window).on('scroll', function () {

			if ($(window).scrollTop() > 250) {
				$('.xs-onepage-header').addClass('sticky fadeInDown animated');
			} else {
				$('.xs-onepage-header').removeClass('sticky fadeInDown animated');
			}
		});

	}




	$('.elementskit-navbar, .mobile-nav, .cta').find('a[href*="#"]:not([href="#"])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 30)
				}, 1000);
				if ($('.navbar-toggle').css('display') != 'none') {
					$(this).parents('.container').find(".navbar-toggle").trigger("click");
				}
				return false;
			}
		}
	});


	/*==========================================================
		10. Form Initialization 
	============================================================*/

	$(".xs-form").on("submit", function (e) {

		// console.log('clicked on form')

		e.preventDefault();

		$(this).addClass('current-form');
		var currForm = $(this),
			phone = $.trim($('.current-form input[name=phone]').val()),
			name = $.trim($('.current-form input[name=name]').val()),
			email = $.trim($('.current-form input[name=email]').val()),
			message = $.trim($('.current-form input[name=message]').val()),
			postData = $(this).serializeArray(),
			formURL = $(this).attr("action"),
			thanx = $(".current-form .thanx"),
			inputName = $(".current-form input[name=name]"),
			inputPhone = $(".current-form input[name=phone]"),
			inputMessage = $("#xs-message "),
			inputEmail = $("#xs-email"),
			message = $(".current-form .message");

		// console.log('phone', phone);
		// console.log('name', name);
		// console.log('email', email);
		// console.log('message', message);

		$(message).fadeIn(200);
		if (name != null && name.length == 0) {
			$(message).addClass("message-err").html("Вкажіть ім'я");
			$(inputName).addClass('input-error');
			event.preventDefault();
		} else if (phone != null && phone.length == 0) {
			$(inputName).removeClass('input-error');
			$(message).addClass("message-err").html("Вкажіть контактний телефон");
			$(inputPhone).addClass('input-error');
			event.preventDefault();
		} else {
			$(inputPhone).removeClass('input-error');
			console.log('sending form okok')
			$.ajax({
				url: formURL,
				type: 'POST',
				data: postData,
				beforeSend: function () {
					$(message).html("Відправляємо...");
				},
				success: function (data) {
					// console.log('form sended ok, have a result')
					// console.log(data)
					$(message).addClass("message-ok");
					$(inputName).val('');
					$(inputPhone).val('');
					$(inputEmail).val('');
					$(inputMessage).val('');
					$(message).html("Відправлено успішно!");
					$(message).fadeOut(1500);
					$(thanx).fadeIn(1500);
				}
			});

		};
		$(this).removeClass('current-form');
		// console.log('sending ok withoput errors')
	});



}); // end ready function