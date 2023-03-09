import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  icon?: React.ReactNode;
}

export default function Box({ className, children, icon }: Props) {
  return (
    <div
      className={cn(
        'relative break-all rounded-xl p-8 text-4xl',
        className,
        !!icon ? 'flex gap-3' : ''
      )}
    >
      <span>{children}</span>
      {!!icon && <span>{icon}</span>}
    </div>
  );
}
