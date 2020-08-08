import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },
}));
const RightPane = () => {
  const classes = useStyles();
  return (
    <Grid item sm>
      <Paper className={classes.Paper}>Right Pane</Paper>
    </Grid>
  );
};

export default RightPane;
