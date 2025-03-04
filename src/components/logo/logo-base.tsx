import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const LogoBase = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative w-[80px] sm:w-[100px] lg:w-[130px] h-auto mx-auto transition-all duration-300 ease-in-out',
        className
      )}
    >
      {children}
    </div>
  );
};
