import React from "react";
import { ThemeProvider } from "styled-components";

export const defaultTheme = {
  colors: {
    background: "#F2F2EA",
  },
};

export const party = {
  colors: {
    background: "#F2F2EA",
  },
};

const Theme = ({ children }: any) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default Theme;
