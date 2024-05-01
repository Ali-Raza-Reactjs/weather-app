import { Box } from "@mui/material";
import React from "react";

export default function PageMainBox({ children }) {
  return (
    <Box
      className={"flex_center"}
      sx={{
        p: 1,
        bgcolor: "rgb(236 240 243)",
        height: "100vh",
      }}
    >
      {children}
    </Box>
  );
}
