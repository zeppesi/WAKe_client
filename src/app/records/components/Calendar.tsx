'use client';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radioGroup';

import Left from '@/assets/svgs/left.svg';
import Right from '@/assets/svgs/right.svg';
import { USERNAMES } from '@/constants';
import { cn } from '@/styles/utils';
import contentStyles from '../../content/page.module.css';
import styles from '../page.module.css';
import { useAtom } from 'jotai';
import { useCalendar } from '../hooks/useCalendar';
import { useEffect } from 'react';
import { useResetAtom } from 'jotai/utils';
import { usernameAtom } from '@/states/records';

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

  const [username, setUsername] = useAtom(usernameAtom);
  const resetUsername = useResetAtom(usernameAtom);

  useEffect(() => {
    return resetUsername;
  }, []);

  return (
    <div className="flex flex-col gap-8 bg-gray pb-12">
      <div className="flex items-center gap-20 px-16">
        <span className="font-bold">{today}</span>
        <RadioGroup
          className="flex items-center gap-16"
          defaultValue={USERNAMES[0]}
          value={username}
          onValueChange={username =>
            setUsername(username as (typeof USERNAMES)[number])
          }
        >
          {USERNAMES.map(username => (
            <div key={username} className={contentStyles.username}>
              <RadioGroupItem
                id={username}
                className="size-16 border-black text-black"
                value={username}
              />
              <label htmlFor={username} className="cursor-pointer">
                {username}
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex w-full items-center justify-between px-4">
        <button onClick={handleClickPrev}>
          <Left width={36} height={36} />
        </button>

        {dates.map(date => (
          <div
            key={date.valueOf()}
            className={cn(
              hasRecordForDate(date) && styles.dateWithRecord,
              'relative flex w-48 cursor-pointer flex-col items-center gap-8 py-4 text-14',
              date.isSame(selectedDate) && 'font-bold',
            )}
            onClick={() => setSelectedDate(date)}
          >
            <span>{date.format('ddd')}</span>
            <span>{date.get('date')}</span>
          </div>
        ))}

        <button onClick={handleClickNext}>
          <Right width={36} height={36} />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
