import Button from '@/common/Button';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <div className='mt-[25%] text-MediumGrey text-center space-y-5 '>
        <Typography variant='body1'>
          This board is empty. Create a new column to get started.
        </Typography>
        <div className='w-[16%] mx-auto'>
          <Button>+ Add New Column</Button>
        </div>
      </div>
    </main>
  );
}
