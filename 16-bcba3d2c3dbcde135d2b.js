(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1026:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(r(0)),o=u(r(2)),i=u(r(290)),n=u(r(279)),l=u(r(852));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c={inputId:o.default.string.isRequired,label:o.default.node.isRequired,defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,error:o.default.node,errorIcon:o.default.element,help:o.default.node,hideRequired:o.default.bool,inputAttrs:o.default.object,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLabelHidden:o.default.bool,labelAttrs:o.default.object,maxWidth:o.default.string,onChange:o.default.func,placeholder:o.default.string,required:o.default.bool,showOptional:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number])},f={defaultValue:void 0,disabled:!1,error:null,errorIcon:a.default.createElement(i.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,showOptional:!1,value:void 0},p=function(e){var t,r=e.defaultValue,o=e.disabled,i=e.error,u=e.errorIcon,c=e.help,f=e.hideRequired,p=e.inputAttrs,b=e.inputId,h=e.isIncomplete,m=e.isInline,v=e.isInvalid,y=e.isLabelHidden,g=e.label,O=e.labelAttrs,w=e.maxWidth,x=e.required,_=e.showOptional,I=e.onChange,j=e.placeholder,z=e.value,P=d(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","required","showOptional","onChange","placeholder","value"]);return c&&i&&v?t="".concat(b,"-error ").concat(b,"-help"):(c&&(t="".concat(b,"-help")),i&&v&&(t="".concat(b,"-error"))),a.default.createElement(n.default,s({},P,{label:g,labelAttrs:O,error:i,errorIcon:u,help:c,hideRequired:f,required:x,showOptional:_,isInvalid:v,isInline:m,isLabelHidden:y,htmlFor:b,maxWidth:w}),a.default.createElement(l.default,s({},p,{disabled:p.disabled||o,id:b,isIncomplete:h,onChange:I,placeholder:j||p.placeholder,value:z,defaultValue:r,"aria-describedby":t})))};p.propTypes=c,p.defaultProps=f;var b=p;t.default=b},852:function(e,t,r){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var o=u(r(0)),i=u(r(2)),n=u(r(4)),l=u(r(854));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function b(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=n.default.bind(l.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var g={small:2,medium:5,large:10},O={ariaLabel:i.default.string,defaultValue:i.default.string,disabled:i.default.bool,isAutoResizable:i.default.bool,isIncomplete:i.default.bool,isInvalid:i.default.bool,name:i.default.string,onChange:i.default.func,onFocus:i.default.func,placeholder:i.default.string,required:i.default.bool,rows:i.default.number,size:i.default.oneOf(["small","medium","large","full"]),value:i.default.string,refCallback:i.default.func,disableResize:i.default.bool},w={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,placeholder:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},x=function(e){function t(e){var r,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(r=!(o=h(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?m(a):o).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),r.onChange=r.onChange.bind(m(r)),r.onFocus=r.onFocus.bind(m(r)),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,e),r=t,(a=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||g[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,a=r.name,i=r.required,n=(r.onChange,r.onFocus,r.placeholder),l=r.isAutoResizable,u=r.isIncomplete,s=r.isInvalid,b=r.value,h=r.defaultValue,m=r.rows,v=r.size,O=r.ariaLabel,w=r.refCallback,x=r.disableResize,_=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},p(r,["name","required","onChange","onFocus","placeholder","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"])),I=y(["textarea",{"form-error":s},{"form-incomplete":u&&i&&!s},{"full-size":"full"===v},{resizable:l&&!this.isMobileDevice},{"no-resize":x},_.className]);_&&Object.prototype.hasOwnProperty.call(_,"aria-label")?e=O||_["aria-label"]:O&&(e=O),_["aria-label"]=e,i&&(_["aria-required"]="true");var j=m||g[v];return void 0!==b?_.value=b:_.defaultValue=h,o.default.createElement("textarea",d({},_,{ref:function(e){t.textarea=e,w&&w(e)},name:a,onFocus:this.onFocus,onChange:this.onChange,placeholder:n,required:i,rows:j,className:I}))}}])&&b(r.prototype,a),i&&b(r,i),t}(o.default.Component);x.propTypes=O,x.defaultProps=w,x.isTextarea=!0;var _=x;t.default=_},854:function(e,t,r){e.exports={textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf","no-resize":"Textarea-module__no-resize___1iAys",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI","form-incomplete":"Textarea-module__form-incomplete___30YTC"}}}]);
//# sourceMappingURL=16-bcba3d2c3dbcde135d2b.js.map