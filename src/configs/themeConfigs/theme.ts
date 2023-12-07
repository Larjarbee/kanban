import { colors } from '@/common/colors';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  preload: false,
});

export const getThemeConfig = (mode: any) => ({
  palette: {
    mode,
    primary: {
      main: colors.main,
    },

    text: {
      ...(mode === 'light'
        ? {
            primary: colors.Black,
          }
        : {
            primary: colors.White,
            // secondary: grey[500],
          }),
    },
    // mode: 'light',

    // primary: {
    //   main: '#635FC7',
    //   light: '#A8A4FF',
    // },

    // secondary: {
    //   main: '#625fc747',
    // },
  },
  typography: {
    fontFamily: jakarta.style.fontFamily,
    body1: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        // InputLabelProps: { shrink: true },
      },
    },
    MuiDialog: {
      defaultProps: {
        // maxWidth: 'xs',
      },
    },
  },
});
