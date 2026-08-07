'use client';

import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { IconDeviceMobile, IconPackage, IconReceipt, IconUserCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Anchor, Box, Container, Grid, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const ACCENT = '#FF007F';
const ACCENT_SOFT = 'rgba(255, 0, 127, 0.08)';
const ACCENT_BORDER = 'rgba(255, 0, 127, 0.16)';
const SLATE = '#0C090B';
const SURFACE = '#FBF6EE';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

const howItWorks = [
  {
    step: '01',
    title: 'Register',
    description:
      'Sign up through USSD, SMS, or WhatsApp using your National Identification Number (NIN).',
    icon: IconUserCheck,
  },
  {
    step: '02',
    title: 'Receive',
    description:
      'Get pads immediately from a community retail partner near you, no smartphone required.',
    icon: IconPackage,
  },
  {
    step: '03',
    title: 'Repay',
    description:
      'Pay later in small installments while our credit engine tracks eligibility and repayment.',
    icon: IconReceipt,
  },
];

const tosItems = [
  {
    title: 'Eligibility',
    body: "Access is available to qualifying users verified with Nigeria's National Identification Number (NIN), subject to Girlified's credit eligibility rules.",
  },
  {
    title: 'Access channels',
    body: 'You may register and request products through USSD, SMS, or WhatsApp so the service remains available with or without internet access.',
  },
  {
    title: 'Orders & fulfillment',
    body: 'Orders are fulfilled by community retail partners in your area. Products are released after eligibility confirmation through our platform.',
  },
  {
    title: 'Repayment',
    body: 'By receiving products under Buy Now, Pay Later, you agree to repay in the agreed installments. Late or missed repayments may affect future eligibility.',
  },
  {
    title: 'Credit assessment',
    body: 'We use a data-driven credit profiling system to automate eligibility assessment and repayment tracking, helping manage risk while expanding access.',
  },
];

const BodyText = ({ children }: { children: React.ReactNode }) => (
  <Text size="md" style={{ lineHeight: 1.8, color: MUTED }}>
    {children}
  </Text>
);

const BnplPage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: SURFACE, overflowX: 'hidden' }}>
      {/* Hero — 100vh */}
      <Box
        component="section"
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/images/bnpl/bnpl-hero.jpg"
          alt="Young woman in a community store dialing a USSD code on a feature phone"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(12, 9, 11, 0.1) 0%, rgba(12, 9, 11, 0.25) 45%, rgba(12, 9, 11, 0.75) 100%)',
            pointerEvents: 'none',
          }}
        />

        <Container
          size="xl"
          pb={{ base: 140, sm: 120 }}
          style={{ position: 'relative', width: '100%' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Stack gap="md" maw={720} ta="left">
              <Title
                order={1}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.5px',
                  lineHeight: 1.1,
                  color: 'white',
                }}
              >
                Buy Now, Pay Later
              </Title>

              <Text size="lg" c="rgba(255,255,255,0.82)" maw={580} style={{ lineHeight: 1.55 }}>
                Affordable access to essential menstrual products through Buy-Now-Pay-Later, powered
                by a last-mile community distribution network.
              </Text>

              <Text
                size="sm"
                fw={600}
                tt="uppercase"
                style={{ letterSpacing: '0.1em', color: 'rgba(255,255,255,0.65)' }}
              >
                USSD · SMS · WhatsApp
              </Text>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* BNPL feature */}
      <Box component="section" style={{ backgroundColor: SURFACE }}>
        <Container size="lg" py={{ base: 56, sm: 80 }}>
          <Stack gap={48}>
            <Grid gutter={{ base: 32, md: 48 }} align="flex-start">
              <Grid.Col span={{ base: 12, md: 5 }}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45 }}
                >
                  <Stack gap="sm">
                    <Group gap="xs">
                      <IconDeviceMobile size={18} color={ACCENT} />
                      <Text
                        fw={700}
                        size="sm"
                        c={ACCENT}
                        tt="uppercase"
                        style={{ letterSpacing: '0.1em' }}
                      >
                        The feature
                      </Text>
                    </Group>
                    <Title
                      order={2}
                      style={{
                        fontFamily: playfair.style.fontFamily,
                        fontSize: 'clamp(1.55rem, 3vw, 2.15rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.4px',
                        lineHeight: 1.2,
                        color: INK,
                      }}
                    >
                      Sanitary Pads when you need them, even when money is tight
                    </Title>
                  </Stack>
                </motion.div>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 7 }}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                >
                  <Stack gap="lg">
                    <BodyText>
                      Periods do not wait for payday. Girlified Buy Now, Pay Later helps women and
                      girls in Nigeria get sanitary pads when they need them, then repay in small,
                      manageable installments.
                    </BodyText>
                    <BodyText>
                      Sign up on USSD, SMS, or WhatsApp with your National Identification Number (NIN),
                      no smartphone or internet required. A nearby community retailer fulfills your
                      order, while our credit system checks eligibility and tracks repayment in the
                      background.
                    </BodyText>
                    <BodyText>
                      The model supports local shops instead of cutting them out. To date, it has
                      impacted over 70,000 women and girls, with over 2 million sanitary pads
                      sold.
                    </BodyText>
                  </Stack>
                </motion.div>
              </Grid.Col>
            </Grid>

            {/* How it works */}
            <Box
              style={{
                backgroundColor: 'white',
                border: `1px solid ${ACCENT_BORDER}`,
                borderRadius: 16,
                padding: '28px 24px',
              }}
            >
              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
                {howItWorks.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <Stack gap="sm">
                        <Group gap="sm">
                          <Box
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: 10,
                              backgroundColor: ACCENT_SOFT,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon size={20} color={ACCENT} />
                          </Box>
                          <Text
                            size="xs"
                            fw={800}
                            c={ACCENT}
                            style={{
                              fontFamily: playfair.style.fontFamily,
                              fontSize: '1.25rem',
                              letterSpacing: '-0.5px',
                            }}
                          >
                            {item.step}
                          </Text>
                        </Group>
                        <Text fw={800} size="lg" c={INK}>
                          {item.title}
                        </Text>
                        <Text size="sm" c={MUTED} style={{ lineHeight: 1.65 }}>
                          {item.description}
                        </Text>
                      </Stack>
                    </motion.div>
                  );
                })}
              </SimpleGrid>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Terms of Service */}
      <Box
        component="section"
        style={{ borderTop: `1px solid ${ACCENT_BORDER}` }}
      >
        <Container size="md" py={{ base: 56, sm: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
          >
            <Stack gap={36}>
              <Stack gap="sm">
                <Title
                  order={2}
                  style={{
                    fontFamily: playfair.style.fontFamily,
                    fontSize: 'clamp(1.55rem, 3vw, 2.1rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.4px',
                    lineHeight: 1.2,
                    color: INK,
                  }}
                >
                  Terms of Service
                </Title>
                <BodyText>
                  A brief summary of how Girlified Buy Now, Pay Later works. This is not a
                  substitute for our full legal terms.
                </BodyText>
              </Stack>

              <Stack gap={0}>
                {tosItems.map((item, i) => (
                  <Box
                    key={item.title}
                    py="lg"
                    style={{
                      borderTop: `1px solid ${ACCENT_BORDER}`,
                      borderBottom:
                        i === tosItems.length - 1 ? `1px solid ${ACCENT_BORDER}` : undefined,
                    }}
                  >
                    <Stack gap={6}>
                      <Text fw={800} size="md" c={INK}>
                        {item.title}
                      </Text>
                      <Text size="sm" c={MUTED} style={{ lineHeight: 1.7 }}>
                        {item.body}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </Stack>

              <Box
                p="lg"
                style={{
                  backgroundColor: SLATE,
                  borderRadius: 14,
                  color: 'white',
                }}
              >
                <Text size="sm" style={{ lineHeight: 1.7, color: 'rgba(255,255,255,0.8)' }}>
                  This page summarizes BNPL-specific terms. Use of Girlified services is also
                  governed by our full{' '}
                  <Anchor
                    component={Link}
                    href="/terms-of-service"
                    underline="always"
                    style={{ color: '#FFB3D4', fontWeight: 600 }}
                  >
                    Terms of Service
                  </Anchor>{' '}
                  and{' '}
                  <Anchor
                    component={Link}
                    href="/privacy-policy"
                    underline="always"
                    style={{ color: '#FFB3D4', fontWeight: 600 }}
                  >
                    Privacy Policy
                  </Anchor>
                  .
                </Text>
              </Box>
            </Stack>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default BnplPage;
