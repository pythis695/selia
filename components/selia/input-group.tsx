import { cn } from 'lib/utils';
import * as React from 'react';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export function InputGroup({ className, ...props }: InputGroupProps) {
  return (
    <div
      className={cn(
        'relative flex h-9.5 px-2.5',
        'bg-input rounded transition-colors',
        'ring ring-input-border hover:ring-border05 focus:outline-0 focus:ring-primary focus:ring-2',
        '*:data-[slot=input]:bg-transparent',
        '*:data-[slot=input]:ring-0',
        className,
      )}
      {...props}
    />
  );
}

export interface InputGroupAddonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function InputGroupAddon({ className, ...props }: InputGroupAddonProps) {
  return <div className={cn('flex items-center', className)} {...props} />;
}

export interface InputGroupTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export function InputGroupText({ className, ...props }: InputGroupTextProps) {
  return <span className={cn('', className)} {...props} />;
}
