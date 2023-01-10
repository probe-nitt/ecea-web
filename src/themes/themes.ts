import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

}

const theme = createTheme({
  palette: {
    mode: 'dark',
    neutral: {
      main: 'red',
    },
  },
});

export default theme;
