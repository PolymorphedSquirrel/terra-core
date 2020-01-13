(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1150:function(e){e.exports=JSON.parse('{"name":"terra-form-input","main":"lib/Input.js","version":"2.33.0","description":"Element for building out inputs in a form.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-form-input","FormInput","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","terra-doc-template":"^2.23.0","terra-form-field":"^3.31.0","terra-icon":"^3.25.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio ./packages/$npm_package_name/wdio.conf.js","wdio":"npm run wdio-default && npm run wdio-fusion"}}')},2139:function(e,t,n){"use strict";n.r(t),t.default='# Terra Form Input Field\n\n[terra-form-input](https://github.com/cerner/terra-core/tree/master/packages/terra-form-input) component that is wrapped inside a\n[terra-form-field](https://github.com/cerner/terra-core/tree/master/packages/terra-form-field) component.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-form-input`\n\n## Usage\n\n```jsx\nimport React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\n<InputField\n  inputId="input-id"\n  name="description"\n  value="I\'m a software engineer working at Cerner"\n  required\n  label="Enter a Description"\n  isInline\n/>\n```\n\n## Component Features\n\n * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)\n * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)\n * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)\n * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)\n\n\x3c!-- Uncomment supported features.\n * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)\n --\x3e\n'},2140:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">inputId</td><td style="padding-bottom: 1.8rem">string</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Id of the input. Populates both the input and the htmlFor prop of the wrapper Field.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">label</td><td style="padding-bottom: 1.8rem">node</td><td style="color: #d53700; padding-bottom: 1.8rem">required</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">The label of the form control children.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">defaultValue</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The defaultValue of the input field. Use this to create an uncontrolled input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">disabled</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the input is disabled.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">error</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">Error message for when the input is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">errorIcon</td><td style="padding-bottom: 1.8rem">element</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem"><IconError /></td><td style="padding-bottom: 1.8rem">Error Icon to display when the input is invalid.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">help</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">null</td><td style="padding-bottom: 1.8rem">Help element to display with the input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">hideRequired</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not to hide the required indicator on the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">inputAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Attributes to attach to the input object</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isIncomplete</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field and input displays as Incomplete. Use when no value has been provided. <em>(usage note: <code style="white-space: pre-wrap">required</code> must also be set)</em>.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInline</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the field is an inline field.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isInvalid</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether the field and input displays as Invalid. Use when value does not meet validation pattern.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">isLabelHidden</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">labelAttrs</td><td style="padding-bottom: 1.8rem">object</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">{}</td><td style="padding-bottom: 1.8rem">Attributes to attach to the label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">maxWidth</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Set the max-width of a field using <code style="white-space: pre-wrap">length</code> or <code>%</code>.  Best practice recommendation to never exceed\na rendered value of 1020px. <em>(Note: Providing custom inline styles will take precedence.)</em></td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">onChange</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Function to trigger when user changes the input value. Provide a function to create a controlled input.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">placeholder</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Placeholder text.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">refCallback</td><td style="padding-bottom: 1.8rem">func</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Ref callback to pass into the ref attribute of the html input element.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">required</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not the field is required.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">showOptional</td><td style="padding-bottom: 1.8rem">bool</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">false</td><td style="padding-bottom: 1.8rem">Whether or not to append the &#39;optional&#39; label to a non-required field label.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">type</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">Specifies the type of input element to display.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">value</td><td style="padding-bottom: 1.8rem">union</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">undefined</td><td style="padding-bottom: 1.8rem">The value of the input field. Use this to create a controlled input.</td></tr></tbody></table>'},2141:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport Field from 'terra-form-field';\nimport IconError from 'terra-icon/lib/icon/IconError';\nimport Input from './Input';\n\nconst propTypes = {\n  /**\n   * Id of the input. Populates both the input and the htmlFor prop of the wrapper Field.\n   */\n  inputId: PropTypes.string.isRequired,\n  /**\n   * The label of the form control children.\n   */\n  label: PropTypes.node.isRequired,\n  /**\n   * The defaultValue of the input field. Use this to create an uncontrolled input.\n   */\n  defaultValue: PropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.number,\n  ]),\n  /**\n   * Whether the input is disabled.\n   */\n  disabled: PropTypes.bool,\n  /**\n   * Error message for when the input is invalid.\n   */\n  error: PropTypes.node,\n  /**\n   * Error Icon to display when the input is invalid.\n   */\n  errorIcon: PropTypes.element,\n  /**\n   * Help element to display with the input.\n   */\n  help: PropTypes.node,\n  /**\n   * Whether or not to hide the required indicator on the label.\n   */\n  hideRequired: PropTypes.bool,\n  /**\n   * Attributes to attach to the input object\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  inputAttrs: PropTypes.object,\n  /**\n   * Whether the field and input displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.\n   */\n  isIncomplete: PropTypes.bool,\n  /**\n   * Whether or not the field is an inline field.\n   */\n  isInline: PropTypes.bool,\n  /**\n   * Whether the field and input displays as Invalid. Use when value does not meet validation pattern.\n   */\n  isInvalid: PropTypes.bool,\n  /**\n   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.\n   */\n  isLabelHidden: PropTypes.bool,\n  /**\n   * Attributes to attach to the label.\n   */\n  // eslint-disable-next-line react/forbid-prop-types\n  labelAttrs: PropTypes.object,\n  /**\n   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed\n   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_\n   */\n  maxWidth: PropTypes.string,\n  /**\n   * Function to trigger when user changes the input value. Provide a function to create a controlled input.\n   */\n  onChange: PropTypes.func,\n  /**\n   * Placeholder text.\n   */\n  placeholder: PropTypes.string,\n  /**\n   * Ref callback to pass into the ref attribute of the html input element.\n   */\n  refCallback: PropTypes.func,\n  /**\n   * Whether or not the field is required.\n   */\n  required: PropTypes.bool,\n  /**\n   * Whether or not to append the 'optional' label to a non-required field label.\n   */\n  showOptional: PropTypes.bool,\n  /**\n   * Specifies the type of input element to display.\n   */\n  type: PropTypes.string,\n  /**\n   * The value of the input field. Use this to create a controlled input.\n   */\n  value: PropTypes.oneOfType([\n    PropTypes.string,\n    PropTypes.number,\n  ]),\n};\n\nconst defaultProps = {\n  defaultValue: undefined,\n  disabled: false,\n  error: null,\n  errorIcon: <IconError />,\n  help: null,\n  hideRequired: false,\n  inputAttrs: {},\n  isIncomplete: false,\n  isInline: false,\n  isInvalid: false,\n  isLabelHidden: false,\n  labelAttrs: {},\n  onChange: undefined,\n  placeholder: undefined,\n  maxWidth: undefined,\n  refCallback: undefined,\n  required: false,\n  showOptional: false,\n  type: undefined,\n  value: undefined,\n};\n\nconst InputField = (props) => {\n  const {\n    defaultValue,\n    disabled,\n    error,\n    errorIcon,\n    help,\n    hideRequired,\n    inputAttrs,\n    inputId,\n    isIncomplete,\n    isInline,\n    isInvalid,\n    isLabelHidden,\n    label,\n    labelAttrs,\n    maxWidth,\n    onChange,\n    placeholder,\n    refCallback,\n    required,\n    showOptional,\n    type,\n    value,\n    ...customProps\n  } = props;\n\n  let ariaDescriptionIds;\n\n  if (help && error && isInvalid) {\n    ariaDescriptionIds = `${inputId}-error ${inputId}-help`;\n  } else {\n    if (help) {\n      ariaDescriptionIds = `${inputId}-help`;\n    }\n\n    if (error && isInvalid) {\n      ariaDescriptionIds = `${inputId}-error`;\n    }\n  }\n\n  const inputType = type || inputAttrs.type;\n\n  return (\n    <Field\n      label={label}\n      labelAttrs={labelAttrs}\n      error={error}\n      errorIcon={errorIcon}\n      help={help}\n      hideRequired={hideRequired}\n      required={required}\n      showOptional={showOptional}\n      isInvalid={isInvalid}\n      isInline={isInline}\n      isLabelHidden={isLabelHidden}\n      htmlFor={inputId}\n      maxWidth={maxWidth}\n      {...customProps}\n    >\n      <Input\n        {...inputAttrs}\n        disabled={inputAttrs.disabled || disabled}\n        id={inputId}\n        isIncomplete={isIncomplete}\n        type={inputType}\n        onChange={onChange}\n        placeholder={placeholder || inputAttrs.placeholder}\n        value={value}\n        defaultValue={defaultValue}\n        refCallback={refCallback}\n        aria-describedby={ariaDescriptionIds}\n      />\n    </Field>\n  );\n};\n\nInputField.propTypes = propTypes;\nInputField.defaultProps = defaultProps;\n\nexport default InputField;\n"},2142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(953));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(){return o.default.createElement(r.default,{inputId:"profile-name",label:"Profile Name",help:"Note: This can not be changed in the future",type:"text",placeholder:"Profile Name",inputAttrs:{name:"profile"}})};t.default=a},2143:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst DefaultInputField = () => (\n  <InputField\n    inputId="profile-name"\n    label="Profile Name"\n    help="Note: This can not be changed in the future"\n    type="text"\n    placeholder="Profile Name"\n    inputAttrs={{\n      name: \'profile\',\n    }}\n  />\n);\n\nexport default DefaultInputField;\n'},2144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(953));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(){return o.default.createElement(r.default,{inputId:"requiredField",label:"Required Input Field",help:"Note: This is help text",type:"text",required:!0,inputAttrs:{name:"requiredField"}})};t.default=a},2145:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst RequiredInputField = () => (\n  <InputField\n    inputId="requiredField"\n    label="Required Input Field"\n    help="Note: This is help text"\n    type="text"\n    required\n    inputAttrs={{\n      name: \'requiredField\',\n    }}\n  />\n);\n\nexport default RequiredInputField;\n'},2146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(953));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(){return o.default.createElement(r.default,{inputId:"incompleteField",label:"Incomplete Input Field",help:"Note: This is help text",type:"text",required:!0,isIncomplete:!0,inputAttrs:{name:"requiredField"}})};t.default=a},2147:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst RequiredInputField = () => (\n  <InputField\n    inputId="incompleteField"\n    label="Incomplete Input Field"\n    help="Note: This is help text"\n    type="text"\n    required\n    isIncomplete\n    inputAttrs={{\n      name: \'requiredField\',\n    }}\n  />\n);\n\nexport default RequiredInputField;\n'},2148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(0)),r=l(n(953));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(){return o.default.createElement(r.default,{inputId:"numeric-input",label:"Numeric Value",type:"number",placeholder:"Enter Digits",inputAttrs:{name:"numeric"}})};t.default=a},2149:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst NumberInputField = () => (\n  <InputField\n    inputId="numeric-input"\n    label="Numeric Value"\n    type="number"\n    placeholder="Enter Digits"\n    inputAttrs={{\n      name: \'numeric\',\n    }}\n  />\n);\n\nexport default NumberInputField;\n'},2990:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=h(n(0)),r=h(n(841)),l=h(n(2139)),a=n(1150),d=h(n(2140)),i=h(n(2141)),p=h(n(2142)),s=h(n(2143)),u=h(n(2144)),c=h(n(2145)),m=h(n(2146)),f=h(n(2147)),b=h(n(2148)),g=h(n(2149));function h(e){return e&&e.__esModule?e:{default:e}}var y=function(){return o.default.createElement(r.default,{packageName:a.name,packageVersion:a.version,readme:l.default,srcPath:"https://github.com/cerner/terra-core/tree/master/packages/".concat(a.name),propsTables:[{componentName:"Form Input Field",componentSrc:i.default,componentProps:d.default}],examples:[{example:o.default.createElement(p.default,null),source:s.default},{example:o.default.createElement(u.default,null),source:c.default},{description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",example:o.default.createElement(m.default,null),source:f.default},{example:o.default.createElement(b.default,null),source:g.default}]})};t.default=y},839:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(4)),l=a(n(840));function a(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(l.default),i=function(e){var t=e.packageName,n=e.packageUrl,r=e.packageVersion;return r?o.default.createElement("div",{className:d("badge-container")},o.default.createElement("a",{className:d("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},o.default.createElement("span",{className:d("badge-name")},n?"package":"npm"),o.default.createElement("span",{className:d("badge-version")},"v".concat(r)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=i},840:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},841:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=u(n(2)),l=u(n(847)),a=u(n(846)),d=u(n(4)),i=u(n(839)),p=u(n(842)),s=u(n(845));function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=d.default.bind(s.default),b={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},g=function(e){var t,n=e.packageName,r=e.packageVersion,d=e.packageUrl,s=e.readme,u=e.srcPath,b=e.examples,g=e.propsTables,h=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=b;g&&(t=g);for(var _=0,w=0;w<v.length;w+=1)v[w].id=_,_+=1;if(t)for(var I=0;I<t.length;I+=1)t[I].id=_,_+=1;var x,T=f(["doc-template",y.className]);if(v.length>0){var E=v.length>1?"Examples":"Example";x=o.default.createElement("h1",{className:f("examples-header")},E)}var P=o.default.createElement(i.default,{packageName:n,packageUrl:d,packageVersion:r});return o.default.createElement("div",c({},y,{className:T}),o.default.createElement("div",{className:f("doc-card")},n&&P,s&&o.default.createElement(a.default,{src:s}),u&&o.default.createElement("a",{href:u},"View component source code")),x,v.map((function(e){return o.default.createElement(p.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},g[0]&&g[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(a.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(l.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),h&&o.default.createElement("div",{className:f("doc-card")},h))};g.propTypes=b,g.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var h=g;t.default=h},842:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),l=u(n(2)),a=u(n(848)),d=u(n(849)),i=u(n(4)),p=u(n(843)),s=u(n(844));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.default.registerLanguage("jsx",d.default);var v=i.default.bind(p.default),_={example:l.default.element,exampleSrc:l.default.string,title:l.default.string,description:l.default.node,children:l.default.element},w={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},I=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=g(t).call(this,e))||"object"!==c(r)&&"function"!=typeof r?h(o):r).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(h(n)),n.handleCodeToggle=n.handleCodeToggle.bind(h(n)),n}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,l=e.children,d=e.description,i=f(e,["title","example","exampleSrc","children","description"]),p=this.state,u=p.isExpanded,c={};return p.isBackgroundTransparent&&(c={backgroundColor:"rgba(0, 0, 0, 0)"}),r.default.createElement("div",m({},i,{className:v("template",i.className)}),t&&r.default.createElement("div",{className:v("header")},r.default.createElement("h2",{className:v("title")},t)),r.default.createElement("div",{className:v("content"),style:c},d&&r.default.createElement("div",{className:v("description")},d),n,l),o&&r.default.createElement("div",{className:v("footer")},r.default.createElement("div",{className:v("button-container")},r.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),r.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},r.default.createElement("span",{className:v("chevron-left")}),r.default.createElement("span",null,"Code"),r.default.createElement("span",{className:v("chevron-right")}))),r.default.createElement("div",{className:v("code",{"is-expanded":u}),"aria-hidden":!u},u?r.default.createElement(a.default,{language:"jsx",style:s.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&b(n.prototype,o),l&&b(n,l),t}(r.default.Component);I.propTypes=_,I.defaultProps=w;var x=I;t.default=x},843:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",r="#B2B2B2",l="#c5a5c5",a="#5a9bcf",d="#8dc891",i="#d7deea",p="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:l},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:a},number:{color:a},"function-name":{color:a},constant:{color:a},symbol:{color:a},deleted:{color:a},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:d},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:d},keyword:{color:l},"at-rule":{color:p},"class-name":{color:p},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=s},845:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},953:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),r=i(n(2)),l=i(n(279)),a=i(n(290)),d=i(n(280));function i(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={inputId:r.default.string.isRequired,label:r.default.node.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number]),disabled:r.default.bool,error:r.default.node,errorIcon:r.default.element,help:r.default.node,hideRequired:r.default.bool,inputAttrs:r.default.object,isIncomplete:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,labelAttrs:r.default.object,maxWidth:r.default.string,onChange:r.default.func,placeholder:r.default.string,refCallback:r.default.func,required:r.default.bool,showOptional:r.default.bool,type:r.default.string,value:r.default.oneOfType([r.default.string,r.default.number])},c={defaultValue:void 0,disabled:!1,error:null,errorIcon:o.default.createElement(a.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,placeholder:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},m=function(e){var t,n=e.defaultValue,r=e.disabled,a=e.error,i=e.errorIcon,u=e.help,c=e.hideRequired,m=e.inputAttrs,f=e.inputId,b=e.isIncomplete,g=e.isInline,h=e.isInvalid,y=e.isLabelHidden,v=e.label,_=e.labelAttrs,w=e.maxWidth,I=e.onChange,x=e.placeholder,T=e.refCallback,E=e.required,P=e.showOptional,k=e.type,O=e.value,j=s(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","placeholder","refCallback","required","showOptional","type","value"]);u&&a&&h?t="".concat(f,"-error ").concat(f,"-help"):(u&&(t="".concat(f,"-help")),a&&h&&(t="".concat(f,"-error")));var F=k||m.type;return o.default.createElement(l.default,p({label:v,labelAttrs:_,error:a,errorIcon:i,help:u,hideRequired:c,required:E,showOptional:P,isInvalid:h,isInline:g,isLabelHidden:y,htmlFor:f,maxWidth:w},j),o.default.createElement(d.default,p({},m,{disabled:m.disabled||r,id:f,isIncomplete:b,type:F,onChange:I,placeholder:x||m.placeholder,value:O,defaultValue:n,refCallback:T,"aria-describedby":t})))};m.propTypes=u,m.defaultProps=c;var f=m;t.default=f}}]);
//# sourceMappingURL=116-b0553f3f93e41ac92bd9.js.map