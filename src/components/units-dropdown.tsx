import { useEffect, useState } from 'react'
import IconDropdown from '@/assets/icon-dropdown.svg?react'
import IconUnits from '@/assets/icon-units.svg?react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

type UnitSystem = 'metric' | 'imperial'
type TemperatureUnit = 'celsius' | 'fahrenheit'
type WindSpeedUnit = 'kmh' | 'mph'
type PrecipitationUnit = 'mm' | 'inch'

export function UnitsDropdown() {
  const [units, setUnits] = useState<UnitSystem>('metric')
  const [temperatureUnit, setTemperatureUnit] =
    useState<TemperatureUnit>('celsius')
  const [windSpeedUnit, setWindSpeedUnit] = useState<WindSpeedUnit>('kmh')
  const [precipitationUnit, setPrecipitationUnit] =
    useState<PrecipitationUnit>('mm')

  // Set each unit to the selected unit system
  useEffect(() => {
    switch (units) {
      case 'metric':
        setTemperatureUnit('celsius')
        setWindSpeedUnit('kmh')
        setPrecipitationUnit('mm')
        break
      case 'imperial':
        setTemperatureUnit('fahrenheit')
        setWindSpeedUnit('mph')
        setPrecipitationUnit('inch')
        break
      default:
        throw new Error(`Invalid unit system: ${units}`)
    }
  }, [units])

  // Conversely, set unit system to metric if all units are metric and vice versa
  useEffect(() => {
    if (
      temperatureUnit === 'celsius' &&
      windSpeedUnit === 'kmh' &&
      precipitationUnit === 'mm'
    ) {
      setUnits('metric')
      return
    }

    if (
      temperatureUnit === 'fahrenheit' &&
      windSpeedUnit === 'mph' &&
      precipitationUnit === 'inch'
    ) {
      setUnits('imperial')
      return
    }
  }, [temperatureUnit, windSpeedUnit, precipitationUnit])

  const toggleUnits = (e: Event) => {
    e.preventDefault()
    setUnits((units) => (units === 'metric' ? 'imperial' : 'metric'))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={toggleUnits}>
          Switch to {units === 'metric' ? 'Imperial' : 'Metric'}
        </DropdownMenuItem>

        <DropdownMenuGroup>
          <DropdownMenuLabel>Temperature</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={temperatureUnit}
            onValueChange={(val) => setTemperatureUnit(val as TemperatureUnit)}
            className="gap-050 flex flex-col"
          >
            <DropdownMenuRadioItem value="celsius">
              Celsius (&deg;C)
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="fahrenheit">
              Fahrenheit (&deg;F)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Wind Speed</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={windSpeedUnit}
            onValueChange={(val) => setWindSpeedUnit(val as WindSpeedUnit)}
            className="gap-050 flex flex-col"
          >
            <DropdownMenuRadioItem value="kmh">km/h</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="mph">mph</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>Precipitation</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={precipitationUnit}
            onValueChange={(val) =>
              setPrecipitationUnit(val as PrecipitationUnit)
            }
            className="gap-050 flex flex-col"
          >
            <DropdownMenuRadioItem value="mm">
              Millimeters (mm)
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="inch">
              Inches (in)
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
