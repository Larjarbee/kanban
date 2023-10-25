import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { IconButton, Typography } from '@mui/material';
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

  return (
    <Dialog onClose={handleClose} open={open}>
      <div
        className={`${
          mode === 'light' ? 'bg-LighterGrey' : 'bg-VeryDarkGrey'
        } p-5 space-y-5`}
      >
        <div className='flex justify-between'>
          {mode === 'light' ? (
            <Typography variant='body1' sx={{ fontWeight: 900 }}>
              Research pricing points of various competitors and trial different
              business models
            </Typography>
          ) : (
            <Typography
              variant='body1'
              sx={{ color: 'white', fontWeight: 900 }}
            >
              Research pricing points of various competitors and trial different
              business models
            </Typography>
          )}
          <div>
            <IconButton>
              {mode === 'light' ? (
                <MoreVertIcon />
              ) : (
                <MoreVertIcon sx={{ color: 'white' }} />
              )}
            </IconButton>
          </div>
        </div>

        <Typography variant='body2' sx={{ color: '#828FA3' }}>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </Typography>

        <div className={`${mode === 'light' ? 'text-Black' : 'text-White'}`}>
          <Typography variant='body2'>Subtasks (2 of 3)</Typography>
        </div>
      </div>
    </Dialog>
  );
}
