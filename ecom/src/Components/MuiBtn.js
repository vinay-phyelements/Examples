import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

function MuiBtn() {
  return (
    <div>
      <Button variant="text" style={{ margin: 10}} color="secondary">
        Text
      </Button>
      <Button variant="contained" style={{ margin: 10}} color="success" size="large">
        Contained
      </Button>
      <Button variant="outlined" style={{ margin: 10}} color="error" disabled>
        OutLined
      </Button>
      <Button variant="contained" style={{margin:10}} startIcon={<DeleteIcon/>}>
        Delete
      </Button>
      <Button variant="outlined" style={{margin:10}} endIcon={<SendIcon/>}>
        Send
      </Button>
    </div>
  );
}

export default MuiBtn;
