'use client';

import { useLogout } from '../hooks/useLogout';
import { logout } from '../actions/logout';
import { useRouter } from 'next/navigation';

export const LogoutButton = () => {
  const router = useRouter();
  const { mutateAsync } = useLogout();

  const handleClick = async () => {
    await mutateAsync();
    await logout();
    router.refresh();
  };

  return <button onClick={handleClick}>Logout</button>;
};
