import Image from 'next/image';

export const MenuBackground = () => {
  return (
    <div className='absolute inset-0 z-0'>
      <Image
        
        src='https://www.laventanaweb.com/images/salon.jpg'
        alt='La Ventana interior'
        fill
        className='object-cover brightness-50'
        priority
        loading='eager'
      />
    </div>
  );
};
