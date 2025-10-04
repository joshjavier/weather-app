import type { ComponentProps } from 'react'
import IconDropdown from '@/assets/icon-dropdown.svg?react'
import IconUnits from '@/assets/icon-units.svg?react'
import Logo from '@/assets/logo.svg?react'
import { Button } from './ui/button'

export function Header({ className, ...props }: ComponentProps<'header'>) {
  return (
    <header className={className} {...props}>
      <div className="px-200 sm:px-300 max-w-(--wrapper) mx-auto box-content">
        <div className="flex items-center justify-between">
          <Logo aria-hidden="true" className="w-auto max-sm:h-[28px]" />
          <Button
            variant="trigger"
            size="sm"
            className="max-sm:text-preset-8 max-sm:gap-075 max-sm:px-125 max-sm:py-100 max-sm:rounded-6"
          >
            <IconUnits aria-hidden="true" className="max-sm:size-[14px]" />
            <span>Units</span>
            <IconDropdown
              aria-hidden="true"
              className="size-[13px] max-sm:size-[10px]"
            />
          </Button>
        </div>
      </div>
    </header>
  )
}
