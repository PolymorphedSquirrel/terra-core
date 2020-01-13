(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1876:function(e,t,n){"use strict";n.r(t),t.default="# Terra Base\n\nThe `terra-base` component handles two main concerns, [application internationalization](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization/internationalization-intro) and global base styles.\n\nThis component is designed to manage loading locale information such as translations and locale data, handling locale switching and loading state, and combining customized translation messages from an application with Terra UI component translations.\n\n**Note:** _This component should be your root component and wrap all components in your app. This is to help ensure that the entire application is within the same configured i18n context provided by [react-intl's `<IntlProvider />`](https://github.com/yahoo/react-intl/wiki/Components#intlprovider)._\n\nThe `terra-base` component requires the use of our [aggregate-translations pre-build tool](https://github.com/cerner/terra-aggregate-translations) to ensure translations and locale data files are generated accordingly for the app.\n\nYou can read more about [setting up Internationalization in your Terra UI app here](https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization/internationalization-intro).\n\nThe terra-base component also sets minimal global base styles for the application. Styles include CSS to help normalize box-sizing, global font styles, and HTML background styles.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-base`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n| react-intl | ^2.8.0 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n## Usage\n\nWith custom app translations.\n\n```jsx\nimport Base from 'terra-base';\nimport App from './App'; // Your custom app component\nimport appTranslations from './aggregated-translations/en.js'; // Your aggregated app translations\n\n// This value could be sent from the server as well\nconst locale = (navigator.languages && navigator.languages[0])\n               || navigator.language\n               || navigator.userLanguage\n               || 'en';\n\n<Base locale={locale} customMessages={appTranslations}>\n  <App />\n</Base>\n```\n\nWithout custom app translations.\n\n```jsx\nimport Base from 'terra-base';\nimport App from './App'; // Your custom app component\n\n// This value could be sent from the server as well\nconst locale = (navigator.languages && navigator.languages[0])\n               || navigator.language\n               || navigator.userLanguage\n               || 'en';\n\n<Base locale={locale}>\n  <App />\n</Base>\n```\n\n## Component Features\n* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n* [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n* [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n* [react_on_rails Compatible](https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n)\n* [CND Compatible](https://github.com/webpack/docs/wiki/configuration#outputpublicpath)\n"},1877:function(e){e.exports=JSON.parse('{"name":"terra-base","main":"lib/Base.js","version":"5.25.0","description":"The base component sets minimal global styles for an application.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-base","Base","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5","react-intl":"^2.8.0"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.23.0","terra-i18n":"^4.21.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-fusion"}}')},1878:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The component(s) that will be wrapped by <code style="white-space: pre-wrap">&lt;Base /&gt;</code>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">locale</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The locale name.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">customMessages</td><td style="padding-bottom: 1.8rem">custom</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Customized translations provided by consuming application only for current locale.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">strictMode</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Activates <a href="https://reactjs.org/docs/strict-mode.html">React Strict Mode</a> for descendants</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">translationsLoadingPlaceholder</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The component(s) that will be wrapped by <code style="white-space: pre-wrap">&lt;Base /&gt;</code> ONLY\nin the event that translations have not been loaded yet.\nNOTE: Absolutely no locale-dependent logic should be\nutilized in this placeholder.</td></tr></tbody></table>'},1879:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { I18nProvider, i18nLoader } from 'terra-i18n';\nimport './baseStyles';\n\nconst propTypes = {\n  /**\n   * The component(s) that will be wrapped by `<Base />`.\n   */\n  children: PropTypes.node.isRequired,\n  /**\n   * The locale name.\n   */\n  locale: PropTypes.string.isRequired,\n  /**\n   * Customized translations provided by consuming application only for current locale.\n   */\n  /* eslint-disable consistent-return */\n  customMessages: (props, propName, componentName) => {\n    if (Object.keys(props[propName]).length !== 0 && props.locale === undefined) {\n      return new Error(`Missing locale prop for ${propName} in ${componentName} props`);\n    }\n  },\n  /**\n   * Activates [React Strict Mode](https://reactjs.org/docs/strict-mode.html) for descendants\n   */\n  strictMode: PropTypes.bool,\n  /**\n   * The component(s) that will be wrapped by `<Base />` ONLY\n   * in the event that translations have not been loaded yet.\n   * NOTE: Absolutely no locale-dependent logic should be\n   * utilized in this placeholder.\n   */\n  translationsLoadingPlaceholder: PropTypes.node,\n};\n\nconst defaultProps = {\n  customMessages: {},\n  strictMode: false,\n};\n\nclass Base extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      areTranslationsLoaded: false,\n      locale: props.locale,\n      messages: {},\n    };\n  }\n\n  componentDidMount() {\n    if (this.props.locale !== undefined) {\n      try {\n        i18nLoader(this.props.locale, this.setState, this);\n      } catch (e) {\n        // eslint-disable-next-line no-console\n        console.error(e);\n      }\n    }\n  }\n\n  componentDidUpdate(prevProps) {\n    if (this.props.locale !== undefined && this.props.locale !== prevProps.locale) {\n      try {\n        i18nLoader(this.props.locale, this.setState, this);\n      } catch (e) {\n        // eslint-disable-next-line no-console\n        console.error(e);\n      }\n    }\n  }\n\n  render() {\n    const {\n      children,\n      customMessages,\n      strictMode,\n      translationsLoadingPlaceholder,\n    } = this.props;\n\n    const messages = { ...this.state.messages, ...customMessages };\n    const renderChildren = strictMode ? (<React.StrictMode>{children}</React.StrictMode>) : children;\n\n    if (!this.state.areTranslationsLoaded) return <div>{translationsLoadingPlaceholder}</div>;\n    return (\n      <I18nProvider locale={this.state.locale} messages={messages}>\n        {renderChildren}\n      </I18nProvider>\n    );\n  }\n}\n\nBase.propTypes = propTypes;\nBase.defaultProps = defaultProps;\n\nexport default Base;\n"},2948:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),o=d(n(841)),r=d(n(1876)),l=n(1877),i=d(n(1878)),s=d(n(1879));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(){return a.default.createElement("div",null,a.default.createElement("h1",null,"Globale BaseStyles example"),a.default.createElement("p",null,"Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),a.default.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),a.default.createElement("dl",null,a.default.createElement("dt",null,"Description name"),a.default.createElement("dd",null,"Description value"),a.default.createElement("dt",null,"Description name"),a.default.createElement("dd",null,"Description value")),a.default.createElement("ol",null,a.default.createElement("li",null,"Ordered list item"),a.default.createElement("li",null,"Ordered list item",a.default.createElement("ol",null,a.default.createElement("li",null,"Nested ordered list item"))),a.default.createElement("li",null,"Ordered list item")),a.default.createElement("ul",null,a.default.createElement("li",null,"Unordered list item"),a.default.createElement("li",null,"Unordered list item",a.default.createElement("ol",null,a.default.createElement("li",null,"Nested unordered list item"))),a.default.createElement("li",null,"Unordered list item")))},p=function(){return a.default.createElement(o.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(l.name),examples:[{example:a.default.createElement(c,null)}],propsTables:[{componentName:"Base",componentSrc:s.default,componentProps:i.default}]})};t.default=p},839:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(4)),r=l(n(840));function l(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(r.default),s=function(e){var t=e.packageName,n=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:i("badge-container")},a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=s},840:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(0)),o=p(n(2)),r=p(n(847)),l=p(n(846)),i=p(n(4)),s=p(n(839)),d=p(n(842)),c=p(n(845));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=i.default.bind(c.default),f={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},b=function(e){var t,n=e.packageName,o=e.packageVersion,i=e.packageUrl,c=e.readme,p=e.srcPath,f=e.examples,b=e.propsTables,h=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),_=f;b&&(t=b);for(var v=0,E=0;E<_.length;E+=1)_[E].id=v,v+=1;if(t)for(var w=0;w<t.length;w+=1)t[w].id=v,v+=1;var T,x=g(["doc-template",y.className]);if(_.length>0){var k=_.length>1?"Examples":"Example";T=a.default.createElement("h1",{className:g("examples-header")},k)}var S=a.default.createElement(s.default,{packageName:n,packageUrl:i,packageVersion:o});return a.default.createElement("div",u({},y,{className:x}),a.default.createElement("div",{className:g("doc-card")},n&&S,c&&a.default.createElement(l.default,{src:c}),p&&a.default.createElement("a",{href:p},"View component source code")),T,_.map((function(e){return a.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:g("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:g("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&a.default.createElement("div",{className:g("doc-card")},h))};b.propTypes=f,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=b;t.default=h},842:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),r=p(n(2)),l=p(n(848)),i=p(n(849)),s=p(n(4)),d=p(n(843)),c=p(n(844));function p(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}l.default.registerLanguage("jsx",i.default);var _=s.default.bind(d.default),v={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},w=function(e){function t(e){var n,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(o=b(t).call(this,e))||"object"!==u(o)&&"function"!=typeof o?h(a):o).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(h(n)),n.handleCodeToggle=n.handleCodeToggle.bind(h(n)),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,a=e.exampleSrc,r=e.children,i=e.description,s=g(e,["title","example","exampleSrc","children","description"]),d=this.state,p=d.isExpanded,u={};return d.isBackgroundTransparent&&(u={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",m({},s,{className:_("template",s.className)}),t&&o.default.createElement("div",{className:_("header")},o.default.createElement("h2",{className:_("title")},t)),o.default.createElement("div",{className:_("content"),style:u},i&&o.default.createElement("div",{className:_("description")},i),n,r),a&&o.default.createElement("div",{className:_("footer")},o.default.createElement("div",{className:_("button-container")},o.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:_("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:_("chevron-right")}))),o.default.createElement("div",{className:_("code",{"is-expanded":p}),"aria-hidden":!p},p?o.default.createElement(l.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},a):void 0)))}}])&&f(n.prototype,a),r&&f(n,r),t}(o.default.Component);w.propTypes=v,w.defaultProps=E;var T=w;t.default=T},843:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",i="#8dc891",s="#d7deea",d="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:i},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:i},keyword:{color:r},"at-rule":{color:d},"class-name":{color:d},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},845:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}}}]);
//# sourceMappingURL=149-5efb77cbaf2538fd99c4.js.map