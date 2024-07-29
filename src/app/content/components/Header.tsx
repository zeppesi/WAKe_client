import Box from '@/assets/svgs/box.svg';
import Link from 'next/link';
import { cn } from '@/styles/utils';
import styles from '@/styles/common.module.css';
import { poppins } from '@/styles/fonts';

const Header = () => (
  <header
    className={cn(styles.header, 'fixed top-0 w-full justify-between bg-white')}
  >
    <Link href="/">
      <span
        className={cn(poppins.className, 'text-24 font-extrabold text-primary')}
      >
        WAKe
      </span>
    </Link>
    <Link href="/records">
      <Box width={36} height={36} />
    </Link>
  </header>
);

export default Header;
