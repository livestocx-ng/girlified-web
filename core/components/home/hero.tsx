import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { IconSparkles } from '@tabler/icons-react';
import { Box, Button, Center, Container, Group, Stack, Text, Title } from '@mantine/core';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 5}s`,
        size: 16 + Math.random() * 16,
      })),
    []
  );

  return (
    <Box
      component="section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Image Background */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/images/image-women.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #55555580, rgba(255, 68, 162, 0.4))',
          }}
        />
      </Box>

      {/* Content */}
      <Container size="lg" style={{ position: 'relative', zIndex: 10 }}>
        <Stack align="center" gap="lg" style={{ textAlign: 'center', color: 'white' }}>
          <Title
            order={1}
            style={{
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            }}
          >
            Empowering Girls, Period.
          </Title>
          <Text
            style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.75rem)',
              maxWidth: 900,
            }}
          >
            We're redefining menstrual care with comfort, confidence, and sustainability.
          </Text>
          <Group justify="center" gap="md" wrap="wrap">
            <Link href="/products" passHref>
              <Button
                size="lg"
                radius="xl"
                variant="gradient"
                gradient={{ from: 'pink', to: 'grape', deg: 90 }}
                style={{
                  paddingInline: 24,
                  paddingBlock: 16,
                  fontSize: 18,
                  fontWeight: 600,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                }}
                component="a"
              >
                Learn More
              </Button>
            </Link>
            {/* <Link href="/about" passHref>
              <Button
                size="lg"
                radius="xl"
                variant="outline"
                color="white"
                style={{
                  paddingInline: 24,
                  paddingBlock: 16,
                  fontSize: 18,
                  fontWeight: 600,
                  borderWidth: 2,
                  color: 'white',
                }}
                component="a"
              >
                Learn More
              </Button>
            </Link> */}
          </Group>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      <Box
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          animation: 'bounce 2s infinite',
        }}
      >
        <Center
          style={{
            width: 24,
            height: 40,
            border: '2px solid white',
            borderRadius: 999,
            padding: 8,
          }}
        >
          <Box
            style={{
              width: 4,
              height: 12,
              background: 'white',
              borderRadius: 999,
              animation: 'pulse 1.5s infinite',
            }}
          />
        </Center>
      </Box>

      {/* simple keyframes for float/bounce/pulse */}
      <style>{`
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        @keyframes bounce { 0%, 100% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, -8px); } }
        @keyframes pulse { 0% { opacity: 1; transform: translateY(0); } 50% { opacity: 0.4; transform: translateY(6px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>
    </Box>
  );
};

export default Hero;
