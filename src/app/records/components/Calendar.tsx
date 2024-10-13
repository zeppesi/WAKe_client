'use client';

import Left from '@/assets/svgs/left.svg';
import Right from '@/assets/svgs/right.svg';
import { cn } from '@/styles/utils';
import styles from '../page.module.css';
import { useCalendar } from '../hooks/useCalendar';

const Calendar = () => {
  const {
    selectedDate,
    setSelectedDate,
    dates,
    handleClickPrev,
    handleClickNext,
    hasRecordForDate,
  } = useCalendar();

  const today = selectedDate.format('M월 D일 (ddd)');

  return (
    <div className="flex flex-col gap-8 bg-[#ECECEC] py-12">
      <div className="flex items-center gap-20 px-16">
        <span className="font-bold">{today}</span>
      </div>

      <div className="flex w-full items-center justify-between px-4">
        <button onClick={handleClickPrev}>
          <Left width={36} height={36} className="fill-gray" />
        </button>

        {dates.map(date => (
          <div
            key={date.valueOf()}
            className={cn(
              'relative flex w-40 cursor-pointer flex-col items-center gap-16 rounded-100 bg-white py-8 text-14 font-semibold',
              hasRecordForDate(date) && styles.dateWithRecord,
              date.isSame(selectedDate) && styles.selectedDate,
            )}
            onClick={() => setSelectedDate(date)}
          >
            <span>{date.format('ddd')}</span>
            <span>{date.get('date')}</span>
          </div>
        ))}

        <button onClick={handleClickNext}>
          <Right width={36} height={36} className="fill-gray" />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
