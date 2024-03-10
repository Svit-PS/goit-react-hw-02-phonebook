import PropTypes from 'prop-types';

const Filter = ({ filterChange }) => {
  return (
    <>
      <h4>Find contacts by name</h4>
      <input type="text" name="filter" onChange={filterChange} />
    </>
  );
};

Filter.prototype = {
  filterChange: PropTypes.func.isRequired,
};
export default Filter;
