import Button from '@/common/Button';
import ColumnList from '@/components/columns/ColumnList';

import { Typography } from '@mui/material';

export default function Home() {
  const columns = false;
  return (
    <main className='p-5 overflow-auto'>
      <ColumnList />
      {columns && (
        <div className='mt-[25%] text-MediumGrey text-center space-y-5 '>
          <Typography variant='body1'>
            This board is empty. Create a new column to get started.
          </Typography>
          <div className='w-[16%] mx-auto'>
            <Button>+ Add New Column</Button>
          </div>
        </div>
      )}
    </main>
  );
}
