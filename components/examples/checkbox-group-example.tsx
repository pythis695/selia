import { Checkbox } from 'components/selia/checkbox';
import {
  CheckboxGroup,
  CheckboxGroupLabel,
} from 'components/selia/checkbox-group';
import { Text } from 'components/selia/text';

export default function CheckboxGroupExample() {
  return (
    <CheckboxGroup
      defaultValue={['banana', 'apple']}
      aria-labelledby="fruits-label"
    >
      <CheckboxGroupLabel id="fruits-label">Fruits</CheckboxGroupLabel>
      <label className="flex items-center gap-2.5">
        <Checkbox value="apple" />
        <Text render={<span />}>Apple</Text>
      </label>
      <label className="flex items-center gap-2.5">
        <Checkbox value="banana" />
        <Text render={<span />}>Banana</Text>
      </label>
      <label className="flex items-center gap-2.5">
        <Checkbox value="cherry" />
        <Text render={<span />}>Cherry</Text>
      </label>
    </CheckboxGroup>
  );
}
