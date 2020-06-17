(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{maz1:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return k}));t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("1c7q"),t("mXGw");var r=t("/FXl"),a=t("7XvJ");var l={},i={_frontmatter:l},o=a.a;function k(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(o,Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Slik skriver du kode til Jøkul"),Object(r.b)("p",null,"Jøkul er et designsystem: Et bibliotek med komponenter. Det gir litt andre utfordringer enn når du driver med klientutvikling. Her får du en liten innføring i hvordan vi jobber med Jøkul. Jøkul blir brukt til å utvikle mange forskjellige løsninger, og må derfor dekke forskjellige behov og ønsker. Det er viktig at vi balanserer funksjonalitet, brukervennlighet, pakkestørrelse og kompleksitet i hver enkelt komponent."),Object(r.b)("h2",null,"Dette bruker vi"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Språk: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://www.typescriptlang.org/docs/home.html"}),"Typescript")),Object(r.b)("li",{parentName:"ul"},"JS-rammeverk: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://reactjs.org/"}),"React")),Object(r.b)("li",{parentName:"ul"},"Byggverktøy: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://rollupjs.org/guide/en/"}),"Rollup")," og ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://gulpjs.com/"}),"Gulp")),Object(r.b)("li",{parentName:"ul"},"Test runner: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://jestjs.io/"}),"Jest")),Object(r.b)("li",{parentName:"ul"},"Testrammeverk: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://testing-library.com/docs/react-testing-library/intro"}),"React Testing Library")),Object(r.b)("li",{parentName:"ul"},"CSS-preprosessor: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://sass-lang.com/"}),"Sass")),Object(r.b)("li",{parentName:"ul"},"CSS-metodikk: ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"http://getbem.com"}),"BEM"))),Object(r.b)("h2",null,"Slik setter du opp utviklingsmiljøet på din egen maskin"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Klon eller fork ",Object(r.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/fremtind/jokul"}),"Jøkul-biblioteket")," fra GitHub."),Object(r.b)("li",{parentName:"ol"},"Lag en ny branch og gi den et fornuftig navn etter hva du skal lage."),Object(r.b)("li",{parentName:"ol"},"Bygg prosjektet med kommandoene ",Object(r.b)("inlineCode",{parentName:"li"},"yarn")," og ",Object(r.b)("inlineCode",{parentName:"li"},"yarn build")," fra rot i prosjektet.")),Object(r.b)("h2",null,"Slik har vi organisert pakkene"),Object(r.b)("p",null,"Alle komponentene er organisert under ",Object(r.b)("inlineCode",{parentName:"p"},"/packages"),". De som slutter på ",Object(r.b)("inlineCode",{parentName:"p"},"-react")," er React-pakker. De som ikke har en endelse, er stilpakker. Stilpakkene skal være generelle og du kan bruke dem uten noe JavaScript-rammeverk. Hver enkelt pakke inneholder et eksempel, som du kan kan starte med ",Object(r.b)("inlineCode",{parentName:"p"},"yarn dev")," fra hver enkelt pakke. Noen av stilpakkene mangler eksempler, fordi det kreves en del JavaScript for å få eksempelet til å kjøre. ",Object(r.b)("inlineCode",{parentName:"p"},"Select")," og ",Object(r.b)("inlineCode",{parentName:"p"},"Datepicker")," er eksempler på dette."),Object(r.b)("h2",null,"Slik lager du en ny pakke"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Gå til rot og kjør kommandoen ",Object(r.b)("inlineCode",{parentName:"li"},"lerna create <pakke-navn>"),"."),Object(r.b)("li",{parentName:"ol"},"Du får noen spørsmål om pakken. Fyll ut så godt du kan. Husk at navnet på pakken skal starte med ",Object(r.b)("inlineCode",{parentName:"li"},"@fremtind/jkl-"),"."),Object(r.b)("li",{parentName:"ol"},"Når pakken er opprettet, finner du en pakke av typen du skal lage (stil eller React). Kopier de script- og oppsettfilene du trenger, for eksempel ",Object(r.b)("inlineCode",{parentName:"li"},"tsconfig-for-declarations.json")," for React-pakker eller ",Object(r.b)("inlineCode",{parentName:"li"},"gulpfile.js")," for stilpakker.")),Object(r.b)("h2",null,"Slik lenker du pakker sammen"),Object(r.b)("p",null,"Hvis du vil legge til en pakke i en annen, kan du fra hvor som helst i prosjektet kjøre ",Object(r.b)("inlineCode",{parentName:"p"},"lerna add <pakke-som-skal-legges-til> --scope=<pakken-den-skal-inn-i>"),". For eksempel vil ",Object(r.b)("inlineCode",{parentName:"p"},"lerna add @fremtind/jkl-core scope=@fremtind/jkl-button")," legge til ",Object(r.b)("inlineCode",{parentName:"p"},"jkl-core")," som en avhengighet i ",Object(r.b)("inlineCode",{parentName:"p"},"jkl-button"),"-pakken. Når du legger til avhengigheter på denne måten, kan Lerna bruke den lokale versjonen av ",Object(r.b)("inlineCode",{parentName:"p"},"jkl-core")," i stedet for å laste ned fra NPM, slik at du kan utvikle raskere. Dette fungerer bare for andre pakker i Jøkul."),Object(r.b)("h2",null,"Slik legger du til en avhengighet"),Object(r.b)("p",null,"Det finnes avhengigheter på ulike nivåer i Jøkul. Globale avhengigheter, for eksempel de som trengs til å kjøre en byggejobb, ligger på rotnivå. Du kan legge til en ny pakke på rotnivå, med kommandoen ",Object(r.b)("inlineCode",{parentName:"p"},"yarn add pakke -W"),". For å legge til som en utviklingsavhengighet bruker du ",Object(r.b)("inlineCode",{parentName:"p"},"-DW"),"."),Object(r.b)("p",null,'Lokale avhengigheter, som trengs for at en pakke skal fungere i bruk, legger vi vanligvis på pakkenivå. Se "Slik lenker du pakker sammen". Bruk kommandoen ',Object(r.b)("inlineCode",{parentName:"p"},"yarn add")," for å legge til pakker som ikke er en del av Jøkul. Før du gjør det, er det lurt å tenke på om de skal sendes med komponenten eller om brukeren av komponenten har ansvaret for å ha avhengigheten i sitt prosjekt. React bør for eksempel være en ",Object(r.b)("inlineCode",{parentName:"p"},"peerDependency"),", slik at brukeren ikke ender opp med flere utgaver av React i sin pakke."),Object(r.b)("h2",null,"Ende til ende tester"),Object(r.b)("p",null,"Hvis du lager en ny komponent, så kan du installere Cypress lokalt og utvikle ny integrasjons- og visuell regresjonstest av komponenten din."),Object(r.b)("p",null,"Hvis du gjør endring i en komponent som har visuell regresjonstest, sørg for at endringen din er ønsket og forventet på alle støttede plattformer. Så sletter du de eksisterende snapshotene av komponenten i prosjektet."),Object(r.b)("p",null,"Grunnen til at vi ikke vil ha lokale snapshots inn, er fordi vi ønsker at konteineren som kjører testene på vår CI server er fastiten. Den vil ikke rendere 100% likt som din maskin, så får å unngå konflikter lar vi CI serveren styre. Den vil commite inn de nye eller oppdaterte snapshotene hvis testene passerer."))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-getstarted-code-guide-mdx-5dc0bc46910c36db1271.js.map