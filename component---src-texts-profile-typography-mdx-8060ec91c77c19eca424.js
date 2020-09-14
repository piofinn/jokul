(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"+P0C":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var l=r("8VmE"),n=r.n(l),a=r("RiSW"),s=r.n(a),i=r("mXGw"),o=r.n(i),m=r("8Jek"),c=r.n(m);r("OvAC");function k(e,t,r){return function(l){var a=l.children,i=l.className,m=s()(l,["children","className"]);(r||e).replace(/^\w/,(function(e){return e.toUpperCase()}));var c=e;return o.a.createElement(c,n()({className:"".concat(t," ").concat(i||"")},m),a)}}k("h1","jkl-title-large"),k("h2","jkl-title-small"),k("h3","jkl-heading-large"),k("h4","jkl-heading-medium"),k("h5","jkl-heading-small"),k("p","jkl-lead","lead"),k("p","jkl-body","body"),k("p","jkl-small","small"),k("p","jkl-micro","micro");var d=function(e){var t=e.id,r=e.helpLabel,l=e.errorLabel,n=e.forceCompact,a=e.className,s=e.srOnly,i=e.inverted,m=c()("jkl-form-support-label",a,{"jkl-form-support-label--compact":n,"jkl-form-support-label--error":l,"jkl-form-support-label--help":!l,"jkl-form-support-label--sr-only":s,"jkl-form-support-label--inverted":i});return l||r?o.a.createElement("span",{id:t,className:m},l||r):null}},idJN:function(e,t,r){},pxlF:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return j})),r.d(t,"default",(function(){return E}));var l,n=r("+I+c"),a=r("mXGw"),s=r.n(a),i=r("/FXl"),o=r("7XvJ"),m=r("+P0C"),c=r("8Jek"),k=r.n(c),d=function(e){var t=e.children,r=e.pressed,l=e.onClick,n=e.className,a=e.disabled,i=e.inverted,o=e.helpLabel,c=k()("jkl-toggle-switch",n,{"jkl-toggle-switch--inverted":i});return s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{type:"button","aria-pressed":!!r,disabled:a,className:c,onClick:l},s.a.createElement("span",{className:"jkl-toggle-switch__slider"},s.a.createElement("span",{className:"jkl-toggle-switch__expanding-pill"})),t),o&&s.a.createElement(m.a,{className:"jkl-toggle-switch__help-label",helpLabel:o}))},p=(r("idJN"),function(){return s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"jkl-typography-table__header"},"Stilnavn"),s.a.createElement("th",{className:"jkl-typography-table__header"},"Vekt"),s.a.createElement("th",{className:"jkl-typography-table__header"},"Størrelse"),s.a.createElement("th",{className:"jkl-typography-table__header"},"Linjeavstand")))}),u=function(e){var t=e.title,r=e.children;return s.a.createElement("td",{className:"jkl-typography-table__data","data-rowtitle":t},s.a.createElement("p",{className:"jkl-small"},r))},g=function(e){var t=e.level,r=function(e,t){var r,l;return e&&(null===(r=window)||void 0===r||null===(l=r.getComputedStyle(e))||void 0===l?void 0:l.getPropertyValue(t))||"N/A"},l=Object(a.useState)("N/A"),n=l[0],i=l[1],o=Object(a.useState)("N/A"),m=o[0],c=o[1],k=Object(a.useState)("N/A"),d=k[0],p=k[1];return s.a.createElement("tr",{className:"jkl-typography-table__row"},s.a.createElement("td",{className:"jkl-typography-table__data"},s.a.createElement("p",{className:"jkl-"+t.toLowerCase().replace(/ /g,"-"),ref:function(e){i(r(e,"font-weight")),c(r(e,"font-size")),p(r(e,"line-height"))}},t)),s.a.createElement(u,{title:"Vekt"},n),s.a.createElement(u,{title:"Størrelse"},m),s.a.createElement(u,{title:"Linjeavstand"},d))},b=["Title large","Title small","Heading large","Heading medium","Heading small","Lead","Body","Small","Micro"],f=function(){var e=Object(a.useState)(!1),t=e[0],r=e[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("table",Object.assign({className:"jkl-typography-table jkl-spacing--top-2"},t?{"data-compactlayout":!0}:{}),s.a.createElement(p,null),s.a.createElement("tbody",null,b.map((function(e){return s.a.createElement(g,{key:e,level:e})})))),s.a.createElement(d,{className:"jkl-spacing--top-3",pressed:t,onClick:function(){return r(!t)}},"Kompakt"))},j={},h=(l="Ingress",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),v={_frontmatter:j},y=o.a;function E(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)(y,Object.assign({},v,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Typografi"),Object(i.b)(h,{mdxType:"Ingress"},"Typografi er et profilbærende element i løsningene vi lager. Vi bruker stor og tydelig typografi som grafisk element, i stedet for illustrasjoner og ikoner. Vær modig når du bruker typografi som virkemiddel i våre løsninger."),Object(i.b)("h2",null,"Skrifttype"),Object(i.b)("p",null,"Vi har vår egen skrifttype: Fremtind Grotesk. Den finnes i snittene Regular, Bold, Display og Mono. Vi bruker\nhovedsakelig Regular og Bold. Som erstatningsfont bruker vi Calibri Light. Ikke bruk andre skrifttyper når du designer løsninger\nfor Fremtind."),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/fremtind/jokul/tree/master/packages/webfonts/fonts"}),"Last ned Fremtind Grotesk ↓")),Object(i.b)("h2",null,"Typografisk skala"),Object(i.b)("p",null,"Vi har to typografiske skalaer. En som er ment for desktop-visning\nog en som er egnet for kompakte og mobile løsninger. I samme grensesnitt skal man ikke blande, men bruke bare stiler fra\nen skala."),Object(i.b)(f,{mdxType:"Example"}),Object(i.b)("h2",null,"Overskrifter"),Object(i.b)("p",null,"De ulike overskriftsnivåene skaper et informasjonshierarki. Mindre overskrifter er underordnet de som er større. Bruk de store overskriftene så ofte som mulig, og unngå flere enn tre overskriftsstiler på samme side. Når du lager en overskrift, må du også tenke på at den skal være enkel å skanne. Bruk godt og enkelt språk. En god overskrift er en kort setning, uten komma, punktum, bindestrek eller semikolon."),Object(i.b)("h2",null,"Mengdetekst"),Object(i.b)("p",null,"Vi har fire stiler for mengdetekst: Lead er til kortere tekster. Den bruker vi som ingress eller når innholdet er kort og vi vil gi det fokus. Når vi setter Lead sammen med en overskrift, bør vi bruke H1 eller H2, for å sikre god kontrast. Body er hovedstilen for brødtekst. Den bruker vi alltid, så sant det ikke finnes spesielle grunner til å velge noe annet. Body Small er en alternativ brødtekst. Den kan vi bruke hvis vi må ha en mer kompakt stil. Small er den minste skriftstilen vår. Den bruker vi når vi vil spare plass, for eksempel i tabeller eller interne applikasjoner. Vi kan også bruke den i bilde- og figurtekster."),Object(i.b)("h2",null,"Linjelengde"),Object(i.b)("p",null,"Innhold blir lettest å lese hvis linjelengden er mellom 45 og 75 tegn. Unngå å ha over 80 tegn per linje. For korte linjer skaper også problemer, for da må blikket skifte linje for ofte og det bryter leserytmen."))}E.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-profile-typography-mdx-8060ec91c77c19eca424.js.map