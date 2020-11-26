import React from "react";
import { Typography, Grid,Card, CardContent,CardMedia,CardHeader,Accordion,AccordionSummary,AccordionDetails  } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import appbartoplevel from "./images/appbar_1.png"

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 16,
    fontWeightBold: "true",
    noWrap: "true",
  },
  card_root:{
    
    marginTop: "25px",
    marginBottom: "25px",
    width: "100%"
  },
  root: {
    borderRadius: 0,
    outline: "false",
    width: "100%",
    justify:"center",
  
    
  },
}));

const AppBarTutorial2 = () => {
  const classes = useStyles();

  return (
    <Grid
      xs={12}
      container
      item
      position="static"
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
      style={{marginTop: "64px"}}
    >
      <Grid  
      xs={10}
      container
      item 
      alignItems="center"
      justify="center"
      spacing={2}
      >
        <Card className={classes.root} elevation={0} square={true}>
        
          <CardContent>
            <Typography 
              align="center"
              variant="h4"
              color="initial"
             
            >
              <b>AppBar Tutorial</b>
              <br />
            <br />
            </Typography>
            
        </CardContent>
        
       
            
          <CardContent>
        <Typography
          align="center"
          variant="h5"
          color="initial"
         
        >
          <b>Segundo passo</b>
          <br />
            <br />
        </Typography>
        <Typography
          variant="body1"
          color="initial"
        
        >
          
          Em seguida vamos criar o ficheiro AppBarUI.jsx e vamos começar por importar os seguintes packages:
          
      
          </Typography>
          <br />
          <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <Typography >
                <b>
                Code
                </b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails >
              <CardContent style={{backgroundColor:"rgb(0 0 0 / 6%)",width: "100%"}}>
                <Typography 
                  variant="body1"  
                >
             
          {'import React, { useState } from "react"; '}
          <br />
          {'import { Toolbar, AppBar, Grid } from "@material-ui/core";'}
          <br />
          {'import { ListItemText, ButtonGroup, Button } from "@material-ui/core";'}
          <br />
          {'import { withRouter } from "react-router-dom";'}
          <br />
          {'import MenuItem from "@material-ui/core/MenuItem";'}
          <br />
          {'import { makeStyles } from "@material-ui/core/styles";'}
          <br />
                </Typography>
              </CardContent>
            </AccordionDetails>
          </Accordion>
        <Typography
          variant="body1"
        >

         
          
          <br />
          O material-ui é uma biblioteca que permite costumizar mais facilmente os compomentes da pagina WEB.
          O Toolbar e o AppBar são os componentes do material-ui necessarios para criar a barra de navegação,
          os compomentes ButtonGroup e Button vão ser usados para criar os butões
          na barra de navegação, o withRouter vai ser usado para obter os paths anteriormente defenidos no App.js
          permitindo ao utilizador mudar de pagina e por sua vez mudar de componente,
          e por ultimo o MenuItem é um exemplo de um icon para a costumatização dos botões.
         
          </Typography>





          
          </CardContent>
        </Card>
          
        
       
      
          
      </Grid>
    </Grid>
  );
};

export default AppBarTutorial2;
