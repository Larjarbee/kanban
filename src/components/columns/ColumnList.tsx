'use client';
import { Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '@/hooks/ThemeContext';
import { ColumnDetails } from './ColumnDetails';

export default function ColumnList() {
  const { mode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <>
      <div className='flex gap-5 w-screen'>
        <div className='flex gap-5'>
          {DUMMY_COL.map((column, index) => (
            <div key={index} className='space-y-5 w-[40%]'>
              <div className='flex gap-3 items-center'>
                <div
                  style={{ backgroundColor: column.color }}
                  className='h-2 w-2 rounded-full'
                />
                <Typography
                  variant='body2'
                  sx={{ color: '#828FA3' }}
                  className=' tracking-widest uppercase'
                >
                  {column.status} ({column.todo.length})
                </Typography>
              </div>

              <div onClick={handleClickOpen} className=' space-y-5'>
                {column.todo.map((todo, i) => (
                  <div
                    key={i}
                    className={`${
                      mode === 'light' ? 'bg-White' : 'bg-DarkGrey'
                    } shadow-md p-5 rounded-xl space-y-2`}
                  >
                    {mode === 'light' ? (
                      <Typography variant='body2'>{todo.title}</Typography>
                    ) : (
                      <Typography variant='body2' sx={{ color: 'white' }}>
                        {todo.title}
                      </Typography>
                    )}
                    <Typography variant='body2' sx={{ color: '#828FA3' }}>
                      {countCompletedSubtasks(todo.substasks)} of{' '}
                      {todo.substasks.length} substasks
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${
            mode === 'light' ? 'bg-LightGrey' : 'bg-VeryLightGrey'
          } text-MediumGrey px-10 flex items-center justify-center h-screen rounded-lg`}
        >
          <Typography variant='body1'>+ New Column</Typography>
        </div>
      </div>
      <ColumnDetails open={open} onClose={handleClose} setOpen={setOpen} />
    </>
  );
}

export const colors = [
  '#49C4E5',
  '#8471F2',
  '#67E2AE',
  '#828FA3',
  '#A8A4FF',
  '#FF9898',
];
export const DUMMY_COL = [
  {
    status: 'Todo',
    color: '#49C4E5',
    todo: [
      {
        title: 'Build UI for onboarding flow',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: [
          {
            task: 'Research competitor pricing and business models',
            completed: true,
          },
          {
            task: 'Outline a business model that works for our solution',
            completed: true,
          },
          {
            task: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
            completed: false,
          },
        ],
      },
      {
        title: 'Build UI for search',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: [
          {
            task: 'Research competitor pricing and business models',
            completed: true,
          },
        ],
      },
      {
        title: 'Build settings UI',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: [
          {
            task: 'Research competitor pricing and business models',
            completed: false,
          },
        ],
      },
    ],
  },
  {
    status: 'Doing',
    color: '#8471F2',
    todo: [
      {
        title: 'Design settings and search pages',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: [
          {
            task: 'Research competitor pricing and business models',
            completed: true,
          },
          {
            task: 'Outline a business model that works for our solution',
            completed: true,
          },
        ],
      },
      {
        title: 'Add account management endpoints',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: [
          {
            task: 'Research competitor pricing and business models',
            completed: true,
          },
        ],
      },
      {
        title: 'Add account management endpoints',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: [
          {
            task: 'Research competitor pricing and business models',
            completed: true,
          },
        ],
      },
      {
        title: 'Add account management endpoints',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: [
          {
            task: 'Research competitor pricing and business models',
            completed: true,
          },
        ],
      },
    ],
  },
  {
    status: 'Done',
    color: '#67E2AE',
    todo: [
      {
        title: 'Management settings and search pages',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: [
          'Research competitor pricing and business models',
          'Outline a business model that works for our solution',
        ],
      },
      {
        title: 'Add account management endpoints',
        desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
        substasks: ['Research competitor pricing and business models'],
      },
    ],
  },

  // {
  //   status: 'Done',
  //   color: '#67E2AE',
  //   todo: [
  //     {
  //       title: 'Management settings and search pages',
  //       desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
  //       substasks: [
  //         'Research competitor pricing and business models',
  //         'Outline a business model that works for our solution',
  //       ],
  //     },
  //     {
  //       title: 'Add account management endpoints',
  //       desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
  //       substasks: ['Research competitor pricing and business models'],
  //     },
  //   ],
  // },
  // {
  //   status: 'Done',
  //   color: '#67E2AE',
  //   todo: [
  //     {
  //       title: 'Management settings and search pages',
  //       desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
  //       substasks: [
  //         'Research competitor pricing and business models',
  //         'Outline a business model that works for our solution',
  //       ],
  //     },
  //     {
  //       title: 'Add account management endpoints',
  //       desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
  //       substasks: ['Research competitor pricing and business models'],
  //     },
  //   ],
  // },
  // {
  //   status: 'Done',
  //   color: '#67E2AE',
  //   todo: [
  //     {
  //       title: 'Management settings and search pages',
  //       desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
  //       substasks: [
  //         'Research competitor pricing and business models',
  //         'Outline a business model that works for our solution',
  //       ],
  //     },
  //     {
  //       title: 'Add account management endpoints',
  //       desc: 'We know what we are planning to build for version one. Now we need to finalise the first pricing model we will use. Keep iterating the subtasks until we have a coherent proposition.',
  //       substasks: ['Research competitor pricing and business models'],
  //     },
  //   ],
  // },
];

export function countCompletedSubtasks(data: any) {
  let count = 0;

  if (Array.isArray(data)) {
    data.forEach((subtask) => {
      if (subtask.completed === true) {
        count++;
      }
    });
  }

  return count;
}
