import { CustomImg } from '@/components/custom/custom-img';
import { LogoBase } from '@/components/logo/logo-base';

export default function MobileLogo  ({
  src,
  alt = 'logo la-ventana mobile',
}: {
  src: string;
  alt: string;
})  {
  return (
    <LogoBase >
      <CustomImg
        src={src}
        alt={alt}
        priority
        quality={75}
        width={150}
        height={150}
        extend='sm:hidden object-contain w-full h-full'
      />
    </LogoBase>
  );
};
