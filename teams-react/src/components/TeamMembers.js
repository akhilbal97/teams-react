import React, { Component } from "react";
import MultiSelect from "@khanacademy/react-multi-select";
import Checkbox from "material-ui/Checkbox";
import "./TeamMembers.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.employees,
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
      return <span>No Members available</span>;
    }

    if (!selected.length) {
      return <span>Select Members ({options.length} available)</span>;
    }

    if (selected.length === options.length) {
      return <span>All Members</span>;
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
        <h5>Team Members</h5>
        <MultiSelect
          options={this.state.employees}
          selected={selectedOptions}
          ItemRenderer={this.renderOption}
          valueRenderer={this.renderSelected}
          onSelectedChanged={this.handleSelectedChanged}
        />
      </div>
    );
  }
}
