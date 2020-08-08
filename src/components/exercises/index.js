import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Exercise = () => {
  return (
    <Grid container>
      <LeftPane />
      <RightPane />
    </Grid>
  );
};

export default Exercise;
