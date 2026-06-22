'use client';

import { motion } from 'framer-motion';
import { Box, Card, Container, Flex, Grid, Group, Stack, Text, Title, Badge, Button, SimpleGrid } from '@mantine/core';
import { IconActivity, IconAlertOctagon, IconAppWindow, IconHeart, IconShieldCheck } from '@tabler/icons-react';

const SmartPadPage = () => {
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
      py={{ base: 120, sm: 160 }}
      style={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Grid Pattern */}
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

      {/* Decorative Radial Glowing Orbs */}
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

      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Stack gap="80px">
          {/* Header */}
          <Stack align="center" ta="center" gap="md">
            <Badge
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
              HEALTH TECH INNOVATION
            </Badge>
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.0rem)',
                fontWeight: 800,
                letterSpacing: '-2px',
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, #0C090B 10%, #CC0066 60%, #FF007F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              The Girlified Smart Pad
            </Title>
            <Text
              size="lg"
              style={{
                lineHeight: 1.6,
                maxWidth: 800,
                letterSpacing: '-0.3px',
                color: 'rgba(12, 9, 11, 0.7)',
              }}
            >
              A revolutionary wellness and diagnostic tool that transforms menstrual fluid 
              into actionable reproductive health insights, enabling early detection of gynecological conditions.
            </Text>
          </Stack>

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
                  Over 50% of female fertility issues and gynecological conditions can be prevented or managed if caught early on. 
                  Yet, invasive procedures, pain, and high costs keep half a billion menstruators worldwide from tracking their health.
                </Text>
                <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                  Menstrual fluid isn’t just waste blood. It is a rich, complex mixture of venous blood, endometrial cells, vaginal secretions, and molecular biomarkers (such as proteins, DNA, RNA, and metabolites). 
                  We translate this localized biological data into clear health metrics.
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
                          <Text size="sm" style={{ lineHeight: 1.5, color: 'rgba(12, 9, 11, 0.75)' }}>
                            <span style={{ color: '#0C090B', fontWeight: 600 }}>{boldText.replace(/\*\*/g, '')}</span>: {regularText}
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
              <Title order={2} style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.8px', color: '#0C090B' }}>
                Early Screening Target Areas
              </Title>
              <Text size="sm" c="rgba(12, 9, 11, 0.55)" maw={600} mt="xs">
                We are developing diagnostic screening assays in collaboration with leading clinical researchers, focused on major reproductive health issues.
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
                        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
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
                        <Title order={3} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0C090B', letterSpacing: '-0.5px' }}>
                          {item.title}
                        </Title>
                        <Text size="sm" style={{ color: 'rgba(12, 9, 11, 0.72)', lineHeight: 1.6 }}>
                          {item.description}
                        </Text>
                      </Stack>
                    </Card>
                  </motion.div>
                );
              })}
            </SimpleGrid>
          </Stack>

          {/* Download App CTA */}
          <Card
            radius="lg"
            p="60px 40px"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              textAlign: 'center',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 30px 60px rgba(12, 9, 11, 0.1), 0 0 40px rgba(255, 0, 127, 0.05)',
            }}
          >
            <Stack gap="xl" align="center">
              <IconAppWindow size={40} color="#FF007F" />
              <Title order={2} style={{ letterSpacing: '-1px', color: '#0C090B' }}>
                Track Your Health Seamlessly
              </Title>
              <Text size="md" style={{ maxWidth: 700, lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                Connect your diagnostic results and log symptoms on the go. Get alerts, cycle insights, and secure medical data records designed specifically for your reproductive well-being.
              </Text>
              <Group gap="md">
                <Button
                  component="a"
                  href="https://play.google.com/store/apps/details?id=com.girlified.girlified"
                  target="_blank"
                  variant="filled"
                  radius="xl"
                  size="md"
                  style={{
                    background: 'linear-gradient(135deg, #FF007F 0%, #CC0066 100%)',
                    color: 'white',
                    fontWeight: 600,
                    padding: '12px 36px',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 15px rgba(255,0,127,0.3)',
                    border: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,0,127,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,0,127,0.3)';
                  }}
                >
                  Download Android App
                </Button>
              </Group>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default SmartPadPage;
