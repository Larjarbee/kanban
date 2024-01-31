'use client';
import React from 'react';
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
    <div className='w-full bg-[hsl(224,73%,97%)] dark:bg-[hsl(235,16%,15%)]'>
      {isLoading && <Loading />}

      <div className='overflow-auto flex p-5 gap-5'>
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
                  className='shadow-md p-5 bg-white rounded-xl space-y-2 hover:bg-white hover:cursor-pointer dark:bg-background'
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

                  <h6 className='text-[#828FA3]'>
                    {countCompletedSubtasks(task?.subtasks)} of{' '}
                    {task?.subtasks?.length} substasks
                  </h6>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className='px-10 flex flex-col h-screen items-center justify-between rounded-lg bg-[hsl(224,73%,90%)] dark:bg-background'>
          <div className='flex-1' />
          <div>
            <Button variant='ghost'>+New Column</Button>
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
