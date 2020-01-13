(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{3345:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(r(0)),a=l(r(4)),n=l(r(852)),i=l(r(855));function l(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(i.default),u=function(){return o.default.createElement("div",{className:s("content-wrapper")},o.default.createElement(n.default,{name:"job_experience",defaultValue:"",required:!0,ariaLabel:"label"}))};t.default=u},852:function(e,t,r){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var a=s(r(0)),n=s(r(2)),i=s(r(4)),l=s(r(854));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=i.default.bind(l.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var g={small:2,medium:5,large:10},_={ariaLabel:n.default.string,defaultValue:n.default.string,disabled:n.default.bool,isAutoResizable:n.default.bool,isIncomplete:n.default.bool,isInvalid:n.default.bool,name:n.default.string,onChange:n.default.func,onFocus:n.default.func,placeholder:n.default.string,required:n.default.bool,rows:n.default.number,size:n.default.oneOf(["small","medium","large","full"]),value:n.default.string,refCallback:n.default.func,disableResize:n.default.bool},w={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,placeholder:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},x=function(e){function t(e){var r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(r=!(a=h(t).call(this,e))||"object"!==u(a)&&"function"!=typeof a?m(o):a).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),r.onChange=r.onChange.bind(m(r)),r.onFocus=r.onFocus.bind(m(r)),r}var r,o,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||g[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,o=r.name,n=r.required,i=(r.onChange,r.onFocus,r.placeholder),l=r.isAutoResizable,s=r.isIncomplete,u=r.isInvalid,b=r.value,h=r.defaultValue,m=r.rows,y=r.size,_=r.ariaLabel,w=r.refCallback,x=r.disableResize,O=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},d(r,["name","required","onChange","onFocus","placeholder","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"])),z=v(["textarea",{"form-error":u},{"form-incomplete":s&&n&&!u},{"full-size":"full"===y},{resizable:l&&!this.isMobileDevice},{"no-resize":x},O.className]);O&&Object.prototype.hasOwnProperty.call(O,"aria-label")?e=_||O["aria-label"]:_&&(e=_),O["aria-label"]=e,n&&(O["aria-required"]="true");var j=m||g[y];return void 0!==b?O.value=b:O.defaultValue=h,a.default.createElement("textarea",c({},O,{ref:function(e){t.textarea=e,w&&w(e)},name:o,onFocus:this.onFocus,onChange:this.onChange,placeholder:i,required:n,rows:j,className:z}))}}])&&b(r.prototype,o),n&&b(r,n),t}(a.default.Component);x.propTypes=_,x.defaultProps=w,x.isTextarea=!0;var O=x;t.default=O},854:function(e,t,r){e.exports={textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf","no-resize":"Textarea-module__no-resize___1iAys",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI","form-incomplete":"Textarea-module__form-incomplete___30YTC"}},855:function(e,t,r){e.exports={"content-wrapper":"Textarea-test-module__content-wrapper___2IpaV"}}}]);
//# sourceMappingURL=281-2bce800408445afbd870.js.map