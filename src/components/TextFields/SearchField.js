import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Box,
  CircularProgress,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

export default function SearchField(props) {
  const { value, onChange, handleSearch, placeholder, loading } = props;
  const theme = useTheme();
  const md_down = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        width: "100%",
        "& .MuiInputBase-input": {
          height: { xs: 40, md: 50 },
        },
        "& .MuiInputBase-root": {
          height: { xs: 40, md: 50 },
          borderRadius: { xs: "20px", md: "50px" },
          paddingRight: 1,
          background: "#fff",
        },
      }}
      InputProps={{
        endAdornment: loading ? (
          <Box className={"flex_center"}>
            <CircularProgress size={24} />
          </Box>
        ) : (
          <IconButton
            size={md_down ? "small" : "medium"}
            sx={{
              backgroundColor: "grey",
              ":hover": {
                backgroundColor: "grey",
              },
            }}
            onClick={() => {
              handleSearch();
            }}
          >
            <SearchOutlinedIcon sx={{ color: "#fff" }} />
          </IconButton>
        ),
      }}
      onKeyDown={(e) => {
        return e.key === "Enter" && handleSearch();
      }}
    />
  );
}
