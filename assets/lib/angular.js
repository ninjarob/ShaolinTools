/*
 AngularJS v1.2.0-rc.3
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (Y, R, s) {
    'use strict';
    function D(b) {
        return function () {
            var a = arguments[0], c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/undefined/" + (b ? b + "/" : "") + a;
            for (c = 1; c < arguments.length; c++)a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
            return Error(a)
        }
    }

    function nb(b) {
        if (null == b || ya(b))return !1;
        var a = b.length;
        return 1 === b.nodeType && a ? !0 : F(b) || H(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function p(b, a, c) {
        var d;
        if (b)if (E(b))for (d in b)"prototype" != d && ("length" != d && "name" != d && b.hasOwnProperty(d)) && a.call(c, b[d], d); else if (b.forEach && b.forEach !== p)b.forEach(a, c); else if (nb(b))for (d = 0; d < b.length; d++)a.call(c, b[d], d); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }

    function Lb(b) {
        var a = [], c;
        for (c in b)b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function Gc(b, a, c) {
        for (var d =
            Lb(b), e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
        return d
    }

    function Mb(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function Va() {
        for (var b = ia.length, a; b;) {
            b--;
            a = ia[b].charCodeAt(0);
            if (57 == a)return ia[b] = "A", ia.join("");
            if (90 == a)ia[b] = "0"; else return ia[b] = String.fromCharCode(a + 1), ia.join("")
        }
        ia.unshift("0");
        return ia.join("")
    }

    function Nb(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function G(b) {
        var a = b.$$hashKey;
        p(arguments, function (a) {
            a !== b && p(a, function (a, c) {
                b[c] = a
            })
        });
        Nb(b, a);
        return b
    }

    function W(b) {
        return parseInt(b,
            10)
    }

    function Hc(b, a) {
        return G(new (G(function () {
        }, {prototype: b})), a)
    }

    function v() {
    }

    function za(b) {
        return b
    }

    function aa(b) {
        return function () {
            return b
        }
    }

    function z(b) {
        return "undefined" == typeof b
    }

    function w(b) {
        return "undefined" != typeof b
    }

    function S(b) {
        return null != b && "object" == typeof b
    }

    function F(b) {
        return "string" == typeof b
    }

    function ob(b) {
        return "number" == typeof b
    }

    function Ha(b) {
        return "[object Date]" == Wa.apply(b)
    }

    function H(b) {
        return "[object Array]" == Wa.apply(b)
    }

    function E(b) {
        return "function" == typeof b
    }

    function Xa(b) {
        return "[object RegExp]" == Wa.apply(b)
    }

    function ya(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function Ic(b) {
        return b && (b.nodeName || b.on && b.find)
    }

    function Jc(b, a, c) {
        var d = [];
        p(b, function (b, f, g) {
            d.push(a.call(c, b, f, g))
        });
        return d
    }

    function Ya(b, a) {
        if (b.indexOf)return b.indexOf(a);
        for (var c = 0; c < b.length; c++)if (a === b[c])return c;
        return -1
    }

    function Ia(b, a) {
        var c = Ya(b, a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function fa(b, a) {
        if (ya(b) || b && b.$evalAsync && b.$watch)throw Ja("cpws");
        if (a) {
            if (b ===
                a)throw Ja("cpi");
            if (H(b))for (var c = a.length = 0; c < b.length; c++)a.push(fa(b[c])); else {
                c = a.$$hashKey;
                p(a, function (b, c) {
                    delete a[c]
                });
                for (var d in b)a[d] = fa(b[d]);
                Nb(a, c)
            }
        } else(a = b) && (H(b) ? a = fa(b, []) : Ha(b) ? a = new Date(b.getTime()) : Xa(b) ? a = RegExp(b.source) : S(b) && (a = fa(b, {})));
        return a
    }

    function Kc(b, a) {
        a = a || {};
        for (var c in b)b.hasOwnProperty(c) && "$$" !== c.substr(0, 2) && (a[c] = b[c]);
        return a
    }

    function Aa(b, a) {
        if (b === a)return !0;
        if (null === b || null === a)return !1;
        if (b !== b && a !== a)return !0;
        var c = typeof b, d;
        if (c == typeof a &&
            "object" == c)if (H(b)) {
            if (!H(a))return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!Aa(b[d], a[d]))return !1;
                return !0
            }
        } else {
            if (Ha(b))return Ha(a) && b.getTime() == a.getTime();
            if (Xa(b) && Xa(a))return b.toString() == a.toString();
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || ya(b) || ya(a) || H(a))return !1;
            c = {};
            for (d in b)if ("$" !== d.charAt(0) && !E(b[d])) {
                if (!Aa(b[d], a[d]))return !1;
                c[d] = !0
            }
            for (d in a)if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== s && !E(a[d]))return !1;
            return !0
        }
        return !1
    }

    function pb(b,
                a) {
        var c = 2 < arguments.length ? ua.call(arguments, 2) : [];
        return !E(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, c.concat(ua.call(arguments, 0))) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Lc(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c = s : ya(a) ? c = "$WINDOW" : a && R === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
        return c
    }

    function oa(b, a) {
        return "undefined" === typeof b ? s : JSON.stringify(b, Lc, a ? "  " : null)
    }

    function Ob(b) {
        return F(b) ?
            JSON.parse(b) : b
    }

    function Ka(b) {
        b && 0 !== b.length ? (b = B("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b
    }

    function ga(b) {
        b = x(b).clone();
        try {
            b.html("")
        } catch (a) {
        }
        var c = x("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? B(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + B(b)
            })
        } catch (d) {
            return B(c)
        }
    }

    function Pb(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function Qb(b) {
        var a = {}, c, d;
        p((b || "").split("&"), function (b) {
            b && (c = b.split("="), d = Pb(c[0]),
            w(d) && (b = w(c[1]) ? Pb(c[1]) : !0, a[d] ? H(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Rb(b) {
        var a = [];
        p(b, function (b, d) {
            H(b) ? p(b, function (b) {
                a.push(va(d, !0) + (!0 === b ? "" : "=" + va(b, !0)))
            }) : a.push(va(d, !0) + (!0 === b ? "" : "=" + va(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function qb(b) {
        return va(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function va(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g,
            a ? "%20" : "+")
    }

    function Mc(b, a) {
        function c(a) {
            a && d.push(a)
        }

        var d = [b], e, f, g = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        p(g, function (a) {
            g[a] = !0;
            c(R.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (p(b.querySelectorAll("." + a), c), p(b.querySelectorAll("." + a + "\\:"), c), p(b.querySelectorAll("[" + a + "]"), c))
        });
        p(d, function (a) {
            if (!e) {
                var b = h.exec(" " + a.className + " ");
                b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : p(a.attributes, function (b) {
                    !e && g[b.name] && (e = a, f = b.value)
                })
            }
        });
        e && a(e, f ? [f] : [])
    }

    function Sb(b, a) {
        var c = function () {
            b = x(b);
            if (b.injector()) {
                var c = b[0] === R ? "document" : ga(b);
                throw Ja("btstrpd", c);
            }
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            a.unshift("ng");
            c = Tb(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (a, b, c, d, e) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                });
                e.enabled(!0)
            }]);
            return c
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (Y && !d.test(Y.name))return c();
        Y.name = Y.name.replace(d, "");
        Za.resumeBootstrap =
            function (b) {
                p(b, function (b) {
                    a.push(b)
                });
                c()
            }
    }

    function $a(b, a) {
        a = a || "_";
        return b.replace(Nc, function (b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function rb(b, a, c) {
        if (!b)throw Ja("areq", a || "?", c || "required");
        return b
    }

    function La(b, a, c) {
        c && H(b) && (b = b[b.length - 1]);
        rb(E(b), a, "not a function, got " + (b && "object" == typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function pa(b, a) {
        if ("hasOwnProperty" === b)throw Ja("badname", a);
    }

    function sb(b, a, c) {
        if (!a)return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g =
            0; g < f; g++)d = a[g], b && (b = (e = b)[d]);
        return !c && E(b) ? pb(e, b) : b
    }

    function Oc(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = D("$injector");
        return a(a(b, "angular", Object), "module", function () {
            var b = {};
            return function (e, f, g) {
                pa(e, "module");
                f && b.hasOwnProperty(e) && (b[e] = null);
                return a(b, e, function () {
                    function a(c, d, e) {
                        return function () {
                            b[e || "push"]([c, d, arguments]);
                            return r
                        }
                    }

                    if (!f)throw c("nomod", e);
                    var b = [], d = [], l = a("$injector", "invoke"), r = {
                        _invokeQueue: b,
                        _runBlocks: d,
                        requires: f,
                        name: e,
                        provider: a("$provide",
                            "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: l,
                        run: function (a) {
                            d.push(a);
                            return this
                        }
                    };
                    g && l(g);
                    return r
                })
            }
        })
    }

    function Ma(b) {
        return b.replace(Pc, function (a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(Qc, "Moz$1")
    }

    function tb(b,
                a, c, d) {
        function e(b) {
            var e = c && b ? [this.filter(b)] : [this], m = a, k, l, r, q, n, y;
            if (!d || null != b)for (; e.length;)for (k = e.shift(), l = 0, r = k.length; l < r; l++)for (q = x(k[l]), m ? q.triggerHandler("$destroy") : m = !m, n = 0, q = (y = q.children()).length; n < q; n++)e.push(Ba(y[n]));
            return f.apply(this, arguments)
        }

        var f = Ba.fn[b], f = f.$original || f;
        e.$original = f;
        Ba.fn[b] = e
    }

    function J(b) {
        if (b instanceof J)return b;
        if (!(this instanceof J)) {
            if (F(b) && "<" != b.charAt(0))throw ub("nosel");
            return new J(b)
        }
        if (F(b)) {
            var a = R.createElement("div");
            a.innerHTML =
                "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            vb(this, a.childNodes);
            x(R.createDocumentFragment()).append(this)
        } else vb(this, b)
    }

    function wb(b) {
        return b.cloneNode(!0)
    }

    function Na(b) {
        Ub(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++)Na(b[a])
    }

    function Vb(b, a, c, d) {
        if (w(d))throw ub("offargs");
        var e = ja(b, "events");
        ja(b, "handle") && (z(a) ? p(e, function (a, c) {
            xb(b, c, a);
            delete e[c]
        }) : p(a.split(" "), function (a) {
            z(c) ? (xb(b, a, e[a]), delete e[a]) : Ia(e[a] || [], c)
        }))
    }

    function Ub(b, a) {
        var c = b[ab], d = Oa[c];
        d && (a ? delete Oa[c].data[a] :
            (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Vb(b)), delete Oa[c], b[ab] = s))
    }

    function ja(b, a, c) {
        var d = b[ab], d = Oa[d || -1];
        if (w(c))d || (b[ab] = d = ++Rc, d = Oa[d] = {}), d[a] = c; else return d && d[a]
    }

    function Wb(b, a, c) {
        var d = ja(b, "data"), e = w(c), f = !e && w(a), g = f && !S(a);
        d || g || ja(b, "data", d = {});
        if (e)d[a] = c; else if (f) {
            if (g)return d && d[a];
            G(d, a)
        } else return d
    }

    function yb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function zb(b, a) {
        a && b.setAttribute &&
        p(a.split(" "), function (a) {
            b.setAttribute("class", ba((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ba(a) + " ", " ")))
        })
    }

    function Ab(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            p(a.split(" "), function (a) {
                a = ba(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", ba(c))
        }
    }

    function vb(b, a) {
        if (a) {
            a = a.nodeName || !w(a.length) || ya(a) ? [a] : a;
            for (var c = 0; c < a.length; c++)b.push(a[c])
        }
    }

    function Xb(b, a) {
        return bb(b, "$" + (a ||
            "ngController") + "Controller")
    }

    function bb(b, a, c) {
        b = x(b);
        for (9 == b[0].nodeType && (b = b.find("html")); b.length;) {
            if ((c = b.data(a)) !== s)return c;
            b = b.parent()
        }
    }

    function Yb(b, a) {
        var c = cb[a.toLowerCase()];
        return c && Zb[b.nodeName] && c
    }

    function Sc(b, a) {
        var c = function (c, e) {
            c.preventDefault || (c.preventDefault = function () {
                c.returnValue = !1
            });
            c.stopPropagation || (c.stopPropagation = function () {
                c.cancelBubble = !0
            });
            c.target || (c.target = c.srcElement || R);
            if (z(c.defaultPrevented)) {
                var f = c.preventDefault;
                c.preventDefault = function () {
                    c.defaultPrevented = !0;
                    f.call(c)
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function () {
                return c.defaultPrevented || !1 == c.returnValue
            };
            p(a[e || c.type], function (a) {
                a.call(b, c)
            });
            8 >= Q ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function Ca(b) {
        var a = typeof b, c;
        "object" == a && null !== b ? "function" == typeof(c = b.$$hashKey) ? c = b.$$hashKey() : c === s && (c = b.$$hashKey = Va()) : c = b;
        return a + ":" + c
    }

    function Pa(b) {
        p(b,
            this.put, this)
    }

    function $b(b) {
        var a, c;
        "function" == typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(Tc, ""), c = c.match(Uc), p(c[1].split(Vc), function (b) {
            b.replace(Wc, function (b, c, d) {
                a.push(d)
            })
        })), b.$inject = a) : H(b) ? (c = b.length - 1, La(b[c], "fn"), a = b.slice(0, c)) : La(b, "fn", !0);
        return a
    }

    function Tb(b) {
        function a(a) {
            return function (b, c) {
                if (S(b))p(b, Mb(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            pa(a, "service");
            if (E(b) || H(b))b = r.instantiate(b);
            if (!b.$get)throw Qa("pget", a);
            return l[a + h] = b
        }

        function d(a,
                   b) {
            return c(a, {$get: b})
        }

        function e(a) {
            var b = [];
            p(a, function (a) {
                if (!k.get(a)) {
                    k.put(a, !0);
                    try {
                        if (F(a)) {
                            var c = Ra(a);
                            b = b.concat(e(c.requires)).concat(c._runBlocks);
                            for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                                var h = d[c], g = r.get(h[0]);
                                g[h[1]].apply(g, h[2])
                            }
                        } else E(a) ? b.push(r.invoke(a)) : H(a) ? b.push(r.invoke(a)) : La(a, "module")
                    } catch (m) {
                        throw H(a) && (a = a[a.length - 1]), m.message && (m.stack && -1 == m.stack.indexOf(m.message)) && (m = m.message + "\n" + m.stack), Qa("modulerr", a, m.stack || m.message || m);
                    }
                }
            });
            return b
        }

        function f(a, b) {
            function c(d) {
                if (a.hasOwnProperty(d)) {
                    if (a[d] === g)throw Qa("cdep", m.join(" <- "));
                    return a[d]
                }
                try {
                    return m.unshift(d), a[d] = g, a[d] = b(d)
                } finally {
                    m.shift()
                }
            }

            function d(a, b, e) {
                var f = [], k = $b(a), h, g, m;
                g = 0;
                for (h = k.length; g < h; g++) {
                    m = k[g];
                    if ("string" !== typeof m)throw Qa("itkn", m);
                    f.push(e && e.hasOwnProperty(m) ? e[m] : c(m))
                }
                a.$inject || (a = a[h]);
                switch (b ? -1 : f.length) {
                    case 0:
                        return a();
                    case 1:
                        return a(f[0]);
                    case 2:
                        return a(f[0], f[1]);
                    case 3:
                        return a(f[0], f[1], f[2]);
                    case 4:
                        return a(f[0], f[1], f[2],
                            f[3]);
                    case 5:
                        return a(f[0], f[1], f[2], f[3], f[4]);
                    case 6:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5]);
                    case 7:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
                    case 8:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                    case 9:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                    case 10:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                    default:
                        return a.apply(b, f)
                }
            }

            return {
                invoke: d, instantiate: function (a, b) {
                    var c = function () {
                    }, e;
                    c.prototype = (H(a) ? a[a.length - 1] : a).prototype;
                    c = new c;
                    e = d(a, c, b);
                    return S(e) ?
                        e : c
                }, get: c, annotate: $b, has: function (b) {
                    return l.hasOwnProperty(b + h) || a.hasOwnProperty(b)
                }
            }
        }

        var g = {}, h = "Provider", m = [], k = new Pa, l = {
            $provide: {
                provider: a(c),
                factory: a(d),
                service: a(function (a, b) {
                    return d(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }),
                value: a(function (a, b) {
                    return d(a, aa(b))
                }),
                constant: a(function (a, b) {
                    pa(a, "constant");
                    l[a] = b;
                    q[a] = b
                }),
                decorator: function (a, b) {
                    var c = r.get(a + h), d = c.$get;
                    c.$get = function () {
                        var a = n.invoke(d, c);
                        return n.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, r = l.$injector = f(l,
            function () {
                throw Qa("unpr", m.join(" <- "));
            }), q = {}, n = q.$injector = f(q, function (a) {
            a = r.get(a + h);
            return n.invoke(a.$get, a)
        });
        p(e(b), function (a) {
            n.invoke(a || v)
        });
        return n
    }

    function Xc() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                p(a, function (a) {
                    b || "a" !== B(a.nodeName) || (b = a)
                });
                return b
            }

            function f() {
                var b = c.hash(), d;
                b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() :
                "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }

            var g = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function () {
                d.$evalAsync(f)
            });
            return f
        }]
    }

    function Yc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, ua.call(arguments, 1))
            } finally {
                if (y--, 0 === y)for (; A.length;)try {
                    A.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function f(a, b) {
            (function Bb() {
                p(C, function (a) {
                    a()
                });
                u = b(Bb, a)
            })()
        }

        function g() {
            t = null;
            U != h.url() && (U = h.url(), p(T, function (a) {
                a(h.url())
            }))
        }

        var h = this, m = a[0], k = b.location, l = b.history, r = b.setTimeout, q = b.clearTimeout,
            n = {};
        h.isMock = !1;
        var y = 0, A = [];
        h.$$completeOutstandingRequest = e;
        h.$$incOutstandingRequestCount = function () {
            y++
        };
        h.notifyWhenNoOutstandingRequests = function (a) {
            p(C, function (a) {
                a()
            });
            0 === y ? a() : A.push(a)
        };
        var C = [], u;
        h.addPollFn = function (a) {
            z(u) && f(100, r);
            C.push(a);
            return a
        };
        var U = k.href, M = a.find("base"), t = null;
        h.url = function (a, c) {
            k !== b.location && (k = b.location);
            if (a) {
                if (U != a)return U = a, d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), M.attr("href", M.attr("href"))) : (t = a, c ? k.replace(a) : k.href =
                    a), h
            } else return t || k.href.replace(/%27/g, "'")
        };
        var T = [], ca = !1;
        h.onUrlChange = function (a) {
            if (!ca) {
                if (d.history)x(b).on("popstate", g);
                if (d.hashchange)x(b).on("hashchange", g); else h.addPollFn(g);
                ca = !0
            }
            T.push(a);
            return a
        };
        h.baseHref = function () {
            var a = M.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        };
        var N = {}, da = "", ka = h.baseHref();
        h.cookies = function (a, b) {
            var d, e, f, k;
            if (a)b === s ? m.cookie = escape(a) + "=;path=" + ka + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : F(b) && (d = (m.cookie = escape(a) + "=" + escape(b) +
                    ";path=" + ka).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (m.cookie !== da)for (da = m.cookie, d = da.split("; "), N = {}, f = 0; f < d.length; f++)e = d[f], k = e.indexOf("="), 0 < k && (a = unescape(e.substring(0, k)), N[a] === s && (N[a] = unescape(e.substring(k + 1))));
                return N
            }
        };
        h.defer = function (a, b) {
            var c;
            y++;
            c = r(function () {
                delete n[c];
                e(a)
            }, b || 0);
            n[c] = !0;
            return c
        };
        h.defer.cancel = function (a) {
            return n[a] ? (delete n[a], q(a), e(v), !0) : !1
        }
    }

    function Zc() {
        this.$get =
            ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
                return new Yc(b, d, a, c)
            }]
    }

    function $c() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != r && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, r), r = a, r.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a)throw D("$cacheFactory")("iid", b);
                var g = 0, h = G({}, d, {id: b}), m = {}, k = d && d.capacity || Number.MAX_VALUE, l = {}, r = null, q = null;
                return a[b] = {
                    put: function (a, b) {
                        var c = l[a] || (l[a] = {key: a});
                        e(c);
                        if (!z(b))return a in m || g++, m[a] = b, g > k && this.remove(q.key),
                            b
                    }, get: function (a) {
                        var b = l[a];
                        if (b)return e(b), m[a]
                    }, remove: function (a) {
                        var b = l[a];
                        b && (b == r && (r = b.p), b == q && (q = b.n), f(b.n, b.p), delete l[a], delete m[a], g--)
                    }, removeAll: function () {
                        m = {};
                        g = 0;
                        l = {};
                        r = q = null
                    }, destroy: function () {
                        l = h = m = null;
                        delete a[b]
                    }, info: function () {
                        return G({}, h, {size: g})
                    }
                }
            }

            var a = {};
            b.info = function () {
                var b = {};
                p(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function ad() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function bc(b) {
        var a =
        {}, c = "Directive", d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, f = /^\s*(https?|ftp|mailto|tel|file):/, g = /^\s*(https?|ftp|file):|data:image\//, h = /^(on[a-z]+|formaction)$/;
        this.directive = function k(d, e) {
            pa(d, "directive");
            F(d) ? (rb(e, "directiveFactory"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector", "$exceptionHandler", function (b, c) {
                var e = [];
                p(a[d], function (a, f) {
                    try {
                        var k = b.invoke(a);
                        E(k) ? k = {compile: aa(k)} : !k.compile && k.link && (k.compile = aa(k.link));
                        k.priority =
                            k.priority || 0;
                        k.index = f;
                        k.name = k.name || d;
                        k.require = k.require || k.controller && k.name;
                        k.restrict = k.restrict || "A";
                        e.push(k)
                    } catch (g) {
                        c(g)
                    }
                });
                return e
            }])), a[d].push(e)) : p(d, Mb(k));
            return this
        };
        this.aHrefSanitizationWhitelist = function (a) {
            return w(a) ? (f = a, this) : f
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return w(a) ? (g = a, this) : g
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", function (b, l, r, q, n, y, A,
                                                                                                                                                                                    C, u, U, M) {
            function t(a, b, c, d, e) {
                a instanceof x || (a = x(a));
                p(a, function (b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = x(b).wrap("<span></span>").parent()[0])
                });
                var f = ca(a, b, a, c, d, e);
                return function (b, c) {
                    rb(b, "scope");
                    for (var d = c ? Sa.clone.call(a) : a, e = 0, k = d.length; e < k; e++) {
                        var g = d[e];
                        1 != g.nodeType && 9 != g.nodeType || d.eq(e).data("$scope", b)
                    }
                    T(d, "ng-scope");
                    c && c(d, b);
                    f && f(b, d, d);
                    return d
                }
            }

            function T(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function ca(a, b, c, d, e, f) {
                function k(a, c, d, e) {
                    var f, h, l, r, n, q, y, $ = [];
                    n = 0;
                    for (q = c.length; n < q; n++)$.push(c[n]);
                    y = n = 0;
                    for (q = g.length; n < q; y++)h = $[y], c = g[n++], f = g[n++], c ? (c.scope ? (l = a.$new(S(c.scope)), x(h).data("$scope", l)) : l = a, (r = c.transclude) || !e && b ? c(f, l, h, d, function (b) {
                        return function (c) {
                            var d = a.$new();
                            d.$$transcluded = !0;
                            return b(d, c).on("$destroy", pb(d, d.$destroy))
                        }
                    }(r || b)) : c(f, l, h, s, e)) : f && f(a, h.childNodes, s, e)
                }

                for (var g = [], h, l, r, n = 0; n < a.length; n++)l = new z, h = N(a[n], [], l, 0 == n ? d : s, e), h = (f = h.length ? L(h, a[n], l, b, c, null, [], [], f) : null) && f.terminal || !a[n].childNodes || !a[n].childNodes.length ?
                    null : ca(a[n].childNodes, f ? f.transclude : b), g.push(f), g.push(h), r = r || f || h, f = null;
                return r ? k : null
            }

            function N(a, b, c, f, k) {
                var g = c.$attr, h;
                switch (a.nodeType) {
                    case 1:
                        Z(b, la(Da(a).toLowerCase()), "E", f, k);
                        var l, r, n;
                        h = a.attributes;
                        for (var q = 0, y = h && h.length; q < y; q++) {
                            var A = !1, p = !1;
                            l = h[q];
                            if (!Q || 8 <= Q || l.specified) {
                                r = l.name;
                                n = la(r);
                                ma.test(n) && (r = $a(n.substr(6), "-"));
                                var t = n.replace(/(Start|End)$/, "");
                                n === t + "Start" && (A = r, p = r.substr(0, r.length - 5) + "end", r = r.substr(0, r.length - 6));
                                n = la(r.toLowerCase());
                                g[n] = r;
                                c[n] =
                                    l = ba(Q && "href" == r ? decodeURIComponent(a.getAttribute(r, 2)) : l.value);
                                Yb(a, n) && (c[n] = !0);
                                B(a, b, l, n);
                                Z(b, n, "A", f, k, A, p)
                            }
                        }
                        a = a.className;
                        if (F(a) && "" !== a)for (; h = e.exec(a);)n = la(h[2]), Z(b, n, "C", f, k) && (c[n] = ba(h[3])), a = a.substr(h.index + h[0].length);
                        break;
                    case 3:
                        w(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (h = d.exec(a.nodeValue))n = la(h[1]), Z(b, n, "M", f, k) && (c[n] = ba(h[2]))
                        } catch (U) {
                        }
                }
                b.sort(O);
                return b
            }

            function da(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw ha("uterdir", b, c);
                        1 == a.nodeType &&
                        (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return x(d)
            }

            function ka(a, b, c) {
                return function (d, e, f, k) {
                    e = da(e[0], b, c);
                    return a(d, e, f, k)
                }
            }

            function L(a, b, c, d, e, f, k, h, g) {
                function n(a, b, c, d) {
                    a && (c && (a = ka(a, c, d)), a.require = I.require, k.push(a));
                    b && (c && (b = ka(b, c, d)), b.require = I.require, h.push(b))
                }

                function q(a, b) {
                    var c, d = "data", e = !1;
                    if (F(a)) {
                        for (; "^" == (c = a.charAt(0)) || "?" == c;)a = a.substr(1), "^" == c && (d = "inheritedData"), e = e || "?" == c;
                        c = b[d]("$" + a + "Controller");
                        8 == b[0].nodeType && b[0].$$controller && (c = c || b[0].$$controller, b[0].$$controller = null);
                        if (!c && !e)throw ha("ctreq", a, Z);
                    } else H(a) && (c = [], p(a, function (a) {
                        c.push(q(a, b))
                    }));
                    return c
                }

                function U(a, d, e, f, g) {
                    var n, $, t, C, T;
                    n = b === e ? c : Kc(c, new z(x(e), c.$attr));
                    $ = n.$$element;
                    if (u) {
                        var ca = /^\s*([@=&])(\??)\s*(\w*)\s*$/, N = d.$parent || d;
                        p(u.scope, function (a, b) {
                            var c = a.match(ca) || [], e = c[3] || b, f = "?" == c[2], c = c[1], k, g, h;
                            d.$$isolateBindings[b] = c + e;
                            switch (c) {
                                case "@":
                                    n.$observe(e, function (a) {
                                        d[b] = a
                                    });
                                    n.$$observers[e].$$scope =
                                        N;
                                    n[e] && (d[b] = l(n[e])(N));
                                    break;
                                case "=":
                                    if (f && !n[e])break;
                                    g = y(n[e]);
                                    h = g.assign || function () {
                                            k = d[b] = g(N);
                                            throw ha("nonassign", n[e], u.name);
                                        };
                                    k = d[b] = g(N);
                                    d.$watch(function () {
                                        var a = g(N);
                                        a !== d[b] && (a !== k ? k = d[b] = a : h(N, a = k = d[b]));
                                        return a
                                    });
                                    break;
                                case "&":
                                    g = y(n[e]);
                                    d[b] = function (a) {
                                        return g(N, a)
                                    };
                                    break;
                                default:
                                    throw ha("iscp", u.name, b, a);
                            }
                        })
                    }
                    v && p(v, function (a) {
                        var b = {$scope: d, $element: $, $attrs: n, $transclude: g}, c;
                        T = a.controller;
                        "@" == T && (T = n[a.name]);
                        c = A(T, b);
                        8 == $[0].nodeType ? $[0].$$controller = c : $.data("$" +
                            a.name + "Controller", c);
                        a.controllerAs && (b.$scope[a.controllerAs] = c)
                    });
                    f = 0;
                    for (t = k.length; f < t; f++)try {
                        C = k[f], C(d, $, n, C.require && q(C.require, $))
                    } catch (L) {
                        r(L, ga($))
                    }
                    a && a(d, e.childNodes, s, g);
                    for (f = h.length - 1; 0 <= f; f--)try {
                        C = h[f], C(d, $, n, C.require && q(C.require, $))
                    } catch (ka) {
                        r(ka, ga($))
                    }
                }

                g = g || {};
                var C = -Number.MAX_VALUE, ca, u = g.newIsolateScopeDirective, M = g.templateDirective, L = c.$$element = x(b), I, Z, w;
                g = g.transcludeDirective;
                for (var O = d, v, B, ma = 0, K = a.length; ma < K; ma++) {
                    I = a[ma];
                    var G = I.$$start, D = I.$$end;
                    G && (L =
                        da(b, G, D));
                    w = s;
                    if (C > I.priority)break;
                    if (w = I.scope)ca = ca || I, I.templateUrl || (P("new/isolated scope", u, I, L), S(w) && (T(L, "ng-isolate-scope"), u = I), T(L, "ng-scope"));
                    Z = I.name;
                    !I.templateUrl && I.controller && (w = I.controller, v = v || {}, P("'" + Z + "' controller", v[Z], I, L), v[Z] = I);
                    if (w = I.transclude)"ngRepeat" !== Z && (P("transclusion", g, I, L), g = I), "element" == w ? (C = I.priority, w = da(b, G, D), L = c.$$element = x(R.createComment(" " + Z + ": " + c[Z] + " ")), b = L[0], db(e, x(ua.call(w, 0)), b), O = t(w, d, C, f && f.name, {
                        newIsolateScopeDirective: u, transcludeDirective: g,
                        templateDirective: M
                    })) : (w = x(wb(b)).contents(), L.html(""), O = t(w, d));
                    if (I.template)if (P("template", M, I, L), M = I, w = E(I.template) ? I.template(L, c) : I.template, w = cc(w), I.replace) {
                        f = I;
                        w = x("<div>" + ba(w) + "</div>").contents();
                        b = w[0];
                        if (1 != w.length || 1 !== b.nodeType)throw ha("tplrt", Z, "");
                        db(e, L, b);
                        K = {$attr: {}};
                        a = a.concat(N(b, a.splice(ma + 1, a.length - (ma + 1)), K));
                        ac(c, K);
                        K = a.length
                    } else L.html(w);
                    if (I.templateUrl)P("template", M, I, L), M = I, I.replace && (f = I), U = Bb(a.splice(ma, a.length - ma), L, c, e, O, k, h, {
                        newIsolateScopeDirective: u,
                        transcludeDirective: g, templateDirective: M
                    }), K = a.length; else if (I.compile)try {
                        B = I.compile(L, c, O), E(B) ? n(null, B, G, D) : B && n(B.pre, B.post, G, D)
                    } catch (J) {
                        r(J, ga(L))
                    }
                    I.terminal && (U.terminal = !0, C = Math.max(C, I.priority))
                }
                U.scope = ca && ca.scope;
                U.transclude = g && O;
                return U
            }

            function Z(d, e, f, g, h, l, n) {
                if (e === h)return null;
                h = null;
                if (a.hasOwnProperty(e)) {
                    var q;
                    e = b.get(e + c);
                    for (var y = 0, A = e.length; y < A; y++)try {
                        q = e[y], (g === s || g > q.priority) && -1 != q.restrict.indexOf(f) && (l && (q = Hc(q, {
                            $$start: l,
                            $$end: n
                        })), d.push(q), h = q)
                    } catch (C) {
                        r(C)
                    }
                }
                return h
            }

            function ac(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                p(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                p(b, function (b, f) {
                    "class" == f ? (T(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? e.attr("style", e.attr("style") + ";" + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function Bb(a, b, c, d, e, f, k, g) {
                var h = [], l, r, y = b[0], A = a.shift(), C = G({}, A, {
                    templateUrl: null,
                    transclude: null,
                    replace: null
                }), t = E(A.templateUrl) ? A.templateUrl(b, c) :
                    A.templateUrl;
                b.html("");
                q.get(U.getTrustedResourceUrl(t), {cache: n}).success(function (n) {
                    var q;
                    n = cc(n);
                    if (A.replace) {
                        n = x("<div>" + ba(n) + "</div>").contents();
                        q = n[0];
                        if (1 != n.length || 1 !== q.nodeType)throw ha("tplrt", A.name, t);
                        n = {$attr: {}};
                        db(d, b, q);
                        N(q, a, n);
                        ac(c, n)
                    } else q = y, b.html(n);
                    a.unshift(C);
                    l = L(a, q, c, e, b, A, f, k, g);
                    p(d, function (a, c) {
                        a == q && (d[c] = b[0])
                    });
                    for (r = ca(b[0].childNodes, e); h.length;) {
                        n = h.shift();
                        var U = h.shift(), T = h.shift(), s = h.shift(), u = b[0];
                        U !== y && (u = wb(q), db(T, x(U), u));
                        l(r, n, u, d, s)
                    }
                    h = null
                }).error(function (a,
                                   b, c, d) {
                    throw ha("tpload", d.url);
                });
                return function (a, b, c, d, e) {
                    h ? (h.push(b), h.push(c), h.push(d), h.push(e)) : l(r, b, c, d, e)
                }
            }

            function O(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function P(a, b, c, d) {
                if (b)throw ha("multidir", b.name, c.name, a, ga(d));
            }

            function w(a, b) {
                var c = l(b, !0);
                c && a.push({
                    priority: 0, compile: aa(function (a, b) {
                        var d = b.parent(), e = d.data("$binding") || [];
                        e.push(c);
                        T(d.data("$binding", e), "ng-binding");
                        a.$watch(c, function (a) {
                            b[0].nodeValue =
                                a
                        })
                    })
                })
            }

            function v(a, b) {
                if ("xlinkHref" == b || "IMG" != Da(a) && ("src" == b || "ngSrc" == b))return U.RESOURCE_URL
            }

            function B(a, b, c, d) {
                var e = l(c, !0);
                if (e) {
                    if ("multiple" === d && "SELECT" === Da(a))throw ha("selmulti", ga(a));
                    b.push({
                        priority: -100, compile: aa(function (b, c, f) {
                            c = f.$$observers || (f.$$observers = {});
                            if (h.test(d))throw ha("nodomevents");
                            if (e = l(f[d], !0, v(a, d)))f[d] = e(b), (c[d] || (c[d] = [])).$$inter = !0, (f.$$observers && f.$$observers[d].$$scope || b).$watch(e, function (a) {
                                f.$set(d, a)
                            })
                        })
                    })
                }
            }

            function db(a, b, c) {
                var d = b[0],
                    e = b.length, f = d.parentNode, h, k;
                if (a)for (h = 0, k = a.length; h < k; h++)if (a[h] == d) {
                    a[h++] = c;
                    k = h + e - 1;
                    for (var g = a.length; h < g; h++, k++)k < g ? a[h] = a[k] : delete a[h];
                    a.length -= e - 1;
                    break
                }
                f && f.replaceChild(c, d);
                a = R.createDocumentFragment();
                a.appendChild(d);
                c[x.expando] = d[x.expando];
                d = 1;
                for (e = b.length; d < e; d++)f = b[d], x(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            var z = function (a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            z.prototype = {
                $normalize: la, $addClass: function (a) {
                    a && 0 < a.length && M.addClass(this.$$element,
                        a)
                }, $removeClass: function (a) {
                    a && 0 < a.length && M.removeClass(this.$$element, a)
                }, $set: function (a, b, c, d) {
                    function e(a, b) {
                        var c = [], d = a.split(/\s+/), f = b.split(/\s+/), h = 0;
                        a:for (; h < d.length; h++) {
                            for (var k = d[h], g = 0; g < f.length; g++)if (k == f[g])continue a;
                            c.push(k)
                        }
                        return c
                    }

                    if ("class" == a)b = b || "", c = this.$$element.attr("class") || "", this.$removeClass(e(c, b).join(" ")), this.$addClass(e(b, c).join(" ")); else {
                        var h = Yb(this.$$element[0], a);
                        h && (this.$$element.prop(a, b), d = h);
                        this[a] = b;
                        d ? this.$attr[a] = d : (d = this.$attr[a]) ||
                        (this.$attr[a] = d = $a(a, "-"));
                        h = Da(this.$$element);
                        if ("A" === h && "href" === a || "IMG" === h && "src" === a)if (!Q || 8 <= Q)h = wa(b).href, "" !== h && ("href" === a && !h.match(f) || "src" === a && !h.match(g)) && (this[a] = b = "unsafe:" + h);
                        !1 !== c && (null === b || b === s ? this.$$element.removeAttr(d) : this.$$element.attr(d, b))
                    }
                    (c = this.$$observers) && p(c[a], function (a) {
                        try {
                            a(b)
                        } catch (c) {
                            r(c)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    e.push(b);
                    C.$evalAsync(function () {
                        e.$$inter || b(c[a])
                    });
                    return b
                }
            };
            var D = l.startSymbol(), J = l.endSymbol(), cc = "{{" == D || "}}" == J ? za : function (a) {
                return a.replace(/\{\{/g, D).replace(/}}/g, J)
            }, ma = /^ngAttr[A-Z]/;
            return t
        }]
    }

    function la(b) {
        return Ma(b.replace(bd, ""))
    }

    function cd() {
        var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (a, d) {
            pa(a, "controller");
            S(a) ? G(b, a) : b[a] = d
        };
        this.$get = ["$injector", "$window", function (c, d) {
            return function (e, f) {
                var g, h, m;
                F(e) && (g = e.match(a), h = g[1], m = g[3], e = b.hasOwnProperty(h) ? b[h] : sb(f.$scope, h, !0) || sb(d, h, !0), La(e, h, !0));
                g = c.instantiate(e,
                    f);
                if (m) {
                    if (!f || "object" != typeof f.$scope)throw D("$controller")("noscp", h || e.name, m);
                    f.$scope[m] = g
                }
                return g
            }
        }]
    }

    function dd() {
        this.$get = ["$window", function (b) {
            return x(b.document)
        }]
    }

    function ed() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function dc(b) {
        var a = {}, c, d, e;
        if (!b)return a;
        p(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = B(ba(b.substr(0, e)));
            d = ba(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + (", " + d) : d)
        });
        return a
    }

    function ec(b) {
        var a = S(b) ? b : s;
        return function (c) {
            a ||
            (a = dc(b));
            return c ? a[B(c)] || null : a
        }
    }

    function fc(b, a, c) {
        if (E(c))return c(b, a);
        p(c, function (c) {
            b = c(b, a)
        });
        return b
    }

    function fd() {
        var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = {"Content-Type": "application/json;charset=utf-8"}, e = this.defaults = {
            transformResponse: [function (d) {
                F(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = Ob(d)));
                return d
            }], transformRequest: [function (a) {
                return S(a) && "[object File]" !== Wa.apply(a) ? oa(a) : a
            }], headers: {
                common: {Accept: "application/json, text/plain, */*"}, post: d,
                put: d, patch: d
            }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"
        }, f = this.interceptors = [], g = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, c, d, r, q) {
            function n(a) {
                function c(a) {
                    var b = G({}, a, {data: fc(a.data, a.headers, d.transformResponse)});
                    return 200 <= a.status && 300 > a.status ? b : r.reject(b)
                }

                var d = {
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse
                }, f = function (a) {
                    function b(a) {
                        var c;
                        p(a, function (b,
                                       d) {
                            E(b) && (c = b(), null != c ? a[d] = c : delete a[d])
                        })
                    }

                    var c = e.headers, d = G({}, a.headers), f, h, c = G({}, c.common, c[B(a.method)]);
                    b(c);
                    b(d);
                    a:for (f in c) {
                        a = B(f);
                        for (h in d)if (B(h) === a)continue a;
                        d[f] = c[f]
                    }
                    return d
                }(a);
                G(d, a);
                d.headers = f;
                d.method = Ea(d.method);
                (a = Cb(d.url) ? b.cookies()[d.xsrfCookieName || e.xsrfCookieName] : s) && (f[d.xsrfHeaderName || e.xsrfHeaderName] = a);
                var h = [function (a) {
                    f = a.headers;
                    var b = fc(a.data, ec(f), a.transformRequest);
                    z(a.data) && p(f, function (a, b) {
                        "content-type" === B(b) && delete f[b]
                    });
                    z(a.withCredentials) && !z(e.withCredentials) && (a.withCredentials = e.withCredentials);
                    return y(a, b, f).then(c, c)
                }, s], k = r.when(d);
                for (p(u, function (a) {
                    (a.request || a.requestError) && h.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && h.push(a.response, a.responseError)
                }); h.length;) {
                    a = h.shift();
                    var g = h.shift(), k = k.then(a, g)
                }
                k.success = function (a) {
                    k.then(function (b) {
                        a(b.data, b.status, b.headers, d)
                    });
                    return k
                };
                k.error = function (a) {
                    k.then(null, function (b) {
                        a(b.data, b.status, b.headers, d)
                    });
                    return k
                };
                return k
            }

            function y(b,
                       c, f) {
                function k(a, b, c) {
                    p && (200 <= a && 300 > a ? p.put(s, [a, b, dc(c)]) : p.remove(s));
                    g(b, a, c);
                    d.$$phase || d.$apply()
                }

                function g(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && 300 > c ? q.resolve : q.reject)({data: a, status: c, headers: ec(d), config: b})
                }

                function m() {
                    var a = Ya(n.pendingRequests, b);
                    -1 !== a && n.pendingRequests.splice(a, 1)
                }

                var q = r.defer(), y = q.promise, p, u, s = A(b.url, b.params);
                n.pendingRequests.push(b);
                y.then(m, m);
                (b.cache || e.cache) && (!1 !== b.cache && "GET" == b.method) && (p = S(b.cache) ? b.cache : S(e.cache) ? e.cache : C);
                if (p)if (u = p.get(s),
                        w(u)) {
                    if (u.then)return u.then(m, m), u;
                    H(u) ? g(u[1], u[0], fa(u[2])) : g(u, 200, {})
                } else p.put(s, y);
                z(u) && a(b.method, s, c, k, f, b.timeout, b.withCredentials, b.responseType);
                return y
            }

            function A(a, b) {
                if (!b)return a;
                var c = [];
                Gc(b, function (a, b) {
                    null != a && a != s && (H(a) || (a = [a]), p(a, function (a) {
                        S(a) && (a = oa(a));
                        c.push(va(b) + "=" + va(a))
                    }))
                });
                return a + (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")
            }

            var C = c("$http"), u = [];
            p(f, function (a) {
                u.unshift(F(a) ? q.get(a) : q.invoke(a))
            });
            p(g, function (a, b) {
                var c = F(a) ? q.get(a) : q.invoke(a);
                u.splice(b,
                    0, {
                        response: function (a) {
                            return c(r.when(a))
                        }, responseError: function (a) {
                            return c(r.reject(a))
                        }
                    })
            });
            n.pendingRequests = [];
            (function (a) {
                p(arguments, function (a) {
                    n[a] = function (b, c) {
                        return n(G(c || {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                p(arguments, function (a) {
                    n[a] = function (b, c, d) {
                        return n(G(d || {}, {method: a, url: b, data: c}))
                    }
                })
            })("post", "put");
            n.defaults = e;
            return n
        }]
    }

    function gd() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return hd(b, id, b.defer, a.angular.callbacks,
                c[0], a.location.protocol.replace(":", ""))
        }]
    }

    function hd(b, a, c, d, e, f) {
        function g(a, b) {
            var c = e.createElement("script"), d = function () {
                e.body.removeChild(c);
                b && b()
            };
            c.type = "text/javascript";
            c.src = a;
            Q ? c.onreadystatechange = function () {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = d;
            e.body.appendChild(c);
            return d
        }

        return function (e, m, k, l, r, q, n, y) {
            function A() {
                u = -1;
                M && M();
                t && t.abort()
            }

            function C(a, d, e, h) {
                var g = f || wa(m).protocol;
                T && c.cancel(T);
                M = t = null;
                d = "file" == g ? e ? 200 : 404 : d;
                a(1223 == d ? 204 : d,
                    e, h);
                b.$$completeOutstandingRequest(v)
            }

            var u;
            b.$$incOutstandingRequestCount();
            m = m || b.url();
            if ("jsonp" == B(e)) {
                var s = "_" + (d.counter++).toString(36);
                d[s] = function (a) {
                    d[s].data = a
                };
                var M = g(m.replace("JSON_CALLBACK", "angular.callbacks." + s), function () {
                    d[s].data ? C(l, 200, d[s].data) : C(l, u || -2);
                    delete d[s]
                })
            } else {
                var t = new a;
                t.open(e, m, !0);
                p(r, function (a, b) {
                    w(a) && t.setRequestHeader(b, a)
                });
                t.onreadystatechange = function () {
                    if (4 == t.readyState) {
                        var a = t.getAllResponseHeaders();
                        C(l, u || t.status, t.responseType ? t.response :
                            t.responseText, a)
                    }
                };
                n && (t.withCredentials = !0);
                y && (t.responseType = y);
                t.send(k || null)
            }
            if (0 < q)var T = c(A, q); else q && q.then && q.then(A)
        }
    }

    function jd() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(f, k, l) {
                for (var r, q, n = 0, y = [], A = f.length, p = !1, u = []; n < A;)-1 != (r = f.indexOf(b, n)) && -1 != (q = f.indexOf(a, r + g)) ? (n != r && y.push(f.substring(n, r)), y.push(n = c(p = f.substring(r +
                    g, q))), n.exp = p, n = q + h, p = !0) : (n != A && y.push(f.substring(n)), n = A);
                (A = y.length) || (y.push(""), A = 1);
                if (l && 1 < y.length)throw gc("noconcat", f);
                if (!k || p)return u.length = A, n = function (a) {
                    try {
                        for (var b = 0, c = A, h; b < c; b++)"function" == typeof(h = y[b]) && (h = h(a), h = l ? e.getTrusted(l, h) : e.valueOf(h), null == h || h == s ? h = "" : "string" != typeof h && (h = oa(h))), u[b] = h;
                        return u.join("")
                    } catch (g) {
                        a = gc("interr", f, g.toString()), d(a)
                    }
                }, n.exp = f, n.parts = y, n
            }

            var g = b.length, h = a.length;
            f.startSymbol = function () {
                return b
            };
            f.endSymbol = function () {
                return a
            };
            return f
        }]
    }

    function kd() {
        this.$get = ["$rootScope", "$window", "$q", function (b, a, c) {
            function d(d, g, h, m) {
                var k = a.setInterval, l = a.clearInterval, r = c.defer(), q = r.promise;
                h = w(h) ? h : 0;
                var n = 0, y = w(m) && !m;
                q.then(null, null, d);
                q.$$intervalId = k(function () {
                    r.notify(n++);
                    0 < h && n >= h && (r.resolve(n), l(q.$$intervalId), delete e[q.$$intervalId]);
                    y || b.$apply()
                }, g);
                e[q.$$intervalId] = r;
                return q
            }

            var e = {};
            d.cancel = function (a) {
                return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), clearInterval(a.$$intervalId), delete e[a.$$intervalId],
                    !0) : !1
            };
            return d
        }]
    }

    function ld() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function hc(b) {
        b = b.split("/");
        for (var a = b.length; a--;)b[a] = qb(b[a]);
        return b.join("/")
    }

    function ic(b, a) {
        var c = wa(b);
        a.$$protocol =
            c.protocol;
        a.$$host = c.hostname;
        a.$$port = W(c.port) || md[c.protocol] || null
    }

    function jc(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = wa(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
        a.$$search = Qb(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function na(b, a) {
        if (0 == a.indexOf(b))return a.substr(b.length)
    }

    function Ta(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function Db(b) {
        return b.substr(0,
            Ta(b).lastIndexOf("/") + 1)
    }

    function kc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = Db(b);
        ic(b, this);
        this.$$parse = function (a) {
            var b = na(c, a);
            if (!F(b))throw Eb("ipthprfx", a, c);
            jc(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Rb(this.$$search), b = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = hc(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$rewrite = function (d) {
            var e;
            if ((e = na(b, d)) !== s)return d = e, (e = na(a, e)) !== s ? c + (na("/", e) || e) : b + d;
            if ((e = na(c,
                    d)) !== s)return c + e;
            if (c == d + "/")return c
        }
    }

    function Fb(b, a) {
        var c = Db(b);
        ic(b, this);
        this.$$parse = function (d) {
            var e = na(b, d) || na(c, d), e = "#" == e.charAt(0) ? na(a, e) : this.$$html5 ? e : "";
            if (!F(e))throw Eb("ihshprfx", d, a);
            jc(e, this);
            this.$$compose()
        };
        this.$$compose = function () {
            var c = Rb(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = hc(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$rewrite = function (a) {
            if (Ta(b) == Ta(a))return a
        }
    }

    function lc(b, a) {
        this.$$html5 = !0;
        Fb.apply(this,
            arguments);
        var c = Db(b);
        this.$$rewrite = function (d) {
            var e;
            if (b == Ta(d))return d;
            if (e = na(c, d))return b + a + e;
            if (c === d + "/")return c
        }
    }

    function eb(b) {
        return function () {
            return this[b]
        }
    }

    function mc(b, a) {
        return function (c) {
            if (z(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function nd() {
        var b = "", a = !1;
        this.hashPrefix = function (a) {
            return w(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return w(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, f) {
            function g(a) {
                c.$broadcast("$locationChangeSuccess",
                    h.absUrl(), a)
            }

            var h, m = d.baseHref(), k = d.url();
            a ? (m = k.substring(0, k.indexOf("/", k.indexOf("//") + 2)) + (m || "/"), e = e.history ? kc : lc) : (m = Ta(k), e = Fb);
            h = new e(m, "#" + b);
            h.$$parse(h.$$rewrite(k));
            f.on("click", function (a) {
                if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                    for (var b = x(a.target); "a" !== B(b[0].nodeName);)if (b[0] === f[0] || !(b = b.parent())[0])return;
                    var e = b.prop("href"), g = h.$$rewrite(e);
                    e && (!b.attr("target") && g && !a.isDefaultPrevented()) && (a.preventDefault(), g != d.url() && (h.$$parse(g), c.$apply(), Y.angular["ff-684208-preventDefault"] = !0))
                }
            });
            h.absUrl() != k && d.url(h.absUrl(), !0);
            d.onUrlChange(function (a) {
                h.absUrl() != a && (c.$broadcast("$locationChangeStart", a, h.absUrl()).defaultPrevented ? d.url(h.absUrl()) : (c.$evalAsync(function () {
                    var b = h.absUrl();
                    h.$$parse(a);
                    g(b)
                }), c.$$phase || c.$digest()))
            });
            var l = 0;
            c.$watch(function () {
                var a = d.url(), b = h.$$replace;
                l && a == h.absUrl() || (l++, c.$evalAsync(function () {
                    c.$broadcast("$locationChangeStart", h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), g(a))
                }));
                h.$$replace = !1;
                return l
            });
            return h
        }]
    }

    function od() {
        var b = !0, a = this;
        this.debugEnabled = function (a) {
            return w(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function (c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || v;
                return e.apply ? function () {
                    var a = [];
                    p(arguments, function (b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"),
                info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        b && c.apply(a, arguments)
                    }
                }()
            }
        }]
    }

    function qa(b, a) {
        if ("constructor" === b)throw xa("isecfld", a);
        return b
    }

    function fb(b, a) {
        if (b && b.constructor === b)throw xa("isecfn", a);
        if (b && b.document && b.location && b.alert && b.setInterval)throw xa("isecwindow", a);
        if (b && (b.nodeName || b.on && b.find))throw xa("isecdom", a);
        return b
    }

    function gb(b, a, c, d, e) {
        e = e || {};
        a = a.split(".");
        for (var f, g = 0; 1 < a.length; g++) {
            f = qa(a.shift(), d);
            var h =
                b[f];
            h || (h = {}, b[f] = h);
            b = h;
            b.then && e.unwrapPromises && (ra(d), "$$v" in b || function (a) {
                a.then(function (b) {
                    a.$$v = b
                })
            }(b), b.$$v === s && (b.$$v = {}), b = b.$$v)
        }
        f = qa(a.shift(), d);
        return b[f] = c
    }

    function nc(b, a, c, d, e, f, g) {
        qa(b, f);
        qa(a, f);
        qa(c, f);
        qa(d, f);
        qa(e, f);
        return g.unwrapPromises ? function (h, g) {
            var k = g && g.hasOwnProperty(b) ? g : h, l;
            if (null === k || k === s)return k;
            (k = k[b]) && k.then && (ra(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            if (!a || null === k || k === s)return k;
            (k = k[a]) && k.then && (ra(f), "$$v" in k ||
            (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            if (!c || null === k || k === s)return k;
            (k = k[c]) && k.then && (ra(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            if (!d || null === k || k === s)return k;
            (k = k[d]) && k.then && (ra(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            if (!e || null === k || k === s)return k;
            (k = k[e]) && k.then && (ra(f), "$$v" in k || (l = k, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), k = k.$$v);
            return k
        } : function (f, g) {
            var k = g && g.hasOwnProperty(b) ? g : f;
            if (null === k || k === s)return k;
            k = k[b];
            if (!a || null === k || k === s)return k;
            k = k[a];
            if (!c || null === k || k === s)return k;
            k = k[c];
            if (!d || null === k || k === s)return k;
            k = k[d];
            return e && null !== k && k !== s ? k = k[e] : k
        }
    }

    function oc(b, a, c) {
        if (Gb.hasOwnProperty(b))return Gb[b];
        var d = b.split("."), e = d.length, f;
        if (a.csp)f = 6 > e ? nc(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, f) {
            var h = 0, g;
            do g = nc(d[h++], d[h++], d[h++], d[h++], d[h++], c, a)(b, f), f = s, b = g; while (h < e);
            return g
        }; else {
            var g = "var l, fn, p;\n";
            p(d, function (b, d) {
                qa(b, c);
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" +
                    (d ? "s" : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/\"/g, '\\"') + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
            });
            var g = g + "return s;", h = Function("s", "k", "pw", g);
            h.toString = function () {
                return g
            };
            f = function (a, b) {
                return h(a, b, ra)
            }
        }
        "hasOwnProperty" !== b && (Gb[b] = f);
        return f
    }

    function pd() {
        var b = {}, a = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0};
        this.unwrapPromises = function (b) {
            return w(b) ?
                (a.unwrapPromises = !!b, this) : a.unwrapPromises
        };
        this.logPromiseWarnings = function (b) {
            return w(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings
        };
        this.$get = ["$filter", "$sniffer", "$log", function (c, d, e) {
            a.csp = d.csp;
            ra = function (b) {
                a.logPromiseWarnings && !pc.hasOwnProperty(b) && (pc[b] = !0, e.warn("[$parse] Promise found in the expression `" + b + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            };
            return function (d) {
                var e;
                switch (typeof d) {
                    case "string":
                        if (b.hasOwnProperty(d))return b[d];
                        e = new Hb(a);
                        e = (new Ua(e, c, a)).parse(d, !1);
                        "hasOwnProperty" !== d && (b[d] = e);
                        return e;
                    case "function":
                        return d;
                    default:
                        return v
                }
            }
        }]
    }

    function qd() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return rd(function (a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function rd(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return g(a)
        }

        var e = function () {
            var h = [], m, k;
            return k = {
                resolve: function (a) {
                    if (h) {
                        var c = h;
                        h = s;
                        m = f(a);
                        c.length && b(function () {
                            for (var a, b = 0, d = c.length; b < d; b++)a = c[b], m.then(a[0], a[1], a[2])
                        })
                    }
                }, reject: function (a) {
                    k.resolve(g(a))
                },
                notify: function (a) {
                    if (h) {
                        var c = h;
                        h.length && b(function () {
                            for (var b, d = 0, e = c.length; d < e; d++)b = c[d], b[2](a)
                        })
                    }
                }, promise: {
                    then: function (b, f, g) {
                        var k = e(), y = function (d) {
                            try {
                                k.resolve((E(b) ? b : c)(d))
                            } catch (e) {
                                k.reject(e), a(e)
                            }
                        }, A = function (b) {
                            try {
                                k.resolve((E(f) ? f : d)(b))
                            } catch (c) {
                                k.reject(c), a(c)
                            }
                        }, p = function (b) {
                            try {
                                k.notify((E(g) ? g : c)(b))
                            } catch (d) {
                                a(d)
                            }
                        };
                        h ? h.push([y, A, p]) : m.then(y, A, p);
                        return k.promise
                    }, "catch": function (a) {
                        return this.then(null, a)
                    }, "finally": function (a) {
                        function b(a, c) {
                            var d = e();
                            c ? d.resolve(a) :
                                d.reject(a);
                            return d.promise
                        }

                        function d(e, f) {
                            var h = null;
                            try {
                                h = (a || c)()
                            } catch (g) {
                                return b(g, !1)
                            }
                            return h && E(h.then) ? h.then(function () {
                                return b(e, f)
                            }, function (a) {
                                return b(a, !1)
                            }) : b(e, f)
                        }

                        return this.then(function (a) {
                            return d(a, !0)
                        }, function (a) {
                            return d(a, !1)
                        })
                    }
                }
            }
        }, f = function (a) {
            return a && E(a.then) ? a : {
                then: function (c) {
                    var d = e();
                    b(function () {
                        d.resolve(c(a))
                    });
                    return d.promise
                }
            }
        }, g = function (c) {
            return {
                then: function (f, g) {
                    var l = e();
                    b(function () {
                        try {
                            l.resolve((E(g) ? g : d)(c))
                        } catch (b) {
                            l.reject(b), a(b)
                        }
                    });
                    return l.promise
                }
            }
        };
        return {
            defer: e, reject: g, when: function (h, m, k, l) {
                var r = e(), q, n = function (b) {
                    try {
                        return (E(m) ? m : c)(b)
                    } catch (d) {
                        return a(d), g(d)
                    }
                }, y = function (b) {
                    try {
                        return (E(k) ? k : d)(b)
                    } catch (c) {
                        return a(c), g(c)
                    }
                }, p = function (b) {
                    try {
                        return (E(l) ? l : c)(b)
                    } catch (d) {
                        a(d)
                    }
                };
                b(function () {
                    f(h).then(function (a) {
                        q || (q = !0, r.resolve(f(a).then(n, y, p)))
                    }, function (a) {
                        q || (q = !0, r.resolve(y(a)))
                    }, function (a) {
                        q || r.notify(p(a))
                    })
                });
                return r.promise
            }, all: function (a) {
                var b = e(), c = 0, d = H(a) ? [] : {};
                p(a, function (a, e) {
                    c++;
                    f(a).then(function (a) {
                        d.hasOwnProperty(e) ||
                        (d[e] = a, --c || b.resolve(d))
                    }, function (a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                });
                0 === c && b.resolve(d);
                return b.promise
            }
        }
    }

    function sd() {
        var b = 10, a = D("$rootScope");
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (c, d, e, f) {
            function g() {
                this.$id = Va();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue =
                    [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings = {}
            }

            function h(b) {
                if (l.$$phase)throw a("inprog", l.$$phase);
                l.$$phase = b
            }

            function m(a, b) {
                var c = e(a);
                La(c, b);
                return c
            }

            function k() {
            }

            g.prototype = {
                constructor: g, $new: function (a) {
                    a ? (a = new g, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (a = function () {
                    }, a.prototype = this, a = new a, a.$id = Va());
                    a["this"] = a;
                    a.$$listeners = {};
                    a.$parent = this;
                    a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail =
                        null;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a
                }, $watch: function (a, b, c) {
                    var d = m(a, "watch"), e = this.$$watchers, f = {fn: b, last: k, get: d, exp: a, eq: !!c};
                    if (!E(b)) {
                        var g = m(b || v, "listener");
                        f.fn = function (a, b, c) {
                            g(c)
                        }
                    }
                    if ("string" == typeof a && d.constant) {
                        var h = f.fn;
                        f.fn = function (a, b, c) {
                            h.call(this, a, b, c);
                            Ia(e, f)
                        }
                    }
                    e || (e = this.$$watchers = []);
                    e.unshift(f);
                    return function () {
                        Ia(e, f)
                    }
                }, $watchCollection: function (a, b) {
                    var c =
                        this, d, f, g = 0, h = e(a), k = [], l = {}, m = 0;
                    return this.$watch(function () {
                        f = h(c);
                        var a, b;
                        if (S(f))if (nb(f))for (d !== k && (d = k, m = d.length = 0, g++), a = f.length, m !== a && (g++, d.length = m = a), b = 0; b < a; b++)d[b] !== f[b] && (g++, d[b] = f[b]); else {
                            d !== l && (d = l = {}, m = 0, g++);
                            a = 0;
                            for (b in f)f.hasOwnProperty(b) && (a++, d.hasOwnProperty(b) ? d[b] !== f[b] && (g++, d[b] = f[b]) : (m++, d[b] = f[b], g++));
                            if (m > a)for (b in g++, d)d.hasOwnProperty(b) && !f.hasOwnProperty(b) && (m--, delete d[b])
                        } else d !== f && (d = f, g++);
                        return g
                    }, function () {
                        b(f, d, c)
                    })
                }, $digest: function () {
                    var c,
                        e, f, g, m = this.$$asyncQueue, p = this.$$postDigestQueue, s, w, M = b, t, x = [], v, N, da;
                    h("$digest");
                    do {
                        w = !1;
                        for (t = this; m.length;)try {
                            da = m.shift(), da.scope.$eval(da.expression)
                        } catch (ka) {
                            d(ka)
                        }
                        do {
                            if (g = t.$$watchers)for (s = g.length; s--;)try {
                                (c = g[s]) && ((e = c.get(t)) !== (f = c.last) && !(c.eq ? Aa(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) && (w = !0, c.last = c.eq ? fa(e) : e, c.fn(e, f === k ? e : f, t), 5 > M && (v = 4 - M, x[v] || (x[v] = []), N = E(c.exp) ? "fn: " + (c.exp.name || c.exp.toString()) : c.exp, N += "; newVal: " + oa(e) + "; oldVal: " +
                                    oa(f), x[v].push(N)))
                            } catch (L) {
                                d(L)
                            }
                            if (!(g = t.$$childHead || t !== this && t.$$nextSibling))for (; t !== this && !(g = t.$$nextSibling);)t = t.$parent
                        } while (t = g);
                        if (w && !M--)throw l.$$phase = null, a("infdig", b, oa(x));
                    } while (w || m.length);
                    for (l.$$phase = null; p.length;)try {
                        p.shift()()
                    } catch (B) {
                        d(B)
                    }
                }, $destroy: function () {
                    if (l != this && !this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                        a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                    }
                }, $eval: function (a, b) {
                    return e(a)(this, b)
                }, $evalAsync: function (a) {
                    l.$$phase || l.$$asyncQueue.length || f.defer(function () {
                        l.$$asyncQueue.length && l.$digest()
                    });
                    this.$$asyncQueue.push({scope: this, expression: a})
                }, $$postDigest: function (a) {
                    this.$$postDigestQueue.push(a)
                },
                $apply: function (a) {
                    try {
                        return h("$apply"), this.$eval(a)
                    } catch (b) {
                        d(b)
                    } finally {
                        l.$$phase = null;
                        try {
                            l.$digest()
                        } catch (c) {
                            throw d(c), c;
                        }
                    }
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    return function () {
                        c[Ya(c, b)] = null
                    }
                }, $emit: function (a, b) {
                    var c = [], e, f = this, g = !1, h = {
                        name: a, targetScope: f, stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = [h].concat(ua.call(arguments, 1)), l, m;
                    do {
                        e = f.$$listeners[a] || c;
                        h.currentScope =
                            f;
                        l = 0;
                        for (m = e.length; l < m; l++)if (e[l])try {
                            e[l].apply(null, k)
                        } catch (p) {
                            d(p)
                        } else e.splice(l, 1), l--, m--;
                        if (g)break;
                        f = f.$parent
                    } while (f);
                    return h
                }, $broadcast: function (a, b) {
                    var c = this, e = this, f = {
                        name: a, targetScope: this, preventDefault: function () {
                            f.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, g = [f].concat(ua.call(arguments, 1)), h, k;
                    do {
                        c = e;
                        f.currentScope = c;
                        e = c.$$listeners[a] || [];
                        h = 0;
                        for (k = e.length; h < k; h++)if (e[h])try {
                            e[h].apply(null, g)
                        } catch (l) {
                            d(l)
                        } else e.splice(h, 1), h--, k--;
                        if (!(e = c.$$childHead || c !== this && c.$$nextSibling))for (; c !==
                                                                                         this && !(e = c.$$nextSibling);)c = c.$parent
                    } while (c = e);
                    return f
                }
            };
            var l = new g;
            return l
        }]
    }

    function td(b) {
        if ("self" === b)return b;
        if (F(b)) {
            if (-1 < b.indexOf("***"))throw sa("iwcard", b);
            b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + b + "$")
        }
        if (Xa(b))return RegExp("^" + b.source + "$");
        throw sa("imatcher");
    }

    function qc(b) {
        var a = [];
        w(b) && p(b, function (b) {
            a.push(td(b))
        });
        return a
    }

    function ud() {
        this.SCE_CONTEXTS = ea;
        var b =
            ["self"], a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = qc(a));
            return b
        };
        this.resourceUrlBlacklist = function (b) {
            arguments.length && (a = qc(b));
            return a
        };
        this.$get = ["$log", "$document", "$injector", function (c, d, e) {
            function f(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var g = function (a) {
                throw sa("unsafe");
            };
            e.has("$sanitize") && (g = e.get("$sanitize"));
            var h = f(), m = {};
            m[ea.HTML] = f(h);
            m[ea.CSS] = f(h);
            m[ea.URL] = f(h);
            m[ea.JS] = f(h);
            m[ea.RESOURCE_URL] = f(m[ea.URL]);
            return {
                trustAs: function (a, b) {
                    var c = m.hasOwnProperty(a) ? m[a] : null;
                    if (!c)throw sa("icontext", a, b);
                    if (null === b || b === s || "" === b)return b;
                    if ("string" !== typeof b)throw sa("itype", a);
                    return new c(b)
                }, getTrusted: function (c, d) {
                    if (null === d || d === s || "" === d)return d;
                    var e = m.hasOwnProperty(c) ? m[c] : null;
                    if (e && d instanceof e)return d.$$unwrapTrustedValue();
                    if (c ===
                        ea.RESOURCE_URL) {
                        var e = wa(d.toString()), f, h, p = !1;
                        f = 0;
                        for (h = b.length; f < h; f++)if ("self" === b[f] ? Cb(e) : b[f].exec(e.href)) {
                            p = !0;
                            break
                        }
                        if (p)for (f = 0, h = a.length; f < h; f++)if ("self" === a[f] ? Cb(e) : a[f].exec(e.href)) {
                            p = !1;
                            break
                        }
                        if (p)return d;
                        throw sa("insecurl", d.toString());
                    }
                    if (c === ea.HTML)return g(d);
                    throw sa("unsafe");
                }, valueOf: function (a) {
                    return a instanceof h ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function vd() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$document", "$sceDelegate",
            function (a, c, d) {
                if (b && Q && (c = c[0].documentMode, c !== s && 8 > c))throw sa("iequirks");
                var e = fa(ea);
                e.isEnabled = function () {
                    return b
                };
                e.trustAs = d.trustAs;
                e.getTrusted = d.getTrusted;
                e.valueOf = d.valueOf;
                b || (e.trustAs = e.getTrusted = function (a, b) {
                    return b
                }, e.valueOf = za);
                e.parseAs = function (b, c) {
                    var d = a(c);
                    return d.literal && d.constant ? d : function (a, c) {
                        return e.getTrusted(b, d(a, c))
                    }
                };
                var f = e.parseAs, g = e.getTrusted, h = e.trustAs;
                p(ea, function (a, b) {
                    var c = B(b);
                    e[Ma("parse_as_" + c)] = function (b) {
                        return f(a, b)
                    };
                    e[Ma("get_trusted_" +
                        c)] = function (b) {
                        return g(a, b)
                    };
                    e[Ma("trust_as_" + c)] = function (b) {
                        return h(a, b)
                    }
                });
                return e
            }]
    }

    function wd() {
        this.$get = ["$window", "$document", function (b, a) {
            var c = {}, d = W((/android (\d+)/.exec(B((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|O|ms)(?=[A-Z])/, m = f.body && f.body.style, k = !1, l = !1;
            if (m) {
                for (var r in m)if (k = h.exec(r)) {
                    g = k[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break
                }
                g || (g = "WebkitOpacity" in m && "webkit");
                k = !!("transition" in m ||
                g + "Transition" in m);
                l = !!("animation" in m || g + "Animation" in m);
                !d || k && l || (k = F(f.body.style.webkitTransition), l = F(f.body.style.webkitAnimation))
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hashchange: "onhashchange" in b && (!f.documentMode || 7 < f.documentMode),
                hasEvent: function (a) {
                    if ("input" == a && 9 == Q)return !1;
                    if (z(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b
                    }
                    return c[a]
                },
                csp: f.securityPolicy ? f.securityPolicy.isActive : !1,
                vendorPrefix: g,
                transitions: k,
                animations: l
            }
        }]
    }

    function xd() {
        this.$get =
            ["$rootScope", "$browser", "$q", "$exceptionHandler", function (b, a, c, d) {
                function e(e, h, m) {
                    var k = c.defer(), l = k.promise, r = w(m) && !m;
                    h = a.defer(function () {
                        try {
                            k.resolve(e())
                        } catch (a) {
                            k.reject(a), d(a)
                        } finally {
                            delete f[l.$$timeoutId]
                        }
                        r || b.$apply()
                    }, h);
                    l.$$timeoutId = h;
                    f[h] = k;
                    return l
                }

                var f = {};
                e.cancel = function (b) {
                    return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
                };
                return e
            }]
    }

    function wa(b) {
        Q && (V.setAttribute("href", b), b = V.href);
        V.setAttribute("href",
            b);
        return {
            href: V.href,
            protocol: V.protocol ? V.protocol.replace(/:$/, "") : "",
            host: V.host,
            search: V.search ? V.search.replace(/^\?/, "") : "",
            hash: V.hash ? V.hash.replace(/^#/, "") : "",
            hostname: V.hostname,
            port: V.port,
            pathname: V.pathname && "/" === V.pathname.charAt(0) ? V.pathname : "/" + V.pathname
        }
    }

    function Cb(b) {
        b = F(b) ? wa(b) : b;
        return b.protocol === rc.protocol && b.host === rc.host
    }

    function yd() {
        this.$get = aa(Y)
    }

    function sc(b) {
        function a(d, e) {
            if (S(d)) {
                var f = {};
                p(d, function (b, c) {
                    f[c] = a(c, b)
                });
                return f
            }
            return b.factory(d + c, e)
        }

        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }];
        a("currency", tc);
        a("date", uc);
        a("filter", zd);
        a("json", Ad);
        a("limitTo", Bd);
        a("lowercase", Cd);
        a("number", vc);
        a("orderBy", wc);
        a("uppercase", Dd)
    }

    function zd() {
        return function (b, a, c) {
            if (!H(b))return b;
            var d = [];
            d.check = function (a) {
                for (var b = 0; b < d.length; b++)if (!d[b](a))return !1;
                return !0
            };
            switch (typeof c) {
                case "function":
                    break;
                case "boolean":
                    if (!0 == c) {
                        c = function (a, b) {
                            return Za.equals(a, b)
                        };
                        break
                    }
                default:
                    c =
                        function (a, b) {
                            b = ("" + b).toLowerCase();
                            return -1 < ("" + a).toLowerCase().indexOf(b)
                        }
            }
            var e = function (a, b) {
                if ("string" == typeof b && "!" === b.charAt(0))return !e(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return c(a, b);
                    case "object":
                        switch (typeof b) {
                            case "object":
                                return c(a, b);
                            default:
                                for (var d in a)if ("$" !== d.charAt(0) && e(a[d], b))return !0
                        }
                        return !1;
                    case "array":
                        for (d = 0; d < a.length; d++)if (e(a[d], b))return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a =
                    {$: a};
                case "object":
                    for (var f in a)"$" == f ? function () {
                        if (a[f]) {
                            var b = f;
                            d.push(function (c) {
                                return e(c, a[b])
                            })
                        }
                    }() : function () {
                        if ("undefined" != typeof a[f]) {
                            var b = f;
                            d.push(function (c) {
                                return e(sb(c, b), a[b])
                            })
                        }
                    }();
                    break;
                case "function":
                    d.push(a);
                    break;
                default:
                    return b
            }
            for (var g = [], h = 0; h < b.length; h++) {
                var m = b[h];
                d.check(m) && g.push(m)
            }
            return g
        }
    }

    function tc(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            z(d) && (d = a.CURRENCY_SYM);
            return xc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function vc(b) {
        var a =
            b.NUMBER_FORMATS;
        return function (b, d) {
            return xc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function xc(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b))return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "", h = "", m = [], k = !1;
        if (-1 !== g.indexOf("e")) {
            var l = g.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? g = "0" : (h = g, k = !0)
        }
        if (k)0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e)); else {
            g = (g.split(yc)[1] || "").length;
            z(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            g = Math.pow(10, e);
            b = Math.round(b * g) / g;
            b = ("" + b).split(yc);
            g = b[0];
            b = b[1] ||
                "";
            var k = 0, l = a.lgSize, r = a.gSize;
            if (g.length >= l + r)for (var k = g.length - l, q = 0; q < k; q++)0 === (k - q) % r && 0 !== q && (h += c), h += g.charAt(q);
            for (q = k; q < g.length; q++)0 === (g.length - q) % l && 0 !== q && (h += c), h += g.charAt(q);
            for (; b.length < e;)b += "0";
            e && "0" !== e && (h += d + b.substr(0, e))
        }
        m.push(f ? a.negPre : a.posPre);
        m.push(h);
        m.push(f ? a.negSuf : a.posSuf);
        return m.join("")
    }

    function Ib(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function X(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e =
                e["get" + b]();
            if (0 < c || e > -c)e += c;
            0 === e && -12 == c && (e = 12);
            return Ib(e, a, d)
        }
    }

    function hb(b, a) {
        return function (c, d) {
            var e = c["get" + b](), f = Ea(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function uc(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, m = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = W(b[9] + b[10]), g = W(b[9] + b[11]));
                h.call(a, W(b[1]), W(b[2]) - 1, W(b[3]));
                f = W(b[4] || 0) - f;
                g = W(b[5] || 0) - g;
                h = W(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                m.call(a, f, g, h, b)
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e) {
            var f = "", g = [], h, m;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            F(c) && (c = Ed.test(c) ? W(c) : a(c));
            ob(c) && (c = new Date(c));
            if (!Ha(c))return c;
            for (; e;)(m = Fd.exec(e)) ? (g = g.concat(ua.call(m, 1)), e = g.pop()) : (g.push(e), e = null);
            p(g, function (a) {
                h = Gd[a];
                f += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return f
        }
    }

    function Ad() {
        return function (b) {
            return oa(b, !0)
        }
    }

    function Bd() {
        return function (b, a) {
            if (!H(b) && !F(b))return b;
            a = W(a);
            if (F(b))return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [], d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++)c.push(b[d]);
            return c
        }
    }

    function wc(b) {
        return function (a, c, d) {
            function e(a, b) {
                return Ka(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            if (!H(a) || !c)return a;
            c = H(c) ? c : [c];
            c = Jc(c, function (a) {
                var c = !1, d = a || za;
                if (F(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
                    d = b(a)
                }
                return e(function (a, b) {
                    var c;
                    c = d(a);
                    var e = d(b), f = typeof c, g = typeof e;
                    f == g ? ("string" == f && (c = c.toLowerCase(), e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            });
            for (var f = [], g = 0; g < a.length; g++)f.push(a[g]);
            return f.sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }, d))
        }
    }

    function ta(b) {
        E(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return aa(b)
    }

    function zc(b, a) {
        function c(a, c) {
            c = c ? "-" + $a(c, "-") : "";
            b.removeClass((a ? ib : jb) + c).addClass((a ? jb :
                    ib) + c)
        }

        var d = this, e = b.parent().controller("form") || kb, f = 0, g = d.$error = {}, h = [];
        d.$name = a.name || a.ngForm;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass(Fa);
        c(!0);
        d.$addControl = function (a) {
            pa(a.$name, "input");
            h.push(a);
            a.$name && (d[a.$name] = a)
        };
        d.$removeControl = function (a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            p(g, function (b, c) {
                d.$setValidity(c, !0, a)
            });
            Ia(h, a)
        };
        d.$setValidity = function (a, b, h) {
            var r = g[a];
            if (b)r && (Ia(r, h), r.length || (f--, f || (c(b), d.$valid = !0, d.$invalid = !1), g[a] = !1, c(!0, a), e.$setValidity(a, !0, d))); else {
                f || c(b);
                if (r) {
                    if (-1 != Ya(r, h))return
                } else g[a] = r = [], f++, c(!1, a), e.$setValidity(a, !1, d);
                r.push(h);
                d.$valid = !1;
                d.$invalid = !0
            }
        };
        d.$setDirty = function () {
            b.removeClass(Fa).addClass(lb);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        };
        d.$setPristine = function () {
            b.removeClass(lb).addClass(Fa);
            d.$dirty = !1;
            d.$pristine = !0;
            p(h, function (a) {
                a.$setPristine()
            })
        }
    }

    function mb(b, a, c, d, e, f) {
        var g = function () {
            var e = a.val();
            Ka(c.ngTrim || "T") && (e = ba(e));
            d.$viewValue !== e && b.$apply(function () {
                d.$setViewValue(e)
            })
        };
        if (e.hasEvent("input"))a.on("input", g); else {
            var h, m = function () {
                h || (h = f.defer(function () {
                    g();
                    h = null
                }))
            };
            a.on("keydown", function (a) {
                a = a.keyCode;
                91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || m()
            });
            a.on("change", g);
            if (e.hasEvent("paste"))a.on("paste cut", m)
        }
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        };
        var k = c.ngPattern, l = function (a, b) {
            if (d.$isEmpty(b) || a.test(b))return d.$setValidity("pattern", !0), b;
            d.$setValidity("pattern", !1);
            return s
        };
        k && ((e = k.match(/^\/(.*)\/([gim]*)$/)) ? (k = RegExp(e[1],
            e[2]), e = function (a) {
            return l(k, a)
        }) : e = function (c) {
            var d = b.$eval(k);
            if (!d || !d.test)throw D("ngPattern")("noregexp", k, d, ga(a));
            return l(d, c)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var r = W(c.ngMinlength);
            e = function (a) {
                if (!d.$isEmpty(a) && a.length < r)return d.$setValidity("minlength", !1), s;
                d.$setValidity("minlength", !0);
                return a
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var q = W(c.ngMaxlength);
            e = function (a) {
                if (!d.$isEmpty(a) && a.length > q)return d.$setValidity("maxlength",
                    !1), s;
                d.$setValidity("maxlength", !0);
                return a
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
    }

    function Jb(b, a) {
        b = "ngClass" + b;
        return function () {
            return {
                restrict: "AC", link: function (c, d, e) {
                    function f(b) {
                        if (!0 === a || c.$index % 2 === a)h && !Aa(b, h) && e.$removeClass(g(h)), e.$addClass(g(b));
                        h = fa(b)
                    }

                    function g(a) {
                        if (H(a))return a.join(" ");
                        if (S(a)) {
                            var b = [];
                            p(a, function (a, c) {
                                a && b.push(c)
                            });
                            return b.join(" ")
                        }
                        return a
                    }

                    var h = s;
                    c.$watch(e[b], f, !0);
                    e.$observe("class", function (a) {
                        f(c.$eval(e[b]))
                    });
                    "ngClass" !== b && c.$watch("$index",
                        function (d, f) {
                            var h = d & 1;
                            h !== f & 1 && (h === a ? (h = c.$eval(e[b]), e.$addClass(g(h))) : (h = c.$eval(e[b]), e.$removeClass(g(h))))
                        })
                }
            }
        }
    }

    var B = function (b) {
        return F(b) ? b.toLowerCase() : b
    }, Ea = function (b) {
        return F(b) ? b.toUpperCase() : b
    }, Q, x, Ba, ua = [].slice, Hd = [].push, Wa = Object.prototype.toString, Ja = D("ng"), Za = Y.angular || (Y.angular = {}), Ra, Da, ia = ["0", "0", "0"];
    Q = W((/msie (\d+)/.exec(B(navigator.userAgent)) || [])[1]);
    isNaN(Q) && (Q = W((/trident\/.*; rv:(\d+)/.exec(B(navigator.userAgent)) || [])[1]));
    v.$inject = [];
    za.$inject = [];
    var ba =
        function () {
            return String.prototype.trim ? function (b) {
                return F(b) ? b.trim() : b
            } : function (b) {
                return F(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
            }
        }();
    Da = 9 > Q ? function (b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? Ea(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function (b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var Nc = /[A-Z]/g, Id = {
        full: "1.2.0-rc.3",
        major: 1,
        minor: 2,
        dot: 0,
        codeName: "ferocious-twitch"
    }, Oa = J.cache = {}, ab = J.expando = "ng-" + (new Date).getTime(), Rc = 1, Ac = Y.document.addEventListener ?
        function (b, a, c) {
            b.addEventListener(a, c, !1)
        } : function (b, a, c) {
        b.attachEvent("on" + a, c)
    }, xb = Y.document.removeEventListener ? function (b, a, c) {
        b.removeEventListener(a, c, !1)
    } : function (b, a, c) {
        b.detachEvent("on" + a, c)
    }, Pc = /([\:\-\_]+(.))/g, Qc = /^moz([A-Z])/, ub = D("jqLite"), Sa = J.prototype = {
        ready: function (b) {
            function a() {
                c || (c = !0, b())
            }

            var c = !1;
            "complete" === R.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), J(Y).on("load", a))
        }, toString: function () {
            var b = [];
            p(this, function (a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") +
                "]"
        }, eq: function (b) {
            return 0 <= b ? x(this[b]) : x(this[this.length + b])
        }, length: 0, push: Hd, sort: [].sort, splice: [].splice
    }, cb = {};
    p("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        cb[B(b)] = b
    });
    var Zb = {};
    p("input select option textarea button form details".split(" "), function (b) {
        Zb[Ea(b)] = !0
    });
    p({
        data: Wb, inheritedData: bb, scope: function (b) {
            return bb(b, "$scope")
        }, controller: Xb, injector: function (b) {
            return bb(b, "$injector")
        }, removeAttr: function (b, a) {
            b.removeAttribute(a)
        }, hasClass: yb,
        css: function (b, a, c) {
            a = Ma(a);
            if (w(c))b.style[a] = c; else {
                var d;
                8 >= Q && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
                d = d || b.style[a];
                8 >= Q && (d = "" === d ? s : d);
                return d
            }
        }, attr: function (b, a, c) {
            var d = B(a);
            if (cb[d])if (w(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || v).specified ? d : s; else if (w(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), null === b ? s : b
        }, prop: function (b, a, c) {
            if (w(c))b[a] = c; else return b[a]
        },
        text: function () {
            function b(b, d) {
                var e = a[b.nodeType];
                if (z(d))return e ? b[e] : "";
                b[e] = d
            }

            var a = [];
            9 > Q ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
            b.$dv = "";
            return b
        }(), val: function (b, a) {
            if (z(a)) {
                if ("SELECT" === Da(b) && b.multiple) {
                    var c = [];
                    p(b.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        }, html: function (b, a) {
            if (z(a))return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++)Na(d[c]);
            b.innerHTML = a
        }
    }, function (b, a) {
        J.prototype[a] =
            function (a, d) {
                var e, f;
                if ((2 == b.length && b !== yb && b !== Xb ? a : d) === s) {
                    if (S(a)) {
                        for (e = 0; e < this.length; e++)if (b === Wb)b(this[e], a); else for (f in a)b(this[e], f, a[f]);
                        return this
                    }
                    e = b.$dv;
                    f = e == s ? Math.min(this.length, 1) : this.length;
                    for (var g = 0; g < f; g++) {
                        var h = b(this[g], a, d);
                        e = e ? e + h : h
                    }
                    return e
                }
                for (e = 0; e < this.length; e++)b(this[e], a, d);
                return this
            }
    });
    p({
        removeData: Ub, dealoc: Na, on: function a(c, d, e, f) {
            if (w(f))throw ub("onargs");
            var g = ja(c, "events"), h = ja(c, "handle");
            g || ja(c, "events", g = {});
            h || ja(c, "handle", h = Sc(c, g));
            p(d.split(" "), function (d) {
                var f = g[d];
                if (!f) {
                    if ("mouseenter" == d || "mouseleave" == d) {
                        var l = R.body.contains || R.body.compareDocumentPosition ? function (a, c) {
                            var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                            return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
                        } : function (a, c) {
                            if (c)for (; c = c.parentNode;)if (c === a)return !0;
                            return !1
                        };
                        g[d] = [];
                        a(c, {mouseleave: "mouseout", mouseenter: "mouseover"}[d], function (a) {
                            var c = a.relatedTarget;
                            c && (c ===
                            this || l(this, c)) || h(a, d)
                        })
                    } else Ac(c, d, h), g[d] = [];
                    f = g[d]
                }
                f.push(e)
            })
        }, off: Vb, replaceWith: function (a, c) {
            var d, e = a.parentNode;
            Na(a);
            p(new J(c), function (c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        }, children: function (a) {
            var c = [];
            p(a.childNodes, function (a) {
                1 === a.nodeType && c.push(a)
            });
            return c
        }, contents: function (a) {
            return a.childNodes || []
        }, append: function (a, c) {
            p(new J(c), function (c) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
            })
        }, prepend: function (a, c) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                p(new J(c), function (c) {
                    a.insertBefore(c, d)
                })
            }
        }, wrap: function (a, c) {
            c = x(c)[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        }, remove: function (a) {
            Na(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        }, after: function (a, c) {
            var d = a, e = a.parentNode;
            p(new J(c), function (a) {
                e.insertBefore(a, d.nextSibling);
                d = a
            })
        }, addClass: Ab, removeClass: zb, toggleClass: function (a, c, d) {
            z(d) && (d = !yb(a, c));
            (d ? Ab : zb)(a, c)
        }, parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, next: function (a) {
            if (a.nextElementSibling)return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType;)a = a.nextSibling;
            return a
        }, find: function (a, c) {
            return a.getElementsByTagName(c)
        }, clone: wb, triggerHandler: function (a, c, d) {
            c = (ja(a, "events") || {})[c];
            d = d || [];
            var e = [{preventDefault: v, stopPropagation: v}];
            p(c, function (c) {
                c.apply(a, e.concat(d))
            })
        }
    }, function (a, c) {
        J.prototype[c] = function (c, e, f) {
            for (var g, h = 0; h < this.length; h++)g == s ? (g = a(this[h], c, e, f), g !== s && (g = x(g))) : vb(g, a(this[h], c, e, f));
            return g == s ? this : g
        };
        J.prototype.bind = J.prototype.on;
        J.prototype.unbind = J.prototype.off
    });
    Pa.prototype = {
        put: function (a, c) {
            this[Ca(a)] = c
        }, get: function (a) {
            return this[Ca(a)]
        }, remove: function (a) {
            var c = this[a = Ca(a)];
            delete this[a];
            return c
        }
    };
    var Uc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Vc = /,/, Wc = /^\s*(_?)(\S+?)\1\s*$/, Tc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Qa = D("$injector"), Jd = D("$animate"), Kd = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0))throw Jd("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d)
        };
        this.$get = ["$timeout",
            function (a) {
                return {
                    enter: function (d, e, f, g) {
                        f = f && f[f.length - 1];
                        var h = e && e[0] || f && f.parentNode, m = f && f.nextSibling || null;
                        p(d, function (a) {
                            h.insertBefore(a, m)
                        });
                        g && a(g, 0, !1)
                    }, leave: function (d, e) {
                        d.remove();
                        e && a(e, 0, !1)
                    }, move: function (a, c, f, g) {
                        this.enter(a, c, f, g)
                    }, addClass: function (d, e, f) {
                        e = F(e) ? e : H(e) ? e.join(" ") : "";
                        p(d, function (a) {
                            Ab(a, e)
                        });
                        f && a(f, 0, !1)
                    }, removeClass: function (d, e, f) {
                        e = F(e) ? e : H(e) ? e.join(" ") : "";
                        p(d, function (a) {
                            zb(a, e)
                        });
                        f && a(f, 0, !1)
                    }, enabled: v
                }
            }]
    }], ha = D("$compile");
    bc.$inject = ["$provide"];
    var bd = /^(x[\:\-_]|data[\:\-_])/i, id = Y.XMLHttpRequest || function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (c) {
            }
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (d) {
            }
            throw D("$httpBackend")("noxhr");
        }, gc = D("$interpolate"), Ld = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, md = {
        http: 80,
        https: 443,
        ftp: 21
    }, Eb = D("$location");
    lc.prototype = Fb.prototype = kc.prototype = {
        $$html5: !1, $$replace: !1, absUrl: eb("$$absUrl"), url: function (a, c) {
            if (z(a))return this.$$url;
            var d = Ld.exec(a);
            d[1] && this.path(decodeURIComponent(d[1]));
            (d[2] || d[1]) && this.search(d[3] || "");
            this.hash(d[5] || "", c);
            return this
        }, protocol: eb("$$protocol"), host: eb("$$host"), port: eb("$$port"), path: mc("$$path", function (a) {
            return "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a, c) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (F(a))this.$$search = Qb(a); else if (S(a))this.$$search = a; else throw Eb("isrcharg");
                    break;
                default:
                    c == s || null == c ? delete this.$$search[a] : this.$$search[a] = c
            }
            this.$$compose();
            return this
        }, hash: mc("$$hash", za), replace: function () {
            this.$$replace = !0;
            return this
        }
    };
    var xa = D("$parse"), pc = {}, ra, Ga = {
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: v, "+": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return w(d) ? w(e) ? d + e : d : w(e) ? e : s
        }, "-": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (w(d) ? d : 0) - (w(e) ? e : 0)
        }, "*": function (a, c, d, e) {
            return d(a, c) * e(a, c)
        }, "/": function (a, c, d, e) {
            return d(a, c) / e(a, c)
        }, "%": function (a, c, d, e) {
            return d(a, c) % e(a, c)
        }, "^": function (a,
                          c, d, e) {
            return d(a, c) ^ e(a, c)
        }, "=": v, "===": function (a, c, d, e) {
            return d(a, c) === e(a, c)
        }, "!==": function (a, c, d, e) {
            return d(a, c) !== e(a, c)
        }, "==": function (a, c, d, e) {
            return d(a, c) == e(a, c)
        }, "!=": function (a, c, d, e) {
            return d(a, c) != e(a, c)
        }, "<": function (a, c, d, e) {
            return d(a, c) < e(a, c)
        }, ">": function (a, c, d, e) {
            return d(a, c) > e(a, c)
        }, "<=": function (a, c, d, e) {
            return d(a, c) <= e(a, c)
        }, ">=": function (a, c, d, e) {
            return d(a, c) >= e(a, c)
        }, "&&": function (a, c, d, e) {
            return d(a, c) && e(a, c)
        }, "||": function (a, c, d, e) {
            return d(a, c) || e(a, c)
        }, "&": function (a,
                          c, d, e) {
            return d(a, c) & e(a, c)
        }, "|": function (a, c, d, e) {
            return e(a, c)(a, c, d(a, c))
        }, "!": function (a, c, d) {
            return !d(a, c)
        }
    }, Md = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, Hb = function (a) {
        this.options = a
    };
    Hb.prototype = {
        constructor: Hb, lex: function (a) {
            this.text = a;
            this.index = 0;
            this.ch = s;
            this.lastCh = ":";
            this.tokens = [];
            var c;
            for (a = []; this.index < this.text.length;) {
                this.ch = this.text.charAt(this.index);
                if (this.is("\"'"))this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))this.readNumber();
                else if (this.isIdent(this.ch))this.readIdent(), this.was("{,") && ("{" === a[0] && (c = this.tokens[this.tokens.length - 1])) && (c.json = -1 === c.text.indexOf(".")); else if (this.is("(){}[].,;:?"))this.tokens.push({
                    index: this.index,
                    text: this.ch,
                    json: this.was(":[,") && this.is("{[") || this.is("}]:,")
                }), this.is("{[") && a.unshift(this.ch), this.is("}]") && a.shift(), this.index++; else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue
                } else {
                    var d = this.ch + this.peek(), e = d + this.peek(2), f = Ga[this.ch], g = Ga[d], h = Ga[e];
                    h ? (this.tokens.push({
                        index: this.index,
                        text: e, fn: h
                    }), this.index += 3) : g ? (this.tokens.push({
                        index: this.index,
                        text: d,
                        fn: g
                    }), this.index += 2) : f ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: f,
                        json: this.was("[,:") && this.is("+-")
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        }, is: function (a) {
            return -1 !== a.indexOf(this.ch)
        }, was: function (a) {
            return -1 !== a.indexOf(this.lastCh)
        }, peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index +
                a) : !1
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, c, d) {
            d = d || this.index;
            c = w(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw xa("lexerr", a, c, this.text);
        }, readNumber: function () {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d =
                    B(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d))a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            a *= 1;
            this.tokens.push({
                index: c, text: a, json: !0, fn: function () {
                    return a
                }
            })
        }, readIdent: function () {
            for (var a = this, c = "", d = this.index, e, f, g, h; this.index < this.text.length;) {
                h =
                    this.text.charAt(this.index);
                if ("." === h || this.isIdent(h) || this.isNumber(h))"." === h && (e = this.index), c += h; else break;
                this.index++
            }
            if (e)for (f = this.index; f < this.text.length;) {
                h = this.text.charAt(f);
                if ("(" === h) {
                    g = c.substr(e - d + 1);
                    c = c.substr(0, e - d);
                    this.index = f;
                    break
                }
                if (this.isWhitespace(h))f++; else break
            }
            d = {index: d, text: c};
            if (Ga.hasOwnProperty(c))d.fn = Ga[c], d.json = Ga[c]; else {
                var m = oc(c, this.options, this.text);
                d.fn = G(function (a, c) {
                    return m(a, c)
                }, {
                    assign: function (d, e) {
                        return gb(d, c, e, a.text, a.options)
                    }
                })
            }
            this.tokens.push(d);
            g && (this.tokens.push({index: e, text: ".", json: !1}), this.tokens.push({
                index: e + 1,
                text: g,
                json: !1
            }))
        }, readString: function (a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f)"u" === g ? (g = this.text.substring(this.index + 1, this.index + 5), g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, d += String.fromCharCode(parseInt(g, 16))) : d = (f = Md[g]) ? d + f : d + g, f = !1; else if ("\\" === g)f = !0; else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({
                            index: c, text: e, string: d, json: !0, fn: function () {
                                return d
                            }
                        });
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var Ua = function (a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    Ua.ZERO = function () {
        return 0
    };
    Ua.prototype = {
        constructor: Ua, parse: function (a, c) {
            this.text = a;
            this.json = c;
            this.tokens = this.lexer.lex(a);
            c && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function () {
                this.throwError("is not valid json", {
                    text: a,
                    index: 0
                })
            });
            var d = c ? this.primary() : this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            d.literal = !!d.literal;
            d.constant = !!d.constant;
            return d
        }, primary: function () {
            var a;
            if (this.expect("("))a = this.filterChain(), this.consume(")"); else if (this.expect("["))a = this.arrayDeclaration(); else if (this.expect("{"))a = this.object(); else {
                var c = this.expect();
                (a = c.fn) || this.throwError("not a primary expression", c);
                c.json && (a.constant = !0, a.literal = !0)
            }
            for (var d; c = this.expect("(",
                "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        }, throwError: function (a, c) {
            throw xa("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        }, peekToken: function () {
            if (0 === this.tokens.length)throw xa("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, c, d, e) {
            if (0 < this.tokens.length) {
                var f = this.tokens[0], g = f.text;
                if (g === a || g === c || g === d || g === e || !(a || c || d || e))return f
            }
            return !1
        },
        expect: function (a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.json && !a.json && this.throwError("is not valid json", a), this.tokens.shift(), a) : !1
        }, consume: function (a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
        }, unaryFn: function (a, c) {
            return G(function (d, e) {
                return a(d, e, c)
            }, {constant: c.constant})
        }, ternaryFn: function (a, c, d) {
            return G(function (e, f) {
                return a(e, f) ? c(e, f) : d(e, f)
            }, {constant: a.constant && c.constant && d.constant})
        }, binaryFn: function (a, c, d) {
            return G(function (e, f) {
                return c(e,
                    f, a, d)
            }, {constant: a.constant && d.constant})
        }, statements: function () {
            for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (c, d) {
                for (var e, f = 0; f < a.length; f++) {
                    var g = a[f];
                    g && (e = g(c, d))
                }
                return e
            }
        }, filterChain: function () {
            for (var a = this.expression(), c; ;)if (c = this.expect("|"))a = this.binaryFn(a, c.fn, this.filter()); else return a
        }, filter: function () {
            for (var a = this.expect(), c = this.$filter(a.text), d = []; ;)if (a = this.expect(":"))d.push(this.expression());
            else {
                var e = function (a, e, h) {
                    h = [h];
                    for (var m = 0; m < d.length; m++)h.push(d[m](a, e));
                    return c.apply(a, h)
                };
                return function () {
                    return e
                }
            }
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var a = this.ternary(), c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), function (d, f) {
                return a.assign(d, c(d, f), f)
            }) : a
        }, ternary: function () {
            var a = this.logicalOR(), c, d;
            if (this.expect("?")) {
                c = this.ternary();
                if (d = this.expect(":"))return this.ternaryFn(a, c, this.ternary());
                this.throwError("expected :", d)
            } else return a
        }, logicalOR: function () {
            for (var a = this.logicalAND(), c; ;)if (c = this.expect("||"))a = this.binaryFn(a, c.fn, this.logicalAND()); else return a
        }, logicalAND: function () {
            var a = this.equality(), c;
            if (c = this.expect("&&"))a = this.binaryFn(a, c.fn, this.logicalAND());
            return a
        }, equality: function () {
            var a = this.relational(), c;
            if (c = this.expect("==", "!=", "===", "!=="))a = this.binaryFn(a, c.fn, this.equality());
            return a
        },
        relational: function () {
            var a = this.additive(), c;
            if (c = this.expect("<", ">", "<=", ">="))a = this.binaryFn(a, c.fn, this.relational());
            return a
        }, additive: function () {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = this.binaryFn(a, c.fn, this.multiplicative());
            return a
        }, multiplicative: function () {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");)a = this.binaryFn(a, c.fn, this.unary());
            return a
        }, unary: function () {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(Ua.ZERO, a.fn,
                this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
        }, fieldAccess: function (a) {
            var c = this, d = this.expect().text, e = oc(d, this.options, this.text);
            return G(function (c, d, h) {
                return e(h || a(c, d), d)
            }, {
                assign: function (e, g, h) {
                    return gb(a(e, h), d, g, c.text, c.options)
                }
            })
        }, objectIndex: function (a) {
            var c = this, d = this.expression();
            this.consume("]");
            return G(function (e, f) {
                var g = a(e, f), h = d(e, f), m;
                if (!g)return s;
                (g = fb(g[h], c.text)) && (g.then && c.options.unwrapPromises) && (m = g, "$$v" in g || (m.$$v = s,
                    m.then(function (a) {
                        m.$$v = a
                    })), g = g.$$v);
                return g
            }, {
                assign: function (e, f, g) {
                    var h = d(e, g);
                    return fb(a(e, g), c.text)[h] = f
                }
            })
        }, functionCall: function (a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression()); while (this.expect(","))
            }
            this.consume(")");
            var e = this;
            return function (f, g) {
                for (var h = [], m = c ? c(f, g) : f, k = 0; k < d.length; k++)h.push(d[k](f, g));
                k = a(f, g, m) || v;
                fb(k, e.text);
                h = k.apply ? k.apply(m, h) : k(h[0], h[1], h[2], h[3], h[4]);
                return fb(h, e.text)
            }
        }, arrayDeclaration: function () {
            var a = [], c = !0;
            if ("]" !==
                this.peekToken().text) {
                do {
                    var d = this.expression();
                    a.push(d);
                    d.constant || (c = !1)
                } while (this.expect(","))
            }
            this.consume("]");
            return G(function (c, d) {
                for (var g = [], h = 0; h < a.length; h++)g.push(a[h](c, d));
                return g
            }, {literal: !0, constant: c})
        }, object: function () {
            var a = [], c = !0;
            if ("}" !== this.peekToken().text) {
                do {
                    var d = this.expect(), d = d.string || d.text;
                    this.consume(":");
                    var e = this.expression();
                    a.push({key: d, value: e});
                    e.constant || (c = !1)
                } while (this.expect(","))
            }
            this.consume("}");
            return G(function (c, d) {
                for (var e = {}, m =
                    0; m < a.length; m++) {
                    var k = a[m];
                    e[k.key] = k.value(c, d)
                }
                return e
            }, {literal: !0, constant: c})
        }
    };
    var Gb = {}, sa = D("$sce"), ea = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, V = R.createElement("a"), rc = wa(Y.location.href, !0);
    sc.$inject = ["$provide"];
    tc.$inject = ["$locale"];
    vc.$inject = ["$locale"];
    var yc = ".", Gd = {
        yyyy: X("FullYear", 4),
        yy: X("FullYear", 2, 0, !0),
        y: X("FullYear", 1),
        MMMM: hb("Month"),
        MMM: hb("Month", !0),
        MM: X("Month", 2, 1),
        M: X("Month", 1, 1),
        dd: X("Date", 2),
        d: X("Date", 1),
        HH: X("Hours", 2),
        H: X("Hours",
            1),
        hh: X("Hours", 2, -12),
        h: X("Hours", 1, -12),
        mm: X("Minutes", 2),
        m: X("Minutes", 1),
        ss: X("Seconds", 2),
        s: X("Seconds", 1),
        sss: X("Milliseconds", 3),
        EEEE: hb("Day"),
        EEE: hb("Day", !0),
        a: function (a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
        },
        Z: function (a) {
            a = -1 * a.getTimezoneOffset();
            return a = (0 <= a ? "+" : "") + (Ib(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Ib(Math.abs(a % 60), 2))
        }
    }, Fd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Ed = /^\-?\d+$/;
    uc.$inject = ["$locale"];
    var Cd = aa(B), Dd = aa(Ea);
    wc.$inject =
        ["$parse"];
    var Nd = aa({
        restrict: "E", compile: function (a, c) {
            8 >= Q && (c.href || c.name || c.$set("href", ""), a.append(R.createComment("IE fix")));
            return function (a, c) {
                c.on("click", function (a) {
                    c.attr("href") || a.preventDefault()
                })
            }
        }
    }), Kb = {};
    p(cb, function (a, c) {
        if ("multiple" != a) {
            var d = la("ng-" + c);
            Kb[d] = function () {
                return {
                    priority: 100, compile: function () {
                        return function (a, f, g) {
                            a.$watch(g[d], function (a) {
                                g.$set(c, !!a)
                            })
                        }
                    }
                }
            }
        }
    });
    p(["src", "srcset", "href"], function (a) {
        var c = la("ng-" + a);
        Kb[c] = function () {
            return {
                priority: 99,
                link: function (d, e, f) {
                    f.$observe(c, function (c) {
                        c && (f.$set(a, c), Q && e.prop(a, f[a]))
                    })
                }
            }
        }
    });
    var kb = {$addControl: v, $removeControl: v, $setValidity: v, $setDirty: v, $setPristine: v};
    zc.$inject = ["$element", "$attrs", "$scope"];
    var Bc = function (a) {
        return ["$timeout", function (c) {
            return {
                name: "form", restrict: a ? "EAC" : "E", controller: zc, compile: function () {
                    return {
                        pre: function (a, e, f, g) {
                            if (!f.action) {
                                var h = function (a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                Ac(e[0], "submit", h);
                                e.on("$destroy", function () {
                                    c(function () {
                                        xb(e[0],
                                            "submit", h)
                                    }, 0, !1)
                                })
                            }
                            var m = e.parent().controller("form"), k = f.name || f.ngForm;
                            k && gb(a, k, g, k);
                            if (m)e.on("$destroy", function () {
                                m.$removeControl(g);
                                k && gb(a, k, s, k);
                                G(g, kb)
                            })
                        }
                    }
                }
            }
        }]
    }, Od = Bc(), Pd = Bc(!0), Qd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Rd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/, Sd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Cc = {
        text: mb, number: function (a, c, d, e, f, g) {
            mb(a, c, d, e, f, g);
            e.$parsers.push(function (a) {
                var c = e.$isEmpty(a);
                if (c || Sd.test(a))return e.$setValidity("number",
                    !0), "" === a ? null : c ? a : parseFloat(a);
                e.$setValidity("number", !1);
                return s
            });
            e.$formatters.push(function (a) {
                return e.$isEmpty(a) ? "" : "" + a
            });
            if (d.min) {
                var h = parseFloat(d.min);
                a = function (a) {
                    if (!e.$isEmpty(a) && a < h)return e.$setValidity("min", !1), s;
                    e.$setValidity("min", !0);
                    return a
                };
                e.$parsers.push(a);
                e.$formatters.push(a)
            }
            if (d.max) {
                var m = parseFloat(d.max);
                d = function (a) {
                    if (!e.$isEmpty(a) && a > m)return e.$setValidity("max", !1), s;
                    e.$setValidity("max", !0);
                    return a
                };
                e.$parsers.push(d);
                e.$formatters.push(d)
            }
            e.$formatters.push(function (a) {
                if (e.$isEmpty(a) ||
                    ob(a))return e.$setValidity("number", !0), a;
                e.$setValidity("number", !1);
                return s
            })
        }, url: function (a, c, d, e, f, g) {
            mb(a, c, d, e, f, g);
            a = function (a) {
                if (e.$isEmpty(a) || Qd.test(a))return e.$setValidity("url", !0), a;
                e.$setValidity("url", !1);
                return s
            };
            e.$formatters.push(a);
            e.$parsers.push(a)
        }, email: function (a, c, d, e, f, g) {
            mb(a, c, d, e, f, g);
            a = function (a) {
                if (e.$isEmpty(a) || Rd.test(a))return e.$setValidity("email", !0), a;
                e.$setValidity("email", !1);
                return s
            };
            e.$formatters.push(a);
            e.$parsers.push(a)
        }, radio: function (a, c, d,
                            e) {
            z(d.name) && c.attr("name", Va());
            c.on("click", function () {
                c[0].checked && a.$apply(function () {
                    e.$setViewValue(d.value)
                })
            });
            e.$render = function () {
                c[0].checked = d.value == e.$viewValue
            };
            d.$observe("value", e.$render)
        }, checkbox: function (a, c, d, e) {
            var f = d.ngTrueValue, g = d.ngFalseValue;
            F(f) || (f = !0);
            F(g) || (g = !1);
            c.on("click", function () {
                a.$apply(function () {
                    e.$setViewValue(c[0].checked)
                })
            });
            e.$render = function () {
                c[0].checked = e.$viewValue
            };
            e.$isEmpty = function (a) {
                return a !== f
            };
            e.$formatters.push(function (a) {
                return a ===
                    f
            });
            e.$parsers.push(function (a) {
                return a ? f : g
            })
        }, hidden: v, button: v, submit: v, reset: v
    }, Dc = ["$browser", "$sniffer", function (a, c) {
        return {
            restrict: "E", require: "?ngModel", link: function (d, e, f, g) {
                g && (Cc[B(f.type)] || Cc.text)(d, e, f, g, c, a)
            }
        }
    }], jb = "ng-valid", ib = "ng-invalid", Fa = "ng-pristine", lb = "ng-dirty", Td = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function (a, c, d, e, f) {
        function g(a, c) {
            c = c ? "-" + $a(c, "-") : "";
            e.removeClass((a ? ib : jb) + c).addClass((a ? jb : ib) + c)
        }

        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var h = f(d.ngModel), m = h.assign;
        if (!m)throw D("ngModel")("nonassign", d.ngModel, ga(e));
        this.$render = v;
        this.$isEmpty = function (a) {
            return z(a) || "" === a || null === a || a !== a
        };
        var k = e.inheritedData("$formController") || kb, l = 0, r = this.$error = {};
        e.addClass(Fa);
        g(!0);
        this.$setValidity = function (a, c) {
            r[a] !== !c && (c ? (r[a] && l--, l || (g(!0), this.$valid = !0, this.$invalid = !1)) : (g(!1),
                this.$invalid = !0, this.$valid = !1, l++), r[a] = !c, g(c, a), k.$setValidity(a, c, this))
        };
        this.$setPristine = function () {
            this.$dirty = !1;
            this.$pristine = !0;
            e.removeClass(lb).addClass(Fa)
        };
        this.$setViewValue = function (d) {
            this.$viewValue = d;
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, e.removeClass(Fa).addClass(lb), k.$setDirty());
            p(this.$parsers, function (a) {
                d = a(d)
            });
            this.$modelValue !== d && (this.$modelValue = d, m(a, d), p(this.$viewChangeListeners, function (a) {
                try {
                    a()
                } catch (d) {
                    c(d)
                }
            }))
        };
        var q = this;
        a.$watch(function () {
            var c =
                h(a);
            if (q.$modelValue !== c) {
                var d = q.$formatters, e = d.length;
                for (q.$modelValue = c; e--;)c = d[e](c);
                q.$viewValue !== c && (q.$viewValue = c, q.$render())
            }
        })
    }], Ud = function () {
        return {
            require: ["ngModel", "^?form"], controller: Td, link: function (a, c, d, e) {
                var f = e[0], g = e[1] || kb;
                g.$addControl(f);
                c.on("$destroy", function () {
                    g.$removeControl(f)
                })
            }
        }
    }, Vd = aa({
        require: "ngModel", link: function (a, c, d, e) {
            e.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange)
            })
        }
    }), Ec = function () {
        return {
            require: "?ngModel", link: function (a, c, d, e) {
                if (e) {
                    d.required = !0;
                    var f = function (a) {
                        if (d.required && e.$isEmpty(a))e.$setValidity("required", !1); else return e.$setValidity("required", !0), a
                    };
                    e.$formatters.push(f);
                    e.$parsers.unshift(f);
                    d.$observe("required", function () {
                        f(e.$viewValue)
                    })
                }
            }
        }
    }, Wd = function () {
        return {
            require: "ngModel", link: function (a, c, d, e) {
                var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function (a) {
                    if (!z(a)) {
                        var c = [];
                        a && p(a.split(f), function (a) {
                            a && c.push(ba(a))
                        });
                        return c
                    }
                });
                e.$formatters.push(function (a) {
                    return H(a) ? a.join(", ") :
                        s
                });
                e.$isEmpty = function (a) {
                    return !a || !a.length
                }
            }
        }
    }, Xd = /^(true|false|\d+)$/, Yd = function () {
        return {
            priority: 100, compile: function (a, c) {
                return Xd.test(c.ngValue) ? function (a, c, f) {
                    f.$set("value", a.$eval(f.ngValue))
                } : function (a, c, f) {
                    a.$watch(f.ngValue, function (a) {
                        f.$set("value", a)
                    })
                }
            }
        }
    }, Zd = ta(function (a, c, d) {
        c.addClass("ng-binding").data("$binding", d.ngBind);
        a.$watch(d.ngBind, function (a) {
            c.text(a == s ? "" : a)
        })
    }), $d = ["$interpolate", function (a) {
        return function (c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding",
                c);
            e.$observe("ngBindTemplate", function (a) {
                d.text(a)
            })
        }
    }], ae = ["$sce", "$parse", function (a, c) {
        return function (d, e, f) {
            e.addClass("ng-binding").data("$binding", f.ngBindHtml);
            var g = c(f.ngBindHtml);
            d.$watch(function () {
                return (g(d) || "").toString()
            }, function (c) {
                e.html(a.getTrustedHtml(g(d)) || "")
            })
        }
    }], be = Jb("", !0), ce = Jb("Odd", 0), de = Jb("Even", 1), ee = ta({
        compile: function (a, c) {
            c.$set("ngCloak", s);
            a.removeClass("ng-cloak")
        }
    }), fe = [function () {
        return {scope: !0, controller: "@"}
    }], ge = ["$sniffer", function (a) {
        return {
            priority: 1E3,
            compile: function () {
                a.csp = !0
            }
        }
    }], Fc = {};
    p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var c = la("ng-" + a);
        Fc[c] = ["$parse", function (d) {
            return function (e, f, g) {
                var h = d(g[c]);
                f.on(B(a), function (a) {
                    e.$apply(function () {
                        h(e, {$event: a})
                    })
                })
            }
        }]
    });
    var he = ["$animate", function (a) {
        return {
            transclude: "element", priority: 600, terminal: !0, restrict: "A", compile: function (c, d, e) {
                return function (c, d, h) {
                    var m,
                        k;
                    c.$watch(h.ngIf, function (h) {
                        m && (a.leave(m), m = s);
                        k && (k.$destroy(), k = s);
                        Ka(h) && (k = c.$new(), e(k, function (c) {
                            m = c;
                            a.enter(c, d.parent(), d)
                        }))
                    })
                }
            }
        }
    }], ie = ["$http", "$templateCache", "$anchorScroll", "$compile", "$animate", "$sce", function (a, c, d, e, f, g) {
        return {
            restrict: "ECA", priority: 400, terminal: !0, transclude: "element", compile: function (h, m, k) {
                var l = m.ngInclude || m.src, p = m.onload || "", q = m.autoscroll;
                return function (h, m) {
                    var s = 0, C, u, x = function () {
                        C && (C.$destroy(), C = null);
                        u && (f.leave(u), u = null)
                    };
                    h.$watch(g.parseAsResourceUrl(l),
                        function (g) {
                            var l = ++s;
                            g ? (a.get(g, {cache: c}).success(function (a) {
                                if (l === s) {
                                    var c = h.$new();
                                    k(c, function (g) {
                                        x();
                                        C = c;
                                        u = g;
                                        u.html(a);
                                        f.enter(u, null, m);
                                        e(u.contents())(C);
                                        !w(q) || q && !h.$eval(q) || d();
                                        C.$emit("$includeContentLoaded");
                                        h.$eval(p)
                                    })
                                }
                            }).error(function () {
                                l === s && x()
                            }), h.$emit("$includeContentRequested")) : x()
                        })
                }
            }
        }
    }], je = ta({
        compile: function () {
            return {
                pre: function (a, c, d) {
                    a.$eval(d.ngInit)
                }
            }
        }
    }), ke = ta({terminal: !0, priority: 1E3}), le = ["$locale", "$interpolate", function (a, c) {
        var d = /{}/g;
        return {
            restrict: "EA",
            link: function (e, f, g) {
                var h = g.count, m = g.$attr.when && f.attr(g.$attr.when), k = g.offset || 0, l = e.$eval(m) || {}, r = {}, q = c.startSymbol(), n = c.endSymbol(), s = /^when(Minus)?(.+)$/;
                p(g, function (a, c) {
                    s.test(c) && (l[B(c.replace("when", "").replace("Minus", "-"))] = f.attr(g.$attr[c]))
                });
                p(l, function (a, e) {
                    r[e] = c(a.replace(d, q + h + "-" + k + n))
                });
                e.$watch(function () {
                    var c = parseFloat(e.$eval(h));
                    if (isNaN(c))return "";
                    c in l || (c = a.pluralCat(c - k));
                    return r[c](e, f, !0)
                }, function (a) {
                    f.text(a)
                })
            }
        }
    }], me = ["$parse", "$animate", function (a,
                                              c) {
        function d(a) {
            if (a.startNode === a.endNode)return x(a.startNode);
            var c = a.startNode, d = [c];
            do {
                c = c.nextSibling;
                if (!c)break;
                d.push(c)
            } while (c !== a.endNode);
            return x(d)
        }

        var e = D("ngRepeat");
        return {
            transclude: "element", priority: 1E3, terminal: !0, compile: function (f, g, h) {
                return function (f, g, l) {
                    var r = l.ngRepeat, q = r.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/), n, s, w, C, u, v, B, t = {$id: Ca};
                    if (!q)throw e("iexp", r);
                    l = q[1];
                    u = q[2];
                    (q = q[4]) ? (n = a(q), s = function (a, c, d) {
                        B && (t[B] = a);
                        t[v] = c;
                        t.$index = d;
                        return n(f,
                            t)
                    }) : (w = function (a, c) {
                        return Ca(c)
                    }, C = function (a) {
                        return a
                    });
                    q = l.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                    if (!q)throw e("iidexp", l);
                    v = q[3] || q[1];
                    B = q[2];
                    var F = {};
                    f.$watchCollection(u, function (a) {
                        var l, q, n = g[0], u, t = {}, G, D, O, P, H, K, z = [];
                        if (nb(a))H = a, u = s || w; else {
                            u = s || C;
                            H = [];
                            for (O in a)a.hasOwnProperty(O) && "$" != O.charAt(0) && H.push(O);
                            H.sort()
                        }
                        G = H.length;
                        q = z.length = H.length;
                        for (l = 0; l < q; l++)if (O = a === H ? l : H[l], P = a[O], P = u(O, P, l), pa(P, "`track by` id"), F.hasOwnProperty(P))K = F[P], delete F[P], t[P] =
                            K, z[l] = K; else {
                            if (t.hasOwnProperty(P))throw p(z, function (a) {
                                a && a.startNode && (F[a.id] = a)
                            }), e("dupes", r, P);
                            z[l] = {id: P};
                            t[P] = !1
                        }
                        for (O in F)F.hasOwnProperty(O) && (K = F[O], l = d(K), c.leave(l), p(l, function (a) {
                            a.$$NG_REMOVED = !0
                        }), K.scope.$destroy());
                        l = 0;
                        for (q = H.length; l < q; l++) {
                            O = a === H ? l : H[l];
                            P = a[O];
                            K = z[l];
                            z[l - 1] && (n = z[l - 1].endNode);
                            if (K.startNode) {
                                D = K.scope;
                                u = n;
                                do u = u.nextSibling; while (u && u.$$NG_REMOVED);
                                K.startNode != u && c.move(d(K), null, x(n));
                                n = K.endNode
                            } else D = f.$new();
                            D[v] = P;
                            B && (D[B] = O);
                            D.$index = l;
                            D.$first =
                                0 === l;
                            D.$last = l === G - 1;
                            D.$middle = !(D.$first || D.$last);
                            D.$odd = !(D.$even = 0 == l % 2);
                            K.startNode || h(D, function (a) {
                                a[a.length++] = R.createComment(" end ngRepeat: " + r + " ");
                                c.enter(a, null, x(n));
                                n = a;
                                K.scope = D;
                                K.startNode = n && n.endNode ? n.endNode : a[0];
                                K.endNode = a[a.length - 1];
                                t[K.id] = K
                            })
                        }
                        F = t
                    })
                }
            }
        }
    }], ne = ["$animate", function (a) {
        return function (c, d, e) {
            c.$watch(e.ngShow, function (c) {
                a[Ka(c) ? "removeClass" : "addClass"](d, "ng-hide")
            })
        }
    }], oe = ["$animate", function (a) {
        return function (c, d, e) {
            c.$watch(e.ngHide, function (c) {
                a[Ka(c) ?
                    "addClass" : "removeClass"](d, "ng-hide")
            })
        }
    }], pe = ta(function (a, c, d) {
        a.$watch(d.ngStyle, function (a, d) {
            d && a !== d && p(d, function (a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    }), qe = ["$animate", function (a) {
        return {
            restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                this.cases = {}
            }], link: function (c, d, e, f) {
                var g, h, m = [];
                c.$watch(e.ngSwitch || e.on, function (d) {
                    for (var l = 0, r = m.length; l < r; l++)m[l].$destroy(), a.leave(h[l]);
                    h = [];
                    m = [];
                    if (g = f.cases["!" + d] || f.cases["?"])c.$eval(e.change), p(g, function (d) {
                        var e = c.$new();
                        m.push(e);
                        d.transclude(e, function (c) {
                            var e = d.element;
                            h.push(c);
                            a.enter(c, e.parent(), e)
                        })
                    })
                })
            }
        }
    }], re = ta({
        transclude: "element", priority: 800, require: "^ngSwitch", compile: function (a, c, d) {
            return function (a, f, g, h) {
                h.cases["!" + c.ngSwitchWhen] = h.cases["!" + c.ngSwitchWhen] || [];
                h.cases["!" + c.ngSwitchWhen].push({transclude: d, element: f})
            }
        }
    }), se = ta({
        transclude: "element", priority: 800, require: "^ngSwitch", compile: function (a, c, d) {
            return function (a, c, g, h) {
                h.cases["?"] = h.cases["?"] || [];
                h.cases["?"].push({
                    transclude: d,
                    element: c
                })
            }
        }
    }), te = ta({
        controller: ["$element", "$transclude", function (a, c) {
            if (!c)throw D("ngTransclude")("orphan", ga(a));
            this.$transclude = c
        }], link: function (a, c, d, e) {
            e.$transclude(function (a) {
                c.html("");
                c.append(a)
            })
        }
    }), ue = ["$templateCache", function (a) {
        return {
            restrict: "E", terminal: !0, compile: function (c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text)
            }
        }
    }], ve = D("ngOptions"), we = aa({terminal: !0}), xe = ["$compile", "$parse", function (a, c) {
        var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
            e = {$setViewValue: v};
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function (a, c, d) {
                var m = this, k = {}, l = e, p;
                m.databound = d.ngModel;
                m.init = function (a, c, d) {
                    l = a;
                    p = d
                };
                m.addOption = function (c) {
                    pa(c, '"option value"');
                    k[c] = !0;
                    l.$viewValue == c && (a.val(c), p.parent() && p.remove())
                };
                m.removeOption = function (a) {
                    this.hasOption(a) && (delete k[a], l.$viewValue == a && this.renderUnknownOption(a))
                };
                m.renderUnknownOption = function (c) {
                    c = "? " + Ca(c) + " ?";
                    p.val(c);
                    a.prepend(p);
                    a.val(c);
                    p.prop("selected",
                        !0)
                };
                m.hasOption = function (a) {
                    return k.hasOwnProperty(a)
                };
                c.$on("$destroy", function () {
                    m.renderUnknownOption = v
                })
            }],
            link: function (e, g, h, m) {
                function k(a, c, d, e) {
                    d.$render = function () {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (t.parent() && t.remove(), c.val(a), "" === a && u.prop("selected", !0)) : z(a) && u ? c.val("") : e.renderUnknownOption(a)
                    };
                    c.on("change", function () {
                        a.$apply(function () {
                            t.parent() && t.remove();
                            d.$setViewValue(c.val())
                        })
                    })
                }

                function l(a, c, d) {
                    var e;
                    d.$render = function () {
                        var a = new Pa(d.$viewValue);
                        p(c.find("option"),
                            function (c) {
                                c.selected = w(a.get(c.value))
                            })
                    };
                    a.$watch(function () {
                        Aa(e, d.$viewValue) || (e = fa(d.$viewValue), d.$render())
                    });
                    c.on("change", function () {
                        a.$apply(function () {
                            var a = [];
                            p(c.find("option"), function (c) {
                                c.selected && a.push(c.value)
                            });
                            d.$setViewValue(a)
                        })
                    })
                }

                function r(e, f, h) {
                    function g() {
                        var a = {"": []}, c = [""], d, k, t, v, x;
                        v = h.$modelValue;
                        x = r(e) || [];
                        var B = n ? Lb(x) : x, G, z, A;
                        z = {};
                        t = !1;
                        var E, J;
                        if (y)if (u && H(v))for (t = new Pa([]), A = 0; A < v.length; A++)z[m] = v[A], t.put(u(e, z), v[A]); else t = new Pa(v);
                        for (A = 0; G = B.length,
                        A < G; A++) {
                            k = A;
                            if (n) {
                                k = B[A];
                                if ("$" === k.charAt(0))continue;
                                z[n] = k
                            }
                            z[m] = x[k];
                            d = q(e, z) || "";
                            (k = a[d]) || (k = a[d] = [], c.push(d));
                            y ? d = t.remove(u ? u(e, z) : p(e, z)) !== s : (u ? (d = {}, d[m] = v, d = u(e, d) === u(e, z)) : d = v === p(e, z), t = t || d);
                            E = l(e, z);
                            E = E === s ? "" : E;
                            k.push({id: u ? u(e, z) : n ? B[A] : A, label: E, selected: d})
                        }
                        y || (C || null === v ? a[""].unshift({
                            id: "",
                            label: "",
                            selected: !t
                        }) : t || a[""].unshift({id: "?", label: "", selected: !0}));
                        z = 0;
                        for (B = c.length; z < B; z++) {
                            d = c[z];
                            k = a[d];
                            w.length <= z ? (v = {element: F.clone().attr("label", d), label: k.label}, x = [v],
                                w.push(x), f.append(v.element)) : (x = w[z], v = x[0], v.label != d && v.element.attr("label", v.label = d));
                            E = null;
                            A = 0;
                            for (G = k.length; A < G; A++)t = k[A], (d = x[A + 1]) ? (E = d.element, d.label !== t.label && E.text(d.label = t.label), d.id !== t.id && E.val(d.id = t.id), E[0].selected !== t.selected && E.prop("selected", d.selected = t.selected)) : ("" === t.id && C ? J = C : (J = D.clone()).val(t.id).attr("selected", t.selected).text(t.label), x.push({
                                element: J,
                                label: t.label,
                                id: t.id,
                                selected: t.selected
                            }), E ? E.after(J) : v.element.append(J), E = J);
                            for (A++; x.length >
                            A;)x.pop().element.remove()
                        }
                        for (; w.length > z;)w.pop()[0].element.remove()
                    }

                    var k;
                    if (!(k = v.match(d)))throw ve("iexp", v, ga(f));
                    var l = c(k[2] || k[1]), m = k[4] || k[6], n = k[5], q = c(k[3] || ""), p = c(k[2] ? k[1] : m), r = c(k[7]), u = k[8] ? c(k[8]) : null, w = [[{
                        element: f,
                        label: ""
                    }]];
                    C && (a(C)(e), C.removeClass("ng-scope"), C.remove());
                    f.html("");
                    f.on("change", function () {
                        e.$apply(function () {
                            var a, c = r(e) || [], d = {}, g, k, l, q, t, v, x;
                            if (y)for (k = [], q = 0, v = w.length; q < v; q++)for (a = w[q], l = 1, t = a.length; l < t; l++) {
                                if ((g = a[l].element)[0].selected) {
                                    g = g.val();
                                    n && (d[n] = g);
                                    if (u)for (x = 0; x < c.length && (d[m] = c[x], u(e, d) != g); x++); else d[m] = c[g];
                                    k.push(p(e, d))
                                }
                            } else if (g = f.val(), "?" == g)k = s; else if ("" == g)k = null; else if (u)for (x = 0; x < c.length; x++) {
                                if (d[m] = c[x], u(e, d) == g) {
                                    k = p(e, d);
                                    break
                                }
                            } else d[m] = c[g], n && (d[n] = g), k = p(e, d);
                            h.$setViewValue(k)
                        })
                    });
                    h.$render = g;
                    e.$watch(g)
                }

                if (m[1]) {
                    var q = m[0], n = m[1], y = h.multiple, v = h.ngOptions, C = !1, u, D = x(R.createElement("option")), F = x(R.createElement("optgroup")), t = D.clone();
                    m = 0;
                    for (var B = g.children(), G = B.length; m < G; m++)if ("" == B[m].value) {
                        u =
                            C = B.eq(m);
                        break
                    }
                    q.init(n, C, t);
                    if (y && (h.required || h.ngRequired)) {
                        var E = function (a) {
                            n.$setValidity("required", !h.required || a && a.length);
                            return a
                        };
                        n.$parsers.push(E);
                        n.$formatters.unshift(E);
                        h.$observe("required", function () {
                            E(n.$viewValue)
                        })
                    }
                    v ? r(e, g, n) : y ? l(e, g, n) : k(e, g, n, q)
                }
            }
        }
    }], ye = ["$interpolate", function (a) {
        var c = {addOption: v, removeOption: v};
        return {
            restrict: "E", priority: 100, compile: function (d, e) {
                if (z(e.value)) {
                    var f = a(d.text(), !0);
                    f || e.$set("value", d.text())
                }
                return function (a, d, e) {
                    var k = d.parent(),
                        l = k.data("$selectController") || k.parent().data("$selectController");
                    l && l.databound ? d.prop("selected", !1) : l = c;
                    f ? a.$watch(f, function (a, c) {
                        e.$set("value", a);
                        a !== c && l.removeOption(c);
                        l.addOption(a)
                    }) : l.addOption(e.value);
                    d.on("$destroy", function () {
                        l.removeOption(e.value)
                    })
                }
            }
        }
    }], ze = aa({restrict: "E", terminal: !0});
    (Ba = Y.jQuery) ? (x = Ba, G(Ba.fn, {
        scope: Sa.scope,
        controller: Sa.controller,
        injector: Sa.injector,
        inheritedData: Sa.inheritedData
    }), tb("remove", !0, !0, !1), tb("empty", !1, !1, !1), tb("html", !1, !1, !0)) : x = J;
    Za.element =
        x;
    (function (a) {
        G(a, {
            bootstrap: Sb,
            copy: fa,
            extend: G,
            equals: Aa,
            element: x,
            forEach: p,
            injector: Tb,
            noop: v,
            bind: pb,
            toJson: oa,
            fromJson: Ob,
            identity: za,
            isUndefined: z,
            isDefined: w,
            isString: F,
            isFunction: E,
            isObject: S,
            isNumber: ob,
            isElement: Ic,
            isArray: H,
            $$minErr: D,
            version: Id,
            isDate: Ha,
            lowercase: B,
            uppercase: Ea,
            callbacks: {counter: 0}
        });
        Ra = Oc(Y);
        try {
            Ra("ngLocale")
        } catch (c) {
            Ra("ngLocale", []).provider("$locale", ld)
        }
        Ra("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider("$compile", bc).directive({
                a: Nd,
                input: Dc,
                textarea: Dc,
                form: Od,
                script: ue,
                select: xe,
                style: ze,
                option: ye,
                ngBind: Zd,
                ngBindHtml: ae,
                ngBindTemplate: $d,
                ngClass: be,
                ngClassEven: de,
                ngClassOdd: ce,
                ngCsp: ge,
                ngCloak: ee,
                ngController: fe,
                ngForm: Pd,
                ngHide: oe,
                ngIf: he,
                ngInclude: ie,
                ngInit: je,
                ngNonBindable: ke,
                ngPluralize: le,
                ngRepeat: me,
                ngShow: ne,
                ngStyle: pe,
                ngSwitch: qe,
                ngSwitchWhen: re,
                ngSwitchDefault: se,
                ngOptions: we,
                ngTransclude: te,
                ngModel: Ud,
                ngList: Wd,
                ngChange: Vd,
                required: Ec,
                ngRequired: Ec,
                ngValue: Yd
            }).directive(Kb).directive(Fc);
            a.provider({
                $anchorScroll: Xc,
                $animate: Kd,
                $browser: Zc,
                $cacheFactory: $c,
                $controller: cd,
                $document: dd,
                $exceptionHandler: ed,
                $filter: sc,
                $interpolate: jd,
                $interval: kd,
                $http: fd,
                $httpBackend: gd,
                $location: nd,
                $log: od,
                $parse: pd,
                $rootScope: sd,
                $q: qd,
                $sce: vd,
                $sceDelegate: ud,
                $sniffer: wd,
                $templateCache: ad,
                $timeout: xd,
                $window: yd
            })
        }])
    })(Za);
    x(R).ready(function () {
        Mc(R, Sb)
    })
})(window, document);
angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map