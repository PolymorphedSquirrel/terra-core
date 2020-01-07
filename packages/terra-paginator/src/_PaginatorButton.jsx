import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  disableFocusActiveStyles,
  disableFocusOnBlur,
  enableFocusActiveStyles,
  handleFocus,
  handleMouseDown,
} from './_paginationUtils';

const propTypes = {
  /**
   * Sets aria-current attribute.
   */
  ariaCurrent: PropTypes.bool,
  /**
   * Sets aria-disabled attribute.
   */
  ariaDisabled: PropTypes.bool,
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Child elements passed in to buttons.
   */
  children: PropTypes.node,
  /**
   * Passed in CSS className.
   */
  className: PropTypes.string,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
  /**
   * Tab Index of selected button.
   */
  tabIndex: PropTypes.string,
};

function PaginatorButton(props) {
  const [shouldShowFocus, setShowFocus] = useState(false);

  const {
    ariaCurrent,
    ariaDisabled,
    ariaLabel,
    children,
    className,
    onClick,
    tabIndex,
  } = props;

  return (
    <button
      aria-current={ariaCurrent}
      aria-disabled={ariaDisabled}
      aria-label={ariaLabel}
      className={className}
      onBlur={disableFocusOnBlur}
      onClick={onClick}
      onFocus={(e) => handleFocus(shouldShowFocus, e)}
      onKeyDown={(e) => enableFocusActiveStyles(setShowFocus, e)}
      onKeyUp={disableFocusActiveStyles}
      onMouseDown={(e) => handleMouseDown(setShowFocus, e)}
      tabIndex={tabIndex}
      type="button"
    >
      {children}
    </button>
  );
}

PaginatorButton.propTypes = propTypes;

export default PaginatorButton;
