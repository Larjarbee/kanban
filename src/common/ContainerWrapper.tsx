'use client';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import React from 'react';

export default function ContainerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mode } = useThemeToggle();

  return (
    <div
      className={`${mode === 'light' ? 'bg-LighterGrey' : 'bg-VeryDarkGrey'}`}
    >
      {children}
    </div>
  );
}
