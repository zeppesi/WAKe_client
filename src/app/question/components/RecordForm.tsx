'use client';

import { INPUT_MAX_LENGTH, useRecordForm } from '../hooks/useRecordForm';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

import { cn } from '@/styles/utils';
import commonStyles from '@/styles/common.module.css';
import styles from '../page.module.css';

const USERNAMES = ['지영', '지현', '홍철'];

const RecordForm = () => {
  const {
    remainingSeconds,
    isTimerEnd,
    input,
    handleInputFocus,
    handleInputChange,
    handleInputBlur,
  } = useRecordForm();

  const exceedsMaxLength = input.length > INPUT_MAX_LENGTH;

  return (
    <>
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
        <textarea
          className={cn(
            'h-160 w-full resize-none rounded-20 border-1 border-black px-16 py-12 caret-primary focus:border-primary',
            exceedsMaxLength && 'focus:border-red focus:outline-red caret-red',
          )}
          value={input}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        <span className={cn('self-end', exceedsMaxLength && 'text-red')}>
          {input.length}/{INPUT_MAX_LENGTH}
        </span>
      </div>

      <div className="bg-gray text-red mb-20 mt-16 flex h-60 w-full max-w-400 items-center justify-center rounded-12 text-28 font-extrabold">
        {isTimerEnd ? '지금 떠오른 그 단어를 던져요' : remainingSeconds}
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
    </>
  );
};

export default RecordForm;
