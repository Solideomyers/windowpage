import LayoutWithNavbar from '@/app/[locale]/layout-with-navbar';
import { NewShow } from '@/components/reservation-show/new-show';

const Reservation = () => (
  <LayoutWithNavbar>
    <NewShow />
  </LayoutWithNavbar>
);

export default Reservation;
