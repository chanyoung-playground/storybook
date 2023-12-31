import RecoilRootProvider from '@/recoil/recoilRootProvider';
import GlobalStyles from '@/styles/GlobalStyles';
import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JOONBEE',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootProvider>
          <GlobalStyles />
          <main>
            <div>{children}</div>
          </main>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
