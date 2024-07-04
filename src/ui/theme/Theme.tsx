import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { ThemeProps } from "./types";
import { themeLightPalette } from "./palette";
export const Theme = ({ children }: ThemeProps) => {
  const palette = themeLightPalette;
  return (
    <ThemeProvider theme={palette}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};