import IconSearch from '@/assets/icon-search.svg?react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function Search() {
  return (
    <div className="gap-y-150 gap-x-200 mx-auto flex w-full max-sm:flex-col lg:max-w-[656px]">
      <div className="relative flex-1">
        <IconSearch
          aria-hidden="true"
          className="size-250 left-300 pointer-events-none absolute top-1/2 shrink-0 -translate-y-1/2"
        />
        <Input
          type="search"
          placeholder="Search for a place..."
          className="pl-[60px]"
        />
      </div>
      <Button>Search</Button>
    </div>
  )
}
