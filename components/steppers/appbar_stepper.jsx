import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper,ButtonGroup } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import StepContent from "@material-ui/core/StepContent"
//appbar tutorials
import AppBarTutorial from "../tutorials/app_bar/app_bar_tutorial_1"
import AppBarTutorial2 from "../tutorials/app_bar/app_bar_tutorial_2"
import AppBarTutorial3 from "../tutorials/app_bar/app_bar_tutorial_3"
import AppBarTutorial4 from "../tutorials/app_bar/app_bar_tutorial_4"

//styles
const useStyles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper_style: {
    color: "rgb(0 172 193)",
  },
  blue: {
    color: "rgb(0 172 193) !important",
  },
  green: {
    color: "rgb(33 193 14 / 73%) !important",
  },
  text_field_container: {
    width: "100%",
    height: "100%",
    marginBottom: "8px",
  },
  resetContainer: {
    padding: theme.spacing(3),
    
  },
  button: {
    disableRipple: "true",
    backgroundColor: "black"
  },

  
}));

const AppBarStepper = (props) => {
  //styel classes
  const classes = useStyles();

  //make study a parent component varible to be obtained and passed to the children components
  
  //get the active step starting on 0
  const [activeStep, setActiveStep] = React.useState(0);

  //Array of the steps labels
  function getSteps() {
    return [
      "Definir o local da barra de navegação",
      'Criar o ficheiro da barra de nevegação "AppBarUI"',
      "Defenir a função de design e a função main",
      "Criar os componentes da função main",
    ];
  }
  
  //get define the steps by the step labels
  const steps = getSteps();

  //handle next  steps
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
 

 const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //handle reset, when user presses reset button, the active step goes to 0 and deletes the current incompleted study

  const handleReset = (e) => {
    setActiveStep(0);
    
  };

  //define the steps components
  function GetStepContent(stepIndex) {
    //set study variable in parent component

    switch (stepIndex) {
      case 0:
        /**
         * send parent props from parent component to child
         * study is obtained from the new_study_form, it's state is passed to the children
         * handlenext is passed so when the user submits each form, it passes to next step
         */
        return <AppBarTutorial />;
      case 1:
        // sequences form
        return <AppBarTutorial2 />;
      case 2:
        // metadata form
        return <AppBarTutorial3 />;
        case 3:
        // metadata form
        return <AppBarTutorial4 />;
      default:
        return "Tutorial complete";
    }
  }

  /**
   * Stepper alternativeLabel sets the labels under the icon instead in lign
   *
   * First part(first return) of the stepper is mapping labels and states of the steps
   *
   * Second part(second return) setting the top labels from the step
   * Step icons show as blue when step being filled, green when its completed
   *
   * Last part its a cancel button with the handle reset
   *
   */
console.log(StepContent)
  return (
    <Grid xs={12}
    container
    item
    position="static"
    direction="row"
    justify="center"
  alignItems="center"
    
  >
    <Grid  
    xs={2}
    container
    item 
    alignItems="center"
    justify="center"
    
    
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                StepIconProps={{
                  classes: {
                    active: classes.blue,
                    completed: classes.green,
                  },
                }}
                
                {...labelProps}
                              >
                
                {label}
              </StepLabel>
              <StepContent>
              <ButtonGroup className={classes.button}>
                <Button 
                  style={{color: "rgb(0 172 193)"}}  
                  onClick={handleNext}  
                >
                  {activeStep === steps.length - 1 ? <b>Finish </b> : <b>Continue</b>}
                </Button>
                <Button 
                  style={{color: "rgb(0 172 193)"}} 
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  <b>Back</b>
                </Button>
              </ButtonGroup>
            </StepContent>
          </Step>
        );
      })}
    </Stepper>
  </Grid>
<Grid  
        xs={8}
        container
        item 
        alignItems="center"
        justify="center"
   
    >
      <Paper square elevation={0} className={classes.resetContainer}>
          <Typography className={classes.instructions}>
            {GetStepContent(activeStep)}
          </Typography>
          {activeStep === steps.length && (
          <Button style={{maxWidth: '100%', maxHeight: '100%', minWidth: '100%', minHeight: '100%'}} onClick={handleReset} >
            Reset
          </Button>
           )}
        </Paper>
     

   

    </Grid>
    </Grid>
  
  );
};
export default withRouter(AppBarStepper);
