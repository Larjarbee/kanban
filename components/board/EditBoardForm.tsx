import * as React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

export function EditBoardForm() {
  return (
    <div className='space-y-8 text-MediumGrey w-full'>
      <h2>Edit Board</h2>

      <form className='space-y-5'>
        <div className='space-y-3'>
          <Label>Name</Label>
          <Input id='title' name='title' placeholder='e.g. Take coffee break' />
        </div>

        <div className='space-y-3'>
          <Label>Columns</Label>
          <div className='flex items-center gap-3'>
            <Input id='column' name='column' placeholder='e.g. Make coffee' />
            <div>
              <Button variant='ghost' size='icon'>
                <X />
              </Button>
            </div>
          </div>

          <button className='px-4 w-full py-3 bg-PurpleLighter text-Purple rounded-full hover:opacity-60'>
            + Add New Column
          </button>
        </div>

        <button className='px-4 w-full py-3 bg-Purple text-White rounded-full hover:opacity-60'>
          Save Changes
        </button>
      </form>
    </div>
  );
}
