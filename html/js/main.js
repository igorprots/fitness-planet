"use strict";
jQuery(document).ready(function(l) {
        function t(e) {
            var t, o, s, n, a, i;
            (t = e),
            (o = ".xs-clips, .xs-before-text, .xs-after-text"),
            (s = -100),
            (n = l(".container")),
            (a = t.pageX - n.offset().left),
            (i = t.pageY - n.offset().top),
            TweenMax.to(o, 1, {
                x: ((a - n.width() / 2) / n.width()) * s,
                y: ((i - n.height() / 2) / n.height()) * s,
                ease: Power2.easeOut
            });
        }
        (function() {
            var e = {
                Android: function() {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function() {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function() {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function() {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function() {
                    return navigator.userAgent.match(/IEMobile/i);
                },
                any: function() {
                    return (
                        e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
                    );
                }
            };
            if (null == e.any()) {
                var t = new Scrollax();
                t.reload(), t.init();
            }
        })(),
        0 < l(".xs-video-btn").length &&
            l(".xs-video-btn").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }),
            0 < l(".xs-form").length &&
            (l(".xs-form .form-control").on("focus", function(e) {
                    l(this)
                        .parent(".xs-form-anim")
                        .addClass("active");
                }),
                l(".xs-form .form-control").on("blur", function(e) {
                    var t = l(this);
                    "" == t.val() && t.parent(".xs-form-anim").removeClass("active");
                })),
            0 < l(".xs-slider-light-owl").length &&
            l(".xs-slider-light-owl").owlCarousel({
                margin: 80,
                loop: !0,
                nav: !1,
                dots: !1,
                responsive: { 0: { items: 1 } }
            }),
            0 < l(".xs-testimonial-owl").length &&
            l(".xs-testimonial-owl").owlCarousel({
                margin: 10,
                loop: !0,
                nav: !1,
                autoplay: !0,
                responsive: { 0: { items: 1 } }
            }),
            0 < l(".xs-testimonial-grid").length &&
            l(".xs-testimonial-grid").owlCarousel({
                loop: !1,
                nav: !1,
                margin: 30,
                stagePadding: 30,
                autoplay: !0,
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } }
            }),
            0 < l(".xs-team-carousel").length &&
            l(".xs-team-carousel").owlCarousel({
                margin: 30,
                loop: !0,
                nav: !0,
                dots: !1,
                stagePadding: 15,
                autoplay: !0,
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } }
            }),
            0 < l(".xs-service-info").length &&
            l(".xs-service-info").owlCarousel({
                loop: !0,
                nav: !1,
                autoplay: !0,
                dots: !1,
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 4 } }
            }),
            0 < l(".xs-brand-owl").length &&
            l(".xs-brand-owl").owlCarousel({
                margin: 60,
                loop: !0,
                nav: !1,
                dots: !1,
                autoplay: !0,
                responsive: {
                    0: { items: 2 },
                    768: { items: 3 },
                    992: { items: 4 },
                    1200: { items: 5 }
                }
            }),
            0 < l(".xs-subscribe-form").length &&
            l(".xs-subscribe-form").ajaxChimp({
                url: "https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b"
            }),
            0 < l(".xs-image-comparison").length &&
            l(".xs-image-comparison").twentytwenty({
                no_overlay: !0,
                move_slider_on_hover: !1,
                move_with_handle_only: !0,
                click_to_move: !1
            }),
            0 < l(".xs-clips, .xs-before-text, .xs-after-text").length &&
            l(".container").mousemove(function(e) {
                setTimeout(t.bind(null, e), 200);
            });
        if (0 < l("[data-xs-skill]").length)
            new Waypoint({
                element: document.getElementsByClassName("progress-bar"),
                handler: function() {
                    l("[data-xs-skill]").each(function(e, t) {
                            var o = l(t),
                                s = o.data("xs-skill");
                            o.find(".progress-bar").animate({ width: s + "%" }, 20 * s);
                        }),
                        this.destroy();
                },
                offset: "50%"
            });
        if (
            (0 < l(".xs-modal-popup").length &&
                l(".xs-modal-popup").magnificPopup({
                    type: "inline",
                    fixedContentPos: !1,
                    fixedBgPos: !0,
                    overflowY: "auto",
                    closeBtnInside: !1,
                    callbacks: {
                        beforeOpen: function() {
                            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                        }
                    }
                }),
                0 < l("#xs-map").length)
        ) {
            google.maps.event.addDomListener(window, "load", function() {
                var e = {
                        zoom: 11,
                        center: new google.maps.LatLng(40.67, -73.94),
                        styles: [{
                                featureType: "water",
                                elementType: "geometry",
                                stylers: [{ color: "#e9e9e9" }, { lightness: 17 }]
                            },
                            {
                                featureType: "landscape",
                                elementType: "geometry",
                                stylers: [{ color: "#f5f5f5" }, { lightness: 20 }]
                            },
                            {
                                featureType: "road.highway",
                                elementType: "geometry.fill",
                                stylers: [{ color: "#ffffff" }, { lightness: 17 }]
                            },
                            {
                                featureType: "road.highway",
                                elementType: "geometry.stroke",
                                stylers: [
                                    { color: "#ffffff" },
                                    { lightness: 29 },
                                    { weight: 0.2 }
                                ]
                            },
                            {
                                featureType: "road.arterial",
                                elementType: "geometry",
                                stylers: [{ color: "#ffffff" }, { lightness: 18 }]
                            },
                            {
                                featureType: "road.local",
                                elementType: "geometry",
                                stylers: [{ color: "#ffffff" }, { lightness: 16 }]
                            },
                            {
                                featureType: "poi",
                                elementType: "geometry",
                                stylers: [{ color: "#f5f5f5" }, { lightness: 21 }]
                            },
                            {
                                featureType: "poi.park",
                                elementType: "geometry",
                                stylers: [{ color: "#dedede" }, { lightness: 21 }]
                            },
                            {
                                elementType: "labels.text.stroke",
                                stylers: [
                                    { visibility: "on" },
                                    { color: "#ffffff" },
                                    { lightness: 16 }
                                ]
                            },
                            {
                                elementType: "labels.text.fill",
                                stylers: [
                                    { saturation: 36 },
                                    { color: "#333333" },
                                    { lightness: 40 }
                                ]
                            },
                            { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                            {
                                featureType: "transit",
                                elementType: "geometry",
                                stylers: [{ color: "#f2f2f2" }, { lightness: 19 }]
                            },
                            {
                                featureType: "administrative",
                                elementType: "geometry.fill",
                                stylers: [{ color: "#fefefe" }, { lightness: 20 }]
                            },
                            {
                                featureType: "administrative",
                                elementType: "geometry.stroke",
                                stylers: [
                                    { color: "#fefefe" },
                                    { lightness: 17 },
                                    { weight: 1.2 }
                                ]
                            }
                        ]
                    },
                    t = document.getElementById("xs-map"),
                    o = new google.maps.Map(t, e);
                new google.maps.Marker({
                    position: new google.maps.LatLng(40.67, -73.94),
                    icon: "assets/images/map-marker.png",
                    map: o,
                    title: "Gym!"
                });
            });
        }
        991 < l(window).width() &&
            (l(".parallaxie").parallaxie(),
                l(window).on("scroll", function() {
                    250 < l(window).scrollTop() ?
                        l(".xs-onepage-header").addClass("sticky fadeInDown animated") :
                        l(".xs-onepage-header").removeClass("sticky fadeInDown animated");
                })),
            l(".elementskit-navbar, .mobile-nav, .cta")
            .find('a[href*="#"]:not([href="#"])')
            .on("click", function() {
                if (
                    location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                    location.hostname == this.hostname
                ) {
                    var e = l(this.hash);
                    if (
                        (e = e.length ? e : l("[name=" + this.hash.slice(1) + "]")).length
                    )
                        return (
                            l("html,body").animate({ scrollTop: e.offset().top - 30 }, 1e3),
                            "none" != l(".navbar-toggle").css("display") &&
                            l(this)
                            .parents(".container")
                            .find(".navbar-toggle")
                            .trigger("click"), !1
                        );
                }
            });
    }),
    $("div.xs-pricing").click(function() {
        $(this).toggleClass("isActive");
    });