import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Girlified - Blog',
  description: 'More Comfort, Less Expensive Periods, Less Pollution',
  keywords: ['Girlified', 'Nigeria', 'Sanitary', 'Pads', 'Biodegradable'],
  other: {
    'facebook-domain-verification': 'yy2fxudmyl6e8nxtl2zjx9lss8j8dl',
  },
  openGraph: {
    title: 'Girlified - Blog',
    description: 'More Comfort, Less Expensive Periods, Less Pollution',
    url: 'https://girlified.com.ng/',
    siteName: 'Girlified',
    type: 'website',
    images: [
      {
        url: 'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        secureUrl:
          'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        width: 300,
        height: 200,
      },
      {
        url: 'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        secureUrl:
          'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        width: 300,
        height: 300,
      },
      {
        url: 'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        secureUrl:
          'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        alt: 'Girlified Banner',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        secureUrl:
          'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        alt: 'Girlified Banner',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@girlified',
    creator: '@girlified',
    title: 'Girlified - Blog',

    description: 'More Comfort, Less Expensive Periods, Less Pollution',
    images: [
      {
        url: 'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        secureUrl:
          'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        width: 300,
        height: 200,
      },
      {
        url: 'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        secureUrl:
          'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        width: 300,
        height: 300,
      },
      {
        url: 'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        secureUrl:
          'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        alt: 'Girlified Banner',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        secureUrl:
          'https://infra.livestocx.xyz/v1/account/upload/file?fileName=girlified-thumbnail%20200by300',
        alt: 'Girlified Banner',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
