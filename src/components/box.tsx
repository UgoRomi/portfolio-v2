import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  icon?: React.ReactNode;
}

export default function Box({ className, children, icon }: Props) {
  return (
    <div
      className={cn('relative break-all rounded-lg p-8 text-4xl', className)}
    >
      {!!icon && <span className='absolute top-1 right-1'>{icon}</span>}
      {children}
    </div>
  );
}
