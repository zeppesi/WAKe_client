import { useEffect, useRef } from 'react';

import { Content } from '@/types';
import api from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useContent = () => {
  const idRef = useRef<number | undefined>(undefined);
  const isFirstFetchDoneRef = useRef<boolean>(false);

  const { data, refetch } = useQuery<Content>({
    queryKey: ['content', idRef.current],
    queryFn: async () => {
      const params = idRef.current === undefined ? {} : { prev: idRef.current };
      const res = await api('/contents/random', {
        params,
      });
      return res.data;
    },
    enabled: !isFirstFetchDoneRef.current,
  });

  useEffect(() => {
    if (!data) return;
    isFirstFetchDoneRef.current = true;
    idRef.current = data.id;
  }, [data]);

  return { content: data, fetchNewContent: refetch };
};
