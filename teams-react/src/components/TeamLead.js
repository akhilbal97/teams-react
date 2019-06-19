import React, {Component} from 'react';
import Select from 'react-select';


const colourStyles = {
    singleValue: () => ({
        color: 'white'
    }),
    placeholder: () => ({
        color: 'white'
    })
}

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

export default class TeamLead extends Component {
  state = {
    selected: [],
  }

  handleSelectedChanged = (selectedOptions) => (
    this.setState({ selectedOptions })
  )


  render() {
    const { selectedOptions } = this.state;

    return (
      <div>
      <h5>Team Lead</h5>
      
    <Select
      options={options}
      value={selectedOptions}
      onChange={this.handleSelectedChanged}
      styles={colourStyles}
      placeholder='Select Team Lead'
      isSearchable
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
        ...theme.colors,
        primary:'#FFBC98',
        neutral0: '#242424',
        primary25: '#ff9946',
        primary50:'#f78400',
        neutral150:'white'
        
        }
      })}
          />
    </div>
    );
  }
}
