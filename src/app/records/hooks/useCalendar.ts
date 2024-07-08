import { datesAtom, getInitialDates, selectedDateAtom } from '@/states/records';
import dayjs, { Dayjs } from 'dayjs';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useRecordListQuery } from './useRecordListQuery';

export const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [dates, setDates] = useAtom(datesAtom);

  const { data } = useRecordListQuery();

  const resetSelectedDate = () => setSelectedDate(dayjs());
  const resetDates = () => setDates(getInitialDates());

  const handleClickPrev = () => {
    setDates(prev => prev.map(date => date.subtract(7, 'day')));
  };

  const handleClickNext = () => {
    setDates(prev => prev.map(date => date.add(7, 'day')));
  };

  const hasRecordForDate = (date: Dayjs) =>
    !!data?.find(item => item.date === date.format('YYYY-MM-DD'))?.records
      ?.length;

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
    hasRecordForDate,
  };
};
