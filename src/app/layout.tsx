import ThemeConfig from '@/configs/themeConfigs/ThemeConfig';
import * as React from 'react';
import { Inter } from 'next/font/google';
import Sidebar from '@/components/nav/Sidebar';
import Navbar from '@/components/nav/Navbar';
import { ThemeProvider } from '@/hooks/ThemeContext';
import ContainerWrapper from '@/common/ContainerWrapper';
import './globals.css';
import HomeWrapper from '@/common/HomeWrapper';

const jakarta = Inter({
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
          <ThemeProvider>
            <ContainerWrapper>
              <div className='flex-1'>
                <Sidebar />
              </div>
              <HomeWrapper>
                <Navbar />
                {children}
              </HomeWrapper>
            </ContainerWrapper>
          </ThemeProvider>
        </ThemeConfig>
      </body>
    </html>
  );
}
