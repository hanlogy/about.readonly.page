'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { EllipsisIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import GitHubLogo from '@/public/images/github-logo-black.svg';
import { LazyLink } from './LazyLink';

export function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [navShown, setNavShown] = useState(false);

  const items = [
    { label: 'Examples', href: `/${locale}/examples` },
    { label: 'Docs', href: `/${locale}/docs` },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      {navShown && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-transparent"
          onClick={() => setNavShown(false)}
        ></div>
      )}
      <ul
        className={clsx(
          'ml-12 hidden flex-1 flex-col space-x-8 text-sm text-gray-600 sm:static sm:flex sm:flex-row sm:rounded-none sm:border-0 sm:bg-transparent sm:py-0',
          {
            'fixed top-12 right-2 z-50 flex! rounded-lg border border-gray-300 bg-white py-2':
              navShown,
          }
        )}
      >
        {items.map(({ label, href }) => {
          const selected = pathname.startsWith(href);

          return (
            <li key={label} className="w-full sm:w-auto">
              <LazyLink
                onClick={() => setNavShown(false)}
                className={clsx(
                  'flex h-10 items-center px-4 hover:text-gray-800',
                  'sm:px-0',
                  {
                    'font-semibold text-gray-800': selected,
                  }
                )}
                href={href}
              >
                {label}
              </LazyLink>
            </li>
          );
        })}
      </ul>
      <div className="flex-1 sm:hidden"></div>
      <a
        href="https://github.com/hanlogy/web.readonly.page"
        className="h-10 w-10 p-2"
      >
        <Image src={GitHubLogo} alt="GitHub Logo" />
      </a>
      <button onClick={() => setNavShown((e) => !e)} className="p-2 sm:hidden">
        <EllipsisIcon size={18} />
      </button>
    </>
  );
}
