import { Navbar } from '@/components/navbar/navbar';
import { SwitchLanguageVariant } from '@/components/ui/enums/switch-variants.enum';
import { SwitchLanguage } from '@/components/ui/language/btn-language';

export const HeaderContent = () => {
  return (
    <header
      role='banner'
      className={`
        header-content
        antialiased
        font-semibold
        uppercase
        text-white
        `}
    >
      <Navbar />
      <div className='absolute top-0 right-0 z-50'>
        <SwitchLanguage
          variant={SwitchLanguageVariant.Desktop}
          sideOffset={2}
        />
      </div>
    </header>
  );
};
