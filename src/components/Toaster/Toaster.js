import { Alert, Snackbar } from "@mui/material";
import React from "react";

export default function Toaster(props) {
  const { open, handleClose, message } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      sx={{
        " .MuiPaper-root": {
          alignItems: "center",
        },
      }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
