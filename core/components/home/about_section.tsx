import React from 'react';
import Link from 'next/link';
import { Button, Container, Grid, Image, Paper, Stack, Text, Title } from '@mantine/core';

const AboutSection = () => {
  return (
    <Container size="xl" py={{ base: 40, sm: 60 }}>
      <Grid align="center" gutter={{ base: 24, sm: 40 }}>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Paper withBorder={false} radius="xl" shadow="md" p={0} style={{ overflow: 'hidden' }}>
            <Image
              radius={0}
              fit="cover"
              src="/images/about-mission.jpg"
              h={{ base: 240, sm: 340, md: 320 }}
              alt="Girls in classroom representing learning about Girlified's mission"
            />
          </Paper>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack gap={18}>
            <Title order={1} fz={{ base: 34, sm: 44 }} c="#3B2B36">
              About Girlified
            </Title>
            <Text fz={{ base: 'md', sm: 'lg' }} c="dimmed">
              Born from a desire to create menstrual comfort that's kind to your body and the
              planet. We started Girlified because every girl deserves to feel confident,
              comfortable, and empowered during her period.
            </Text>
            <Text fz={{ base: 'md', sm: 'lg' }} c="dimmed">
              Our products are designed with love, care, and sustainability at the core. From
              ultra-soft pads to eco-friendly packaging, we're revolutionizing period care in
              Nigeria.
            </Text>
            <Link href="/about" passHref>
              <Button
                component="a"
                size="lg"
                radius="xl"
                variant="gradient"
                gradient={{ from: '#FF6FB7', to: '#C74CF5', deg: 45 }}
                w={{ base: 'fit', xs: 'auto' }}
              >
                Read Our Story
              </Button>
            </Link>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default AboutSection;
