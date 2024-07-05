import { useEffect, useRef, useState } from 'react';

const INITIAL_REMAINING_SECONDS = 10;

export const useQuestionForm = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(
    INITIAL_REMAINING_SECONDS,
  );
  const [input, setInput] = useState<string>('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const isTimerEnd = remainingSeconds <= 0;

  const decreaseRemainingSeconds = () => setRemainingSeconds(prev => prev - 1);

  const resetRemainingSeconds = () =>
    setRemainingSeconds(INITIAL_REMAINING_SECONDS);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const clearDebounce = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
  };

  const scheduleSetInactive = () => {
    clearDebounce();
    debounceRef.current = setTimeout(() => {
      decreaseRemainingSeconds();
      setIsActive(false);
    }, 1000);
  };

  const handleInputFocus = () => {
    setIsActive(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    scheduleSetInactive();
  };

  const handleInputBlur = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (isActive) {
      clearTimer();
      resetRemainingSeconds();
      scheduleSetInactive();
    } else {
      clearDebounce();
      timerRef.current = setInterval(decreaseRemainingSeconds, 1000);
    }
  }, [isActive]);

  useEffect(() => {
    if (isTimerEnd) {
      clearTimer();
    }
  }, [isTimerEnd]);

  useEffect(() => {
    return () => {
      clearTimer();
      clearDebounce();
    };
  }, []);

  return {
    remainingSeconds,
    input,
    isTimerEnd,
    handleInputFocus,
    handleInputChange,
    handleInputBlur,
  };
};
