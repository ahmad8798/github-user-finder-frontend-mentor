import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(212, 100%, 50%)', // Blue
      light: 'hsl(217, 20%, 51%)', // Light blue
      dark: 'hsl(217, 35%, 45%)', // Dark blue
    },
    background: {
      default: 'hsl(227, 100%, 98%)', // Very light blue
      paper: 'hsl(0, 0%, 100%)', // White
    },
    text: {
      primary: 'hsl(222, 41%, 20%)', // Dark blue (darker)
      secondary: 'hsl(220, 40%, 13%)', // Very dark blue (darker)
    },
  },
  typography: {
    fontFamily: '"Space Mono", monospace',
    fontSize: 15,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    body1: { fontWeight: 400, fontSize: '15px' },
    body2: { fontWeight: 400, fontSize: '15px' },
  },
});
