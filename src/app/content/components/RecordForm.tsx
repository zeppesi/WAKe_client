'use client';

import { INPUT_MAX_LENGTH, useRecordForm } from '../hooks/useRecordForm';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radioGroup';

import { Toaster } from '@/components/ui/toaster';
import { USERNAMES } from '@/constants';
import { cn } from '@/styles/utils';
import commonStyles from '@/styles/common.module.css';
import styles from '../page.module.css';
import { useContent } from '../hooks/useContent';

const RecordForm = () => {
  const { content, fetchNewContent } = useContent();

  const {
    input,
    username,
    setUsername,
    remainingSeconds,
    isTimerEnd,
    exceedsMaxLength,
    handleInputFocus,
    handleInputChange,
    handleInputBlur,
    submitForm,
    resetForm,
  } = useRecordForm();

  const handleNewContent = async () => {
    await fetchNewContent();
    resetForm();
  };

  const handleSubmit = async () => {
    if (!content) return;
    await submitForm(content.id, handleNewContent);
  };

  // TODO: refactor
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
        onClick={handleNewContent}
      >
        다른 질문 받기
      </button>

      <div className="my-20 flex w-full items-center justify-center rounded-12 bg-lightGray px-12 py-8 text-28 font-extrabold text-red">
        {isTimerEnd ? '지금 떠오른 그 단어를 던져요' : remainingSeconds}
      </div>

      <div className="flex w-full flex-col gap-8">
        <span
          className={cn('self-end text-14', exceedsMaxLength && 'text-red')}
        >
          {input.length}/{INPUT_MAX_LENGTH}
        </span>
        <textarea
          id="textarea"
          className={cn(
            'h-160 w-full resize-none rounded-20 border px-16 py-12 caret-primary focus:border-primary',
            exceedsMaxLength && 'caret-red focus:border-red focus:outline-red',
          )}
          value={input}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      </div>

      <footer className="fixed bottom-0 flex h-120 w-full flex-col items-center justify-center gap-12 border-t border-lightGray bg-white px-40">
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
