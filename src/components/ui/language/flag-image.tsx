import Image from 'next/image';

interface FlagBtnProps {
  src: string;
  alt: string;
  language: string;
}

export const FlagImage: React.FC<FlagBtnProps> = ({ alt, src, language }) => {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className='rounded-full'
      />
      <span>{language}</span>
    </div>
  );
};
