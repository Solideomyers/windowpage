import { CustomImg } from '@/components/custom/custom-img';
import { LogoBase } from '@/components/logo/logo-base';

export default function DesktopLogo({
  src,
  alt = 'logo la-ventana desktop',
}: {
  src: string;
  alt: string;
}) {
  return (
    <LogoBase>
      <CustomImg
        src={src}
        alt={alt}
        priority
        quality={100}
        width={300}
        height={300}
        extend='hidden lg:block object-contain w-full h-full'
      />
    </LogoBase>
  );
}
