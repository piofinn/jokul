(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{KYoB:function(e,t,n){"use strict";n.r(t);n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("5hJT");var r=n("mXGw"),a=n.n(r),o=n("/FXl"),i=n("7XvJ"),l=n("bGYK"),c=n.n(l),u=n("8Jek"),s=n.n(u),d=n("hRC1"),f=n("Abof"),p=n("+P0C"),m=n("nnXn"),h=n("Sj89"),v=n.n(h),b=(n("Z8gF"),n("nsbO"),n("lQyR"),n("YhIr"),n("GkPX"),n("4aJ6"),n("+jjx"),n("ABKx"),n("GmB8"),n("F5Dj"));function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=n.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)t.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}));k.named;function j(e){var t=e.expanded,n=void 0!==t&&t,r=e.className,o=k({"jkl-expand-arrow":!0,"jkl-expand-arrow--expanded":n},r);return a.a.createElement("span",{className:o},a.a.createElement("svg",{className:"jkl-expand-arrow__down",viewBox:"0 0 13 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M6.90762 13.8828L11.9272 8.86326L12.7093 9.64537L6.35463 16L-1.68645e-06 9.64536L0.782101 8.86326L5.80156 13.8827L5.80156 1.01438e-06L6.90762 1.20777e-06L6.90762 13.8828Z",fill:"currentColor"})),a.a.createElement("svg",{className:"jkl-expand-arrow__up",viewBox:"0 0 13 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M5.80163 2.1172L0.78209 7.13674L-1.29938e-05 6.35464L6.35462 5.14415e-08L12.7093 6.35464L11.9272 7.13674L6.90769 2.11728L6.9077 16L5.80163 16L5.80163 2.1172Z",fill:"currentColor"})))}var w=Object(r.forwardRef)((function(e,t){var n=e.id,o=e.label,i=e.items,l=e.className,u=void 0===l?"":l,s=e.inline,d=void 0!==s&&s,f=e.helpLabel,m=e.errorLabel,h=e.variant,v=e.placeholder,y=e.value,w=e.forceCompact,E=e.inverted,_=e.onChange,O=e.onBlur,C=e.onFocus;y||!v&&i.length&&(y=Object(b.b)(i[0]).value);var x=k("jkl-select",u,{"jkl-select--inline":d,"jkl-select--compact":w,"jkl-select--inverted":E,"jkl-select--invalid":!!m}),L=y?void 0:"",D=g(Object(r.useState)(n||"jkl-select-".concat(c()(8))),1)[0];return a.a.createElement("div",{"data-testid":"jkl-select",className:x},a.a.createElement(p.a,{standAlone:!0,htmlFor:D,variant:h,forceCompact:w},o),a.a.createElement("div",{className:"jkl-select__outer-wrapper"},a.a.createElement("select",{ref:t,id:D,value:y,defaultValue:L,className:"jkl-select__button",onChange:_,onBlur:O||_,onFocus:C},v&&!y&&a.a.createElement("option",{disabled:!0,value:""},v),i.map(b.b).map((function(e){return a.a.createElement("option",{"data-testid":"jkl-select__option",className:"jkl-select__option",key:e.value,value:e.value},e.label)}))),a.a.createElement(j,{className:"jkl-select__arrow"})),a.a.createElement(p.c,{helpLabel:f,errorLabel:m,forceCompact:w}))})),E=Object(r.forwardRef)((function(e,t){var n=e.hidden,r=e.extended,o=e.forceCompact,i=e.inverted,l=e.onClickDate,c=e.currentDate,u=e.monthLabel,f=void 0===u?"Måned":u,p=e.yearLabel,m=void 0===p?"År":p,h=e.days,b=e.months,g=e.disableDate,y=s()("jkl-calendar",{"jkl-calendar--hidden":n,"jkl-calendar--extended":r,"jkl-calendar--inverted":i});return a.a.createElement(v.a,{timestamp:c?c.getTime():new Date,months:b,days:h,onDatepickerClickDay:l,disabled:g,forwardRef:t,className:y},a.a.createElement("div",{className:"jkl-calendar__padding"},r&&a.a.createElement("div",{className:"jkl-calendar__navigation"},a.a.createElement(d.b,{inverted:i,label:m,type:"year",className:"jkl-calendar__year-selector",width:"5rem",variant:"small",forceCompact:o}),a.a.createElement(w,{inverted:i,className:"jkl-calendar__month-selector",label:f,items:[],variant:"small",forceCompact:o})),!r&&a.a.createElement("fieldset",{className:"jkl-calendar__month-navigation"},a.a.createElement("button",{title:"forrige måned","aria-label":"forrige måned",className:"jkl-calendar__month-button",value:"- 1 month"},"←"),a.a.createElement("button",{title:"neste måned","aria-label":"neste måned",className:"jkl-calendar__month-button jkl-calendar__month-button--right",value:"+ 1 month"},"→")),a.a.createElement("table",{"data-testid":"jkl-datepicker-calendar"})))}));E.displayName="Calendar";n("hYEA");var _=/^(\d\d)\.(\d\d)\.(\d{4})/;function O(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}function C(e){var t=e.label,n=void 0===t?"Velg dato":t,o=e.placeholder,i=void 0===o?"dd.mm.åååå":o,l=e.calendarButtonTitle,u=e.showCalendarLabel,h=void 0===u?l||"Åpne kalender":u,v=e.hideCalendarLabel,b=void 0===v?l||"Lukk kalender":v,g=e.initialDate,y=e.onChange,k=e.onBlur,j=e.onFocus,w=e.initialShow,C=void 0!==w&&w,x=e.className,L=void 0===x?"":x,D=e.forceCompact,M=e.inverted,S=e.disableBeforeDate,A=e.disableAfterDate,N=e.variant,F=e.helpLabel,T=e.errorLabel,B=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["label","placeholder","calendarButtonTitle","showCalendarLabel","hideCalendarLabel","initialDate","onChange","onBlur","onFocus","initialShow","className","forceCompact","inverted","disableBeforeDate","disableAfterDate","variant","helpLabel","errorLabel"]);var R=Object(r.useState)("jkl-datepicker-"+c()(8))[0],P=Object(r.useState)("jkl-support-label-"+c()(8))[0],V=Object(r.useState)(g),Y=V[0],H=V[1],K=Object(r.useState)(!C),I=K[0],X=K[1],J=Object(r.useState)(g?O(g):""),U=J[0],G=J[1],Z=s()("jkl-datepicker",{"jkl-datepicker--open":!I,"jkl-datepicker--inverted":M},L),q=s()("jkl-datepicker__input-wrapper jkl-text-input__input-wrapper",{"jkl-text-input--compact":D,"jkl-text-input--inverted":M}),Q=Object(r.useRef)(null),W=Object(r.useRef)(null),$=Object(f.a)(!I)[0];Object(f.b)($,(function(){!I&&X(!0)})),Object(f.d)($,["Escape"],(function(){!I&&X(!0),W.current&&W.current.focus()})),Object(r.useEffect)((function(){A&&A.setHours(23,59,59,999);var e=new Date;A&&e>A&&H(A),S&&e<S&&H(S)}),[S,A]),Object(r.useEffect)((function(){G(g?O(g):""),H(g)}),[g]);var z=Object(r.useCallback)((function(){return X(!I)}),[I]);Object(r.useEffect)((function(){var e=W.current;return e&&e.addEventListener("click",z),function(){e&&e.removeEventListener("click",z)}}),[z]);var ee=function(e){var t=Q.current&&Q.current.contains(e.relatedTarget);k&&!t&&k(Y)},te=function(e){var t=Q.current&&Q.current.contains(e.relatedTarget);j&&!t&&j(Y)};function ne(e,t){return!(e&&(n=e,r=t,n.getDate()===r.getDate()&&n.getMonth()===r.getMonth()&&n.getFullYear()===r.getFullYear()));var n,r}return a.a.createElement("div",{className:Z,ref:Q},a.a.createElement(p.a,{standAlone:!0,htmlFor:R,variant:N},n),a.a.createElement("div",{className:q},a.a.createElement(d.a,{ref:W,id:R,describedBy:P,invalid:!!T,className:"jkl-datepicker__input jkl-text-input__input","data-testid":"jkl-datepicker__input",value:U,onFocus:te,onBlur:ee,onChange:function(e){var t=e.target.value,n=function(e){var t=_.exec(e);if(t){var n=parseInt(t[1],10),r=parseInt(t[2],10)-1,a=parseInt(t[3],10);return new Date(a,r,n,0,0,0)}}(t);n&&ne(Y,n)?(H(n),y&&y(n)):""===t&&(H(void 0),y&&y(void 0)),G(t)},placeholder:i,width:"11.5rem"}),a.a.createElement(m.a,{className:"jkl-text-input__action-button",iconType:"calendar",buttonTitle:I?h:b,onClick:function(){var e=I;if(X(!I),e){var t=$.current,n=t&&t.querySelector("[autofocus]");n&&setTimeout((function(){return n.focus()}),100)}},onFocus:te,onBlur:ee}),a.a.createElement("div",{className:"jkl-datepicker__calendar-wrapper"},a.a.createElement(E,Object.assign({currentDate:Y,onClickDate:function(e){var t=e.target.date;ne(Y,t)&&(G(O(t)),H(t),y&&y(t)),X(!0),W.current&&W.current.focus()},disableDate:function(e){return A&&e>A||S&&e<S},hidden:I,inverted:M,forceCompact:D,ref:$},B)))),a.a.createElement(p.c,{inverted:M,id:P,helpLabel:F,errorLabel:T}))}var x=function(e){var t=e.boolValues,n=e.choiceValues,r=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,o=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,i=n&&n.Variant,l=function(e){return function(t){return console.log(e,t)}};return a.a.createElement(C,{label:"Velg startdato for forsikringen",extended:t&&t["Utvidet velger"],forceCompact:t&&t.Kompakt,inverted:t&&t.Invertert,variant:i,errorLabel:o,helpLabel:r,onFocus:l("hello from onFocus"),onBlur:l("hello from onBlur"),onChange:l("hello from onChange")})};n.d(t,"_frontmatter",(function(){return L})),n.d(t,"default",(function(){return F}));var L={},D=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},M=D("Ingress"),S=D("ComponentExample"),A={_frontmatter:L},N=i.a;function F(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(N,Object.assign({},A,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(M,{mdxType:"Ingress"},'Vi bruker datovelgeren til å gi brukerne mulighet til å skrive inn eller velge en dato. Ledeteksten beskriver hvilken dato brukeren skal fylle inn, for eksempel: "Oppgi datoen da skaden skjedde".'),Object(o.b)(S,{component:x,knobs:{boolProps:["Utvidet velger","Kompakt","Med feil","Med hjelpetekst","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(o.b)("h2",null,"Typer og bruk"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Enkel datovelger:")," Når brukeren skal velge en dato, som er nær dagens dato."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Utvidet datovelger:")," Når brukeren skal velge en dato som ligger mer enn ett år frem eller tilbake i tid."),Object(o.b)("p",null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato.\nEksempel: "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),Object(o.b)("h2",null,"Tekst og validering"),Object(o.b)("p",null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),Object(o.b)("p",null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),Object(o.b)("p",null,'Eksempel:\nHjelpetekst for første kalender i en periode:\n"Velg datoen da du først ble syk". Feilmelding: "Du må velge datoen da du først ble syk."'))}F.isMDXComponent=!0},Sj89:function(e,t,n){"use strict";(function(t){n("GkPX"),n("asZ9"),n("75LO"),n("9ovy"),n("e2Kn"),n("Z8gF"),n("W1QL"),n("K/PF"),n("lQyR"),n("zx98"),n("4aJ6"),n("t91x"),n("LXYL"),n("1qKx");var r,a=(r=n("mXGw"))&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,n){return(s=u()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&c(a,n.prototype),a}).apply(null,arguments)}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return s(e,arguments,l(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,e)})(e)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p="undefined"!=typeof window;p&&/(android)/i.test(navigator.userAgent),p&&/iPad|iPhone|iPod/.test(String(navigator.platform));p||t.HTMLElement||(t.HTMLElement=function(){return function e(){o(this,e)}}());var m,h,v=(m="undefined"==typeof window?{}:window.Element.prototype,h=m.matches||m.msMatchesSelector||m.webkitMatchesSelector,m.closest?function(e,t){return e.closest(t)}:function(e,t){for(e.correspondingUseElement&&(e=e.correspondingUseElement);e;e=e.parentElement)if(h.call(e,t))return e;return null});function b(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="prevent_recursive_dispatch_maximum_callstack".concat(t);if(e[a])return!0;e[a]=!0,"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{bubbles:!0,cancelable:!0,detail:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,r);var o=e.dispatchEvent(n);return e[a]=null,o}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;if(e){if(e.nodeType)return[e];if("string"==typeof e)return[].slice.call(t.querySelectorAll(e));if(e.length)return[].slice.call(e)}return[]}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var y=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var n,r,a,o;e.exports=(n={year:"FullYear",month:"Month",week:"Date",day:"Date",hour:"Hours",minute:"Minutes",second:"Seconds"},r=/([+-]\s*\d+)\s*(second|minute|hour|day|week|month|year)|(mon)|(tue)|(wed)|(thu)|(fri)|(sat)|(sun)/g,a=/([-\dy]+)[-/.]([\dm]+)[-/.]([\dd]+)/,o=/([\dh]+):([\dm]+):?([\ds]+)?/,function(e,t){if(isFinite(e))return new Date(Number(e));var i=String(e).toLowerCase(),l=new Date(isFinite(t)&&-1===i.indexOf("now")?Number(t):Date.now()),c=i.match(a)||[],u=c[1];void 0===u&&(u="y");var s=c[2];void 0===s&&(s="m");var d=c[3];void 0===d&&(d="d");var f=i.match(o)||[],p=f[1];void 0===p&&(p="h");var m=f[2];void 0===m&&(m="m");var h=f[3];void 0===h&&(h="s");var v={year:u,month:s,day:d,hour:p,minute:m,second:h};Object.keys(v).forEach((function(e){var t="month"===e?1:0,r=String(l["get"+n[e]]()+t);v[e]=v[e].replace(/[^-\d]+/g,(function(e,t,n){return t?r.substr(r.length-n.length+t,e.length):r.substr(0,Math.max(0,r.length-n.length+e.length))}))-t}));var b=new Date(v.year,Math.min(12,v.month+1),0).getDate();for(l.setFullYear(v.year,Math.min(11,v.month),Math.max(1,Math.min(b,v.day))),l.setHours(Math.min(24,v.hour),Math.min(59,v.minute),Math.min(59,v.second));null!==(v=r.exec(i));){var g=v[2],y=String(v[1]).replace(/\s/g,"")*("week"===g?7:1),k=v.slice(2).indexOf(v[0]),j=l.getDate();g?l["set"+n[g]](l["get"+n[g]]()+y):l.setDate(l.getDate()-(l.getDay()||7)+k),"month"!==g&&"year"!==g||j===l.getDate()||l.setDate(0)}return l})})),k={year:"*-m-d",month:"y-*-d",day:"y-m-*",hour:"*:m",minute:"h:*",second:"h:m:*",timestamp:"*",null:"*"},j={33:"-1month",34:"+1month",35:"y-m-99",36:"y-m-1",37:"-1day",38:"-1week",39:"+1day",40:"+1week"},w=function(e){function t(){return o(this,t),f(this,l(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,a=[{key:"observedAttributes",get:function(){return["timestamp","months","days"]}}],(r=[{key:"connectedCallback",value:function(){var e,t,n,r,a=this;this._date=this.date,document.addEventListener("click",this),document.addEventListener("change",this),document.addEventListener("keydown",this),setTimeout((function(){return a.attributeChangedCallback()})),e=this.nodeName,t="".concat(this.nodeName,"{display:block}"),n="style-".concat(e.toLowerCase()),r=t.replace(/\/\*[^!][^*]*\*\//g,"").replace(/\s*(^|[:;,{}]|$)\s*/g,"$1"),document.getElementById(n)||document.head.insertAdjacentHTML("afterbegin",'<style id="'.concat(n,'">').concat(r,"</style>"))}},{key:"disconnectedCallback",value:function(){this._date=this._disabled=null,document.removeEventListener("click",this),document.removeEventListener("change",this),document.removeEventListener("keydown",this)}},{key:"attributeChangedCallback",value:function(){if(this._date){if(this.disabled(this.date)&&!this.disabled(this._date))return this.date=this._date;this.diff(this.date)&&b(this,"datepicker.change",this._date=this.date),_("button",this,O),_("select",this,L),_("input",this,C),_("table",this,x)}}},{key:"handleEvent",value:function(e){if(!(e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||"keydown"===e.type&&!j[e.keyCode])&&(this.contains(e.target)||v(e.target,'[for="'.concat(this.id,'"]'))))if("change"===e.type)this.date=k[e.target.getAttribute("data-type")].replace("*",e.target.value);else if("click"===e.type){var t=v(e.target,"button[value]"),n=v(e.target,"table");t&&(this.date=t.value),t&&n&&b(this,"datepicker.click.day")}else"keydown"===e.type&&v(e.target,"table")&&(this.date=j[e.keyCode],this.querySelector("[autofocus]").focus(),e.preventDefault())}},{key:"diff",value:function(e){return this.parse(e).getTime()-this.timestamp}},{key:"parse",value:function(e,t){return y(e,t||this._date)}},{key:"disabled",get:function(){return this._disabled||Function.prototype},set:function(e){var t=this;this._disabled="function"==typeof e?function(n){return e(t.parse(n),t)}:function(){return e},this.attributeChangedCallback()}},{key:"timestamp",get:function(){return String(this._date.getTime())}},{key:"year",get:function(){return String(this._date.getFullYear())}},{key:"month",get:function(){return E(this._date.getMonth()+1)}},{key:"day",get:function(){return E(this._date.getDate())}},{key:"hour",get:function(){return E(this._date.getHours())}},{key:"minute",get:function(){return E(this._date.getMinutes())}},{key:"second",get:function(){return E(this._date.getSeconds())}},{key:"date",get:function(){return y(this.getAttribute("timestamp")||this._date||Date.now())},set:function(e){return this.setAttribute("timestamp",this.parse(e).getTime())}},{key:"months",set:function(e){this.setAttribute("months",[].concat(e).join(","))},get:function(){return(this.getAttribute("months")||"januar,februar,mars,april,mai,juni,juli,august,september,oktober,november,desember").split(/\s*,\s*/)}},{key:"days",set:function(e){this.setAttribute("days",[].concat(e).join(","))},get:function(){return(this.getAttribute("days")||"man,tirs,ons,tors,fre,lør,søn").split(/\s*,\s*/)}}])&&i(n.prototype,r),a&&i(n,a),t}(d(HTMLElement)),E=function(e){return"0".concat(e).slice(-2)},_=function(e,t,n){return[].forEach.call(document.getElementsByTagName(e),(function(e){(t.contains(e)||t.id===e.getAttribute(t.external))&&n(t,e)}))};function O(e,t){t.value&&(t.type="button",t.disabled=e.disabled(t.value))}function C(e,t){var n=t.getAttribute("data-type")||t.getAttribute("type");"radio"===n||"checkbox"===n?(t.disabled=e.disabled(t.value),t.checked=!e.diff(t.value)):k[n]&&(t.setAttribute("type","number"),t.setAttribute("data-type",n),t.value=e[n])}function x(e,t){t.firstElementChild||(t.innerHTML="\n    <caption></caption><thead><tr>".concat(Array(8).join("</th><th>"),"</tr></thead>\n    <tbody>").concat(Array(7).join("<tr>".concat(Array(8).join('<td><button type="button"></button></td>'),"</tr>")),"</tbody>"));var n=new Date,r=e.date.getMonth(),a=e.parse("y-m-1 mon");t.caption.textContent="".concat(e.months[r],", ").concat(e.year),g("th",t).forEach((function(t,n){return t.textContent=e.days[n]})),g("button",t).forEach((function(t){var o=!e.diff(a),i=a.getDate(),l=a.getMonth();t.textContent=i,t.value="".concat(a.getFullYear(),"-").concat(l+1,"-").concat(i),t.disabled=e.disabled(a),t.tabIndex=o-1,t.setAttribute("data-adjacent",r!==l),t.setAttribute("aria-label","".concat(i,". ").concat(e.months[l])),t.setAttribute("aria-current",a.getDate()===n.getDate()&&a.getMonth()===n.getMonth()&&a.getFullYear()===n.getFullYear()&&"date"),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!this.hasAttribute(t);!n===e.hasAttribute(t)&&e[n?"setAttribute":"removeAttribute"](t,"")}(t,"autofocus",o),a.setDate(i+1)}))}function L(e,t){t.firstElementChild||(t._autofill=!0,t.innerHTML=e.months.map((function(e,t){return'<option value="y-'.concat(t+1,'-d"></option>')})).join("")),g(t.children).forEach((function(n,r){t._autofill&&(n.textContent=e.months[r]),n.disabled=e.disabled(n.value),n.selected=!e.diff(n.value)}))}var D=function(){var e="undefined"==typeof window?{}:window.Element.prototype,t=e.matches||e.msMatchesSelector||e.webkitMatchesSelector;return e.closest?function(e,t){return e.closest(t)}:function(e,n){for(;e;e=e.parentElement)if(t.call(e,n))return e;return null}}();var M=function(e,t){void 0===t&&(t={});var n=(e.name||String(e).match(/function ([^(]+)/)[1]).replace(/.[A-Z]/g,(function(e){return e[0]+"-"+e[1]})),r=t.props||[],o=t.customEvents||[],i=o.reduce((function(e,t){return e[t]="on"+t.replace(/(^|\.)./g,(function(e){return e.slice(-1).toUpperCase()})),e}),{}),l=r.concat("forwardRef",Object.keys(i).map((function(e){return i[e]}))),c=(n+"-"+(t.suffix||"react")).replace(/\W+/g,"-").toLowerCase();return function(t){function n(e){var n=this;t.call(this,e),this.ref=function(e){return"function"==typeof n.props.forwardRef?n.props.forwardRef(e):n.props.forwardRef&&(n.props.forwardRef.current=e),n.el=e},Object.keys(i).forEach((function(e){var t=i[e];n[e]=function(e){n.props[t]&&D(e.target,n.el.nodeName)===n.el&&n.props[t](e)}}))}return t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n,n.prototype.componentDidMount=function(){var t=this;window.customElements.get(c)||window.customElements.define(c,e),r.forEach((function(e){e in t.props&&(t.el[e]=t.props[e])})),o.forEach((function(e){t.el.addEventListener(e,t[e])}))},n.prototype.componentDidUpdate=function(e){var t=this;r.forEach((function(n){e[n]!==t.props[n]&&(t.el[n]=t.props[n])}))},n.prototype.componentWillUnmount=function(){var e=this;o.forEach((function(t){e.el.removeEventListener(t,e[t])}))},n.prototype.render=function(){var e=this;return a.createElement(c,Object.keys(this.props).reduce((function(t,n){return-1===l.indexOf(n)&&("className"===n?t.class=e.props[n]:!0===e.props[n]?t[n]="":!1!==e.props[n]&&(t[n]=e.props[n])),t}),{ref:this.ref}))},n}(a.Component)}(w,{props:["disabled"],customEvents:["datepicker.change","datepicker.click.day"],suffix:"3.0.8"});e.exports=M}).call(this,n("pCvA"))},cb3D:function(e,t,n){var r=n("Sp5b"),a=n("p1Jl"),o=n("GCOZ");e.exports=function(e,t,n,i){var l=String(o(e)),c=l.length,u=void 0===n?" ":String(n),s=r(t);if(s<=c||""==u)return l;var d=s-c,f=a.call(u,Math.ceil(d/u.length));return f.length>d&&(f=f.slice(0,d)),i?f+l:l+f}},hYEA:function(e,t,n){"use strict";var r=n("X6VK"),a=n("cb3D"),o=n("ROCd"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*i,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},p1Jl:function(e,t,n){"use strict";var r=n("mvii"),a=n("GCOZ");e.exports=function(e){var t=String(a(this)),n="",o=r(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}}}]);
//# sourceMappingURL=component---packages-datepicker-react-documentation-datepicker-mdx-e90792296054e64c3b3e.js.map