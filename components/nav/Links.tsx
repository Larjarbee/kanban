'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import box from '@/public/svgs/fluent_board-split-24-regular.svg';
import box1 from '@/public/svgs/fluent_board-split-24-regular (2).svg';
import { cn } from '@/lib/utils';

const Links = ({ data }: any) => {
  const pathname = usePathname();
  return (
    <>
      {data?.map((link: any) => (
        <Link
          key={link?.id}
          className={cn(
            pathname === `/boards/${link?.id}`
              ? 'flex items-center pl-14 py-3 gap-3 text-white rounded-r-full bg-[#635FC7]'
              : 'flex items-center pl-14 gap-3 py-3 hover:bg-[hsl(243,100%,95%)] hover:text-Purple hover:rounded-r-full hover:transition-all'
          )}
          href={`/boards/${link.id}`}
        >
          <div>
            <Image
              src={pathname == `/boards/${link?.id}` ? box1 : box}
              width={16}
              height={16}
              alt='logo'
            />
          </div>

          <h4>{link.name}</h4>
        </Link>
      ))}
    </>
  );
};

export default Links;
