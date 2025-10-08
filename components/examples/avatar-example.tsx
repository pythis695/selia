import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';

export default function AvatarExample() {
  return (
    <>
      <Avatar size="sm">
        <AvatarImage src="/avatar01.png" alt="Avatar" />
        <AvatarFallback>BS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/avatar02.png" alt="Avatar" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="/avatar03.png" alt="Avatar" />
        <AvatarFallback>TZ</AvatarFallback>
      </Avatar>
    </>
  );
}
