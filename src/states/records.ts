import 'dayjs/locale/ko';

import dayjs, { Dayjs } from 'dayjs';

import { atom } from 'jotai';

dayjs.locale('ko');

export const getInitialDates = () =>
  Array.from({ length: 7 }, (_, i) => dayjs().add(i - 6, 'day'));

export const selectedDateAtom = atom<Dayjs>(dayjs());
export const datesAtom = atom<Dayjs[]>(getInitialDates());
