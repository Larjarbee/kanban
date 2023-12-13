'use client';

import React, { useContext } from 'react';
import { ThemeContext } from '@/hooks/ThemeContext';
import { SnackbarProvider } from 'notistack';
import { notistackRef } from './constantRef';
import { Icon, IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

export default function ContainerWrapper({ children }) {
  const { mode } = useContext(ThemeContext);
  const { closeSnackbar } = useSnackbar();
  return (
    <div
      className={`${
        mode === 'light' ? 'bg-LighterGrey' : 'bg-VeryDarkGrey'
      } w-full`}
    >
      <SnackbarProvider
        ref={notistackRef}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        preventDuplicate
        autoHideDuration={3000}
        action={(key) => (
          <IconButton
            onClick={() => {
              notistackRef.current.closeSnackbar(key);
            }}
            color='inherit'
            size='small'
          >
            <CloseIcon />
          </IconButton>
        )}
      >
        {children}
      </SnackbarProvider>
    </div>
  );
}
