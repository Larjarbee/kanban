import ThemeConfig from '@/configs/themeConfigs/ThemeConfig';
import * as React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Sidebar from '@/components/nav/Sidebar';
import Navbar from '@/components/nav/Navbar';
import { ThemeProvider } from '@/hooks/ThemeContext';
import './globals.css';
import HomeWrapper from '@/common/HomeWrapper';
import ContainerWrapper from '@/common/ContainerWrapper';

const jakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  preload: false,
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
              <Sidebar />
              <HomeWrapper>
                <Navbar />
                <main className='w-full overflow-auto'>{children}</main>
              </HomeWrapper>
            </ContainerWrapper>
          </ThemeProvider>
        </ThemeConfig>
      </body>
    </html>
  );
}
