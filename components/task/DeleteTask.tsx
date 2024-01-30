import React from 'react';
// import { useSnackbar } from 'notistack';

export function DeleteTask() {
  // const { enqueueSnackbar } = useSnackbar();

  const deleteTaskHandler = async () => {
    // try {
    //   await fetch(`/api/tasks/${task?._id}`, {
    //     method: 'DELETE',
    //   });
    //   mutate('/api/tasks');
    //   enqueueSnackbar('Task was deleted successful', {
    //     variant: 'error',
    //   });
    //   setOpen(false);
    //   setOpens(false);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className='space-y-8 text-MediumGrey w-full'>
      <h2>Delete Task</h2>

      <h4>
        {/* Are you sure you want to delete the {'{task?.title}'} task and its */}
        subtasks? This action cannot be reversed.
      </h4>

      <div className='flex gap-5'>
        <button
          // onClick={deleteTaskHandler}
          className='px-4 w-full py-3 bg-Red text-White rounded-full hover:opacity-60'
        >
          Delete
        </button>
        <button className='px-4 w-full py-3 bg-PurpleLighter text-Purple rounded-full hover:opacity-60'>
          Cancel
        </button>
      </div>
    </div>
  );
}
