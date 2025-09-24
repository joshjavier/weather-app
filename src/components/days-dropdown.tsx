import { useState } from 'react'
import { Select } from '@base-ui-components/react'
import IconCheckmark from '@/assets/icon-checkmark.svg?react'
import IconDropdown from '@/assets/icon-dropdown.svg?react'

const days = [
  { label: 'Monday', value: 'monday' },
  { label: 'Tuesday', value: 'tuesday' },
  { label: 'Wednesday', value: 'wednesday' },
  { label: 'Thursday', value: 'thursday' },
  { label: 'Friday', value: 'friday' },
  { label: 'Saturday', value: 'saturday' },
  { label: 'Sunday', value: 'sunday' },
]

export function DaysDropdown() {
  const [day, setDay] = useState('tuesday')

  return (
    <Select.Root items={days} value={day} onValueChange={setDay}>
      <Select.Trigger className="rounded-8 flex cursor-pointer items-center gap-150 bg-neutral-600 px-200 py-100 outline-offset-3 select-none focus-visible:outline-2">
        <Select.Value className="text-preset-7/[normal]" />
        <Select.Icon>
          <IconDropdown aria-hidden="true" className="w-150 shrink-0" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner
          alignItemWithTrigger={false}
          align="end"
          sideOffset={10}
        >
          <Select.Popup className="rounded-12 gap-050 grid min-w-[214px] origin-(--transform-origin) border border-neutral-600 bg-neutral-800 p-100 shadow-[0_8px_16px_hsl(241,96,9,0.32)] transition-[opacity,scale] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
            {days.map(({ label, value }) => (
              <Select.Item
                key={label}
                value={value}
                className="rounded-8 flex cursor-pointer items-center justify-between gap-125 bg-neutral-700 px-100 py-125 outline-offset-1 select-none focus-visible:outline"
              >
                <Select.ItemText className="text-preset-7">
                  {label}
                </Select.ItemText>
                <Select.ItemIndicator>
                  <IconCheckmark aria-hidden="true" className="w-[14px]" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}
