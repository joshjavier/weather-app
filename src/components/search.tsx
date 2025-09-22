import { Input } from '@base-ui-components/react'
import IconSearch from '@/assets/icon-search.svg?react'

export function Search() {
  return (
    <div className="flex w-full gap-x-200 gap-y-150 max-sm:flex-col lg:max-w-[656px]">
      <div className="relative flex-1">
        <IconSearch
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-300 w-250 shrink-0 -translate-y-1/2"
        />
        <Input
          className="rounded-12 text-preset-5 w-full bg-neutral-800 px-300 py-200 pl-[60px] font-medium outline-offset-3 placeholder:text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-800 focus-visible:outline-2"
          placeholder="Search for a place..."
        />
      </div>
      <button className="rounded-12 text-preset-5 shrink-0 bg-blue-500 px-300 py-200 font-medium outline-offset-3 outline-blue-500 hover:bg-blue-700 focus-visible:outline-2">
        Search
      </button>
    </div>
  )
}
