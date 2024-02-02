'use client';
import React, { useContext } from 'react';

import logo from '@/public/svgs/Group 15.svg';
import Image from 'next/image';
import { AddTaskForm } from '../task/AddTaskForm';
import { EditBoardForm } from '../board/EditBoardForm';
import { DeleteBoard } from '../board/DeleteBoard';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { MoreVertical } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { ToggleContext } from '@/hooks/ToggleContext';

export default function Navbar() {
  const { toggleNav } = useContext(ToggleContext);

  return (
    <nav className='flex justify-between'>
      {toggleNav && (
        <Link
          href='/'
          className='flex w-[20%] gap-3 px-10 items-center justify-center border-b border-r'
        >
          <Image src={logo} width={24} height={25} alt='logo' />

          <h2 className='text-3xl font-bold'>Kanban</h2>
        </Link>
      )}

      <div className='flex justify-between w-full p-5 border-b items-center'>
        <h2 className='text-lg'>Platform Launch</h2>

        <div className='flex items-center gap-3'>
          <Dialog>
            <DialogTrigger asChild>
              <Button> + Add New Task</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
              <AddTaskForm />
            </DialogContent>
          </Dialog>

          <Popover>
            <PopoverTrigger asChild>
              <Button size='icon' variant='ghost'>
                <MoreVertical />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-40 space-y-2'>
              <Button variant='ghost'>Edit Board</Button>
              <Button variant='destructive'>Delete Board</Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
}
