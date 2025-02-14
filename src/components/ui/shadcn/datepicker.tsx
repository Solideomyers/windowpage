'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import {es} from 'date-fns/locale'
import { FaCalendarAlt as CalendarIcon } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/shadcn/button';
import { Calendar } from '@/components/ui/shadcn/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/shadcn/popover';
import { CalendarFooter } from '@/components/ui/shadcn/calendar-footer';
import { fontMontserrat } from '@/fonts/fonts';
import { ButtonVariant } from '@/components/ui/enums/button-variants.enum';


interface DatePickerProps {
  value: Date | null;
  todayDate: Date;
  isIcon?: boolean;
  variant?: ButtonVariant;
  onChange: (event: Date | null) => void;
  onDisableDates: (date: Date) => boolean;
}

export function DatePicker({
  onChange,
  onDisableDates,
  todayDate,
  value,
  variant = ButtonVariant.Outline,
  isIcon = true,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (date: Date | undefined) => {
    console.log({ datepicker: date });
    onChange(date ? date : null);
    setOpen(!open);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={variant}
          className={cn(
            'w-full justify-start text-left font-normal rounded-lg pl-0',
            !isIcon && 'pl-2 rounded-none',
            !value && 'text-muted-foreground',
            `${fontMontserrat.className}`
          )}
        >
          {isIcon && (
            <CalendarIcon className='mx-2 h-8 w-8 fill-gray-400 stroke-[1px]' />
          )}
          {value ? format(value, 'P') : <span>{format(todayDate, 'P')}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          footer={<CalendarFooter />}
          mode='single'
          selected={value || undefined}
          onSelect={handleSelect}
          disabled={onDisableDates}
          locale={es}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
