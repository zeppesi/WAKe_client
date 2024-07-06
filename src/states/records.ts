import 'dayjs/locale/ko';

import dayjs, { Dayjs } from 'dayjs';

import { USERNAMES } from '@/constants';
import { atomWithReset } from 'jotai/utils';

dayjs.locale('ko');

export const selectedDateAtom = atomWithReset<Dayjs>(dayjs());
export const visibleDatesAtom = atomWithReset<Dayjs[]>(
  Array.from({ length: 7 }, (_, i) => dayjs().add(i - 6, 'day')),
);

export const usernameAtom = atomWithReset<(typeof USERNAMES)[number]>(
  USERNAMES[0],
);
