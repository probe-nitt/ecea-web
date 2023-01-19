import { createTheme } from '@mui/material/styles';
import { darkPalette, lightPalette } from './colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPalette,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...lightPalette,
  },
});

export default lightTheme;
