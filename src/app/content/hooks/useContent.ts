import { useEffect, useState } from 'react';

import { Content } from '@/types';
import api from '@/api';
import { useQuery } from '@tanstack/react-query';

export const useContent = (onSuccess: () => void) => {
  const [prevId, setPrevId] = useState<number | null>(null);

  const { data } = useQuery<Content>({
    queryKey: ['content', prevId],
    queryFn: async () => {
      const res = await api('/contents/random/', {
        params: prevId === null ? {} : { prev: prevId },
      });
      return res.data;
    },
  });

  const fetchNewContent = () => {
    if (!data) return;
    setPrevId(data.id);
  };

  useEffect(() => {
    if (!data || prevId === null) return;
    onSuccess();
  }, [data]);

  return { content: data, fetchNewContent };
};
