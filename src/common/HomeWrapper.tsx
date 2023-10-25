'use client';
import { ThemeContext } from '@/hooks/ThemeContext';
import React, { useContext } from 'react';

export default function HomeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggleNav } = useContext(ThemeContext);
  return (
    <div
      className={`${toggleNav === false ? 'w-full ml-0' : 'w-[80%] ml-[20%]'}`}
    >
      {children}
    </div>
  );
}
