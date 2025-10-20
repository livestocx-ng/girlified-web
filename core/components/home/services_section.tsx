import { motion } from 'framer-motion';
import { Container, Grid, Title, Text, Card, Box, Stack, Image, Group } from '@mantine/core';
import { IconDeviceMobile, IconCloudRain, IconTrendingUp, IconShield, IconBolt, IconWorld } from '@tabler/icons-react';

const ServicesSection = () => {
  const services = [
    {
      icon: IconDeviceMobile,
      title: "Mobile Climate Services",
      description: "Real-time climate adaptation tools delivered directly to farmers' mobile phones, working even in remote areas with minimal connectivity.",
      color: "blue"
    },
    {
      icon: IconCloudRain,
      title: "Climate Risk Monitoring",
      description: "Advanced monitoring of droughts, heatwaves, and extreme weather patterns that threaten livestock and rural livelihoods.",
      color: "earth"
    },
    {
      icon: IconShield,
      title: "Disease Early Warning",
      description: "AI-powered disease outbreak detection and early warning systems to protect livestock from climate-related health risks.",
      color: "orange"
    },
    {
      icon: IconTrendingUp,
      title: "Veterinary Response",
      description: "Rapid veterinary response coordination and telemedicine services connecting farmers with livestock health experts.",
      color: "climate"
    },
    {
      icon: IconBolt,
      title: "Climate Adaptation Tools",
      description: "Comprehensive suite of AI-powered tools helping farmers adapt to changing climate conditions and build resilience.",
      color: "teal"
    },
    {
      icon: IconWorld,
      title: "Regional Networks",
      description: "Connected farmer networks across Nigeria, Ghana, and Niger sharing climate insights and adaptation strategies.",
      color: "grape"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <Box component="section" id="services" py={96} style={{ background: 'var(--mantine-color-gray-0)' }}>
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack align="center" gap="md" mb={64}>
            <Title 
              order={2} 
              size="3rem" 
              ta="center"
              style={{
                background: 'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-4))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              AI-Powered Climate Adaptation
            </Title>
            <Text size="xl" c="dimmed" ta="center" maw={800}>
              Supporting over 13,390 livestock farmers across Nigeria, Ghana, and Niger with 
              comprehensive climate adaptation tools, disease monitoring, and veterinary response systems.
            </Text>
          </Stack>
        </motion.div>

        <Grid gutter="xl" align="center" mb={64}>
          {/* Mobile App Showcase */}
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
                  background: 'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-blue-6))',
                  padding: 32,
                  borderRadius: 16,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                <Image
                  src='/images/image_mobile_climate.jpg'
                  alt="Climate mobile app interface"
                  w={{sm: 300, base: 300, md:400}}
                  mx="auto"
                  radius="md"
                  style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                />
              </Box>
            </motion.div>
          </Grid.Col>

          {/* Content */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Stack gap="lg">
                <Title order={3} size="2rem">
                  Government-Backed Climate Solutions
                </Title>
                <Text size="lg" c="dimmed">
                  Supported by the Government of Germany, EU, and Government of Nigeria, 
                  our proven platform has already transformed lives across West Africa.
                </Text>
                <Stack gap="sm">
                  {[
                    "Disease early warning systems",
                    "Veterinary response coordination", 
                    "Climate adaptation training",
                    "Multi-country farmer networks"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Group gap="sm">
                        <Box w={8} h={8} style={{ background: 'var(--mantine-color-climate-6)', borderRadius: '50%' }} />
                        <Text c="dimmed">{feature}</Text>
                      </Group>
                    </motion.div>
                  ))}
                </Stack>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* Services Grid */}
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
                    style={{ 
                      transition: 'box-shadow 0.3s, transform 0.3s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Stack gap="md">
                      <Box
                        w={48}
                        h={48}
                        style={{
                          background: 'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-4))',
                          borderRadius: 8,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.3s'
                        }}
                      >
                        <service.icon size={24} color="white" />
                      </Box>
                      <Title order={4} size="xl">{service.title}</Title>
                      <Text c="dimmed" style={{ lineHeight: 1.6 }}>
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