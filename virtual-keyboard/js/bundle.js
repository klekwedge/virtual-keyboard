(()=>{var t={5089:(t,e,r)=>{var n=r(2086),o=r(930),i=r(9268),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},1449:(t,e,r)=>{var n=r(2086),o=r(1956),i=r(9268),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a constructor")}},8669:(t,e,r)=>{var n=r(211),o=r(4710),i=r(7826),a=n("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},9966:(t,e,r)=>{"use strict";var n=r(3448).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},6112:(t,e,r)=>{var n=r(2086),o=r(8759),i=n.String,a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1984:(t,e,r)=>{"use strict";var n=r(8062).forEach,o=r(2802)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},6198:(t,e,r)=>{var n=r(4088),o=r(7740),i=r(2871),a=function(t){return function(e,r,a){var c,u=n(e),s=i(u),l=o(a,s);if(t&&r!=r){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},8062:(t,e,r)=>{var n=r(8516),o=r(8240),i=r(5974),a=r(3060),c=r(2871),u=r(5574),s=o([].push),l=function(t){var e=1==t,r=2==t,o=3==t,l=4==t,f=6==t,p=7==t,v=5==t||f;return function(d,g,y,h){for(var x,b,m=a(d),S=i(m),w=n(g,y),E=c(S),L=0,O=h||u,C=e?O(d,E):r||p?O(d,0):void 0;E>L;L++)if((v||L in S)&&(b=w(x=S[L],L,m),t))if(e)C[L]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return L;case 2:s(C,x)}else switch(t){case 4:return!1;case 7:s(C,x)}return f?-1:o||l?l:C}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},2802:(t,e,r)=>{"use strict";var n=r(3677);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},3329:(t,e,r)=>{var n=r(2086),o=r(7740),i=r(2871),a=r(9720),c=n.Array,u=Math.max;t.exports=function(t,e,r){for(var n=i(t),s=o(e,n),l=o(void 0===r?n:r,n),f=c(u(l-s,0)),p=0;s<l;s++,p++)a(f,p,t[s]);return f.length=p,f}},8789:(t,e,r)=>{var n=r(2086),o=r(6526),i=r(1956),a=r(8759),c=r(211)("species"),u=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===u||o(e.prototype))||a(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?u:e}},5574:(t,e,r)=>{var n=r(8789);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},2306:(t,e,r)=>{var n=r(8240),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},375:(t,e,r)=>{var n=r(2086),o=r(2371),i=r(930),a=r(2306),c=r(211)("toStringTag"),u=n.Object,s="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=u(t),c))?r:s?a(e):"Object"==(n=a(e))&&i(e.callee)?"Arguments":n}},8474:(t,e,r)=>{var n=r(9606),o=r(6095),i=r(4399),a=r(7826);t.exports=function(t,e,r){for(var c=o(e),u=a.f,s=i.f,l=0;l<c.length;l++){var f=c[l];n(t,f)||r&&n(r,f)||u(t,f,s(e,f))}}},469:(t,e,r)=>{var n=r(211)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},2585:(t,e,r)=>{var n=r(5283),o=r(7826),i=r(5736);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},5736:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9720:(t,e,r)=>{"use strict";var n=r(2258),o=r(7826),i=r(5736);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},1343:(t,e,r)=>{var n=r(2086),o=r(930),i=r(2585),a=r(3712),c=r(3648);t.exports=function(t,e,r,u){var s=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet,p=u&&void 0!==u.name?u.name:e;return o(r)&&a(r,p,u),t===n?(l?t[e]=r:c(e,r),t):(s?!f&&t[e]&&(l=!0):delete t[e],l?t[e]=r:i(t,e,r),t)}},5283:(t,e,r)=>{var n=r(3677);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:(t,e,r)=>{var n=r(2086),o=r(8759),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},933:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},3526:(t,e,r)=>{var n=r(821)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},4999:(t,e,r)=>{var n=r(563);t.exports=n("navigator","userAgent")||""},1448:(t,e,r)=>{var n,o,i=r(2086),a=r(4999),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,l=s&&s.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},8684:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:(t,e,r)=>{var n=r(2086),o=r(4399).f,i=r(2585),a=r(1343),c=r(3648),u=r(8474),s=r(7189);t.exports=function(t,e){var r,l,f,p,v,d=t.target,g=t.global,y=t.stat;if(r=g?n:y?n[d]||c(d,{}):(n[d]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(g?l:d+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),a(r,l,p,t)}}},3677:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},2331:(t,e,r)=>{"use strict";r(2077);var n=r(8240),o=r(1343),i=r(4861),a=r(3677),c=r(211),u=r(2585),s=c("species"),l=RegExp.prototype;t.exports=function(t,e,r,f){var p=c(t),v=!a((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),d=v&&!a((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[s]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return e=!0,null},r[p](""),!e}));if(!v||!d||r){var g=n(/./[p]),y=e(p,""[t],(function(t,e,r,o,a){var c=n(t),u=e.exec;return u===i||u===l.exec?v&&!a?{done:!0,value:g(e,r,o)}:{done:!0,value:c(r,e,o)}:{done:!1}}));o(String.prototype,t,y[0]),o(l,p,y[1])}f&&u(l[p],"sham",!0)}},7258:(t,e,r)=>{var n=r(6059),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},8516:(t,e,r)=>{var n=r(8240),o=r(5089),i=r(6059),a=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},6059:(t,e,r)=>{var n=r(3677);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9413:(t,e,r)=>{var n=r(6059),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},4398:(t,e,r)=>{var n=r(5283),o=r(9606),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},8240:(t,e,r)=>{var n=r(6059),o=Function.prototype,i=o.bind,a=o.call,c=n&&i.bind(a,a);t.exports=n?function(t){return t&&c(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},563:(t,e,r)=>{var n=r(2086),o=r(930),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},2964:(t,e,r)=>{var n=r(5089);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},2086:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},9606:(t,e,r)=>{var n=r(8240),o=r(3060),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},7153:t=>{t.exports={}},5963:(t,e,r)=>{var n=r(563);t.exports=n("document","documentElement")},6761:(t,e,r)=>{var n=r(5283),o=r(3677),i=r(821);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:(t,e,r)=>{var n=r(2086),o=r(8240),i=r(3677),a=r(2306),c=n.Object,u=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?u(t,""):c(t)}:c},9277:(t,e,r)=>{var n=r(8240),o=r(930),i=r(4489),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},3278:(t,e,r)=>{var n,o,i,a=r(9316),c=r(2086),u=r(8240),s=r(8759),l=r(2585),f=r(9606),p=r(4489),v=r(8944),d=r(7153),g="Object already initialized",y=c.TypeError,h=c.WeakMap;if(a||p.state){var x=p.state||(p.state=new h),b=u(x.get),m=u(x.has),S=u(x.set);n=function(t,e){if(m(x,t))throw new y(g);return e.facade=t,S(x,t,e),e},o=function(t){return b(x,t)||{}},i=function(t){return m(x,t)}}else{var w=v("state");d[w]=!0,n=function(t,e){if(f(t,w))throw new y(g);return e.facade=t,l(t,w,e),e},o=function(t){return f(t,w)?t[w]:{}},i=function(t){return f(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return r}}}},6526:(t,e,r)=>{var n=r(2306);t.exports=Array.isArray||function(t){return"Array"==n(t)}},930:t=>{t.exports=function(t){return"function"==typeof t}},1956:(t,e,r)=>{var n=r(8240),o=r(3677),i=r(930),a=r(375),c=r(563),u=r(9277),s=function(){},l=[],f=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),d=!p.exec(s),g=function(t){if(!i(t))return!1;try{return f(s,l,t),!0}catch(t){return!1}},y=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!v(p,u(t))}catch(t){return!0}};y.sham=!0,t.exports=!f||o((function(){var t;return g(g.call)||!g(Object)||!g((function(){t=!0}))||t}))?y:g},7189:(t,e,r)=>{var n=r(3677),o=r(930),i=/#|\.prototype\./,a=function(t,e){var r=u[c(t)];return r==l||r!=s&&(o(e)?n(e):!!e)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",l=a.POLYFILL="P";t.exports=a},8759:(t,e,r)=>{var n=r(930);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},3296:t=>{t.exports=!1},7994:(t,e,r)=>{var n=r(8759),o=r(2306),i=r(211)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2071:(t,e,r)=>{var n=r(2086),o=r(563),i=r(930),a=r(5516),c=r(1876),u=n.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&a(e.prototype,u(t))}},2871:(t,e,r)=>{var n=r(4005);t.exports=function(t){return n(t.length)}},3712:(t,e,r)=>{var n=r(3677),o=r(930),i=r(9606),a=r(7826).f,c=r(4398).CONFIGURABLE,u=r(9277),s=r(3278),l=s.enforce,f=s.get,p=!n((function(){return 8!==a((function(){}),"length",{value:8}).length})),v=String(String).split("String"),d=t.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!i(t,"name")||c&&t.name!==e)&&a(t,"name",{value:e,configurable:!0}),p&&r&&i(r,"arity")&&t.length!==r.arity&&a(t,"length",{value:r.arity});var n=l(t);return i(n,"source")||(n.source=v.join("string"==typeof e?e:"")),t};Function.prototype.toString=d((function(){return o(this)&&f(this).source||u(this)}),"toString")},3193:(t,e,r)=>{var n=r(1448),o=r(3677);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},9316:(t,e,r)=>{var n=r(2086),o=r(930),i=r(9277),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},725:(t,e,r)=>{var n=r(2086),o=r(7994),i=n.TypeError;t.exports=function(t){if(o(t))throw i("The method doesn't accept regular expressions");return t}},4710:(t,e,r)=>{var n,o=r(6112),i=r(7711),a=r(8684),c=r(7153),u=r(5963),s=r(821),l=r(8944)("IE_PROTO"),f=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},d=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e;d="undefined"!=typeof document?document.domain&&n?v(n):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):v(n);for(var r=a.length;r--;)delete d.prototype[a[r]];return d()};c[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(f.prototype=o(t),r=new f,f.prototype=null,r[l]=t):r=d(),void 0===e?r:i.f(r,e)}},7711:(t,e,r)=>{var n=r(5283),o=r(8202),i=r(7826),a=r(6112),c=r(4088),u=r(8779);e.f=n&&!o?Object.defineProperties:function(t,e){a(t);for(var r,n=c(e),o=u(e),s=o.length,l=0;s>l;)i.f(t,r=o[l++],n[r]);return t}},7826:(t,e,r)=>{var n=r(2086),o=r(5283),i=r(6761),a=r(8202),c=r(6112),u=r(2258),s=n.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=o?a?function(t,e,r){if(c(t),e=u(e),c(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(c(t),e=u(e),c(r),i)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},4399:(t,e,r)=>{var n=r(5283),o=r(9413),i=r(7446),a=r(5736),c=r(4088),u=r(2258),s=r(9606),l=r(6761),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=c(t),e=u(e),l)try{return f(t,e)}catch(t){}if(s(t,e))return a(!o(i.f,t,e),t[e])}},62:(t,e,r)=>{var n=r(1352),o=r(8684).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},6952:(t,e)=>{e.f=Object.getOwnPropertySymbols},5516:(t,e,r)=>{var n=r(8240);t.exports=n({}.isPrototypeOf)},1352:(t,e,r)=>{var n=r(8240),o=r(9606),i=r(4088),a=r(6198).indexOf,c=r(7153),u=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,l=[];for(r in n)!o(c,r)&&o(n,r)&&u(l,r);for(;e.length>s;)o(n,r=e[s++])&&(~a(l,r)||u(l,r));return l}},8779:(t,e,r)=>{var n=r(1352),o=r(8684);t.exports=Object.keys||function(t){return n(t,o)}},7446:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},999:(t,e,r)=>{"use strict";var n=r(2371),o=r(375);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},7999:(t,e,r)=>{var n=r(2086),o=r(9413),i=r(930),a=r(8759),c=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!a(n=o(r,t)))return n;if(i(r=t.valueOf)&&!a(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!a(n=o(r,t)))return n;throw c("Can't convert object to primitive value")}},6095:(t,e,r)=>{var n=r(563),o=r(8240),i=r(62),a=r(6952),c=r(6112),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(c(t)),r=a.f;return r?u(e,r(t)):e}},1189:(t,e,r)=>{var n=r(2086),o=r(9413),i=r(6112),a=r(930),c=r(2306),u=r(4861),s=n.TypeError;t.exports=function(t,e){var r=t.exec;if(a(r)){var n=o(r,t,e);return null!==n&&i(n),n}if("RegExp"===c(t))return o(u,t,e);throw s("RegExp#exec called on incompatible receiver")}},4861:(t,e,r)=>{"use strict";var n,o,i=r(9413),a=r(8240),c=r(4059),u=r(4276),s=r(4930),l=r(9197),f=r(4710),p=r(3278).get,v=r(2582),d=r(2910),g=l("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,h=y,x=a("".charAt),b=a("".indexOf),m=a("".replace),S=a("".slice),w=(o=/b*/g,i(y,n=/a/,"a"),i(y,o,"a"),0!==n.lastIndex||0!==o.lastIndex),E=s.BROKEN_CARET,L=void 0!==/()??/.exec("")[1];(w||L||E||v||d)&&(h=function(t){var e,r,n,o,a,s,l,v=this,d=p(v),O=c(t),C=d.raw;if(C)return C.lastIndex=v.lastIndex,e=i(h,C,O),v.lastIndex=C.lastIndex,e;var k=d.groups,A=E&&v.sticky,T=i(u,v),j=v.source,R=0,I=O;if(A&&(T=m(T,"y",""),-1===b(T,"g")&&(T+="g"),I=S(O,v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==x(O,v.lastIndex-1))&&(j="(?: "+j+")",I=" "+I,R++),r=new RegExp("^(?:"+j+")",T)),L&&(r=new RegExp("^"+j+"$(?!\\s)",T)),w&&(n=v.lastIndex),o=i(y,A?r:v,I),A?o?(o.input=S(o.input,R),o[0]=S(o[0],R),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:w&&o&&(v.lastIndex=v.global?o.index+o[0].length:n),L&&o&&o.length>1&&i(g,o[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&k)for(o.groups=s=f(null),a=0;a<k.length;a++)s[(l=k[a])[0]]=o[l[1]];return o}),t.exports=h},4276:(t,e,r)=>{"use strict";var n=r(6112);t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},4930:(t,e,r)=>{var n=r(3677),o=r(2086).RegExp,i=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=i||n((function(){return!o("a","y").sticky})),c=i||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:i}},2582:(t,e,r)=>{var n=r(3677),o=r(2086).RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},2910:(t,e,r)=>{var n=r(3677),o=r(2086).RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},9586:(t,e,r)=>{var n=r(2086).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3648:(t,e,r)=>{var n=r(2086),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},8944:(t,e,r)=>{var n=r(9197),o=r(5422),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4489:(t,e,r)=>{var n=r(2086),o=r(3648),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},9197:(t,e,r)=>{var n=r(3296),o=r(4489);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.4",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"})},8515:(t,e,r)=>{var n=r(6112),o=r(1449),i=r(211)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},3448:(t,e,r)=>{var n=r(8240),o=r(9502),i=r(4059),a=r(9586),c=n("".charAt),u=n("".charCodeAt),s=n("".slice),l=function(t){return function(e,r){var n,l,f=i(a(e)),p=o(r),v=f.length;return p<0||p>=v?t?"":void 0:(n=u(f,p))<55296||n>56319||p+1===v||(l=u(f,p+1))<56320||l>57343?t?c(f,p):n:t?s(f,p,p+2):l-56320+(n-55296<<10)+65536}};t.exports={codeAt:l(!1),charAt:l(!0)}},7740:(t,e,r)=>{var n=r(9502),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},4088:(t,e,r)=>{var n=r(5974),o=r(9586);t.exports=function(t){return n(o(t))}},9502:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},4005:(t,e,r)=>{var n=r(9502),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},3060:(t,e,r)=>{var n=r(2086),o=r(9586),i=n.Object;t.exports=function(t){return i(o(t))}},1288:(t,e,r)=>{var n=r(2086),o=r(9413),i=r(8759),a=r(2071),c=r(2964),u=r(7999),s=r(211),l=n.TypeError,f=s("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var r,n=c(t,f);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||a(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},2258:(t,e,r)=>{var n=r(1288),o=r(2071);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},2371:(t,e,r)=>{var n={};n[r(211)("toStringTag")]="z",t.exports="[object z]"===String(n)},4059:(t,e,r)=>{var n=r(2086),o=r(375),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},9268:(t,e,r)=>{var n=r(2086).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},5422:(t,e,r)=>{var n=r(8240),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},1876:(t,e,r)=>{var n=r(3193);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:(t,e,r)=>{var n=r(5283),o=r(3677);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},211:(t,e,r)=>{var n=r(2086),o=r(9197),i=r(9606),a=r(5422),c=r(3193),u=r(1876),s=o("wks"),l=n.Symbol,f=l&&l.for,p=u?l:l&&l.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!c&&"string"!=typeof s[t]){var e="Symbol."+t;c&&i(l,t)?s[t]=l[t]:s[t]=u&&f?f(e):p(e)}return s[t]}},5374:(t,e,r)=>{"use strict";var n=r(1695),o=r(1984);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},5623:(t,e,r)=>{"use strict";var n=r(1695),o=r(6198).includes,i=r(3677),a=r(8669);n({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},3238:(t,e,r)=>{var n=r(2371),o=r(1343),i=r(999);n||o(Object.prototype,"toString",i,{unsafe:!0})},2077:(t,e,r)=>{"use strict";var n=r(1695),o=r(4861);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},514:(t,e,r)=>{"use strict";var n=r(1695),o=r(8240),i=r(725),a=r(9586),c=r(4059),u=r(469),s=o("".indexOf);n({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~s(c(a(this)),c(i(t)),arguments.length>1?arguments[1]:void 0)}})},2482:(t,e,r)=>{"use strict";var n=r(7258),o=r(9413),i=r(8240),a=r(2331),c=r(7994),u=r(6112),s=r(9586),l=r(8515),f=r(9966),p=r(4005),v=r(4059),d=r(2964),g=r(3329),y=r(1189),h=r(4861),x=r(4930),b=r(3677),m=x.UNSUPPORTED_Y,S=4294967295,w=Math.min,E=[].push,L=i(/./.exec),O=i(E),C=i("".slice);a("split",(function(t,e,r){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var i=v(s(this)),a=void 0===r?S:r>>>0;if(0===a)return[];if(void 0===t)return[i];if(!c(t))return o(e,i,t,a);for(var u,l,f,p=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,x=new RegExp(t.source,d+"g");(u=o(h,x,i))&&!((l=x.lastIndex)>y&&(O(p,C(i,y,u.index)),u.length>1&&u.index<i.length&&n(E,p,g(u,1)),f=u[0].length,y=l,p.length>=a));)x.lastIndex===u.index&&x.lastIndex++;return y===i.length?!f&&L(x,"")||O(p,""):O(p,C(i,y)),p.length>a?g(p,0,a):p}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:o(e,this,t,r)}:e,[function(e,r){var n=s(this),a=null==e?void 0:d(e,t);return a?o(a,e,n,r):o(i,v(n),e,r)},function(t,n){var o=u(this),a=v(t),c=r(i,o,a,n,i!==e);if(c.done)return c.value;var s=l(o,RegExp),d=o.unicode,g=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(m?"g":"y"),h=new s(m?"^(?:"+o.source+")":o,g),x=void 0===n?S:n>>>0;if(0===x)return[];if(0===a.length)return null===y(h,a)?[a]:[];for(var b=0,E=0,L=[];E<a.length;){h.lastIndex=m?0:E;var k,A=y(h,m?C(a,E):a);if(null===A||(k=w(p(h.lastIndex+(m?E:0)),a.length))===b)E=f(a,E,d);else{if(O(L,C(a,b,E)),L.length===x)return L;for(var T=1;T<=A.length-1;T++)if(O(L,A[T]),L.length===x)return L;E=b=k}}return O(L,C(a,b)),L}]}),!!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),m)},5849:(t,e,r)=>{var n=r(2086),o=r(933),i=r(3526),a=r(1984),c=r(2585),u=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var s in o)o[s]&&u(n[s]&&n[s].prototype);u(i)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";r(2077),r(2482),r(5374),r(3238),r(5849),r(5623),r(514);var t=[[["Backquote","ё","Ё","`","~"],["Digit1","1","!","1","!"],["Digit2","2","'","2","@"],["Digit3","3","№","3","#"],["Digit4","4",";","4","$"],["Digit5","5","%","5","%"],["Digit6","6",":","6","^"],["Digit7","7","?","7","&"],["Digit8","8","*","8","*"],["Digit9","9","(","9","("],["Digit0","0",")","0",")"],["Minus","-","_","-","_"],["Equal","=","+","=","+"],["Backspace","Backspace","Backspace","Backspace","Backspace"]],[["Tab","Tab","Tab","Tab","Tab"],["KeyQ","й","Й","q","Q"],["KeyW","ц","Ц","w","W"],["KeyE","у","У","e","E"],["KeyR","к","К","r","R"],["KeyT","е","Е","t","T"],["KeyY","н","Н","y","Y"],["KeyU","г","Г","u","U"],["KeyI","ш","Ш","i","I"],["KeyO","щ","Щ","o","O"],["KeyP","з","З","p","P"],["BracketLeft","х","Х","[","{"],["BracketRight","ъ","Ъ","]","}"],["Backslash","\\","/","\\","|"],["Delete","Del","Del","Del","Del"]],[["CapsLock","CapsLock","CapsLock","CapsLock","CapsLock","CapsLock"],["KeyA","ф","Ф","a","A"],["KeyS","ы","Ы","s","S"],["KeyD","в","В","d","D"],["KeyF","а","А","f","F"],["KeyG","п","П","g","G"],["KeyH","р","Р","h","H"],["KeyJ","о","О","j","J"],["KeyK","л","Л","k","K"],["KeyL","д","Д","l","L"],["Semicolon","ж","Ж",";",":"],["Quote","э","Э","'","'"],["Enter","Enter","Enter","Enter","Enter"]],[["ShiftLeft","Shift","Shift","Shift","Shift"],["KeyZ","я","Я","z","Z"],["KeyX","ч","Ч","x","X"],["KeyC","с","С","c","C"],["KeyV","м","М","v","V"],["KeyB","и","И","b","B"],["KeyN","т","Т","n","N"],["KeyM","ь","Ь","m","M"],["Comma","б","Б",".","<"],["Period","ю","Ю",",",">"],["Slash",".",",","/","?"],["ArrowUp","▲","▲","▲","▲"],["ShiftRight","Shift","Shift","Shift","Shift"]],[["ControlLeft","Ctrl","Ctrl","Ctrl","Ctrl"],["MetaLeft","Win","Win","Win","Win"],["AltLeft","Alt","Alt","Alt","Alt"],["Space"," "," "," "," "],["AltRight","Alt","Alt","Alt","Alt"],["ArrowLeft","◄","◄","◄","◄"],["ArrowDown","▼","▼","▼","▼"],["ArrowRight","►","►","►","►"],["ControlRight","Ctrl","Ctrl","Ctrl","Ctrl"]]],e=["Backspace","Tab","Delete","CapsLock","Enter","ShiftLeft","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"];document.addEventListener("DOMContentLoaded",(function(){var r;Boolean(localStorage.getItem("lang"))?r=localStorage.getItem("lang"):(r="ru",localStorage.setItem("lang","ru"));var n,o,i,a="lowercase";n=document.body,o="_container",i=document.createElement("div"),""!==(o=o.split(" "))&&o.forEach((function(t){i.classList.add(t)})),n.append(i);var c=document.createElement("textarea");c.classList.add("keyboard__textarea"),c.autofocus=!0,document.querySelector("._container").append(c),c.addEventListener("blur",(function(t){c.autofocus=!0,t.target.focus()}));var u=document.createElement("div");function s(e,r){u.innerHTML="";for(var n=0;n<t.length;n++){var o=document.createElement("ul");o.classList.add("keyboard__row"),document.querySelector(".keyboard__keys").append(o);for(var i=function(i){var a=document.createElement("li");"lowercase"===e&&"ru"===r?a.textContent=t[n][i][1]:"uppercase"===e&&"ru"===r?a.textContent=t[n][i][2]:"lowercase"===e&&"en"===r?a.textContent=t[n][i][3]:"uppercase"===e&&"en"===r&&(a.textContent=t[n][i][4]),a.classList.add("keyboard__key","".concat(t[n][i][0])),o.append(a),a.addEventListener("click",(function(t){l(t.target.classList[1])||(c.textContent+=a.textContent)}))},a=0;a<t[n].length;a++)i(a)}}function l(t){return e.includes(t)}u.classList.add("keyboard__keys"),document.querySelector("._container").append(u),s(a,r),document.addEventListener("keydown",(function(t){document.querySelector(".".concat(t.code)).classList.add("_active"),"ShiftLeft"===t.code&&document.addEventListener("keyup",(function(t){"AltLeft"===t.code&&(r="ru"===r?"en":"ru",localStorage.setItem("lang",r),s(a,r))})),"Tab"===t.key&&t.preventDefault(),function(t){if(l(t.code))switch(t.code){case"CapsLock":s(a="lowercase"===a?"uppercase":"lowercase",r);break;case"Enter":c.textContent+="\n";break;case"Delete":break;case"Backspace":c.textContent=c.textContent.substring(0,c.textContent.length-1);break;case"Space":c.textContent+=" ";break;case"Tab":console.log("!"),c.textContent+="        ",console.log(c.textContent)}else c.textContent+=t.key}(t)})),document.addEventListener("keyup",(function(t){document.querySelector(".".concat(t.code)).classList.remove("_active")}))}))})()})();
//# sourceMappingURL=bundle.js.map