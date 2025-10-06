import { useRef, useState, type KeyboardEvent } from 'react'
import IconLoading from '@/assets/icon-loading.svg?react'
import IconSearch from '@/assets/icon-search.svg?react'
import {
  createDebouncedLocationFetcher,
  formatLocationDisplay,
  type Location,
} from '@/lib/geocoding'
import { Command } from 'cmdk'
import { Button } from './ui/button'

export function Search() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<Location[]>([])
  const [search, setSearch] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const debouncedFetchLocations = createDebouncedLocationFetcher()

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Escape') {
      inputRef.current?.blur()
    }

    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  async function handleSearch() {
    if (!search) {
      setItems([])
      setLoading(false)
      return
    }

    setOpen(true)
    setLoading(true)
    const results = await debouncedFetchLocations(search)
    setItems(results)
    setLoading(false)
    if (results.length === 0) {
      setOpen(false)
    }
  }

  function handleSelect(currentValue: string) {
    inputRef.current?.blur()
    console.log(currentValue)
    // Set lat and lon to selected location's values
  }

  return (
    <Command shouldFilter={false}>
      <div className="gap-y-150 gap-x-200 mx-auto flex w-full max-sm:flex-col lg:max-w-[656px]">
        <div className="flex flex-1 flex-col">
          <div className="relative">
            <IconSearch
              aria-hidden="true"
              className="size-250 left-300 pointer-events-none absolute top-1/2 shrink-0 -translate-y-1/2"
            />
            <Command.Input
              ref={inputRef}
              value={search}
              onValueChange={setSearch}
              onKeyDown={handleKeyDown}
              onFocus={() => setOpen(loading || items.length > 0)}
              onBlur={() => setOpen(false)}
              placeholder="Search for a place..."
              className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground rounded-12 bg-input px-300 py-200 text-preset-5 outline-offset-3 w-full min-w-0 pl-[60px] font-medium transition-[color,box-shadow] focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="relative">
            {open ? (
              <Command.List className="p-100 rounded-12 bg-card border-muted [&_[cmdk-list-sizer]]:gap-050 absolute top-[14px] z-50 w-full [&_[cmdk-list-sizer]]:flex [&_[cmdk-list-sizer]]:flex-col">
                {loading ? (
                  <Command.Loading>
                    <div className="gap-125 px-100 py-125 rounded-8 flex items-center">
                      <IconLoading
                        aria-hidden="true"
                        className="size-200 shrink-0 animate-spin"
                      />
                      <span className="text-preset-7">Search in progress</span>
                    </div>
                  </Command.Loading>
                ) : (
                  <>
                    {items.map((item) => {
                      const [first, rest] =
                        formatLocationDisplay(item).split(/, (.+)/)
                      return (
                        <Command.Item
                          key={item.id}
                          value={`${item.latitude},${item.longitude}`}
                          onSelect={handleSelect}
                          onMouseDown={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                          }}
                          className="px-100 py-125 rounded-8 text-preset-7 data-[selected=true]:bg-muted not-data-[selected=true]:border-transparent gap-125 cursor-default select-none border data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
                        >
                          <span className="text-preset-7">{first}</span>{' '}
                          <span className="text-preset-8 text-muted-foreground font-light opacity-80">
                            {rest}
                          </span>
                        </Command.Item>
                      )
                    })}
                  </>
                )}
              </Command.List>
            ) : null}
          </div>
        </div>

        <Button onClick={handleSearch}>Search</Button>
      </div>
    </Command>
  )
}
