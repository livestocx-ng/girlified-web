import { Container, Grid, Title, Text, Card, Box, Stack } from '@mantine/core';
import { IconTrendingUp, IconUsers, IconMapPin, IconAward } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const ImpactSection = () => {
  const impacts = [
    {
      icon: IconUsers,
      value: "13,390",
      label: "Active Farmers",
      description: "Currently using our platform",
      color: "climate"
    },
    {
      icon: IconTrendingUp,
      value: "190,000",
      label: "Lives Supported",
      description: "Family members across 3 countries",
      color: "blue"
    },
    {
      icon: IconMapPin,
      value: "3",
      label: "Countries Active",
      description: "Nigeria, Ghana, and Niger",
      color: "earth"
    },
    {
      icon: IconAward,
      value: "85%",
      label: "Risk Reduction",
      description: "Decreased climate-related livestock losses",
      color: "orange"
    }
  ];

  const testimonials = [
    {
      quote: "The disease early warning system saved my entire herd during the last outbreak. I received the alert three days before symptoms appeared and was able to get veterinary help immediately.",
      author: "Amara Kone",
      location: "Northern Nigeria",
      role: "Cattle Farmer"
    },
    {
      quote: "During the severe drought last year, the climate adaptation tools helped me plan water reserves and emergency feeding. My family's livelihood was protected when other farms struggled.",
      author: "John Kimani", 
      location: "Ghana",
      role: "Pastoral Farmer"
    },
    {
      quote: "The veterinary response network connected me with experts when my goats fell sick. The mobile app works even when network is poor, which is crucial in our remote area.",
      author: "Fatou Diallo",
      location: "Niger",
      role: "Smallholder Farmer"
    }
  ];

  return (
    <Box component="section" py={96}>
      <Container size="xl">
        {/* Impact Stats */}
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
              Proven Climate Impact
            </Title>
            <Text size="xl" c="dimmed" ta="center" maw={800}>
              Real results from our current deployment across Nigeria, Ghana, and Niger, 
              backed by international partners and proven by farmers on the ground.
            </Text>
          </Stack>
        </motion.div>

        <Grid gutter="lg" mb={96}>
          {impacts.map((impact, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 6, lg: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  ta="center" 
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
                  <Stack align="center" gap="md">
                    <Box
                      w={64}
                      h={64}
                      style={{
                        background: 'linear-gradient(135deg, var(--mantine-color-climate-6), var(--mantine-color-climate-4))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.3s'
                      }}
                    >
                      <impact.icon size={32} color="white" />
                    </Box>
                    <Stack gap="xs" align="center">
                      <Text size="3rem" fw={700} c="climate.6">{impact.value}</Text>
                      <Text fw={600}>{impact.label}</Text>
                      <Text size="sm" c="dimmed">{impact.description}</Text>
                    </Stack>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack align="center" gap="md" mb={48}>
            <Title order={3} size="2rem" ta="center">
              Voices from the Field
            </Title>
            <Text size="lg" c="dimmed" ta="center">
              Hear from farmers currently using Livestocx Climate Adaptation™ tools
            </Text>
          </Stack>
        </motion.div>

        <Grid gutter="lg">
          {testimonials.map((testimonial, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card 
                  h="100%" 
                  p="xl" 
                  style={{ 
                    transition: 'box-shadow 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '';
                  }}
                >
                  <Stack gap="md">
                    <Text c="dimmed" style={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                      "{testimonial.quote}"
                    </Text>
                    <Box pt="md" style={{ borderTop: '1px solid var(--mantine-color-gray-2)' }}>
                      <Text fw={600}>{testimonial.author}</Text>
                      <Text size="sm" c="dimmed">
                        {testimonial.role} • {testimonial.location}
                      </Text>
                    </Box>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactSection;