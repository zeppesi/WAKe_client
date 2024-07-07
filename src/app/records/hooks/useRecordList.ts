import { Record } from '@/types';
import { selectedDateAtom } from '@/states/records';
import { useAtomValue } from 'jotai';
import { useRecordListQuery } from './useRecordListQuery';

export const useRecordList = () => {
  const { data } = useRecordListQuery();
  const selectedDate = useAtomValue(selectedDateAtom);

  const records: Record[] =
    data?.find(item => item.date === selectedDate.format('YYYY-MM-DD'))
      ?.records ?? [];

  return { records };
};
