import PropTypes from "prop-types";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

FilterButton.propTypes = {
  isPressed: PropTypes.bool,
  setFilter: PropTypes.func,
  name: PropTypes.string,
};

export default FilterButton;
