import { ReactNode } from 'react';
import { MainContainer } from '@/components/MainContainer';

export default async function LocaleLayout({
  children,
  sidebar,
}: Readonly<LayoutProps<'/[locale]'>> & { sidebar: ReactNode }) {
  return (
    <MainContainer className="flex">
      <div className="w-65">{sidebar}</div>
      <div className="flex-1">{children}</div>
    </MainContainer>
  );
}
