import PropTypes from 'prop-types';
import { LabelFilter } from './Filter.styled';

const Filter = ({ filterChange }) => {
  return (
    <>
      <LabelFilter htmlFor="inFind">
        Find contacts by name
        <input
          id="inFind"
          type="text"
          name="filter"
          onChange={event => filterChange(event.target.value)}
        />
      </LabelFilter>
    </>
  );
};

Filter.prototype = {
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
