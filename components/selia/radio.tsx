import { useRender } from '@base-ui-components/react';
import { Radio as BaseRadio } from '@base-ui-components/react/radio';
import { RadioGroup as BaseRadioGroup } from '@base-ui-components/react/radio-group';
import { cn } from 'lib/utils';

export interface RadioGroupProps extends BaseRadioGroup.Props {}

export function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <BaseRadioGroup
      {...props}
      className={cn('flex flex-col gap-2.5', className)}
    />
  );
}

export interface RadioGroupLabelProps
  extends useRender.ComponentProps<'span'> {}

export function RadioGroupLabel({
  className,
  render,
  ...props
}: RadioGroupLabelProps) {
  return useRender({
    defaultTagName: 'span',
    render,
    props: {
      className: cn('text-foreground', className),
      ...props,
    },
  });
}

export interface RadioProps extends BaseRadio.Root.Props {}

export function Radio({ className, ...props }: RadioProps) {
  return (
    <BaseRadio.Root
      className={cn(
        'size-5 flex items-center justify-center rounded-full ring ring-input-border bg-input',
        'focus:outline-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        'data-[checked]:bg-primary data-[checked]:ring-primary',
        'transition-colors duration-75',
        'disabled::opacity-70 disabled:pointer-events-none',
        className,
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2.5 rounded-full bg-foreground" />
    </BaseRadio.Root>
  );
}
