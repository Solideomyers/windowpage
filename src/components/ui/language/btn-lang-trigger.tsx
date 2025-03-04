import { Button } from '@/components/ui/shadcn/button';

import { ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn, getFlagImageSrc } from '@/lib/utils';
import { SwitchLanguageVariant } from '@/components/ui/enums/switch-variants.enum';
import { PopoverTrigger } from '@/components/ui/shadcn/popover';
import { Avatar, AvatarImage } from '@/components/ui/shadcn/avatar';

type BtnTriggerProps = {
  buttonClasses: string;
  label: string;
  locale: Locale;
  variant?: SwitchLanguageVariant.Mobile | SwitchLanguageVariant.Desktop;

  isOpen: boolean;
};

export const BtnLangTrigger = ({
  buttonClasses,
  label,
  locale,
  variant,
  isOpen,
}: BtnTriggerProps) => {
  return (
    <PopoverTrigger asChild>
      <Button className={buttonClasses} aria-label={label}>
        <Avatar
          className={cn(
            variant === SwitchLanguageVariant.Mobile
              ? 'w-10 h-10'
              : 'py-0 w-4 h-4'
          )}
        >
          <AvatarImage
            src={getFlagImageSrc(locale)}
            alt={`${locale.toUpperCase()} flag`}
            height={variant === SwitchLanguageVariant.Mobile ? 800 : 600}
            className={
              variant === SwitchLanguageVariant.Mobile
                ? 'p-0 m-0 w-full object-cover'
                : 'p-0 m-0 w-4 h-4 object-cover'
            }
          />
        </Avatar>
        {/* Display the language code in uppercase (hidden on mobile according to design) */}
        <span className='ml-2 hidden sm:block sm:m-0 text-foreground'>
          {locale.toUpperCase()}
        </span>
        {variant === SwitchLanguageVariant.Desktop && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <ChevronDownIcon
              className='block h-4 w-4 text-foreground'
              aria-hidden='true'
            />
          </motion.div>
        )}
        {variant === SwitchLanguageVariant.Mobile && (
          <ChevronDownIcon
            className='hidden sm:block h-4 w-4'
            aria-hidden='true'
          />
        )}
      </Button>
    </PopoverTrigger>
  );
};
