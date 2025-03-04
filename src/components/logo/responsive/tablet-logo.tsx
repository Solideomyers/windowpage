import { CustomImg } from '@/components/custom/custom-img';
import { LogoBase } from '@/components/logo/logo-base';

export default function TabletLogo  ({
  src,
  alt = 'logo la-ventana tablet',
}: {
  src: string;
  alt: string;
})  {
  return (
    
      <LogoBase  >
        
      <CustomImg
        src={src}
        alt={alt}
        priority
        quality={85}
        width={200}
        height={200}
        extend='hidden sm:block lg:hidden object-contain w-full h-full'
      />
      </LogoBase>
  );
};
