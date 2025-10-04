import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-offset-3 focus-visible:outline-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-blue-700 outline-blue-500',
        trigger: 'bg-neutral-800 hover:bg-neutral-700',
        // destructive:
        //   'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        // outline:
        //   'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        // secondary:
        //   'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // ghost:
        //   'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        // link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'gap-200 px-300 py-200 rounded-12 text-preset-5',
        sm: 'gap-125 px-200 py-150 rounded-8 text-preset-7',
        // lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        // icon: 'size-9',
        // 'icon-sm': 'size-8',
        // 'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
