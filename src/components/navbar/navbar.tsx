import { MobileNavbar } from '@/components/navbar/responsive/navbar-mobile';
import { TabletNavbar } from '@/components/navbar/responsive/navbar-tablet';
import { DesktopNavbar } from '@/components/navbar/responsive/navbar-desktop';

export const Navbar = () => {
  return (
    <section>
      <DesktopNavbar />
      <MobileNavbar />
      <TabletNavbar />
    </section>
  );
};


