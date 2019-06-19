import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import Grid from './components/Grid.js'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});
function App() {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
    <div id="app">
      <NavBar title="Assignment 3 - Team Details"/>
      <Grid/> 
    </div>
    </MuiThemeProvider>
  );
}

export default App;
