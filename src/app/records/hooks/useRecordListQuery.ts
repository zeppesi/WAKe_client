import { datesAtom, usernameAtom } from '@/states/records';

import { Record } from '@/types';
import api from '@/api';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';

export const useRecordListQuery = () => {
  const username = useAtomValue(usernameAtom);
  const dates = useAtomValue(datesAtom);
  const targetDate = dates[dates.length - 1].format('YYYY-MM-DD');

  const { data } = useQuery<
    {
      date: string;
      records: Record[];
    }[]
  >({
    queryKey: ['records', username, targetDate],
    queryFn: async () => {
      const res = await api('/records/list', {
        params: { username, targetDate },
      });
      return res.data;
    },
  });

  return { data };
};
