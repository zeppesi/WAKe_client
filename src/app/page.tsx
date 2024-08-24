import Link from 'next/link';
import Play from '@/assets/svgs/play.svg';
import { cn } from '@/styles/utils';
import commonStyles from '@/styles/common.module.css';
import { poppins } from '@/styles/fonts';
import styles from './page.module.css';
import kakaoLogin from '@/assets/images/kakao_login.png';
import { cookies } from 'next/headers';
import { LogoutButton } from './components/LogoutButton';

const Home = () => {
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get('access');

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

      {isAuthenticated ? (
        <div className="flex flex-col gap-20">
          <Link
            href="/content"
            className={cn(
              commonStyles.cta,
              styles.btn,
              'gap-4 text-30 font-extrabold active:scale-95',
            )}
          >
            <Play width="36" height="36" fill="white" />
            start
          </Link>

          <Link
            href="/records"
            className={cn(
              commonStyles.cta,
              styles.btn,
              'text-24 font-bold active:scale-95',
            )}
          >
            기록 내역
          </Link>

          <LogoutButton />
        </div>
      ) : (
        <a
          className="mt-auto"
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_API_URL}/accounts/kakao/callback/&response_type=code`}
        >
          <img className="w-200" src={kakaoLogin.src} alt="카카오 로그인" />
        </a>
      )}
    </main>
  );
};

export default Home;
