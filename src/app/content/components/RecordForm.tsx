'use client';

import { INPUT_MAX_LENGTH, useRecordForm } from '../hooks/useRecordForm';

import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/styles/utils';
import commonStyles from '@/styles/common.module.css';
import { useContent } from '../hooks/useContent';
import Refresh from '@/assets/svgs/refresh.svg';

const RecordForm = () => {
  const { content, fetchNewContent } = useContent();

  const {
    input,
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

      <div className="my-20 flex w-full items-center justify-center rounded-12 px-12 py-8 text-28 font-extrabold text-red">
        {isTimerEnd ? '지금 떠오른 그 단어를 던져요' : remainingSeconds}
      </div>

      <div className="relative flex w-full flex-col gap-8">
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
        <span
          className={cn(
            'absolute bottom-8 right-12 self-end text-14',
            exceedsMaxLength && 'text-red',
          )}
        >
          {input.length}/{INPUT_MAX_LENGTH}
        </span>
      </div>

      <footer className="fixed bottom-0 flex w-full items-center justify-center gap-12 border-t border-lightGray bg-white px-40 py-16">
        <button onClick={handleNewContent}>
          <Refresh width={32} height={32} />
        </button>
        <button
          className={cn(
            commonStyles.cta,
            'h-48 w-200 justify-center rounded-12 text-18 font-semibold',
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
