'use client';

import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconArrowUpRight,
  IconCalendar,
  IconClock,
  IconDroplet,
  IconLeaf,
  IconRocket,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

/** Cobalt blue — complements brand pink (#FF007F) without using pink or green */
const ACCENT = '#1D4ED8';
const ACCENT_SOFT = 'rgba(29, 78, 216, 0.08)';
const ACCENT_BORDER = 'rgba(29, 78, 216, 0.16)';
const SLATE = '#0F172A';
const SURFACE = '#F8FAFC';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

const impactMetrics = [
  { value: '2M+', label: 'Sanitary pads sold' },
  { value: '70,000+', label: 'Women & girls reached' },
  { value: '2023', label: 'Commercial launch' },
];

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Anchor
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    underline="always"
    style={{
      color: ACCENT,
      fontWeight: 600,
      textUnderlineOffset: 3,
    }}
  >
    {children}
  </Anchor>
);

const BodyText = ({ children }: { children: React.ReactNode }) => (
  <Text size="md" style={{ lineHeight: 1.8, color: MUTED }}>
    {children}
  </Text>
);

const MVenturesAcceleratorPage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: SURFACE, overflowX: 'hidden' }}>
      {/* Full-bleed photographic hero */}
      <Box
        component="section"
        style={{
          position: 'relative',
          // minHeight: 'min(88vh, 760px)',
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/blog/m-ventures/image_m-ventures.jpg"
          alt="Girlified research team in lab coats presenting sanitary pads and plant-fiber material"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(12, 9, 11, 0.15) 0%, rgba(12, 9, 11, 0.35) 40%, rgba(12, 9, 11, 0.88) 100%)',
            pointerEvents: 'none',
          }}
        />

        <Container size="xl" pb={{ base: 40, sm: 56 }} style={{ position: 'relative', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Stack gap="md" maw={720}>
              <Text
                fw={800}
                size="sm"
                tt="uppercase"
                style={{
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.92)',
                }}
              >
                Girlified
              </Text>

              <Title
                order={1}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: 'clamp(1.75rem, 4.2vw, 3rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.5px',
                  lineHeight: 1.12,
                  color: 'white',
                }}
              >
                Selected for the M Ventures Accelerator to Advance Next-Generation Sustainable
                Menstrual Technology
              </Title>

              <Text size="lg" c="rgba(255,255,255,0.82)" maw={560} style={{ lineHeight: 1.55 }}>
                A $30,000 global accelerator backing research-based, sustainable menstrual health
                solutions across Africa.
              </Text>

              <Group gap="md" wrap="wrap" mt={4}>
                <Badge
                  radius="sm"
                  size="lg"
                  style={{
                    backgroundColor: 'rgba(15, 118, 110, 0.85)',
                    color: 'white',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Partnership
                </Badge>
                <Group gap={6}>
                  <IconCalendar size={15} color="rgba(255,255,255,0.7)" />
                  <Text size="sm" fw={600} c="rgba(255,255,255,0.7)">
                    July 2026
                  </Text>
                </Group>
                <Group gap={6}>
                  <IconClock size={15} color="rgba(255,255,255,0.7)" />
                  <Text size="sm" fw={600} c="rgba(255,255,255,0.7)">
                    5 min read
                  </Text>
                </Group>
              </Group>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Announcement lead */}
      <Box style={{ backgroundColor: SURFACE }}>
        <Container size="md" py={{ base: 48, sm: 64 }}>
          <Stack gap="lg">
            <BodyText>
              We are excited to announce that{' '}
              <Anchor
                component={Link}
                href="/"
                underline="always"
                style={{ color: ACCENT, fontWeight: 600 }}
              >
                Girlified
              </Anchor>{' '}
              has been selected for the $30,000{' '}
              <ExtLink href="https://www.menstrualventures.org/">M Ventures Accelerator</ExtLink>, a
              global program supporting innovators developing the next generation of sustainable
              menstrual health solutions.{' '}
              <ExtLink href="https://www.menstrualventures.org/">M Ventures</ExtLink> is a program of{' '}
              <ExtLink href="https://capital-m.org/">Capital M</ExtLink> an initiative by the{' '}
              <ExtLink href="https://shfund.org/">UN&apos;s Sanitation and Hygiene Fund (SHF)</ExtLink>{' '}
               and implemented by <ExtLink href="https://bopinc.org/">Bopinc</ExtLink>. This
              milestone shows our commitment to advancing research-based solutions to provide
              accessible and affordable menstrual solutions to women and girls in underserved
              communities.
            </BodyText>

            <BodyText>
              Since launching commercially in 2023, Girlified has grown into one of Nigeria&apos;s
              leading biodegradable menstrual health enterprises. Built on years of research and
              community engagement, we have sold over 2 million sanitary pads and reached over 70,000
              women and girls across Northern Nigeria through schools, pharmacies, retailers, NGOs,
              and institutional partnerships.
            </BodyText>
          </Stack>
        </Container>
      </Box>

      {/* Impact strip */}
      <Box style={{ backgroundColor: SLATE, color: 'white' }}>
        <Container size="xl" py={{ base: 32, sm: 40 }}>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Stack gap={6} align="center" ta="center">
                  <Text
                    fw={800}
                    style={{
                      fontFamily: playfair.style.fontFamily,
                      fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.5px',
                    }}
                  >
                    {metric.value}
                  </Text>
                  <Text
                    size="sm"
                    fw={600}
                    tt="uppercase"
                    style={{ letterSpacing: '0.08em', opacity: 0.7 }}
                  >
                    {metric.label}
                  </Text>
                </Stack>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Dual innovation pillars */}
      <Box
        style={{
          position: 'relative',
          backgroundColor: SURFACE,
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 55% 45% at 100% 0%, ${ACCENT_SOFT} 0%, transparent 65%)`,
            pointerEvents: 'none',
          }}
        />
        <Container size="xl" py={{ base: 56, sm: 72 }} style={{ position: 'relative' }}>
          <Stack gap={40}>
            <Stack gap="sm" maw={640}>
              <Group gap="xs">
                <IconRocket size={18} color={ACCENT} />
                <Text
                  fw={700}
                  size="sm"
                  c={ACCENT}
                  tt="uppercase"
                  style={{ letterSpacing: '0.1em' }}
                >
                  R&amp;D pilot
                </Text>
              </Group>
              <Title
                order={2}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: 'clamp(1.5rem, 3vw, 2.15rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.4px',
                  lineHeight: 1.2,
                  color: INK,
                }}
              >
                Two innovations shaping the next generation of Girlified pads
              </Title>
              <BodyText>
                Through the{' '}
                <ExtLink href="https://www.menstrualventures.org/">M Ventures Accelerator</ExtLink>, we
                will embark on an ambitious research and development pilot to create the next
                generation of Girlified sanitary pads. This pilot will focus on two major innovations.
              </BodyText>
            </Stack>

            <Grid gutter={{ base: 28, md: 32 }}>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    style={{
                      height: '100%',
                      padding: '32px 28px',
                      backgroundColor: 'white',
                      border: `1px solid ${ACCENT_BORDER}`,
                      borderRadius: 16,
                    }}
                  >
                    <Stack gap="lg">
                      <Group gap="sm">
                        <Box
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            backgroundColor: ACCENT_SOFT,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconDroplet size={22} color={ACCENT} />
                        </Box>
                        <Text fw={800} size="lg" c={INK}>
                          Higher absorbency
                        </Text>
                      </Group>

                      <BodyText>
                        First, we will use nanoparticle-driven engineering of plant fiber structures
                        to improve absorbency and moisture wicking, increasing our current absorbency
                        performance from approximately 67% to at least 85% without increasing the
                        retail price. This will provide greater comfort, reduce leakage, and allow
                        women and girls to use fewer pads during their menstrual cycle, lowering their
                        overall menstrual costs.
                      </BodyText>

                      <Stack gap="xs">
                        <Group justify="space-between">
                          <Text
                            size="xs"
                            fw={700}
                            c={MUTED}
                            tt="uppercase"
                            style={{ letterSpacing: '0.06em' }}
                          >
                            Current
                          </Text>
                          <Text size="sm" fw={800} c={INK}>
                            ~67%
                          </Text>
                        </Group>
                        <Box
                          style={{
                            height: 6,
                            borderRadius: 999,
                            backgroundColor: ACCENT_BORDER,
                            overflow: 'hidden',
                          }}
                        >
                          <Box
                            style={{
                              width: '67%',
                              height: '100%',
                              backgroundColor: 'rgba(29, 78, 216, 0.45)',
                              borderRadius: 999,
                            }}
                          />
                        </Box>

                        <Group justify="space-between" mt={6}>
                          <Text
                            size="xs"
                            fw={700}
                            c={ACCENT}
                            tt="uppercase"
                            style={{ letterSpacing: '0.06em' }}
                          >
                            Target
                          </Text>
                          <Text size="sm" fw={800} c={ACCENT}>
                            ≥85%
                          </Text>
                        </Group>
                        <Box
                          style={{
                            height: 6,
                            borderRadius: 999,
                            backgroundColor: ACCENT_BORDER,
                            overflow: 'hidden',
                          }}
                        >
                          <Box
                            style={{
                              width: '85%',
                              height: '100%',
                              backgroundColor: ACCENT,
                              borderRadius: 999,
                            }}
                          />
                        </Box>
                      </Stack>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  style={{ height: '100%' }}
                >
                  <Box
                    style={{
                      height: '100%',
                      padding: '32px 28px',
                      backgroundColor: 'white',
                      border: `1px solid ${ACCENT_BORDER}`,
                      borderRadius: 16,
                    }}
                  >
                    <Stack gap="lg">
                      <Group gap="sm">
                        <Box
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            backgroundColor: ACCENT_SOFT,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconLeaf size={22} color={ACCENT} />
                        </Box>
                        <Text fw={800} size="lg" c={INK}>
                          Full biodegradability
                        </Text>
                      </Group>

                      <BodyText>
                        Secondly, we will ensure full biodegradability of our menstrual pad —
                        advancing a product path where women and girls never have to choose between
                        affordability, quality, and environmental responsibility.
                      </BodyText>

                      <BodyText>
                        Over the years, we have always believed that menstrual health should not force
                        that trade-off. Participation in{' '}
                        <ExtLink href="https://www.menstrualventures.org/">M Ventures</ExtLink>{' '}
                        provides us access to world-class technical mentors, menstrual health experts,
                        researchers, and industry partners who will help validate our technology,
                        strengthen our product design, and generate the scientific evidence needed to
                        scale our innovation across West Africa.
                      </BodyText>
                    </Stack>
                  </Box>
                </motion.div>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Closing / gratitude */}
      <Box
        style={{
          borderTop: `1px solid ${ACCENT_BORDER}`,
          backgroundColor: 'white',
        }}
      >
        <Container size="md" py={{ base: 56, sm: 72 }}>
          <Stack gap="xl">
            <Title
              order={2}
              style={{
                fontFamily: playfair.style.fontFamily,
                fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)',
                fontWeight: 700,
                letterSpacing: '-0.35px',
                lineHeight: 1.25,
                color: INK,
              }}
            >
              Built in Africa. Backed to scale.
            </Title>

            <BodyText>
              The knowledge and partnerships developed through this accelerator will play a critical
              role in helping us bring a fully biodegradable, high-performance menstrual product to
              millions of women and girls. We are grateful to the{' '}
              <ExtLink href="https://www.menstrualventures.org/">M Ventures</ExtLink> team for
              believing in our vision and look forward to sharing the outcomes of this exciting next
              chapter. Together, we are proving that the future of menstrual health can be innovative,
              sustainable, and built in Africa.
            </BodyText>

            <Group gap="md" wrap="wrap" mt="sm">
              <Button
                component={Link}
                href="/research"
                size="md"
                radius="md"
                rightSection={<IconArrowUpRight size={16} />}
                style={{
                  backgroundColor: ACCENT,
                  fontWeight: 700,
                }}
              >
                Explore our research
              </Button>
              <Button
                component={Link}
                href="/contact-us"
                size="md"
                radius="md"
                variant="outline"
                style={{
                  borderColor: ACCENT,
                  color: ACCENT,
                  fontWeight: 700,
                }}
              >
                Get in touch
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default MVenturesAcceleratorPage;
