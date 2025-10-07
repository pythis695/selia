import * as React from 'react';
import { useRender } from '@base-ui-components/react/use-render';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/utils';

export const buttonVariants = cva(
  [
    'relative font-semibold inset-shadow-2xs ring-2',
    'inline-flex justify-center items-center gap-2.5 transition-colors',
    'after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity',
    'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2',
    'before:size-4.5 before:bg-spinner before:-mr-7 before:opacity-0 before:scale-20 before:transition-[opacity,scale,margin-right]',
    '[&>svg]:size-4.5 [&>svg]:opacity-100 [&>svg]:transition-[opacity,scale,margin-right]',
    'disabled:opacity-70',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-primary text-primary-foreground',
          'ring-primary-ring inset-shadow-white/15 shadow',
          'after:rounded focus-visible:outline-primary',
        ],
        invert: [
          'bg-invert text-invert-foreground',
          'ring-invert-ring inset-shadow-background/15 shadow',
          'after:rounded after:bg-background/10 focus-visible:outline-invert',
        ],
        secondary: [
          'bg-gradient-secondary text-secondary-foreground',
          'ring-secondary-ring inset-shadow-white/15 shadow',
          'after:rounded focus-visible:outline-secondary',
        ],
        destructive: [
          'bg-gradient-destructive text-destructive-foreground',
          'ring-destructive-ring inset-shadow-white/15 shadow',
          'after:rounded focus-visible:outline-destructive',
        ],
        outline: [
          'text-foreground',
          'ring-border04 hover:bg-accent01',
          'after:content-none focus-visible:outline-secondary',
        ],
        ghost: [
          'text-foreground ring-0 after:rounded hover:bg-accent01',
          'after:content-none focus-visible:outline-secondary',
        ],
      },
      size: {
        md: 'h-9.5 px-4 rounded',
        icon: 'size-9.5 rounded',
        xs: 'h-7.5 px-2.5 rounded-lg after:rounded-lg',
        'xs-icon': 'size-7.5 rounded-lg after:rounded-lg',
        sm: 'h-8.5 px-3 rounded-[10px] after:rounded-[10px]',
        'sm-icon': 'size-8.5 rounded-[10px] after:rounded-[10px]',
        lg: 'h-10.5 px-5 rounded-[14px] after:rounded-[14px]',
        'lg-icon': 'size-10.5 rounded-[14px] after:rounded-[14px]',
      },
      pill: {
        true: 'rounded-full after:rounded-full',
      },
      block: {
        true: 'w-full',
      },
      progress: {
        true: [
          'pointer-events-none opacity-70 [&>svg]:opacity-0 [&>svg]:scale-0 [&>svg]:-mr-7',
          'before:size-4.5 before:bg-spinner before:animate-spin before:mr-0 before:opacity-100 before:scale-100',
        ],
      },
    },
    compoundVariants: [
      {
        variant: 'invert',
        progress: true,
        className: 'before:bg-spinner-dark',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

interface ButtonProps
  extends useRender.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  render,
  variant,
  size,
  pill,
  progress,
  block,
  className,
  ...props
}: ButtonProps) {
  return useRender({
    defaultTagName: 'button',
    render,
    props: {
      ...props,
      className: cn(
        buttonVariants({ variant, size, pill, progress, block, className }),
      ),
    },
  });
}
