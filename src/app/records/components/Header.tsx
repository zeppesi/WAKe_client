'use client';

import { cn } from '@/styles/utils';
import styles from '@/styles/common.module.css';
import { useRouter } from 'next/navigation';
import Back from '@/assets/svgs/back.svg';

const Header = () => {
  const router = useRouter();
  return (
    <header className={cn(styles.header, 'border-b border-gray bg-[#ECECEC]')}>
      <button onClick={router.back}>
        <Back width={24} height={24} />
      </button>
    </header>
  );
};

export default Header;
