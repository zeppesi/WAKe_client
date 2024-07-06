import Box from '@/assets/svgs/box.svg';
import Link from 'next/link';

const Header = () => (
  <header className="fixed top-0 flex h-76 w-full max-w-400 items-center justify-end bg-white px-20">
    <Link href="/records">
      <Box width={36} height={36} />
    </Link>
  </header>
);

export default Header;
