import NavLinks from '@/components/navbar/mobile/navlinks';

import { MobileMenuClient } from '@/components/navbar/mobile/mobile-menu-client';

export const MobileMenu = () => {
  return (
    <div className='order-5 w-full h-full'>
      <MobileMenuClient>
        <NavLinks isMobile={true} />
      </MobileMenuClient>
    </div>
  );
};