import Image from 'next/image';

export const LogoPaypal = () => {
  return (
    <>
      <Image
        alt='paypal logo'
        src={'/payments/logo-paypal.svg'}
        width={800}
        height={800}
        className='w-auto'
      />
    </>
  );
};
