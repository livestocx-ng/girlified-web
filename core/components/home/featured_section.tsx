'use client';

import { motion } from 'framer-motion';
import { Box, Button, Container, Image, Stack, Text, Title, Badge } from '@mantine/core';
import { IconExternalLink, IconVideo, IconPlayerPlay } from '@tabler/icons-react';

const FeaturedSection = () => {
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

      {/* Decorative Radial Glowing Orbs */}
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
          {/* Header */}
          <Stack align="center" gap="md">
            {/* <Badge
              size="lg"
              radius="xl"
              style={{
                background: 'rgba(255, 0, 127, 0.08)',
                color: '#FF007F',
                border: '1px solid rgba(255, 0, 127, 0.15)',
                fontWeight: 700,
                letterSpacing: '1px',
              }}
            >
              MEDIA FEATURE
            </Badge> */}
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
              We got featured!
            </Title>
            <Text
              size="md"
              style={{
                lineHeight: 1.6,
                maxWidth: 680,
                letterSpacing: '-0.3px',
                color: 'rgba(12, 9, 11, 0.7)',
              }}
            >
              Our work, featured by Deutsche Welle (DW), where our co-founder, William Oghenekevwe Emadago, discussed our core mission at the heart of Girlified.
            </Text>
          </Stack>

          {/* Video Player Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%' }}
          >
            <Box
              component="a"
              href="https://www.dw.com/en/period-poverty-how-northern-nigeria-is-tackling-stigma/video-73931799"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%', // 16:9 Aspect Ratio
                borderRadius: 24,
                overflow: 'hidden',
                backgroundColor: '#000000',
                border: '1px solid rgba(255, 0, 127, 0.25)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.08), 0 0 40px rgba(255, 0, 127, 0.04)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  (img as HTMLElement).style.transform = 'scale(1.03)';
                }
                const playBtn = e.currentTarget.querySelector('.play-btn-wrapper');
                if (playBtn) {
                  (playBtn as HTMLElement).style.transform = 'translate(-50%, -50%) scale(1.1)';
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) {
                  (img as HTMLElement).style.transform = 'scale(1)';
                }
                const playBtn = e.currentTarget.querySelector('.play-btn-wrapper');
                if (playBtn) {
                  (playBtn as HTMLElement).style.transform = 'translate(-50%, -50%) scale(1)';
                }
              }}
            >
              {/* Background Thumbnail Image */}
              <Image
                src="/images/featured/image_featured_1.png"
                alt="DW Featured Video Thumbnail"
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

              {/* Dark Overlay */}
              <Box
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(12, 9, 11, 0.15)',
                  pointerEvents: 'none',
                }}
              />

              {/* Modern Pulse Play Button */}
              <Box
                className="play-btn-wrapper"
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
                {/* Visual pulse rings */}
                <Box
                  style={{
                    position: 'absolute',
                    inset: -8,
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 0, 127, 0.3)',
                    animation: 'pulse-ring 2s infinite',
                  }}
                />
                
                <IconPlayerPlay size={36} color="#FF007F" style={{ marginLeft: 4, fill: '#FF007F' }} />
              </Box>

              {/* CSS Injection for Pulse Animation */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes pulse-ring {
                  0% { transform: scale(0.95); opacity: 0.8; }
                  50% { transform: scale(1.1); opacity: 0.4; }
                  100% { transform: scale(1.2); opacity: 0; }
                }
              `}} />
            </Box>
          </motion.div>

          {/* Action Button */}
          <Button
            component="a"
            href="https://www.dw.com/en/period-poverty-how-northern-nigeria-is-tackling-stigma/video-73931799"
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            color="pink"
            rightSection={<IconExternalLink size={16} />}
            leftSection={<IconVideo size={16} />}
            styles={{
              root: {
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255, 0, 127, 0.05)',
                },
              },
            }}
          >
            Watch directly on DW News
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default FeaturedSection;
