(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(t,e,n){"use strict";n.r(e);var o={name:"Footer"},r=n(60),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer bg-dark pt-3"},[e("b-container",[e("b-row",{staticClass:"d-flex"},[e("b-col",{staticClass:"align-self-end"},[e("p",{staticClass:"text-muted font-weight-light small"},[t._v("\n                    Starbase is a registered trademark of\n                    "),e("a",{attrs:{href:"https://www.frozenbyte.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                        Frozenbyte Oy")]),t._v(" "),e("br"),t._v("\n                    Just-Look Network is not associated with Frozenbyte Oy. "),e("br"),t._v("\n                    Official Starbase Website:\n                    "),e("a",{attrs:{href:"https://www.starbasegame.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n                        https://www.starbasegame.com\n                    ")])])]),t._v(" "),e("b-col",{staticClass:"align-self-end"},[e("p",{staticClass:"text-muted font-weight-light text-right"},[e("a",{attrs:{href:"https://discord.com/invite/starbase",target:"_blank",rel:"noopener noreferrer"}},[e("b-icon",{attrs:{icon:"chat-right-dots"}})],1),t._v("\n                    |\n                    "),e("nuxt-link",{staticClass:"text-muted font-weight-light",attrs:{to:t.localePath("/imprint")}},[t._v("Imprint")]),t._v("\n                    |\n                    "),e("nuxt-link",{staticClass:"text-muted font-weight-light",attrs:{to:t.localePath("/privacy")}},[t._v("Privacy")]),t._v("\n                    |\n                    "),e("nuxt-link",{staticClass:"text-muted font-weight-light",attrs:{to:t.localePath("/contact")}},[t._v("Contact")]),t._v(" "),e("br"),t._v("\n                    Copyright © 2021 Just-Look Network\n                ")],1)])],1)],1)],1)}),[],!1,null,"076422ca",null);e.default=component.exports;installComponents(component,{Footer:n(147).default})},151:function(t,e,n){"use strict";var o=n(18),r=n(192),l=n.n(r);o.default.use(l.a)},152:function(t,e,n){"use strict";var o=n(18),r=n(47),l=n(0);o.default.component("BIcon",r.a),o.default.component("BIconExclamationCircle",l.fl),o.default.component("BIconClipboardPlus",l.Ph),o.default.component("BIconHeart",l.Hp),o.default.component("BIconChatRightDots",l.Lg),o.default.component("BIconGear",l.Do),o.default.component("BIconTools",l.My),o.default.component("BIconExclamationTriangle",l.ol),o.default.component("BIconQuestionDiamond",l.xu)},176:function(t,e,n){},194:function(t,e,n){"use strict";n(12),n(10),n(9),n(13),n(14);var o=n(31),r=n(3),l=(n(141),n(195)),c=n(147);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{appNavbar:l.default,appFooter:c.default},head:function(){var t=this.$nuxtI18nSeo();return{htmlAttrs:_({},t.htmlAttrs),meta:Object(o.a)(t.meta),link:Object(o.a)(t.link)}}},f=n(60),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("app-navbar"),t._v(" "),e("Nuxt"),t._v(" "),e("app-footer")],1)}),[],!1,null,null,null);e.a=component.exports},195:function(t,e,n){"use strict";n.r(e);n(27),n(9);var o={name:"Navbar",computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},r=(n(229),n(60)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("b-navbar",{attrs:{id:"mainNav",toggleable:"lg",fixed:"top",type:"dark",variant:"dark"}},[e("b-container",[e("b-navbar-brand",{attrs:{to:t.localePath("/")}},[e("img",{staticClass:"d-inlineblock align-top nav-logo",attrs:{src:n(228),alt:"Just-Look Network Logo"}}),t._v("\n            | Starbase Codes "),e("small",{staticClass:"text-secondary"},[t._v(t._s(t.$t("START.HEADLINE_SUB")))])]),t._v(" "),e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{attrs:{to:t.localePath("/"),exact:""}},[t._v(t._s(t.$t("MENU.START")))]),t._v(" "),e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v("\n                        "+t._s(t.$t("MENU.DESIGNER"))+"\n                        "),e("span",{staticClass:"sr-only"},[t._v(t._s(t.$t("MENU.DESIGNER")))])]},proxy:!0}])},[e("b-dropdown-header",[t._v(t._s(t.$t("MENU.CALCULATOR")))]),t._v(" "),t._v(" "),e("b-dropdown-item",{attrs:{to:t.localePath("/ship_calc")}},[t._v("\n                        "+t._s(t.$t("MENU.SHIP_CALCULATOR"))+"\n                    ")]),t._v(" "),e("b-dropdown-item",{attrs:{to:t.localePath("/capt_calc")}},[t._v("\n                        "+t._s(t.$t("MENU.CAPT_CALCULATOR"))+"\n                    ")])],1),t._v(" "),e("b-nav-item",{attrs:{to:t.localePath("/yolol")}},[t._v(t._s(t.$t("MENU.YOLOL")))]),t._v(" "),e("b-nav-item",{attrs:{to:t.localePath("/map")}},[t._v(t._s(t.$t("MENU.MAP")))]),t._v(" "),e("b-nav-item",{attrs:{to:t.localePath("/contact")}},[t._v(t._s(t.$t("MENU.CONTACT")))]),t._v(" "),e("b-dropdown",{attrs:{variant:"link","toggle-class":"text-decoration-none","no-caret":"",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("b-icon",{attrs:{icon:"tools"}}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v(t._s(t.$t("MENU.OPTIONS")))])]},proxy:!0}])},[t._v(" "),e("b-dropdown-header",[t._v(t._s(t.$t("MENU.OPTIONS_LANGUAGE")))]),t._v(" "),t._l(t.availableLocales,(function(n){return e("b-dropdown-item",{key:n.code,attrs:{to:t.switchLocalePath(n.code)}},[t._v("\n                        "+t._s(n.name)+"\n                    ")])})),t._v(" "),e("b-dropdown-divider"),t._v(" "),e("b-dropdown-header",[t._v(t._s(t.$t("MENU.OPTIONS_EXTRA_TITLE")))]),t._v(" "),e("b-dropdown-item",{attrs:{to:t.localePath("/changelog")}},[t._v("\n                        "+t._s(t.$t("MENU.OPTIONS_CHANGELOG"))+"\n                    ")])],2)],1)],1)],1)],1)}),[],!1,null,"657fe730",null);e.default=component.exports},199:function(t,e,n){n(200),t.exports=n(201)},227:function(t,e,n){},228:function(t,e,n){t.exports=n.p+"img/jl_logo.ab585c9.png"},229:function(t,e,n){"use strict";n(176)}},[[199,18,1,19]]]);