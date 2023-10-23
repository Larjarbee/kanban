'use client';
import React from 'react';

export default function useThemeToggle() {
  const [mode, setMode] = React.useState('light');
  return { mode, setMode };
}
