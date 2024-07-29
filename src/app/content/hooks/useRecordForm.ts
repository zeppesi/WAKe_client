import { USERNAMES } from '@/constants';
import api from '@/api';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useTimer } from './useTimer';
import { useToast } from '@/components/ui/use-toast';

export const INPUT_MAX_LENGTH = 100;

export const useRecordForm = () => {
  const [input, setInput] = useState<string>('');
  const [username, setUsername] = useState<(typeof USERNAMES)[number]>(
    USERNAMES[0],
  );

  const { mutateAsync: createRecord } = useMutation({
    mutationFn: async (contentId: number) => {
      await api.post('/records/create/', {
        content_id: contentId,
        username,
        text: input,
      });
    },
  });

  const {
    setIsActive,
    remainingSeconds,
    isTimerEnd,
    resetRemainingSeconds,
    scheduleSetInactive,
  } = useTimer();

  const { toast } = useToast();

  const exceedsMaxLength = input.length > INPUT_MAX_LENGTH;

  const handleInputFocus = () => {
    setIsActive(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setIsActive(true);
    scheduleSetInactive();
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  const submitForm = async (
    contentId: number,
    onSuccess: () => Promise<void>,
  ) => {
    if (!input.length) {
      document.getElementById('textarea')?.focus();
      return toast({
        description: '내용을 입력해 주세요',
      });
    }

    if (exceedsMaxLength) {
      document.getElementById('textarea')?.focus();
      return toast({
        description: '최대 100자를 입력해 주세요',
      });
    }

    await createRecord(contentId);
    toast({
      description: '기록 완료!',
    });
    await onSuccess();
  };

  const resetForm = () => {
    setInput('');
    resetRemainingSeconds();
    setIsActive(false);
  };

  return {
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
  };
};
