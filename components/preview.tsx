import { cn } from 'lib/utils';

export function Preview({
  children,
  title,
  source,
}: {
  children: React.ReactNode;
  title?: string;
  source?: React.ReactNode;
}) {
  return (
    <div className="relative w-full bg-surface01/60 ring ring-border02 rounded-3xl mb-6 flex flex-col">
      {title && (
        <div className="px-6 h-14 flex items-center border-b border-border01 w-full">
          <span className="text-sm font-medium text-dim">{title}</span>
        </div>
      )}
      <div className="flex min-h-40 items-center justify-center p-6 gap-2.5 flex-wrap">
        {children}
      </div>
      {source && (
        <div
          className={cn(
            'border-t border-border02 px-6 py-4 bg-surface01 rounded-b-3xl overflow-auto relative',
            '*:!bg-transparent *:mt-4',
            'max-h-72',
          )}
          dangerouslySetInnerHTML={{ __html: source }}
        />
      )}
    </div>
  );
}
