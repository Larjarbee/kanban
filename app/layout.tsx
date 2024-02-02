import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/Navbar';
import Sidebar from '@/components/nav/Sidebar';
import { ThemeProvider } from '@/configs/ShaduiTheme';
import QueryConfig from '@/configs/QueryConfig';

const jakarta = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kanban',
  description: 'A fronted mentor challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={jakarta.className}>
        <QueryConfig>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex'>
              <Sidebar />

              <div className='w-full'>
                <Navbar />
                {children}
              </div>
            </div>
          </ThemeProvider>
        </QueryConfig>
      </body>
    </html>
  );
}
