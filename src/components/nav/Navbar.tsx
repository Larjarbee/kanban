import Button from '@/common/Button';
import { IconButton, Typography } from '@mui/material';
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Navbar() {
  return (
    <div className='bg-White p-5 flex justify-between items-center'>
      <Typography variant='h6'>Platform Launch</Typography>
      <div className='flex items-center gap-3'>
        <Button>+ Add New Task</Button>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}
