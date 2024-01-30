import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TaskFormSelect = async ({ paramsId }: any) => {
  return (
    <div>
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
        <SelectContent className=' h-2/3 overflow-auto'>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TaskFormSelect;
