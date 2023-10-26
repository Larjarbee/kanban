'use client';

import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  mode: 'light',
  toggle: () => {},
  toggleNav: true,
  handleToggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState('light');
  const [toggleNav, setToggleNav] = useState(true);

  const toggle = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggle = () => {
    setToggleNav(() => !toggleNav);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle, toggleNav, handleToggle }}>
      <div className='theme'>{children}</div>
    </ThemeContext.Provider>
  );
};
