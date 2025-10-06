import * as React from 'react';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const dividerVariants = cva('flex items-center gap-2.5', {
  variants: {
    variant: {
      default: 'before:bg-border02 before:h-px before:w-full',
      center:
        'before:bg-border02 after:bg-border02 before:h-px before:w-full after:h-px after:w-full *:w-full',
      left: 'after:bg-border02 after:h-px after:w-full',
      right: 'before:bg-border02 before:h-px before:w-full',
    },
  },
  defaultVariants: {
    variant: 'left',
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  children?: React.ReactNode;
}

export function Divider({
  children,
  variant,
  className,
  ...props
}: DividerProps) {
  return (
    <div className={cn(dividerVariants({ variant, className }))} {...props}>
      {children && (
        <span className="text-sm text-dim inline-block text-nowrap">
          {children}
        </span>
      )}
    </div>
  );
}
