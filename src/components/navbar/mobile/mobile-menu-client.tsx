'use client';

import { Button } from '@/components/ui/shadcn/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/components/ui/shadcn/sheet';
import { IoIosMenu as Menu } from 'react-icons/io';
import { IoClose as X } from 'react-icons/io5';
import { cloneElement, ReactNode, useState, type ReactElement } from 'react';

export const MobileMenuClient = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTitle className='sr-only'>Mobile Navigation Menu</SheetTitle>
      <SheetTrigger asChild>
        <Button
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          className='px-0 bg-[#1a1a1a] text-white [&_svg]:size-10 h-full w-full rounded-none hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
        >
          {isOpen ? (
            <>
              <X className='stroke-[1px] text-white transition-transform duration-800 ease-in-out' />
            </>
          ) : (
            <>
              <Menu className='transition-transform duration-800 ease-in-out' />
            </>
          )}
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side='right'
        className='bg-pallete-black w-[300px] h-fit sm:w-[400px] uppercase'
      >
        <SheetDescription className='sr-only'>
          This is the mobile menu. Navigate to different sections of the site.
        </SheetDescription>
        {cloneElement(children as ReactElement, {
          closeMenu: () => {
            setIsOpen(false);
          },
        })}
      </SheetContent>
    </Sheet>
  );
};
