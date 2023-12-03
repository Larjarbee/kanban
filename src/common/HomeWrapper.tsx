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
    <div className={`${toggleNav === false ? 'ml-0' : 'ml-[20%]'} w-[80%]`}>
      {children}
    </div>
  );
}
