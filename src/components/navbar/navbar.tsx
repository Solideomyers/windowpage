import * as React from 'react';
import { Link } from '@/i18n/routing';

import { Logo } from '@/components/logo/logo';
import NavLinks from '@/components/navbar/mobile/navlinks';
import Image from 'next/image';
import NavMobile from '@/components/navbar/mobile/nav-mobile';
import { siteConfig } from '@/config/site';

export const Navbar = () => {
  return (
    <header
      className='sticky top-0 z-50 w-full h-full pl-1
        bg-pallete-black 
        items-center 
        justify-center'
    >
      <div className='container flex h-full w-full mx-auto p-0 items-center justify-center'>
        <Link href='/'>
          <Logo alt={`Logo ${siteConfig.title}`} src={siteConfig.logo} />
        </Link>

        {/* Desktop */}
        <nav className='hidden md:flex md:items-center md:justify-center md:flex-1'>
          <div className='flex items-center space-x-6'>
            <NavLinks isMobile={false} />

            <Image
              src='/btn_whatsapp.png'
              alt='Whatsapp'
              width={40}
              height={40}
            />
          </div>
        </nav>

        {/* Mobile */}
        <NavMobile />
      </div>
    </header>
  );
};
