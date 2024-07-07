import { datesAtom, getInitialDates, selectedDateAtom } from '@/states/records';

import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export const useCalendar = () => {
  // TODO: useRecordsQuery

  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [dates, setDates] = useAtom(datesAtom);

  const resetSelectedDate = () => setSelectedDate(dayjs());
  const resetDates = () => setDates(getInitialDates());

  const handleClickPrev = () => {
    setDates(prev => prev.map(date => date.subtract(7, 'day')));
  };

  const handleClickNext = () => {
    setDates(prev => prev.map(date => date.add(7, 'day')));
  };

  // TODO: hasRecord

  useEffect(() => {
    setSelectedDate(dates[dates.length - 1]);
  }, [dates]);

  useEffect(() => {
    return () => {
      resetSelectedDate();
      resetDates();
    };
  }, []);

  return {
    selectedDate,
    setSelectedDate,
    dates,
    handleClickPrev,
    handleClickNext,
  };
};
