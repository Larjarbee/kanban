import Button from '@/common/Button';
import ColumnList from '@/components/columns/ColumnList';

import { Typography } from '@mui/material';

export default function Home() {
  const columns = false;
  return (
    <div className='p-5 w-full rounded-lg border-Purple border-2 overflow-auto ...'>
      {columns ? (
        <div className='my-[25%] text-MediumGrey text-center space-y-5'>
          <Typography variant='body1'>
            This board is empty. Create a new column to get started.
          </Typography>
          <div className='w-[20%] mx-auto'>
            <Button>+ Add New Column</Button>
          </div>
        </div>
      ) : (
        <ColumnList />
      )}
    </div>
  );
}
