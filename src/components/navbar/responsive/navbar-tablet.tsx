import Image from 'next/image';
import { NavLinks } from '@/components/navbar/mobile/navlinks';
import { SwitchLanguage } from '@/components/ui/language/btn-language';
import { Logo } from '@/components/logo/logo';
import Link from 'next/link';
import { SwitchLanguageVariant } from '@/components/ui/enums/switch-variants.enum';

export const TabletNavbar = () => {



  return (
    <nav
      className={`
        hidden
        sm:flex
        w-full 
        h-24 
        bg-pallete-black
        items-center 
        justify-center
        space-x-4 
        px-4 
        fixed 
        top-0 
        z-50
      `}
    >
      <Link href='/'>
        <Logo src='/logo.png' />
      </Link>

      <div className='relative flex items-center space-x-2'>
        <NavLinks isMobile={false}  />

        <Image src='/btn_whatsapp.png' alt='Whatsapp' width={30} height={30} />
      </div>
      <div className=''>
        <SwitchLanguage variant={SwitchLanguageVariant.Desktop} />

      </div>
    </nav>
  );
};
