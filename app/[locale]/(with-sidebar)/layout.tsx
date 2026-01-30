import { ReactNode } from 'react';

export default async function LocaleLayout({
  children,
  sidebar,
}: Readonly<LayoutProps<'/[locale]'>> & { sidebar: ReactNode }) {
  return (
    <>
      {sidebar}
      {children}
    </>
  );
}
