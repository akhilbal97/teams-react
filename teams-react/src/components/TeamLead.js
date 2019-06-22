import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  select: {
    backgroundColor: "#242424",
    color: "white",
    minWidth: 330,
    maxHeight: 35
  }
}));

export default function TeamLead(props) {
  const classes = useStyles();
  const [lead, setLead] = React.useState(props.team.TeamLead);
  const [employees] = React.useState(props.employees);

  function handleChange(event) {
    setLead(event.target.value);
    props.team.TeamLead = event.target.value;
  }

  function getEmployeeById(id) {
    let empFound = employees.find(emp => emp.value === id);
    if (empFound) return empFound.label;
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="outlined" className={classes.formControl}>
        <h5>Team Lead</h5>
        <Select
          className={classes.select}
          value={lead}
          onChange={handleChange}
          input={<OutlinedInput name="lead" id="team-lead" />}
          renderValue={selected => getEmployeeById(selected)}
        >
          {employees.map(emp => (
            <MenuItem key={emp.value} value={emp.value}>
              {getEmployeeById(emp.value)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
}
