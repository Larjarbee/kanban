import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import {
  Typography,
  FormControl,
  TextField,
  IconButton,
  CircularProgress,
  Input,
} from '@mui/material';
import { ThemeContext } from '@/hooks/ThemeContext';
import CloseIcon from '@mui/icons-material/Close';
import { useSWRConfig } from 'swr';
import { useParams } from 'next/navigation';

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  onClose: (value: string) => void;
}

export const AddColumnForm = (props: SimpleDialogProps) => {
  const { onClose, open, setOpen } = props;
  const { mode } = React.useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('');
  const [inputValues, setInputValues] = useState<string[]>(['']);
  const { mutate } = useSWRConfig();
  const params = useParams();

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

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      columns: inputValues.map((value) => {
        return { name: value, color };
      }),
    };

    try {
      setLoading(true);

      await fetch(`/api/boards/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
      window.location.reload();

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const textColor = mode === 'light' ? 'black' : 'white';
  // const selectColor = mode === 'light' ? '#F4F7FD' : '#20212C';
  const border = mode === 'light' ? null : 1;
  const borderColor = mode === 'light' ? '#F4F7FD' : '#828FA3';

  return (
    <Dialog onClose={handleClose} open={open}>
      <div
        className={`${
          mode === 'light' ? 'bg-White' : 'bg-VeryDarkGrey'
        } p-10 space-y-8 text-MediumGrey w-full`}
      >
        <Typography variant='body1' sx={{ color: textColor, fontWeight: 900 }}>
          Add New Column
        </Typography>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <FormControl fullWidth className='space-y-3'>
            <Typography variant='body2'>Columns</Typography>
            {inputValues.map((value, index) => (
              <div key={index} className='flex items-center gap-3'>
                <TextField
                  id='column'
                  name='column'
                  placeholder='e.g. Make coffee'
                  hiddenLabel
                  fullWidth
                  sx={{
                    color: textColor,
                    border: border,
                    borderColor: borderColor,
                  }}
                  value={value}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(e, index)
                  }
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
              + Add New Column
            </button>
          </FormControl>

          <FormControl fullWidth>
            <Typography>Choose Color</Typography>
            <input
              type='color'
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className='w-full h-16'
            />
          </FormControl>

          <button
            type='submit'
            className='px-4 w-full py-3 bg-Purple text-White rounded-full hover:opacity-60'
          >
            {loading ? (
              <CircularProgress size={20} sx={{ color: 'white' }} />
            ) : (
              'Add Column'
            )}
          </button>
        </form>
      </div>
    </Dialog>
  );
};
