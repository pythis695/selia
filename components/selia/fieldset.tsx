import * as React from 'react';
import { cn } from 'lib/utils';
import { Fieldset as BaseFieldset } from '@base-ui-components/react/fieldset';

export interface FieldsetProps extends BaseFieldset.Root.Props {}

export function Fieldset({ className, ...props }: FieldsetProps) {
  return (
    <BaseFieldset.Root
      className={cn('flex flex-col gap-4', className)}
      {...props}
    />
  );
}

export interface FieldsetLegendProps extends BaseFieldset.Legend.Props {}

export function FieldsetLegend({ className, ...props }: FieldsetLegendProps) {
  return (
    <BaseFieldset.Legend
      className={cn('text-lg font-semibold text-foreground', className)}
      {...props}
    />
  );
}
