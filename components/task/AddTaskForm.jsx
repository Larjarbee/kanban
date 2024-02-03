'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Loader2, X } from 'lucide-react';
import { DialogFooter, DialogHeader } from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getBoardById } from '@/lib/api/board';
import { useAddTaskMutation } from '@/lib/api/task';

export function AddTaskForm(props) {
  const [inputValues, setInputValues] = useState(['']);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const params = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const { data } = getBoardById(params.id);

  const handleInputChange = (e, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    const newInputValues = [...inputValues, ''];
    setInputValues(newInputValues);
  };

  const handleRemoveInput = (index) => {
    const newInputValues = inputValues.filter((_, i) => i !== index);
    setInputValues(newInputValues);
  };

  const { mutate: addTask, isLoading } = useAddTaskMutation();

  const submitTaskHHandler = async (e) => {
    e.preventDefault();
    const data = {
      status: selectValue,
      title,
      description: desc,
      subtasks: inputValues.map((value) => {
        return { title: value, isCompleted: false };
      }),
    };
    try {
      addTask(data);

      // enqueueSnackbar('Task added successful', {
      //   variant: 'success',
      // });
      setInputValues(['']);
      setTitle('');
      setDesc('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='space-y-8'>
      <DialogHeader>
        <h2>Add New Task</h2>
      </DialogHeader>

      <form className='space-y-5' onSubmit={submitTaskHHandler}>
        <div className='space-y-1'>
          <Label htmlFor='title' className='text-right'>
            Title
          </Label>
          <Input
            id='title'
            name='title'
            placeholder='e.g. Take coffee break'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className='space-y-1'>
          <Label htmlFor='description' className='text-right'>
            Description
          </Label>
          <Input
            id='description'
            name='description'
            placeholder='e.g. It’s always good to take a break. This 15 minute break will echarge the batteries a little.'
            rows={5}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className='space-y-3'>
          <Label htmlFor='subtasks' className='text-right'>
            Subtasks
          </Label>
          {inputValues.map((value, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Input
                id='subtasks'
                name='subtasks'
                placeholder='e.g. Make coffee'
                value={value}
                onChange={(e) => handleInputChange(e, index)}
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
            + Add New Subtask
          </Button>
        </div>

        <div className='space-y-1'>
          <Label htmlFor='status' className='text-right'>
            Current Status
          </Label>

          <Select onValueChange={(value) => setSelectValue(value)}>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select status' />
            </SelectTrigger>
            <SelectContent className=' h-2/3 overflow-auto'>
              {data?.data.columns.map((column, index) => (
                <SelectItem key={index} value={column.name}>
                  {column.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button type='submit' className='w-full'>
            {isLoading ? <Loader2 className=' animate-spin' /> : 'Create Task'}
          </Button>
        </DialogFooter>
      </form>
    </div>
  );
}
