import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';

export function AvatarExample() {
  return (
    <Avatar>
      <AvatarImage src="/avatar01.png" alt="Avatar" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  );
}
