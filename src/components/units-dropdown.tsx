import { Menu } from '@base-ui-components/react'
import IconDropdown from '@/assets/icon-dropdown.svg?react'
import IconUnits from '@/assets/icon-units.svg?react'

export function UnitsDropdown() {
  return (
    <Menu.Root>
      <Menu.Trigger className="rounded-6 sm:rounded-8 text-preset-8 sm:text-preset-7 gap-075 flex items-center bg-neutral-800 px-125 py-100 sm:gap-125 sm:px-200 sm:py-150">
        <IconUnits aria-hidden="true" className="w-[14px] shrink-0 sm:w-200" />
        <span>Units</span>
        <IconDropdown
          aria-hidden="true"
          className="w-[9px] shrink-0 sm:w-150"
        />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner>
          <Menu.Popup>
            <Menu.Item>Switch to Imperial</Menu.Item>
            <Menu.Item>Celsius (&deg;C)</Menu.Item>
            <Menu.Item>Fahrenheit (&deg;F)</Menu.Item>
            <Menu.Separator />
            <Menu.Item>km/h</Menu.Item>
            <Menu.Item>mph</Menu.Item>
            <Menu.Separator />
            <Menu.Item>Millimeters (mm)</Menu.Item>
            <Menu.Item>Inches (in)</Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
