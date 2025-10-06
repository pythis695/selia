import { useRender } from '@base-ui-components/react';
import { cn } from 'lib/utils';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function Text({ className, ...props }: TextProps) {
  return <p className={cn('text-muted text-base/6', className)} {...props} />;
}

export interface TextLinkProps extends useRender.ComponentProps<'a'> {}

export function TextLink({ className, render, ...props }: TextLinkProps) {
  return useRender({
    defaultTagName: 'a',
    render,
    props: {
      className: cn('text-foreground underline', className),
      ...props,
    },
  });
}

export interface StrongProps extends React.HTMLAttributes<HTMLElement> {}

export function Strong({ className, ...props }: StrongProps) {
  return (
    <strong
      className={cn('font-semibold text-foreground', className)}
      {...props}
    />
  );
}

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}

export function Code({ className, ...props }: CodeProps) {
  return (
    <code
      className={cn(
        'font-mono text-sm bg-accent03 px-1 py-px rounded-md text-foreground',
        className,
      )}
      {...props}
    />
  );
}
