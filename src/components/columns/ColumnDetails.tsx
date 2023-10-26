import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {
  IconButton,
  Typography,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeContext } from '@/hooks/ThemeContext';

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onClose: (value: string) => void;
}

export function ColumnDetails(props: SimpleDialogProps) {
  const { onClose, open, setOpen } = props;
  const { mode } = React.useContext(ThemeContext);

  const handleClose = () => {
    setOpen(false);
  };

  const textColor = mode === 'light' ? 'black' : 'white';
  const selectColor = mode === 'light' ? '#F4F7FD' : '#20212C';
  const borderColor = mode === 'light' ? '#F4F7FD' : '#828FA3';

  return (
    <Dialog onClose={handleClose} open={open}>
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
            <IconButton>
              <MoreVertIcon sx={{ color: textColor }} />
            </IconButton>
          </div>
        </div>

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
                }`}
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
