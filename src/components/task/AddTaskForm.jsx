import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { ThemeContext } from '@/hooks/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';
import { useSWRConfig } from 'swr';
import { fetcher } from '@/common/fetcher';
import useSWR from 'swr';
import { useParams } from 'next/navigation';

export function AddTaskForm(props) {
  const { onClose, open, setOpen } = props;
  const { mode } = React.useContext(ThemeContext);
  const { mutate } = useSWRConfig();
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState(['']);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState({});
  const params = useParams();

  const { data } = useSWR(`/api/boards/${params.id}`, fetcher);

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

  const handleClose = () => {
    setOpen(false);
  };

  const submitTaskHHandler = async (e) => {
    e.preventDefault();
    const data = {
      boardId: params.id,
      columnId: status._id,
      status: status.name,
      title,
      description: desc,
      subtasks: inputValues.map((value) => {
        return { title: value, isCompleted: false };
      }),
    };
    try {
      setLoading(true);

      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error('Failed to update topic');
      }
      mutate('/api/tasks');

      setLoading(false);
      setInputValues(['']);
      setTitle('');
      setDesc('');
      setStatus({});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div
        className={`${
          mode === 'light' ? 'bg-White' : 'bg-VeryDarkGrey'
        } p-10 space-y-8 text-MediumGrey w-full`}
      >
        <Typography variant='body1'>Add New Task</Typography>

        <form onSubmit={submitTaskHHandler} className='space-y-5'>
          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Title</Typography>
            <TextField
              variant='outlined'
              // sx={{
              //   border: border,
              //   borderColor: borderColor,
              // }}
              id='title'
              name='title'
              placeholder='e.g. Take coffee break'
              hiddenLabel
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              //   onBlur={handleBlur}
              //   error={errors.first_name && touched.first_name}
            />
          </FormControl>

          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Description</Typography>
            <TextField
              id='description'
              name='description'
              placeholder='e.g. It’s always good to take a break. This 15 minute break will echarge the batteries a little.'
              hiddenLabel
              multiline
              rows={5}
              // sx={{
              //   color: textColor,
              //   border: border,
              //   borderColor: borderColor,
              // }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              //   onBlur={handleBlur}
              //   error={errors.first_name && touched.first_name}
            />
          </FormControl>

          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Subtasks</Typography>
            {inputValues.map((value, index) => (
              <div key={index} className='flex items-center gap-3'>
                <TextField
                  id='subtasks'
                  name='subtasks'
                  placeholder='e.g. Make coffee'
                  hiddenLabel
                  fullWidth
                  // sx={{
                  //   color: textColor,
                  //   border: border,
                  //   borderColor: borderColor,
                  // }}
                  value={value}
                  onChange={(e) => handleInputChange(e, index)}
                  //   onBlur={handleBlur}
                  //   error={errors.first_name && touched.first_name}
                />
                <div>
                  <IconButton
                    sx={{ color: '#828FA3' }}
                    onClick={() => handleRemoveInput(index)}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
            ))}

            <button
              type='button'
              onClick={handleAddInput}
              className='px-4 w-full py-3 bg-PurpleLighter text-Purple rounded-full hover:opacity-60'
            >
              + Add New Subtask
            </button>
          </FormControl>

          <div className='space-y-3'>
            <Typography variant='body2' sx={{ color: '#828FA3' }}>
              Current Status
            </Typography>

            <FormControl fullWidth>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                // sx={{
                //   color: textColor,
                //   border: border,
                //   borderColor: borderColor,
                // }}
                displayEmpty
                inputProps={{
                  'aria-label': 'Without label',
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      // bgcolor: selectColor,

                      '& .MuiMenuItem-root': {
                        //   padding: 2,
                      },
                    },
                  },
                }}
              >
                {data?.columns?.map((item) => (
                  <MenuItem
                    key={item?._id}
                    value={item}
                    // sx={{ color: textColor }}
                  >
                    {item?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <button
            type='submit'
            className='px-4 w-full py-3 bg-Purple text-White rounded-full hover:opacity-60'
          >
            {loading ? (
              <CircularProgress size={20} sx={{ color: 'white' }} />
            ) : (
              'Create Task'
            )}
          </button>
        </form>
      </div>
    </Dialog>
  );
}

export const substasks = [
  {
    task: 'Research competitor pricing and business models',
    completed: true,
  },
  {
    task: 'Outline a business model that works for our solution',
    completed: true,
  },
  {
    task: 'Talk to potential customers about our proposed solution and ask for fair price expectancy',
    completed: false,
  },
];
