import React from "react";
import { Typography, Grid,Card, CardContent,CardMedia,CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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

const AppBarTutorial3 = () => {
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
          <b>Terceiro passo</b>
          <br />
            <br />
        </Typography>
        <Typography
          variant="body1"
          color="initial"
        
        >

          Agora que as dependencias estão instaladas vamos construir os componentes do AppBarUI.
          <br />
          Em primerio lugar vamos criar a classe "useStyles", onde vamos defenir/guardar os designs e proporções dos componentes, 
          para isso o "useStyles" usa o makeStyles do material-ui para poder mudar os parametros dos componentes.
          <br />
          <br />
 
          {'const useStyles = makeStyles(() => ({'}
          <br />
          {' colour: {'}
          <br />
          {'backgroundColor: "black",'}
          <br />
          {'height: "64px"},'}
          <br />
          {'AppBar: {'}
          <br />
          {'alignItems: "center",},'}
          <br />
          {'grid_container: {'}
          <br />
          {'backgroundColor: "transparent",},'}
          <br />
          {' flexContainer: {'}
          {'display: "flex",'}
          {'flexDirection: "row",'}
          {' padding: 0,}'}
          {' }));'}
  

          <br />
          <br />
          
          Aseguir vamos criar o componente AppBarUI

          <br />
          <br />
          {'const AppBarUi = (props) => {'}
          <br />
          {' return ('}
          <br />
          {');'}
          <br />
          {'};'}
          <br />
          {'export default withRouter(AppBarUi);'}
          <br />
          <br />
          Agora já se pode começar a constuir as funcionalidades do componente.
          Como está defenido na função, o AppBarUI recebe as propriepdades dos componente "pai",
          por isso é necessario defenir uma variavel que guarda estas propriepdades
          <br />
          <br />
          {'const { history } = props;'}
          <br />
          <br />
          Seguindo a mesma logica é necessario guardar a classe "useStyles" numa variavel
          <br />
          <br />
          {'const classes = useStyles();'}
          <br />
          <br />
          </Typography>

          </CardContent>
        </Card>
  
      </Grid>
    </Grid>
  );
};

export default AppBarTutorial3;
