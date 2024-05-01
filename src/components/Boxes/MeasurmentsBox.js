import { Box, Typography } from "@mui/material";
import React from "react";
import ImgBox from "./ImgBox";

export default function MeasurmentsBox(props) {
  const { img, title, value } = props;
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box>
        <ImgBox src={img} sx={{ maxWidth: 30 }} />
      </Box>
      <Box>
        <Typography variant="body2" color={"#fff"}>
          {value}
        </Typography>
        <Typography variant="body1" color={"#fff"}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
