import Logo from '@/assets/logo.svg?react'
import { UnitsDropdown } from './units-dropdown'

export function Header() {
  return (
    <header className="flex justify-between pt-200 sm:pt-300 lg:pt-600">
      <a href="/">
        <Logo className="h-[28px] sm:h-500" aria-hidden="true" />
        <span className="sr-only">Weather Now</span>
      </a>
      <UnitsDropdown />
    </header>
  )
}
