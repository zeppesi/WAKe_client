import { USERNAMES } from '@/constants';
import { useQuestion } from './useQuestion';
import { useState } from 'react';
import { useTimer } from './useTimer';
import { useToast } from '@/components/ui/use-toast';

export const INPUT_MAX_LENGTH = 100;

// TODO: refactor
export const useRecordForm = () => {
  const { question, fetchNewQuestion } = useQuestion();

  const {
    setIsActive,
    remainingSeconds,
    resetRemainingSeconds,
    scheduleSetInactive,
    isTimerEnd,
  } = useTimer();

  const { toast } = useToast();

  const [input, setInput] = useState<string>('');
  const [username, setUsername] = useState<(typeof USERNAMES)[number]>(
    USERNAMES[0],
  );

  const resetForm = () => {
    resetRemainingSeconds();
    setIsActive(false);
    setInput('');
  };

  const getNewQuestion = () => {
    fetchNewQuestion();
    resetForm();
  };

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

  const handleSubmit = () => {
    if (input.length > INPUT_MAX_LENGTH) {
      return toast({
        description: '최대 100자를 입력해 주세요',
      });
    }

    console.log(username, input);
    toast({
      description: '기록 완료!',
    });
    getNewQuestion();
  };

  return {
    question,
    getNewQuestion,
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
