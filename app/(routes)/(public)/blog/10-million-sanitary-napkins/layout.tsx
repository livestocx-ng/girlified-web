import type { Metadata } from 'next';

const title = '10 Million Sanitary Napkins Every Year — Now Achievable';
const description =
  'A new automated production line puts period dignity within reach for millions and cuts plastic waste at scale. Girlified now produces 30,000 sanitary napkins daily—scaling impact 50×.';
const url = 'https://girlified.co/blog/10-million-sanitary-napkins';

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
    '10 Million Sanitary Napkins',
    'Manufacturing Milestone',
    'Automated Production',
    'Period Poverty',
    'Afri-plastics Challenge',
    'OSV Fellowship',
    'Banana Stem Fibre',
    'Biodegradable Pads',
    'Plastic-free Period Care',
    'Menstrual Health',
    'Sub-Saharan Africa',
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: 'Girlified',
    type: 'article',
    publishedTime: '2024-06-01',
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
