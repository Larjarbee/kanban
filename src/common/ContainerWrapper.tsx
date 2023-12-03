'use client';

import React, { useContext } from 'react';
import { ThemeContext } from '@/hooks/ThemeContext';

export default function ContainerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        mode === 'light' ? 'bg-LighterGrey' : 'bg-VeryDarkGrey'
      } w-full`}
    >
      {children}
    </div>
  );
}
