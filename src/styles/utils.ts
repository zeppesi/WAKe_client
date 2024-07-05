import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import { px0_1200_arr } from '../../tailwind.config';

const merge = extendTailwindMerge<'font-size'>({
  extend: {
    classGroups: {
      'font-size': [{ text: px0_1200_arr }],
    },
  },
});

export const cn = (...classes: ClassValue[]) => merge(clsx(classes));
