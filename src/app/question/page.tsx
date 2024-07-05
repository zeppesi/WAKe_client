import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

import { cn } from '@/styles/utils';
import commonStyles from '@/styles/common.module.css';
import { poppins } from '@/styles/fonts';
import styles from './page.module.css';

const USERNAMES = ['지영', '지현', '홍철'];

const Question = () => {
  return (
    <main className="flex flex-col items-center p-24 pb-104">
      <h1
        className={cn(
          poppins.className,
          'mb-48 mt-60 text-60 font-extrabold text-primary',
        )}
      >
        WAKe
      </h1>

      <p className="mb-24 text-center text-28 font-semibold">
        지금 바로 생각나는
        <br />
        단어는 무엇인가요?
      </p>

      <button
        className={cn(
          commonStyles.cta,
          'h-52 w-180 justify-center rounded-32 text-20 font-bold active:scale-95',
        )}
      >
        다른 질문 받기
      </button>

      <div className="mt-28 flex w-full max-w-400 flex-col gap-4">
        <textarea className="h-160 w-full resize-none rounded-20 border-1 border-black px-16 py-12 focus:border-primary focus:caret-primary" />
        <span className="self-end">n/100</span>
      </div>

      <div className="bg-gray mb-20 mt-16 flex h-60 w-full max-w-400 items-center justify-center rounded-12 text-28 font-extrabold text-[#F00808]">
        10
      </div>

      <RadioGroup
        defaultValue={USERNAMES[0]}
        className="flex items-center gap-16"
      >
        {USERNAMES.map(username => (
          <div key={username} className={styles.username}>
            <RadioGroupItem
              id={username}
              value={username}
              className="h-16 w-16 border-black text-black"
            />
            <label htmlFor={username} className="cursor-pointer">
              {username}
            </label>
          </div>
        ))}
      </RadioGroup>

      <footer
        className={
          'border-gray fixed bottom-0 flex h-80 w-full items-center justify-center border-t bg-white px-40'
        }
      >
        <button
          className={cn(
            commonStyles.cta,
            'h-56 w-full max-w-360 justify-center rounded-12 text-24 font-bold',
          )}
        >
          기록하기
        </button>
      </footer>
    </main>
  );
};

export default Question;
