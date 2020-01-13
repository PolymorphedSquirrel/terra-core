(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{2014:function(e,t,a){"use strict";a.r(t),t.default="# Terra Doc Template Upgrade Guide\n\n## Changes from version 1 to version 2\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-doc-template-v1-examples-header-border-bottom | --terra-doc-template-examples-header-border-bottom |\n| --terra-doc-template-v1-examples-header-color | --terra-doc-template-examples-header-color |\n| --terra-doc-template-v1-examples-header-text-shadow | --terra-doc-template-examples-header-text-shadow |\n| --terra-doc-template-v1-doc-card-background-color | --terra-doc-template-doc-card-not-empty-background-color |\n| --terra-doc-template-v1-doc-card-border-radius | --terra-doc-template-doc-card-not-empty-border-radius |\n| --terra-doc-template-v1-doc-card-padding-bottom | --terra-doc-template-doc-card-not-empty-padding-bottom |\n| --terra-doc-template-v1-doc-card-padding-left | --terra-doc-template-doc-card-not-empty-padding-left |\n| --terra-doc-template-v1-doc-card-padding-right | --terra-doc-template-doc-card-not-empty-padding-right |\n| --terra-doc-template-v1-doc-card-padding-top | --terra-doc-template-doc-card-not-empty-padding-top |\n| --terra-doc-template-v1-header-background-color | --terra-doc-template-header-background-color |\n| --terra-doc-template-v1-content-background-color | --terra-doc-template-content-background-color |\n| --terra-doc-template-v1-footer-background-color | --terra-doc-template-footer-background-color |\n"},2973:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(0)),r=l(a(841)),n=l(a(2014));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return o.default.createElement(r.default,{packageName:"terra-doc-template",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-doc-template",readme:n.default})};t.default=c},839:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(0)),r=l(a(4)),n=l(a(840));function l(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(n.default),d=function(e){var t=e.packageName,a=e.packageUrl,r=e.packageVersion;return r?o.default.createElement("div",{className:c("badge-container")},o.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},o.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),o.default.createElement("span",{className:c("badge-version")},"v".concat(r)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},840:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},841:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a(0)),r=i(a(2)),n=i(a(847)),l=i(a(846)),c=i(a(4)),d=i(a(839)),p=i(a(842)),u=i(a(845));function i(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=c.default.bind(u.default),g={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},b=function(e){var t,a=e.packageName,r=e.packageVersion,c=e.packageUrl,u=e.readme,i=e.srcPath,g=e.examples,b=e.propsTables,_=e.children,h=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=g;b&&(t=b);for(var v=0,x=0;x<y.length;x+=1)y[x].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var k,w=f(["doc-template",h.className]);if(y.length>0){var T=y.length>1?"Examples":"Example";k=o.default.createElement("h1",{className:f("examples-header")},T)}var O=o.default.createElement(d.default,{packageName:a,packageUrl:c,packageVersion:r});return o.default.createElement("div",s({},h,{className:w}),o.default.createElement("div",{className:f("doc-card")},a&&O,u&&o.default.createElement(l.default,{src:u}),i&&o.default.createElement("a",{href:i},"View component source code")),k,y.map((function(e){return o.default.createElement(p.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(n.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),_&&o.default.createElement("div",{className:f("doc-card")},_))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var _=b;t.default=_},842:function(e,t,a){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(0)),n=i(a(2)),l=i(a(848)),c=i(a(849)),d=i(a(4)),p=i(a(843)),u=i(a(844));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function g(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",c.default);var y=d.default.bind(p.default),v={example:n.default.element,exampleSrc:n.default.string,title:n.default.string,description:n.default.node,children:n.default.element},x={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){function t(e){var a,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(a=!(r=b(t).call(this,e))||"object"!==s(r)&&"function"!=typeof r?_(o):r).state={isExpanded:!1,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(_(a)),a.handleCodeToggle=a.handleCodeToggle.bind(_(a)),a}var a,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),a=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,o=e.exampleSrc,n=e.children,c=e.description,d=f(e,["title","example","exampleSrc","children","description"]),p=this.state,i=p.isExpanded,s={};return p.isBackgroundTransparent&&(s={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",m({},d,{className:y("template",d.className)}),t&&r.default.createElement("div",{className:y("header")},r.default.createElement("h2",{className:y("title")},t)),r.default.createElement("div",{className:y("content"),style:s},c&&r.default.createElement("div",{className:y("description")},c),a,n),o&&r.default.createElement("div",{className:y("footer")},r.default.createElement("div",{className:y("button-container")},r.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:y("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:y("chevron-right")}))),r.default.createElement("div",{className:y("code",{"is-expanded":i}),"aria-hidden":!i},i?r.default.createElement(l.default,{language:"jsx",style:u.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&g(a.prototype,o),n&&g(a,n),t}(r.default.Component);E.propTypes=v,E.defaultProps=x;var k=E;t.default=k},843:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},844:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",r="#B2B2B2",n="#c5a5c5",l="#5a9bcf",c="#8dc891",d="#d7deea",p="#FAC863",u={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:n},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:n},"at-rule":{color:p},"class-name":{color:p},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=u},845:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=176-9135dc3cb76fe5bccee8.js.map