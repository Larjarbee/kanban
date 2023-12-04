import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
  return (
    <div className='text-center mt-5 h-screen'>
      <CircularProgress />
    </div>
  );
};

export default Loading;
