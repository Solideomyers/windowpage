'use client'

import {Link} from '@/i18n/routing';
import { X as CloseIcon, Menu as MobileHamburger } from 'lucide-react';
import { FaCalendarAlt as Schedule } from 'react-icons/fa';
import { useNavbar } from '@/components/navbar/hooks/useNavbar';
import { Logo } from '@/components/logo/logo';
import { Button } from "@heroui/react";
import { MobileMenu } from '@/components/navbar/mobile/mobile-menu';
import { CustomImg } from '@/components/custom/custom-img';
import { SwitchLanguage } from '@/components/ui/language/btn-language';

export const MobileNavbar = () => {
  const {
    isMobileMenuOpen,
    mobileMenuRef,
    toggleMobileMenu,
    setIsMobileMenuOpen,
  } = useNavbar();

  return (
    <nav
      className={`
        fixed 
        top-0 
        w-full 
        h-20 
        bg-primary-foreground
        z-50
        flex sm:hidden  
        
      `}
    >
      <div
        className={`
          w-full 
          h-full 
          flex
          justify-between
          gap-0
          
        `}
      >
        {/* Schedule */}
        <div
          className={`
            order-2
            bg-pallete-gold 
            w-full 
            h-full
            max-w-[80px] 
            flex
            justify-center 
            items-center
            group
            `}
        >
          <Schedule
            // width={80}
            className='group-hover:fill-white fill-black transition-colors h-8 w-8'
          />
        </div>
        {/* WhatsApp */}
        <div
          className={`
            order-4
            p-4
            w-full
            max-w-[70px] 
            h-full 
            grid
            border-l-1
            border-pallete-anexo/60 
            place-items-center
              `}
        >
          <CustomImg
            src={'/btn_whatsapp.png'}
            alt='icon whatsapp'
            width={100}
            height={100}
          />
        </div>
        {/* flag => replace with button translate*/}
        <div
          className={`
            order-3
            p-0
            w-full
            max-w-[70px] 
            h-full 
            grid 
            place-items-center
            `}
            >
          <SwitchLanguage />
          
        </div>

        {/* Logo */}
        <div
          className={`
            order-1
            flex
            justify-center 
            items-center
            h-full
          `}
        >
          <Link
            as='/'
            href='/'
            prefetch
            className='flex justify-center items-center w-full px-2'
          >
            <Logo src='/logo.png' />
          </Link>
        </div>

        {/* Menu */}
        <div
          className={`
            order-5 
            flex 
            justify-center 
            items-center 
          `}
        >
          <Button
            className='bg-[#1a1a1a] text-white h-full w-full rounded-none'
            onPress={() => toggleMobileMenu()}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className='h-14 w-14' />
            ) : (
              <MobileHamburger className='h-14 w-14' />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        ref={mobileMenuRef}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};
