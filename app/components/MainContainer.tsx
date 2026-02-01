import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export function MainContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx('max-w-8xl mx-auto px-4 lg:px-8', className)}>
      {children}
    </div>
  );
}
