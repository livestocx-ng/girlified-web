'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';
import { IconArrowRight, IconClock, IconNews } from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core';
import { blogCategories, blogPosts } from '@/core/utilities';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const PINK = '#FF007F';
const PINK_LIGHT = 'rgba(255, 0, 127, 0.08)';
const PINK_BORDER = 'rgba(255, 0, 127, 0.14)';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

const postCovers: Record<string, { src: string; alt: string }> = {
  'girlified-women-and-girls-engagement': {
    src: '/images/blog/IMG_7107-1-1536x916.jpg',
    alt: 'Women and girls engagement focus group discussion in Rankyeng Village',
  },
  'empowering-girls-on-international-day-of-the-girl-child': {
    src: '/images/blog/idgc/idgc_hero.jpg',
    alt: 'International Day of the Girl Child celebration event',
  },
  '10-million-sanitary-napkins': {
    src: '/images/blog/10-million/machine.jpg',
    alt: 'Girlified high-output sanitary napkin production machine',
  },
  'girlified-x-mit': {
    src: '/images/blog/girlified-x-mit/partnership.jpg',
    alt: 'Girlified and MIT Sloan SEID strategic partnership',
  },
  'm-ventures-accelerator': {
    src: '/images/blog/m-ventures/image_m-ventures.jpg',
    alt: 'Girlified research team in lab coats presenting sanitary pads and plant-fiber material',
  },
};

const categoryColors: Record<string, { bg: string; color: string }> = {
  Community: { bg: PINK_LIGHT, color: PINK },
  Impact: { bg: 'rgba(5, 150, 105, 0.1)', color: '#059669' },
  Innovation: { bg: 'rgba(67, 56, 202, 0.1)', color: '#4338CA' },
  Partnership: { bg: 'rgba(163, 31, 52, 0.1)', color: '#A31F34' },
};

const BlogCard = ({
  slug,
  title,
  excerpt,
  category,
  readTime,
  featured = false,
}: (typeof blogPosts)[0] & { featured?: boolean }) => {
  const cover = postCovers[slug];
  const catStyle = categoryColors[category] ?? categoryColors.Community;

  return (
    <Box
      component={Link}
      href={`/blog/${slug}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        height: '100%',
      }}
    >
      <Box
        h="100%"
        style={{
          borderRadius: featured ? 24 : 20,
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          border: `1px solid ${PINK_BORDER}`,
          backdropFilter: 'blur(10px)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
        className="blog-card"
      >
        <Box
          style={{
            position: 'relative',
            aspectRatio: featured ? '21 / 9' : '16 / 10',
            overflow: 'hidden',
          }}
        >
          {cover && (
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes={featured ? '(max-width: 768px) 100vw, 1200px' : '(max-width: 768px) 100vw, 400px'}
              style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
              className="blog-card-image"
            />
          )}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: featured
                ? 'linear-gradient(to top, rgba(12, 9, 11, 0.75) 0%, transparent 55%)'
                : 'linear-gradient(to top, rgba(12, 9, 11, 0.35) 0%, transparent 40%)',
            }}
          />
          <Badge
            radius="xl"
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              backgroundColor: catStyle.bg,
              color: catStyle.color,
              border: `1px solid ${catStyle.color}22`,
              fontWeight: 700,
              backdropFilter: 'blur(8px)',
            }}
          >
            {category}
          </Badge>
        </Box>

        <Stack gap="sm" p={featured ? 'xl' : 'lg'}>
          <Title
            order={featured ? 2 : 3}
            lineClamp={featured ? 2 : 3}
            style={{
              fontFamily: playfair.style.fontFamily,
              fontSize: featured ? 'clamp(1.25rem, 2.5vw, 1.65rem)' : '1.1rem',
              fontWeight: 700,
              color: INK,
              lineHeight: 1.25,
            }}
          >
            {title}
          </Title>
          <Text size="sm" lineClamp={featured ? 3 : 2} style={{ lineHeight: 1.65, color: MUTED }}>
            {excerpt}
          </Text>
          <Group justify="space-between" align="center" mt="xs">
            <Group gap={6}>
              <IconClock size={14} color={PINK} />
              <Text size="xs" fw={600} c={MUTED}>
                {readTime}
              </Text>
            </Group>
            <Group gap={4} c={PINK}>
              <Text size="sm" fw={700}>
                Read article
              </Text>
              <IconArrowRight size={16} />
            </Group>
          </Group>
        </Stack>
      </Box>

      <style jsx global>{`
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(255, 0, 127, 0.1);
        }
        .blog-card:hover .blog-card-image {
          transform: scale(1.04);
        }
      `}</style>
    </Box>
  );
};

const BlogPage = () => {
  // Default active filter includes every blog category (All).
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => ['All', ...blogCategories], []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return blogPosts.filter((post) => blogCategories.includes(post.category));
    }

    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <Box
      pos="relative"
      style={{
        minHeight: '100vh',
        backgroundColor: '#FBF6EE',
      }}
    >
      <Box
        pos="absolute"
        inset={0}
        style={{
          zIndex: 0,
          backgroundImage: `linear-gradient(${PINK_BORDER} 1px, transparent 1px),
            linear-gradient(90deg, ${PINK_BORDER} 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />

      <Container
        size="xl"
        pt={{ base: 120, sm: 140 }}
        pb={{ base: 56, sm: 80 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Stack gap={48}>
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Stack gap="lg" maw={720}>
              <Badge
                radius="xl"
                size="lg"
                leftSection={<IconNews size={14} />}
                style={{
                  backgroundColor: PINK_LIGHT,
                  color: PINK,
                  border: `1px solid ${PINK_BORDER}`,
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                }}
              >
                Girlified Blog
              </Badge>

              <Title
                order={1}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.6px',
                  lineHeight: 1.1,
                  color: INK,
                }}
              >
                Stories of impact, innovation &amp; community
              </Title>

              <Text size="lg" style={{ lineHeight: 1.65, color: MUTED }}>
                Field insights, manufacturing milestones, partnerships, and the people powering biodegradable
                menstrual health across Africa.
              </Text>
            </Stack>
          </motion.div>

          {/* Category filter */}
          <Group gap="sm" wrap="wrap">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <UnstyledButton
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  px="md"
                  py={8}
                  style={{
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                    color: isActive ? 'white' : MUTED,
                    backgroundColor: isActive ? PINK : 'rgba(255, 255, 255, 0.7)',
                    border: `1px solid ${isActive ? PINK : PINK_BORDER}`,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {category}
                </UnstyledButton>
              );
            })}
          </Group>

          {/* All filtered posts */}
          {filteredPosts.length > 0 ? (
            <Grid gutter="lg">
              {filteredPosts.map((post, index) => (
                <Grid.Col
                  key={post.slug}
                  span={index === 0 ? 12 : { base: 12, sm: 6, lg: 4 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    style={{ height: '100%' }}
                  >
                    <BlogCard {...post} featured={index === 0} />
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          ) : (
            <Box
              py={64}
              ta="center"
              style={{
                borderRadius: 20,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: `1px solid ${PINK_BORDER}`,
              }}
            >
              <Text c={MUTED}>No articles in this category yet.</Text>
            </Box>
          )}

          {/* Newsletter-style CTA strip */}
          <Box
            px={{ base: 'lg', sm: 'xl' }}
            py={{ base: 'xl', sm: 40 }}
            style={{
              borderRadius: 24,
              background: `linear-gradient(135deg, ${PINK} 0%, #CC0066 100%)`,
              color: 'white',
            }}
          >
            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Stack gap="sm">
                  <Title order={2} style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.4rem', color: 'white' }}>
                    Want to partner or support our mission?
                  </Title>
                  <Text style={{ lineHeight: 1.65, color: 'rgba(255, 255, 255, 0.85)' }}>
                    Reach out for collaborations, bulk orders, community outreach, or investment conversations.
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Button
                  component={Link}
                  href="/contact-us"
                  radius="xl"
                  size="md"
                  fullWidth
                  rightSection={<IconArrowRight size={16} />}
                  style={{ backgroundColor: 'white', color: PINK }}
                >
                  Get in Touch
                </Button>
              </Grid.Col>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogPage;
