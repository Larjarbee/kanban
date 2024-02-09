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
import { ChevronDown, MoreVertical } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { ToggleContext } from '@/hooks/ToggleContext';
import { getBoardById, getBoards } from '@/lib/api/board';
import { useParams } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import box2 from '@/public/svgs/fluent_board-split-24-regular (3).svg';
import { AddBoardForm } from '../board/AddBoardForm';
import Links from './Links';
import { Eye, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { toggleNav } = useContext(ToggleContext);
  const { id } = useParams();
  const { data: board } = getBoardById(id);
  const { data } = getBoards();
  const { setTheme } = useTheme();

  return (
    <nav className='flex justify-between'>
      {toggleNav && (
        <Link
          href='/'
          className='hidden w-[20%] gap-3 px-10 items-center justify-center border-b border-r md:flex'
        >
          <Image src={logo} width={24} height={25} alt='logo' />

          <h2 className='text-3xl font-bold'>Kanban</h2>
        </Link>
      )}

      <div className='flex justify-between w-full p-5 border-b items-center'>
        <div className='flex items-center gap-5'>
          <Link href='/'>
            <Image
              src={logo}
              width={24}
              height={25}
              alt='logo'
              className='block md:hidden'
            />
          </Link>

          <h2 className='text-lg hidden md:block'>{board?.data.name}</h2>
          <div className='block md:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <h2 className='text-md flex items-center'>
                  {board?.data.name}{' '}
                  <span>
                    <ChevronDown />
                  </span>
                </h2>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='py-5 pr-10 mt-8'>
                <div className='flex flex-col space-y-4 items-center'>
                  <h4 className='tracking-widest text-gray-400'>
                    ALL BOARDS ({data?.data.length || 0})
                  </h4>

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
                        <DialogContent className='overflow-y-scroll max-h-full'>
                          <AddBoardForm />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>

                <div className='p-3 mx-5 rounded-lg flex gap-5 justify-center items-center'>
                  {/* <Image src={dark} width={16} height={16} alt='logo' /> */}
                  <Button onClick={() => setTheme('dark')} variant='ghost'>
                    <Moon />
                  </Button>

                  <h4>mode</h4>

                  <Button onClick={() => setTheme('light')} variant='ghost'>
                    <Sun />
                  </Button>

                  {/* <Image src={light} width={16} height={16} alt='logo' /> */}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                + <span className='hidden md:block'>Add New Task</span>
              </Button>
            </DialogTrigger>
            <DialogContent className='overflow-y-scroll max-h-full'>
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
