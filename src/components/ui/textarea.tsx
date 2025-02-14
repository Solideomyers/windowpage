import * as React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean;
  errorMessage?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isInvalid, errorMessage, ...props }, ref) => {
    return (
      <div className='w-full'>
        <textarea
          className={cn(
            `flex min-h-[80px] text-white w-full border-b-2 bg-transparent px-3 py-2 text-md 
            ring-offset-background placeholder:text-muted-foreground 
            focus-visible:outline-none focus-visible:ring-none focus-visible:ring-ring 
            focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            isInvalid
              ? 'border-red-500 text-red-500 focus-visible:ring-red-500'
              : 'border-input',
            className
          )}
          ref={ref}
          {...props}
        />
        {isInvalid && errorMessage && (
          <p className='mt-1 text-xs text-red-500'>{errorMessage}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
