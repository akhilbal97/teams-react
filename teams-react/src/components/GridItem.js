import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";
import TeamLead from "./TeamLead.js";
import TeamMembers from "./TeamMembers.js";
import Projects from "./Projects.js";
import Axios from "axios";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#6ABEFF"
  },
  card: {
    backgroundColor: "#F5573B",
    overflow: "visible"
  },
  body: {
    backgroundColor: "#404040",
    color: "white"
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  },
  items: {
    maxWidth: 420,
    marginTop: 50
  },
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function GridItems(props) {
  const team = props.Team;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [PopRes, setPopRes] = React.useState(null);

  const projects = props.Projects.map(prj => {
    return {
      value: prj._id,
      label: `${prj.ProjectName}`
    };
  });
  const employees = props.Employees.map(emp => {
    return {
      value: emp._id,
      label: `${emp.FirstName} ${emp.LastName}`
    };
  });

  function handleClose(event) {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : null;

  // function handleSave(event) {
  //   setAnchorEl(event.currentTarget);
  //   const saveData = async () => {
  //     await Axios.put(
  //       "https://polar-ravine-70615.herokuapp.com/team/" + props.Team._id,
  //       {
  //         Projects: team.Projects,
  //         Employees: team.Employees,
  //         TeamLead: team.TeamLead
  //       }
  //     )
  //       .then(res => setPopRes(res.data.message))
  //       .catch(err => alert(err.message));
  //   };
  //   saveData();
  // }

  const classes = useStyles();
  return (
    <Grid item xs={4} className={classes.items}>
      <Card className={classes.card}>
        <CardHeader
          title={team.TeamName}
          action={
            <React.Fragment>
              <Button
                variant="contained"
                size="small"
                className={classes.button}
              >
                <SaveIcon
                  className={clsx(classes.leftIcon, classes.iconSmall)}
                />
                Save
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <Typography className={classes.typography}>{PopRes}</Typography>
              </Popover>
            </React.Fragment>
          }
        />

        <CardContent className={classes.body}>
          <TeamLead team={team} employees={employees} />
          <TeamMembers team={team} employees={employees} />
          <Projects team={team} projects={projects} />
        </CardContent>
      </Card>
    </Grid>
  );
}
