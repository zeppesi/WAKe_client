'use client';

import api from '@/api';
import { PropsWithChildren, useEffect } from 'react';

const getCookieValue = (key: string) =>
  document.cookie
    .split('; ')
    .find(row => row.startsWith(`${key}=`))
    ?.split('=')[1];

export const AuthManager = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const token = getCookieValue(process.env.NEXT_PUBLIC_JWT_TOKEN_KEY ?? '');
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }, []);

  return children;
};
