import { ImageProps } from "@/types";
import Image from "next/image";

export const DesktopLogo: React.FC<ImageProps> = ({
  src,
  alt = 'logo la-ventana desktop',
}) => {
  return (
    <div
      className={`
        relative 
        w-[130px] 
        h-auto 
        mx-auto 
        transition-all 
        duration-300 
        ease-in-out
        hover:scale-105
      `}
    >
      <Image
        src={src}
        alt={alt}
        priority
        quality={100}
        width={300}
        height={300}
        className='object-contain w-full h-full'
      />
    </div>
  );
};
