import { USERNAMES } from '@/constants';
import { useState } from 'react';
import { useTimer } from './useTimer';

export const INPUT_MAX_LENGTH = 100;

export const useRecordForm = () => {
  const { setIsActive, remainingSeconds, scheduleSetInactive, isTimerEnd } =
    useTimer();

  const [input, setInput] = useState<string>('');
  const [username, setUsername] = useState<(typeof USERNAMES)[number]>(
    USERNAMES[0],
  );

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

  return {
    remainingSeconds,
    isTimerEnd,
    input,
    handleInputFocus,
    handleInputChange,
    handleInputBlur,
    username,
    setUsername,
  };
};
