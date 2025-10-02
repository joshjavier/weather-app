import { useEffect, useState } from 'react'
import { Autocomplete } from '@base-ui-components/react'
import IconLoading from '@/assets/icon-loading.svg?react'
import IconSearch from '@/assets/icon-search.svg?react'
import { fetchLocations, type Location } from '@/lib/location'

// import { queryClient } from '@/lib/query-client'

// const testResults: Partial<Location>[] = [
//   { id: 0, name: 'City', country: 'Country' },
//   { id: 1, name: 'City', country: 'Country' },
//   { id: 2, name: 'City', country: 'Country' },
//   { id: 3, name: 'City', country: 'Country' },
// ]

export function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<Location[]>([])
  const [error, setError] = useState<string | null>(null)
  // const onSearch = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const formData = new FormData(e.currentTarget)
  //   const searchTerm = formData.get('searchTerm')
  //
  //   async function getMatchingLocations() {
  //     try {
  //       if (searchTerm === null || typeof searchTerm !== 'string') {
  //         throw new Error('searchTerm must be a string')
  //       }
  //
  //       const data = await queryClient.fetchQuery({
  //         queryKey: ['locations', searchTerm],
  //         queryFn: () => fetchLocations(searchTerm),
  //       })
  //       console.log(data)
  //     } catch (err) {
  //       let message = 'Error fetching locations'
  //       if (err instanceof Error) {
  //         message += `: ${err.message}`
  //       }
  //       console.log(message)
  //     }
  //   }
  //
  //   getMatchingLocations()
  // }

  useEffect(() => {
    if (!searchValue) {
      setSearchResults([])
      setLoading(false)
      return
    }

    setLoading(true)

    let ignore = false

    async function searchLocations() {
      try {
        const results = await fetchLocations(searchValue)
        if (!ignore) {
          setSearchResults(results)
        }
      } catch (err) {
        console.log(err)
        if (!ignore) {
          setSearchResults([])
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    const timeoutId = setTimeout(searchLocations, 300)

    return () => {
      clearTimeout(timeoutId)
      ignore = true
    }
  }, [searchValue])

  const shouldRenderPopup = searchValue !== ''

  return (
    <Autocomplete.Root
      items={searchResults}
      value={searchValue}
      onValueChange={setSearchValue}
      itemToStringValue={(item) => `${item.name}, ${item.country}`}
      filter={null}
      autoHighlight
    >
      <div className="flex w-full gap-x-200 gap-y-150 max-sm:flex-col lg:max-w-[656px]">
        <div className="relative flex-1">
          <IconSearch
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-300 w-250 shrink-0 -translate-y-1/2"
          />
          <Autocomplete.Input
            className="rounded-12 text-preset-5 w-full bg-neutral-800 px-300 py-200 pl-[60px] font-medium outline-offset-3 placeholder:text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-800 focus-visible:outline-2"
            placeholder="Search for a place..."
          />

          {shouldRenderPopup && (
            <Autocomplete.Portal>
              <Autocomplete.Positioner className="outline-none" sideOffset={10}>
                <Autocomplete.Popup
                  className="rounded-12 max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-[var(--available-width)] overflow-y-auto overscroll-contain border border-neutral-700 bg-neutral-800 p-100"
                  aria-busy={isLoading || undefined}
                >
                  {isLoading && (
                    <Autocomplete.Status className="rounded-100 text-preset-7 flex items-center gap-125 px-100 py-125">
                      <IconLoading
                        aria-hidden="true"
                        className="h-200 w-200 shrink-0 animate-spin"
                      />
                      Search in progress
                    </Autocomplete.Status>
                  )}
                  <Autocomplete.List className="gap-050 grid">
                    {(location: Location) => (
                      <Autocomplete.Item
                        key={location.id}
                        value={location}
                        className="rounded-8 flex cursor-default items-center border border-transparent px-100 py-125 select-none data-[highlighted]:border-neutral-600 data-[highlighted]:bg-neutral-700"
                      >
                        {location.name}, {location.admin1}, {location.country}
                      </Autocomplete.Item>
                    )}
                  </Autocomplete.List>
                </Autocomplete.Popup>
              </Autocomplete.Positioner>
            </Autocomplete.Portal>
          )}
        </div>
        <Autocomplete.Trigger className="rounded-12 text-preset-5 shrink-0 cursor-pointer bg-blue-500 px-300 py-200 font-medium outline-offset-3 outline-blue-500 hover:bg-blue-700 focus-visible:outline-2">
          Search
        </Autocomplete.Trigger>
      </div>
    </Autocomplete.Root>
  )
}
