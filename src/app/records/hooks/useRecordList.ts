import { usernameAtom, visibleDatesAtom } from '@/states/records';

import { Record } from '@/types';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';

const MOCK_RECORDS = [
  {
    id: 1,
    text: '안녕하세요',
    createdAt: dayjs().toISOString(),
    updatedAt: dayjs().toISOString(),
    content: {
      id: 1,
      text: '안녕하세요',
    },
  },
  {
    id: 2,
    text: '안녕하세요',
    createdAt: dayjs().subtract(1, 'day').toISOString(),
    updatedAt: dayjs().subtract(1, 'day').toISOString(),
    content: {
      id: 2,
      text: '안녕하세요',
    },
  },
  {
    id: 3,
    text: '안녕하세요',
    createdAt: dayjs().subtract(2, 'day').toISOString(),
    updatedAt: dayjs().subtract(2, 'day').toISOString(),
    content: {
      id: 3,
      text: '안녕하세요',
    },
  },
];

export const useRecordList = () => {
  const records: Record[] = MOCK_RECORDS;

  const visibleDates = useAtomValue(visibleDatesAtom);
  const targetDate = visibleDates[visibleDates.length - 1];

  const username = useAtomValue(usernameAtom);

  useEffect(() => {}, [targetDate, username]);

  return { records };
};