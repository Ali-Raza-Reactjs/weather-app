import { Box } from "@mui/material";
import React from "react";

export default function ImgBox(props) {
  const { src, sx } = props;
  return <Box component={"img"} src={src} sx={sx} />;
}
