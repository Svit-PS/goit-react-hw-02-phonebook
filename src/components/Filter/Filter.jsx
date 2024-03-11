import React, { Component } from 'react';
import { LabelFilter } from './Filter.styled';

class Filter extends Component {
  state = { filterStr: '' };

  handleChange = ({ target: { value } }) => {
    this.setState({ filterStr: value });
    this.props.filterChange(value);
  };

  render() {
    return (
      <>
        <LabelFilter htmlFor="inFind">
          Find contacts by name
          <input
            id="inFind"
            type="text"
            name="filter"
            value={this.state.filterStr}
            onChange={this.handleChange}
          />
        </LabelFilter>
      </>
    );
  }
}
export default Filter;
