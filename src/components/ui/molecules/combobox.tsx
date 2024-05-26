import { useState } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '../molecules/command'
import { CheckIcon } from 'lucide-react'
import { CommandList } from 'cmdk'
import { FaCaretDown } from 'react-icons/fa'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Button } from '../atoms/button'
import { carStore } from '@/store/car'
import { cn } from '@/lib/utils'

interface Option {
  name?: string
  code?: string
}

interface ComboboxProps {
  options: Option[] | null
  placeholder: string
}

export function Combobox({ options, placeholder }: ComboboxProps) {
  const [open, setOpen] = useState(false)
  const { setBrand, setModel, setYear, brand, model, year } = carStore()

  const initialValue = brand || model || year || ''
  const initialOption = options?.find((option) => option.code === initialValue)

  const [selectedValue, setSelectedValue] = useState(
    initialOption ? initialOption.code : ''
  )
  const [displayedValue, setDisplayedValue] = useState(
    initialOption ? initialOption.name : ''
  )

  const handleSelect = (currentValue: any) => {
    const selectedOption = options?.find(
      (option) => option.code === currentValue
    )

    setSelectedValue(currentValue === selectedValue ? '' : currentValue)
    setDisplayedValue(selectedOption ? selectedOption.name : '')
    setOpen(false)

    switch (placeholder) {
      case 'Marca':
        setBrand(currentValue)
        break
      case 'Modelo':
        setModel(currentValue)
        break
      case 'Ano':
        setYear(currentValue)
        break
      default:
        break
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[324px] justify-between"
        >
          {displayedValue || placeholder}
          <FaCaretDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[324px] h-[280px] p-0 overflow-hidden">
        <div className="overflow-y-auto max-h-full">
          <Command>
            <CommandEmpty>Nenhum resultado.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {options?.map((option) => (
                  <CommandItem
                    key={option.code}
                    value={option.code}
                    onSelect={handleSelect}
                  >
                    <CheckIcon
                      className={cn(
                        'mr-2 h-4 w-4',
                        selectedValue === option.code
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                    {option.name}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </div>
      </PopoverContent>
    </Popover>
  )
}
