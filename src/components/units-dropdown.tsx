import { useEffect, useState } from 'react'
import { Menu } from '@base-ui-components/react'
import IconCheckmark from '@/assets/icon-checkmark.svg?react'
import IconDropdown from '@/assets/icon-dropdown.svg?react'
import IconUnits from '@/assets/icon-units.svg?react'

type System = 'metric' | 'imperial'
type Temperature = 'c' | 'f'
type WindSpeed = 'km/h' | 'mph'
type Precipitation = 'mm' | 'in'

function CheckIcon() {
  return (
    <Menu.RadioItemIndicator className="shrink-0 transition-[scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
      <IconCheckmark aria-hidden="true" className="w-[14px]" />
    </Menu.RadioItemIndicator>
  )
}

function MenuSeparator() {
  return <Menu.Separator className="h-[1px] bg-neutral-600" />
}

export function UnitsDropdown() {
  const [system, setSystem] = useState<System>('metric')
  const [temperature, setTemperature] = useState<Temperature>('c')
  const [windSpeed, setWindSpeed] = useState<WindSpeed>('km/h')
  const [precipitation, setPrecipitation] = useState<Precipitation>('mm')

  // Set each unit to the selected system of measurement
  useEffect(() => {
    switch (system) {
      case 'metric':
        setTemperature('c')
        setWindSpeed('km/h')
        setPrecipitation('mm')
        break
      case 'imperial':
        setTemperature('f')
        setWindSpeed('mph')
        setPrecipitation('in')
        break
      default:
        throw new Error('invalid system')
    }
  }, [system])

  // Conversely, set system to metric if all units are metric and vice versa
  useEffect(() => {
    if (temperature === 'c' && windSpeed === 'km/h' && precipitation === 'mm') {
      setSystem('metric')
      return
    }

    if (temperature === 'f' && windSpeed === 'mph' && precipitation === 'in') {
      setSystem('imperial')
      return
    }
  }, [temperature, windSpeed, precipitation])

  const toggleSystem = () => {
    setSystem((s) => (s === 'metric' ? 'imperial' : 'metric'))
  }

  return (
    <Menu.Root>
      <Menu.Trigger className="rounded-6 sm:rounded-8 text-preset-8 sm:text-preset-7 gap-075 flex cursor-pointer items-center bg-neutral-800 px-125 py-100 outline-offset-3 hover:bg-neutral-700 focus-visible:outline-2 data-[popup-open]:bg-neutral-700 sm:gap-125 sm:px-200 sm:py-150">
        <IconUnits aria-hidden="true" className="w-[14px] shrink-0 sm:w-200" />
        <span>Units</span>
        <IconDropdown
          aria-hidden="true"
          className="w-[9px] shrink-0 sm:w-150"
        />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner align="end" sideOffset={10}>
          <Menu.Popup className="py-075 rounded-12 gap-050 grid min-w-[214px] origin-(--transform-origin) border border-neutral-600 bg-neutral-800 px-100 shadow-[0_8px_16px_hsl(241,96,9,0.32)] transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
            <Menu.Item
              onClick={toggleSystem}
              closeOnClick={false}
              className="rounded-8 flex cursor-pointer items-center justify-between gap-125 bg-neutral-700 px-100 py-125 outline-offset-1 select-none focus-visible:outline"
            >
              Switch to {system === 'metric' ? 'Imperial' : 'Metric'}
            </Menu.Item>

            <Menu.Group>
              <Menu.GroupLabel className="text-preset-8 mt-075 mx-100 mb-100 text-neutral-300 select-none">
                Temperature
              </Menu.GroupLabel>
              <Menu.RadioGroup
                value={temperature}
                onValueChange={setTemperature}
                className="gap-050 grid"
              >
                <Menu.RadioItem
                  value="c"
                  className="rounded-8 flex cursor-pointer items-center justify-between gap-125 bg-neutral-700 px-100 py-125 outline-offset-1 select-none focus-visible:outline"
                >
                  <span>Celsius (&deg;C)</span>
                  <CheckIcon />
                </Menu.RadioItem>
                <Menu.RadioItem
                  value="f"
                  className="rounded-8 flex cursor-pointer items-center justify-between gap-125 bg-neutral-700 px-100 py-125 outline-offset-1 select-none focus-visible:outline"
                >
                  <span>Fahrenheit (&deg;F)</span>
                  <CheckIcon />
                </Menu.RadioItem>
              </Menu.RadioGroup>
            </Menu.Group>

            <MenuSeparator />

            <Menu.Group>
              <Menu.GroupLabel className="text-preset-8 mt-075 mx-100 mb-100 text-neutral-300 select-none">
                Wind Speed
              </Menu.GroupLabel>
              <Menu.RadioGroup
                value={windSpeed}
                onValueChange={setWindSpeed}
                className="gap-050 grid"
              >
                <Menu.RadioItem
                  value="km/h"
                  className="rounded-8 flex cursor-pointer items-center justify-between gap-125 bg-neutral-700 px-100 py-125 outline-offset-1 select-none focus-visible:outline"
                >
                  <span>km/h</span>
                  <CheckIcon />
                </Menu.RadioItem>
                <Menu.RadioItem
                  value="mph"
                  className="rounded-8 flex cursor-pointer items-center justify-between gap-125 bg-neutral-700 px-100 py-125 outline-offset-1 select-none focus-visible:outline"
                >
                  <span>mph</span>
                  <CheckIcon />
                </Menu.RadioItem>
              </Menu.RadioGroup>
            </Menu.Group>

            <MenuSeparator />

            <Menu.Group>
              <Menu.GroupLabel className="text-preset-8 mt-075 mx-100 mb-100 text-neutral-300 select-none">
                Precipitation
              </Menu.GroupLabel>
              <Menu.RadioGroup
                value={precipitation}
                onValueChange={setPrecipitation}
                className="gap-050 grid"
              >
                <Menu.RadioItem
                  value="mm"
                  className="rounded-8 flex cursor-pointer items-center justify-between gap-125 bg-neutral-700 px-100 py-125 outline-offset-1 select-none focus-visible:outline"
                >
                  <span>Millimeters (mm)</span>
                  <CheckIcon />
                </Menu.RadioItem>
                <Menu.RadioItem
                  value="in"
                  className="rounded-8 flex cursor-pointer items-center justify-between gap-125 bg-neutral-700 px-100 py-125 outline-offset-1 select-none focus-visible:outline"
                >
                  <span>Inches (in)</span>
                  <CheckIcon />
                </Menu.RadioItem>
              </Menu.RadioGroup>
            </Menu.Group>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  )
}
