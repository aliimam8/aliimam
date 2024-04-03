import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from 'src/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center  rounded-full text-sm font-medium ',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:text-slate-600 dark:hover:text-slate-400 hover:bg-primary/90',
        destructive: 'border border-slate-200 dark:border-slate-800 text-destructive-foreground hover:bg-slate-200 hover:dark:bg-slate-800',
        outline:
          'border border-slate-100 dark:border-slate-900 bg-transparent hover:bg-slate-100 hover:text-black hover:dark:bg-slate-900 hover:dark:text-white',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm ',
        ghost: '',
        link: 'text-primary underline-offset-4 hover:underline',
        aibutton:
          'px-3 py-2 rounded-full inset-px z-10 grid place-items-center ring-1 ring-aired dark:bg-black hover:bg-aired hover:dark:bg-aired bg-white font-regular hover:text-white hover:dark:text-white text-black dark:text-white text-sm',
        redbutton:
          'px-3 py-2 rounded-full inset-px z-10 grid place-items-center bg-aired font-regular text-white dark:text-white text-sm hover:bg-aired/80'
      },
      size: {
        default: 'h-9 px-3 py-1',
        sm: 'h-10 rounded-full px-4 text-xs',
        md: 'h-12 rounded-full px-8 text-xs',
        lg: 'h-14 rounded-full px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
