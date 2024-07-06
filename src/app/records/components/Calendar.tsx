'use client';

import 'dayjs/locale/ko';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radioGroup';

import Left from '@/assets/svgs/left.svg';
import Right from '@/assets/svgs/right.svg';
import { USERNAMES } from '@/constants';
import { cn } from '@/styles/utils';
import dayjs from 'dayjs';
import questionStyles from '../../question/page.module.css';
import styles from '../page.module.css';
import { useAtom } from 'jotai';
import { usernameAtom } from '@/states/records';

dayjs.locale('ko');

const Calendar = () => {
  const [username, setUsername] = useAtom(usernameAtom);

  const dates = Array.from({ length: 7 }, (_, i) => dayjs().add(i - 6, 'day'));

  const today = dayjs().format('M월 D일 (ddd)');

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
            <div key={username} className={questionStyles.username}>
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
        <button>
          <Left width={36} height={36} />
        </button>

        {dates.map(date => (
          <div
            key={date.valueOf()}
            className={cn(
              styles.date,
              'relative flex w-48 cursor-pointer flex-col items-center gap-8 py-4 text-14',
            )}
          >
            <span>{date.format('ddd')}</span>
            <span>{date.get('date')}</span>
          </div>
        ))}

        <button>
          <Right width={36} height={36} />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
