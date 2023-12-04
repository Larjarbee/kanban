'use client';
import { Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '@/hooks/ThemeContext';
import useSWR from 'swr';
import { fetcher } from '@/common/fetcher';
import { ColumnDetails } from '@/components/columns/ColumnDetails';
import Loading from '@/common/Loading';

export default function ColumnList({ params }) {
  const { mode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  // const [columnId, setColumnId] = useState('');
  const { id } = params;
  const { data, error, isLoading } = useSWR(`/api/boards/${id}`, fetcher);
  const { data: tasks } = useSWR('/api/tasks', fetcher);

  const filteredTasks = tasks?.filter((task) => task?.boardId === id);

  const handleClickOpen = () => {
    setOpen(true);
    // setColumnId(id);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='h-screen flex p-5 gap-5'>
          {data?.columns?.map((column) => (
            <div key={column?._id} className='space-y-5 w-[25%]'>
              <div className='flex gap-3 items-center'>
                <div
                  style={{ backgroundColor: column?.color }}
                  className='h-2 w-2 rounded-full'
                />
                <Typography
                  variant='body2'
                  sx={{ color: '#828FA3' }}
                  className=' tracking-widest uppercase'
                >
                  {column?.name} (
                  {filteredTasks?.filter(
                    (filteredTask) => filteredTask?.columnId === column?._id
                  )?.length || 0}
                  )
                </Typography>
              </div>

              <div className=' space-y-5'>
                {filteredTasks
                  ?.filter(
                    (filteredTask) => filteredTask?.columnId === column?._id
                  )
                  ?.map((task) => (
                    <div
                      key={task?._id}
                      className={`${
                        mode === 'light' ? 'bg-White' : 'bg-DarkGrey text-White'
                      } shadow-md p-5 rounded-xl space-y-2 hover:bg-[#625fc70c] hover:cursor-pointer`}
                    >
                      <Typography
                        // onClick={handleClickOpen(task?.columnId)}
                        variant='body2'
                      >
                        {task?.title}
                      </Typography>

                      <Typography variant='body2' sx={{ color: '#828FA3' }}>
                        {countCompletedSubtasks(task?.subtasks)} of{' '}
                        {task?.subtasks?.length} substasks
                      </Typography>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          <div
            className={`${
              mode === 'light' ? 'bg-LightGrey' : 'bg-VeryLightGrey'
            } text-MediumGrey px-10 flex flex-col items-center justify-between rounded-lg`}
          >
            <div className='flex-1' />
            <button className='px-3 py-1 bg-inherit rounded-xl hover:bg-PurpleLighter'>
              +New Column
            </button>
            <div className='flex-1' />
          </div>
        </div>
      )}
      <ColumnDetails
        opens={open}
        // columnId={columnId}
        onClose={handleClose}
        setOpen={setOpen}
      />
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

export function countCompletedSubtasks(data) {
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
