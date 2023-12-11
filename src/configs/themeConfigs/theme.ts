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
});
