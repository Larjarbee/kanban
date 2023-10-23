import ThemeConfig from '@/configs/themeConfigs/ThemeConfig';
import * as React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Sidebar from '@/components/nav/Sidebar';
import Navbar from '@/components/nav/Navbar';
import { Box } from '@mui/material';
import ContainerWrapper from '@/common/ContainerWrapper';

const jakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Kanban',
  description: 'A fronted mentor challenge',
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
          <ContainerWrapper>
            <Box className='flex'>
              <Box className='h-full w-[20%]'>
                <Sidebar />
              </Box>
              <Box className='w-[80%]'>
                <Navbar />
                {children}
              </Box>
            </Box>
          </ContainerWrapper>
        </ThemeConfig>
      </body>
    </html>
  );
}
