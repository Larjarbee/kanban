import React from 'react';

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='px-4 py-3 bg-Purple text-White rounded-full hover:opacity-60'>
      {children}
    </button>
  );
}
