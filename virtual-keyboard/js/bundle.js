(()=>{var t={5089:(t,e,r)=>{var n=r(2086),o=r(930),a=r(9268),i=n.TypeError;t.exports=function(t){if(o(t))return t;throw i(a(t)+" is not a function")}},8669:(t,e,r)=>{var n=r(211),o=r(4710),a=r(7826),i=n("unscopables"),c=Array.prototype;null==c[i]&&a.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},6112:(t,e,r)=>{var n=r(2086),o=r(8759),a=n.String,i=n.TypeError;t.exports=function(t){if(o(t))return t;throw i(a(t)+" is not an object")}},6198:(t,e,r)=>{var n=r(4088),o=r(7740),a=r(2871),i=function(t){return function(e,r,i){var c,u=n(e),s=a(u),l=o(i,s);if(t&&r!=r){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},9955:(t,e,r)=>{var n=r(3677),o=r(211),a=r(1448),i=o("species");t.exports=function(t){return a>=51||!n((function(){var e=[];return(e.constructor={})[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},745:(t,e,r)=>{var n=r(8240);t.exports=n([].slice)},2306:(t,e,r)=>{var n=r(8240),o=n({}.toString),a=n("".slice);t.exports=function(t){return a(o(t),8,-1)}},375:(t,e,r)=>{var n=r(2086),o=r(2371),a=r(930),i=r(2306),c=r(211)("toStringTag"),u=n.Object,s="Arguments"==i(function(){return arguments}());t.exports=o?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=u(t),c))?r:s?i(e):"Object"==(n=i(e))&&a(e.callee)?"Arguments":n}},8474:(t,e,r)=>{var n=r(9606),o=r(6095),a=r(4399),i=r(7826);t.exports=function(t,e,r){for(var c=o(e),u=i.f,s=a.f,l=0;l<c.length;l++){var f=c[l];n(t,f)||r&&n(r,f)||u(t,f,s(e,f))}}},5469:(t,e,r)=>{var n=r(211)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,"/./"[t](e)}catch(t){}}return!1}},2585:(t,e,r)=>{var n=r(5283),o=r(7826),a=r(5736);t.exports=n?function(t,e,r){return o.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},5736:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9720:(t,e,r)=>{"use strict";var n=r(2258),o=r(7826),a=r(5736);t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},1343:(t,e,r)=>{var n=r(2086),o=r(930),a=r(2585),i=r(3712),c=r(3648);t.exports=function(t,e,r,u){var s=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,f=!!u&&!!u.noTargetGet,p=u&&void 0!==u.name?u.name:e;return o(r)&&i(r,p,u),t===n?(l?t[e]=r:c(e,r),t):(s?!f&&t[e]&&(l=!0):delete t[e],l?t[e]=r:a(t,e,r),t)}},5283:(t,e,r)=>{var n=r(3677);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:(t,e,r)=>{var n=r(2086),o=r(8759),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},4999:(t,e,r)=>{var n=r(563);t.exports=n("navigator","userAgent")||""},1448:(t,e,r)=>{var n,o,a=r(2086),i=r(4999),c=a.process,u=a.Deno,s=c&&c.versions||u&&u.version,l=s&&s.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},8684:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:(t,e,r)=>{var n=r(2086),o=r(4399).f,a=r(2585),i=r(1343),c=r(3648),u=r(8474),s=r(7189);t.exports=function(t,e){var r,l,f,p,v,y=t.target,d=t.global,g=t.stat;if(r=d?n:g?n[y]||c(y,{}):(n[y]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(d?l:y+(g?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&a(p,"sham",!0),i(r,l,p,t)}}},3677:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},6059:(t,e,r)=>{var n=r(3677);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9413:(t,e,r)=>{var n=r(6059),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},4398:(t,e,r)=>{var n=r(5283),o=r(9606),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,c=o(a,"name"),u=c&&"something"===function(){}.name,s=c&&(!n||n&&i(a,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},8240:(t,e,r)=>{var n=r(6059),o=Function.prototype,a=o.bind,i=o.call,c=n&&a.bind(i,i);t.exports=n?function(t){return t&&c(t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},563:(t,e,r)=>{var n=r(2086),o=r(930),a=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t]):n[t]&&n[t][e]}},2964:(t,e,r)=>{var n=r(5089);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},2086:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},9606:(t,e,r)=>{var n=r(8240),o=r(3060),a=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return a(o(t),e)}},7153:t=>{t.exports={}},5963:(t,e,r)=>{var n=r(563);t.exports=n("document","documentElement")},6761:(t,e,r)=>{var n=r(5283),o=r(3677),a=r(821);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},5974:(t,e,r)=>{var n=r(2086),o=r(8240),a=r(3677),i=r(2306),c=n.Object,u=o("".split);t.exports=a((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):c(t)}:c},9277:(t,e,r)=>{var n=r(8240),o=r(930),a=r(4489),i=n(Function.toString);o(a.inspectSource)||(a.inspectSource=function(t){return i(t)}),t.exports=a.inspectSource},3278:(t,e,r)=>{var n,o,a,i=r(9316),c=r(2086),u=r(8240),s=r(8759),l=r(2585),f=r(9606),p=r(4489),v=r(8944),y=r(7153),d="Object already initialized",g=c.TypeError,h=c.WeakMap;if(i||p.state){var b=p.state||(p.state=new h),m=u(b.get),x=u(b.has),S=u(b.set);n=function(t,e){if(x(b,t))throw new g(d);return e.facade=t,S(b,t,e),e},o=function(t){return m(b,t)||{}},a=function(t){return x(b,t)}}else{var w=v("state");y[w]=!0,n=function(t,e){if(f(t,w))throw new g(d);return e.facade=t,l(t,w,e),e},o=function(t){return f(t,w)?t[w]:{}},a=function(t){return f(t,w)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return r}}}},6526:(t,e,r)=>{var n=r(2306);t.exports=Array.isArray||function(t){return"Array"==n(t)}},930:t=>{t.exports=function(t){return"function"==typeof t}},1956:(t,e,r)=>{var n=r(8240),o=r(3677),a=r(930),i=r(375),c=r(563),u=r(9277),s=function(){},l=[],f=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),y=!p.exec(s),d=function(t){if(!a(t))return!1;try{return f(s,l,t),!0}catch(t){return!1}},g=function(t){if(!a(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(p,u(t))}catch(t){return!0}};g.sham=!0,t.exports=!f||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?g:d},7189:(t,e,r)=>{var n=r(3677),o=r(930),a=/#|\.prototype\./,i=function(t,e){var r=u[c(t)];return r==l||r!=s&&(o(e)?n(e):!!e)},c=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},u=i.data={},s=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},8759:(t,e,r)=>{var n=r(930);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},3296:t=>{t.exports=!1},7994:(t,e,r)=>{var n=r(8759),o=r(2306),a=r(211)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},2071:(t,e,r)=>{var n=r(2086),o=r(563),a=r(930),i=r(5516),c=r(1876),u=n.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return a(e)&&i(e.prototype,u(t))}},2871:(t,e,r)=>{var n=r(4005);t.exports=function(t){return n(t.length)}},3712:(t,e,r)=>{var n=r(3677),o=r(930),a=r(9606),i=r(7826).f,c=r(4398).CONFIGURABLE,u=r(9277),s=r(3278),l=s.enforce,f=s.get,p=!n((function(){return 8!==i((function(){}),"length",{value:8}).length})),v=String(String).split("String"),y=t.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!a(t,"name")||c&&t.name!==e)&&i(t,"name",{value:e,configurable:!0}),p&&r&&a(r,"arity")&&t.length!==r.arity&&i(t,"length",{value:r.arity});var n=l(t);return a(n,"source")||(n.source=v.join("string"==typeof e?e:"")),t};Function.prototype.toString=y((function(){return o(this)&&f(this).source||u(this)}),"toString")},3193:(t,e,r)=>{var n=r(1448),o=r(3677);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},9316:(t,e,r)=>{var n=r(2086),o=r(930),a=r(9277),i=n.WeakMap;t.exports=o(i)&&/native code/.test(a(i))},7725:(t,e,r)=>{var n=r(2086),o=r(7994),a=n.TypeError;t.exports=function(t){if(o(t))throw a("The method doesn't accept regular expressions");return t}},4710:(t,e,r)=>{var n,o=r(6112),a=r(7711),i=r(8684),c=r(7153),u=r(5963),s=r(821),l=r(8944)("IE_PROTO"),f=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},y=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e;y="undefined"!=typeof document?document.domain&&n?v(n):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):v(n);for(var r=i.length;r--;)delete y.prototype[i[r]];return y()};c[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(f.prototype=o(t),r=new f,f.prototype=null,r[l]=t):r=y(),void 0===e?r:a.f(r,e)}},7711:(t,e,r)=>{var n=r(5283),o=r(8202),a=r(7826),i=r(6112),c=r(4088),u=r(8779);e.f=n&&!o?Object.defineProperties:function(t,e){i(t);for(var r,n=c(e),o=u(e),s=o.length,l=0;s>l;)a.f(t,r=o[l++],n[r]);return t}},7826:(t,e,r)=>{var n=r(2086),o=r(5283),a=r(6761),i=r(8202),c=r(6112),u=r(2258),s=n.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=o?i?function(t,e,r){if(c(t),e=u(e),c(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(c(t),e=u(e),c(r),a)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},4399:(t,e,r)=>{var n=r(5283),o=r(9413),a=r(7446),i=r(5736),c=r(4088),u=r(2258),s=r(9606),l=r(6761),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=c(t),e=u(e),l)try{return f(t,e)}catch(t){}if(s(t,e))return i(!o(a.f,t,e),t[e])}},62:(t,e,r)=>{var n=r(1352),o=r(8684).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},6952:(t,e)=>{e.f=Object.getOwnPropertySymbols},5516:(t,e,r)=>{var n=r(8240);t.exports=n({}.isPrototypeOf)},1352:(t,e,r)=>{var n=r(8240),o=r(9606),a=r(4088),i=r(6198).indexOf,c=r(7153),u=n([].push);t.exports=function(t,e){var r,n=a(t),s=0,l=[];for(r in n)!o(c,r)&&o(n,r)&&u(l,r);for(;e.length>s;)o(n,r=e[s++])&&(~i(l,r)||u(l,r));return l}},8779:(t,e,r)=>{var n=r(1352),o=r(8684);t.exports=Object.keys||function(t){return n(t,o)}},7446:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7999:(t,e,r)=>{var n=r(2086),o=r(9413),a=r(930),i=r(8759),c=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&a(r=t.toString)&&!i(n=o(r,t)))return n;if(a(r=t.valueOf)&&!i(n=o(r,t)))return n;if("string"!==e&&a(r=t.toString)&&!i(n=o(r,t)))return n;throw c("Can't convert object to primitive value")}},6095:(t,e,r)=>{var n=r(563),o=r(8240),a=r(62),i=r(6952),c=r(6112),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(c(t)),r=i.f;return r?u(e,r(t)):e}},9586:(t,e,r)=>{var n=r(2086).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3648:(t,e,r)=>{var n=r(2086),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},8944:(t,e,r)=>{var n=r(9197),o=r(5422),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},4489:(t,e,r)=>{var n=r(2086),o=r(3648),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},9197:(t,e,r)=>{var n=r(3296),o=r(4489);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.4",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE",source:"https://github.com/zloirock/core-js"})},7740:(t,e,r)=>{var n=r(9502),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},4088:(t,e,r)=>{var n=r(5974),o=r(9586);t.exports=function(t){return n(o(t))}},9502:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},4005:(t,e,r)=>{var n=r(9502),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},3060:(t,e,r)=>{var n=r(2086),o=r(9586),a=n.Object;t.exports=function(t){return a(o(t))}},1288:(t,e,r)=>{var n=r(2086),o=r(9413),a=r(8759),i=r(2071),c=r(2964),u=r(7999),s=r(211),l=n.TypeError,f=s("toPrimitive");t.exports=function(t,e){if(!a(t)||i(t))return t;var r,n=c(t,f);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!a(r)||i(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},2258:(t,e,r)=>{var n=r(1288),o=r(2071);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},2371:(t,e,r)=>{var n={};n[r(211)("toStringTag")]="z",t.exports="[object z]"===String(n)},4059:(t,e,r)=>{var n=r(2086),o=r(375),a=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return a(t)}},9268:(t,e,r)=>{var n=r(2086).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},5422:(t,e,r)=>{var n=r(8240),o=0,a=Math.random(),i=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+a,36)}},1876:(t,e,r)=>{var n=r(3193);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:(t,e,r)=>{var n=r(5283),o=r(3677);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},211:(t,e,r)=>{var n=r(2086),o=r(9197),a=r(9606),i=r(5422),c=r(3193),u=r(1876),s=o("wks"),l=n.Symbol,f=l&&l.for,p=u?l:l&&l.withoutSetter||i;t.exports=function(t){if(!a(s,t)||!c&&"string"!=typeof s[t]){var e="Symbol."+t;c&&a(l,t)?s[t]=l[t]:s[t]=u&&f?f(e):p(e)}return s[t]}},5623:(t,e,r)=>{"use strict";var n=r(1695),o=r(6198).includes,a=r(3677),i=r(8669);n({target:"Array",proto:!0,forced:a((function(){return!Array(1).includes()}))},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},2410:(t,e,r)=>{"use strict";var n=r(1695),o=r(2086),a=r(6526),i=r(1956),c=r(8759),u=r(7740),s=r(2871),l=r(4088),f=r(9720),p=r(211),v=r(9955),y=r(745),d=v("slice"),g=p("species"),h=o.Array,b=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var r,n,o,p=l(this),v=s(p),d=u(t,v),m=u(void 0===e?v:e,v);if(a(p)&&(r=p.constructor,(i(r)&&(r===h||a(r.prototype))||c(r)&&null===(r=r[g]))&&(r=void 0),r===h||void 0===r))return y(p,d,m);for(n=new(void 0===r?h:r)(b(m-d,0)),o=0;d<m;d++,o++)d in p&&f(n,o,p[d]);return n.length=o,n}})},1514:(t,e,r)=>{"use strict";var n=r(1695),o=r(8240),a=r(7725),i=r(9586),c=r(4059),u=r(5469),s=o("".indexOf);n({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~s(c(i(this)),c(a(t)),arguments.length>1?arguments[1]:void 0)}})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";r(5623),r(1514),r(2410);var t=[[["Backquote","ё","Ё","`","~"],["Digit1","1","!","1","!"],["Digit2","2","'","2","@"],["Digit3","3","№","3","#"],["Digit4","4",";","4","$"],["Digit5","5","%","5","%"],["Digit6","6",":","6","^"],["Digit7","7","?","7","&"],["Digit8","8","*","8","*"],["Digit9","9","(","9","("],["Digit0","0",")","0",")"],["Minus","-","_","-","_"],["Equal","=","+","=","+"],["Backspace","Backspace","Backspace","Backspace","Backspace"]],[["Tab","Tab","Tab","Tab","Tab"],["KeyQ","й","Й","q","Q"],["KeyW","ц","Ц","w","W"],["KeyE","у","У","e","E"],["KeyR","к","К","r","R"],["KeyT","е","Е","t","T"],["KeyY","н","Н","y","Y"],["KeyU","г","Г","u","U"],["KeyI","ш","Ш","i","I"],["KeyO","щ","Щ","o","O"],["KeyP","з","З","p","P"],["BracketLeft","х","Х","[","{"],["BracketRight","ъ","Ъ","]","}"],["Backslash","\\","/","\\","|"],["Delete","Del","Del","Del","Del"]],[["CapsLock","CapsLock","CapsLock","CapsLock","CapsLock"],["KeyA","ф","Ф","a","A"],["KeyS","ы","Ы","s","S"],["KeyD","в","В","d","D"],["KeyF","а","А","f","F"],["KeyG","п","П","g","G"],["KeyH","р","Р","h","H"],["KeyJ","о","О","j","J"],["KeyK","л","Л","k","K"],["KeyL","д","Д","l","L"],["Semicolon","ж","Ж",";",":"],["Quote","э","Э","'","'"],["Enter","Enter","Enter","Enter","Enter"]],[["ShiftLeft","Shift","Shift","Shift","Shift"],["KeyZ","я","Я","z","Z"],["KeyX","ч","Ч","x","X"],["KeyC","с","С","c","C"],["KeyV","м","М","v","V"],["KeyB","и","И","b","B"],["KeyN","т","Т","n","N"],["KeyM","ь","Ь","m","M"],["Comma","б","Б",".","<"],["Period","ю","Ю",",",">"],["Slash",".",",","/","?"],["ArrowUp","▲","▲","▲","▲"],["ShiftRight","Shift","Shift","Shift","Shift"]],[["ControlLeft","Ctrl","Ctrl","Ctrl","Ctrl"],["MetaLeft","Win","Win","Win","Win"],["AltLeft","Alt","Alt","Alt","Alt"],["Space"," "," "," "," "],["AltRight","Alt","Alt","Alt","Alt"],["ArrowLeft","◄","◄","◄","◄"],["ArrowDown","▼","▼","▼","▼"],["ArrowRight","►","►","►","►"],["ControlRight","Ctrl","Ctrl","Ctrl","Ctrl"]]],e=["Backspace","Tab","Delete","CapsLock","Enter","ShiftLeft","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"];document.addEventListener("DOMContentLoaded",(function(){var r;Boolean(localStorage.getItem("lang"))?r=localStorage.getItem("lang"):(r="ru",localStorage.setItem("lang","ru"));var n="lowercase",o=document.createElement("div");o.classList.add("_container"),document.body.append(o);var a=document.createElement("textarea");a.classList.add("keyboard__textarea"),a.autofocus=!0,o.append(a),a.addEventListener("blur",(function(t){a.autofocus=!0,t.target.focus()}));var i=document.createElement("div");i.classList.add("keyboard__keys"),o.append(i),function(e,r){for(var n=0;n<t.length;n++){var o=document.createElement("ul");o.classList.add("keyboard__row"),o.setAttribute("id","keyboard__row-".concat(n+1)),document.querySelector(".keyboard__keys").append(o);for(var a=0;a<t[n].length;a++){var i=document.createElement("li");"lowercase"===e&&"ru"===r?i.textContent=t[n][a][1]:"uppercase"===e&&"ru"===r?i.textContent=t[n][a][2]:"lowercase"===e&&"en"===r?i.textContent=t[n][a][3]:"uppercase"===e&&"en"===r&&(i.textContent=t[n][a][4]),i.classList.add("keyboard__key"),i.setAttribute("data-key-name","".concat(t[n][a][0])),o.append(i),i.addEventListener("click",(function(t){l(t.target.dataset.keyName,t.target.textContent)}))}}}(n,r);var c=document.createElement("div");c.classList.add("keyboard__info"),c.innerHTML="<h2>Клавиатура создана в операционной системе Windows </h2> \n  <h2>Для переключения языка комбинация: левыe shift + alt </h2>",o.append(c),document.addEventListener("keydown",(function(t){t.preventDefault(),document.querySelector("li[data-key-name='".concat(t.code,"']")).classList.add("_active"),"ShiftLeft"===t.code&&document.addEventListener("keyup",(function(t){"AltLeft"===t.code&&(r="ru"===r?"en":"ru",localStorage.setItem("lang",r),s(n,r))})),l(t.code,t.key)}));var u=!1;function s(e,r){for(var n=0;n<t.length;n++)for(var o=document.querySelectorAll("#keyboard__row-".concat(n+1," li")),a=0;a<o.length;a++)"lowercase"===e&&"ru"===r?o[a].textContent=t[n][a][1]:"uppercase"===e&&"ru"===r?o[a].textContent=t[n][a][2]:"lowercase"===e&&"en"===r?o[a].textContent=t[n][a][3]:"uppercase"===e&&"en"===r&&(o[a].textContent=t[n][a][4])}function l(t,o){if(c=t,e.includes(c))switch(t){case"CapsLock":s(n="lowercase"===n?"uppercase":"lowercase",r);break;case"Enter":a.value+="\n";break;case"Delete":""!==a.value?(console.log(a.selectionStart),a.value=a.value.slice(0,a.selectionStart)+a.value.slice(a.selectionStart+1)):console.log("!");break;case"Backspace":a.value=a.value.substring(0,a.value.length-1);break;case"Space":a.value+=" ";break;case"Tab":a.value+="    ";break;case"ArrowLeft":0!==a.selectionStart&&(a.selectionStart--,a.selectionEnd=a.selectionStart,console.log(a.selectionStart));break;case"ArrowRight":document.querySelector("textarea"),a.selectionStart++,a.selectionEnd=a.selectionStart}else{var i=a.selectionStart;a.value=a.value.slice(0,a.selectionStart)+o+a.value.slice(a.selectionStart),a.selectionStart=i+1,a.selectionEnd=a.selectionStart}var c}document.addEventListener("keyup",(function(t){"CapsLock"!==t.code||u?(document.querySelector("li[data-key-name='".concat(t.code,"']")).classList.remove("_active"),u=!1):u=!0}))}))})()})();
//# sourceMappingURL=bundle.js.map