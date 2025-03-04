import { CheckIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { getFlagImageSrc } from '@/lib/utils';
import { Avatar, AvatarImage } from '../shadcn/avatar';
import { PopoverContent } from '@/components/ui/shadcn/popover';
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/shadcn/button';

export const BtnLangContent = ({
  sideOffset = 16,
}: {
  sideOffset: number
}) => {
  const locale = useLocale();
  const router = useRouter();

  const pathname = usePathname();
  const t = useTranslations('LocaleSwitcher');
  const params = useParams();

  const switchLanguage = (newLocale: Locale) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: newLocale }
    );
  };

  return (
    <PopoverContent className='w-40 p-1' alignOffset={16} sideOffset={sideOffset}>
      <div className='grid gap-1'>
        {routing.locales.map((cur, idx) => (
          <Button
            key={idx}
            value={cur}
            className='flex items-center justify-start cursor-pointer bg-transparent hover:bg-primary'
            onClick={() => switchLanguage(cur)}
          >
            <Avatar className='w-7 h-7'>
              <AvatarImage
                src={getFlagImageSrc(cur)}
                alt={`${cur.toUpperCase()} flag`}
              />
            </Avatar>
            <option key={cur} value={cur}>
              {t('locale', { locale: cur })}
            </option>
            {locale === cur && (
              <CheckIcon className='h-5 w-5' aria-hidden='true' />
            )}
          </Button>
        ))}
      </div>
    </PopoverContent>
  );
};
