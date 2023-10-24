'use client';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export default function Navbar() {
  const theme = useTheme();
  console.log(theme.palette.mode);
  return (
    <nav
      className={`${
        theme.palette.mode === 'light' ? 'bg-White' : 'bg-DarkGrey'
      } p-5 flex justify-between border-b-2 items-center`}
    >
      <Typography variant='h6'>Platform Launch</Typography>
      <div className='flex items-center gap-3'>
        <button
          disabled={true}
          className='px-4 py-2 bg-Purple text-White rounded-full hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-70'
        >
          + Add New Task
        </button>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </nav>
  );
}
