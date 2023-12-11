import React from 'react';
import HomePage from '@/components/home/Home';

export default function Home() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <HomePage />
    </div>
  );
}
