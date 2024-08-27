import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: 'hsl(212, 100%, 50%)', // Blue
        light: 'hsl(217, 20%, 51%)', // Light blue
        dark: 'hsl(217, 35%, 45%)', // Dark blue
      },
      background: {
        default: 'hsl(220, 40%, 13%)', // Very dark blue (darker)
        paper: '#1E2B48', // Very dark background
      },
      text: {
        primary: 'hsl(0, 0%, 100%)', // White
        secondary: 'hsl(220, 40%, 80%)', // Light gray
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