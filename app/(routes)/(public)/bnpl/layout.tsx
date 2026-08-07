import type { Metadata } from 'next';

const title = 'Buy Now, Pay Later';
const description =
  'Girlified enables low-income women and girls to access essential menstrual products through an affordable Buy-Now-Pay-Later platform powered by a last-mile community distribution network.';
const url = 'https://girlified.co/bnpl';

const ogImages = [
  {
    url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/888ccd61-9aa4-4f4a-972e-fbc7eef12582.jpeg',
    secureUrl:
      'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/888ccd61-9aa4-4f4a-972e-fbc7eef12582.jpeg',
    width: 300,
    height: 200,
  },
  {
    url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/6f8d7d75-a746-4a4f-9836-db7a2ee92b52.jpeg',
    secureUrl:
      'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/6f8d7d75-a746-4a4f-9836-db7a2ee92b52.jpeg',
    width: 300,
    height: 300,
  },
  {
    url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/a1a978df-c4e6-4ddf-bf75-b877f5c6e40e.jpeg',
    secureUrl:
      'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/a1a978df-c4e6-4ddf-bf75-b877f5c6e40e.jpeg',
    alt: 'Girlified Banner',
    width: 1200,
    height: 630,
  },
  {
    url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/a1a978df-c4e6-4ddf-bf75-b877f5c6e40e.jpeg',
    secureUrl:
      'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/a1a978df-c4e6-4ddf-bf75-b877f5c6e40e.jpeg',
    alt: 'Girlified Banner',
  },
];

export const metadata: Metadata = {
  title: `Girlified - ${title}`,
  description,
  keywords: [
    'Girlified',
    'Buy Now Pay Later',
    'BNPL',
    'USSD',
    'Menstrual Health',
    'Period Poverty',
    'Nigeria',
    'Community Distribution',
    'NIN',
    'WhatsApp',
    'SMS',
  ],
  openGraph: {
    title: `Girlified - ${title}`,
    description,
    url,
    siteName: 'Girlified',
    type: 'website',
    images: ogImages,
  },
  twitter: {
    card: 'summary',
    site: '@girlified',
    creator: '@girlified',
    title: `Girlified - ${title}`,
    description,
    images: ogImages,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
