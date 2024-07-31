"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            padding: "10px",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#004290",
    },
    secondary: {
      main: "#23af5f",
    },
  },
});

export default theme;
