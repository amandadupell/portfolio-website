import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: "#F2F2EA",
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
