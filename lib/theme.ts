import { createTheme } from '@mui/material/styles';

export const getThemeByName = (name: string) =>
  createTheme({
    palette: {
      mode: name === 'dark' ? 'dark' : 'light',
    },
  });
