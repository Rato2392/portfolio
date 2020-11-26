import React from "react";
import { Typography, Grid,Card, CardContent,CardMedia,CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import appbartoplevel from "./images/appbar_1.png"

const useStyles = makeStyles(() => ({
  grid_root: {
    position: "static",
    direction:"row",
    
    alignItems:"center",
  },
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
/**
 * falta fazer a logica do appbar
 */
const AppBarTutorial4 = () => {
  const classes = useStyles();

  return (
    <Grid
      xs={12}
      container
      item
      justify="center"
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
            </Typography>
          </CardContent>
        <CardContent>
          <Typography
            align="center"
            variant="h5"
            color="initial"
          >
            <b>Quarto passo</b>
            <br />
            <br />
          </Typography>
          <Typography
            variant="body1"
            color="initial"
          >
            Agora é necessario criar os componentes da barra de navegação.
            Até agora criamos a função "AppBarUI" e o design dos seus componentes, mas ainda não implementamos o design.
            Agora vamos construir os componentes que fazem parte da barra de navegação e inserir o design anteriormente defenido.
            Portanto a seguir ao "return (" vamos criar um Grid que vai conter a nossa barra de navegação e vai ter a seguintes propriedades:
            <br />
            <br />
            <b style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>container</b>
            {': pois como foi dito anteriormente ele vai conter a nossa barra de navegação.'}
            <br /> 
            <b style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>item</b>
            {': este grid faz parte do grid do componente anterior (defenido no App.js)'}
            <br /> 
            <b style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>direction="row"</b>
            {': queremos que os componentes apareçam na horizontal'}
            <br /> 
            <b style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>justify="space-between"</b>
            {': os componentes vão ocupar todo o espaço do grid mantedo a maior distancia possivel entre eles'}
            <br />
            <b style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>alignItems="center"</b> 
            {': os componentes vão ser alinhados no centro do grid'}
            <br />
            <b style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>{'xs={12}'}</b>  
            {': o grid vai ocupar todo o espaço possivel no componente onde ele está inserido'}
            <br /> 
            <b style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>{'className={classes.grid_container}'}</b>
            {': aqui estamos a definir o design do grid que foi defenido anteriormente'}
            <br />
            <br />
            No final o "Grid" deverá ter este aspeto.
            <br />
            <br />
            <CardContent style={{backgroundColor:"rgb(0 0 0 / 6%)"}}>
              <b style={{color:"rgb(0 183 65)"}}>
                {"<Grid "}
                <br />
              </b>
              <p style={{marginLeft:"2.5em", color:"rgb(0 114 255)"}}>
                {'container'}
                <br />
                {'item'}
                <br />
                {'direction="row"'}
                <br />
                {'justify="space-between"'}
                <br />
                {'alignItems="center"'}
                <br/>
                {'xs={12}'}
                <br/>
                {'className={classes.grid_container}'}
              <b style={{color:"rgb(0 183 65)"}}>
                {'>'}
              </b>      
              </p>
            </CardContent>
            <br/>
            <br/>
            Depois de construido o grid que vai conter os nossos componentes podemos lá colocar a barra de navegação,
            por isso vamos criar o componente "AppBar" que serve de base para colocar as nossas funcionalidades de navegação ou outro tipo de opções
            para o componente atual.
            Por isso dentro do Grid que acabamos de criar vamos defenir o AppBar com os seguintes atributos:
            <br />
            <br /> 
            {'-> position="fixed": aqui estamos a definir que o appbar move-se para baixo a medida que o utilizador faz scroll down (static se quisermos que o appbar fique no topo'}
            <br /> 
            {'-> className={classes.colour}: aqui estamos a definir a cor que o appbar vai ter neste caso defenimos anteriormente o preto'}
            <br /> 
            {'-> elevation={0}: aqui estamos a definir que o appbar não vai aparecer com uma elevação relativamente aos outros componentes'}
            <br /> 
            {'-> className={classes.grid_container}: aqui estamos a definir o design do grid que foi defenido anteriormente'}
            <br />
            <br />
            Este será o aspeto do "AppBar"
            <br />
            <br />
            E por fim o ultimo componente que vai servir como base para colocar os botoes/menus.
            <br />
            <br />
            {'-> className={classes.AppBar}: os componentes vao ser alinhados no centro'}
            <br /> 
            {'-> disableGutters={false}: o componente toolbar vai aparecer com margens inves de estar justo ao extremo da tela'}
            <br /> 
            {'-> square="true": o componente vai ter uma forma mais solida com arestas inves de curvas'}
            <br />
            <br />
            No final vamos ter isto:
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AppBarTutorial4;
