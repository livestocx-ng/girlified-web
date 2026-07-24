'use client';

import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { IconCalendar, IconClock } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Anchor, Badge, Box, Container, Group, Stack, Text, Title } from '@mantine/core';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const ARTICLE_LINK = '#0044CC';
export const ARTICLE_BODY = '#555555';

export const BodyText = ({ children }: { children: React.ReactNode }) => (
  <Text
    component="p"
    style={{
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: ARTICLE_BODY,
      fontWeight: 400,
    }}
  >
    {children}
  </Text>
);

export const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Anchor
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    underline="always"
    style={{
      color: ARTICLE_LINK,
      fontWeight: 400,
      textUnderlineOffset: 2,
    }}
  >
    {children}
  </Anchor>
);

export const BodyImage = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => (
  <Box component="figure" m={0}>
    <Box
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 10',
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 760px" style={{ objectFit: 'cover' }} />
    </Box>
    {caption ? (
      <Text
        component="figcaption"
        size="sm"
        mt="sm"
        style={{ lineHeight: 1.5, color: 'rgba(85, 85, 85, 0.85)' }}
      >
        {caption}
      </Text>
    ) : null}
  </Box>
);

type BlogHeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  badge: string;
  date: string;
  readTime: string;
  objectPosition?: string;
};

export const BlogHero = ({
  imageSrc,
  imageAlt,
  title,
  badge,
  date,
  readTime,
  objectPosition = 'center',
}: BlogHeroProps) => (
  <Box
    component="section"
    style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden',
    }}
  >
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      priority
      sizes="100vw"
      style={{ objectFit: 'cover', objectPosition }}
    />
    <Box
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(180deg, rgba(12, 9, 11, 0.15) 0%, rgba(12, 9, 11, 0.35) 40%, rgba(12, 9, 11, 0.88) 100%)',
        pointerEvents: 'none',
      }}
    />

    <Container size="xl" pb={{ base: 40, sm: 56 }} style={{ position: 'relative', width: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <Stack gap="md" maw={720}>
          <Text
            fw={800}
            size="sm"
            tt="uppercase"
            style={{
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.92)',
            }}
          >
            Girlified
          </Text>

          <Title
            order={1}
            style={{
              fontFamily: playfair.style.fontFamily,
              fontSize: 'clamp(1.75rem, 4.2vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              lineHeight: 1.12,
              color: 'white',
            }}
          >
            {title}
          </Title>

          <Group gap="md" wrap="wrap" mt={4}>
            <Badge
              radius="sm"
              size="lg"
              style={{
                backgroundColor: 'rgba(15, 118, 110, 0.85)',
                color: 'white',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {badge}
            </Badge>
            <Group gap={6}>
              <IconCalendar size={15} color="rgba(255,255,255,0.7)" />
              <Text size="sm" fw={600} c="rgba(255,255,255,0.7)">
                {date}
              </Text>
            </Group>
            <Group gap={6}>
              <IconClock size={15} color="rgba(255,255,255,0.7)" />
              <Text size="sm" fw={600} c="rgba(255,255,255,0.7)">
                {readTime}
              </Text>
            </Group>
          </Group>
        </Stack>
      </motion.div>
    </Container>
  </Box>
);

export const BlogArticleShell = ({
  hero,
  children,
}: {
  hero: BlogHeroProps;
  children: React.ReactNode;
}) => (
  <Box style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', overflowX: 'hidden' }}>
    <BlogHero {...hero} />
    <Box style={{ backgroundColor: '#FFFFFF' }}>
      <Container size={860} py={{ base: 48, sm: 64 }}>
        <Stack gap="xl">{children}</Stack>
      </Container>
    </Box>
  </Box>
);
