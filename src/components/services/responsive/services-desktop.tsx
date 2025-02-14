import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '@/components/services/service-grid';

export const DesktopServices = () => {


  return (

    <ServiceGrid
      services={mockService.filter((s) => s.desktop)}
      extend='grid-cols-7 py-8 gap-8'
    />
  );
};
