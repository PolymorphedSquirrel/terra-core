(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{3234:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),o=i(n(860));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return l.default.createElement(o.default,{id:"longText",labelText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"})};t.default=a},860:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(0)),o=d(n(2)),i=d(n(4)),a=d(n(896)),r=d(n(897));function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=i.default.bind(a.default),m={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.node.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},p={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},h=function(e){var t=e.checked,n=e.defaultChecked,o=e.inputAttrs,i=e.id,a=e.disabled,d=e.isInline,m=e.isLabelHidden,p=e.labelText,h=e.labelTextAttrs,_=e.name,v=e.onBlur,x=e.onChange,O=e.onFocus,g=e.value,k=b(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o);void 0!==t?y.checked=t:y.defaultChecked=n;var w=f(["checkbox",{"is-inline":d},k.className]),C=f(["label",{"is-disabled":a},{"is-mobile":r.default.isConsideredMobileDevice()},h.className]),j=f(["native-input",o.className]),P=f(["label-text",{"is-hidden":m},{"is-mobile":r.default.isConsideredMobileDevice()}]),T=null;return m?(y["aria-label"]=p,T=l.default.createElement("span",u({},h,{className:P}))):T=l.default.createElement("span",u({},h,{className:P}),p),l.default.createElement("div",u({},k,{className:w}),l.default.createElement("label",{htmlFor:i,className:C},l.default.createElement("input",u({},y,{type:"checkbox",id:i,disabled:a,name:_,value:g,onChange:x,onFocus:O,onBlur:v,className:j})),T))};h.propTypes=m,h.defaultProps=p,h.isCheckbox=!0;var _=h;t.default=_},896:function(e,t,n){e.exports={checkbox:"Checkbox-module__checkbox___1DzDw",label:"Checkbox-module__label___GWPVb","is-mobile":"Checkbox-module__is-mobile___13DUd","native-input":"Checkbox-module__native-input___1CCoe","label-text":"Checkbox-module__label-text___3q5Qm","is-hidden":"Checkbox-module__is-hidden___1VqYx","is-disabled":"Checkbox-module__is-disabled___3ERR9","is-inline":"Checkbox-module__is-inline___2HYdD"}},897:function(e,t,n){"use strict";var l={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=l}}]);
//# sourceMappingURL=309-7e3103fad517f667fc86.js.map