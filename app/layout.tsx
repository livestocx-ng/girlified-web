import React from 'react';
import { Outfit, Inter } from 'next/font/google';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';
import './global.css';
import { theme } from '@/core/themes';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { ClientLayout } from '@/core/components/layout/clientLayout';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Girlified – Plant-Based Eco-Friendly Sanitary Pads',
  description:
    'Revolutionizing period health with sanitary pads made from upcycled banana stem fiber. Comfortable, highly absorbent, chemical-free, and completely plastic-free.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps} className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ClientLayout>{children}</ClientLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
