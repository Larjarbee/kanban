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

export function DeleteTask(props: SimpleDialogProps) {
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
        <Typography variant='body1' sx={{ color: '#EA5555', fontWeight: 900 }}>
          Delete Task
        </Typography>

        <Typography variant='body1' sx={{ color: '#828FA3' }}>
          Are you sure you want to delete the ‘Build settings UI’ task and its
          subtasks? This action cannot be reversed.
        </Typography>

        <div className='flex gap-5'>
          <button className='px-4 w-full py-3 bg-Red text-White rounded-full hover:opacity-60'>
            Delete
          </button>
          <button className='px-4 w-full py-3 bg-PurpleLighter text-Purple rounded-full hover:opacity-60'>
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  );
}
