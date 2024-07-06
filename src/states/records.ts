import { USERNAMES } from '@/constants';
import { atom } from 'jotai';

export const usernameAtom = atom<(typeof USERNAMES)[number]>(USERNAMES[0]);
