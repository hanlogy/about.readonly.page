import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { LazyLink } from '@/components/LazyLink';

export function CTAButton({
  children,
  className,
  href,
}: PropsWithChildren<{ className?: string; href: string }>) {
  return (
    <LazyLink
      href={href}
      className={clsx(
        'flex h-12 items-center justify-center rounded-md border font-medium md:px-8',
        className
      )}
    >
      {children}
    </LazyLink>
  );
}
