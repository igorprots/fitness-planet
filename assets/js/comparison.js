// DOM.event.move
//
// 2.0.0
//
// Stephen Band
//

!(function(e) {
    "function" == typeof define && define.amd ?
        define([], e) :
        "undefined" != typeof module && null !== module && module.exports ?
        (module.exports = e) :
        e();
})(function() {
    function e(e) {
        return new CustomEvent(e, N);
    }

    function t(e) {
        return e[z] || (e[z] = {});
    }

    function n(e, n, o, i, a) {
        function u(e) {
            o(e, i);
        }
        n = n.split(D);
        for (var c, r = t(e), d = n.length; d--;)
            (r[(c = n[d])] || (r[c] = [])).push([o, u]), e.addEventListener(c, u);
    }

    function o(e, n, o, i) {
        n = n.split(D);
        var a,
            u,
            c,
            r = t(e),
            d = n.length;
        if (r)
            for (; d--;)
                if (((a = n[d]), (u = r[a])))
                    for (c = u.length; c--;)
                        u[c][0] === o &&
                        (e.removeEventListener(a, u[c][1]), u.splice(c, 1));
    }

    function i(t, n, o) {
        var i = e(n);
        o && A(i, o), t.dispatchEvent(i);
    }

    function a(e) {
        function t(e) {
            o ? (n(), M(t), (i = !0), (o = !1)) : (i = !1);
        }
        var n = e,
            o = !1,
            i = !1;
        (this.kick = function(e) {
            (o = !0), i || t();
        }),
        (this.end = function(e) {
            var t = n;
            e &&
                (i ?
                    ((n = o ?

                            function() {
                                t(), e();
                            } :
                            e),
                        (o = !0)) :
                    e());
        });
    }

    function u() {}

    function c(e) {
        e.preventDefault();
    }

    function r(e) {
        return !!x[e.target.tagName.toLowerCase()];
    }

    function d(e) {
        return 1 === e.which && !e.ctrlKey && !e.altKey;
    }

    function m(e, t) {
        var n, o;
        if (e.identifiedTouch) return e.identifiedTouch(t);
        for (n = -1, o = e.length; ++n < o;)
            if (e[n].identifier === t) return e[n];
    }

    function f(e, t) {
        var n = m(e.changedTouches, t.identifier);
        if (n && (n.pageX !== t.pageX || n.pageY !== t.pageY)) return n;
    }

    function v(e, t) {
        X(e, t, e, l);
    }

    function s(e, t) {
        l();
    }

    function l() {
        o(document, L.move, v), o(document, L.cancel, s);
    }

    function p(e, t) {
        var n = f(e, t);
        n && X(e, t, n, h);
    }

    function g(e, t) {
        m(e.changedTouches, t.identifier) && h(t);
    }

    function h(e) {
        o(document, R.move, e.touchmove), o(document, R.cancel, e.touchend);
    }

    function X(e, t, n, o) {
        var i = n.pageX - t.pageX,
            a = n.pageY - t.pageY;
        i * i + a * a < F * F || Y(e, t, n, i, a, o);
    }

    function Y(e, t, n, o, a, c) {
        var r = e.targetTouches,
            d = e.timeStamp - t.timeStamp,
            m = {
                altKey: e.altKey,
                ctrlKey: e.ctrlKey,
                shiftKey: e.shiftKey,
                startX: t.pageX,
                startY: t.pageY,
                distX: o,
                distY: a,
                deltaX: o,
                deltaY: a,
                pageX: n.pageX,
                pageY: n.pageY,
                velocityX: o / d,
                velocityY: a / d,
                identifier: t.identifier,
                targetTouches: r,
                finger: r ? r.length : 1,
                enableMove: function() {
                    (this.moveEnabled = !0), (this.enableMove = u), e.preventDefault();
                }
            };
        i(t.target, "movestart", m), c(t);
    }

    function y(e, t) {
        var n = t.timer;
        (t.touch = e), (t.timeStamp = e.timeStamp), n.kick();
    }

    function w(e, t) {
        var n = t.target,
            i = t.event,
            a = t.timer;
        b(),
            K(n, i, a, function() {
                setTimeout(function() {
                    o(n, "click", c);
                }, 0);
            });
    }

    function b() {
        o(document, L.move, y), o(document, L.end, w);
    }

    function T(e, t) {
        var n = t.event,
            o = t.timer,
            i = f(e, n);
        i &&
            (e.preventDefault(),
                (n.targetTouches = e.targetTouches),
                (t.touch = i),
                (t.timeStamp = e.timeStamp),
                o.kick());
    }

    function E(e, t) {
        var n = t.target,
            o = t.event,
            i = t.timer;
        m(e.changedTouches, o.identifier) && (S(t), K(n, o, i));
    }

    function S(e) {
        o(document, R.move, e.activeTouchmove),
            o(document, R.end, e.activeTouchend);
    }

    function k(e, t, n) {
        var o = n - e.timeStamp;
        (e.distX = t.pageX - e.startX),
        (e.distY = t.pageY - e.startY),
        (e.deltaX = t.pageX - e.pageX),
        (e.deltaY = t.pageY - e.pageY),
        (e.velocityX = 0.3 * e.velocityX + (0.7 * e.deltaX) / o),
        (e.velocityY = 0.3 * e.velocityY + (0.7 * e.deltaY) / o),
        (e.pageX = t.pageX),
        (e.pageY = t.pageY);
    }

    function K(e, t, n, o) {
        n.end(function() {
            return i(e, "moveend", t), o && o();
        });
    }

    function j(e) {
        e.enableMove();
    }

    function C(e) {
        e.enableMove();
    }

    function Q(e) {
        e.enableMove();
    }

    function q(e) {
        var t = e.handler;
        e.handler = function(e) {
            for (var n, o = O.length; o--;) e[(n = O[o])] = e.originalEvent[n];
            t.apply(this, arguments);
        };
    }
    var A = Object.assign || (window.jQuery && jQuery.extend),
        F = 8,
        M =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(e, t) {
            return window.setTimeout(function() {
                e();
            }, 25);
        };
    !(function() {
        function e(e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
        }
        if ("function" == typeof window.CustomEvent) return !1;
        (e.prototype = window.Event.prototype), (window.CustomEvent = e);
    })();
    var x = { textarea: !0, input: !0, select: !0, button: !0 },
        L = { move: "mousemove", cancel: "mouseup dragstart", end: "mouseup" },
        R = { move: "touchmove", cancel: "touchend", end: "touchend" },
        D = /\s+/,
        N = { bubbles: !0, cancelable: !0 },
        z = "function" == typeof Symbol ? Symbol("events") : {};
    if (
        (n(document, "mousedown", function(e) {
                d(e) &&
                    (r(e) || (n(document, L.move, v, e), n(document, L.cancel, s, e)));
            }),
            n(document, "touchstart", function(e) {
                if (!x[e.target.tagName.toLowerCase()]) {
                    var t = e.changedTouches[0],
                        o = {
                            target: t.target,
                            pageX: t.pageX,
                            pageY: t.pageY,
                            identifier: t.identifier,
                            touchmove: function(e, t) {
                                p(e, t);
                            },
                            touchend: function(e, t) {
                                g(e, t);
                            }
                        };
                    n(document, R.move, o.touchmove, o),
                        n(document, R.cancel, o.touchend, o);
                }
            }),
            n(document, "movestart", function(e) {
                if (!e.defaultPrevented && e.moveEnabled) {
                    var t = {
                            startX: e.startX,
                            startY: e.startY,
                            pageX: e.pageX,
                            pageY: e.pageY,
                            distX: e.distX,
                            distY: e.distY,
                            deltaX: e.deltaX,
                            deltaY: e.deltaY,
                            velocityX: e.velocityX,
                            velocityY: e.velocityY,
                            identifier: e.identifier,
                            targetTouches: e.targetTouches,
                            finger: e.finger
                        },
                        o = {
                            target: e.target,
                            event: t,
                            timer: new a(function(e) {
                                k(t, o.touch, o.timeStamp), i(o.target, "move", t);
                            }),
                            touch: void 0,
                            timeStamp: e.timeStamp
                        };
                    void 0 === e.identifier ?
                        (n(e.target, "click", c),
                            n(document, L.move, y, o),
                            n(document, L.end, w, o)) :
                        ((o.activeTouchmove = function(e, t) {
                                T(e, t);
                            }),
                            (o.activeTouchend = function(e, t) {
                                E(e, t);
                            }),
                            n(document, R.move, o.activeTouchmove, o),
                            n(document, R.end, o.activeTouchend, o));
                }
            }),
            window.jQuery)
    ) {
        var O = "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(
            " "
        );
        (jQuery.event.special.movestart = {
            setup: function() {
                return n(this, "movestart", j), !1;
            },
            teardown: function() {
                return o(this, "movestart", j), !1;
            },
            add: q
        }),
        (jQuery.event.special.move = {
            setup: function() {
                return n(this, "movestart", C), !1;
            },
            teardown: function() {
                return o(this, "movestart", C), !1;
            },
            add: q
        }),
        (jQuery.event.special.moveend = {
            setup: function() {
                return n(this, "movestart", Q), !1;
            },
            teardown: function() {
                return o(this, "movestart", Q), !1;
            },
            add: q
        });
    }
});

//  jquery.twentytwenty.js

!(function(t) {
    t.fn.twentytwenty = function(e) {
        var e = t.extend({
                default_offset_pct: 0.5,
                orientation: "horizontal",
                before_label: "Before",
                after_label: "After",
                no_overlay: !1,
                move_slider_on_hover: !1,
                move_with_handle_only: !0,
                click_to_move: !1
            },
            e
        );
        return this.each(function() {
            var n = e.default_offset_pct,
                a = t(this),
                i = e.orientation,
                o = "vertical" === i ? "down" : "left",
                s = "vertical" === i ? "up" : "right";
            a.wrap("<div class='twentytwenty-wrapper twentytwenty-" + i + "'></div>"),
                e.no_overlay || a.append("<div class='twentytwenty-overlay'></div>");
            var r = a.find("img:first"),
                c = a.find("img:last");
            a.append("<div class='twentytwenty-handle'></div>");
            var l = a.find(".twentytwenty-handle");
            l.append("<span class='twentytwenty-" + o + "-arrow'></span>"),
                l.append("<span class='twentytwenty-" + s + "-arrow'></span>"),
                a.addClass("twentytwenty-container"),
                r.addClass("twentytwenty-before"),
                c.addClass("twentytwenty-after");
            var d = a.find(".twentytwenty-overlay");
            d.append(
                    "<div class='twentytwenty-before-label' data-content='" +
                    e.before_label +
                    "'></div>"
                ),
                d.append(
                    "<div class='twentytwenty-after-label' data-content='" +
                    e.after_label +
                    "'></div>"
                );
            var w = function(t) {
                    var e = r.width(),
                        n = r.height();
                    return {
                        w: e + "px",
                        h: n + "px",
                        cw: t * e + "px",
                        ch: t * n + "px"
                    };
                },
                f = function(t) {
                    "vertical" === i
                        ?
                        (r.css("clip", "rect(0," + t.w + "," + t.ch + ",0)"),
                            c.css("clip", "rect(" + t.ch + "," + t.w + "," + t.h + ",0)")) :
                        (r.css("clip", "rect(0," + t.cw + "," + t.h + ",0)"),
                            c.css("clip", "rect(0," + t.w + "," + t.h + "," + t.cw + ")")),
                        a.css("height", t.h);
                },
                v = function(t) {
                    var e = w(t);
                    l.css(
                            "vertical" === i ? "top" : "left",
                            "vertical" === i ? e.ch : e.cw
                        ),
                        f(e);
                },
                p = function(t, e, n) {
                    return Math.max(e, Math.min(n, t));
                },
                y = function(t, e) {
                    return p("vertical" === i ? (e - u) / m : (t - h) / _, 0, 1);
                };
            t(window).on("resize.twentytwenty", function(t) {
                v(n);
            });
            var h = 0,
                u = 0,
                _ = 0,
                m = 0,
                g = function(t) {
                    ((t.distX > t.distY && t.distX < -t.distY) ||
                        (t.distX < t.distY && t.distX > -t.distY)) &&
                    "vertical" !== i
                        ?
                        t.preventDefault() :
                        ((t.distX < t.distY && t.distX < -t.distY) ||
                            (t.distX > t.distY && t.distX > -t.distY)) &&
                        "vertical" === i &&
                        t.preventDefault(),
                        a.addClass("active"),
                        (h = a.offset().left),
                        (u = a.offset().top),
                        (_ = r.width()),
                        (m = r.height());
                },
                b = function(t) {
                    a.hasClass("active") && ((n = y(t.pageX, t.pageY)), v(n));
                },
                X = function() {
                    a.removeClass("active");
                },
                Y = e.move_with_handle_only ? l : a;
            Y.on("movestart", g),
                Y.on("move", b),
                Y.on("moveend", X),
                e.move_slider_on_hover &&
                (a.on("mouseenter", g), a.on("mousemove", b), a.on("mouseleave", X)),
                l.on("touchmove", function(t) {
                    t.preventDefault();
                }),
                a.find("img").on("mousedown", function(t) {
                    t.preventDefault();
                }),
                e.click_to_move &&
                a.on("click", function(t) {
                    (h = a.offset().left),
                    (u = a.offset().top),
                    (_ = r.width()),
                    (m = r.height()),
                    (n = y(t.pageX, t.pageY)),
                    v(n);
                }),
                t(window).trigger("resize.twentytwenty");
        });
    };
})(jQuery);
