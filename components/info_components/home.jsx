import React from "react";

import {  Card, CardContent, Grid, Link,CardMedia,Accordion,AccordionSummary,AccordionDetails,Typography  } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import araragi from "./images/araragi.png"
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import "./home.css"

const useStyles = makeStyles(() => ({
  container_root:{
    width:"1000px",
  },
  root: {
    borderRadius: 0,
    outline: "false",
    
 
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    
    fontWeight: "fontWeightBold",
  },
  pos: {
    marginBottom: 12,
  },
  link_color: {
    color: "orange",
  },
  
  image_size:{
    height: "200px",
    width: "200px",
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    flex: '1 0 auto',
  },
  link_color: {
    color: "orange",
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    
    <Grid
      container
      direction="row"
      item
      xs={10}
      position="static"
      justify="center"
      alignItems="center"
      className={classes.container_root}
    >
      <Grid item xs={12} position="static" >
    
        <Card  class="background_overlay"  className={classes.root} elevation={1} >
          <div style={{display: "flex"}}>
            <CardMedia
            className={classes.image_size}
            component="img"
            src= {araragi}
          />
           <div >
              <CardContent className={classes.content}>
                <Typography variant="h4" className={classes.title} color="initial">
                João Paulo Rato
                </Typography>
              </CardContent>
              <div className={classes.details}>
                <CardContent   >
                  <Typography className={classes.title} color="initial">
                    <b>Birth Date:  </b>
                    27/06/1998
                    <br />
                    <b>First language:  </b>
                    Portuguese
                    <br />
                    <b>Second language:  </b>
                    English
                  </Typography>
                </CardContent>
              <CardContent >
                <Typography className={classes.title} color="initial">
                  
                  <b>Contact</b>
                  <br />
                  <div style={{
                    display: 'inline-flex',
                    VerticalAlign: 'text-bottom',
                    BoxSizing: 'inherit',
                    textAlign: 'center',
                    AlignItems: 'center' }}
                  >
                    <PhoneIcon style={{marginRight: "5px"}} fontSize="small"/>
                    <b> (+351) 916129039  </b>
                  </div>
                  <br />
                  <div style={{
                    display: 'inline-flex',
                    VerticalAlign: 'text-bottom',
                    BoxSizing: 'inherit',
                    textAlign: 'center',
                    AlignItems: 'center' }}
                  >
                    <MailIcon style={{marginRight: "5px"}} fontSize="small"/>
                    <b> joao.r.rato@gmail.com </b>
                  </div>
                </Typography>
              </CardContent>
              </div>
            </div>
          </div>
          <br />
            <Accordion class="background_overlay" elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography >
                  <b>
                    Education Background
                  </b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <b>2016 – 2019</b> Bachelor degree in Bioinformatics at Escola Superiror
                  de Tecnologia do Barreiro, Instituto Politécnico de Setubal, with a final
                  mark: 14/20
                </Typography>
              </AccordionDetails>
            </Accordion >
            <Accordion class="background_overlay" elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <b>Professional Experience</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <b>April 2019 – july 2019</b> Internship at Instituto de Biología Molecular y
                  Celular de Plantas, Universitat Politècnica de València, València, Spain.
                  <br />
                  <b>june 2020 – ...</b> Bioinformatics speacialist at 
                  <Link 
                    className={classes.link_color}
                    href="https://biodata.pt/">
                      <b>{" BioData.pt "}</b>
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion class="background_overlay" elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>
                  <b>Technical Skills</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <b>Programing Languages: </b> Bash, Python, R, SQL, JavaScript
                  <br />
                  <b>GNU/Linux</b>
                  <br />
                  <b>Machine Learning, Data Mining</b>
                </Typography>
            </AccordionDetails>
          </Accordion>         
        </Card>
  
      </Grid>
    </Grid>
 
  );
};

export default Profile;