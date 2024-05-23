import React from "react";
import { Grid } from "@mui/material";

function MuiGrid() {
  return (
    <Grid item lg={12} container spacing={2} whiteSpace={0}>
      <Grid item lg={3} xs={8}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 1</h1>
      </Grid>
      <Grid item lg={3} xs={4}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 2</h1>
      </Grid>
      <Grid item lg={3} xs={12}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 3</h1>
      </Grid>
      <Grid item lg={3} xs={12}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 4</h1>
      </Grid>
      <Grid item lg={3} xs={12}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 5</h1>
      </Grid>
    </Grid>
  );
}

export default MuiGrid;
