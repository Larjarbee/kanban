import ThemeConfig from '@/configs/themeConfigs/ThemeConfig';
import * as React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Sidebar from '@/components/nav/Sidebar';
import Navbar from '@/components/nav/Navbar';
import { Box } from '@mui/material';

const jakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={jakarta.className}>
        <ThemeConfig>
          <Box className='bg-LighterGrey'>
            <Box className='flex'>
              <Box className='h-full w-[20%]'>
                <Sidebar />
              </Box>
              <Box className='w-[80%]'>
                <Navbar />
                {children}
              </Box>
            </Box>
          </Box>
        </ThemeConfig>
      </body>
    </html>
  );
}
