(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{3261:function(e,t,l){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(l(0)),o=u(l(4)),i=u(l(953)),a=u(l(863));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?function(e){return n(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)})(e)}function c(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=o.default.bind(a.default),y=function(e){function t(){var e,l,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l=this,(e=!(n=f(t).call(this))||"object"!==d(n)&&"function"!=typeof n?s(l):n).state={isInvalid:!1,isIncomplete:!1,required:!1},e.toggleInvalid=e.toggleInvalid.bind(s(e)),e.toggleIncomplete=e.toggleIncomplete.bind(s(e)),e}var l,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),l=t,(n=[{key:"toggleInvalid",value:function(){this.setState((function(e){return{isInvalid:!e.isInvalid}}))}},{key:"toggleIncomplete",value:function(){this.setState((function(e){return{isIncomplete:!e.isIncomplete,required:!e.required}}))}},{key:"render",value:function(){return r.default.createElement("div",{className:b("content-wrapper")},r.default.createElement("button",{type:"button",id:"validity-toggle",onClick:this.toggleInvalid},"Toggle Validity"),r.default.createElement("button",{type:"button",id:"incomplete-toggle",onClick:this.toggleIncomplete},"Toggle Incomplete"),r.default.createElement(i.default,{inputId:"test-input",defaultValue:"Value",error:"Error message.",help:"Help message.",hideRequired:!0,inputAttrs:{name:"test",type:"text"},isInvalid:this.state.isInvalid,isIncomplete:this.state.isIncomplete,required:this.state.required,label:"Label Text",labelAttrs:{className:"label"},showOptional:!0}))}}])&&c(l.prototype,n),o&&c(l,o),t}(r.default.Component);t.default=y},863:function(e,t,l){e.exports={"content-wrapper":"Input-test-module__content-wrapper___dsRQD"}},953:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(0)),r=u(l(2)),o=u(l(279)),i=u(l(290)),a=u(l(280));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var f={inputId:r.default.string.isRequired,label:r.default.node.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number]),disabled:r.default.bool,error:r.default.node,errorIcon:r.default.element,help:r.default.node,hideRequired:r.default.bool,inputAttrs:r.default.object,isIncomplete:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,labelAttrs:r.default.object,maxWidth:r.default.string,onChange:r.default.func,placeholder:r.default.string,refCallback:r.default.func,required:r.default.bool,showOptional:r.default.bool,type:r.default.string,value:r.default.oneOfType([r.default.string,r.default.number])},s={defaultValue:void 0,disabled:!1,error:null,errorIcon:n.default.createElement(i.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,placeholder:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},p=function(e){var t,l=e.defaultValue,r=e.disabled,i=e.error,u=e.errorIcon,f=e.help,s=e.hideRequired,p=e.inputAttrs,b=e.inputId,y=e.isIncomplete,h=e.isInline,m=e.isInvalid,v=e.isLabelHidden,g=e.label,I=e.labelAttrs,O=e.maxWidth,w=e.onChange,_=e.placeholder,q=e.refCallback,j=e.required,S=e.showOptional,k=e.type,C=e.value,E=c(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","placeholder","refCallback","required","showOptional","type","value"]);f&&i&&m?t="".concat(b,"-error ").concat(b,"-help"):(f&&(t="".concat(b,"-help")),i&&m&&(t="".concat(b,"-error")));var x=k||p.type;return n.default.createElement(o.default,d({label:g,labelAttrs:I,error:i,errorIcon:u,help:f,hideRequired:s,required:j,showOptional:S,isInvalid:m,isInline:h,isLabelHidden:v,htmlFor:b,maxWidth:O},E),n.default.createElement(a.default,d({},p,{disabled:p.disabled||r,id:b,isIncomplete:y,type:x,onChange:w,placeholder:_||p.placeholder,value:C,defaultValue:l,refCallback:q,"aria-describedby":t})))};p.propTypes=f,p.defaultProps=s;var b=p;t.default=b}}]);
//# sourceMappingURL=351-5cd434a2626023e452d6.js.map