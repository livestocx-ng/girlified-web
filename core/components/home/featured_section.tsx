'use client';

import { useEffect, useState } from 'react';
import {
  IconArticle,
  IconExternalLink,
  IconPlayerPlay,
  IconVideo,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Button, Container, Image, Stack, Text, Title } from '@mantine/core';

const PINK = '#FF007F';
const INK = '#0C090B';
const AUTOPLAY_INTERVAL_MS = 6000;

const smoothEase = [0.45, 0, 0.2, 1] as const;

const slideTransition = {
  duration: 1,
  ease: smoothEase,
};

const slideVariants = {
  enter: {
    x: '100%',
  },
  center: {
    x: 0,
  },
  exit: {
    x: '-100%',
  },
};

const ctaTransition = {
  duration: 0.5,
  ease: smoothEase,
};

const ctaVariants = {
  enter: { opacity: 0, y: 10 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

type FeaturedMediaItem = {
  id: string;
  type: 'article' | 'video';
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
};

const featuredMediaItems: FeaturedMediaItem[] = [
  {
    id: 'global-citizen-waislitz',
    type: 'article',
    description:
      'Girlified wins the Global Citizen Waislitz People’s Choice Award 2026, recognizing our work turning agricultural waste into affordable sanitary pads.',
    href: 'https://www.globalcitizen.org/en/content/meet-the-winners-of-the-2026-global-citizen-waisli/',
    image: '/images/blog/waislitz-2026/global-citizen-winners.png',
    imageAlt:
      '2026 Global Citizen Waislitz Awards winners including Oghenekevwe William Emadago of Girlified',
    ctaLabel: 'Read on Global Citizen',
  },
  {
    id: 'dw-featured',
    type: 'video',
    description:
      'Our work, featured by Deutsche Welle (DW), where our co-founder, William Oghenekevwe Emadago, discussed our core mission at the heart of Girlified.',
    href: 'https://www.dw.com/en/period-poverty-how-northern-nigeria-is-tackling-stigma/video-73931799',
    image: '/images/featured/image_featured_1.png',
    imageAlt: 'DW feature on period poverty in Northern Nigeria',
    ctaLabel: 'Watch directly on DW News',
  },
];

const FeaturedMediaCard = ({ item }: { item: FeaturedMediaItem }) => {
  const isVideo = item.type === 'video';

  return (
    <Stack gap="lg" align="center" w="100%">
      <Text
        ta="center"
        size="md"
        maw={680}
        mx="auto"
        style={{
          lineHeight: 1.6,
          letterSpacing: '-0.3px',
          color: 'rgba(12, 9, 11, 0.7)',
        }}
      >
        {item.description}
      </Text>

      <Box
        component="a"
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="featured-media-card"
        style={{
          display: 'block',
          position: 'relative',
          width: '100%',
          paddingTop: '56.25%',
          borderRadius: 24,
          overflow: 'hidden',
          backgroundColor: '#000000',
          border: '1px solid rgba(255, 0, 127, 0.25)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.08), 0 0 40px rgba(255, 0, 127, 0.04)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          className="featured-media-image"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(12, 9, 11, 0.15)',
            pointerEvents: 'none',
          }}
        />

        {isVideo ? (
          <Box
            className="featured-play-btn"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.95)',
              border: '4px solid #FF007F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 25px rgba(255, 0, 127, 0.3)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 2,
            }}
          >
            <Box
              style={{
                position: 'absolute',
                inset: -8,
                borderRadius: '50%',
                border: '2px solid rgba(255, 0, 127, 0.3)',
                animation: 'featured-pulse-ring 2s infinite',
              }}
            />
            <IconPlayerPlay size={36} color="#FF007F" style={{ marginLeft: 4, fill: '#FF007F' }} />
          </Box>
        ) : (
          <Box
            className="featured-read-badge"
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '10px 16px',
              borderRadius: 999,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(255, 0, 127, 0.2)',
              boxShadow: '0 8px 24px rgba(12, 9, 11, 0.12)',
              zIndex: 2,
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <IconArticle size={18} color={PINK} />
            <Text size="sm" fw={700} c={INK}>
              Read article
            </Text>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

const FeaturedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = featuredMediaItems[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredMediaItems.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      id="featured"
      py={{ base: 80, md: 120 }}
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255, 0, 127, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 127, 0.01) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Box
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container size="lg" style={{ position: 'relative', zIndex: 2 }}>
        <Stack gap="xl" align="center" ta="center">
          <Stack align="center" gap="md">
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-1.5px',
                background: 'linear-gradient(135deg, #0C090B 0%, #CC0066 60%, #FF007F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Global Recognition
            </Title>
          </Stack>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%' }}
          >
            <Box pos="relative" w="100%" style={{ overflow: 'hidden' }}>
              <Box aria-hidden style={{ visibility: 'hidden', pointerEvents: 'none' }}>
                <FeaturedMediaCard item={activeItem} />
              </Box>

              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={activeItem.id}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={slideTransition}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    willChange: 'transform',
                  }}
                >
                  <FeaturedMediaCard item={activeItem} />
                </motion.div>
              </AnimatePresence>
            </Box>
          </motion.div>

          <Box style={{ overflow: 'hidden', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeItem.id}
                variants={ctaVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={ctaTransition}
              >
                <Button
                  component="a"
                  href={activeItem.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="subtle"
                  color="pink"
                  rightSection={<IconExternalLink size={16} />}
                  leftSection={
                    activeItem.type === 'video' ? <IconVideo size={16} /> : <IconArticle size={16} />
                  }
                  styles={{
                    root: {
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 0, 127, 0.05)',
                      },
                    },
                  }}
                >
                  {activeItem.ctaLabel}
                </Button>
              </motion.div>
            </AnimatePresence>
          </Box>
        </Stack>
      </Container>

      <style jsx global>{`
        @keyframes featured-pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .featured-media-card:hover .featured-media-image {
          transform: scale(1.03);
        }

        .featured-media-card:hover .featured-play-btn {
          transform: translate(-50%, -50%) scale(1.1);
        }

        .featured-media-card:hover .featured-read-badge {
          transform: translateY(-2px);
        }
      `}</style>
    </Box>
  );
};

export default FeaturedSection;
