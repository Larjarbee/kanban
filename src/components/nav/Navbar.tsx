'use client';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeContext } from '@/hooks/ThemeContext';
import logo from '../../../public/svgs/Group 15.svg';
import Image from 'next/image';
import { AddTaskForm } from '../task/AddTaskForm';
import useMenu from '@/common/useMenu';

export default function Navbar() {
  const { mode, toggleNav } = useContext(ThemeContext);
  const { open, anchorEl, handleClick, handleCloses } = useMenu();
  const [opens, setOpens] = useState(false);

  const handleClickOpen = () => {
    setOpens(true);
  };

  const handleClose = (value: string) => {
    setOpens(false);
  };

  const textColor = mode === 'light' ? 'black' : 'white';
  const selectColor = mode === 'light' ? '#F4F7FD' : '#20212C';

  return (
    <>
      <nav className='flex w-full justify-between'>
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
            className={`${
              mode === 'dark' ? 'text-White' : 'text-VeryDarkGrey'
            } `}
          >
            <Typography variant='h6'>Platform Launch</Typography>
          </div>

          <div className='flex items-center gap-3'>
            <button
              // disabled={true}
              onClick={handleClickOpen}
              className='px-4 py-3 bg-Purple text-White rounded-full hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-70'
            >
              + Add New Task
            </button>
            <div>
              <IconButton
                aria-label='more'
                id='long-button'
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup='true'
                onClick={handleClick}
              >
                <MoreVertIcon sx={{ color: textColor }} />
              </IconButton>
              <Menu
                id='long-menu'
                className='mt-5'
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloses}
                PaperProps={{
                  style: {
                    backgroundColor: selectColor,
                    color: textColor,
                  },
                }}
              >
                <MenuItem onClick={handleCloses}>Edit Board</MenuItem>
                <MenuItem onClick={handleCloses} sx={{ color: '#EA5555' }}>
                  Delete Board
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
      <AddTaskForm open={opens} onClose={handleClose} setOpen={setOpens} />
    </>
  );
}
