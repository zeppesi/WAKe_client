import { useEffect, useRef } from 'react';

import { Content } from '@/types';
import api from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useContent = () => {
  const idRef = useRef<number | null>(null);

  const { data, refetch } = useQuery<Content>({
    queryKey: ['content'],
    queryFn: async () => {
      const res = await api('/contents/random/', {
        params: idRef.current === null ? {} : { prev: idRef.current },
      });
      return res.data;
    },
  });

  useEffect(() => {
    if (!data) return;
    idRef.current = data.id;
  }, [data]);

  return { content: data, fetchNewContent: refetch };
};
