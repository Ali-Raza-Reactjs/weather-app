import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#078396",
    },
    secondary: {
      main: "rgb(242, 201, 98)",
    },
    error: {
      main: "rgb(179, 25, 66)",
    },
  },
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    lineHeight: "1px",
  },
});
// responsiveness
theme.typography.h1 = {
  fontSize: 40,
  fontWeight: 700,
  color: "rgb(242, 201, 98)",
  [theme.breakpoints.down("md")]: {
    fontSize: 36,
  },
};
theme.typography.h2 = {
  fontSize: 30,
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    fontSize: 26,
  },
};
theme.typography.h3 = {
  fontSize: 26,
  fontWeight: 300,
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: 22,
  },
};
theme.typography.body1 = {
  fontSize: 22,
  fontWeight: 300,
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: 18,
  },
};
theme.typography.body2 = {
  fontSize: 20,
  fontWeight: 300,
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
