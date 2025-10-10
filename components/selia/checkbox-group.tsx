import { useRender } from '@base-ui-components/react';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui-components/react/checkbox-group';
import { cn } from 'lib/utils';

export interface CheckboxGroupProps extends BaseCheckboxGroup.Props {}

export function CheckboxGroup({ className, ...props }: CheckboxGroupProps) {
  return (
    <BaseCheckboxGroup
      {...props}
      className={cn('flex flex-col gap-2.5', className)}
    />
  );
}

export interface CheckboxGroupLabelProps
  extends useRender.ComponentProps<'span'> {}

export function CheckboxGroupLabel({
  render,
  ...props
}: CheckboxGroupLabelProps) {
  return useRender({
    defaultTagName: 'span',
    render,
    props: {
      className: cn('text-foreground', props.className),
      ...props,
    },
  });
}
