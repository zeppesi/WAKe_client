import Box from '@/assets/svgs/box.svg';
import Link from 'next/link';
import { cn } from '@/styles/utils';
import styles from '@/styles/common.module.css';

const Header = () => (
  <header
    className={cn(styles.header, 'fixed top-0 w-full max-w-400 bg-white')}
  >
    <Link href="/records">
      <Box width={36} height={36} />
    </Link>
  </header>
);

export default Header;
