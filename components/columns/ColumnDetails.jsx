'use client';
import React from 'react';
// import { EditTaskForm } from '../task/EditTaskForm';
// import { DeleteTask } from '../task/DeleteTask';
import { countCompletedSubtasks } from '@/common/subtaskCount';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { MoreVertical } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { DialogHeader } from '../ui/dialog';

export function ColumnDetails({ task }) {
  // const handleCheckBoxChange = async (id) => {
  //   console.log(id);
  //   try {
  //     await fetch(`/api/tasks/${id}`),
  //       {
  //         method: 'patch',
  //         body: {
  //           subtasks: { isCompleted: true },
  //         },
  //       };
  //     // window.location.reload();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className='space-y-8 py-3'>
      <div className='flex justify-between items-center'>
        <DialogHeader>
          <h2 className='font-bold'>{task?.title}</h2>
        </DialogHeader>

        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button size='icon' variant='ghost'>
                <MoreVertical />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-40 space-y-2'>
              <Button variant='ghost' className='w-full'>
                Edit Task
              </Button>
              <Button variant='destructive' className='w-full'>
                Delete Task
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* <EditTaskForm
          open={openEditTask}
          onClose={handleCloseEditTask}
          setOpen={setOpenEditTask}
        />
        <DeleteTask
          open={openDeleteTask}
          onClose={handleCloseDeleteTask}
          setOpen={setOpenDeleteTask}
          setOpens={setOpen}
          task={task}
        /> */}

      <h4 className='text-[#828FA3]'>{task?.description}</h4>

      <div className='space-y-3'>
        <h4 className=' text-[#828FA3]'>
          substasks {countCompletedSubtasks(task?.subtasks)} of{' '}
          {task?.subtasks?.length}
        </h4>
        <div className='space-y-2'>
          {task?.subtasks.map((subtask) => (
            <div
              key={subtask?._id}
              className='flex items-center bg-[#F4F7FD] gap-2 p-3 rounded-lg hover:bg-[hsl(242,48%,90%)]'
            >
              <Checkbox
                checked={subtask?.isCompleted}
                onClick={() => handleCheckBoxChange(subtask?._id)}
              />

              <h4
                className={`${
                  subtask?.isCompleted ? 'line-through text-[#828FA3]' : null
                }`}
              >
                {subtask?.title}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <div className='space-y-3'>
        <h4>Current Status</h4>

        {/* <FormControl fullWidth>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              // sx={{
              //   color: textColor,
              //   border: border,
              //   borderColor: borderColor,
              // }}
              displayEmpty
              inputProps={{
                'aria-label': 'Without label',
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    // bgcolor: selectColor,

                    '& .MuiMenuItem-root': {
                      //   padding: 2,
                    },
                  },
                },
              }}
            >
              <MenuItem disabled value=''>
                {task?.status}
              </MenuItem>
              {boardData?.columns?.map((item) => (
                <MenuItem
                  key={item?._id}
                  value={item}
                  // sx={{ color: textColor }}
                >
                  {item?.name}
                </MenuItem>
              ))}
              {columnsData?.map((item) => (
                <MenuItem
                  key={item?._id}
                  value={item}
                  // sx={{ color: textColor }}
                >
                  {item?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}

        {/* <div className={`${textColor} w-full py-3 border text-center`}>
            <Typography>{task?.status}</Typography>
          </div> */}
      </div>
    </div>
  );
}
