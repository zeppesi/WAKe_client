import { datesAtom } from '@/states/records';

import { Record } from '@/types';
import api from '@/api';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';

export const useRecordListQuery = () => {
  const dates = useAtomValue(datesAtom);
  const targetDate = dates[dates.length - 1].format('YYYY-MM-DD');

  const { data } = useQuery<
    {
      date: string;
      records: Record[];
    }[]
  >({
    queryKey: ['records', targetDate],
    queryFn: async () => {
      const res = await api('/records/', {
        params: { target_date: targetDate },
      });
      return res.data;
    },
  });

  return { data };
};
