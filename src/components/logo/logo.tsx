'use client';

import { useResponsive } from '@/hooks/useResponsive';
import { ImageProps } from '@/types';
import { MobileLogo } from './responsive/mobile-logo';
import { TabletLogo } from './responsive/tablet-logo';
import { DesktopLogo } from './responsive/desktop-logo';

export const Logo: React.FC<ImageProps> = (props) => {
  const { currentBreakpoint } = useResponsive();
  const { src, alt } = props;

  if (['xs'].includes(currentBreakpoint)) return <MobileLogo src={src} alt={alt} />;

  if (['sm', 'md'].includes(currentBreakpoint))
    return <TabletLogo src={src} alt={alt} />;

  return <DesktopLogo src={src} alt={alt} />;
};
