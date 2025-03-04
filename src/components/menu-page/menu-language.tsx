'use client';

import { Button } from '@/components/ui/shadcn/button';
import {
  ButtonHover,
  ButtonRadius,
  ButtonVariant,
} from '@/components/ui/enums/button-variants.enum';
import { Avatar, AvatarImage } from '@/components/ui/shadcn/avatar';
import { useTranslations } from 'next-intl';
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { getFlagImageSrc } from '@/lib/utils';
import { useParams } from 'next/navigation';

interface MenuLanguageProps {
  setStep: (step: boolean) => void;
}

export const MenuLanguage: React.FC<MenuLanguageProps> = ({ setStep }) => {
  const t = useTranslations('LocaleSwitcher');
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: Locale) => {
    setStep(true);
    router.push(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: newLocale }
    );
  };

  return (
    <div className='relative z-10 flex flex-col items-center gap-4 w-full px-4'>
      {routing.locales.map((cur, idx) => (
        <Button
          key={idx}
          value={cur}
          variant={ButtonVariant.Default}
          radius={ButtonRadius.Lg}
          hover={ButtonHover.Primary}
          onClick={() => switchLanguage(cur)}
          className='uppercase text-black h-14 text-lg cursor-pointer font-montserrat justify-start px-4 w-full font-normal'
        >
          <Avatar className='w-7 h-7'>
            <AvatarImage
              src={getFlagImageSrc(cur)}
              alt={`${cur.toUpperCase()} flag`}
              height={800}
              className='p-0 m-0 w-full object-cover'
            />
          </Avatar>
          <span className='ml-2 sm:block sm:m-0'>
            {t('locale', { locale: cur })}
          </span>
        </Button>
      ))}
    </div>
  );
};
