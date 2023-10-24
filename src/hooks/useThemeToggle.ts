'use client';
import React, { useState } from 'react';

export function useThemeToggle() {
  const [mode, setMode] = useState('light');
  return { mode, setMode };
}
