import 'dayjs/locale/ko';

import dayjs, { Dayjs } from 'dayjs';

import { USERNAMES } from '@/constants';
import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

dayjs.locale('ko');

export const getInitialDates = () =>
  Array.from({ length: 7 }, (_, i) => dayjs().add(i - 6, 'day'));

export const selectedDateAtom = atom<Dayjs>(dayjs());
export const datesAtom = atom<Dayjs[]>(getInitialDates());

export const usernameAtom = atomWithReset<(typeof USERNAMES)[number]>(
  USERNAMES[0],
);
