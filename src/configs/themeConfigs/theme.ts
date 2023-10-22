import { Plus_Jakarta_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const jakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: jakarta.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
