'use client';

import { INPUT_MAX_LENGTH, useRecordForm } from '../hooks/useRecordForm';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radioGroup';

import { Toaster } from '@/components/ui/toaster';
import { USERNAMES } from '@/constants';
import { cn } from '@/styles/utils';
import commonStyles from '@/styles/common.module.css';
import styles from '../page.module.css';

const RecordForm = () => {
  const {
    content,
    getNewContent,
    remainingSeconds,
    isTimerEnd,
    input,
    handleInputFocus,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
    username,
    setUsername,
  } = useRecordForm();

  const exceedsMaxLength = input.length > INPUT_MAX_LENGTH;

  return (
    <>
      <p className="mb-24 whitespace-pre-line text-center text-28 font-semibold">
        {content?.text}
      </p>

      <button
        className={cn(
          commonStyles.cta,
          'h-52 w-180 justify-center rounded-32 text-20 font-bold active:scale-95',
        )}
        onClick={getNewContent}
      >
        다른 질문 받기
      </button>

      <div className="mt-28 flex w-full flex-col gap-4">
        <textarea
          className={cn(
            'h-160 w-full resize-none rounded-20 border px-16 py-12 caret-primary focus:border-primary',
            exceedsMaxLength && 'caret-red focus:border-red focus:outline-red',
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

      <div className="mb-20 mt-16 flex w-full items-center justify-center rounded-12 bg-lightGray px-12 py-8 text-28 font-extrabold text-red">
        {isTimerEnd ? '지금 떠오른 그 단어를 던져요' : remainingSeconds}
      </div>

      <RadioGroup
        className="flex items-center gap-16"
        defaultValue={USERNAMES[0]}
        value={username}
        onValueChange={username =>
          setUsername(username as (typeof USERNAMES)[number])
        }
      >
        {USERNAMES.map(username => (
          <div key={username} className={styles.username}>
            <RadioGroupItem
              id={username}
              className="size-16 border-black text-black"
              value={username}
            />
            <label htmlFor={username} className="cursor-pointer">
              {username}
            </label>
          </div>
        ))}
      </RadioGroup>

      <footer className="fixed bottom-0 flex h-80 w-full items-center justify-center border-t border-lightGray bg-white px-40">
        <button
          className={cn(
            commonStyles.cta,
            'h-56 w-full max-w-1000 justify-center rounded-12 text-24 font-bold',
          )}
          onClick={handleSubmit}
        >
          기록하기
        </button>
      </footer>

      <Toaster />
    </>
  );
};

export default RecordForm;
