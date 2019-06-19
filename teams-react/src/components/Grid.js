import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from './GridItem.js';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: 60,
      marginBottom: 100,
      maxWidth: 1000,
      flexDirection: 'row',
      marginLeft: 10.0
    }
  }));

export default function CentredGrid(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing={3} justify='center'>
                <GridItem title="Team 1"/>
                <GridItem title="Team 2"/>
                <GridItem title="Team 3"/>
                <GridItem title="Team 4"/>
                <GridItem title="Team 5"/>
                <GridItem title="Team 6"/>
            </Grid>
        </div>
    )
}