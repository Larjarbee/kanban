import React, { useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import {
  IconButton,
  Typography,
  Checkbox,
  MenuItem,
  Menu,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeContext } from '@/hooks/ThemeContext';
import useMenu from '@/common/useMenu';
import { EditTaskForm } from '../task/EditTaskForm';
import { DeleteTask } from '../task/DeleteTask';
import useSWR from 'swr';
import { fetcher } from '@/common/fetcher';
import { countCompletedSubtasks } from '@/common/subtaskCount';

export function ColumnDetails(props) {
  const { data } = useSWR('/api/tasks', fetcher);
  const { onClose, opens, setOpen, columnId } = props;
  const { mode } = useContext(ThemeContext);
  const { openDialog, anchorEl, handleClick, handleCloses } = useMenu();
  const [openEditTask, setOpenEditTask] = useState(false);
  const [openDeleteTask, setOpenDeleteTask] = useState(false);

  const task = data?.find((el) => el?._id === columnId);

  const handleClickOpenEditTask = () => {
    setOpenEditTask(true);
  };

  const handleCloseEditTask = (value) => {
    setOpenEditTask(false);
  };

  const handleClickOpenDeleteTask = () => {
    setOpenDeleteTask(true);
  };

  const handleCloseDeleteTask = (value) => {
    setOpenDeleteTask(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckBoxChange = async (id) => {
    try {
      await fetch(`/api/tasks/${id}`),
        {
          method: 'PATCH',
          body: {
            subtasks: { isCompleted: true },
          },
        };
    } catch (error) {
      console.log(error);
    }
  };

  const textColor = mode === 'light' ? 'text-Black' : 'text-White';
  const typoTextColor = mode === 'light' ? 'black' : 'white';
  const selectColor = mode === 'light' ? '#F4F7FD' : '#20212C';

  return (
    <Dialog onClose={handleClose} open={opens}>
      <div className='p-10 space-y-8'>
        <div className='flex justify-between'>
          <Typography variant='body1'>{task?.title}</Typography>

          <div>
            <IconButton
              aria-label='more'
              id='long-button'
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup='true'
              onClick={handleClick}
            >
              <MoreVertIcon sx={{ color: textColor }} />
            </IconButton>
            <Menu
              id='long-menu'
              className='mt-5'
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={openDialog}
              onClose={handleCloses}
              PaperProps={{
                style: {
                  backgroundColor: selectColor,
                  color: textColor,
                },
              }}
            >
              <MenuItem onClick={handleClickOpenEditTask}>Edit Task</MenuItem>
              <MenuItem
                onClick={handleClickOpenDeleteTask}
                sx={{ color: '#EA5555' }}
              >
                Delete Task
              </MenuItem>
            </Menu>
          </div>
        </div>

        <EditTaskForm
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
        />

        <Typography variant='body2' sx={{ color: '#828FA3' }}>
          {task?.description}
        </Typography>

        <div className={`${textColor} space-y-3`}>
          <Typography variant='body2'>
            substasks {countCompletedSubtasks(task?.subtasks)} of{' '}
            {task?.subtasks?.length}
          </Typography>
          <div className='space-y-2'>
            {task?.subtasks.map((subtask) => (
              <div
                key={subtask?._id}
                className={`flex items-center gap-2 p-1 rounded-lg ${
                  mode === 'light' ? 'bg-LighterGrey' : 'bg-Black'
                } hover:bg-PurpleLighter`}
              >
                <div onClick={handleCheckBoxChange(subtask?._id)}>
                  <Checkbox checked={subtask?.isCompleted} />
                </div>
                <Typography
                  variant='body2'
                  className={`${
                    subtask?.isCompleted ? 'line-through text-MediumGrey' : null
                  }`}
                >
                  {subtask?.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className='space-y-3'>
          <Typography variant='body2' sx={{ color: '#828FA3' }}>
            Current Status
          </Typography>

          <div className={`${textColor} w-full py-3 border text-center`}>
            <Typography>{task?.status}</Typography>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
