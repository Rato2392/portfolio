import React, { useState } from "react";
import { Toolbar, AppBar, Grid } from "@material-ui/core";
import { ListItemText, ButtonGroup, Button,IconButton } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from "clsx";

import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//icons

import Menu from "@material-ui/core/Menu";
import HomeIcon from "@material-ui/icons/Home";

import imageheader from "./images/header_img.jpg"

import Playermusic from "./music"
//styles
const useStyles = makeStyles(() => ({
  colour: {
    backgroundColor: "black",
    height: "64px"
  },
  AppBar: {
    alignItems: "center",
  },
  grid_container: {
    backgroundColor: "transparent",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },
  flextbutton:
  {flexGrow: 1,},
  
}));

const AppBarUi = (props) => {
  //passing props from APP



  const { history } = props;



  //get styles class
  const classes = useStyles();
  //horizontal list
  
 
 
  
  const [open, setOpen] = React.useState(false);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  //list of items on the app bar
  const menulist = [
    {
      text: <b>Setting the react base</b>,
      icon: <HomeIcon style={{ color: "rgb(0 172 193)" }} />,
    },
    {
      text: <b >AppBartutorial</b>,
      icon: <HomeIcon style={{ color: "rgb(0 172 193)" }} />,
      onClick: () => history.push("/appbartutorialstepper"),
    },
  ];


  const profileClick = () => {history.push("/profile")}

  const anchorRef = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
 


  return (
    <Grid
      container
      item
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
      className={classes.grid_container}
    >
      <AppBar position="fixed" className={classes.colour} elevation={0}>
     
        <Toolbar
          className={classes.AppBar}
          disableGutters={false}
          square="true"
        > 
            <ButtonGroup className={classes.flextbutton} style={{backgroundColor: "black"}} >
                    <Button style={{ color: "rgb(0 172 193)",  }}  onClick={profileClick}>
                      <HomeIcon style={{ color: "rgb(0 172 193)" }} />
                      <b style={{marginLeft: "5px"}}>Profile</b>
                    </Button>
                    <Button  style={{ color: "rgb(0 172 193)" }}  onClick={handleClick}>
                      <HomeIcon style={{ color: "rgb(0 172 193)" }} />
                      <b style={{marginLeft: "5px"}}>Tutorials</b> 
                    </Button>
              </ButtonGroup>
              <Playermusic />
              
                
                    <Menu
                      square={true}
                      elevation={1}
                      anchorEl={anchorEl}
                      getContentAnchorEl={null}
                      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                      transformOrigin={{ vertical: "top", horizontal: "center" }}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      {menulist.map((item) => {
                        const { text, icon, onClick } = item;
                        return (
                          <MenuItem key={item.text} elevation={0} square={true} onClick={onClick}>
                        
                          <ListItemText> {item.text}</ListItemText>
                          
                          </MenuItem>
                        );
                      })}
                    </Menu>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};
export default withRouter(AppBarUi);
