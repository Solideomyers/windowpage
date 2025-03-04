import { ServiceGrid } from '@/components/services/service-grid';
import { mockService } from '@/mocks/service-mocks';

export const Services = () => {
  return (
    <ServiceGrid
      services={mockService.filter((s) => s.desktop)}
      extend='grid-cols-3 gap-4 py-4 sm:grid-cols-6 sm:py-8 lg:grid-cols-7 lg:py-8 lg:gap-8'
    />
  );
};
