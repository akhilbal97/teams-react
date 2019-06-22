import React, { Component } from "react";

import MultiSelect from "@khanacademy/react-multi-select";
import Checkbox from "material-ui/Checkbox";
import "./TeamMembers.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
      selectedOptions: []
    };
  }

  handleSelectedChanged = selectedOptions => {
    this.setState({ selectedOptions });
  };
  handleUnselectItem = removedVal => () =>
    this.setState({
      selectedOptions: this.state.selectedOptions.filter(
        option => option !== removedVal
      )
    });

  renderOption = ({ checked, option, onClick }) => (
    <Checkbox label={option.label} onCheck={onClick} checked={checked} />
  );
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
      return (
        <span>
          {selected.length} of {options.length} selected
        </span>
      );
    }
  };
  render() {
    const { selectedOptions } = this.state;

    return (
      <div>
        <h5>Projects</h5>
        <MultiSelect
          options={this.state.projects}
          selected={selectedOptions}
          ItemRenderer={this.renderOption}
          valueRenderer={this.renderSelected}
          onSelectedChanged={this.handleSelectedChanged}
        />
      </div>
    );
  }
}
