import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import TopNavigation from '@/components/TopNavigation';
import FooterMenu from '@/components/FooterMenu';
import ContextProvider from '@/components/ContextProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Demo',
  description: 'a demo for a social media platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ContextProvider>
            <main className='pt-0'>{children}</main>
            <TopNavigation />
            <FooterMenu />
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
