import type { Metadata } from 'next';
import '@/globals.css';

export const metadata: Metadata = {
  title: 'Readonly Page',
  description: 'Render your document',
};

export default function RootLayout({ children }: Readonly<LayoutProps<'/'>>) {
  return children;
}
