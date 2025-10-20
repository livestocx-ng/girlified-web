import React from 'react';
import { IconHeart, IconLeaf, IconShieldCheck, IconStar } from '@tabler/icons-react';
import { Container, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core';

const features = [
  {
    icon: IconLeaf,
    title: 'Sustainable & Eco-friendly',
    description: '100% biodegradable materials that care for the planet',
  },
  {
    icon: IconShieldCheck,
    title: 'Dermatologically Tested',
    description: 'Safe, gentle, and tested for sensitive skin',
  },
  {
    icon: IconHeart,
    title: 'Soft & Leak-Proof',
    description: 'Ultra-soft comfort with maximum protection',
  },
  {
    icon: IconStar,
    title: 'Trusted by Thousands',
    description: 'Join thousands of happy girls across Nigeria',
  },
];

const WhyChooseSection = () => {
  return (
    <Container size="xl" py={{ base: 48, sm: 72 }}>
      <Stack gap={10} align="center" mb={{ base: 28, sm: 36 }}>
        <Title order={2} fz={{ base: 32, sm: 44 }} ta="center" c="#3B2B36">
          Why Choose Girlified?
        </Title>
        <Text ta="center" c="dimmed" fz={{ base: 'sm', sm: 'md' }}>
          More than just pads. A promise of comfort, safety, and empowerment.
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 16, sm: 20 }}>
        {features.map(({ icon: Icon, title, description }) => (
          <Paper key={title} radius="xl" shadow="sm" p={{ base: 18, sm: 24 }} withBorder={false}>
            <Stack align="center" gap={12}>
              <ThemeIcon
                size={60}
                radius="xl"
                variant="gradient"
                gradient={{ from: '#FF6FB7', to: '#C74CF5', deg: 45 }}
              >
                <Icon size={28} />
              </ThemeIcon>
              <Title order={4} ta="center" fz={{ base: 20, sm: 22 }} c="#3B2B36">
                {title}
              </Title>
              <Text ta="center" c="dimmed" fz={{ base: 14, sm: 15 }}>
                {description}
              </Text>
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default WhyChooseSection;
