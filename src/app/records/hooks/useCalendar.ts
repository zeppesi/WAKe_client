import { selectedDateAtom, visibleDatesAtom } from '@/states/records';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useResetAtom } from 'jotai/utils';

export const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [visibleDates, setVisibleDates] = useAtom(visibleDatesAtom);

  const resetSelectedDate = useResetAtom(selectedDateAtom);
  const resetVisibleDates = useResetAtom(visibleDatesAtom);

  const handleClickPrev = () => {
    setVisibleDates(prev => prev.map(date => date.subtract(7, 'day')));
  };

  const handleClickNext = () => {
    setVisibleDates(prev => prev.map(date => date.add(7, 'day')));
  };

  useEffect(() => {
    setSelectedDate(visibleDates[visibleDates.length - 1]);
  }, [visibleDates]);

  useEffect(() => {
    return () => {
      resetSelectedDate();
      resetVisibleDates();
    };
  }, []);

  return {
    selectedDate,
    setSelectedDate,
    visibleDates,
    handleClickPrev,
    handleClickNext,
  };
};
