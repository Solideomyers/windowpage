import { ImageProps } from "@/types";
import Image from "next/image";

export const TabletLogo: React.FC<ImageProps> = ({
  src,
  alt = 'logo la-ventana tablet',
}) => {
  return (
    <div
      className={`
        relative 
        w-[100px] 
        h-auto 
        mx-auto 
        transition-all 
        duration-300 
        ease-in-out
      `}
    >
      <Image
        src={src}
        alt={alt}
        priority
        quality={85}
        width={200}
        height={200}
        className='object-contain w-full h-full'
      />
    </div>
  );
};
