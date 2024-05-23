import React from "react";
import { Stack } from "@mui/material";

function MuiGrid() {
  return (
    <Stack item lg={12} container spacing={2}>
      <Stack item lg={3} xs={8}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 1</h1>
      </Stack>
      <Stack item lg={3} xs={8}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 1</h1>
      </Stack>
      <Stack item lg={3} xs={8}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 1</h1>
      </Stack>
      <Stack item lg={3} xs={8}>
        <h1 style={{ backgroundColor: "skyblue" }}>Block 1</h1>
      </Stack>
    </Stack>
  );
}

export default MuiGrid;
