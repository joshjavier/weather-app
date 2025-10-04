import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge({
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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string from "YYYY-MM-DD" format to "Day, Mon D, YYYY" format
 * @param dateString - Date string in "YYYY-MM-DD" format (e.g., "2025-08-05")
 * @returns Formatted date string (e.g., "Tuesday, Aug 5, 2025")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`)
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return date.toLocaleDateString('en-US', options)
}
