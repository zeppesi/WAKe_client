import Link from 'next/link';
import { cn } from '@/styles/utils';
import commonStyles from '@/styles/common.module.css';
import { poppins } from '@/styles/fonts';
import styles from './page.module.css';
import kakaoLogin from '@/assets/images/kakao_login.png';
import Night from '@/assets/svgs/night.svg';
import { cookies } from 'next/headers';

const Home = () => {
  const isAuthenticated = !!cookies().get(
    process.env.NEXT_PUBLIC_JWT_TOKEN_KEY ?? '',
  );
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-[#C8F7FD] via-[#F3FFD9] to-[#FFFFFF] p-24">
      {isAuthenticated ? (
        <>
          <p className="mt-170 text-center text-28 font-semibold">
            자신의 감각을
            <br />
            일깨워 보세요
          </p>

          <Night className="mb-88 mt-76" />

          <div className="flex flex-col items-center gap-16">
            <Link
              href="/content"
              className={cn(
                commonStyles.cta,
                styles.btn,
                'text-20 font-extrabold active:scale-95',
              )}
            >
              WAKe
            </Link>

            <Link
              href="/records"
              className={cn(
                styles.btn,
                'flex items-center bg-[#C7CFDA] text-20 font-bold text-white active:scale-95',
              )}
            >
              내 기록
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1
            className={cn(
              poppins.className,
              'mt-200 text-60 font-extrabold leading-none text-primary',
            )}
          >
            WA
            <br />
            Ke!
          </h1>

          <p className="mb-120 mt-36 text-center text-28 font-semibold">
            틈새 시간을 이용해
            <br />
            자신을 기록해 보세요
          </p>

          <a
            href={
              process.env.NEXT_PUBLIC_API_BASE_URL + '/accounts/login/kakao'
            }
          >
            <img className="w-240" src={kakaoLogin.src} alt="카카오 로그인" />
          </a>
        </>
      )}
    </main>
  );
};

export default Home;
