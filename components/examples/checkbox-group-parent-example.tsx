import * as React from 'react';
import { Checkbox } from 'components/selia/checkbox';
import {
  CheckboxGroup,
  CheckboxGroupLabel,
} from 'components/selia/checkbox-group';
import { Text } from 'components/selia/text';

const permissions = [
  {
    label: 'Read',
    value: 'read',
  },
  {
    label: 'Write',
    value: 'write',
  },
  {
    label: 'Execute',
    value: 'execute',
  },
];

export default function CheckboxGroupExample() {
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <div>
      <CheckboxGroup
        value={value}
        onValueChange={setValue}
        className="flex flex-col gap-2.5"
        aria-labelledby="permissions-label"
        allValues={permissions.map((p) => p.value)}
      >
        <CheckboxGroupLabel id="permissions-label">
          Permissions
        </CheckboxGroupLabel>
        <label className="flex items-center gap-2.5">
          <Checkbox parent name="user-permissions" />
          <Text render={<span />}>User Permissions</Text>
        </label>
        {permissions.map((permission) => (
          <label
            key={permission.value}
            className="flex items-center gap-2.5 pl-4"
          >
            <Checkbox value={permission.value} />
            <Text render={<span />}>{permission.label}</Text>
          </label>
        ))}
      </CheckboxGroup>
    </div>
  );
}
