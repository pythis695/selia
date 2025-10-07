import * as React from 'react';
import { Avatar as BaseAvatar } from '@base-ui-components/react/avatar';
import { cn } from 'lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

export const avatarVariants = cva(
  'rounded-full select-none bg-surface04 flex items-center justify-center text-foreground font-semibold',
  {
    variants: {
      size: {
        sm: 'size-8',
        md: 'size-12',
        lg: 'size-16',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export interface AvatarProps
  extends BaseAvatar.Root.Props,
    VariantProps<typeof avatarVariants> {}

export function Avatar({ size, className, ...props }: AvatarProps) {
  return (
    <BaseAvatar.Root
      className={cn(avatarVariants({ size, className }))}
      {...props}
    />
  );
}

export interface AvatarImageProps extends BaseAvatar.Image.Props {}
export function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <BaseAvatar.Image
      className={cn('size-full rounded-full', className)}
      {...props}
    />
  );
}

export interface AvatarFallbackProps extends BaseAvatar.Fallback.Props {}

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <BaseAvatar.Fallback
      className={cn(
        'flex items-center justify-center size-full rounded-full',
        className,
      )}
      {...props}
    />
  );
}
