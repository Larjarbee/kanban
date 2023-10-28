'use client';
import { IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '@/hooks/ThemeContext';
import useSWR from 'swr';
import { fetcher } from '@/common/fetcher';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

export default function Dashboard() {
  const { mode } = useContext(ThemeContext);
  const { data, error, isLoading } = useSWR('/api/boards', fetcher);

  const textColor = mode === 'light' ? 'black' : 'white';

  return (
    <div className='grid grid-cols-3 gap-5'>
      {data?.map((column: any) => (
        <div key={column?._id} className='flex gap-5'>
          <div>
            <Typography variant='body1' sx={{ color: textColor }}>
              {column?.name}
            </Typography>
            <Typography variant='body2' sx={{ color: '#828FA3' }}>
              {column?.createdAt}
            </Typography>
          </div>
          <div>
            <Link href={`/dashboard/${column?._id}`}>
              <IconButton>
                <LaunchIcon sx={{ color: textColor }} />
              </IconButton>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
