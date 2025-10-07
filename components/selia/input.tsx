import * as React from 'react';
import { Input as BaseInput } from '@base-ui-components/react/input';
import { cn } from 'lib/utils';

export interface InputProps extends BaseInput.Props {}

export function Input({ className, ...props }: InputProps) {
  return (
    <BaseInput
      data-slot="input"
      data-type={props.type}
      className={cn(
        'h-9.5 px-2.5 w-full bg-input text-foreground rounded placeholder:text-dim transition-colors',
        'ring ring-input-border hover:ring-border05 focus:outline-0 focus:ring-primary focus:ring-2',
        'data-[type=file]:py-2 data-[type=file]:text-dim',
        'file:h-5.5 file:px-1.5 file:rounded-lg file:text-secondary-foreground file:ring file:ring-border05 file:bg-secondary file:text-sm file:mr-2',
        'disabled:opacity-70',
        className,
      )}
      {...props}
    />
  );
}
