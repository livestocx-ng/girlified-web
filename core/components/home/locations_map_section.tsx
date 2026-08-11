'use client';

import LocationsMap from './locations_map';
import { Box, Container, Stack, Text, Title } from '@mantine/core';

const SURFACE = '#FBF6EE';
const MUTED = 'rgba(12, 9, 11, 0.68)';

export default function LocationsMapSection() {
  return (
    <Box
      component="section"
      id="locations"
      py={{ base: 64, sm: 80 }}
      style={{ backgroundColor: SURFACE }}
    >
      <Container size="xl">
        <Stack gap={40}>
          <Stack gap="md" maw={640} mx="auto" ta="center" align="center">
            <Title
              order={2}
              ta="center"
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
              Girlified retail partners
            </Title>
            <Text size="md" c={MUTED} ta="center" style={{ lineHeight: 1.7 }}>
              Pick up Girlified sanitary pads through community pharmacies, kiosks, and stores near
              you including Buy Now, Pay Later fulfillment partners.
            </Text>
          </Stack>

          <Box h={{ base: 360, md: 580 }} w="100%">
            <LocationsMap />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
