"use strict";jQuery(document).ready(function(c){function t(e){var t,n,a,o,s,r;t=e,n=".xs-clips, .xs-before-text, .xs-after-text",a=-100,o=c(".container"),s=t.pageX-o.offset().left,r=t.pageY-o.offset().top,TweenMax.to(n,1,{x:(s-o.width()/2)/o.width()*a,y:(r-o.height()/2)/o.height()*a,ease:Power2.easeOut})}(function(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};if(null==e.any()){var t=new Scrollax;t.reload(),t.init()}})(),0<c(".xs-form").length&&(c(".xs-form .form-control").on("focus",function(e){c(this).parent(".xs-form-anim").addClass("active")}),c(".xs-form .form-control").on("blur",function(e){var t=c(this);""==t.val()&&t.parent(".xs-form-anim").removeClass("active")})),0<c(".xs-slider-light-owl").length&&c(".xs-slider-light-owl").owlCarousel({margin:80,loop:!0,nav:!1,dots:!1,responsive:{0:{items:1}}}),0<c(".xs-testimonial-owl").length&&c(".xs-testimonial-owl").owlCarousel({margin:10,loop:!0,nav:!1,autoplay:!0,responsive:{0:{items:1}}}),0<c(".xs-testimonial-grid").length&&c(".xs-testimonial-grid").owlCarousel({loop:!1,nav:!1,margin:30,stagePadding:30,autoplay:!0,responsive:{0:{items:1},768:{items:2},992:{items:3}}}),0<c(".xs-service-info").length&&c(".xs-service-info").owlCarousel({loop:!0,nav:!1,autoplay:!0,dots:!1,responsive:{0:{items:1},768:{items:2},992:{items:4}}}),0<c(".xs-brand-owl").length&&c(".xs-brand-owl").owlCarousel({margin:60,loop:!0,nav:!1,dots:!1,autoplay:!0,responsive:{0:{items:2},768:{items:3},992:{items:4},1200:{items:5}}}),0<c(".xs-image-comparison").length&&c(".xs-image-comparison").twentytwenty({no_overlay:!0,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1}),0<c(".xs-clips, .xs-before-text, .xs-after-text").length&&c(".container").mousemove(function(e){setTimeout(t.bind(null,e),200)});if(0<c("[data-xs-skill]").length)new Waypoint({element:document.getElementsByClassName("progress-bar"),handler:function(){c("[data-xs-skill]").each(function(e,t){var n=c(t),a=n.data("xs-skill");n.find(".progress-bar").animate({width:a+"%"},20*a)}),this.destroy()},offset:"50%"});0<c(".xs-modal-popup").length&&c(".xs-modal-popup").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!1,callbacks:{beforeOpen:function(){this.st.mainClass="my-mfp-slide-bottom xs-promo-popup"}}}),991<c(window).width()&&(c(".parallaxie").parallaxie(),c(window).on("scroll",function(){250<c(window).scrollTop()?c(".xs-onepage-header").addClass("sticky fadeInDown animated"):c(".xs-onepage-header").removeClass("sticky fadeInDown animated")})),c(".elementskit-navbar, .mobile-nav, .cta").find('a[href*="#"]:not([href="#"])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=c(this.hash);if((e=e.length?e:c("[name="+this.hash.slice(1)+"]")).length)return c("html,body").animate({scrollTop:e.offset().top-30},1e3),"none"!=c(".navbar-toggle").css("display")&&c(this).parents(".container").find(".navbar-toggle").trigger("click"),!1}}),c(".xs-form").on("submit",function(e){e.preventDefault(),c(this).addClass("current-form");c(this);var t=c.trim(c(".current-form input[name=phone]").val()),n=c.trim(c(".current-form input[name=name]").val()),a=(c.trim(c(".current-form input[name=email]").val()),c.trim(c(".current-form input[name=message]").val())),o=c(this).serializeArray(),s=c(this).attr("action"),r=c(".current-form .thanx"),i=c(".current-form input[name=name]"),l=c(".current-form input[name=phone]"),m=c("#xs-message "),u=c("#xs-email");a=c(".current-form .message");c(a).fadeIn(200),null!=n&&0==n.length?(c(a).addClass("message-err").html("Вкажіть ім'я"),c(i).addClass("input-error"),event.preventDefault()):null!=t&&0==t.length?(c(i).removeClass("input-error"),c(a).addClass("message-err").html("Вкажіть контактний телефон"),c(l).addClass("input-error"),event.preventDefault()):(c(l).removeClass("input-error"),console.log("sending form okok"),c.ajax({url:s,type:"POST",data:o,beforeSend:function(){c(a).html("Відправляємо...")},success:function(){c(a).addClass("message-ok"),c(i).val(""),c(l).val(""),c(u).val(""),c(m).val(""),c(a).html("Відправлено успішно!"),c(a).fadeOut(1500),c(r).fadeIn(1500)}})),c(this).removeClass("current-form")})});