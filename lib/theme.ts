import { createTheme } from '@mui/material/styles';

export const getThemeByName = (name: string) => {
  const isDark = name === 'dark';

  return createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: {
        main: '#009688', // Teal 500
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#4db6ac', // Teal 300
      },
      background: {
        default: isDark ? '#263238' : '#e0f2f1', // light teal tint for background
        paper: isDark ? '#37474f' : '#ffffff',
      },
      text: {
        primary: isDark ? '#ffffff' : '#004d40', // dark teal
        secondary: isDark ? '#b2dfdb' : '#00695c', // accent teal
      },
    },
    // typography: {
    //   fontFamily: `'Fira Code', 'Source Code Pro', 'Courier New', monospace`,
    // },
  });
};
