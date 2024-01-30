'use client';

import React, { createContext, useState } from 'react';

export const ToggleContext = createContext({
  toggleNav: false,
  handleToggle: () => {},
});

export const ToggleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggle = () => {
    setToggleNav(() => !toggleNav);
  };

  return (
    <ToggleContext.Provider value={{ toggleNav, handleToggle }}>
      {children}
    </ToggleContext.Provider>
  );
};
