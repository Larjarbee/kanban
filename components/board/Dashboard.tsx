import React from 'react';
import Link from 'next/link';
import { getBoards } from '@/lib/api/board';
import { Button } from '../ui/button';
import { ArrowUpRightFromSquare } from 'lucide-react';
import Loading from '@/common/Loading';

export default function Dashboard() {
  const { data, isLoading } = getBoards();

  return (
    <>
      {isLoading && <Loading />}
      <div className='grid grid-cols-4 gap-10'>
        {data?.data.map((column: any) => (
          <div key={column?.id} className='flex items-center gap-5'>
            <h2>{column?.name}</h2>

            <div>
              <Link href={`/boards/${column?.id}`}>
                <Button variant='outline' size='icon'>
                  <ArrowUpRightFromSquare className='h-4 w-4' />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
