import * as React from 'react';
import { Field as BaseField } from '@base-ui-components/react/field';
import { cn } from 'lib/utils';

export interface FieldProps extends BaseField.Root.Props {}

export function Field({ className, ...props }: FieldProps) {
  return (
    <BaseField.Root
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

export interface FieldLabelProps extends BaseField.Label.Props {}

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <BaseField.Label className={cn('text-foreground', className)} {...props} />
  );
}

export interface FieldDescriptionProps extends BaseField.Description.Props {}

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <BaseField.Description
      className={cn('text-muted text-sm', className)}
      {...props}
    />
  );
}

export interface FieldErrorProps extends BaseField.Error.Props {}

export function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <BaseField.Error className={cn('text-destructive', className)} {...props} />
  );
}

export interface FieldValidityProps extends BaseField.Validity.Props {}

export function FieldValidity({ ...props }: FieldValidityProps) {
  return <BaseField.Validity {...props} />;
}
