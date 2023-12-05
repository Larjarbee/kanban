import Dashboard from '@/components/board/Dashboard';
import getAllBoards from '@/lib/board/getAllBoards';
import { Typography } from '@mui/material';

export default async function Home() {
  const columns = await getAllBoards();

  return (
    <div className='p-5 h-screen'>
      {columns.lenght == 0 ? (
        <div>
          <div className='my-[25%] text-MediumGrey text-center space-y-5'>
            <Typography variant='body1'>
              This board is empty. Create a new column to get started.
            </Typography>
            <div className='w-[20%] mx-auto'>
              <button className='px-4 py-2 bg-Purple text-White rounded-full hover:opacity-60'>
                + Add New Column
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
