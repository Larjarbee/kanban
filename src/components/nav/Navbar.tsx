import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Navbar() {
  return (
    <Box className='bg-White p-5 flex justify-between border-b-2 items-center'>
      <Typography variant='h6'>Platform Launch</Typography>
      <div className='flex items-center gap-3'>
        <button
          disabled={true}
          className='px-4 py-3 bg-Purple text-White rounded-full hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-70'
        >
          + Add New Task
        </button>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </Box>
  );
}
