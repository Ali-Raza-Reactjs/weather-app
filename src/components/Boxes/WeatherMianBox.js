import { Box } from "@mui/material";
import React from "react";

export default function WeatherMianBox({ children }) {
  return (
    <Box
      className={"flex_col flex_between"}
      sx={{
        p: 2,
        width: "100%",
        maxWidth: 500,
        borderRadius: { xs: "5px", md: "10px" },
        bgcolor: "primary.main",
        height: 500,
      }}
    >
      {children}
    </Box>
  );
}
