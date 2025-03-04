import { Fragment, Suspense, lazy } from 'react';

const MobileLogo = lazy(
  () => import('@/components/logo/responsive/mobile-logo')
);
const TabletLogo = lazy(
  () => import('@/components/logo/responsive/tablet-logo')
);
const DesktopLogo = lazy(
  () => import('@/components/logo/responsive/desktop-logo')
);

export const Logo = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <MobileLogo src={src} alt={alt} />
        <TabletLogo src={src} alt={alt} />
        <DesktopLogo src={src} alt={alt} />
      </Suspense>
    </Fragment>
  );
};
