import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import TeamLead from './TeamLead.js';
import TeamMembers from './TeamMembers.js';
import Projects from './Projects.js';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#6ABEFF"
    },
    card:{
      backgroundColor:"#F5573B",
      overflow: 'visible',
    }, 
    body:{
      backgroundColor:"#404040",
      color: "white",
    },
    leftIcon: {
        marginRight: theme.spacing(1),
      },
    rightIcon: {
        marginLeft: theme.spacing(1),
      },
    iconSmall: {
        fontSize: 20,
      },
  }));

export default function GridItems(props){
    const classes = useStyles();
    return(
    <Grid item xs={4}>
        <Card className={classes.card}>
            <CardHeader
            title={props.title}
            action={
                <Button variant="contained"
                size="small" className={classes.button}>
                <SaveIcon color="black" className={clsx(classes.leftIcon, classes.iconSmall)} />
                Save
                </Button>
            }
            />
            <CardContent className={classes.body}>
                <TeamLead/>
                <TeamMembers/>
                <Projects/>
            </CardContent>
        </Card>
    </Grid>
    )
}