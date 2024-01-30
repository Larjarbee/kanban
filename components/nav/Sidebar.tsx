'use client';
import Image from 'next/image';
import React, { useContext } from 'react';
import logo from '@/public/svgs/Group 15.svg';
import eye from '@/public/svgs/eye-slash.1.svg';
import light from '@/public/svgs/Combined Shape.svg';
import dark from '@/public/svgs/Combined Shape (1).svg';
import box2 from '@/public/svgs/fluent_board-split-24-regular (3).svg';
import Link from 'next/link';
import { AddBoardForm } from '../board/AddBoardForm';
import { Button } from '../ui/button';
import { Eye, ToggleLeft } from 'lucide-react';
import { getBoards } from '@/lib/api/board';
import Links from './Links';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToggleContext } from '@/hooks/ToggleContext';

// import { useTheme } from 'next-themes';

export default function Sidebar() {
  const { toggleNav, handleToggle } = useContext(ToggleContext);

  // const { setTheme } = useTheme();

  const { data } = getBoards();

  return (
    <>
      {!toggleNav ? (
        <aside className='w-[25%] border-r flex h-screen flex-col justify-between'>
          <div className='space-y-8'>
            <Link
              href='/'
              className='flex gap-3 items-center justify-center py-5'
            >
              <Image src={logo} width={24} height={25} alt='logo' />

              <h2 className='text-3xl font-bold'>Kanban</h2>
            </Link>

            <div className='flex flex-col space-y-8 items-center text-MediumGrey'>
              <h2 className=' tracking-widest'>
                ALL BOARDS ({data?.data.length || 0})
              </h2>

              <div className='w-full pr-5'>
                <Links data={data?.data} />
                <div className='flex items-center pl-[27px] justify-center gap-3 py-3 text-Purple hover:cursor-pointer'>
                  <div>
                    <Image src={box2} width={16} height={16} alt='logo' />
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>+ Create New Board</Button>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-[425px]'>
                      <AddBoardForm />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          <div className='py-10 space-y-5'>
            <div className='p-3 mx-5 rounded-lg flex gap-5 justify-center items-center'>
              <Image src={dark} width={16} height={16} alt='logo' />
              <Button variant='ghost'>
                <ToggleLeft />
              </Button>

              <Image src={light} width={16} height={16} alt='logo' />
            </div>

            <div className='w-[80%]'>
              <Button
                variant='secondary'
                onClick={() => handleToggle()}
                className='flex items-center pl-3 rounded-r-full gap-3'
              >
                <div>
                  <Image src={eye} width={16} height={16} alt='logo' />
                </div>
                <h4>Hide Sidebar</h4>
              </Button>
            </div>
          </div>
        </aside>
      ) : (
        <div className='relative'>
          <Button
            onClick={() => handleToggle()}
            className='rounded-r-full absolute top-[40rem]'
          >
            <Eye />
          </Button>
        </div>
      )}
    </>
  );
}
