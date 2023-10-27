import React, { useContext, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import {
  IconButton,
  Typography,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  Menu,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeContext } from '@/hooks/ThemeContext';
import useMenu from '@/common/useMenu';
import { EditTaskForm } from '../task/EditTaskForm';
import { DeleteTask } from '../task/DeleteTask';

export interface SimpleDialogProps {
  opens: boolean;
  setOpen: (value: boolean) => void;
  onClose: (value: string) => void;
}

export function ColumnDetails(props: SimpleDialogProps) {
  const { onClose, opens, setOpen } = props;
  const { mode } = useContext(ThemeContext);
  const { open, anchorEl, handleClick, handleCloses } = useMenu();
  const [openEditTask, setOpenEditTask] = useState(false);
  const [openDeleteTask, setOpenDeleteTask] = useState(false);

  const handleClickOpenEditTask = () => {
    setOpenEditTask(true);
  };

  const handleCloseEditTask = (value: string) => {
    setOpenEditTask(false);
  };

  const handleClickOpenDeleteTask = () => {
    setOpenDeleteTask(true);
  };

  const handleCloseDeleteTask = (value: string) => {
    setOpenDeleteTask(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const textColor = mode === 'light' ? 'black' : 'white';
  const selectColor = mode === 'light' ? '#F4F7FD' : '#20212C';
  const borderColor = mode === 'light' ? '#F4F7FD' : '#828FA3';

  return (
    <Dialog onClose={handleClose} open={opens}>
      <div
        className={`${
          mode === 'light' ? 'bg-White' : 'bg-VeryDarkGrey'
        } p-10 space-y-8`}
      >
        <div className='flex justify-between'>
          <Typography
            variant='body1'
            sx={{ color: textColor, fontWeight: 900 }}
          >
            Research pricing points of various competitors and trial different
            business models
          </Typography>

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
              open={open}
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
        />

        <Typography variant='body2' sx={{ color: '#828FA3' }}>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </Typography>

        <div
          className={`${
            mode === 'light' ? 'text-Black' : 'text-White'
          } space-y-3`}
        >
          <Typography variant='body2'>Subtasks (2 of 3)</Typography>
          <div className='space-y-2'>
            {substasks.map((task, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-1 rounded-lg ${
                  mode === 'light' ? 'bg-LighterGrey' : 'bg-Black'
                } hover:bg-PurpleLighter`}
              >
                <Checkbox defaultChecked={task.completed} />
                <Typography
                  variant='body2'
                  className={`${
                    task.completed ? 'line-through text-MediumGrey' : null
                  }`}
                >
                  {task.task}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className='space-y-3'>
          <Typography variant='body2' sx={{ color: '#828FA3' }}>
            Current Status
          </Typography>

          <FormControl fullWidth>
            <Select
              // value={age}
              // onChange={handleChange}
              sx={{
                color: textColor,
                border: 1,
                outline: 0,
                borderColor: borderColor,
              }}
              displayEmpty
              inputProps={{
                'aria-label': 'Without label',
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: selectColor,

                    '& .MuiMenuItem-root': {
                      //   padding: 2,
                    },
                  },
                },
              }}
            >
              <MenuItem value='' sx={{ color: textColor }}>
                Todo
              </MenuItem>
              <MenuItem value='' sx={{ color: textColor }}>
                Doing
              </MenuItem>
              <MenuItem value='' sx={{ color: textColor }}>
                Done
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </Dialog>
  );
}

export const substasks = [
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
];
