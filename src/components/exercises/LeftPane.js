import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },
}));
const LeftPane = () => {
  const classes = useStyles();
  return (
    <Grid item sm>
      <Paper className={classes.Paper}>Left Pane</Paper>
    </Grid>
  );
};

export default LeftPane;
