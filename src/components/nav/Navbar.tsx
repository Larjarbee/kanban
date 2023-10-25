'use client';
import { IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeContext } from '@/hooks/ThemeContext';
import logo from '../../../public/svgs/Group 15.svg';
import Image from 'next/image';

export default function Navbar() {
  const { mode, toggleNav } = useContext(ThemeContext);

  return (
    <nav className='flex'>
      {toggleNav === false ? (
        <div
          className={`flex w-[20%] gap-3 px-10 items-center justify-center border-b-2 border-r-2 ${
            mode === 'light' ? 'bg-White' : 'bg-DarkGrey border-Grey'
          }`}
        >
          <Image src={logo} width={24} height={25} alt='logo' />
          <div
            className={`${
              mode === 'dark' ? 'text-White' : 'text-VeryDarkGrey'
            } `}
          >
            <Typography variant='h4' sx={{ fontWeight: 900 }}>
              Kanban
            </Typography>
          </div>
        </div>
      ) : null}

      <div
        className={`${
          mode === 'light' ? 'bg-White' : 'bg-DarkGrey border-Grey'
        } flex justify-between ${
          toggleNav === false ? 'w-[80%]' : 'w-full'
        } p-5 border-b-2 items-center`}
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
      </div>
    </nav>
  );
}
