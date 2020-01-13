(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{2089:function(e,r,o){"use strict";o.r(r),r.default="# Terra Form Checkbox Upgrade Guide\n\n## Changes from version 2 to version 3\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-form-checkbox-background-color | --terra-form-checkbox-before-background-color |\n| --terra-form-checkbox-background-image | --terra-form-checkbox-before-background-image |\n| --terra-form-checkbox-border | --terra-form-checkbox-before-border |\n| --terra-form-checkbox-border-radius | --terra-form-checkbox-before-border-radius |\n| --terra-form-checkbox-height | --terra-form-checkbox-before-height |\n| --terra-form-checkbox-margin-top | --terra-form-checkbox-before-margin-top |\n| --terra-form-checkbox-transition | --terra-form-checkbox-before-transition |\n| --terra-form-checkbox-width | --terra-form-checkbox-before-width |\n| --terra-form-checkbox-checked-background-color | --terra-form-checkbox-checked-before-background-color |\n| --terra-form-checkbox-checked-background-image | --terra-form-checkbox-checked-before-background-image |\n| --terra-form-checkbox-checked-border | --terra-form-checkbox-checked-before-border |\n| --terra-form-checkbox-checked-border-radius | --terra-form-checkbox-checked-before-border-radius |\n| --terra-form-checkbox-symbol | --terra-form-checkbox-checked-before-content |\n| --terra-form-checkbox-checked-height | --terra-form-checkbox-checked-before-height |\n| --terra-form-checkbox-checked-line-height | --terra-form-checkbox-checked-before-line-height |\n| --terra-form-checkbox-margin-top | --terra-form-checkbox-checked-before-margin-top |\n| --terra-form-checkbox-checked-symbol-padding-left | --terra-form-checkbox-checked-before-padding-left |\n| --terra-form-checkbox-checked-symbol-padding-right | --terra-form-checkbox-checked-before-padding-right |\n| --terra-form-checkbox-checked-symbol-padding-top | --terra-form-checkbox-checked-before-padding-top |\n| --terra-form-checkbox-checked-transform | --terra-form-checkbox-checked-before-transform |\n| --terra-form-checkbox-checked-transition | --terra-form-checkbox-checked-before-transition |\n| --terra-form-checkbox-checked-width | --terra-form-checkbox-checked-before-width |\n| --terra-form-checkbox-is-mobile-height | --terra-form-checkbox-is-mobile-before-height |\n| --terra-form-checkbox-is-mobile-margin-top | --terra-form-checkbox-is-mobile-before-margin-top |\n| --terra-form-checkbox-is-mobile-width | --terra-form-checkbox-is-mobile-before-width |\n| --terra-form-checkbox-is-mobile-checked-height | --terra-form-checkbox-is-mobile-checked-before-height |\n| --terra-form-checkbox-is-mobile-checked-line-height | --terra-form-checkbox-is-mobile-checked-before-line-height |\n| --terra-form-checkbox-is-mobile-margin-top | --terra-form-checkbox-is-mobile-checked-before-margin-top |\n| --terra-form-checkbox-is-mobile-checked-width | --terra-form-checkbox-is-mobile-checked-before-width |\n| --terra-form-checkbox-hover-border-color | --terra-form-checkbox-hover-before-border-color |\n| --terra-form-checkbox-hover-border-width | --terra-form-checkbox-hover-before-border-width |\n| --terra-form-checkbox-checked-hover-border-color | --terra-form-checkbox-hover-checked-before-border-color |\n| --terra-form-checkbox-checked-hover-border-width | --terra-form-checkbox-hover-checked-before-border-width |\n| --terra-form-checkbox-disabled-background-color | --terra-form-checkbox-disabled-before-background-color |\n| --terra-form-checkbox-disabled-background-image | --terra-form-checkbox-disabled-before-background-image |\n| --terra-form-checkbox-disabled-border-color | --terra-form-checkbox-disabled-before-border-color |\n| --terra-form-checkbox-disabled-border-width | --terra-form-checkbox-disabled-before-border-width |\n| --terra-form-checkbox-checked-disabled-border-width | --terra-form-checkbox-checked-disabled-before-border-width |\n| --terra-form-checkbox-disabled-symbol | --terra-form-checkbox-checked-disabled-before-content |\n| --terra-form-checkbox-focus-border-color | --terra-form-checkbox-focus-before-border-color |\n| --terra-form-checkbox-focus-border-width | --terra-form-checkbox-focus-before-border-width |\n| --terra-form-checkbox-focus-ring-background-color | --terra-form-checkbox-focus-after-ring-background-color |\n| --terra-form-checkbox-focus-ring-border-radius | --terra-form-checkbox-focus-after-ring-border-radius |\n| --terra-form-checkbox-focus-ring-height | --terra-form-checkbox-focus-after-ring-height |\n| --terra-form-checkbox-focus-ring-left | --terra-form-checkbox-focus-after-ring-left |\n| --terra-form-checkbox-focus-ring-top | --terra-form-checkbox-focus-after-ring-top |\n| --terra-form-checkbox-focus-ring-width | --terra-form-checkbox-focus-after-ring-width |\n| --terra-form-checkbox-field-error-icon | --terra-form-checkbox-field-error-background |\n\n#### Added\n* --terra-form-checkbox-field-label-error-icon-margin-right\n\n#### Removed\n* --terra-form-checkbox-field-label-error-icon-padding-right\n"},2982:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=n(o(0)),a=n(o(841)),c=n(o(2089));function n(e){return e&&e.__esModule?e:{default:e}}var l=function(){return t.default.createElement(a.default,{packageName:"terra-form-checkbox",srcPath:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-checkbox",readme:c.default})};r.default=l},839:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=n(o(0)),a=n(o(4)),c=n(o(840));function n(e){return e&&e.__esModule?e:{default:e}}var l=a.default.bind(c.default),d=function(e){var r=e.packageName,o=e.packageUrl,a=e.packageVersion;return a?t.default.createElement("div",{className:l("badge-container")},t.default.createElement("a",{className:l("badge"),href:o||"https://www.npmjs.org/package/".concat(r,"/v/").concat(a)},t.default.createElement("span",{className:l("badge-name")},o?"package":"npm"),t.default.createElement("span",{className:l("badge-version")},"v".concat(a)))):t.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(r)},t.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(r),alt:"NPM version"}))};r.default=d},840:function(e,r,o){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},841:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=m(o(0)),a=m(o(2)),c=m(o(847)),n=m(o(846)),l=m(o(4)),d=m(o(839)),i=m(o(842)),f=m(o(845));function m(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var b=l.default.bind(f.default),h={children:a.default.node,packageName:a.default.string,packageUrl:a.default.string,packageVersion:a.default.string,readme:a.default.string,srcPath:a.default.string,examples:a.default.arrayOf(a.default.shape({title:a.default.string,description:a.default.node,example:a.default.element,source:a.default.string})),propsTables:a.default.arrayOf(a.default.shape({componentSrc:a.default.string,componentName:a.default.string,componentProps:a.default.string,propsResolution:a.default.string}))},p=function(e){var r,o=e.packageName,a=e.packageVersion,l=e.packageUrl,f=e.readme,m=e.srcPath,h=e.examples,p=e.propsTables,g=e.children,k=u(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),x=h;p&&(r=p);for(var _=0,y=0;y<x.length;y+=1)x[y].id=_,_+=1;if(r)for(var v=0;v<r.length;v+=1)r[v].id=_,_+=1;var E,w=b(["doc-template",k.className]);if(x.length>0){var T=x.length>1?"Examples":"Example";E=t.default.createElement("h1",{className:b("examples-header")},T)}var O=t.default.createElement(d.default,{packageName:o,packageUrl:l,packageVersion:a});return t.default.createElement("div",s({},k,{className:w}),t.default.createElement("div",{className:b("doc-card")},o&&O,f&&t.default.createElement(n.default,{src:f}),m&&t.default.createElement("a",{href:m},"View component source code")),E,x.map((function(e){return t.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),t.default.createElement("div",{className:b("doc-card")},p[0]&&p[0].componentProps?r.map((function(e){return t.default.createElement("div",{className:b("props-table-markdown"),key:e.id},t.default.createElement("h2",null,e.componentName," Props"),t.default.createElement(n.default,{src:e.componentProps}))})):r.map((function(e){return t.default.createElement(c.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),g&&t.default.createElement("div",{className:b("doc-card")},g))};p.propTypes=h,p.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var g=p;r.default=g},842:function(e,r,o){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=m(o(0)),c=m(o(2)),n=m(o(848)),l=m(o(849)),d=m(o(4)),i=m(o(843)),f=m(o(844));function m(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)})(e)}function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}function b(e,r){if(null==e)return{};var o,t,a=function(e,r){if(null==e)return{};var o,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],r.indexOf(o)>=0||(a[o]=e[o]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}function h(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,r){return(k=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}n.default.registerLanguage("jsx",l.default);var x=d.default.bind(i.default),_={example:c.default.element,exampleSrc:c.default.string,title:c.default.string,description:c.default.node,children:c.default.element},y={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},v=function(e){function r(e){var o,t,a;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),t=this,(o=!(a=p(r).call(this,e))||"object"!==s(a)&&"function"!=typeof a?g(t):a).state={isExpanded:!1,isBackgroundTransparent:!1},o.handleBgToggle=o.handleBgToggle.bind(g(o)),o.handleCodeToggle=o.handleCodeToggle.bind(g(o)),o}var o,t,c;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&k(e,r)}(r,e),o=r,(t=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,r=e.title,o=e.example,t=e.exampleSrc,c=e.children,l=e.description,d=b(e,["title","example","exampleSrc","children","description"]),i=this.state,m=i.isExpanded,s={};return i.isBackgroundTransparent&&(s={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",u({},d,{className:x("template",d.className)}),r&&a.default.createElement("div",{className:x("header")},a.default.createElement("h2",{className:x("title")},r)),a.default.createElement("div",{className:x("content"),style:s},l&&a.default.createElement("div",{className:x("description")},l),o,c),t&&a.default.createElement("div",{className:x("footer")},a.default.createElement("div",{className:x("button-container")},a.default.createElement("button",{type:"button",className:x("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:x("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:x("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:x("chevron-right")}))),a.default.createElement("div",{className:x("code",{"is-expanded":m}),"aria-hidden":!m},m?a.default.createElement(n.default,{language:"jsx",style:f.default,customStyle:{margin:"0",borderRadius:"0"}},t):void 0)))}}])&&h(o.prototype,t),c&&h(o,c),r}(a.default.Component);v.propTypes=_,v.defaultProps=y;var E=v;r.default=E},843:function(e,r,o){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},844:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t="#D8DEE9",a="#B2B2B2",c="#c5a5c5",n="#5a9bcf",l="#8dc891",d="#d7deea",i="#FAC863",f={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:c},comment:{color:a},"block-comment":{color:a},prolog:{color:a},doctype:{color:a},cdata:{color:a},property:{color:n},number:{color:n},"function-name":{color:n},constant:{color:n},symbol:{color:n},deleted:{color:n},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:l},punctuation:{color:"#88C6BE"},selector:{color:t},char:{color:t},builtin:{color:t},inserted:{color:t},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:l},keyword:{color:c},"at-rule":{color:i},"class-name":{color:i},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};r.default=f},845:function(e,r,o){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=180-60fe9f3f96149d09cff3.js.map