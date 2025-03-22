import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CloudFlow - Modern SaaS Platform',
  description: 'Streamline your workflow with CloudFlow - The all-in-one SaaS solution for modern teams',
  keywords: ['SaaS', 'Cloud Platform', 'Workflow Management', 'Team Collaboration'],
  openGraph: {
    title: 'CloudFlow - Modern SaaS Platform',
    description: 'Streamline your workflow with CloudFlow - The all-in-one SaaS solution for modern teams',
    url: 'https://cloudflow.com',
    siteName: 'CloudFlow',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
        width: 1200,
        height: 630,
        alt: 'CloudFlow Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}