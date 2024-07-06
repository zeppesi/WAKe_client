import Home from '@/assets/svgs/home.svg';
import Link from 'next/link';
import { cn } from '@/styles/utils';
import styles from '@/styles/common.module.css';

const Header = () => (
  <header className={cn(styles.header, 'bg-gray')}>
    <Link href="/">
      <Home width={36} height={36} />
    </Link>
  </header>
);

export default Header;
