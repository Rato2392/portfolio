import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React from "react";
import { Grid, Card, CardMedia } from "@material-ui/core";
import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  ButtonGroup,
} from "@material-ui/core";

import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//icons
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import InfoIcon from "@material-ui/icons/Info";
//image

//styles
const useStyles = makeStyles({
  
  root: {
    width: "100%",
    backgroundColor: " black",
    height: "100px",
  },
  image_root: {
    backgroundColor: "#00acc1",
  },
  button_color: {
    backgroundColor: "transparent",
  },
  white_space: {
    height: "50px",
  },
});

const SimpleBottomNavigation = (props) => {
  const classes = useStyles();

  const { history } = props;

  const [value, setValue] = React.useState(0);
  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  };
  function backNormal(e) {
    e.target.style.color = "black";
    e.target.style.textShadow = "";
  }
  function changeBackground(e) {
    e.target.style.color = "#00acc1";
    e.target.style.textShadow = "0 0 .50px #333, 0 0 .50px #333";
  }
  function changeBackgroundhover(e) {
    e.target.style.changeBackground = "transperant !important";
  }

  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon style={{ color: "black",  }} />,
      
    },
    {
      text: "About",
      icon: <HomeIcon style={{ color: "black",  }} />,
      
    },
    {
      text: "Contact",
      icon: <HomeIcon style={{ color: "black",  }} />,
      
    },
  ];
  return (
    <BottomNavigation className={classes.root} elevation="0">
      <Grid
        xs={12}
        container
        item
        position="static"
        direction="column"
        justify="center"
        alignItems="center"
      >
      <ButtonGroup className={classes.flextbutton} style={{backgroundColor: "rgb(0 172 193)"}} >
        {itemsList.map((item) => {
              const { text, icon, onClick } = item;
              return (
                    <Button key={item.text} elevation={0} style={{ color: "black",  }}  onClick={onClick}>
                     {icon}
                      <b style={{marginLeft: "5px"}}>{text}</b>
                    </Button>
              );})}
              </ButtonGroup>
        
        
      </Grid>
    </BottomNavigation>
  );
};
export default withRouter(SimpleBottomNavigation);
