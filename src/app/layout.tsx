import '@/styles/globals.css';

import type { Metadata } from 'next';
import { notoSansKR } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'WAKe',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <div className="max-w-1200 mx-auto">{children}</div>
      </body>
    </html>
  );
}
