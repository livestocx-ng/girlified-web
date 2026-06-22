'use client';

import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconArrowUpRight,
  IconBriefcase,
  IconCalendar,
  IconChartBar,
  IconClock,
  IconPresentation,
  IconTargetArrow,
  IconUsers,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
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

const CRIMSON = '#A31F34';
const CRIMSON_LIGHT = 'rgba(163, 31, 52, 0.1)';
const SLATE = '#1E293B';
const SLATE_LIGHT = '#F8FAFC';
const SLATE_BORDER = 'rgba(30, 41, 59, 0.12)';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

const deliverables = [
  {
    icon: IconPresentation,
    title: 'Investor pitch deck',
    description:
      'A polished deck communicating impact, commercial potential, and long-term sustainability.',
  },
  {
    icon: IconUsers,
    title: 'Investor pipeline',
    description:
      'A curated database of mission-aligned partners from grants to equity and impact investors.',
  },
  {
    icon: IconChartBar,
    title: '2026–2028 fundraising plan',
    description:
      'A three-year roadmap with actionable metrics, milestones, and scenario-based financing strategies.',
  },
];

const focusAreas = [
  "Women's health",
  'Plastics reduction',
  'Circular economy',
  'Climate innovation',
  'Gender-lens funds',
  'Impact investing',
];

const engagementPhases = [
  {
    period: 'Nov 2025',
    label: 'Kick-off & discovery',
    detail: 'Leadership interviews, financial reviews, and operational data assessments.',
  },
  {
    period: 'Dec 2025',
    label: 'Analysis & mapping',
    detail: 'Investor discovery, market benchmarking, and global funding opportunity mapping.',
  },
  {
    period: 'Jan 2026',
    label: 'Roadmap delivery',
    detail: 'Pitch deck, investor pipeline, and multi-year fundraising strategy finalised.',
  },
];

const BodyText = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <Text size="md" style={{ lineHeight: 1.75, color: light ? 'rgba(255,255,255,0.82)' : MUTED }}>
    {children}
  </Text>
);

const GirlifiedXMitPage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#FBF6EE', overflowX: 'hidden' }}>
      {/* Partnership announcement hero */}
      <Box
        component="section"
        style={{
          position: 'relative',
          backgroundColor: SLATE,
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(135deg, rgba(163, 31, 52, 0.15) 0%, transparent 50%),
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: 'auto, 48px 48px, 48px 48px',
            pointerEvents: 'none',
          }}
        />

        <Container
          size="xl"
          pt={{ base: 120, sm: 140 }}
          pb={{ base: 56, sm: 72 }}
          style={{ position: 'relative' }}
        >
          <Grid gutter={{ base: 'xl', md: 48 }} align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <Stack gap="lg">
                  <Badge
                    radius="xl"
                    size="lg"
                    leftSection={<IconBriefcase size={14} />}
                    style={{
                      backgroundColor: CRIMSON_LIGHT,
                      color: '#FCA5A5',
                      border: '1px solid rgba(163, 31, 52, 0.35)',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Strategic partnership
                  </Badge>

                  {/* Dual-brand lockup */}
                  <Group gap="md" align="center" wrap="nowrap">
                    <Text fw={800} size="lg" c="white" style={{ letterSpacing: '-0.3px' }}>
                      Girlified
                    </Text>
                    <Box
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        backgroundColor: 'rgba(255,255,255,0.06)',
                      }}
                    >
                      <Text fw={300} size="xl" c="rgba(255,255,255,0.6)" style={{ lineHeight: 1 }}>
                        ×
                      </Text>
                    </Box>
                    <Box style={{ position: 'relative', width: 120, height: 36, flexShrink: 0 }}>
                      <Image
                        src="/images/sponsors/mit-sloan.png"
                        alt="MIT Sloan School of Management"
                        fill
                        sizes="120px"
                        style={{
                          objectFit: 'contain',
                          objectPosition: 'left center',
                          filter: 'brightness(0) invert(1)',
                        }}
                      />
                    </Box>
                  </Group>

                  <Title
                    order={1}
                    style={{
                      fontFamily: playfair.style.fontFamily,
                      fontSize: 'clamp(1.65rem, 3.5vw, 2.5rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.5px',
                      lineHeight: 1.15,
                      color: 'white',
                    }}
                  >
                    Building a Fundraising &amp; Financial Growth Roadmap with MIT Sloan SEID
                  </Title>

                  <BodyText light>
                    Girlified announces a strategic partnership with the Sloan Entrepreneurs for
                    International Development (SEID) program — a milestone in our scale-up journey
                    toward continental growth in the biodegradable menstrual hygiene market.
                  </BodyText>

                  <Group gap="md" wrap="wrap">
                    <Group gap={6}>
                      <IconCalendar size={15} color={CRIMSON} />
                      <Text size="sm" fw={600} c="rgba(255,255,255,0.65)">
                        11 December 2025
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <IconClock size={15} color={CRIMSON} />
                      <Text size="sm" fw={600} c="rgba(255,255,255,0.65)">
                        4 min read
                      </Text>
                    </Group>
                  </Group>
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Box
                  style={{
                    position: 'relative',
                    aspectRatio: '1 / 1',
                    borderRadius: 20,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.35)',
                  }}
                >
                  <Image
                    src="/images/blog/girlified-x-mit/partnership.jpg"
                    alt="Girlified and MIT Sloan SEID strategic partnership"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Engagement timeline strip */}
      <Box style={{ backgroundColor: CRIMSON, color: 'white' }}>
        <Container size="xl" py="lg">
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            {engagementPhases.map((phase) => (
              <Stack key={phase.period} gap={4} align="center" ta="center">
                <Text
                  fw={800}
                  size="sm"
                  tt="uppercase"
                  style={{ letterSpacing: '0.1em', opacity: 0.85 }}
                >
                  {phase.period}
                </Text>
                <Text fw={700} size="md">
                  {phase.label}
                </Text>
                <Text size="xs" c="rgba(255,255,255,0.75)" maw={220} style={{ lineHeight: 1.5 }}>
                  {phase.detail}
                </Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Container size="xl" py={{ base: 48, sm: 64 }}>
        <Stack gap={56}>
          {/* Overview */}
          <Grid gutter="xl" align="flex-start">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="xs" style={{ position: 'sticky', top: 100 }}>
                <Text
                  size="xs"
                  fw={800}
                  c={CRIMSON}
                  tt="uppercase"
                  style={{ letterSpacing: '0.14em' }}
                >
                  The engagement
                </Text>
                <Title
                  order={2}
                  style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.4rem', color: INK }}
                >
                  Nov 2025 – Jan 2026
                </Title>
                <Text size="sm" c={MUTED} style={{ lineHeight: 1.6 }}>
                  Graduate consultants from MIT Sloan working closely with Girlified leadership.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="md">
                <BodyText>
                  Through this engagement, a team of graduate consultants from MIT Sloan will work
                  closely with Girlified between November 2025 and January 2026 to develop a
                  comprehensive financial planning and fundraising roadmap. The project will involve
                  deep financial analysis, investor discovery, market benchmarking, and the
                  development of a compelling investor-facing pitch deck that clearly communicates
                  Girlified&apos;s impact, commercial potential, and long-term sustainability model.
                </BodyText>
                <BodyText>
                  The collaboration aims to strengthen our financial architecture, refine unit
                  economics, and help identify mission-aligned partners ranging from grant funders
                  to equity and impact investors.
                </BodyText>
              </Stack>
            </Grid.Col>
          </Grid>

          <Box style={{ height: 1, backgroundColor: SLATE_BORDER }} />

          {/* Financial narrative */}
          <Grid gutter="xl" align="flex-start">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="md">
                <Text
                  size="xs"
                  fw={800}
                  c={CRIMSON}
                  tt="uppercase"
                  style={{ letterSpacing: '0.14em' }}
                >
                  Financial narrative
                </Text>
                <Title
                  order={2}
                  style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.35rem', color: INK }}
                >
                  Translating impact into investor-ready materials
                </Title>
                <BodyText>
                  This partnership is centred around building Girlified&apos;s financial narrative
                  in a manner that translates our technical work, R&amp;D investment, and community
                  impact into investor-ready materials. The MIT team will map global funding
                  opportunities in women&apos;s health, plastics reduction, circular economy, and
                  climate innovation, while also developing an investor pipeline database and a
                  multi-year fundraising strategy tailored to our scale-up goals.
                </BodyText>
                <BodyText>
                  Beyond pitch deck development and investor research, the project will create a
                  three-year roadmap detailing step-by-step actions from early fundraising to
                  long-term capital mobilisation, including engagement strategies for international
                  VCs, gender-lens funds, DFIs, government programs and humanitarian procurement
                  channels.
                </BodyText>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Box
                p="lg"
                style={{
                  borderRadius: 16,
                  backgroundColor: SLATE_LIGHT,
                  border: `1px solid ${SLATE_BORDER}`,
                }}
              >
                <Stack gap="sm">
                  <Group gap={8}>
                    <IconTargetArrow size={18} color={CRIMSON} />
                    <Text size="sm" fw={700} c={INK}>
                      Funding focus areas
                    </Text>
                  </Group>
                  <Group gap={8}>
                    {focusAreas.map((area) => (
                      <Badge
                        key={area}
                        radius="xl"
                        variant="outline"
                        style={{
                          borderColor: SLATE_BORDER,
                          color: MUTED,
                          fontWeight: 600,
                          textTransform: 'none',
                        }}
                      >
                        {area}
                      </Badge>
                    ))}
                  </Group>
                </Stack>
              </Box>
            </Grid.Col>
          </Grid>

          {/* Deliverables */}
          <Box>
            <Stack gap="xs" mb="xl">
              <Text
                size="xs"
                fw={800}
                c={CRIMSON}
                tt="uppercase"
                style={{ letterSpacing: '0.14em' }}
              >
                Project deliverables
              </Text>
              <Title
                order={2}
                style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.4rem', color: INK }}
              >
                What Girlified receives at completion
              </Title>
            </Stack>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
              {deliverables.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Box
                    h="100%"
                    p="lg"
                    style={{
                      borderRadius: 16,
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      border: `1px solid ${SLATE_BORDER}`,
                      borderTop: `3px solid ${CRIMSON}`,
                    }}
                  >
                    <Stack gap="sm">
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 10,
                          backgroundColor: CRIMSON_LIGHT,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <item.icon size={20} color={CRIMSON} />
                      </Box>
                      <Text fw={700} c={INK}>
                        {item.title}
                      </Text>
                      <Text size="sm" c={MUTED} style={{ lineHeight: 1.6 }}>
                        {item.description}
                      </Text>
                    </Stack>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>

          {/* Leadership engagement */}
          <Box
            px={{ base: 'lg', sm: 'xl' }}
            py="xl"
            style={{
              borderRadius: 20,
              backgroundColor: SLATE,
              color: 'white',
            }}
          >
            <Grid gutter="xl" align="center">
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Stack gap="md">
                  <Text
                    size="xs"
                    fw={800}
                    c="#FCA5A5"
                    tt="uppercase"
                    style={{ letterSpacing: '0.14em' }}
                  >
                    Leadership engagement
                  </Text>
                  <Title
                    order={3}
                    style={{
                      fontFamily: playfair.style.fontFamily,
                      fontSize: '1.25rem',
                      color: 'white',
                    }}
                  >
                    Deep collaboration across operations and impact
                  </Title>
                  <BodyText light>
                    As part of the project, the consulting team will engage Girlified leadership
                    through interviews, financial reviews, operational data assessments and impact
                    measurement alignment. The work will also explore how Girlified can leverage
                    institutional partnerships across Africa and globally, including collaborations
                    with MIT&apos;s Impact Investing Club and Kuo Sharper Center.
                  </BodyText>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Box
                  p="lg"
                  style={{
                    borderRadius: 14,
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Text fw={800} size="2rem" c="white" style={{ lineHeight: 1 }}>
                    350,000+
                  </Text>
                  <Text size="sm" mt={6} c="rgba(255,255,255,0.7)">
                    packs already sold using locally sourced banana fibre and cotton
                  </Text>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          {/* Closing */}
          <Stack gap="md">
            <BodyText>
              This partnership reinforces Girlified&apos;s commitment to building a scalable and
              investment-ready business that can transform menstrual health access in Africa while
              eliminating plastic pollution from disposable sanitary products. With over 350,000
              packs already sold using locally sourced banana fibre and cotton, Girlified is
              entering a new phase that demands robust manufacturing capacity, equipment financing,
              and strategic capital deployment. The SEID collaboration will be instrumental in
              helping us unlock that growth.
            </BodyText>
            <BodyText>
              We are proud to work with the MIT Sloan SEID program, not only for the world-class
              expertise the team brings, but also because it aligns with our belief in data-driven
              decision-making, research-rooted product development, and high-impact innovation.
              Together, we are building a future where biodegradable menstrual pads are accessible,
              affordable, and manufactured on African soil at scale.
            </BodyText>
          </Stack>

          {/* Thank you */}
          <Box
            p={{ base: 'lg', sm: 'xl' }}
            style={{
              borderRadius: 18,
              backgroundColor: CRIMSON_LIGHT,
              border: `1px solid rgba(163, 31, 52, 0.2)`,
              borderLeft: `4px solid ${CRIMSON}`,
            }}
          >
            <Text style={{ lineHeight: 1.7, color: INK, fontStyle: 'italic' }}>
              On behalf of the entire Girlified team, our founder, Emadago Oghenekevwe William,
              wishes to thank the entire SEID team, most especially Chloe Delfau, for leading this
              initiative.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default GirlifiedXMitPage;
