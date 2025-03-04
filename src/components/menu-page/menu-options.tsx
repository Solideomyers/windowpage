'use client'

import { Button } from '@/components/ui/shadcn/button';
import {
  ButtonHover,
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';

import { ChevronLeft as BackIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface MenuOptionsProps {
  setStep: (step: boolean) => void;
 }


export const MenuOptions:React.FC<MenuOptionsProps> = ({setStep}) => {
const t = useTranslations('OptionsMenu');

  
  return (
    <div className='relative z-10 flex flex-col items-center gap-2 w-full'>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        {t('vip')}
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        {t('menu')}
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        {t('show')}
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        {t('cocktails')}
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        {t('wines')}
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        {t('noon')}
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        size={'icon'}
        onClick={() => setStep(false)}
        className='uppercase [&_svg]:size-8 p-6 text-black text-xl cursor-pointer font-montserrat tracking-wide justify-center font-semibold'
      >
        <BackIcon />
      </Button>
    </div>
  );
};
