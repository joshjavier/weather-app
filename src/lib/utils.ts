import { extendTailwindMerge } from 'tailwind-merge'

export const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        'preset-1',
        'preset-2',
        'preset-3',
        'preset-4',
        'preset-5',
        'preset-6',
        'preset-7',
        'preset-8',
      ],
    },
  },
})
