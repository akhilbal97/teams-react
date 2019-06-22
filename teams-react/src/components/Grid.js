import React from "react";
import Grid from "@material-ui/core/Grid";
import GridItem from "./GridItem.js";
import "./Grid.css";
import axios from "axios";

const teamsurl = "https://polar-ravine-70615.herokuapp.com/";

export default class extends React.Component {
  constructor(props) {
    // const classes = useStyles();
    super(props);
    this.state = {
      teams: [],
      employees: [],
      projects: [],
      loading: false,
      errored: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    var that = this;
    axios
      .all([
        axios.get(teamsurl + "teams-raw"),
        axios.get(teamsurl + "employees"),
        axios.get(teamsurl + "projects")
      ])
      .then(
        axios.spread(function(teams, emp, proj) {
          that.setState({
            teams: teams.data,
            employees: emp.data,
            projects: proj.data,
            loading: false
          });
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.state.errored) {
      return <div>alert(this.state.errored);</div>;
    }
    if (this.state.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }

    return (
      <div className="grid-root">
        <Grid container spacing={5} justify="center">
          {this.state.teams.map(team => (
            <GridItem
              key={team._id}
              Team={team}
              Employees={this.state.employees}
              Projects={this.state.projects}
            />
          ))}
        </Grid>
      </div>
    );
  }
}
