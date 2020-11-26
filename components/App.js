import React, { useState, useEffect } from "react";
import "./App.css"

import { makeStyles } from "@material-ui/core/styles";
import {
  Route,
  Switch,
  Redirect,
  //BrowserRouter as Router,
} from "react-router-dom";
import { Grid} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline'


//design
import AppBarUi from "./design_components/App_bar_ui";
import SimpleBottomNavigation from "./design_components/footer";
//tutorials
import AppBarStepper from "./steppers/appbar_stepper"
import AppBarTutorial from "./tutorials/app_bar/app_bar_tutorial_1"
import AppBarTutorial2 from "./tutorials/app_bar/app_bar_tutorial_2"
//content
import Profile from "./info_components/home"
import image from "./images/back6.jpg"
const useStyles = makeStyles(() => ({
  container: {
    display: "static",
    height: "100%",
    minHeight: "100vh",
    //backgroundColor:"white",
    
  },
  div_root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url('+ image +')',
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "center"

  },
  body: {
    margin: "0px",
  },
  app_bar_width: { width: "inherit" },
}));

function App() {
  
  const classes = useStyles();

  return (
    <div className={classes.div_root}>
      <CssBaseline />

      <Grid
        display="static"
        direction="row"
        container
        item
        className={classes.container}
        style={{ body: classes.body }}
        xs={12}
        spacing={0}
        alignItems="baseline"
        justify="center"
        
      >
      
         
     
            
        <AppBarUi />
        <Grid
          item
          container
          xs={12}
          direction="column"
          display="static"
          alignItems="center"
          justify="center"
        >
          <Switch>
          <Route
              exact
              path="/appbartutorialstepper"
              render={(props) => <AppBarStepper {...props} />}
            />
          </Switch>
          <Switch>
          <Route
              exact
              path="/appbartutorial"
              render={(props) => <AppBarTutorial {...props} />}
            />
          </Switch>
          <Switch>
          <Route
              exact
              path="/appbartutorial2"
              render={(props) => <AppBarTutorial2 {...props} />}
            />
          </Switch>
          <Switch>
          <Route
              exact
              path="/profile"
              render={(props) => <Profile {...props} />}
            />
          </Switch>
          


          
        </Grid>
        
        
 
      </Grid>
        <Grid
          display="static"
          direction="row"
          container
          item
          style={{ body: classes.body }}
          xs={12}
          spacing={0}
          alignItems="baseline"
          justify="center"
        >
          <SimpleBottomNavigation />
       
      </Grid>
     
    </div>
  );
}
export default App;

/**
 * 
      
 */