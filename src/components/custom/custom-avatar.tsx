import { Avatar, AvatarImage } from '@/components/ui/shadcn/avatar';
import { cn } from '@/lib/utils';

type ImgProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  extend?: string;
};

export const CustomAvatar = ({
  src,
  alt = 'img',
  width,
  height,
  extend,
}: ImgProps) => {
  return (
    <div className='relative w-auto h-auto min-w-[30px]'>
      <Avatar>
        <AvatarImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(extend)}
        />
      </Avatar>
    </div>
  );
};
