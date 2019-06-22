import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  text: {
    color: "white"
  },
  bar: {
    background: "#282828"
  }
});

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.bar} position="static" color="inherit">
      <Toolbar>
        <Typography className={classes.text} variant="h6" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
