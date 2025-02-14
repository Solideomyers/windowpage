'use client'
import React from 'react';
import Link from 'next/link';
import { useSiteConfig } from '@/config/useSiteConfig';

interface NavLinksProps {
  isMobile: boolean;
  onMobileLinkClick?: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({
  isMobile,
  onMobileLinkClick,
}) => {

  const handleLinkClick = () => {
    if (isMobile) {
      onMobileLinkClick && onMobileLinkClick()
    }
  }

const {navItems} = useSiteConfig()

  return (
    <ul
      className={`${
        isMobile
        ? `
          flex 
          flex-col 
          items-start 
          gap-10 
          p-8
          `
          : `
          hidden 
          sm:grid 
          sm:grid-flow-col 
          sm:auto-cols-auto 
          sm:text-[10px] 
          sm:w-full 
          md:text-[12px] 
          lg:text-lg 
          lg:gap-4
          `
      } font-montserrat font-normal text-responsive-lg`}
    >
      {navItems.map((item, idx) => (
        <li key={idx}>
          <Link
            href={item.href}
            className={`
              w-full
              py-2
              px-5
              text-pallete-title
              hover:bg-pallete-gold
              transition-colors
              ease-linear
              duration-100
              sm:p-2
              `}
            onClick={handleLinkClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
