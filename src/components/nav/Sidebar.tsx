'use client';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import logo from '../../../public/svgs/Group 15.svg';
import eye from '../../../public/svgs/eye-slash.1.svg';
import light from '../../../public/svgs/Combined Shape.svg';
import dark from '../../../public/svgs/Combined Shape (1).svg';
import box from '../../../public/svgs/fluent_board-split-24-regular.svg';
import box1 from '../../../public/svgs/fluent_board-split-24-regular (2).svg';
import box2 from '../../../public/svgs/fluent_board-split-24-regular (3).svg';
import { Switch, Typography, styled } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '@/hooks/ThemeContext';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { AddBoardForm } from '../board/AddBoardForm';
import { fetcher } from '@/common/fetcher';
import useSWR from 'swr';

export default function Sidebar() {
  const pathname = usePathname();
  const { mode, toggle, toggleNav, handleToggle } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const { data } = useSWR('/api/boards', fetcher);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <>
      {toggleNav ? (
        <aside
          className={`${
            mode === 'light' ? 'bg-White' : 'bg-DarkGrey border-Grey'
          } fixed w-[20%] border-r-2 flex h-screen flex-col justify-between`}
        >
          <div className='space-y-8'>
            <Link
              href='/'
              className='flex gap-3 items-center justify-center py-5'
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
            </Link>

            <div className='flex flex-col space-y-8 items-center text-MediumGrey'>
              <Typography variant='body1' className=' tracking-widest'>
                ALL BOARDS ({data?.length || 0})
              </Typography>

              <div className='w-full pr-5'>
                {data?.map((link: any) => (
                  <Link
                    key={link?._id}
                    className={`link ${
                      pathname === `/dashboard/${link?._id}`
                        ? 'flex items-center pl-14 py-3 gap-3 text-White rounded-r-full bg-Purple'
                        : 'flex items-center pl-14 gap-3 py-3 hover:bg-PurpleLighter hover:text-Purple hover:rounded-r-full hover:transition-all'
                    }`}
                    href={`/dashboard/${link?._id}`}
                  >
                    <div>
                      <Image
                        src={pathname == `/dashboard/${link?._id}` ? box1 : box}
                        width={16}
                        height={16}
                        alt='logo'
                      />
                    </div>

                    <Typography variant='body1'>{link.name}</Typography>
                  </Link>
                ))}
                <div className='flex items-center pl-[27px] justify-center gap-3 py-3 text-Purple hover:cursor-pointer'>
                  <div>
                    <Image src={box2} width={16} height={16} alt='logo' />
                  </div>
                  <button onClick={handleClickOpen}>
                    <Typography variant='body1'>+ Create New Board</Typography>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <AddBoardForm open={open} onClose={handleClose} setOpen={setOpen} />

          <div className='py-10 space-y-5'>
            <div
              className={`p-3 mx-5 rounded-lg ${
                mode === 'light' ? 'bg-LightGrey' : 'bg-VeryDarkGrey'
              } flex gap-5 justify-center items-center`}
            >
              <Image src={dark} width={16} height={16} alt='logo' />
              <AntSwitch
                defaultChecked
                inputProps={{ 'aria-label': 'ant design' }}
                onClick={toggle}
              />
              <Image src={light} width={16} height={16} alt='logo' />
            </div>

            <div className='w-[80%]'>
              <button
                onClick={handleToggle}
                className='flex items-center w-full pl-3 rounded-r-full py-3 gap-3 text-MediumGrey hover:bg-PurpleLighter hover:text-Purple'
              >
                <div>
                  <Image src={eye} width={16} height={16} alt='logo' />
                </div>
                <Typography variant='body1'>Hide Sidebar</Typography>
              </button>
            </div>
          </div>
        </aside>
      ) : (
        <div className='relative'>
          <button
            onClick={handleToggle}
            className=' bg-Purple rounded-r-full p-3 text-White absolute top-[35rem] hover:bg-PurpleLighter hover:text-Purple'
          >
            <RemoveRedEyeIcon />
          </button>
        </div>
      )}
    </>
  );
}

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 30,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#635FC7',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 14,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
