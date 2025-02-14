'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-0 focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'stroke-white text-white/60',
        underline:
          'border-b-1 border-black border-x-0 border-t-0 bg-transparent px-2 pt-6 pb-1 text-black',
        black: 'bg-black text-white hover:bg-black/90',
      },
      size: {
        default: 'h-10 px-2 py-2',
        sm: 'h-9 px-3',
        lg: 'h-10 px-8',
        xl: 'h-11 px-10',
        icon: 'h-10 w-10',
      },
      radius: {
        none: 'rounded-none',
        default: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      hover: {
        default: 'hover:bg-accent hover:text-accent-foreground',
        dark: 'hover:bg-primary-foreground hover:text-white',
        icon: 'hover:text-white/60',
        primary: 'hover:bg-gold-light',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
      hover: 'default',
    },
  }
);

// Define button props
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  as?: React.ElementType;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      hover,
      asChild = false,
      as: Component = 'button',
      href,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : Component;
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, radius, hover }),
          className
        )}
        ref={ref}
        href={href}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
