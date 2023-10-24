'use client';
import { IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeContext } from '@/hooks/ThemeContext';

export default function Navbar() {
  const { mode } = useContext(ThemeContext);

  return (
    <nav
      className={`${
        mode === 'light' ? 'bg-White' : 'bg-DarkGrey border-Grey'
      } p-5 flex justify-between border-b-2 items-center`}
    >
      <div
        className={`${mode === 'dark' ? 'text-White' : 'text-VeryDarkGrey'} `}
      >
        <Typography variant='h6'>Platform Launch</Typography>
      </div>
      <div className='flex items-center gap-3'>
        <button
          disabled={true}
          className='px-4 py-2 bg-Purple text-White rounded-full hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-70'
        >
          + Add New Task
        </button>
        <IconButton>
          {mode === 'light' ? (
            <MoreVertIcon />
          ) : (
            <MoreVertIcon sx={{ color: 'white' }} />
          )}
        </IconButton>
      </div>
    </nav>
  );
}
