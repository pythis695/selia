import * as React from 'react';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const alertVariants = cva(
  [
    'w-full px-3.5 py-1.5 min-h-11 rounded flex items-center gap-2.5 font-medium',
    '[&_svg]:size-4.5 [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        secondary: 'bg-gradient-secondary text-secondary-foreground',
        destructive: 'bg-gradient-destructive text-destructive-foreground',
        info: 'bg-gradient-info text-info-foreground',
        success: 'bg-gradient-success text-success-foreground',
        warning: 'bg-gradient-warning text-warning-foreground',
        invert: 'bg-gradient-invert text-invert-foreground',
        light: 'bg-secondary/10 text-secondary-foreground ring ring-secondary',
        'destructive-light':
          'bg-destructive/10 text-destructive ring ring-destructive [&_svg]:text-destructive',
        'info-light': 'bg-info/10 text-info ring ring-info [&_svg]:text-info',
        'success-light':
          'bg-success/10 text-success ring ring-success [&_svg]:text-success',
        'warning-light':
          'bg-warning/10 text-warning ring ring-warning [&_svg]:text-warning',
        'invert-light':
          'bg-invert/10 text-invert ring ring-invert [&_svg]:text-invert',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  },
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant, className }))} {...props} />
  );
}

export interface AlertActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function AlertActions({ className, ...props }: AlertActionsProps) {
  return (
    <div
      className={cn('ml-auto flex items-center gap-1.5', className)}
      {...props}
    />
  );
}
