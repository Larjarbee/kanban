'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
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

export default function Sidebar() {
  const pathname = usePathname();
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <aside
      className={`${
        mode === 'light' ? 'bg-White' : 'bg-DarkGrey border-Grey'
      } border-r-2 flex h-full flex-col justify-between`}
    >
      <div className='space-y-8'>
        <div className='flex gap-3 items-center justify-center py-5'>
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

        <div className='flex flex-col space-y-8 items-center text-MediumGrey'>
          <Typography variant='body1' className=' tracking-widest'>
            ALL BOARDS (3)
          </Typography>

          <div className='w-full pr-5'>
            {links.map((link, i) => (
              <Link
                key={i}
                className={`link ${
                  pathname === link.path
                    ? 'flex items-center justify-center py-3 gap-3 text-White rounded-r-full bg-Purple'
                    : 'flex items-center pl-14 gap-3 py-3 hover:bg-PurpleLight hover:text-White hover:rounded-r-full hover:transition-all'
                }`}
                href={link.path}
              >
                <div>
                  <Image
                    src={pathname == link.path ? box1 : box}
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
              <Link href='#'>
                <Typography variant='body1'>+ Create New Board</Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-52 mb-20 space-y-5'>
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

        <div className='flex items-center pl-3 gap-3 text-MediumGrey hover:cursor-pointer'>
          <div>
            <Image src={eye} width={16} height={16} alt='logo' />
          </div>
          <Typography variant='body1'>Hide Sidebar</Typography>
        </div>
      </div>
    </aside>
  );
}

export const links = [
  { name: 'Platform Launch', path: '/' },
  { name: 'Marketing Plan', path: '#' },
  { name: 'Roadmap', path: '#' },
];

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
