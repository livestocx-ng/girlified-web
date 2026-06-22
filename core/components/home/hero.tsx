'use client';

import Link from 'next/link';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';
import { Sponsors } from '@/core/utilities';
import { IconArrowRight } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Container, Grid, Group, Image, Text, Title } from '@mantine/core';

const heroImages = [
  '/images/hero/image_hero_1.jpg',
  '/images/hero/image_hero_2.jpg',
  '/images/hero/image_hero_3.jpg',
  '/images/hero/image_hero_4.jpg',
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: easeOut },
  },
};

const statsGroupVariants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      ease: easeOut,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const statsItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const ctaGroupVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: easeOut,
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const ctaItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const heroImageTransition = {
  opacity: { duration: 1.4, ease: easeOut },
  scale: { duration: 6, ease: 'linear' as const },
};

const heroImageVariants = {
  enter: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: heroImageTransition,
  },
  exit: {
    opacity: 0,
    scale: 1.04,
    transition: {
      opacity: { duration: 1.4, ease: easeOut },
      scale: { duration: 1.4, ease: easeOut },
    },
  },
};

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box>
      {/* ─── HERO-SECTION ─── */}
      <Box
        component="section"
        id="home"
        style={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 100,
          backgroundColor: '#0C090B',
        }}
      >
        {/* Background Images with Fade Transition */}
        <Box style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={currentImageIndex}
              variants={heroImageVariants}
              initial="enter"
              animate="visible"
              exit="exit"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${heroImages[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                pointerEvents: 'none',
                filter: 'brightness(0.9) contrast(1.05)',
                willChange: 'opacity, transform',
              }}
            />
          </AnimatePresence>
        </Box>

        {/* Static Gradient Overlay */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to bottom, rgba(12, 9, 11, 0.3) 0%, rgba(21, 14, 19, 0.5) 85%, #0C090B90 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Decorative Glowing Orbs */}
        <motion.div
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            background: 'radial-gradient(circle, rgba(255, 0, 127, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <motion.div
          animate={{
            x: [0, -15, 20, 0],
            y: [0, 25, -15, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '-10%',
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle, rgba(255, 183, 213, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Main hero content */}
        <Box
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            paddingBottom: 80,
            zIndex: 2,
            position: 'relative',
          }}
        >
          <Container size="xl" w="100%">
            <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
              {/* LEFT — Content */}
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <motion.div
                  variants={heroContainerVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
                >
                  {/* Headline */}
                  <motion.div variants={heroItemVariants}>
                    <Title
                      order={1}
                      style={{
                        fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)',
                        lineHeight: 1.1,
                        fontWeight: 800,
                        letterSpacing: '-2px',
                      }}
                    >
                      <motion.span
                        style={{
                          display: 'block',
                          background:
                            'linear-gradient(135deg, #ffffff 0%, #FFB7D5 25%, #FF007F 50%, #FFB7D5 75%, #ffffff 100%)',
                          backgroundSize: '200% 200%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                        animate={{
                          backgroundPosition: ['100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        Girlified Sanitary Pads.
                      </motion.span>
                    </Title>
                  </motion.div>

                  {/* Sub-headline */}
                  {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                  >
                    <Text
                      size="lg"
                      style={{
                        color: 'rgba(255,255,255,0.85)',
                        lineHeight: 1.6,
                        maxWidth: 580,
                        letterSpacing: '-0.3px',
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                      }}
                    >
                      Revolutionizing period health with sanitary pads made from upcycled banana
                      stem fiber. Comfortable, highly absorbent, chemical-free, and{' '}
                      <span style={{ color: '#FF007F', fontWeight: 700 }}>
                        completely plastic-free
                      </span>
                      .
                    </Text>
                  </motion.div> */}
                  <motion.div
                    variants={statsGroupVariants}
                    style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}
                  >
                    <motion.div variants={statsItemVariants}>
                      <Text
                        size="xs"
                        fw={800}
                        style={{
                          color: '#FFB7D5',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                        }}
                      >
                        Over 2 Million Pads Produced
                      </Text>
                    </motion.div>
                    <motion.div variants={statsItemVariants}>
                      <Title
                        order={2}
                        style={{
                          fontSize: '3.6rem',
                          fontWeight: 900,
                          lineHeight: 1,
                          color: '#FF007F',
                          letterSpacing: '-2px',
                          margin: '8px 0',
                        }}
                      >
                        <CountUp end={70000} duration={3} separator="," />+
                      </Title>
                    </motion.div>
                    <motion.div variants={statsItemVariants}>
                      <Text
                        size="md"
                        fw={600}
                        style={{
                          color: '#FFB7D5',
                          letterSpacing: '-0.2px',
                        }}
                      >
                        Women Impacted
                      </Text>
                    </motion.div>
                  </motion.div>

                  {/* CTAs */}
                  <motion.div
                    variants={ctaGroupVariants}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}
                  >
                    <motion.div variants={ctaItemVariants}>
                      <Link href="/contact-us">
                        <Box
                          component="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '16px 36px',
                            background: 'linear-gradient(135deg, #FF007F 0%, #CC0066 100%)',
                            border: 'none',
                            borderRadius: 100,
                            color: 'white',
                            fontWeight: 600,
                            fontSize: 15,
                            letterSpacing: '-0.3px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 25px rgba(255, 0, 127, 0.45)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 6px 30px rgba(255, 0, 127, 0.65)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 25px rgba(255, 0, 127, 0.45)';
                          }}
                        >
                          Shop Sanitary Pads <IconArrowRight size={16} />
                        </Box>
                      </Link>
                    </motion.div>
                    <motion.div variants={ctaItemVariants}>
                      <Link href="/smart-pad">
                        <Box
                          component="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '15px 36px',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 0, 127, 0.4)',
                            borderRadius: 100,
                            color: '#FFB7D5',
                            fontWeight: 600,
                            fontSize: 15,
                            letterSpacing: '-0.3px',
                            cursor: 'pointer',
                            WebkitBackdropFilter: 'blur(12px)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 127, 0.2)';
                            e.currentTarget.style.borderColor = '#FF007F';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                            e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.4)';
                          }}
                        >
                          Explore Smart Pad
                        </Box>
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Grid.Col>

              {/* RIGHT — Hero Image & Badges */}
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* ─── Sponsor / Backer Ticker ─── */}
      <Box
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          // background: 'rgba(0,0,0,0.4)',
          padding: '28px 0',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to bottom, rgba(12, 9, 11, 0.3) 0%, rgba(21, 14, 19, 0.5) 75%, #0C090B 100%) #fff',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            pointerEvents: 'none',
            zIndex: 0,
            filter: 'brightness(0.6) contrast(1.05)',
          }}
        />

        <Container size="xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: easeOut }}
          >
            <Group gap="xs" justify="center" mb={10}>
              <Text
                size="xs"
                fw={700}
                c="gray.6"
                style={{ textTransform: 'uppercase', letterSpacing: '2px' }}
              >
                Supported & Backed By
              </Text>
            </Group>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: easeOut }}
            style={{ overflow: 'hidden' }}
          >
            <motion.div
              style={{
                display: 'flex',
                width: 'max-content',
                alignItems: 'center',
              }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
            >
            {[...Sponsors, ...Sponsors].map((sponsor, index) => (
              <Box
                key={`${sponsor.name}-${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginRight: 120,
                }}
              >
                <Image
                  height={66}
                  src={sponsor.image}
                  style={{ objectFit: 'contain' }}
                  alt={sponsor.name}
                />
              </Box>
            ))}
            </motion.div>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
