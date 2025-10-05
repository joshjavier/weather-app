import type { ComponentProps } from 'react'
import Logo from '@/assets/logo.svg?react'
import { UnitsDropdown } from './units-dropdown'

export function Header({ className, ...props }: ComponentProps<'header'>) {
  return (
    <header className={className} {...props}>
      <div className="px-200 sm:px-300 max-w-(--wrapper) mx-auto box-content">
        <div className="flex items-center justify-between">
          <Logo aria-hidden="true" className="w-auto max-sm:h-[28px]" />
          <UnitsDropdown />
        </div>
      </div>
    </header>
  )
}
