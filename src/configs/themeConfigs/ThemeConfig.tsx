'use client';
import React, { useContext, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import 'tailwindcss/tailwind.css';
import { getThemeConfig } from './theme';
import { ThemeContext } from '@/hooks/ThemeContext';

export default function ThemeConfig({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useContext(ThemeContext);

  const theme = useMemo(() => createTheme(getThemeConfig(mode)), [mode]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
