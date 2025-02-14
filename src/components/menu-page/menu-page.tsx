import ReservationInfo from '@/components/contact-info/reservation/reservation-info';
import { MenuLogo } from '@/components/logo/menu/menu-logo';
import { MenuBackground } from '@/components/menu-page/menu-background';
import { MenuOnboard } from '@/components/menu-page/menu-onboard';

export const MenuPage = () => {
  return (
    <main className='min-h-screen relative z-50 flex flex-col items-center justify-center'>
      {/* Background Image */}
      <MenuBackground />

      {/* Logo */}
      <MenuLogo />

      <MenuOnboard />

      {/* Contact Information Social Media Links */}
      <div className='relative z-10 mt-12 text-center'>
        <ReservationInfo />
      </div>
    </main>
  );
};
