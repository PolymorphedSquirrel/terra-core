import PropTypes from 'prop-types';
import cellShape from './cellShape';

const rowShape = PropTypes.shape({
  checkAlignment: PropTypes.number,
  rowLabel: PropTypes.string.isRequired,
  isToggled: PropTypes.bool,
  isVisuallyToggled: PropTypes.bool,
  /**
   * The children to be passed as row content.
   */
  cells:  PropTypes.arrayOf(cellShape),
  /**
   * Whether or not the rows interaction is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not row should display as a striped row.
   */
  isStriped: PropTypes.bool,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)
   */
  onRowAction: PropTypes.func,
  onCheckAction: PropTypes.func,
  /**
   * Function callback returning the html node for the row.
   */
  refCallback: PropTypes.func,
  /**
   * Additional attributes to be passed to the row.
   */
  // eslint-disable-next-line react/forbid-prop-types
  attrs: PropTypes.object,
});

export default rowShape;