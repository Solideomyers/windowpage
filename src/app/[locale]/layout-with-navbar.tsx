import { HeaderContent } from '@/components/modules/header/header-content';
import ContainerContent from '@/components/modules/container-content/container-content';

export default function LayoutWithNavbar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {/* header */}
      <HeaderContent />
      {/* main and footer */}

      <ContainerContent>{children}</ContainerContent>
    </section>
  );
}
