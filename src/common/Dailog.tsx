import * as React from 'react';
import Button from '@mui/material/Button';
import { ColumnDetails } from '@/components/columns/ColumnDetails';

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      {/* <ColumnDetails open={open} onClose={handleClose} /> */}
    </div>
  );
}
