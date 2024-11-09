import type { Metadata } from 'next';
import Head from 'next/head';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/context';
import { Footer, Header, Main } from '@/app/components';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'My homepage',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={roboto.className}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
