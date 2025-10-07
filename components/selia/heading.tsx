import * as React from 'react';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const headingVariants = cva('font-semibold text-foreground', {
  variants: {
    size: {
      sm: 'text-lg',
      md: 'text-2xl',
      lg: 'text-3xl',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({
  level = 1,
  size,
  className,
  ...props
}: HeadingProps) {
  const levelMap = {
    lg: 1,
    md: 2,
    sm: 3,
  };

  const selectedLevel = levelMap[size || 'lg'] || level;

  const tagName = `h${selectedLevel}` as keyof React.JSX.IntrinsicElements;

  return React.createElement(tagName, {
    className: cn(headingVariants({ size, className })),
    ...props,
  });
}
