'use client';
import { Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { ThemeContext } from '@/hooks/ThemeContext';
import useSWR from 'swr';
import { fetcher } from '@/common/fetcher';
import { ColumnDetails } from '@/components/columns/ColumnDetails';
import Loading from '@/common/Loading';
import { countCompletedSubtasks } from '@/common/subtaskCount';

export default function ColumnList({ params }) {
  const { mode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [columnId, setColumnId] = useState('');
  const { id } = params;
  const { data, error, isLoading } = useSWR(`/api/boards/${id}`, fetcher);
  const { data: tasks } = useSWR('/api/tasks', fetcher);

  console.log(columnId);

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
                  {tasks?.filter(
                    (filteredTask) => filteredTask?.columnId === column?._id
                  )?.length || 0}
                  )
                </Typography>
              </div>

              <div className=' space-y-5'>
                {tasks
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
                        onClick={() => {
                          setOpen(true);
                          setColumnId(task?._id);
                        }}
                        variant='body2'
                        className='hover:underline'
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
        columnId={columnId}
        onClose={handleClose}
        setOpen={setOpen}
      />
    </>
  );
}
