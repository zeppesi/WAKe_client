import { USERNAMES } from '@/constants';
import api from '@/api';
import { useContent } from './useContent';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useTimer } from './useTimer';
import { useToast } from '@/components/ui/use-toast';

export const INPUT_MAX_LENGTH = 100;

// TODO: refactor
export const useRecordForm = () => {
  const [input, setInput] = useState<string>('');
  const [username, setUsername] = useState<(typeof USERNAMES)[number]>(
    USERNAMES[0],
  );

  const { content, fetchNewContent } = useContent();

  const {
    setIsActive,
    remainingSeconds,
    resetRemainingSeconds,
    scheduleSetInactive,
    isTimerEnd,
  } = useTimer();

  const { toast } = useToast();

  const { mutateAsync: createRecord } = useMutation({
    mutationFn: async () => {
      try {
        await api.post('/records/create', {
          content_id: content?.id ?? -1,
          username,
          text: input,
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

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

  const resetForm = () => {
    resetRemainingSeconds();
    setIsActive(false);
    setInput('');
  };

  const getNewContent = async () => {
    await fetchNewContent();
    resetForm();
  };

  const handleSubmit = async () => {
    if (!input.length) {
      toast({
        description: '내용을 입력해 주세요',
      });
    } else if (input.length > INPUT_MAX_LENGTH) {
      toast({
        description: '최대 100자를 입력해 주세요',
      });
    } else {
      await createRecord();
      toast({
        description: '기록 완료!',
      });
      await getNewContent();
    }
  };

  return {
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
  };
};
