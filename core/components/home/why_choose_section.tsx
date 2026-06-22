'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Container, Grid, Image, Stack, Text, Title } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const WhyChooseSection = () => {
  return (
    <Box
      component="section"
      id="why-choose"
      py={{ base: 80, md: 120 }}
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Background Grid Pattern */}
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

      {/* Decorative background radial light */}
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 15, 0],
          scale: [1, 1.08, 0.94, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '40%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
          {/* Left Side: Animated Mockup Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 500,
                    borderRadius: 24,
                    overflow: 'visible', // allow floating elements to overflow slightly
                  }}
                >
                  {/* Floating Leaf (Top-Left) */}
                  <motion.svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                      duration: 5.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '-15px',
                      zIndex: 3,
                      opacity: 0.25,
                    }}
                  >
                    <path
                      d="M12 2 C17.5 2 22 6.5 22 12 C22 17.5 17.5 22 12 22 C12 22 10 18 10 12 C10 6 12 2 12 2 Z"
                      stroke="#FF007F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2 V22"
                      stroke="#FF007F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </motion.svg>

                  {/* Floating Sparkle (Top-Right) */}
                  <motion.svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="#FFE066"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.3, 0.7, 0.3],
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      top: '10%',
                      right: '-20px',
                      zIndex: 3,
                    }}
                  >
                    <path d="M12 2 L14.5 8.5 L21 11 L14.5 13.5 L12 20 L9.5 13.5 L3 11 L9.5 8.5 Z" />
                  </motion.svg>

                  {/* Floating Droplet (Bottom-Left) */}
                  <motion.svg
                    width="28"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      y: [0, 8, 0],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '-25px',
                      zIndex: 3,
                      opacity: 0.25,
                    }}
                  >
                    <path
                      d="M12 2 C12 2 6 10 6 14 C6 17.3 8.7 20 12 20 C15.3 20 18 17.3 18 14 C18 10 12 2 12 2 Z"
                      stroke="#FF007F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>

                  <Box
                    style={{
                      position: 'relative',
                      width: '100%',
                      borderRadius: 24,
                      overflow: 'hidden',
                      // subtle shadow to make the white background mockup stand out
                      boxShadow: '0 20px 50px rgba(0,0,0,0.04), 0 0 30px rgba(255, 0, 127, 0.02)',
                      border: '1px solid rgba(255, 0, 127, 0.05)',
                    }}
                  >
                    <Image
                      src="/images/product/image_pad_2.jpg"
                      alt="Girlified Sanitary Pad Packaging Mockup"
                      style={{
                        width: '100%',
                        height: '450px',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          </Grid.Col>

          {/* Right Side: Modernized Typography & Content */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl" align="flex-start">
              {/* Modernized Top Indicator */}
              <Box
                style={{
                  width: 80,
                  height: 4,
                  backgroundColor: '#FF007F',
                  borderRadius: 10,
                }}
              />

              {/* Serif Header */}
              <Title
                order={2}
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-1.5px',
                  color: '#0C090B',
                  fontFamily: 'Playfair Display, Georgia, serif',
                }}
              >
                Why Choose
                <br />
                Girlified?
              </Title>

              {/* Main Description */}
              <Text
                size="md"
                style={{
                  lineHeight: 1.7,
                  color: 'rgba(12, 9, 11, 0.75)',
                  letterSpacing: '-0.3px',
                }}
              >
                Are you tired of being discomforted by your favorite sanitary pad brand? We’ve got
                you covered with an exciting and very comfortable sanitary pad that keeps you assured
                while giving you the unique feeling of saving our planet from plastic waste.
              </Text>

              {/* Quote Highlight */}
              <Text
                fw={700}
                style={{
                  fontSize: '1.15rem',
                  fontStyle: 'italic',
                  color: '#FF007F',
                  letterSpacing: '-0.2px',
                  lineHeight: 1.5,
                  borderLeft: '4px solid #FF007F',
                  paddingLeft: 16,
                }}
              >
                “Maximum comfort, excellent length, protects all day long.”
              </Text>

              {/* Premium Button */}
              <Link href="/our-story">
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
                    boxShadow: '0 4px 20px rgba(255, 0, 127, 0.25)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 0, 127, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 0, 127, 0.25)';
                  }}
                >
                  Read More <IconArrowRight size={16} />
                </Box>
              </Link>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseSection;
