import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import VC_Tech from "../../Assets/icon-VCTech.png";
import Profile from "./ActionTab/Profile";

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box style={{ display: "flex" }}>
          <img src={VC_Tech} alt={VC_Tech} className={classes.iconSize} />
          <Typography variant="h6" className={classes.logo}>
            <strong>VC TECH</strong>
          </Typography>
        </Box>
        <Hidden smDown>
          <Box>
            <Typography variant="span">Username</Typography>
            <Profile />
          </Box>
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuRoundedIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
