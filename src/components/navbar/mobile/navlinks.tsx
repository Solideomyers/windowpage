'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { useSiteConfig } from '@/config/useSiteConfig';

interface NavLinksProps {
  isMobile: boolean;
  closeMenu?: () => void;
}

export default function NavLinks({ isMobile, closeMenu }: NavLinksProps) {
  const { navItems } = useSiteConfig();
  const locale = useLocale();

  return (
    <nav
      aria-label='Main Navigation'
      itemScope
      itemType='https://schema.org/SiteNavigationElement'
    >
      <ul
        className={`${
          isMobile
            ? `
            flex 
            flex-col 
            items-start 
            gap-10 
            p-8
            overflow-y-auto
            max-h-screen
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
          <li key={idx} itemProp={item.label} itemScope itemType={item.href}>
            <Link
              href={`/${locale}${item.href}`}
              replace
              onClick={() => {
                setTimeout(() => closeMenu?.(), 100);
              }}
              className={`
                w-full
                py-2
                px-5
                text-pallete-title
                hover:bg-pallete-gold
                transition-colors
                ease-linear
                duration-300
                sm:p-2
                
                `}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
