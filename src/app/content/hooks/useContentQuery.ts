import { useEffect, useRef } from 'react';

import { Content } from '@/types';
import api from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useContentQuery = () => {
  const contentIdRef = useRef<number | undefined>(undefined);
  const initialFetchDoneRef = useRef<boolean>(false);

  const { data, refetch } = useQuery<Content>({
    queryKey: ['content', contentIdRef.current],
    queryFn: async () => {
      const res = await api('/contents/random', {
        params: { prev: contentIdRef.current },
      });
      return res.data;
    },
    enabled: !initialFetchDoneRef.current,
  });

  useEffect(() => {
    if (!data) return;
    initialFetchDoneRef.current = true;
    contentIdRef.current = data.id;
  }, [data]);

  return { content: data, fetchNewContent: refetch };
};
