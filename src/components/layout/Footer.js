import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Paper>
  );
};

export default Footer;
