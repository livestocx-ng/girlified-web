'use client';

import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';
import { IconCalendar, IconClock, IconLeaf, IconRocket } from '@tabler/icons-react';
import { Badge, Box, Container, Grid, Group, Stack, Text, Title } from '@mantine/core';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const INDIGO = '#4338CA';
const INDIGO_LIGHT = '#EEF2FF';
const INDIGO_BORDER = 'rgba(67, 56, 202, 0.18)';
const AMBER = '#D97706';
const AMBER_LIGHT = '#FFFBEB';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

const chapters = [
  {
    num: '01',
    title: 'From research to real product',
    body: [
      'As you might have known, our goal as a company and as individuals is to put an end to period poverty that is affecting over 500 million women and girls around the world—a threat to their dignity and health. This problem is even worse in underdeveloped regions like Sub-Saharan Africa where we are based and is contributing to gender inequality.',
      'We have been working to meet the needs of these women and also increase their productivity through our sanitary napkin product, Girlified. Through the support of the Government of Canada under the Afri-plastics Challenge, we were able to convert what was purely a research-based project at the University of Jos, Nigeria and under Naza Agape Foundation, to a full product that is changing the lives of women and girls in Africa today.',
    ],
  },
  {
    num: '02',
    title: 'Seven weeks in China',
    body: [
      'In June 2023, after Oghenekevwe was granted the OSV fellowship, we set out to get implementing partners who could build the machine we had designed. After a very long search, we came across machine manufacturers in China. After the initial agreements, they set out to work and got to the point where we had to physically visit and conclude all the necessary details of the machine before it would be brought to Nigeria. For this reason, Oghenekevwe travelled to do the job.',
      'With further support from O\'Shaughnessy Ventures through the OSV fellowship granted to our co-founder Oghenekevwe, we have been able to exponentially scale our business and impact and will be doing so in an even grander fashion through the new machine we have built to 50× our current output.',
      'He spent over 7 weeks in China working with our Chinese contractors to customize our high-output and automated sanitary napkin machine. Throughout this time, he has worked with them to implement our designs and bring the machine to life—and right now, after this much time, we have success.',
    ],
    image: {
      src: '/images/blog/10-million/china_partnership.jpg',
      alt: 'Oghenekevwe with Engr. Liu at machine manufacturers in China',
      caption: 'Oghenekevwe with Engr. Liu in China',
    },
  },
  {
    num: '03',
    title: 'A machine that changes everything',
    body: [
      'Girlified now has a machine capable of producing 30,000 sanitary napkins every single day. Yes, you read that well. This is an exponential boost to the current state of our business and overall impact on local women and girls, their hygiene and overall well-being.',
      'As an environmentally conscious organisation, it is also a huge plus for the environment as our product incorporates biodegradable materials like banana stem fibre and natural cotton as a replacement to plastic-based materials used in conventional products. With these steps, we will be eliminating over 1000 tons of plastic from sanitary napkins by the end of 2025.',
    ],
    image: {
      src: '/images/blog/10-million/machine.jpg',
      alt: 'Girlified high-output automated sanitary napkin production machine',
      caption: 'Our customized high-output automated sanitary napkin machine',
    },
  },
];

const BodyText = ({ children }: { children: React.ReactNode }) => (
  <Text size="md" style={{ lineHeight: 1.75, color: MUTED }}>
    {children}
  </Text>
);

const TenMillionSanitaryNapkinsPage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#FBF6EE', overflowX: 'hidden' }}>
      {/* Typographic milestone hero */}
      <Box
        component="section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${INDIGO_BORDER}`,
        }}
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(${INDIGO} 0.6px, transparent 0.6px)`,
            backgroundSize: '28px 28px',
            opacity: 0.08,
            pointerEvents: 'none',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 70% 55% at 15% 0%, ${INDIGO_LIGHT} 0%, transparent 65%)`,
            pointerEvents: 'none',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            bottom: -120,
            right: -60,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(217, 119, 6, 0.1) 0%, transparent 68%)`,
            pointerEvents: 'none',
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: `linear-gradient(90deg, ${INDIGO} 0%, ${AMBER} 50%, transparent 100%)`,
            pointerEvents: 'none',
          }}
        />

        <Container size="xl" pt={{ base: 120, sm: 140 }} pb={{ base: 56, sm: 80 }} style={{ position: 'relative' }}>
          <Grid gutter={{ base: 'xl', md: 48 }} align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
              >
                <Stack gap="lg">
                  <Badge
                    radius="xl"
                    size="lg"
                    leftSection={<IconRocket size={14} />}
                    style={{
                      backgroundColor: INDIGO_LIGHT,
                      color: INDIGO,
                      border: `1px solid ${INDIGO_BORDER}`,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      alignSelf: 'flex-start',
                    }}
                  >
                    Manufacturing milestone
                  </Badge>

                  <Stack gap="sm">
                    <Title
                      order={1}
                      style={{
                        fontFamily: playfair.style.fontFamily,
                        fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.6px',
                        lineHeight: 1.12,
                        color: INK,
                      }}
                    >
                      Sanitary Napkins Every Year, Now Achievable
                    </Title>
                    <Box
                      style={{
                        width: 72,
                        height: 3,
                        borderRadius: 999,
                        background: `linear-gradient(90deg, ${INDIGO}, ${AMBER})`,
                      }}
                    />
                  </Stack>

                  <Text
                    size="lg"
                    maw={560}
                    style={{ lineHeight: 1.65, color: MUTED }}
                  >
                    A new automated production line puts period dignity within reach for millions and cuts plastic waste
                    at scale.
                  </Text>

                  <Group
                    gap="md"
                    wrap="wrap"
                    pt="xs"
                    style={{ borderTop: `1px solid ${INDIGO_BORDER}` }}
                  >
                    <Group gap={6}>
                      <IconCalendar size={15} color={INDIGO} />
                      <Text size="sm" fw={600} c={MUTED}>
                        June 2024
                      </Text>
                    </Group>
                    <Box w={1} h={14} style={{ backgroundColor: INDIGO_BORDER }} visibleFrom="sm" />
                    <Group gap={6}>
                      <IconClock size={15} color={INDIGO} />
                      <Text size="sm" fw={600} c={MUTED}>
                        5 min read
                      </Text>
                    </Group>
                  </Group>
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <Box style={{ position: 'relative' }}>
                  <Box
                    style={{
                      position: 'absolute',
                      inset: -12,
                      borderRadius: 28,
                      background: `linear-gradient(135deg, ${INDIGO} 0%, ${AMBER} 100%)`,
                      opacity: 0.18,
                      filter: 'blur(24px)',
                    }}
                  />
                  <Box
                    p={{ base: 'lg', sm: 'xl' }}
                    style={{
                      position: 'relative',
                      borderRadius: 24,
                      overflow: 'hidden',
                      backgroundColor: 'rgba(255, 255, 255, 0.72)',
                      border: `1px solid ${INDIGO_BORDER}`,
                      backdropFilter: 'blur(12px)',
                      boxShadow: '0 20px 48px rgba(67, 56, 202, 0.08)',
                    }}
                  >
                    <Box
                      style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.07,
                        pointerEvents: 'none',
                      }}
                    >
                      <Image
                        src="/images/blog/10-million/machine.jpg"
                        alt=""
                        fill
                        sizes="400px"
                        style={{ objectFit: 'cover' }}
                        aria-hidden
                      />
                    </Box>

                    <Stack align="center" gap={4} style={{ position: 'relative' }}>
                      <Text
                        style={{
                          fontFamily: playfair.style.fontFamily,
                          fontSize: 'clamp(4.5rem, 14vw, 7rem)',
                          fontWeight: 700,
                          lineHeight: 0.92,
                          letterSpacing: '-0.05em',
                          background: `linear-gradient(135deg, ${INDIGO} 0%, ${AMBER} 100%)`,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        10M
                      </Text>
                      <Text
                        size="xs"
                        fw={700}
                        tt="uppercase"
                        ta="center"
                        c={INDIGO}
                        style={{ letterSpacing: '0.18em' }}
                      >
                        Every year
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>


      <Container size="xl" py={{ base: 48, sm: 64 }}>
        <Stack gap={56}>
          {/* Chapters */}
          <Stack gap={48}>
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Grid gutter="xl" align="flex-start">
                  <Grid.Col span={{ base: 12, md: chapter.image ? 6 : 12 }}>
                    <Group gap="md" align="flex-start" mb="md">
                      <Text
                        fw={800}
                        style={{
                          fontSize: '2.5rem',
                          lineHeight: 1,
                          color: INDIGO_BORDER,
                          fontFamily: playfair.style.fontFamily,
                        }}
                      >
                        {chapter.num}
                      </Text>
                      <Title
                        order={2}
                        style={{
                          fontFamily: playfair.style.fontFamily,
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          color: INK,
                          flex: 1,
                          paddingTop: 4,
                        }}
                      >
                        {chapter.title}
                      </Title>
                    </Group>
                    <Stack gap="md">
                      {chapter.body.map((paragraph) => (
                        <BodyText key={paragraph.slice(0, 48)}>{paragraph}</BodyText>
                      ))}
                    </Stack>
                  </Grid.Col>

                  {chapter.image && (
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <Box
                        style={{
                          position: 'relative',
                          aspectRatio: '16 / 10',
                          borderRadius: 18,
                          overflow: 'hidden',
                          border: `1px solid ${INDIGO_BORDER}`,
                        }}
                      >
                        <Image
                          src={chapter.image.src}
                          alt={chapter.image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 520px"
                          style={{ objectFit: 'cover' }}
                        />
                      </Box>
                      <Text size="xs" mt="sm" c="rgba(12, 9, 11, 0.5)" style={{ lineHeight: 1.5 }}>
                        {chapter.image.caption}
                      </Text>
                    </Grid.Col>
                  )}
                </Grid>

                {index < chapters.length - 1 && (
                  <Box mt={48} style={{ height: 1, backgroundColor: INDIGO_BORDER }} />
                )}
              </motion.div>
            ))}
          </Stack>

          {/* Fibre research spotlight */}
          <Grid gutter="xl" align="stretch">
            {/* <Grid.Col span={{ base: 12, md: 6 }}>
              <Box
                style={{
                  position: 'relative',
                  aspectRatio: '16 / 10',
                  borderRadius: 18,
                  overflow: 'hidden',
                  border: `1px solid rgba(217, 119, 6, 0.2)`,
                }}
              >
                <Image
                  src="/images/blog/10-million/factory_visit.jpg"
                  alt="Factory visit during Girlified machine build"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
                />
              </Box>
            </Grid.Col> */}

            <Grid.Col span={{ base: 12, md: 12 }}>
              <Box
                h="100%"
                p={{ base: 'lg', sm: 'xl' }}
                style={{
                  borderRadius: 18,
                  backgroundColor: AMBER_LIGHT,
                  border: `1px solid rgba(217, 119, 6, 0.2)`,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Stack gap="md">
                  <Group gap={8}>
                    <IconLeaf size={20} color={AMBER} />
                    <Text size="xs" fw={800} c={AMBER} tt="uppercase" style={{ letterSpacing: '0.12em' }}>
                      Fibre to fluff
                    </Text>
                  </Group>
                  <Title order={3} style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.25rem', color: INK }}>
                    Beyond pads — banana stem fibre for a plastic-free future
                  </Title>
                  <BodyText>
                    Our &ldquo;fibre to fluff&rdquo; research on banana pseudo-stems is currently ongoing and we will be
                    making a publication on it before the year runs out. Our end goal is not just to end in making sanitary
                    napkins but to use banana stem fibre as a replacement for unsustainable and plastic-based materials in
                    diapers, clothes and other non-woven products.
                  </BodyText>
                </Stack>
              </Box>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default TenMillionSanitaryNapkinsPage;
