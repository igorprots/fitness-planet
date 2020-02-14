// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn"
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

$("input[type=tel]").mask("0 (000) 000-00-00");

// MAIN FORM JS

$(".landform").on("submit", function(e) {
    // console.log("clicked on form");

    e.preventDefault();

    $(this).addClass("current-form");
    var currForm = $(this),
        phone = $.trim($(".current-form input[name=phone]").val()),
        name = $.trim($(".current-form input[name=name]").val()),
        postData = $(this).serializeArray(),
        formURL = $(this).attr("action"),
        thanx = $(".current-form .thanx"),
        inputName = $(".current-form input[name=name]"),
        inputPhone = $(".current-form input[name=phone]"),
        message = $(".current-form .message");

    $(message).fadeIn(200);
    if (name != null && name.length == 0) {
        $(message)
            .addClass("message-err")
            .html("Укажите своё имя");
        $(inputName).addClass("input-error");
        event.preventDefault();
    } else if (phone != null && phone.length == 0) {
        $(inputName).removeClass("input-error");
        $(message)
            .addClass("message-err")
            .html("Укажите контактный телефон");
        $(inputPhone).addClass("input-error");
        event.preventDefault();
    } else {
        $(inputPhone).removeClass("input-error");
        console.log("sending form okok");
        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            beforeSend: function() {
                $(message).html("Отправляем...");
            },
            success: function(data) {
                console.log("form sended ok, have a result");
                console.log(data);
                $(message).addClass("message-ok");
                $(message).html("Успешно отправилось!");
                $(message).fadeOut(1500);
                $(thanx).fadeIn(1500);
            }
        });
    }
    $(this).removeClass("current-form");
    console.log("sending ok withoput errors");
});

// MAIN FORM JS

$(".xs-form").on("submit", function(e) {
    console.log("clicked on form");

    e.preventDefault();

    $(this).addClass("current-form");
    var currForm = $(this),
        phone = $.trim($(".current-form input[name=phone]").val()),
        name = $.trim($(".current-form input[name=name]").val()),
        email = $.trim($(".current-form input[name=email]").val()),
        message = $.trim($(".current-form input[name=message]").val()),
        postData = $(this).serializeArray(),
        formURL = $(this).attr("action"),
        thanx = $(".current-form .thanx"),
        inputName = $(".current-form input[name=name]"),
        inputPhone = $(".current-form input[name=phone]"),
        message = $(".current-form .message");

    // console.log('phone', phone);
    // console.log('name', name);
    // console.log('email', email);
    // console.log('message', message);

    $(message).fadeIn(200);
    if (name != null && name.length == 0) {
        $(message)
            .addClass("message-err")
            .html("Укажите своё имя");
        $(inputName).addClass("input-error");
        event.preventDefault();
    } else if (phone != null && phone.length == 0) {
        $(inputName).removeClass("input-error");
        $(message)
            .addClass("message-err")
            .html("Укажите контактный телефон");
        $(inputPhone).addClass("input-error");
        event.preventDefault();
    } else {
        $(inputPhone).removeClass("input-error");
        console.log("sending form okok");
        $.ajax({
            url: formURL,
            type: "POST",
            data: postData,
            beforeSend: function() {
                $(message).html("Отправляем...");
            },
            success: function(data) {
                console.log("form sended ok, have a result");
                console.log(data);
                $(message).addClass("message-ok");
                $(message).html("Успешно отправилось!");
                $(message).fadeOut(1500);
                $(thanx).fadeIn(1500);
            }
        });
    }
    $(this).removeClass("current-form");
    console.log("sending ok withoput errors");
});