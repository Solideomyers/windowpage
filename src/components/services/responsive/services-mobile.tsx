import { mockService } from '@/mocks/service-mocks';
import { ServiceGrid } from '@/components/services/service-grid';

export const MobileServices = () => {
  return <ServiceGrid services={mockService} extend='grid-cols-3 gap-4 py-4' />;
};
