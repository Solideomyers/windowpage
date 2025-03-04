import ReservationInfo from '@/components/contact-info/reservation/reservation-info';
import { MenuLogo } from '@/components/logo/menu/menu-logo';
import { MenuBackground } from '@/components/menu-page/menu-background';
import { MenuOnboard } from '@/components/menu-page/menu-onboard';
import { SwitchLanguage } from '../ui/language/btn-language';
import { SwitchLanguageVariant } from '../ui/enums/switch-variants.enum';

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
      <div className='absolute top-0 right-0'>
        <SwitchLanguage variant={SwitchLanguageVariant.Desktop} />
      </div>
    </main>
  );
};
