'use client';

import { useResponsive } from '@/hooks/useResponsive';
import { MobileServices } from './responsive/services-mobile';
import { TabletServices } from './responsive/services-tablet';
import { DesktopServices } from './responsive/services-desktop';
import type { Service } from '@/types';

export const Services: React.FC = () => {
  const { currentBreakpoint } = useResponsive();
  const breakpointConfig = {
    xs: {
      Component: MobileServices,
      filter: (s: Service) => s.mobile,
    },
    'sm|md': {
      Component: TabletServices,
      filter: () => true,
    },
    'lg|xl|2xl|3xl': {
      Component: DesktopServices,
      filter: (s: Service) => s.desktop,
    },
  };

  const config = Object.entries(breakpointConfig).find(([key]) =>
    key.split('|').includes(currentBreakpoint)
  )?.[1];

  return config ? <config.Component /> : null;
};
