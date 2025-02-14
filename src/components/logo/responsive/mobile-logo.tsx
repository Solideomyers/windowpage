import { ImageProps } from "@/types";
import Image from "next/image";

export const MobileLogo: React.FC<ImageProps> = ({
  src,
  alt = 'logo la-ventana mobile',
}) => {
  return (
    <div
      className={`
        relative 
        w-[80px] 
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
        quality={75}
        width={150}
        height={150}
        className='object-contain w-full h-full'
      />
    </div>
  );
};
