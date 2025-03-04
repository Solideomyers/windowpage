import { HeaderContent } from '@/components/modules/header/header-content';
import ContainerContent from '@/components/modules/container-content/container-content';
import { Fragment } from 'react';

export const LayoutWithNavbar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Fragment>
      {/* header */}
      <HeaderContent />

      <ContainerContent>{children}</ContainerContent>
    </Fragment>
  );
};
