import { datesAtom, selectedDateAtom, usernameAtom } from '@/states/records';

import { Record } from '@/types';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import { useRecordListQuery } from './useRecordListQuery';

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
  const selectedDate = useAtomValue(selectedDateAtom);
  const dates = useAtomValue(datesAtom);
  const targetDate = dates[dates.length - 1];

  const username = useAtomValue(usernameAtom);

  const { data } = useRecordListQuery(
    username,
    targetDate.format('YYYY-MM-DD'),
  );

  const records: Record[] =
    data?.find(item => item.date === selectedDate.format('YYYY-MM-DD'))
      ?.records ?? [];

  return { records };
};
