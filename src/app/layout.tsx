import '@/styles/globals.css';

import type { Metadata } from 'next';
import { cn } from '@/styles/utils';
import { notoSansKR } from '@/styles/fonts';
import styles from '@/styles/common.module.css';

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
        <div className={cn(styles.layoutWidth, 'mx-auto')}>{children}</div>
      </body>
    </html>
  );
}
