import type { Metadata } from 'next';

const description =
  "Peer-reviewed scientific research guiding sustainable, plant-based solutions for women's health.";

export const metadata: Metadata = {
  title: 'Girlified - Research',
  description,
  keywords: [
    'Girlified',
    'Banana Stem Fiber',
    'Research Papers',
    'Superabsorbent Composites',
    'Biodegradable Pads',
    'Menstrual Health',
    'Plant-based Period Care',
    'Fibre Science',
  ],
  openGraph: {
    title: 'Girlified - Research',
    description,
    url: 'https://girlified.co/research',
    siteName: 'Girlified',
    type: 'website',
    images: [
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
    ],
  },
  twitter: {
    card: 'summary',
    site: '@girlified',
    creator: '@girlified',
    title: 'Girlified - Research',
    description,
    images: [
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
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
