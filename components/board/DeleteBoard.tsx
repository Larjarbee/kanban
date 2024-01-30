import * as React from 'react';

export function DeleteBoard() {
  // const deleteBoardHandler = async () => {
  //   try {
  //     await fetch(`/api/boards/${params.id}`, {
  //       method: 'DELETE',
  //     }),
  //       mutate('/api/boards');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className='space-y-8 text-MediumGrey w-full'>
      <h2>Delete Board</h2>

      <h4>
        Are you sure you want to delete the ‘Build settings UI’ task and its
        subtasks? This action cannot be reversed.
      </h4>

      <div className='flex gap-5'>
        <button
          // onClick={deleteBoardHandler}
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
