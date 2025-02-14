'use client'

import { useState } from 'react';
import { MenuLanguage } from '@/components/menu-page/menu-language';
import { MenuOptions } from '@/components/menu-page/menu-options';
import { cn } from '@/lib/utils';

export const MenuOnboard = () => {
  const [step, setStep] = useState(false);

  return (
    <section
      className={cn('w-full', step ? 'max-w-md' : 'max-w-[240px]')}
    >
      {step ? <MenuOptions setStep={setStep} /> : <MenuLanguage setStep={setStep} />}
    </section>
  );
};
