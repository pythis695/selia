export function Preview({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="relative w-full bg-surface01/60 ring ring-border02 rounded-3xl mb-6 flex flex-col">
      {title && (
        <div className="px-6 h-14 flex items-center border-b border-border01 w-full">
          <span className="text-sm font-medium text-dim">{title}</span>
        </div>
      )}
      <div className="flex min-h-40 items-center justify-center p-6 gap-2.5">
        {children}
      </div>
    </div>
  );
}
