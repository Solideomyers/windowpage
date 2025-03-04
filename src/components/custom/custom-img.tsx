import { cn } from '@/lib/utils';
import Image from 'next/image';

type ImgProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  extend?: string;
  decoding?: 'sync' | 'async' | 'auto';
  loading?: 'eager' | 'lazy';
  sizes?: string;
  quality?: number;
  priority?: boolean;
};

export const CustomImg = ({
  src,
  alt = 'img',
  width,
  height,
  extend,
  loading,
  decoding,
  sizes,
  quality,
  priority,
}: ImgProps) => {
  return (
    <div
      role='img'
      aria-label={alt}
      className='relative w-auto h-auto min-w-[30px]'
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(extend)}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
        quality={quality}
        priority={priority}
      />
    </div>
  );
};
