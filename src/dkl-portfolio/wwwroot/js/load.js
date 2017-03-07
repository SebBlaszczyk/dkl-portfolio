﻿// https://github.com/rgrove/lazyload/blob/master/README.md
LazyLoad = function (e) { function t(t, n) { var s, c = e.createElement(t); for (s in n) n.hasOwnProperty(s) && c.setAttribute(s, n[s]); return c } function n(e) { var t, n, s = i[e]; s && (t = s.callback, n = s.urls, n.shift(), u = 0, n.length || (t && t.call(s.context, s.obj), i[e] = null, f[e].length && c(e))) } function s() { var t = navigator.userAgent; o = { async: e.createElement("script").async === !0 }, (o.webkit = /AppleWebKit\//.test(t)) || (o.ie = /MSIE|Trident/.test(t)) || (o.opera = /Opera/.test(t)) || (o.gecko = /Gecko\//.test(t)) || (o.unknown = !0) } function c(c, u, h, g, d) { var y, p, b, k, m, v, j = function () { n(c) }, w = "css" === c, T = []; if (o || s(), u) if (u = "string" == typeof u ? [u] : u.concat(), w || o.async || o.gecko || o.opera) f[c].push({ urls: u, callback: h, obj: g, context: d }); else for (y = 0, p = u.length; p > y; ++y) f[c].push({ urls: [u[y]], callback: y === p - 1 ? h : null, obj: g, context: d }); if (!i[c] && (k = i[c] = f[c].shift())) { for (l || (l = e.head || e.getElementsByTagName("head")[0]), m = k.urls.concat(), y = 0, p = m.length; p > y; ++y) v = m[y], w ? b = o.gecko ? t("style") : t("link", { href: v, rel: "stylesheet" }) : (b = t("script", { src: v }), b.async = !1), b.className = "lazyload", b.setAttribute("charset", "utf-8"), o.ie && !w && "onreadystatechange" in b && !("draggable" in b) ? b.onreadystatechange = function () { /loaded|complete/.test(b.readyState) && (b.onreadystatechange = null, j()) } : w && (o.gecko || o.webkit) ? o.webkit ? (k.urls[y] = b.href, r()) : (b.innerHTML = '@import "' + v + '";', a(b)) : b.onload = b.onerror = j, T.push(b); for (y = 0, p = T.length; p > y; ++y) l.appendChild(T[y]) } } function a(e) { var t; try { t = !!e.sheet.cssRules } catch (s) { return u += 1, void (200 > u ? setTimeout(function () { a(e) }, 50) : t && n("css")) } n("css") } function r() { var e, t = i.css; if (t) { for (e = h.length; --e >= 0;) if (h[e].href === t.urls[0]) { n("css"); break } u += 1, t && (200 > u ? setTimeout(r, 50) : n("css")) } } var o, l, i = {}, u = 0, f = { css: [], js: [] }, h = e.styleSheets; return { css: function (e, t, n, s) { c("css", e, t, n, s) }, js: function (e, t, n, s) { c("js", e, t, n, s) } } }(this.document);

LazyLoad.js('js/resources/jquery-3.1.1.min.js', function (e) {

    console.log();
    j = jQuery.noConflict();

    LazyLoad.js('js/site.js', function () {

        j(function () {

            // swipers
            if (j('.swiper-container').length) {
                LazyLoad.js('js/resources/swiper.min.js', function (e) {
                    var swiper = new Swiper('.swiper-container', {
                        pagination: '.slide-count',
                        nextButton: '.slide-next',
                        prevButton: '.slide-prev',
                        slidesPerView: 1,
                        loop: true,
                        paginationType: 'custom',
                        paginationCustomRender: function (swiper, current, total) {
                            var slideTitle = 'slidetitle' + current;
                            var title = document.querySelector('.swiper-slide-active').dataset[slideTitle];
                            return title + ' - ' + current + ' of the custom total ' + total;
                        }
                    });
                });
            }


        }); // end dom ready

    }); // end site


}); // end jquery