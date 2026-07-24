import type { Metadata } from 'next';

const title = 'Girlified Selected for the M Ventures Accelerator';
const description =
  'Selected for the $30,000 M Ventures Accelerator to advance next-generation sustainable menstrual technology.';
const url = 'https://girlified.co/blog/m-ventures-accelerator';

const ogImages = [
  {
    url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/aee0c7bf-580d-417a-9007-cf7ca6b8dd6c.png',
    secureUrl:
      'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/aee0c7bf-580d-417a-9007-cf7ca6b8dd6c.png',
    width: 300,
    height: 200,
  },
  {
    url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/aee0c7bf-580d-417a-9007-cf7ca6b8dd6c.png',
    secureUrl:
      'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/aee0c7bf-580d-417a-9007-cf7ca6b8dd6c.png',
    width: 300,
    height: 300,
  },
  {
    url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/aee0c7bf-580d-417a-9007-cf7ca6b8dd6c.png',
    secureUrl:
      'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/aee0c7bf-580d-417a-9007-cf7ca6b8dd6c.png',
    alt: 'Girlified Banner',
    width: 1200,
    height: 630,
  },
  {
    url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/aee0c7bf-580d-417a-9007-cf7ca6b8dd6c.png',
    secureUrl:
      'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/aee0c7bf-580d-417a-9007-cf7ca6b8dd6c.png',
    alt: 'Girlified Banner',
  },
];

export const metadata: Metadata = {
  title: `Girlified - ${title}`,
  description,
  keywords: [
    'Girlified',
    'M Ventures',
    'M Ventures Accelerator',
    'Capital M',
    'Sanitation and Hygiene Fund',
    'Bopinc',
    'Biodegradable Pads',
    'Sustainable Menstrual Technology',
    'Menstrual Health',
    'West Africa',
    'Nigeria',
    'United Nations'
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: 'Girlified',
    type: 'article',
    publishedTime: '2026-07-24',
    images: ogImages,
  },
  twitter: {
    card: 'summary',
    site: '@girlified',
    creator: '@girlified',
    title,
    description,
    images: ogImages,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
