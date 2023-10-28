('');
import React, { FormEvent, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Typography, FormControl, TextField, IconButton } from '@mui/material';
import { ThemeContext } from '@/hooks/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onClose: (value: string) => void;
}

export function AddBoardForm(props: SimpleDialogProps) {
  const { onClose, open, setOpen } = props;
  const { mode } = React.useContext(ThemeContext);
  const [name, setName] = useState('');
  const [columns, setColumns] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const colors = [
    '#3E3F4E',
    '#2B2C37',
    '#828FA3',
    '#E4EBFA',
    '#F4F7FD',
    '#FFFFFF',
    '#EA5555',
    '#FF9898',
    '#635FC7',
    '#A8A4FF',
    '#000112',
    '#20212C',
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];

    const data = {
      name,
      columns: { name: columns, color: randomColor },
    };
    try {
      await fetch('/api/boards', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const textColor = mode === 'light' ? 'black' : 'white';
  // const selectColor = mode === 'light' ? '#F4F7FD' : '#20212C';
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
          Add New Board
        </Typography>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Name</Typography>
            <TextField
              sx={{
                color: textColor,
                border: border,
                borderColor: borderColor,
              }}
              id='name'
              name='name'
              placeholder='e.g. Take coffee break'
              hiddenLabel
              value={name}
              //   onBlur={handleBlur}
              onChange={(e) => setName(e.target.value)}
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
                value={columns}
                //   onBlur={handleBlur}
                onChange={(e) => setColumns(e.target.value)}
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

          <button
            type='submit'
            className='px-4 w-full py-3 bg-Purple text-White rounded-full hover:opacity-60'
          >
            Create New Board
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
