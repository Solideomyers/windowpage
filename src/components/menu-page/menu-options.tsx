'use client'

import { Button } from '@/components/ui/shadcn/button';
import {
  ButtonHover,
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';

import { ChevronLeft as BackIcon } from 'lucide-react';

interface MenuOptionsProps {
  setStep: (step: boolean) => void;
 }


export const MenuOptions:React.FC<MenuOptionsProps> = ({setStep}) => {


  return (
    <div className='relative z-10 flex flex-col items-center gap-2 w-full'>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        menú vip
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        menú - cena show
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        menú solo show
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        cocktails
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        vinos
      </Button>
      <Button
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}

        className='uppercase text-black px-5 py-6 text-xl cursor-pointer font-montserrat tracking-wide justify-center w-9/12 font-semibold'
      >
        menú mediodia
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
