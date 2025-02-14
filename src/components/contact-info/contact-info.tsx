'use client';

import { useResponsive } from '@/hooks/useResponsive';
import { MobileContactInfo } from '@/components/contact-info/responsive/mobile-info';
import { TabletContactInfo } from '@/components/contact-info/responsive/tablet-info';
import { DesktopContactInfo } from '@/components/contact-info/responsive/desktop-info';

export const ContactInfo: React.FC = () => {
  const { currentBreakpoint } = useResponsive();
  const breakpointConfig = {
    xs: {
      Component: MobileContactInfo,
      filter: () => true,
    },
    'sm|md': {
      Component: TabletContactInfo,
      filter: () => true,
    },
    'lg|xl|2xl|3xl': {
      Component: DesktopContactInfo,
      filter: () => true,
    },
  }

  const ContactInfoComponent = Object.entries(breakpointConfig).find(([key]) =>
    key.split('|').includes(currentBreakpoint)
  )?.[1].Component;

  return ContactInfoComponent ? <ContactInfoComponent /> : null;
};