import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '../service-grid';

export const TabletServices = () => {
  return (
    <ServiceGrid
      services={mockService.filter((s) => s.mobile)}
      extend='grid-cols-6 py-8'
    />
  );
};
