'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/shadcn/button';
import {
  ButtonHover,
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';

interface MenuLanguageProps {
  setStep: (step: boolean) => void;
}

export const MenuLanguage: React.FC<MenuLanguageProps> = ({ setStep }) => {
  return (
    <div className='relative z-10 flex flex-col items-center gap-4 w-full px-4'>
      <Button
        href='/es'
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}
        onClick={() => setStep(true)}
        className='uppercase text-black h-14 text-lg cursor-pointer font-montserrat justify-start px-4 w-full font-normal'
      >
        <Image
          src='https://www.laventanaweb.com/images/argentina.png'
          alt='Argentina flag'
          width={24}
          height={24}
          className='rounded-full'
        />
        {"español"}
      </Button>

      <Button
        href='/en'
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}
        onClick={() => setStep(true)}
        className='uppercase text-black h-14 text-lg cursor-pointer font-montserrat justify-start px-4 w-full font-normal'
      >
        <Image
          src='https://www.laventanaweb.com/images/united-kingdom.png'
          alt='UK flag'
          width={24}
          height={24}
          className='rounded-full'
        />
        {"inglés"}
      </Button>

      <Button
        href='/pt'
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}
        onClick={() => setStep(true)}
        className='uppercase text-black h-14 text-lg cursor-pointer font-montserrat justify-start px-4 w-full font-normal'
      >
        <Image
          src='https://www.laventanaweb.com/images/brazil.png'
          alt='Brazil flag'
          width={24}
          height={24}
          className='rounded-full'
        />
        {"portugués"}
      </Button>

      <Button
        href='/md'
        variant={ButtonVariant.Default}
        radius={ButtonRadius.Lg}
        hover={ButtonHover.Primary}
        onClick={() => setStep(true)}
        className='uppercase text-black h-14 text-lg cursor-pointer font-montserrat justify-start px-4 w-full font-normal'
      >
        <Image
          src='https://www.laventanaweb.com/images/china.png'
          alt='China flag'
          width={24}
          height={24}
          className='rounded-full'
        />
        {"chino"}
      </Button>
    </div>
  );
};
