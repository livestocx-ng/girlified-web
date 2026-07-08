'use client';

import { useEffect, useRef } from 'react';
import { IconActivity, IconAlertOctagon, IconHeart, IconShieldCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const SmartPadPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const setSlowPlayback = () => {
      video.playbackRate = 1;
    };

    setSlowPlayback();
    video.addEventListener('loadedmetadata', setSlowPlayback);
    return () => video.removeEventListener('loadedmetadata', setSlowPlayback);
  }, []);

  const conditions = [
    {
      title: 'Endometriosis Screening',
      description:
        'Menstrual fluid contains local inflammatory markers and genetic material related to endometrial cell activity. We analyze these to offer an easy, non-invasive screening alternative to surgical laparoscopy.',
      icon: IconHeart,
      color: '#FF007F',
    },
    {
      title: 'Cervical & Endometrial Cancers',
      description:
        'Because menstrual blood contains naturally shed endometrial tissue, it serves as a rich source of biological data to check for cancer-specific DNA mutations, methylation patterns, and abnormal tumor markers.',
      icon: IconAlertOctagon,
      color: '#fb6704',
    },
    {
      title: 'PCOS & Hormonal Disruptions',
      description:
        'We map localized hormone profiles, metabolites, and immune indicators in menstrual fluid to characterize Polycystic Ovary Syndrome and general hormonal imbalances.',
      icon: IconActivity,
      color: '#e848ba',
    },
  ];

  const benefits = [
    '**Non-Invasive & Pain-Free**: No needles or venipuncture required. Simply analyze fluid collected naturally.',
    '**Specific to the Reproductive Tract**: Menstrual fluid provides direct, localized data from the uterine lining, offering better diagnostic resolution than peripheral venous blood.',
    '**Discreet & Accessible**: Complete sample collection from the comfort and privacy of your home.',
  ];

  return (
    <Box
      style={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Video Hero */}
      <Box
        component="section"
        style={{
          position: 'relative',
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          src="/images/smart-pad/smart-pad-demo_2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />

        <Box
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(to bottom, rgba(12, 9, 11, 0.72) 0%, rgba(12, 9, 11, 0.62) 48%, rgba(12, 9, 11, 0.9) 100%)',
          }}
        />

        <Container
          size="xl"
          pt={{ base: 116, sm: 136 }}
          pb={{ base: 44, sm: 64 }}
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Stack gap="lg" maw={780}>
              <Group gap="sm" align="center">
                <Box
                  style={{
                    width: 38,
                    height: 2,
                    borderRadius: 999,
                    backgroundColor: '#FF007F',
                  }}
                />
                <Text
                  size="xs"
                  fw={700}
                  style={{
                    letterSpacing: '0.14em',
                    color: 'rgba(255, 255, 255, 0.78)',
                    textTransform: 'uppercase',
                  }}
                >
                  Research & Development
                </Text>
              </Group>

              <Title
                order={1}
                style={{
                  fontSize: 'clamp(2.7rem, 6vw, 4.8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: '#FFFFFF',
                  maxWidth: 760,
                }}
              >
                Meet the
                <span style={{ color: '#FF78B9' }}> Smart Pad</span>
                <br />
                for earlier insight.
              </Title>

              <Text
                size="lg"
                style={{
                  lineHeight: 1.68,
                  maxWidth: 700,
                  letterSpacing: '-0.01em',
                  color: 'rgba(255, 255, 255, 0.88)',
                }}
              >
                A modern sanitary solution that converts menstrual fluid into clinically relevant
                screening signals to support faster detection and better reproductive care decisions.
              </Text>

              <Group gap="xs" wrap="wrap">
                {['Non-invasive', 'Evidence-led', 'Designed for early screening'].map((item) => (
                  <Box
                    key={item}
                    style={{
                      borderRadius: 999,
                      padding: '8px 12px',
                      border: '1px solid rgba(255, 255, 255, 0.22)',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <Text size="xs" fw={600} style={{ color: 'rgba(255, 255, 255, 0.88)' }}>
                      {item}
                    </Text>
                  </Box>
                ))}
              </Group>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Body */}
      <Box style={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255, 0, 127, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 127, 0.02) 1px, transparent 1px)`,
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
            background: 'radial-gradient(circle, rgba(255, 0, 127, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            background: 'radial-gradient(circle, rgba(255, 183, 213, 0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <Container size="xl" py={{ base: 64, sm: 80 }} style={{ position: 'relative', zIndex: 2 }}>
          <Stack gap="80px">
            {/* Intro Grid */}
            <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="xl">
                  <Title
                    order={2}
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      letterSpacing: '-1px',
                      color: '#0C090B',
                      lineHeight: 1.2,
                    }}
                  >
                    Your Period is a Window into Your Health
                  </Title>
                  <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                    Over 50% of female fertility issues and gynecological conditions can be
                    prevented or managed if caught early on. Yet, invasive procedures, pain, and
                    high costs keep half a billion menstruators worldwide from tracking their
                    health.
                  </Text>
                  <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                    Menstrual fluid isn’t just waste blood. It is a rich, complex mixture of venous
                    blood, endometrial cells, vaginal secretions, and molecular biomarkers (such as
                    proteins, DNA, RNA, and metabolites). We translate this localized biological
                    data into clear health metrics.
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Box
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid rgba(255, 0, 127, 0.15)',
                    borderRadius: 24,
                    padding: '50px 40px',
                    color: '#0C090B',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 20px 40px rgba(12, 9, 11, 0.08)',
                  }}
                >
                  <Stack gap="xl">
                    <Title order={3} c="#0C090B" style={{ letterSpacing: '-0.5px' }}>
                      Why Test Menstrual Fluid?
                    </Title>
                    <Stack gap="md">
                      {benefits.map((benefit, idx) => {
                        const [boldText, regularText] = benefit.split(': ');
                        return (
                          <Group key={idx} gap="sm" wrap="nowrap" align="flex-start">
                            <Box
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255, 0, 127, 0.2)',
                                border: '1px solid rgba(255, 0, 127, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: 2,
                              }}
                            >
                              <IconShieldCheck size={14} color="#FF007F" />
                            </Box>
                            <Text
                              size="sm"
                              style={{ lineHeight: 1.5, color: 'rgba(12, 9, 11, 0.75)' }}
                            >
                              <span style={{ color: '#0C090B', fontWeight: 600 }}>
                                {boldText.replace(/\*\*/g, '')}
                              </span>
                              : {regularText}
                            </Text>
                          </Group>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Box>
              </Grid.Col>
            </Grid>

            {/* Screenings Sections */}
            <Stack gap="xl">
              <Flex justify="center" direction="column" align="center" ta="center">
                <Title
                  order={2}
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    letterSpacing: '-0.8px',
                    color: '#0C090B',
                  }}
                >
                  Early Screening Target Areas
                </Title>
                <Text size="sm" c="rgba(12, 9, 11, 0.55)" maw={600} mt="xs">
                  We are developing diagnostic screening assays in collaboration with leading
                  clinical researchers, focused on major reproductive health issues.
                </Text>
              </Flex>

              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                {conditions.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                      <Card
                        radius="lg"
                        p="32px"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          border: '1px solid rgba(255, 0, 127, 0.15)',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          backdropFilter: 'blur(16px)',
                          transition:
                            'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-6px)';
                          e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.45)';
                          e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 0, 127, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.15)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <Stack gap="md">
                          <Box
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 12,
                              backgroundColor: 'rgba(255, 0, 127, 0.1)',
                              border: '1px solid rgba(255, 0, 127, 0.25)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon size={22} color={item.color} />
                          </Box>
                          <Title
                            order={3}
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 700,
                              color: '#0C090B',
                              letterSpacing: '-0.5px',
                            }}
                          >
                            {item.title}
                          </Title>
                          <Text
                            size="sm"
                            style={{ color: 'rgba(12, 9, 11, 0.72)', lineHeight: 1.6 }}
                          >
                            {item.description}
                          </Text>
                        </Stack>
                      </Card>
                    </motion.div>
                  );
                })}
              </SimpleGrid>
            </Stack>

            {/* Research Lab Spotlight */}
            <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Stack gap="md">
                  <Badge
                    size="md"
                    radius="xl"
                    style={{
                      background: 'rgba(255, 0, 127, 0.08)',
                      color: '#FF007F',
                      border: '1px solid rgba(255, 0, 127, 0.15)',
                      fontWeight: 700,
                      letterSpacing: '0.8px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    IN THE LAB
                  </Badge>
                  <Title
                    order={2}
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      letterSpacing: '-1px',
                      color: '#0C090B',
                      lineHeight: 1.2,
                    }}
                  >
                    Building Diagnostic Confidence Through Research
                  </Title>
                  <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                    Our research team develops and validates Smart Pad assays under controlled lab
                    conditions, pairing menstrual samples with biomarker analysis so
                    screening insights stay accurate, safe, and clinically useful.
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 7 }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                >
                  <Box
                    style={{
                      borderRadius: 24,
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 0, 127, 0.2)',
                      boxShadow:
                        '0 20px 50px rgba(12, 9, 11, 0.08), 0 0 40px rgba(255, 0, 127, 0.06)',
                    }}
                  >
                    <Image
                      src="/images/smart-pad/image-smart-pad-research.jpg"
                      alt="Researchers in lab coats and safety gear holding a Smart Pad and diagnostic test strip"
                      style={{ display: 'block', width: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </motion.div>
              </Grid.Col>
            </Grid>

            {/* Research Validation Roadmap */}
            <Card
              radius="lg"
              p="60px 40px"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                border: '1px solid rgba(255, 0, 127, 0.15)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 30px 60px rgba(12, 9, 11, 0.1), 0 0 40px rgba(255, 0, 127, 0.05)',
              }}
            >
              <Stack gap="xl">
                <Stack gap="md" ta="center" align="center">
                  <Badge
                    size="md"
                    radius="xl"
                    style={{
                      background: 'rgba(255, 0, 127, 0.08)',
                      color: '#FF007F',
                      border: '1px solid rgba(255, 0, 127, 0.15)',
                      fontWeight: 700,
                      letterSpacing: '0.8px',
                    }}
                  >
                    RESEARCH & VALIDATION
                  </Badge>
                  <Title order={2} style={{ letterSpacing: '-1px', color: '#0C090B' }}>
                    How Smart Pad Research Moves to Real-World Care
                  </Title>
                  <Text
                    size="md"
                    style={{ maxWidth: 760, lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}
                  >
                    Our smart sanitary pad program follows a clear scientific pathway: identify
                    biomarkers, validate assay performance, and translate findings into practical
                    screening insights designed for everyday use.
                  </Text>
                </Stack>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                  <Card
                    radius="md"
                    p="lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.74)',
                      border: '1px solid rgba(255, 0, 127, 0.12)',
                    }}
                  >
                    <Stack gap="xs">
                      <Text size="xs" fw={700} c="#FF007F" style={{ letterSpacing: '0.7px' }}>
                        PHASE 1
                      </Text>
                      <Title order={3} style={{ fontSize: '1.1rem', color: '#0C090B' }}>
                        Biomarker Discovery
                      </Title>
                      <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.74)' }}>
                        Map menstrual-fluid proteins, cell fragments, and metabolites linked to
                        high-burden gynecological conditions.
                      </Text>
                    </Stack>
                  </Card>

                  <Card
                    radius="md"
                    p="lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.74)',
                      border: '1px solid rgba(255, 0, 127, 0.12)',
                    }}
                  >
                    <Stack gap="xs">
                      <Text size="xs" fw={700} c="#FF007F" style={{ letterSpacing: '0.7px' }}>
                        PHASE 2
                      </Text>
                      <Title order={3} style={{ fontSize: '1.1rem', color: '#0C090B' }}>
                        Clinical Validation
                      </Title>
                      <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.74)' }}>
                        Benchmark smart-pad assay outputs against established diagnostic references
                        to improve reliability and reproducibility.
                      </Text>
                    </Stack>
                  </Card>

                  <Card
                    radius="md"
                    p="lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.74)',
                      border: '1px solid rgba(255, 0, 127, 0.12)',
                    }}
                  >
                    <Stack gap="xs">
                      <Text size="xs" fw={700} c="#FF007F" style={{ letterSpacing: '0.7px' }}>
                        PHASE 3
                      </Text>
                      <Title order={3} style={{ fontSize: '1.1rem', color: '#0C090B' }}>
                        Screening Deployment
                      </Title>
                      <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.74)' }}>
                        Package validated science into accessible workflows that support earlier
                        risk signaling and clinical follow-up decisions.
                      </Text>
                    </Stack>
                  </Card>
                </SimpleGrid>

                <Text ta="center" size="sm" style={{ color: 'rgba(12, 9, 11, 0.6)' }}>
                  Evidence-led development helps ensure Smart Pad insights remain useful, safe, and
                  clinically meaningful.
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default SmartPadPage;
