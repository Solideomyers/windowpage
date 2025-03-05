import { cn } from '@/lib/utils';
import Image, { type ImageProps } from 'next/image';

type ImgProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  extend?: string;

  classNameParent?: string;
} & Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>;

export const CustomImg = ({
  src,
  alt = 'img',
  width,
  height,
  extend,

  classNameParent,
  ...rest
}: ImgProps) => {
  return (
    <div
      role='img'
      aria-label={alt}
      className={cn('relative w-auto h-auto min-w-[30px]', classNameParent)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(extend)}
        {...rest}
      />
    </div>
  );
};
