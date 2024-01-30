import * as React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

export function EditTaskForm() {
  return (
    <div className='space-y-8 text-MediumGrey w-full'>
      <h2>Edit Task</h2>

      <form className='space-y-5'>
        <div className='space-y-3'>
          <Label>Title</Label>
          <Input
            id='title'
            name='title'
            placeholder='e.g. Take coffee break'

            //   value={values.first_name}
            //   onBlur={handleBlur}
            //   onChange={handleChange}
            //   error={errors.first_name && touched.first_name}
          />
        </div>

        <div className='space-y-3'>
          <Label>Description</Label>
          <Input
            id='description'
            name='description'
            placeholder='e.g. It’s always good to take a break. This 15 minute break will echarge the batteries a little.'

            //   value={values.first_name}
            //   onBlur={handleBlur}
            //   onChange={handleChange}
            //   error={errors.first_name && touched.first_name}
          />
        </div>

        <div className='space-y-3'>
          <Label>Subtasks</Label>
          <div className='flex items-center gap-3'>
            <Input
              id='subtasks'
              name='subtasks'
              placeholder='e.g. Make coffee'

              //   value={values.first_name}
              //   onBlur={handleBlur}
              //   onChange={handleChange}
              //   error={errors.first_name && touched.first_name}
            />
            <div>
              <Button variant='ghost' size='icon'>
                <X />
              </Button>
            </div>
          </div>

          <button className='px-4 w-full py-3 bg-PurpleLighter text-Purple rounded-full hover:opacity-60'>
            + Add New Subtask
          </button>
        </div>

        <div className='space-y-3'>
          <Label>Current Status</Label>

          {/* <div fullWidth>
            <Select
              // value={age}
              // onChange={handleChange}
              sx={{
                color: textColor,
                border: border,
                borderColor: borderColor,
              }}
              displayEmpty
              inputProps={{
                'aria-label': 'Without label',
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: selectColor,

                    '& .MuiMenuItem-root': {
                      //   padding: 2,
                    },
                  },
                },
              }}
            >
              <MenuItem value='' sx={{ color: textColor }}>
                Todo
              </MenuItem>
              <MenuItem value='' sx={{ color: textColor }}>
                Doing
              </MenuItem>
              <MenuItem value='' sx={{ color: textColor }}>
                Done
              </MenuItem>
            </Select>
          </div> */}
        </div>
        <button className='px-4 w-full py-3 bg-Purple text-White rounded-full hover:opacity-60'>
          Save Changes
        </button>
      </form>
    </div>
  );
}
