'use client';
import { ContactInfo } from '@/components/contact-info/contact-info';
import { Footer } from '@/components/footer/footer';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function FooterContent() {
  const pathname = usePathname();

  const t = useTranslations('Footer');

  return (
    <footer className='bg-pallete-gold grid grid-flow-row auto-rows-auto'>
      {pathname && pathname.includes('/reservation') && <ContactInfo />}
      <Footer powerBy={t('title')} variant='minimal' />
    </footer>
  );
}
