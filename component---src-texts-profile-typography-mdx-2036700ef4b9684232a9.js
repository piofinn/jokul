(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"+P0C":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("Qvie"),r("yvkl"),r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("1c7q");var n=r("mXGw"),l=r.n(n);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function s(e,t,r){return function(n){var s=n.children,i=n.className,c=o(n,["children","className"]);(r||e).replace(/^\w/,(function(e){return e.toUpperCase()}));var p=e;return l.a.createElement(p,a({className:"".concat(t," ").concat(i||"")},c),s)}}s("h1","jkl-title-large"),s("h2","jkl-title-small"),s("h3","jkl-heading-large"),s("h4","jkl-heading-medium"),s("h5","jkl-heading-small"),s("p","jkl-lead","lead"),s("p","jkl-body","body"),s("p","jkl-small","small"),s("p","jkl-micro","micro");var i=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)&&l.length){var o=r.apply(null,l);o&&e.push(o)}else if("object"===a)for(var s in l)t.call(l,s)&&l[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),c=(i.named,function(e){var t=e.id,r=e.helpLabel,n=e.errorLabel,a=e.forceCompact,o=e.className,s=e.srOnly,c=e.inverted,p=i("jkl-form-support-label",o,{"jkl-form-support-label--compact":a,"jkl-form-support-label--error":n,"jkl-form-support-label--help":!n,"jkl-form-support-label--sr-only":s,"jkl-form-support-label--inverted":c});return n||r?l.a.createElement("span",{id:t,className:p},n||r):null})},idJN:function(e,t,r){},pxlF:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return b})),r.d(t,"default",(function(){return j}));r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("1c7q");var n=r("mXGw"),l=r.n(n),a=r("/FXl"),o=r("7XvJ"),s=r("+P0C");var i=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var a=typeof l;if("string"===a||"number"===a)e.push(l);else if(Array.isArray(l)&&l.length){var o=r.apply(null,l);o&&e.push(o)}else if("object"===a)for(var s in l)t.call(l,s)&&l[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),c=(i.named,function(e){var t=e.children,r=e.pressed,n=e.onClick,a=e.className,o=e.disabled,c=e.inverted,p=e.helpLabel,u=i("jkl-toggle-switch",a,{"jkl-toggle-switch--inverted":c});return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button","aria-pressed":!!r,disabled:o,className:u,onClick:n},l.a.createElement("span",{className:"jkl-toggle-switch__slider"},l.a.createElement("span",{className:"jkl-toggle-switch__expanding-pill"})),t),p&&l.a.createElement(s.a,{className:"jkl-toggle-switch__help-label",helpLabel:p}))}),p=(r("idJN"),function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"jkl-typography-table__header"},"Stilnavn"),l.a.createElement("th",{className:"jkl-typography-table__header"},"Vekt"),l.a.createElement("th",{className:"jkl-typography-table__header"},"Størrelse"),l.a.createElement("th",{className:"jkl-typography-table__header"},"Linjeavstand")))}),u=(r("Qvie"),function(e){var t=e.title,r=e.children;return l.a.createElement("td",{className:"jkl-typography-table__data","data-rowtitle":t},l.a.createElement("p",{className:"jkl-small"},r))}),m=function(e){var t=e.level,r=function(e,t){var r,n;return e&&(null===(r=window)||void 0===r||null===(n=r.getComputedStyle(e))||void 0===n?void 0:n.getPropertyValue(t))||"N/A"},a=Object(n.useState)("N/A"),o=a[0],s=a[1],i=Object(n.useState)("N/A"),c=i[0],p=i[1],m=Object(n.useState)("N/A"),d=m[0],k=m[1];return l.a.createElement("tr",{className:"jkl-typography-table__row"},l.a.createElement("td",{className:"jkl-typography-table__data"},l.a.createElement("p",{className:"jkl-"+t.toLowerCase().replace(/ /g,"-"),ref:function(e){s(r(e,"font-weight")),p(r(e,"font-size")),k(r(e,"line-height"))}},t)),l.a.createElement(u,{title:"Vekt"},o),l.a.createElement(u,{title:"Størrelse"},c),l.a.createElement(u,{title:"Linjeavstand"},d))},d=["Title large","Title small","Heading large","Heading medium","Heading small","Lead","Body","Small","Micro"],k=function(){var e=Object(n.useState)(!1),t=e[0],r=e[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",Object.assign({className:"jkl-typography-table jkl-spacing--top-2"},t?{"data-compactlayout":!0}:{}),l.a.createElement(p,null),l.a.createElement("tbody",null,d.map((function(e){return l.a.createElement(m,{key:e,level:e})})))),l.a.createElement(c,{className:"jkl-spacing--top-3",pressed:t,onClick:function(){return r(!t)}},"Kompakt"))};var f,b={},g=(f="Ingress",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),v={_frontmatter:b},h=o.a;function j(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,["components"]);return Object(a.b)(h,Object.assign({},v,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Typografi"),Object(a.b)(g,{mdxType:"Ingress"},"Typografi er et profilbærende element i løsningene vi lager. Vi bruker stor og tydelig typografi som grafisk element, i stedet for illustrasjoner og ikoner. Vær modig når du bruker typografi som virkemiddel i våre løsninger."),Object(a.b)("h2",null,"Skrifttype"),Object(a.b)("p",null,"Vi har vår egen skrifttype: Fremtind Grotesk. Den finnes i snittene Regular, Bold, Display og Mono. Vi bruker\nhovedsakelig Regular og Bold. Som erstatningsfont bruker vi Calibri Light. Ikke bruk andre skrifttyper når du designer løsninger\nfor Fremtind."),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/fremtind/jokul/tree/master/packages/webfonts/fonts"}),"Last ned Fremtind Grotesk ↓")),Object(a.b)("h2",null,"Typografisk skala"),Object(a.b)("p",null,"Vi har to typografiske skalaer. En som er ment for desktop-visning\nog en som er egnet for kompakte og mobile løsninger. I samme grensesnitt skal man ikke blande, men bruke bare stiler fra\nen skala."),Object(a.b)(k,{mdxType:"Example"}),Object(a.b)("h2",null,"Overskrifter"),Object(a.b)("p",null,"De ulike overskriftsnivåene skaper et informasjonshierarki. Mindre overskrifter er underordnet de som er større. Bruk de store overskriftene så ofte som mulig, og unngå flere enn tre overskriftsstiler på samme side. Når du lager en overskrift, må du også tenke på at den skal være enkel å skanne. Bruk godt og enkelt språk. En god overskrift er en kort setning, uten komma, punktum, bindestrek eller semikolon."),Object(a.b)("h2",null,"Mengdetekst"),Object(a.b)("p",null,"Vi har fire stiler for mengdetekst: Lead er til kortere tekster. Den bruker vi som ingress eller når innholdet er kort og vi vil gi det fokus. Når vi setter Lead sammen med en overskrift, bør vi bruke H1 eller H2, for å sikre god kontrast. Body er hovedstilen for brødtekst. Den bruker vi alltid, så sant det ikke finnes spesielle grunner til å velge noe annet. Body Small er en alternativ brødtekst. Den kan vi bruke hvis vi må ha en mer kompakt stil. Small er den minste skriftstilen vår. Den bruker vi når vi vil spare plass, for eksempel i tabeller eller interne applikasjoner. Vi kan også bruke den i bilde- og figurtekster."),Object(a.b)("h2",null,"Linjelengde"),Object(a.b)("p",null,"Innhold blir lettest å lese hvis linjelengden er mellom 45 og 75 tegn. Unngå å ha over 80 tegn per linje. For korte linjer skaper også problemer, for da må blikket skifte linje for ofte og det bryter leserytmen."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-profile-typography-mdx-2036700ef4b9684232a9.js.map