import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  IconButton,
} from '@mui/material';
import { ThemeContext } from '@/hooks/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onClose: (value: string) => void;
}

export function EditTaskForm(props: SimpleDialogProps) {
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
          Edit Task
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
              sx={{
                color: textColor,
                border: border,
                borderColor: borderColor,
              }}
              //   value={values.first_name}
              //   onBlur={handleBlur}
              //   onChange={handleChange}
              //   error={errors.first_name && touched.first_name}
            />
          </FormControl>

          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Subtasks</Typography>
            <div className='flex items-center gap-3'>
              <TextField
                id='subtasks'
                name='subtasks'
                placeholder='e.g. Make coffee'
                hiddenLabel
                fullWidth
                sx={{
                  color: textColor,
                  border: border,
                  borderColor: borderColor,
                }}
                //   value={values.first_name}
                //   onBlur={handleBlur}
                //   onChange={handleChange}
                //   error={errors.first_name && touched.first_name}
              />
              <div>
                <IconButton sx={{ color: '#828FA3' }}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>

            <button className='px-4 w-full py-3 bg-PurpleLighter text-Purple rounded-full hover:opacity-60'>
              + Add New Subtask
            </button>
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
          <button className='px-4 w-full py-3 bg-Purple text-White rounded-full hover:opacity-60'>
            Save Changes
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
