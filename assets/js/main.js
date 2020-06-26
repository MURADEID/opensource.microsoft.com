var AROSSMN=AROSSMN||{};!function(o,t){o(function(){t.Global.init(),t.Viewport.init(),t.Header.init(),t.Tabs.init(),t.Accordion.init(),t.Draw.init()}),t.Global={init:function(){o(function(){document.body.classList.add("page-ready")}),"ontouchstart"in window||document.documentElement.classList.add("no-touch"),"ontouchstart"in window&&document.documentElement.classList.add("is-touch"),(document.documentMode||/Edge/.test(navigator.userAgent))&&(-1===navigator.appVersion.indexOf("Trident")?document.documentElement.classList.add("isEDGE"):o("html").addClass("isIE isIE11")),!/constructor/i.test(window.HTMLElement)&&"[object SafariRemoteNotification]"!==(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString()||document.body.classList.add("browser-safari"),"localhost"==window.location.hostname|"127.0.0.1"==window.location.hostname&&document.body.classList.add("localhost"),o(".js-subscribe").click(function(t){t.preventDefault(),document.body.classList.add("modal-is-active"),document.getElementById("subscribe-modal").classList.add("is-active"),o("#mc_embed_signup").appendTo("#subscribe-modal .modal")}),o(".js-subscribe-close").click(function(t){t.preventDefault(),document.body.classList.remove("modal-is-active"),document.getElementById("subscribe-modal").classList.remove("is-active"),o("#mc_embed_signup").appendTo("#subscribe-wrap")});var t=o("body");o(".search-trigger").click(function(){t.hasClass("search-is-open")?t.removeClass("search-is-open"):t.addClass("search-is-open")})}},t.Header={init:function(){var e=document.getElementById("site-header"),i=o(window),a=0;document.addEventListener("scroll",function(){120<=i.scrollTop()?e.classList.add("is-sticky"):e.classList.remove("is-sticky");var t=window.pageYOffset||document.documentElement.scrollTop;a<t?e.classList.contains("scrolling-up")&&e.classList.remove("scrolling-up"):e.classList.contains("scrolling-up")||e.classList.add("scrolling-up"),a=t<=0?0:t},!1),o(".js-menu-trigger").click(function(t){t.preventDefault(),o("body").hasClass("menu-is-open")?o("body").removeClass("menu-is-open"):o("body").addClass("menu-is-open")})}},t.Viewport={init:function(){var s=document.querySelectorAll("*[data-animate-in], *[data-detect-viewport]"),o=window.pageYOffset;function t(){for(var t=0;t<s.length;t++)e=s[t],0,i=e.getBoundingClientRect(),a=i.top,n=i.top+e.offsetHeight,a<o+window.innerHeight&&0<n&&(s[t].classList.contains("in-view")||s[t].classList.add("in-view"));var e,i,a,n}window.addEventListener("scroll",t),window.addEventListener("resize",t);for(var e=0;e<s.length;e++){var i=0,a=s[e];i=s[e].getAttribute("data-animate-in-delay")?s[e].getAttribute("data-animate-in-delay")/1e3+"s":0,a.style.transitionDelay=i}setTimeout(function(){t()},500)}},t.ScrollTo={init:function(){o("*[data-scroll-to]").length&&this.bind()},bind:function(){o("*[data-scroll-to]").on("click touchstart:not(touchmove)",function(t){t.preventDefault();var e=o(this).attr("data-scroll-to"),i=o("#"+e),a=1400,n=0;o(this).attr("data-scroll-speed")&&(a=o(this).attr("data-scroll-speed")),o(this).attr("data-scroll-offset")&&(n=o(this).attr("data-scroll-offset")),o("html, body").animate({scrollTop:i.offset().top-n},a),document.body.classList.remove("menu-is-open")})}},t.Accordion={init:function(){o(".accordion").length&&this.bind()},bind:function(){var e=document.getElementsByClassName("accordion__hd");for(i=0;i<e.length;i++)e[i].addEventListener("click",function(){this.parentNode.classList.toggle("is-open");var t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"});var a=o(".accordions__expand-all");a.click(function(){if(a.hasClass("is-open"))for(a.removeClass("is-open"),i=0;i<e.length;i++){e[i].parentNode.classList.remove("is-open"),(t=e[i].nextElementSibling).style.maxHeight=null}else for(a.addClass("is-open"),i=0;i<e.length;i++){var t;e[i].parentNode.classList.add("is-open"),(t=e[i].nextElementSibling).style.maxHeight=t.scrollHeight+"px"}})}},t.Draw={init:function(){o("#draw-svg").length&&this.bind()},bind:function(){o("#draw-svg");var t=o("#draw-svg path"),e=o(" #draw-svg rect"),i=o("#draw-svg circle"),a=o(".rotate"),n=o(".sqaure rect");function s(t,e){return Math.floor(Math.random()*(e-t+1)+t)}console.log(t.length),gsap.fromTo(i,0,{drawSVG:0},{duration:0,drawSVG:!1}),gsap.fromTo(e,0,{drawSVG:0},{duration:0,drawSVG:!1}),gsap.to(a,10,{rotation:"360",ease:Linear.easeNone,repeat:-1,transformOrigin:"50% 50%"}),n.each(function(){var t=o(this),e=s(.5,4),i=s(0,.5);gsap.to(t,e,{scaleX:i,ease:Linear.easeNone,repeat:-1,transformOrigin:"50% 50%",yoyo:!0})}),o(document).ready(function(){setTimeout(function(){gsap.fromTo(i,{drawSVG:"20% 20%"},{duration:5,drawSVG:"0% 100%"}),gsap.fromTo(e,{drawSVG:"20% 20%"},{duration:3,drawSVG:"0% 100%"})},1500)})}},t.Tabs={init:function(){o(".tabs").length&&this.bind()},bind:function(){var t=o(".tabs__tab");o(".tabs__content").hide(),o(".tabs__content.is-active").show(),t.click(function(){var t=o(this).parents(".tabs"),e=t.find(".tabs__tab"),i=t.find(".tabs__content");e.removeClass("is-active"),o(this).addClass("is-active"),o(".tabs__content").hide().removeClass("is-active");var a=o(this).attr("data-tab");o("#"+a);i.each(function(){o(this).attr("data-tab")==a&&(o(this).addClass("is-active"),o(this).fadeIn(300).addClass("is-active"))}),history.replaceState(null,"","#"+a),o(window).trigger("resize")}),o(document).ready(function(){var i=window.location.hash.replace("#","");o(".tabs__tab").each(function(){var t=o(this),e=t.attr("data-tab");e===i&&""!=e&&t.click()})})}}}(jQuery,AROSSMN);