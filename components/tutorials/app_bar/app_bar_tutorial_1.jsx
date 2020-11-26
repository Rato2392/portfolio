import React from "react";
import { Typography, Grid,Card, CardContent,CardMedia, CssBaseline, Tab,CardHeader,Accordion,AccordionSummary,AccordionDetails } from "@material-ui/core";
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

const AppBarTutorial = () => {
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
            <Typography
              variant="body1"
              color="initial"
              component={("body1")}
            >
              
                A barra de navegação normalmente encontra-se no topo da pagina,
                este apresenta varios botões que permitem ao utilizador navegar entre
                as diferentes funcionalidades.
              
            </Typography>
        </CardContent>
        <CardContent>
        <Typography
          align="center"
          variant="h5"
          color="initial"
         
        >
          <b>Primeiro passo</b>
          <br />
            <br />
        </Typography>
        <Typography
          variant="body1"
          color="initial"
        
        >
          
            A barra de navegação normalmente encontra-se no topo da pagina,
            para isso é necessario colocar o a barra de navegação no nivel mais acima de todos componentes
            portanto depois de se ter criado o <b>{"<Grid>"}</b> principal, coloca-se a tag <b>{"<AppBarUI>"}</b>.
         
          </Typography>
          </CardContent>
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
                  <b style={{color:"rgb(0 183 65)"}}>
                  {"<CssBaseline />"}
                  <br />
                  
                  {'<Grid'}
                  </b>
                  <p style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>
                  {'  display="static"'}
                  <br />
                  {'  direction="row"'}
                  <br />
                  {'  container '}
                  <br />
                  {'  item '}
                  <br />
                  {'  className={classes.container}'}
                  <br/>
                  {'  style={{ body: classes.body }} '}
                  <br />
                  {'  xs={12} '} 
                  <br />
                  {'  spacing={0}'}
                  <br />
                  {'  alignItems="baseline" '} 
                  <br />
                  {'  justify="center"'}
                  </p>
                  <b style={{color:"rgb(0 183 65)"}}>
                  {' > '}
                  </b>
                  <br />
                  <b style={{marginLeft:"5em",color:"rgb(0 183 65)"}}>
                  {'  <AppBarUI />'}
                  </b>
                  <p style={{marginLeft:"5em"}}>
                  {' {...} '}
                  </p>
                  <b style={{color:"rgb(0 183 65)"}}>
                  {"</Grid>"}
                  </b>
                  
                </Typography>
              </CardContent>
            </AccordionDetails>
          </Accordion>
        </Card> 
      </Grid>
    </Grid>
  );
};

export default AppBarTutorial;
