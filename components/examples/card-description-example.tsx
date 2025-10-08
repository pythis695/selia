import {
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardHeaderContent,
  CardTitle,
} from 'components/selia/card';
import { Text } from 'components/selia/text';

export default function CardDescriptionExample() {
  return (
    <Card>
      <CardHeader>
        <CardHeaderContent>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            A beautiful component library for your React applications.
          </CardDescription>
        </CardHeaderContent>
      </CardHeader>
      <CardBody>
        <Text>This is a card component with a description and footer.</Text>
      </CardBody>
      <CardFooter>
        <Text>This is the footer of the card.</Text>
      </CardFooter>
    </Card>
  );
}
