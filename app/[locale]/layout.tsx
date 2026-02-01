import clsx from 'clsx';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { LazyLink } from '@/components/LazyLink';
import { MainContainer } from '@/components/MainContainer';
import { SafeArea } from '@/components/SafeArea';

const robotoSans = Roboto({
  variable: '--font-sans',
  weight: ['100', '300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LayoutProps<'/[locale]'>>) {
  const { locale } = await params;
  if (locale.toLowerCase() !== 'en-us') {
    notFound();
  }

  const lang = locale.split('-')[0];

  return (
    <html lang={lang}>
      <body
        className={clsx(
          robotoSans.variable,
          robotoMono.variable,
          'font-sans',
          'antialiased'
        )}
      >
        <div className="border-b border-b-gray-200">
          <SafeArea bottom={false}>
            <MainContainer className="flex h-14 items-center lg:h-18">
              <LazyLink href={`/${locale}`} className="text-2xl font-medium">
                Readonly<span className="text-sm font-normal">.page</span>
              </LazyLink>
              <ul className="ml-12 hidden space-x-8 text-sm text-gray-600 sm:flex">
                <li>
                  <LazyLink href={`/${locale}/examples`}>Examples</LazyLink>
                </li>
                <li>
                  <LazyLink href={`/${locale}/docs`}>Docs</LazyLink>
                </li>
                <li>
                  <LazyLink href="/blog">Blog</LazyLink>
                </li>
              </ul>
            </MainContainer>
          </SafeArea>
        </div>
        <SafeArea top={false}>{children}</SafeArea>
        <div className="border-t border-t-gray-200 py-6">
          <MainContainer className="text-gray-500">
            © 2026 Readonly.page
          </MainContainer>
        </div>
      </body>
    </html>
  );
}
