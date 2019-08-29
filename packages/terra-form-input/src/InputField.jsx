import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import IconError from 'terra-icon/lib/icon/IconError';
import Input from './Input';

const propTypes = {
  /**
   * Id of the input. Populates both the input and the htmlFor prop of the wrapper Field.
   */
  inputId: PropTypes.string.isRequired,
  /**
   * The label of the form control children.
   */
  label: PropTypes.node.isRequired,
  /**
   * The defaultValue of the input field. Use this to create an uncontrolled input.
   */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Whether the input is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message for when the input is invalid.
   */
  error: PropTypes.node,
  /**
   * Error Icon to display when the input is invalid.
   */
  errorIcon: PropTypes.element,
  /**
   * Help element to display with the input.
   */
  help: PropTypes.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * Attributes to attach to the input object
   */
  // eslint-disable-next-line react/forbid-prop-types
  inputAttrs: PropTypes.object,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: PropTypes.bool,
  /**
   * Whether or not the field is invalid.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * Attributes to attach to the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: PropTypes.string,
  /**
   * Specifies the maximum number of digits accepted by the number input field.
   */
  maxDigits: PropTypes.number,
  /**
   * Specifies the minimum number of digits required for the number input field.
   */
  minDigits: PropTypes.number,
  /**
   * Function to trigger when user changes the input value. Provide a function to create a controlled input.
   */
  onChange: PropTypes.func,
  /**
   * Specifies the number of decimal places to be shown for number input field.
   */
  precision: PropTypes.number,
  /**
   * Ref callback to pass into the ref attribute of the html input element.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the field is required.
   */
  required: PropTypes.bool,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * Specifies the type of input element to display.
   */
  type: PropTypes.string,
  /**
   * The value of the input field. Use this to create a controlled input.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

const defaultProps = {
  defaultValue: undefined,
  disabled: false,
  error: null,
  errorIcon: <IconError />,
  help: null,
  hideRequired: false,
  inputAttrs: {},
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  onChange: undefined,
  maxWidth: undefined,
  maxDigits: undefined,
  minDigits: undefined,
  precision: undefined,
  refCallback: undefined,
  required: false,
  showOptional: false,
  type: undefined,
  value: undefined,
};

const InputField = (props) => {
  const {
    defaultValue,
    disabled,
    error,
    errorIcon,
    help,
    hideRequired,
    inputAttrs,
    inputId,
    isInline,
    isInvalid,
    isLabelHidden,
    label,
    labelAttrs,
    maxWidth,
    maxDigits,
    minDigits,
    onChange,
    precision,
    refCallback,
    required,
    showOptional,
    type,
    value,
    ...customProps
  } = props;

  let ariaDescriptionIds;

  if (help && error && isInvalid) {
    ariaDescriptionIds = `${inputId}-error ${inputId}-help`;
  } else {
    if (help) {
      ariaDescriptionIds = `${inputId}-help`;
    }

    if (error && isInvalid) {
      ariaDescriptionIds = `${inputId}-error`;
    }
  }

  const inputType = type || inputAttrs.type;
  let min;
  let max;

  if (inputType === 'number') {
    if (maxDigits > 0) {
      max = (10 ** maxDigits) - 1;
    }
    if (minDigits > 0) {
      min = 10 ** (minDigits - 1);
    }
  }

  return (
    <Field
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      errorIcon={errorIcon}
      help={help}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={inputId}
      maxWidth={maxWidth}
      {...customProps}
    >
      <Input
        {...inputAttrs}
        disabled={inputAttrs.disabled || disabled}
        id={inputId}
        type={inputType}
        onChange={onChange}
        value={value}
        max={max}
        min={min}
        defaultValue={defaultValue}
        refCallback={refCallback}
        aria-describedby={ariaDescriptionIds}
      />
    </Field>
  );
};

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

export default InputField;
