import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
