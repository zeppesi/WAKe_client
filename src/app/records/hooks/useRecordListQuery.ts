import { Record } from '@/types';
import { USERNAMES } from '@/constants';
import api from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useRecordListQuery = (
  username: (typeof USERNAMES)[number],
  targetDate: string,
) => {
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
