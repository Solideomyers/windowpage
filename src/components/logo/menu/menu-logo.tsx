import Image from 'next/image';
import { Link } from '@/i18n/routing';

export const MenuLogo = () => {
  return (
    <div className='relative z-10 justify-center items-center w-full max-w-[180px] mb-8'>
      <Link href='/'>
        <Image
          src='/logo.png'
          alt='logo laventana'
          width={900}
          height={900}
          priority
          loading='eager'
          className='w-full object-contain'
        />
      </Link>
    </div>
  );
};
