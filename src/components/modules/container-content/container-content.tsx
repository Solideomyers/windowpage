import FooterContent from '@/components/modules/footer/footer-content';
import MainContent from '@/components/modules/main/main-content';

const ContainerContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main
      role='main'
      id='container-content'
      className={`
        relative
        mt-0 
        z-0
        w-full
        min-h-screen
        flex
        flex-col
        min-w-screen        
        `}
    >
      <MainContent>{children}</MainContent>

      <FooterContent />
    </main>
  );
};

export default ContainerContent;
