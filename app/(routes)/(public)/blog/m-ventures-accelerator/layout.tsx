import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Girlified - Girlified Selected for the M Ventures Accelerator',
  description:
    'Selected for the $30,000 M Ventures Accelerator to advance next-generation sustainable menstrual technology.',
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
    'United Nations',
  ],
  openGraph: {
    title: 'Girlified Selected for the M Ventures Accelerator',
    description:
      'Selected for the $30,000 M Ventures Accelerator to advance next-generation sustainable menstrual technology.',
    url: 'https://girlified.co/blog/m-ventures-accelerator',
    siteName: 'Girlified',
    type: 'article',
    publishedTime: '2026-07-24',
    images: [
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/edcbcc49-772d-4420-98ff-05cbcfb2c0d4.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/edcbcc49-772d-4420-98ff-05cbcfb2c0d4.jpeg',
        width: 300,
        height: 200,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/1115427f-73da-49f6-b206-9b38cce0bc08.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/1115427f-73da-49f6-b206-9b38cce0bc08.jpeg',
        width: 300,
        height: 300,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/3b8997b9-4aa0-4d76-a50a-2760fb6650bb.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/3b8997b9-4aa0-4d76-a50a-2760fb6650bb.jpeg',
        alt: 'Girlified Banner',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/3b8997b9-4aa0-4d76-a50a-2760fb6650bb.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/3b8997b9-4aa0-4d76-a50a-2760fb6650bb.jpeg',
        alt: 'Girlified Banner',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@girlified',
    creator: '@girlified',
    title: 'Girlified Selected for the M Ventures Accelerator',
    description:
      'Selected for the $30,000 M Ventures Accelerator to advance next-generation sustainable menstrual technology.',
    images: [
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/edcbcc49-772d-4420-98ff-05cbcfb2c0d4.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/edcbcc49-772d-4420-98ff-05cbcfb2c0d4.jpeg',
        width: 300,
        height: 200,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/1115427f-73da-49f6-b206-9b38cce0bc08.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/1115427f-73da-49f6-b206-9b38cce0bc08.jpeg',
        width: 300,
        height: 300,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/3b8997b9-4aa0-4d76-a50a-2760fb6650bb.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/3b8997b9-4aa0-4d76-a50a-2760fb6650bb.jpeg',
        alt: 'Girlified Banner',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/3b8997b9-4aa0-4d76-a50a-2760fb6650bb.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/3b8997b9-4aa0-4d76-a50a-2760fb6650bb.jpeg',
        alt: 'Girlified Banner',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
