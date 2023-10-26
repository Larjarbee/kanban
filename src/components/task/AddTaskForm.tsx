import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {
  IconButton,
  Typography,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeContext } from '@/hooks/ThemeContext';
import Button from '@/common/Button';

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onClose: (value: string) => void;
}

export function AddTaskForm(props: SimpleDialogProps) {
  const { onClose, open, setOpen } = props;
  const { mode } = React.useContext(ThemeContext);

  const handleClose = () => {
    setOpen(false);
  };

  const textColor = mode === 'light' ? 'black' : 'white';
  const selectColor = mode === 'light' ? '#F4F7FD' : '#20212C';
  const border = mode === 'light' ? null : 1;
  const borderColor = mode === 'light' ? '#F4F7FD' : '#828FA3';

  return (
    <Dialog onClose={handleClose} open={open}>
      <div
        className={`${
          mode === 'light' ? 'bg-White' : 'bg-VeryDarkGrey'
        } p-10 space-y-8 text-MediumGrey w-full`}
      >
        <Typography variant='body1' sx={{ color: textColor, fontWeight: 900 }}>
          Add New Task
        </Typography>

        <form className='space-y-5'>
          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Title</Typography>
            <TextField
              sx={{
                color: textColor,
                border: border,
                borderColor: borderColor,
              }}
              id='title'
              name='title'
              placeholder='e.g. Take coffee break'
              hiddenLabel
              //   value={values.first_name}
              //   onBlur={handleBlur}
              //   onChange={handleChange}
              //   error={errors.first_name && touched.first_name}
            />
          </FormControl>

          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Description</Typography>
            <TextField
              id='description'
              name='description'
              placeholder='e.g. It’s always good to take a break. This 15 minute break will echarge the batteries a little.'
              hiddenLabel
              multiline
              rows={5}
              //   value={values.first_name}
              //   onBlur={handleBlur}
              //   onChange={handleChange}
              //   error={errors.first_name && touched.first_name}
            />
          </FormControl>

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
                  border: border,
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
          <button className='px-4 w-full py-2 bg-Purple text-White rounded-full hover:opacity-60'>
            Create Task
          </button>
        </form>
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
