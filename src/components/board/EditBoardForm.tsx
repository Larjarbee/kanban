import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { Typography, FormControl, TextField, IconButton } from '@mui/material';
import { ThemeContext } from '@/hooks/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onClose: (value: string) => void;
}

export function EditBoardForm(props: SimpleDialogProps) {
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
          Edit Board
        </Typography>

        <form className='space-y-5'>
          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Name</Typography>
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
            <Typography variant='body2'>Columns</Typography>
            <div className='flex items-center gap-3'>
              <TextField
                id='column'
                name='column'
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
              + Add New Column
            </button>
          </FormControl>

          <button className='px-4 w-full py-3 bg-Purple text-White rounded-full hover:opacity-60'>
            Save Changes
          </button>
        </form>
      </div>
    </Dialog>
  );
}
