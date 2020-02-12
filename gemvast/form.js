// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// jQuery Mask Plugin v1.11.4
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b) { "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports ? module.exports = b(require("jquery")) : b(jQuery || Zepto) })(function(b) {
    var y = function(a, d, e) {
        a = b(a);
        var g = this,
            k = a.val(),
            l;
        d = "function" === typeof d ? d(a.val(), void 0, a, e) : d;
        var c = {
            invalid: [],
            getCaret: function() {
                try {
                    var q, v = 0,
                        b = a.get(0),
                        f = document.selection,
                        c = b.selectionStart;
                    if (f && -1 === navigator.appVersion.indexOf("MSIE 10")) q = f.createRange(), q.moveStart("character", a.is("input") ? -a.val().length : -a.text().length),
                        v = q.text.length;
                    else if (c || "0" === c) v = c;
                    return v
                } catch (d) {}
            },
            setCaret: function(q) {
                try {
                    if (a.is(":focus")) {
                        var b, c = a.get(0);
                        c.setSelectionRange ? c.setSelectionRange(q, q) : c.createTextRange && (b = c.createTextRange(), b.collapse(!0), b.moveEnd("character", q), b.moveStart("character", q), b.select())
                    }
                } catch (f) {}
            },
            events: function() {
                a.on("keyup.mask", c.behaviour).on("paste.mask drop.mask", function() { setTimeout(function() { a.keydown().keyup() }, 100) }).on("change.mask", function() { a.data("changed", !0) }).on("blur.mask",
                    function() {
                        k === a.val() || a.data("changed") || a.triggerHandler("change");
                        a.data("changed", !1)
                    }).on("keydown.mask, blur.mask", function() { k = a.val() }).on("focus.mask", function(a) {!0 === e.selectOnFocus && b(a.target).select() }).on("focusout.mask", function() { e.clearIfNotMatch && !l.test(c.val()) && c.val("") })
            },
            getRegexMask: function() {
                for (var a = [], b, c, f, e, h = 0; h < d.length; h++)(b = g.translation[d.charAt(h)]) ? (c = b.pattern.toString().replace(/.{1}$|^.{1}/g, ""), f = b.optional, (b = b.recursive) ? (a.push(d.charAt(h)), e = {
                    digit: d.charAt(h),
                    pattern: c
                }) : a.push(f || b ? c + "?" : c)) : a.push(d.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                a = a.join("");
                e && (a = a.replace(RegExp("(" + e.digit + "(.*" + e.digit + ")?)"), "($1)?").replace(RegExp(e.digit, "g"), e.pattern));
                return RegExp(a)
            },
            destroyEvents: function() { a.off("keydown keyup paste drop blur focusout ".split(" ").join(".mask ")) },
            val: function(b) {
                var c = a.is("input") ? "val" : "text";
                if (0 < arguments.length) {
                    if (a[c]() !== b) a[c](b);
                    c = a
                } else c = a[c]();
                return c
            },
            getMCharsBeforeCount: function(a, b) {
                for (var c = 0,
                        f = 0, e = d.length; f < e && f < a; f++) g.translation[d.charAt(f)] || (a = b ? a + 1 : a, c++);
                return c
            },
            caretPos: function(a, b, e, f) { return g.translation[d.charAt(Math.min(a - 1, d.length - 1))] ? Math.min(a + e - b - f, e) : c.caretPos(a + 1, b, e, f) },
            behaviour: function(a) {
                a = a || window.event;
                c.invalid = [];
                var e = a.keyCode || a.which;
                if (-1 === b.inArray(e, g.byPassKeys)) {
                    var d = c.getCaret(),
                        f = c.val().length,
                        n = d < f,
                        h = c.getMasked(),
                        k = h.length,
                        m = c.getMCharsBeforeCount(k - 1) - c.getMCharsBeforeCount(f - 1);
                    c.val(h);
                    !n || 65 === e && a.ctrlKey || (8 !== e && 46 !== e && (d = c.caretPos(d,
                        f, k, m)), c.setCaret(d));
                    return c.callbacks(a)
                }
            },
            getMasked: function(a) {
                var b = [],
                    k = c.val(),
                    f = 0,
                    n = d.length,
                    h = 0,
                    l = k.length,
                    m = 1,
                    p = "push",
                    t = -1,
                    s, w;
                e.reverse ? (p = "unshift", m = -1, s = 0, f = n - 1, h = l - 1, w = function() { return -1 < f && -1 < h }) : (s = n - 1, w = function() { return f < n && h < l });
                for (; w();) {
                    var x = d.charAt(f),
                        u = k.charAt(h),
                        r = g.translation[x];
                    if (r) u.match(r.pattern) ? (b[p](u), r.recursive && (-1 === t ? t = f : f === s && (f = t - m), s === t && (f -= m)), f += m) : r.optional ? (f += m, h -= m) : r.fallback ? (b[p](r.fallback), f += m, h -= m) : c.invalid.push({ p: h, v: u, e: r.pattern }),
                        h += m;
                    else {
                        if (!a) b[p](x);
                        u === x && (h += m);
                        f += m
                    }
                }
                a = d.charAt(s);
                n !== l + 1 || g.translation[a] || b.push(a);
                return b.join("")
            },
            callbacks: function(b) {
                var g = c.val(),
                    l = g !== k,
                    f = [g, b, a, e],
                    n = function(a, b, c) { "function" === typeof e[a] && b && e[a].apply(this, c) };
                n("onChange", !0 === l, f);
                n("onKeyPress", !0 === l, f);
                n("onComplete", g.length === d.length, f);
                n("onInvalid", 0 < c.invalid.length, [g, b, a, c.invalid, e])
            }
        };
        g.mask = d;
        g.options = e;
        g.remove = function() {
            var b = c.getCaret();
            c.destroyEvents();
            c.val(g.getCleanVal());
            c.setCaret(b - c.getMCharsBeforeCount(b));
            return a
        };
        g.getCleanVal = function() { return c.getMasked(!0) };
        g.init = function(d) {
            d = d || !1;
            e = e || {};
            g.byPassKeys = b.jMaskGlobals.byPassKeys;
            g.translation = b.jMaskGlobals.translation;
            g.translation = b.extend({}, g.translation, e.translation);
            g = b.extend(!0, {}, g, e);
            l = c.getRegexMask();
            !1 === d ? (e.placeholder && a.attr("placeholder", e.placeholder), a.attr("autocomplete", "off"), c.destroyEvents(), c.events(), d = c.getCaret(), c.val(c.getMasked()), c.setCaret(d + c.getMCharsBeforeCount(d, !0))) : (c.events(), c.val(c.getMasked()))
        };
        g.init(!a.is("input"))
    };
    b.maskWatchers = {};
    var A = function() {
            var a = b(this),
                d = {},
                e = a.attr("data-mask");
            a.attr("data-mask-reverse") && (d.reverse = !0);
            a.attr("data-mask-clearifnotmatch") && (d.clearIfNotMatch = !0);
            "true" === a.attr("data-mask-selectonfocus") && (d.selectOnFocus = !0);
            if (z(a, e, d)) return a.data("mask", new y(this, e, d))
        },
        z = function(a, d, e) {
            e = e || {};
            var g = b(a).data("mask"),
                k = JSON.stringify;
            a = b(a).val() || b(a).text();
            try {
                return "function" === typeof d && (d = d(a)), "object" !== typeof g || k(g.options) !== k(e) || g.mask !==
                    d
            } catch (l) {}
        };
    b.fn.mask = function(a, d) {
        d = d || {};
        var e = this.selector,
            g = b.jMaskGlobals,
            k = b.jMaskGlobals.watchInterval,
            l = function() { if (z(this, a, d)) return b(this).data("mask", new y(this, a, d)) };
        b(this).each(l);
        e && ("" !== e && g.watchInputs) && (clearInterval(b.maskWatchers[e]), b.maskWatchers[e] = setInterval(function() { b(document).find(e).each(l) }, k));
        return this
    };
    b.fn.unmask = function() {
        clearInterval(b.maskWatchers[this.selector]);
        delete b.maskWatchers[this.selector];
        return this.each(function() {
            var a = b(this).data("mask");
            a && a.remove().removeData("mask")
        })
    };
    b.fn.cleanVal = function() { return this.data("mask").getCleanVal() };
    b.applyDataMask = function(a) {
        a = a || b.jMaskGlobals.maskElements;
        (a instanceof b ? a : b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)
    };
    var p = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: { pattern: /\d/ },
            9: { pattern: /\d/, optional: !0 },
            "#": { pattern: /\d/, recursive: !0 },
            A: { pattern: /[a-zA-Z0-9]/ },
            S: { pattern: /[a-zA-Z]/ }
        }
    };
    b.jMaskGlobals = b.jMaskGlobals || {};
    p = b.jMaskGlobals = b.extend(!0, {}, p, b.jMaskGlobals);
    p.dataMask && b.applyDataMask();
    setInterval(function() { b.jMaskGlobals.watchDataMask && b.applyDataMask() }, p.watchInterval)
});

$('input[type=tel]').mask('0 (000) 000-00-00');



// MAIN FORM JS

$(".landform").on("submit", function(e) {

    console.log('clicked on form')

    e.preventDefault();

    $(this).addClass('current-form');
    var currForm = $(this),
        phone = $.trim($('.current-form input[name=phone]').val()),
        name = $.trim($('.current-form input[name=name]').val()),
        postData = $(this).serializeArray(),
        formURL = $(this).attr("action"),
        thanx = $(".current-form .thanx"),
        inputName = $(".current-form input[name=name]"),
        inputPhone = $(".current-form input[name=phone]"),
        message = $(".current-form .message");

    $(message).fadeIn(200);
    if (name != null && name.length == 0) {
        $(message).addClass("message-err").html("Укажите своё имя");
        $(inputName).addClass('input-error');
        event.preventDefault();
    } else if (phone != null && phone.length == 0) {
        $(inputName).removeClass('input-error');
        $(message).addClass("message-err").html("Укажите контактный телефон");
        $(inputPhone).addClass('input-error');
        event.preventDefault();
    } else {
        $(inputPhone).removeClass('input-error');
        console.log('sending form okok')
        $.ajax({
            url: formURL,
            type: 'POST',
            data: postData,
            beforeSend: function() {
                $(message).html("Отправляем...");
            },
            success: function(data) {
                console.log('form sended ok, have a result')
                console.log(data)
                $(message).addClass("message-ok");
                $(message).html("Успешно отправилось!");
                $(message).fadeOut(1500);
                $(thanx).fadeIn(1500);
            }
        });

    };
    $(this).removeClass('current-form');
    console.log('sending ok withoput errors')
});




// MAIN FORM JS



$(".xs-form").on("submit", function(e) {

    console.log('clicked on form')

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
        message = $(".current-form .message");

    console.log('phone', phone);
    console.log('name', name);
    console.log('email', email);
    console.log('message', message);

    $(message).fadeIn(200);
    if (name != null && name.length == 0) {
        $(message).addClass("message-err").html("Укажите своё имя");
        $(inputName).addClass('input-error');
        event.preventDefault();
    } else if (phone != null && phone.length == 0) {
        $(inputName).removeClass('input-error');
        $(message).addClass("message-err").html("Укажите контактный телефон");
        $(inputPhone).addClass('input-error');
        event.preventDefault();
    } else {
        $(inputPhone).removeClass('input-error');
        console.log('sending form okok')
        $.ajax({
            url: formURL,
            type: 'POST',
            data: postData,
            beforeSend: function() {
                $(message).html("Отправляем...");
            },
            success: function(data) {
                console.log('form sended ok, have a result')
                console.log(data)
                $(message).addClass("message-ok");
                $(message).html("Успешно отправилось!");
                $(message).fadeOut(1500);
                $(thanx).fadeIn(1500);
            }
        });

    };
    $(this).removeClass('current-form');
    console.log('sending ok withoput errors')
});