import React, { Component } from 'react';

import MultiSelect from '@khanacademy/react-multi-select';
import Checkbox from 'material-ui/Checkbox';
import './TeamMembers.css';

const options = [
  { value: 1, label: "Brian Genisio" },
  { value: 2, label: "John Doe" },
  { value: 3, label: "Jane Doe" },
  { value: 4, label: "Zach Morris" },
  { value: 5, label: "Kelly Kapowski" },
  { value: 6, label: "A.C. Slater" },
  { value: 7, label: "Lisa Turtle" },
  { value: 8, label: "Jessie Spano" },
  { value: 9, label: "Samuel Powers" },
];

// const styles = {
//   wrapper: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     maxHeight: '100%',
//   },
// };

export default class MultiSelectExample extends Component {
  state = {
    selectedOptions: [],
  }

  handleSelectedChanged = (selectedOptions) => (
    this.setState({ selectedOptions })
  )

  handleUnselectItem = (removedVal) => () => (
    this.setState({
      selectedOptions: this.state.selectedOptions
        .filter(option => option !== removedVal)
    })
  )

  renderOption = ({ checked, option, onClick }) => (
    <Checkbox
      label={option.label}
      onCheck={onClick}
      checked={checked}
    />
  )

  renderSelected = (selected, options) => {
    if (!options.length) {
      return <span>No Projects available</span>;
    }

    if (!selected.length) {
      return <span>Select Projects ({options.length} available)</span>;
    }

    if (selected.length === options.length) {
      return <span>All Projects Selected</span>;
    }

    if (selected.length > 3) {
      return <span>{selected.length} of {options.length} selected</span>;
    }
  }
  render() {
    const { selectedOptions } = this.state;

    return (
      <div>
      <h5>Team Members</h5>
    <MultiSelect
      options={options}
      selected={selectedOptions}
      ItemRenderer={this.renderOption} 
      valueRenderer={this.renderSelected}
      onSelectedChanged={this.handleSelectedChanged}
    />
    </div>
    );
  }
}