import api from '@/api';
import { useMutation } from '@tanstack/react-query';

export const useLogout = () => {
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      await api.post('/accounts/users/logout');
    },
  });

  return { mutateAsync };
};
