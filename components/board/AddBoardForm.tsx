'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Loader2, X } from 'lucide-react';
import { DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { colors } from '@/common/colors';
import { v4 as uuidv4 } from 'uuid';
import { useAddBoardMutation } from '@/lib/api/board';

export function AddBoardForm() {
  const [name, setName] = useState('');
  const [inputValues, setInputValues] = useState<string[]>(['']);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  const handleAddInput = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newInputValues = [...inputValues, ''];
    setInputValues(newInputValues);
  };

  const handleRemoveInput = (index: number) => {
    const newInputValues = inputValues.filter((_, i) => i !== index);
    setInputValues(newInputValues);
  };

  const { mutate: addBoard, isLoading } = useAddBoardMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomColorIndex];

    const data = {
      id: uuidv4(),
      name,
      columns: inputValues.map((value) => {
        return { name: value, color: randomColor };
      }),
    };

    try {
      addBoard(data);
      setInputValues(['']);
      setName('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Add New Board</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className='space-y-5 pt-3'>
        <div className='space-y-1'>
          <Label htmlFor='name' className='text-right'>
            Name
          </Label>
          <Input
            id='name'
            name='name'
            placeholder='e.g. Take coffee break'
            value={name}
            // onBlur={handleBlur}
            onChange={(e) => setName(e.target.value)}
            //   error={errors.first_name && touched.first_name}
          />
        </div>

        <div className='space-y-3'>
          <Label htmlFor='column' className='text-right'>
            Column
          </Label>
          {inputValues.map((value, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Input
                id='column'
                name='column'
                placeholder='e.g. Make coffee'
                value={value}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, index)
                }
                //   onBlur={handleBlur}
                //   error={errors.first_name && touched.first_name}
              />
              <div>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={() => handleRemoveInput(index)}
                >
                  <X />
                </Button>
              </div>
            </div>
          ))}

          <Button
            type='button'
            variant='secondary'
            onClick={handleAddInput}
            className='w-full'
          >
            + Add New Column
          </Button>
        </div>

        <DialogFooter>
          <Button className='w-full' type='submit'>
            {isLoading ? (
              <Loader2 className=' animate-spin' />
            ) : (
              'Create New Board'
            )}
          </Button>
        </DialogFooter>
      </form>
    </>
  );
}
