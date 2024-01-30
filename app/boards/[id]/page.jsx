'use client';
import React, { useContext, useState } from 'react';
import Loading from '@/common/Loading';
import { countCompletedSubtasks } from '@/common/subtaskCount';
import { AddColumnForm } from '@/components/board/AddColumnForm';
import { ColumnDetails } from '@/components/columns/ColumnDetails';
import { Button } from '@/components/ui/button';
import { getBoardById } from '@/lib/api/board';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function ColumnList({ params }) {
  const { id } = params;

  const { data, isLoading } = getBoardById(id);

  return (
    <div className='w-full bg-[#f2f5fd]'>
      {isLoading && <Loading />}

      <div className=' max-w-full overflow-x-scroll flex p-5 gap-5'>
        {data?.data.columns?.map((column, i) => (
          <div key={i} className='space-y-5 w-[25%]'>
            <div className='flex gap-3 items-center'>
              <div className='h-2 w-2 rounded-full bg-[#635FC7]' />
              <h2 className=' tracking-widest uppercase'>
                {column?.name} (
                {column?.tasks.map((tasks) => tasks)?.length || 0})
              </h2>
            </div>

            <div className='space-y-5'>
              {column?.tasks.map((task, index) => (
                <div
                  key={index}
                  className='shadow-md p-5 bg-white rounded-xl space-y-2 hover:bg-white hover:cursor-pointer'
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <h2 className='font-medium hover:underline'>
                        {task?.title}
                      </h2>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-[500px]'>
                      <ColumnDetails task={task} />
                    </DialogContent>
                  </Dialog>

                  <h6>
                    {countCompletedSubtasks(task?.subtasks)} of{' '}
                    {task?.subtasks?.length} substasks
                  </h6>
                </div>
              ))}

              {/* <ColumnDetails
                open={open}
                columnId={columnId}
                onClose={handleClose}
                setOpen={setOpen}
              /> */}
            </div>
          </div>
        ))}

        {/* {columnData?.map((column) => (
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
        ))} */}

        <div className='text-MediumGrey px-10 flex flex-col h-screen items-center justify-between rounded-lg'>
          <div className='flex-1' />
          <div>
            <Button className='px-3 py-1 bg-inherit rounded-xl hover:bg-PurpleLighter'>
              +New Column
            </Button>
            {/* <AddColumnForm
              open={opens}
              onClose={handleColumnClose}
              setOpen={setOpens}
            /> */}
          </div>

          <div className='flex-1' />
        </div>
      </div>
    </div>
  );
}
