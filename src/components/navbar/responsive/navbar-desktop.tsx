import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/logo/logo';
import { NavLinks } from '@/components/navbar/mobile/navlinks';
import { SwitchLanguage } from '@/components/ui/language/btn-language';
import { SwitchLanguageVariant } from '@/components/ui/enums/switch-variants.enum';

export const DesktopNavbar = () => {
  return (
    <nav
      className={`
        hidden 
        lg:flex 
        w-full 
        h-24 
        bg-pallete-black 
        items-center 
        justify-center
        space-x-4 
        px-8 
        fixed 
        top-0 
        z-50
      `}
    >
      <Link prefetch href='/'>
        <Logo src='/logo.png' />
      </Link>

      <div className='flex items-center space-x-6'>
        <NavLinks isMobile={false} />

        <Image src='/btn_whatsapp.png' alt='Whatsapp' width={40} height={40} />
      </div>
      {/* <div className='absolute top-0 right-0'>
        <SwitchLanguage variant={SwitchLanguageVariant.Desktop} />
      </div> */}
    </nav>
  );
};
