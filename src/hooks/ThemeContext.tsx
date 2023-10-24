'use client';

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({ mode: 'light', toggle: () => {} });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState('light');

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className='theme'>{children}</div>
    </ThemeContext.Provider>
  );
};
