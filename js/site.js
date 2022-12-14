/*!
* jQuery Transit - CSS3 transitions and transformations
* (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
* MIT Licensed.
*/

(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);


!function () {
    for (var t = 0, a = ["ms", "moz", "webkit", "o"], e = 0; e < a.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[a[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a[e] + "CancelAnimationFrame"] || window[a[e] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (a, e) {
        var n = (new Date).getTime(), i = Math.max(0, 16 - (n - t)), o = window.setTimeout(function () {
            a(n + i)
        }, i);
        return t = n + i, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}(), function (t) {
    "use strict";
    jQuery(document).ready(function (t) {
            var a = [], e = t(".nectar-box-roll").length > 0 ? ".nectar-box-roll .shape" : ".nectar-particles .shape";
        !function () {
            if (0 == e.length) return !1;
            t(e).each(function (e) {
                a[e] = {
                    shape: t(this).attr("data-src"),
                    colorMapping: t(this).attr("data-color-mapping").length > 0 ? t(this).attr("data-color-mapping") : "original",
                    color: t(this).attr("data-color").length > 0 ? t(this).attr("data-color") : "#fefefe",
                    backgroundColor: t(this).attr("data-bg-color").length > 0 ? t(this).attr("data-bg-color") : "transparent",
                    colorAlpha: t(this).attr("data-alpha").length > 0 ? t(this).attr("data-alpha") : "original",
                    density: t(this).attr("data-density").length > 0 ? parseInt(t(this).attr("data-density")) : 13,
                    densityOriginal: t(this).attr("data-density").length > 0 ? parseInt(t(this).attr("data-density")) : 13,
                    maxParticleSize: t(this).attr("data-max-size").length > 0 ? parseInt(t(this).attr("data-max-size")) : 3,
                    maxParticleSizeOriginal: t(this).attr("data-max-size").length > 0 ? parseInt(t(this).attr("data-max-size")) : 3
                } //, t(this).remove()
            })
        }();
        var n = {
            canvasID: null,
            drawDistance: 28,
            maxLineThickness: 4,
            reactionSensitivity: 3,
            lineThickness: 1,
            points: [],
            mouse: {x: 2 * window.innerWidth, y: 2 * window.innerHeight, down: !1},
            animation: null,
            randomMovement: !1,
            impulsX: 600 * Math.random() - 300,
            impulsY: 300 * -Math.random(),
            imgsToDraw: a,
            timeoutHolder: null,
            totalImgCount: 0,
            loaded: !1,
            loadedCount: 0,
            canvas: null,
            context: null,
            imageInput: null,
            bgImage: [],
            onMobile: !1,
            explodeChance: !0,
            currentShapeIndex: 0,
            currentSequenceIndex: 0,
            prevShapeIndex: 0,
            sequenceActive: !1,
            decMultiplier: .02,
            bgCanvas: null,
            bgContext: null,
            bgContextPixelData: null,
            disableExplosion: t("#page-header-bg .nectar-particles").attr("data-disable-explosion"),
            rotateTimer: parseInt(t("#page-header-bg .nectar-particles").attr("data-rotation-timing")),
            regularAnimation: !0,
            textPosition: t("#page-header-bg").attr("data-alignment-v"),
            textPositionH: t("#page-header-bg").attr("data-alignment"),
            fps: 43,
            fpsDec: .13,
            now: 0,
            then: Date.now(),
            elapsed: 0,
            init: function (a) {
                this.canvas = t(a)[0], this.context = this.canvas.getContext("2d"), this.context.globalCompositeOperation = "lighter", this.canvas.width = t(a).parents(".nectar-box-roll").length > 0 ? window.innerWidth : t(a).parents("#page-header-bg").outerWidth(!0), this.canvas.height = t(a).parents(".nectar-box-roll").length > 0 ? window.innerHeight : t(a).parents("#page-header-bg").outerHeight(!0), this.canvas.style.display = "block", this.canvasID = a, n.canvasBgColor(), this.canvas.width <= 690 && (this.onMobile = !0), t("#page-header-bg .nectar-particles").attr("data-rotation-timing").length < 1 && (n.rotateTimer = 5500), t(a).parents(".nectar-box-roll").length > 0 ? t("body").on("mousemove", function (t) {
                    1 == n.regularAnimation && (n.mouse.x = t.clientX, n.mouse.y = t.clientY)
                }) : (t(a).parents(".nectar-particles").on("mousemove", function (a) {
                    n.mouse.x = a.clientX - t(this).offset().left, n.mouse.y = a.clientY - t(this).offset().top + t(window).scrollTop()
                }), t(a).parents(".nectar-particles").on("mouseout", function () {
                    n.mouse.x = 1e3, n.mouse.y = -1e3, n.mouse.down = !1
                })), t("#page-header-bg:not(.fullscreen-header)").length > 0 && t(window).width() < 1e3 && t(window).load(function () {
                    setTimeout(function () {
                        n.canvas.width = t(a).parents(".nectar-box-roll").length > 0 ? window.innerWidth : t(a).parents("#page-header-bg").outerWidth(!0), n.canvas.height = t(a).parents(".nectar-box-roll").length > 0 ? window.innerHeight : t(a).parents("#page-header-bg").outerHeight(!0), n.onWindowResize()
                    }, 50)
                }), window.onresize = function (e) {
                    if (void 0 !== e.isTrigger) return !1;
                    n.canvas.width = t(a).parents(".nectar-box-roll").length > 0 ? window.innerWidth : t(a).parents("#page-header-bg").outerWidth(!0), n.canvas.height = t(a).parents(".nectar-box-roll").length > 0 ? window.innerHeight : t(a).parents("#page-header-bg").outerHeight(!0), n.onWindowResize()
                };
                for (var e = 0, i = 0; i < n.imgsToDraw.length; i++) if ("object" == typeof n.imgsToDraw[i].shape) for (e = 0; e < n.imgsToDraw[i].shape.length; e++) this.totalImgCount++; else this.totalImgCount++;
                for (e = 0, i = 0; i < n.imgsToDraw.length; i++) if ("object" == typeof n.imgsToDraw[i].shape) for (e = 0; e < n.imgsToDraw[i].shape.length; e++) this.loadData(n.imgsToDraw[i].shape[e], i, e, !0); else this.loadData(n.imgsToDraw[i].shape, i, null, !1)
            },
            preparePoints: function (a, e, i) {
                var o, r;
                jQuery.isArray(this.bgImage[a]) ? ("object" != typeof this.points[a] && (this.points[a] = {}), this.points[a][e] = []) : this.points[a] = [];
                var s = this.bgContextPixelData.data;
                for (o = 0; o < this.canvas.height; o += this.imgsToDraw[a].density) for (r = 0; r < this.canvas.width; r += this.imgsToDraw[a].density) {
                    var h = 4 * (r + o * this.bgContextPixelData.width);
                    if (!(s[h] > 200 && s[h + 1] > 200 && s[h + 2] > 200 || 0 === s[h + 3])) {
                        var l, d, c, g, p, u;
                        if (0 == a) {
                            var m = Math.random() > .5 ? Math.random() * window.innerWidth : Math.random() * -window.innerWidth,
                                w = Math.random() > .5 ? Math.random() * window.innerHeight : Math.random() * -window.innerHeight;
                            l = Math.random() * (2 * window.innerWidth) + m, d = Math.random() * (2 * window.innerHeight) + w
                        } else {
                            var f = Math.random(), v = a == this.points.length ? 0 : a - 1;
                            if (jQuery.isArray(this.points[v]) || "object" != typeof this.points[v]) f = Math.random(), l = this.points[v][Math.floor(f * this.points[v].length)].originalX, d = this.points[v][Math.floor(f * this.points[v].length)].originalY; else {
                                var x = e == this.points[v].length ? 0 : e - 1;
                                f = Math.random(), l = this.points[v][x][Math.floor(f * this.points[v][x].length)].originalX, d = this.points[v][x][Math.floor(f * this.points[v][x].length)].originalY
                            }
                        }
                        switch (1 == i && 0 == n.randomMovement && "true" == t(n.canvasID).attr("data-loaded") ? (l = r + this.ran(-7, 7), d = o + this.ran(-7, 7)) : 1 == i && 1 == n.randomMovement && "true" == t(n.canvasID).attr("data-loaded") && (l = Math.random() * window.innerWidth, d = Math.random() * window.innerHeight), this.imgsToDraw[a].colorAlpha) {
                            case"original":
                                b = 1;
                                break;
                            case"random":
                                var b = Math.random() + .3;
                                b > 1 && (b = 1)
                        }
                        switch (this.imgsToDraw[a].colorMapping) {
                            case"original":
                                u = "rgba(" + (c = s[h]) + "," + (g = s[h + 1]) + "," + (p = s[h + 2]) + "," + b + ")";
                                break;
                            case"solid":
                                var y = this.imgsToDraw[a].color.replace("#", "");
                                u = "rgba(" + (c = parseInt(y.substring(0, 2), 16)) + "," + (g = parseInt(y.substring(2, 4), 16)) + "," + (p = parseInt(y.substring(4, 6), 16)) + "," + b + ")";
                                break;
                            case"random":
                                u = "rgba(" + (c = Math.floor(255 * Math.random())) + "," + (g = Math.floor(255 * Math.random())) + "," + (p = Math.floor(255 * Math.random())) + "," + b + ")"
                        }
                        var M = Math.random() < .5, I = Math.random();
                        jQuery.isArray(this.bgImage[a]) ? this.points[a][e].push({
                            x: r,
                            y: o,
                            originalX: r,
                            originalY: o,
                            seqX: r,
                            seqY: o,
                            sequenceUsed: !1,
                            toX: Math.random() * window.innerWidth,
                            toY: Math.random() * window.innerHeight,
                            color: u,
                            baseRadius: Math.ceil(3 * I),
                            baseRadiusOriginal: Math.ceil(3 * I),
                            shrinking: !1,
                            shrinkDelay: 100 * Math.random(),
                            flashSize: M,
                            randomNum: I
                        }) : (this.points[a].push({
                            x: l,
                            y: d,
                            originalX: r,
                            originalY: o,
                            toX: Math.random() * window.innerWidth,
                            toY: Math.random() * window.innerHeight,
                            r: c,
                            g: g,
                            b: p,
                            a: b,
                            hiddenDuringTrans: !1,
                            originalAlpha: b,
                            color: u,
                            baseRadius: Math.ceil(I * this.imgsToDraw[a].maxParticleSize),
                            baseRadiusOriginal: Math.ceil(I * this.imgsToDraw[a].maxParticleSize),
                            randomPosX: 6 * Math.random(),
                            randomPosY: 6 * Math.random(),
                            shrinking: !1,
                            shrinkDelay: 100 * Math.random(),
                            flashSize: M,
                            used: !1,
                            duplicate: !1,
                            randomNum: I
                        }), this.points[a].baseRadius < 1 && (this.points[a].baseRadius = 1, this.points[a].baseRadiusOriginal = 1))
                    }
                }
                for (var T = 0; T < this.points[a].length; T++) {
                    var D, S = n.ran(0, this.points[a].length);
                    window.innerWidth < 690 ? (D = this.points[a].length > 200 ? 8 : 5, this.points[a].length > 150 && S > Math.floor(this.points[a].length / D) && (this.points[a][T].hiddenDuringTrans = !0)) : (this.points[a].length > 800 ? D = 6 : this.points[a].length <= 800 && this.points[a].length > 600 ? D = 4.5 : this.points[a].length <= 600 && this.points[a].length > 400 ? D = 3.5 : this.points[a].length <= 400 && (D = 1.5), this.points[a].length > 350 && S > Math.floor(this.points[a].length / D) && (this.points[a][T].hiddenDuringTrans = !0))
                }
                a == n.imgsToDraw.length - 1 && (n.draw(), 0 == i && n.particlesRotate(!1))
            },
            updatePoints: function () {
                var t, a, e, i, o, r;
                this.impulsX = this.impulsX - this.impulsX / 30, this.impulsY = this.impulsY - this.impulsY / 30;
                var s = this.points[Math.floor(this.currentShapeIndex)];
                for (1 == this.onMobile ? n.decMultiplier < .23 && (n.decMultiplier += .0015) : n.decMultiplier < .125 && (n.decMultiplier += 4e-4), t = 0; t < s.length; t++) {
                    a = s[t], e = Math.atan2(a.y - this.mouse.y, a.x - this.mouse.x), (i = 60 * this.reactionSensitivity / Math.sqrt((this.mouse.x - a.x) * (this.mouse.x - a.x) + (this.mouse.y - a.y) * (this.mouse.y - a.y))) > 50 && (i = 0), s[t].time || (s[t].time = this.ran(70, 200), s[t].deg = this.ran(-120, 180), s[t].vel = this.ran(.08, .14));
                    var h = (n.randomMovement, s[t].vel);
                    if (o = h * Math.cos(s[t].deg * Math.PI / 180), r = h * Math.sin(s[t].deg * Math.PI / 180), 0 != n.loaded && (a.x += o, a.y += r), s[t].curve > 0 ? s[t].deg = s[t].deg + 2 : s[t].deg = s[t].deg - 2, s[t].time = s[t].time - 1, 0 == n.loaded) s[t].vel < .4 || (s[t].vel = s[t].vel - 0), a.x += Math.cos(e) * i, a.y += Math.sin(e) * i; else if (0 == n.randomMovement) 0 == n.sequenceActive ? (a.baseRadius = Math.ceil(a.randomNum * n.imgsToDraw[Math.floor(this.currentShapeIndex)].maxParticleSize), a.baseRadiusOriginal = a.baseRadius, s[t].vel < .4 ? s[t].time = 0 : s[t].vel = s[t].vel - .008, a.x += Math.cos(e) * i + (s[t].originalX - a.x) * n.decMultiplier, a.y += Math.sin(e) * i + (s[t].originalY - a.y) * n.decMultiplier) : void 0 !== this.points[Math.floor(this.currentShapeIndex)][n.currentSequenceIndex][t] && (a.x += Math.cos(e) * i + .08 * (this.points[Math.floor(this.currentShapeIndex)][0][t].seqX - a.x), a.y += Math.sin(e) * i + .08 * (this.points[Math.floor(this.currentShapeIndex)][0][t].seqY - a.y)); else {
                        0 == t && this.reactionSensitivity < 8 && (this.reactionSensitivity = 8);
                        var l = s[t].randomNum * a.baseRadius / 4;
                        l < .25 && (l = .25), s[t].time2 || (s[t].time2 = this.ran(300, 900)), s[t].time2 = s[t].time2 - 1, a.x += Math.cos(e) * i + .027 * (s[t].toX - a.x), a.y += Math.sin(e) * i + .027 * (s[t].toY - a.y), a.x < -.1 * this.canvas.width && (a.x = 1.1 * this.canvas.width, a.toX = 1.1 * this.canvas.width - 4 * this.ran(20, 40)), a.x > 1.1 * this.canvas.width && (a.x = -.1 * this.canvas.width, a.toX = -.1 * this.canvas.width + 4 * this.ran(20, 40)), a.y < -.1 * this.canvas.height && (a.y = 1.1 * this.canvas.height, a.toY = 1.1 * this.canvas.height - 4 * this.ran(20, 40)), a.y > 1.1 * this.canvas.height && (a.y = -.1 * this.canvas.height, a.toY = -.1 * this.canvas.height + 4 * this.ran(20, 40)), a.toX += Math.floor(this.impulsX * l * 30 / 30) + this.impulsX / 7 * a.randomPosX, a.toY += Math.floor(this.impulsY * l * 30 / 30) + this.impulsY / 7 * a.randomPosY, a.shrinkDelay >= 0 && (a.shrinkDelay = a.shrinkDelay - .5), 1 == a.flashSize && a.shrinkDelay <= 0 && (a.baseRadius == a.baseRadiusOriginal && 0 == a.shrinking && (a.baseRadius = n.imgsToDraw[Math.floor(this.currentShapeIndex)].maxParticleSize + 4, a.alpha = 1, a.color = "rgba(" + a.a + "," + a.g + "," + a.b + ",1)", a.shrinking = !0), a.baseRadius = a.baseRadius - .3 > 1 ? a.baseRadius - .3 : 1, a.alpha = a.alpha >= a.originalAlpha && 1 != a.originalAlpha ? a.alpha - .01 : a.originalAlpha, a.color = "rgba(" + a.r + "," + a.g + "," + a.b + "," + a.alpha + ")", a.baseRadius <= a.baseRadiusOriginal && 1 == a.shrinking && (a.baseRadius = a.baseRadiusOriginal, a.flashSize = !1, a.shrinking = !1, a.shrinkDelay = 100 * Math.random(), a.color = "rgba(" + a.r + "," + a.g + "," + a.b + "," + a.originalAlpha + ")", s[Math.floor(Math.random() * s.length)].flashSize = !0))
                    }
                }
            },
            drawPoints: function () {
                var t, a, e = this.points[Math.floor(this.currentShapeIndex)];
                for (t = 0; t < e.length; t++) {
                    a = e[t];
                    var i = e[t].randomNum;
                    i < .1 && (i = .3), 1 == a.hiddenDuringTrans && 1 == n.randomMovement || (this.context.beginPath(), this.context.arc(a.x, a.y, a.baseRadius, 0, 2 * Math.PI, !0), this.context.fillStyle = a.color, this.context.fill(), this.context.closePath())
                }
            },
            draw: function () {
                1 == n.regularAnimation || 1 == n.randomMovement ? (n.animation = requestAnimationFrame(n.draw), n.now = Date.now(), n.elapsed = n.now - n.then, n.elapsed > 16.666 && (n.then = n.now - n.elapsed % 16.666, 0 == t("#page-header-bg.out-of-sight").length && (n.clear(), n.updatePoints(), n.drawPoints()))) : (n.fpsDec += .23, n.fps = n.fps >= 0 ? n.fps - n.fpsDec : 0, n.decMultiplier = .14, setTimeout(function () {
                    n.animation = requestAnimationFrame(function () {
                        n.fps > 0 && n.draw()
                    })
                }, 1e3 / n.fps), 0 == t("#page-header-bg.out-of-sight").length && (n.clear(), n.updatePoints(), n.drawPoints()))
            },
            clear: function () {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            },
            ran: function (t, a) {
                return Math.floor(Math.random() * (a - t + 1)) + t
            },
            loadData: function (t, a, e, i) {
                1 == i ? ("object" != typeof this.bgImage[a] && (this.bgImage[a] = []), this.bgImage[a][e] = new Image, this.bgImage[a][e].src = t) : (this.bgImage[a] = new Image, this.bgImage[a].src = t), jQuery.isArray(this.bgImage[a]) ? this.bgImage[a][e].onload = function () {
                    n.callDrawImageToBackground(a, e)
                } : this.bgImage[a].onload = function () {
                    n.callDrawImageToBackground(a, e)
                }
            },
            particlesRotate: function (a) {
                setTimeout(function () {
                    var a = 0 == n.loaded ? n.rotateTimer + 1e3 : n.rotateTimer;
                    n.loaded = !0, setTimeout(function () {
                        t(n.canvasID).attr("data-loaded", "true")
                    }, 1e3), n.imgsToDraw.length > 1 && (n.timeoutHolder = setTimeout(function () {
                        n.particleRotateLogic(!1)
                    }, a)), n.canvasBgColor(), function (a) {
                        if (t(a).parents("#page-header-bg").hasClass("topBoxIn")) return !1;
                        var s = t(a).parents('#page-header-bg[data-text-effect="rotate_in"]').length > 0 ? 800 : 0;
                        setTimeout(function () {
                            t(a).parents(e).find(".inner-wrap.shape-1").css("z-index", 100), t(a).parents(e).find(".inner-wrap.shape-1 .top-heading").transition({
                                opacity: 1,
                                y: 0
                            }, 0), t(a).parents(e).find(".span_6").find(".wraped").each(function (a) {
                                t(this).find("span").delay(370 * a).transition({
                                    rotateX: "0",
                                    opacity: 1,
                                    y: 0
                                }, 400, "easeOutQuad")
                            }), setTimeout(function () {
                                t(a).parents(e).find(".span_6").find(".inner-wrap.shape-1 > *:not(.top-heading)").each(function (a) {
                                    t(this).delay(370 * a).transition({
                                        rotateX: "0",
                                        opacity: 1,
                                        y: 0
                                    }, 650, "easeOutQuad")
                                }), setTimeout(function () {
                                    t(".scroll-down-wrap").removeClass("hidden"), n.imgsToDraw.length > 1 && (t(".pagination-dots .pagination-dot").each(function (a) {
                                        t(this).delay(75 * a).transition({y: 0, opacity: 1}, 400)
                                    }), t(".pagination-navigation .pagination-current").each(function (a) {
                                        t(this).delay(75 * a).transition({y: 0, opacity: 1, scale: 1.15}, 400)
                                    }), setTimeout(function () {
                                        0, o.data("pos", {y: 0}), i.on("click", function (a) {
                                            var i = t(this);
                                            void 0 === a.originalEvent || i.hasClass("active") || n.particleRotateLogic(t(this).index()), t(e + " .pagination-dot").removeClass("active"), i.addClass("active")
                                        }), i.eq(0).trigger("click"), r.on("click", function () {
                                            i.eq(t(this).index()).trigger("click")
                                        })
                                    }, 75 * t(a).parents(e).find(".pagination-dot").length + 370))
                                }, t(a).parents(e).find(".inner-wrap.shape-1 > *:not(.top-heading)").length - 400 + 370)
                            }, 370 * t(a).parents(e).find(".span_6").find(".wraped").length)
                        }, s)
                    }(n.canvasID)
                }, 1 == a ? 0 : 800),
                1 != a && (t("#ajax-loading-screen").stop().transition({opacity: 0}, 1e3, function () {
                    t(this).css({display: "none"})
                }), t("#ajax-loading-screen .loading-icon").transition({opacity: 0}, 1e3))
            },
            particleRotateLogic: function (a) {
                if (clearTimeout(n.timeoutHolder), t(".canvas-bg.topBoxOut").length > 0) return !1;
                var e, i = "on" == n.disableExplosion ? 0 : .4;
                if (Math.random() > i || !1 !== a) {
                    !1 !== a ? (n.prevShapeIndex = n.currentShapeIndex, n.currentShapeIndex = a) : n.currentShapeIndex = n.currentShapeIndex + 1 == n.imgsToDraw.length ? 0 : n.currentShapeIndex + 1, n.randomMovement, n.decMultiplier = .06;
                    var o = n.currentShapeIndex == n.points.length ? 0 : Math.floor(n.currentShapeIndex - 1);
                    Math.floor(n.currentShapeIndex) - 1 == -1 && (o = n.points.length - 1);
                    for (var r, s, h, l = o - 1 == -1 ? n.points.length - 1 : o - 1, d = 0; d < n.points[n.currentShapeIndex].length; d++) r = Math.random(), !1 !== a ? (s = n.points[n.prevShapeIndex][Math.floor(r * n.points[n.prevShapeIndex].length)].x, h = n.points[n.prevShapeIndex][Math.floor(r * n.points[n.prevShapeIndex].length)].y) : 1 == n.randomMovement ? (r = Math.random(), s = n.points[o][Math.floor(r * n.points[o].length)].x, h = n.points[o][Math.floor(r * n.points[o].length)].y) : (s = n.points[o][Math.floor(r * n.points[o].length)].x, h = n.points[o][Math.floor(r * n.points[o].length)].y), n.points[n.currentShapeIndex][d].x = s, n.points[n.currentShapeIndex][d].y = h;
                    var c, g, p = (n.randomMovement, 300);
                    for (n.randomMovement = !1, t(n.canvasID).attr("data-randomMovement", "false"), d = 0; d < n.points[o].length; d++) {
                        r = Math.random(), s = n.points[l][Math.floor(r * n.points[l].length)].originalX, h = n.points[l][Math.floor(r * n.points[l].length)].originalY, n.points[o][d].x = s, n.points[o][d].y = h, n.points[o][d].toX = Math.random() * window.innerWidth, n.points[o][d].toY = Math.random() * window.innerHeight;
                        var u = Math.random() < .5;
                        n.points[o][d].flashSize = u
                    }
                    this.reactionSensitivity > 4 && (this.reactionSensitivity = window.innerWidth > 690 ? 4 : 1), !1 !== a ? (c = a + 1, g = a + 1) : (c = 0 == n.currentShapeIndex ? n.imgsToDraw.length : n.currentShapeIndex, g = n.currentShapeIndex == n.points.length ? 0 : Math.floor(n.currentShapeIndex + 1)), n.shapeTextDisplay(c, g, a);
                    var m = t(".nectar-box-roll").length > 0 ? ".nectar-box-roll" : ".nectar-particles";
                    t(n.canvasID).parents(m).find(".pagination-navigation").length > 0 && 0 == a && setTimeout(function () {
                        t(n.canvasID).parents(m).find(".pagination-dot").eq(n.currentShapeIndex).trigger("click")
                    }, p), e = n.rotateTimer, n.timeoutHolder = setTimeout(function () {
                        n.particleRotateLogic(!1)
                    }, e)
                } else for (e = 2800, n.timeoutHolder = setTimeout(function () {
                    n.particleRotateLogic(!1)
                }, e), n.randomMovement = !0, t(n.canvasID).attr("data-randomMovement", "true"), n.impulsX = 600 * Math.random() - 300, n.impulsY = 300 * -Math.random(), d = 0; d < n.points[n.currentShapeIndex].length; d++) {
                    var w = n.points[n.currentShapeIndex][d];
                    w.randomPosX = 6 * Math.random(), w.randomPosY = 6 * Math.random()
                }
                n.canvasBgColor()
            },
         /*   canvasBgColor: function () {
                jQuery(n.canvasID).parents(".nectar-particles").find(".canvas-bg").css({"background-color": '#ee2900'})
            },*/
            canvasBgColor:function(){
                jQuery(n.canvasID).parents(".nectar-particles").find(".canvas-bg").css({"background-color":n.imgsToDraw[n.currentShapeIndex].backgroundColor})
            },
            resetShapeTextTimeout: null,
            shapeTextDisplay: function (a, e, i) {
                clearTimeout(n.resetShapeTextTimeout);
                var o = t(".nectar-box-roll").length > 0 ? ".nectar-box-roll" : ".nectar-particles";
                jQuery(n.canvasID).parents(o).find(".inner-wrap").css("z-index", 10).removeClass('is-100'), !1 !== i ? (jQuery(n.canvasID).parents(o).find(".inner-wrap:not(.shape-" + a + ")").each(function (a) {
                    t(this).find("> *").each(function (a) {
                        t(this).stop(!0, !0).delay(150 * a).transition({opacity: "0"}, 250, "ease")
                    })
                }), n.resetShapeTextTimeout = setTimeout(function () {
                    jQuery(n.canvasID).parents(o).find(".inner-wrap:not(.shape-" + a + ") > *").delay(50).transition({
                        rotateX: 0,
                        y: "30px"
                    }, 0)
                }, 200 * jQuery(n.canvasID).parents(o).find(".inner-wrap:not(.shape-" + a + ")").length)) : (jQuery(n.canvasID).parents(o).find(".shape-" + a + " > *").each(function (a) {
                    t(this).stop(!0, !0).delay(150 * a).transition({opacity: "0"}, 250, "ease")
                }), n.resetShapeTextTimeout = setTimeout(function () {
                    jQuery(n.canvasID).parents(o).find(".shape-" + a + " > *").transition({rotateX: 0, y: "30px"}, 0)
                }, 200 * jQuery(n.canvasID).parents(o).find(".shape-" + a + " > *").length)), jQuery(n.canvasID).parents(o).find(".shape-" + e).css("z-index", 100).addClass('is-100'), jQuery(n.canvasID).parents(o).find(".shape-" + e + " > *").each(function (e) {
                    t(this).stop(!0, !0).delay(150 * jQuery(n.canvasID).parents(o).find(".shape-" + a + " > *").length + 175 * e).transition({
                        opacity: "1",
                        y: 0,
                        rotateX: "0"
                    }, 700, "ease")
                })
            },
            particleSequenceRotate: function () {
                setInterval(function () {
                    for (var t, a, e, i, o, r = 0; r < n.points.length; r++) if (!jQuery.isArray(n.points[r]) && "object" == typeof n.points[r]) for (var s = 0; s < 1; s++) for (var h = 0; h < n.points[r][0].length; h++) {
                        t = n.points[r][0][h], o = 1e3;
                        for (var l = 0; l < n.points[r][n.currentSequenceIndex].length; l++) 1 != (a = n.points[r][n.currentSequenceIndex][l]).sequenceUsed && ((i = Math.sqrt((a.originalX - t.x) * (a.originalX - t.x) + (a.originalY - t.y) * (a.originalY - t.y))) <= o && o > 10 && (o = i, t.seqX = a.originalX, t.seqY = a.originalY, e = a), l == n.points[r][n.currentSequenceIndex].length - 1 && (e.sequenceUsed = !0));
                        if (h == n.points[r][0].length - 1) for (l = 0; l < n.points[r][n.currentSequenceIndex].length; l++) n.points[r][n.currentSequenceIndex][l].sequenceUsed = !1
                    }
                    n.currentSequenceIndex = n.currentSequenceIndex + 1 == Object.keys(n.points[n.currentShapeIndex]).length ? 0 : n.currentSequenceIndex + 1
                }, 80)
            },
            callDrawImageToBackground: function (t, a) {
                if (n.loadedCount += 1, n.loadedCount == n.totalImgCount) for (var e = 0; e < n.imgsToDraw.length; e++) if (jQuery.isArray(this.bgImage[e])) for (var i = 0; i < n.imgsToDraw[e].shape.length; i++) n.drawImageToBackground(e, i, !1, !0); else n.drawImageToBackground(e, null, !1, !0)
            },
            drawImageToBackground: function (a, e, i, o) {
                var r, s, h = null == e ? this.bgImage[a] : this.bgImage[a][e];
                this.bgCanvas = document.createElement("canvas"), this.bgCanvas.width = this.canvas.width, this.bgCanvas.height = this.canvas.height;
                var l = i, d = t(".nectar-box-roll").length > 0 ? ".nectar-box-roll" : ".nectar-particles",
                    c = "bottom" == n.textPosition && "center" == n.textPositionH ? t(n.canvasID).parents(d).find(".inner-wrap").height() / 1.3 + 50 : 0;
                if (this.bgCanvas.height < 650 && (c /= 2), h.width > this.bgCanvas.width - 50 - c || h.height > this.bgCanvas.height - 50 - c) {
                    var g = Math.max(h.width / (this.bgCanvas.width - 50), h.height / (this.bgCanvas.height - 100 - c));
                    r = h.width / g, s = h.height / g, this.bgCanvas.width < 1600 ? g > 3 && g <= 4 ? (this.imgsToDraw[a].density = this.imgsToDraw[a].densityOriginal - 3, this.imgsToDraw[a].maxParticleSize >= 3 && (this.imgsToDraw[a].maxParticleSize = this.imgsToDraw[a].maxParticleSizeOriginal - 1)) : g > 4 ? (this.bgCanvas.width > 800 ? this.imgsToDraw[a].density = this.imgsToDraw[a].densityOriginal - 4 : this.imgsToDraw[a].density = this.imgsToDraw[a].densityOriginal - 5, this.imgsToDraw[a].maxParticleSize > 2 && (this.imgsToDraw[a].maxParticleSize = 2)) : g <= 3 && (this.imgsToDraw[a].density = this.imgsToDraw[a].densityOriginal, this.imgsToDraw[a].maxParticleSize = this.imgsToDraw[a].maxParticleSizeOriginal) : (this.imgsToDraw[a].density = this.imgsToDraw[a].densityOriginal, this.imgsToDraw[a].maxParticleSize = this.imgsToDraw[a].maxParticleSizeOriginal)
                } else r = h.width, s = h.height;
                this.bgContext = this.bgCanvas.getContext("2d"), this.bgContext.drawImage(h, (this.canvas.width - r) / 2, (this.canvas.height + 0 - s - 1 * c) / 2, r, s), this.bgContextPixelData = this.bgContext.getImageData(0, 0, this.bgCanvas.width, this.bgCanvas.height), this.preparePoints(a, e, l)
            },
            onWindowResize: function () {
                if (cancelAnimationFrame(this.animation), n.loadedCount == n.imgsToDraw.length) for (var t = 0; t < n.imgsToDraw.length; t++) this.drawImageToBackground(t, null, !0, !1);
                this.onMobile = this.canvas.width <= 690
            }
        };
        a.length > 0 && n.init("#canvas"), e = t(".nectar-box-roll").length > 0 ? ".nectar-box-roll" : ".nectar-particles";
        var i = t(e + " .pagination-dot"), o = t(e + " .pagination-current"), r = t(e + " .pagination-item");
        var s = "not-rolled", h = "false";

        function l(a, e) {
            if (t("#slide-out-widget-area.open").length > 0) return !1;
            "not-rolled" == s && "false" == h && -1 == e && t('.nectar-box-roll canvas[data-loaded="true"]').length > 0 ? (s = "rolled", h = "true", n.mouse.x = 2e3, n.mouse.y = -2e3, n.regularAnimation = !1, setTimeout(function () {
                h = "false"
            }, 1650), clearTimeout(n.timeoutHolder)) : "rolled" == s && "false" == h && 1 == e && t(window).scrollTop() < 100 && (s = "not-rolled", h = "true", setTimeout(function () {
                h = "false", n.regularAnimation = !0
            }, 1600), 0 == n.randomMovement && setTimeout(function () {
                n.draw(), n.fps = 43, n.fpsDec = .13, n.decMultiplier = .06
            }, 1630), 1 == n.randomMovement && (n.draw(), setTimeout(function () {
                n.impulsX = 800 * Math.random() - 400, n.impulsY = 400 * -Math.random()
            }, 400), setTimeout(function () {
                n.particleRotateLogic(!1)
            }, 3400)), 0 == n.randomMovement && n.particlesRotate(!0))
        }

        a.length > 0 && t(".nectar-box-roll").length > 0 && (t("body").mousewheel(function (a, e) {
            if (t("#slide-out-widget-area.open.fullscreen").length > 0) return !1;
            l(0, e)
        }), t("body").on("click", ".nectar-box-roll .section-down-arrow", function () {
            return l(0, -1), t(this).addClass("hovered"), !1
        }), navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/) && t("body").swipe({
            swipeStatus: function (a, e, n, i, o, r) {
                if (t("#slide-out-widget-area.open").length > 0) return !1;
                "up" == n ? (l(0, -1), 0 == t("#ajax-content-wrap.no-scroll").length && t("body").swipe("option", "allowPageScroll", "vertical")) : "down" == n && 0 == t(window).scrollTop() && (l(0, 1), t("body").swipe("option", "allowPageScroll", "auto"))
            }
        }))

        n.init('#canvas')
    })
}(jQuery)