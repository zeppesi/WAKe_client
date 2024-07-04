import Link from 'next/link';
import Play from '@/assets/svgs/play.svg';
import { cn } from '@/styles/utils';
import commonStyles from '@/styles/common.module.css';
import homeStyles from './page.module.css';
import { poppins } from '@/styles/fonts';

const Home = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <h1
        className={cn(
          poppins.className,
          'mb-90 mt-60 text-60 font-extrabold text-primary',
        )}
      >
        WAKe
      </h1>

      <p className="mb-48 text-center text-28 font-semibold">
        틈새 시간을 이용해
        <br />
        자신을 기록해 보세요
      </p>

      <div className="flex flex-col gap-20">
        <Link
          href="/question"
          className={cn(
            commonStyles.cta,
            homeStyles.btn,
            'gap-4 text-30 font-extrabold',
          )}
        >
          <Play width="36" height="36" fill="white" />
          start
        </Link>

        <Link
          href="/records"
          className={cn(commonStyles.cta, homeStyles.btn, 'text-24 font-bold')}
        >
          기록 내역
        </Link>
      </div>
    </main>
  );
};

export default Home;
