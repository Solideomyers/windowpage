import { Navbar } from '@/components/navbar/navbar';

export const HeaderContent = () => {
  return (
    <header
      role='banner'
      className={`
        fixed
        top-0
        z-50
        w-full
        min-h-24
        antialiased
        font-semibold
        uppercase
        text-white`}
    >
      <Navbar />
    </header>
  );
}
