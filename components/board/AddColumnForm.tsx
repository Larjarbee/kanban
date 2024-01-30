import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import { ThemeContext } from '@/hooks/ThemeContext';
import { useParams } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Loader2 } from 'lucide-react';

export const AddColumnForm = () => {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('');
  const [column, setColumn] = useState('');
  const params = useParams();
  // const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      boardId: params.id,
      name: column,
      color,
    };

    try {
      setLoading(true);

      await fetch('/api/columns', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      enqueueSnackbar('Column added successful', {
        variant: 'success',
      });
      setColor('');
      setColumn('');
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='p-10 space-y-8 text-MediumGrey w-full'>
      <h2>Add New Column</h2>

      <form onSubmit={handleSubmit} className='space-y-5'>
        <div className='space-y-1'>
          <Label htmlFor='column'>Column</Label>

          <Input
            id='column'
            name='column'
            placeholder='e.g. Make coffee'
            value={column}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setColumn(e.target.value)
            }
          />
        </div>

        <button
          type='submit'
          className='px-4 w-full py-3 bg-Purple text-White rounded-full hover:opacity-60'
        >
          {loading ? <Loader2 className=' animate-spin' /> : 'Add Column'}
        </button>
      </form>
    </div>
  );
};
