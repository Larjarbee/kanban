import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Typography } from '@mui/material';
import { ThemeContext } from '@/hooks/ThemeContext';
import { useSWRConfig } from 'swr';
import { useSnackbar } from 'notistack';

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  setOpens: (value: boolean) => void;
  onClose: (value: string) => void;
  task: any;
}

export function DeleteTask(props: SimpleDialogProps) {
  const { onClose, open, setOpen, setOpens, task } = props;
  const { mode } = React.useContext(ThemeContext);
  const { mutate } = useSWRConfig();
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    setOpen(false);
  };

  const deleteTaskHandler = async () => {
    try {
      await fetch(`/api/tasks/${task?._id}`, {
        method: 'DELETE',
      });
      mutate('/api/tasks');
      enqueueSnackbar('Task was deleted successful', {
        variant: 'error',
      });
      setOpen(false);
      setOpens(false);
    } catch (error) {
      console.log(error);
    }
  };

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
          Are you sure you want to delete the '{task?.title}' task and its
          subtasks? This action cannot be reversed.
        </Typography>

        <div className='flex gap-5'>
          <button
            onClick={deleteTaskHandler}
            className='px-4 w-full py-3 bg-Red text-White rounded-full hover:opacity-60'
          >
            Delete
          </button>
          <button
            onClick={handleClose}
            className='px-4 w-full py-3 bg-PurpleLighter text-Purple rounded-full hover:opacity-60'
          >
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  );
}
