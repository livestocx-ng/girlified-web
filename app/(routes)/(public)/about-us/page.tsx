'use client';

import { useMemo } from 'react';
import {
  IconAlertCircle,
  IconDroplet,
  IconLeaf,
  IconRecycle,
  IconSparkles,
  IconTrendingUp,
  IconUsers,
  IconWorld,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

const AboutUs = () => {
  const features = useMemo(
    () => [
      {
        icon: IconDroplet,
        title: 'Highly Absorbent',
        description:
          'Upcycled banana fiber is three times more absorbent than traditional materials.',
      },
      {
        icon: IconRecycle,
        title: 'Biodegradable',
        description:
          'Our banana fibers and natural cotton decompose within six months, unlike plastic-based SAP.',
      },
      {
        icon: IconLeaf,
        title: 'Eco-Friendly',
        description:
          'Reducing plastic waste while providing safe and comfortable menstrual hygiene solutions.',
      },
    ],
    []
  );

  const dualCrisis = useMemo(
    () => [
      {
        icon: IconAlertCircle,
        title: 'Period Poverty',
        description:
          'Over 43% of women and girls in Northern Nigeria lack access to affordable menstrual hygiene products, leading to health risks, school absenteeism, and social stigma.',
      },
      {
        icon: IconWorld,
        title: 'Plastic Pollution',
        description:
          'Traditional sanitary napkins, made up of 90% plastic, contribute to millions of tons of waste, harming marine life and ecosystems worldwide.',
      },
    ],
    []
  );

  return (
    <Box>
      {/* Hero */}
      <Box style={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/images/about-mission.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(227,81,183,0.8), rgba(227,81,183,0.6), rgba(199,76,245,0.5))',
            }}
          />
        </Box>
        <Container size="lg" style={{ position: 'relative', zIndex: 1, height: '100%' }}>
          <Stack
            align="center"
            justify="center"
            style={{ height: '100%', color: 'white', textAlign: 'center' }}
          >
            <Title order={1} fz={{ base: 40, md: 72 }} fw={800}>
              About Girlified
            </Title>
            <Text fz={{ base: 18, md: 22 }} maw={800}>
              Pioneering sustainable menstrual care solutions for Africa and beyond
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Addressing Period Poverty */}
      <Container size="lg" py={{ base: 40, md: 80 }}>
        <Stack align="center" mb={24}>
          <Title order={2} ta="center" fz={{ base: 32, md: 44 }}>
            Addressing Period Poverty and Menstrual Hygiene
          </Title>
        </Stack>
        <Stack gap={16} fz={{ base: 'md', md: 'lg' }} c="dimmed">
          <Text>
            Globally,{' '}
            <Text component="span" fw={600} c="var(--mantine-color-text)">
              2.3 billion people
            </Text>{' '}
            live without basic sanitation services, and among them are millions of women and girls
            who lack access to safe and affordable menstrual products. Period poverty affects an
            estimated{' '}
            <Text component="span" fw={600} c="var(--mantine-color-text)">
              500 million menstruators worldwide
            </Text>
            , making it a critical issue, especially in Sub-Saharan Africa.
          </Text>
          <Text>
            In Nigeria,{' '}
            <Text component="span" fw={600} c="var(--mantine-color-text)">
              37% of women cannot afford menstrual products
            </Text>
            . This lack of access often means they are unable to attend school or carry out daily
            activities, perpetuating gender inequality and limiting opportunities for women and
            girls. Girlified was created to address this pressing social challenge by providing a
            cost-effective and sustainable solution to period poverty.
          </Text>
        </Stack>
      </Container>

      {/* Product Features */}
      <Container size="lg" py={{ base: 40, md: 80 }}>
        <Grid columns={12} gutter={24}>
          {features.map((f, i) => (
            <Grid.Col key={f.title} span={{ base: 12, md: 4 }}>
              <Card shadow="sm" padding="lg" radius="lg" withBorder>
                <Stack>
                  <Group justify="center">
                    <Box
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: 999,
                        background: 'linear-gradient(135deg, #FF6FB7, #C74CF5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <f.icon size={28} color="#fff" />
                    </Box>
                  </Group>
                  <Title order={3} ta="center" fz={24}>
                    {f.title}
                  </Title>
                  <Text ta="center" c="dimmed">
                    {f.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* Combating Plastic Pollution */}
      <Box style={{ background: 'rgba(0,0,0,0.04)' }}>
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Stack align="center" mb={24}>
            <Title order={2} ta="center" fz={{ base: 32, md: 44 }}>
              Combating Plastic Pollution in Menstrual Products
            </Title>
          </Stack>
          <Stack gap={16} fz={{ base: 'md', md: 'lg' }} c="dimmed">
            <Text>
              Conventional sanitary pads are made up of{' '}
              <Text component="span" fw={600} c="var(--mantine-color-text)">
                up to 90% plastic
              </Text>
              , significantly contributing to environmental pollution. According to the United
              Nations Environment Programme (UNEP), approximately{' '}
              <Text component="span" fw={600} c="var(--mantine-color-text)">
                11 million tons of plastic waste
              </Text>{' '}
              enter our oceans annually.
            </Text>
            <Text>
              A study by Natracare further reveals that a single 36 kg pack of sanitary pads
              contains the plastic equivalent of five plastic bags. The widespread use of
              plastic-based sanitary products worsens pollution, leading to long-term ecological
              damage.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Sustainable Solution */}
      <Box
        style={{
          background: 'linear-gradient(0deg, rgba(255,111,183,0.08), rgba(199,76,245,0.08))',
        }}
      >
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Stack align="center" mb={24}>
            <Title order={2} ta="center" fz={{ base: 32, md: 44 }}>
              Introducing a Sustainable Solution
            </Title>
            <Text ta="center" c="dimmed" maw={820}>
              Girlified is an innovative sanitary pad made from a research-backed combination of{' '}
              <Text component="span" fw={600} c="var(--mantine-color-text)">
                upcycled banana stem fiber and natural cotton
              </Text>
              , among other sustainable non-woven fabrics. These materials replace plastic-based
              Super Absorbent Polymers (SAP).
            </Text>
          </Stack>

          <Grid columns={12} gutter={32} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap={16}>
                <Card padding="lg" shadow="sm" radius="lg" withBorder>
                  <Title order={4} mb={8}>
                    <Group gap={8}>
                      <IconSparkles size={24} color="#E351B7" />
                      <span>Innovation at Its Core</span>
                    </Group>
                  </Title>
                  <Text c="dimmed">
                    Our banana fiber technology offers 3x more absorbency than traditional materials
                    while being 100% biodegradable.
                  </Text>
                </Card>
                <Card padding="lg" shadow="sm" radius="lg" withBorder>
                  <Title order={4} mb={8}>
                    <Group gap={8}>
                      <IconLeaf size={24} color="#E351B7" />
                      <span>Environmental Impact</span>
                    </Group>
                  </Title>
                  <Text c="dimmed">
                    Decomposes within 6 months compared to 500+ years for plastic-based
                    alternatives.
                  </Text>
                </Card>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                src="/images/about-mission.jpg"
                alt="Girlified Sustainable Solution"
                radius="xl"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Pioneering Innovation */}
      <Container size="lg" py={{ base: 40, md: 80 }}>
        <Stack align="center" maw={900} mx="auto">
          <Title order={2} ta="center" fz={{ base: 32, md: 44 }}>
            Pioneering Innovation in Africa and Beyond
          </Title>
          <Text ta="center" c="dimmed" fz={{ base: 'md', md: 'lg' }}>
            Girlified is one of the pioneers in developing upcycled, plant-based fiber sanitary
            napkins,{' '}
            <Text component="span" fw={600} c="var(--mantine-color-text)">
              not only in Africa but globally
            </Text>
            . Our product seamlessly integrates cost-effectiveness, improved hygiene, and a drastic
            reduction in plastic usage.
          </Text>
          <Text ta="center" c="dimmed" fz={{ base: 'md', md: 'lg' }}>
            Unlike conventional sanitary pads that rely heavily on SAP — a plastic-based material —
            our pads replace SAP with upcycled banana stem fiber, offering an environmentally
            friendly and highly absorbent alternative.
          </Text>
        </Stack>
      </Container>

      {/* Vision for the Future */}
      <Box style={{ background: 'linear-gradient(90deg, #E351B7, #C74CF5)', color: 'white' }}>
        <Container size="lg" py={{ base: 48, md: 72 }}>
          <Stack align="center" ta="center">
            <IconTrendingUp size={64} />
            <Title order={2}>Our Vision for the Future</Title>
            <Text fz={{ base: 18, md: 20 }} maw={900}>
              Our goal is to revolutionize menstrual hygiene by making sustainable sanitary pads
              accessible to millions of menstruators across Africa and beyond. By offering an
              eco-friendly and affordable alternative, we are not only improving menstrual health
              but also championing environmental sustainability.
            </Text>
            <Text fz={{ base: 18, md: 20 }} fs="italic" maw={900}>
              At Girlified, we believe that{' '}
              <Text component="span" fw={700}>
                no woman or girl should have to choose between their health and the environment
              </Text>
              . Our work is paving the way for a future where menstrual hygiene is a right, not a
              privilege, and where sustainability is at the core of every solution.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Dual Crisis */}
      <Container size="lg" py={{ base: 40, md: 80 }}>
        <Stack align="center" mb={24}>
          <Title order={2} ta="center" fz={{ base: 32, md: 44 }}>
            Tackling a Dual Crisis
          </Title>
          <Text ta="center" c="dimmed" maw={760}>
            Economic constraints, cultural taboos, and the high cost of plastic-based products have
            perpetuated these issues. Girlified's mission is to provide a sustainable, affordable,
            and biodegradable alternative that empowers women and protects the environment.
          </Text>
        </Stack>
        <Grid columns={12} gutter={24}>
          {dualCrisis.map((c) => (
            <Grid.Col key={c.title} span={{ base: 12, md: 6 }}>
              <Card padding={24} radius="lg" shadow="sm" withBorder>
                <Stack>
                  <Box
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 999,
                      background: 'linear-gradient(135deg, #FF6FB7, #C74CF5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <c.icon size={36} color="#fff" />
                  </Box>
                  <Title order={3}>{c.title}</Title>
                  <Text c="dimmed" fz={{ base: 'md', md: 'lg' }}>
                    {c.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* Research Links */}
      <Box style={{ background: 'rgba(0,0,0,0.04)' }}>
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Stack align="center" ta="center" maw={900} mx="auto">
            <Title order={2}>Research-Backed Innovation</Title>
            <Text c="dimmed">
              Our sustainable solutions are backed by comprehensive research and scientific studies.
            </Text>
            <Group justify="center" gap={12} mt={12} wrap="wrap">
              <Button
                component="a"
                href="https://www.academia.edu/126308735/COMPARATIVE_STUDY_OF_DIFFERENT_MENSTRUAL_SANITARY_MATERIALS_PROS_AND_CONS_OF_LONG_TERM_USE_FROM_A_MEDICAL_CHEMICAL_AND_ENVIRONMENTAL_PERSPECTIVE_A_SYSTEMIC_REVIEW"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                radius="xl"
                bg={'#E351B7'}
              >
                View Research on Academia.edu
              </Button>
              <Button
                component="a"
                variant="outline"
                href="https://www.researchgate.net/publication/386884716_COMPARATIVE_STUDY_OF_DIFFERENT_MENSTRUAL_SANITARY_MATERIALS_PROS_AND_CONS_OF_LONG-TERM_USE_FROM_A_MEDICAL_CHEMICAL_AND_ENVIRONMENTAL_PERSPECTIVE_A_SYSTEMIC_REVIEW"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                radius="xl"
                // bg={'#E351B7'}
              >
                View on ResearchGate
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Newsletter */}
      <Box
        style={{
          background: 'linear-gradient(0deg, rgba(255,111,183,0.08), rgba(199,76,245,0.08))',
        }}
      >
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Stack align="center" ta="center" maw={760} mx="auto">
            <Title order={2}>Sign up to our newsletter!</Title>
            <Text fs="italic" c="dimmed">
              "To all of you who choose to look the other way everyday because you seem more
              frightened of the changes that can prevent catastrophic climate change than the
              catastrophic climate change itself. Your silence is the worst of all" — Greta Thunberg
            </Text>
            <Group justify="center" gap={12} wrap="wrap" mt={8}>
              <TextInput
                type="email"
                placeholder="Enter your email"
                radius="xl"
                size="md"
                style={{ minWidth: 260 }}
              />
              <Button size="md" radius="xl" bg={'#E351B7'}>
                Subscribe
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Join Movement */}
      <Box style={{ background: 'linear-gradient(90deg, #E351B7, #C74CF5)', color: 'white' }}>
        <Container size="lg" py={{ base: 48, md: 72 }}>
          <Stack align="center" ta="center" maw={800} mx="auto">
            <IconUsers size={64} />
            <Title order={2}>Join Our Movement</Title>
            <Text fz={{ base: 18, md: 20 }}>
              Every purchase supports our mission to empower more girls across Nigeria. Together,
              we're breaking down barriers and building confidence.
            </Text>
            <Group justify="center" gap={12} wrap="wrap" mt={8}>
              <Button size="lg" radius="xl" variant="white" c="#E351B7">
                Become an Ambassador
              </Button>
              <Button size="lg" radius="xl" variant="outline" color="white">
                Partner With Us
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
