'use client';
import Dashboard from '@/components/board/Dashboard';
import { getBoards } from '@/lib/api/board';

export default function Home() {
  const { data } = getBoards();
  return (
    <div className='p-5 h-screen bg-[#f2f5fd]'>
      {data?.data.length == 0 ? (
        <div>
          <div className='my-[25%] text-MediumGrey text-center space-y-5'>
            <h4>This board is empty. Create a new column to get started.</h4>
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
