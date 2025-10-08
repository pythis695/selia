import { Card, CardBody, CardHeader, CardTitle } from 'components/selia/card';
import { Text } from 'components/selia/text';

export default function CardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardBody>
        <Text>This is a basic card component with a title and body.</Text>
      </CardBody>
    </Card>
  );
}
