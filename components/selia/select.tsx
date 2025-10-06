import * as React from 'react';
import { Select as BaseSelect } from '@base-ui-components/react/select';
import { cn } from 'lib/utils';

export interface SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> extends BaseSelect.Root.Props<Value, Multiple> {}

export function Select<Value, Multiple extends boolean | undefined = false>({
  ...props
}: SelectProps<Value, Multiple>) {
  return <BaseSelect.Root {...props} />;
}

export interface SelectTriggerProps extends BaseSelect.Trigger.Props {}

export function SelectTrigger({
  className,
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <BaseSelect.Trigger
      data-slot="trigger"
      className={cn(
        'h-9.5 px-2.5 w-full bg-input rounded placeholder:text-dim transition-colors',
        'ring ring-input-border hover:ring-border05 focus:outline-0 focus:ring-primary focus:ring-2',
        'flex items-center',
        className,
      )}
      {...props}
    >
      {children}

      <BaseSelect.Icon className="ml-auto text-muted pointer-events-none">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  );
}

export interface SelectValueProps extends BaseSelect.Value.Props {}

export function SelectValue({ className, ...props }: SelectValueProps) {
  return <BaseSelect.Value className={cn('', className)} {...props} />;
}

export interface SelectContentProps {
  positionerProps?: BaseSelect.Positioner.Props;
  popupProps?: BaseSelect.Popup.Props;
  children?: React.ReactNode;
}

export function SelectContent({
  positionerProps,
  popupProps,
  children,
}: SelectContentProps) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Backdrop />
      <BaseSelect.Positioner
        {...positionerProps}
        className={cn(
          'z-10 select-none outline-none',
          positionerProps?.className,
        )}
      >
        <BaseSelect.ScrollUpArrow />
        <BaseSelect.Popup
          {...popupProps}
          className={cn(
            'group origin-(--transform-origin) bg-popover ring ring-popover-border rounded shadow-lg',
            'p-1 outline-none',
            popupProps?.className,
          )}
        >
          <BaseSelect.Arrow />
          {children}
        </BaseSelect.Popup>
        <BaseSelect.ScrollDownArrow />
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  );
}

export interface SelectListProps extends BaseSelect.List.Props {}

export function SelectList({ className, ...props }: SelectListProps) {
  return (
    <BaseSelect.List
      className={cn(
        'space-y-1 max-h-(--available-height) overflow-y-auto relative',
        className,
      )}
      {...props}
    />
  );
}

export interface SelectItemProps extends BaseSelect.Item.Props {}

export function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <BaseSelect.Item
      className={cn(
        'flex items-center text-foreground py-2 px-2.5 rounded',
        'group-data-[side=none]:min-w-[calc(var(--anchor-width))]',
        'data-[highlighted]:bg-accent04 data-[selected]:bg-accent04',
        'focus-visible:outline-none',
        className,
      )}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="ml-auto">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  );
}

export interface SelectGroupProps extends BaseSelect.Group.Props {}

export function SelectGroup({ className, ...props }: SelectGroupProps) {
  return <BaseSelect.Group className={cn(className)} {...props} />;
}

export interface SelectGroupLabelProps extends BaseSelect.GroupLabel.Props {}
export function SelectGroupLabel({
  className,
  ...props
}: SelectGroupLabelProps) {
  return (
    <BaseSelect.GroupLabel
      className={cn('px-2.5 py-1.5 font-medium text-dim', className)}
      {...props}
    />
  );
}

export interface SelectSeparatorProps extends BaseSelect.Separator.Props {}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <BaseSelect.Separator
      className={cn('h-px my-1 bg-border02', className)}
      {...props}
    />
  );
}
