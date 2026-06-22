'use client';

import { motion } from 'framer-motion';
import { Container, Grid, Title, Text, Card, Box, Stack, Image, Group } from '@mantine/core';
import {
  IconDeviceMobile,
  IconCloudRain,
  IconTrendingUp,
  IconShield,
  IconBolt,
  IconWorld,
} from '@tabler/icons-react';

const ServicesSection = () => {
  const services = [
    {
      icon: IconDeviceMobile,
      title: 'Mobile Climate Services',
      description:
        'Real-time climate adaptation tools delivered directly to farmers\' mobile phones, working even in remote areas with minimal connectivity.',
      color: 'blue',
    },
    {
      icon: IconCloudRain,
      title: 'Climate Risk Monitoring',
      description:
        'Advanced monitoring of droughts, heatwaves, and extreme weather patterns that threaten livestock and rural livelihoods.',
      color: 'earth',
    },
    {
      icon: IconShield,
      title: 'Disease Early Warning',
      description:
        'AI-powered disease outbreak detection and early warning systems to protect livestock from climate-related health risks.',
      color: 'orange',
    },
    {
      icon: IconTrendingUp,
      title: 'Veterinary Response',
      description:
        'Rapid veterinary response coordination and telemedicine services connecting farmers with livestock health experts.',
      color: 'climate',
    },
    {
      icon: IconBolt,
      title: 'Climate Adaptation Tools',
      description:
        'Comprehensive suite of AI-powered tools helping farmers adapt to changing climate conditions and build resilience.',
      color: 'teal',
    },
    {
      icon: IconWorld,
      title: 'Regional Networks',
      description:
        'Connected farmer networks across Nigeria, Ghana, and Niger sharing climate insights and adaptation strategies.',
      color: 'grape',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      component="section"
      id="services"
      py={{ base: 80, lg: 120 }}
      style={{ background: '#f8faf9', position: 'relative', overflow: 'hidden' }}
    >
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 90% 10%, rgba(34,163,102,0.05) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />
      <Container size="xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack align="center" gap="md" mb={72}>
            <Box
              style={{
                display: 'inline-block',
                background: 'rgba(34,163,102,0.1)',
                border: '1px solid rgba(34,163,102,0.3)',
                borderRadius: 50,
                padding: '6px 20px',
                color: '#22a366',
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              PLATFORM SERVICES
            </Box>
            <Title
              order={2}
              ta="center"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #0a1f14, #22a366)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI-Powered Climate Adaptation
            </Title>
            <Text size="xl" c="dimmed" ta="center" maw={700} style={{ lineHeight: 1.7 }}>
              Supporting over 13,390 livestock farmers across Nigeria, Ghana, and Niger with
              comprehensive climate adaptation tools, disease monitoring, and veterinary response
              systems.
            </Text>
          </Stack>
        </motion.div>

        {/* Mobile app split */}
        <Grid gutter="xl" align="center" mb={80}>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  position: 'relative',
                  background:
                    'linear-gradient(135deg, #0a1f14 0%, #1a7f4f 50%, #22a366 100%)',
                  padding: 32,
                  borderRadius: 24,
                  boxShadow: '0 0 60px rgba(34,163,102,0.2), 0 30px 60px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                }}
              >
                {/* Background pattern */}
                <Box
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                    pointerEvents: 'none',
                  }}
                />
                <Image
                  src="/images/image_mobile_climate.jpg"
                  alt="Climate mobile app interface"
                  w={{ sm: 300, base: '100%', md: 400 }}
                  mx="auto"
                  radius="md"
                  style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative' }}
                />
              </Box>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Stack gap="lg">
                <Title order={3} size="2rem" style={{ color: '#0a1f14', lineHeight: 1.3 }}>
                  Government-Backed Climate Solutions
                </Title>
                <Text size="lg" c="dimmed" style={{ lineHeight: 1.7 }}>
                  Supported by the Government of Germany, the EU, and the Government of Nigeria,
                  our proven platform has already transformed lives across West Africa.
                </Text>
                <Stack gap="sm" mt="sm">
                  {[
                    'Disease early warning systems',
                    'Veterinary response coordination',
                    'Climate adaptation training',
                    'Multi-country farmer networks',
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Group gap="sm">
                        <Box
                          w={24}
                          h={24}
                          style={{
                            background: 'rgba(34,163,102,0.12)',
                            border: '1px solid rgba(34,163,102,0.3)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Box
                            w={8}
                            h={8}
                            style={{ background: '#22a366', borderRadius: '50%' }}
                          />
                        </Box>
                        <Text c="dimmed" size="md">
                          {feature}
                        </Text>
                      </Group>
                    </motion.div>
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* Services 6-card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid gutter="lg">
            {services.map((service, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <motion.div variants={cardVariants}>
                  <Card
                    h="100%"
                    p="xl"
                    radius="lg"
                    style={{
                      transition: 'box-shadow 0.3s, transform 0.3s',
                      cursor: 'pointer',
                      border: '1px solid rgba(34,163,102,0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(34,163,102,0.15)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Stack gap="md">
                      <Box
                        w={52}
                        h={52}
                        style={{
                          background:
                            'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-4))',
                          borderRadius: 12,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <service.icon size={26} color="white" />
                      </Box>
                      <Title order={4} size="xl" c="#0a1f14">
                        {service.title}
                      </Title>
                      <Text c="dimmed" style={{ lineHeight: 1.7 }}>
                        {service.description}
                      </Text>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServicesSection;