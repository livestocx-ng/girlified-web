import { IconHeart, IconLeaf, IconShield } from '@tabler/icons-react';
import { Box, Card, Container, Grid, Group, Stack, Text, Title } from '@mantine/core';

type Feature = {
  icon: 'heart' | 'leaf' | 'shield';
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: 'heart',
    title: 'Comfort First',
    description: 'Soft, ultra-absorbent pads for every flow',
  },
  { icon: 'leaf', title: 'Eco-Love', description: '100% biodegradable materials' },
  { icon: 'shield', title: 'Empowerment', description: 'Every purchase supports girls in need' },
];

function FeatureIcon({ kind, size = 28 }: { kind: Feature['icon']; size?: number }) {
  if (kind === 'heart') return <IconHeart size={size} color="#fff" />;
  if (kind === 'leaf') return <IconLeaf size={size} color="#fff" />;
  return <IconShield size={size} color="#fff" />;
}

const MissionSection = () => {
  return (
    <Box
      component="section"
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        background: 'linear-gradient(180deg, #ffe6f2 0%, #fff 60%)',
      }}
    >
      <Container size="xl">
        <Stack align="center" gap="xs" mb={40}>
          <Title order={2} style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', color: '#2b1e2d' }}>
            Our Mission
          </Title>
          <Text c="dimmed" ta="center" style={{ maxWidth: 900, fontSize: 18 }}>
            We're not just another period product company. We're a movement.
          </Text>
        </Stack>

        <Grid gutter={24}>
          {features.map((f) => (
            <Grid.Col key={f.title} span={{ base: 12, md: 4 }}>
              <Card
                radius="lg"
                padding="xl"
                style={{
                  height: '100%',
                  background: 'white',
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                  transition: 'transform 300ms ease, box-shadow 300ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.05)';
                }}
              >
                <Stack align="center" gap="md">
                  <Group justify="center">
                    <Box
                      style={{
                        width: 96,
                        height: 96,
                        borderRadius: 999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, #ff6aa6, #d26bff)',
                        boxShadow: '0 20px 40px rgba(210,107,255,0.25)',
                      }}
                    >
                      <FeatureIcon kind={f.icon} size={36} />
                    </Box>
                  </Group>
                  <Title order={3} ta="center" style={{ fontSize: 28, color: '#2b1e2d' }}>
                    {f.title}
                  </Title>
                  <Text c="dimmed" ta="center" style={{ fontSize: 18 }}>
                    {f.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MissionSection;
