'use client';

import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconMicrophone,
  IconQuote,
  IconUsers,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  Badge,
  Box,
  Button,
  Card,
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

const articleImages = {
  hero: {
    src: '/images/blog/IMG_7090-2-EDITED-1-1536x922.jpg',
    alt: 'Girlified team facilitating focus group discussion in Rankyeng Village',
    caption:
      'Seven Girlified team members coordinated five separate focus groups during the hour-long engagement in Rankyeng Village, Jos South LGA.',
  },
  reportsIntro: {
    src: '/images/blog/IMG_7058-1536x1536.jpg',
    alt: 'Women and girls gathered for focus group discussion',
    caption:
      'Participants aged 12 to 48 shared candid feedback on comfort, pricing, and disposal habits.',
  },
  nyipoji: {
    src: '/images/blog/IMG_7039-1536x999.jpg',
    alt: 'Focus group discussion led by Nyipoji Kani',
    caption:
      'Nyipoji Kani interviewed 11 women on pad discomfort, affordability, and plastic pollution awareness.',
  },
  mercy: {
    src: '/images/blog/kyenret-1-1536x1536.jpg',
    alt: 'Teenage participants discussing sanitary pad preferences',
    caption: 'Mercy Kevin spoke with 15 teenagers—90% preferred Always for its longer length.',
  },
  kyenret: {
    src: '/images/blog/IMG_7092-1536x1229.jpg',
    alt: 'Kyenret Daluwa facilitating a focus group session',
    caption:
      'Kyenret Daluwa engaged 25 women and girls on brand preferences and product improvements.',
  },
  mwanret: {
    src: '/images/blog/IMG_7011-1536x1229.jpg',
    alt: 'Girls discussing menstrual hygiene during focus group',
    caption: 'Mwanret Gar documented disposal practices and the affordability gap among 17 girls.',
  },
  conclusion: {
    src: '/images/blog/IMG_7107-1-1536x916.jpg',
    alt: 'Girlified community engagement session in Plateau State',
    caption:
      "The session confirmed period poverty as a barrier—and reinforced Girlified's mission to meet community needs sustainably.",
  },
};

const sessionStats = [
  { value: '82', label: 'Participants' },
  { value: '5', label: 'Focus groups' },
  { value: '7', label: 'Facilitators' },
  { value: '18', label: 'Product testers' },
];

const focusThemes = ['Affordability', 'Comfort & quality', 'Plastic awareness', 'Disposal habits'];

const interviewers = [
  'Nyipoji Kani',
  'Mercy Kevin',
  'Kyenret Daluwa',
  'Mwanret Gar',
  'Idoko Divine',
];

type PhotoSize = 'full' | 'hero' | 'large' | 'medium' | 'small';
type PhotoAlign = 'start' | 'center' | 'end';

type SectionImage = {
  src: string;
  alt: string;
  caption: string;
};

type ArticlePhotoProps = {
  src: string;
  alt: string;
  caption: string;
  aspect?: 'landscape' | 'square' | 'wide';
  size?: PhotoSize;
  align?: PhotoAlign;
};

const photoMaxWidths: Record<PhotoSize, number | '100%'> = {
  full: '100%',
  hero: 680,
  large: 560,
  medium: 400,
  small: 240,
};

const ArticlePhoto = ({
  src,
  alt,
  caption,
  aspect = 'landscape',
  size = 'full',
  align = 'center',
}: ArticlePhotoProps) => {
  const aspectRatio = { landscape: '3 / 2', square: '1 / 1', wide: '16 / 9' }[aspect];
  const maxWidth = photoMaxWidths[size];
  const alignMap = { start: 'flex-start', center: 'center', end: 'flex-end' } as const;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      style={{
        margin: 0,
        width: '100%',
        maxWidth,
        alignSelf: alignMap[align],
      }}
    >
      <Box
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: size === 'small' ? 12 : 16,
          aspectRatio,
          border: '1px solid rgba(255, 0, 127, 0.15)',
          boxShadow:
            size === 'small'
              ? '0 8px 20px rgba(12, 9, 11, 0.06)'
              : '0 14px 28px rgba(12, 9, 11, 0.08)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            size === 'small'
              ? '240px'
              : size === 'medium'
                ? '(max-width: 768px) 100vw, 400px'
                : '(max-width: 768px) 100vw, 680px'
          }
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Text
        component="figcaption"
        size={size === 'small' ? 'xs' : 'sm'}
        mt={size === 'small' ? 6 : 'sm'}
        c="rgba(12, 9, 11, 0.55)"
        style={{ lineHeight: 1.5 }}
      >
        {caption}
      </Text>
    </motion.figure>
  );
};

/** Fixed-ratio photo for reporter subsections */
const SectionPhotoPanel = ({ src, alt, caption }: SectionImage) => (
  <Box
    style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: 14,
      border: '1px solid rgba(255, 0, 127, 0.12)',
      boxShadow: '0 10px 28px rgba(12, 9, 11, 0.08)',
    }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 480px"
      style={{ objectFit: 'cover' }}
    />
    <Box
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(to top, rgba(12, 9, 11, 0.72) 0%, rgba(12, 9, 11, 0.08) 45%, transparent 100%)',
      }}
    />
    <Text
      size="xs"
      c="rgba(255, 255, 255, 0.88)"
      style={{
        position: 'absolute',
        bottom: 14,
        left: 14,
        right: 14,
        lineHeight: 1.5,
      }}
    >
      {caption}
    </Text>
  </Box>
);

const BodyText = ({ children }: { children: React.ReactNode }) => (
  <Text size="md" style={{ lineHeight: 1.75, color: 'rgba(12, 9, 11, 0.75)' }}>
    {children}
  </Text>
);

const MetaPill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Group
    gap={6}
    px="sm"
    py={6}
    style={{
      borderRadius: 999,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      border: '1px solid rgba(255, 0, 127, 0.12)',
    }}
  >
    {icon}
    <Text size="xs" fw={600} c="rgba(12, 9, 11, 0.7)">
      {label}
    </Text>
  </Group>
);

const PullQuoteCard = () => (
  <Box
    style={{
      position: 'relative',
      padding: '28px 24px',
      borderRadius: 20,
      overflow: 'hidden',
      background:
        'linear-gradient(145deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 240, 247, 0.9) 100%)',
      border: '1px solid rgba(255, 0, 127, 0.18)',
      boxShadow: '0 12px 32px rgba(255, 0, 127, 0.08)',
    }}
  >
    <Text
      aria-hidden
      style={{
        position: 'absolute',
        top: -8,
        right: 16,
        fontFamily: playfair.style.fontFamily,
        fontSize: '5rem',
        lineHeight: 1,
        color: 'rgba(255, 0, 127, 0.08)',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
    >
      &ldquo;
    </Text>
    <Stack gap="md">
      <Badge
        size="sm"
        radius="xl"
        variant="light"
        style={{
          background: 'rgba(255, 0, 127, 0.1)',
          color: '#FF007F',
          alignSelf: 'flex-start',
          fontWeight: 700,
        }}
      >
        CO-FOUNDER&apos;S WORDS
      </Badge>
      <Text
        fs="italic"
        style={{
          fontFamily: playfair.style.fontFamily,
          fontSize: '1.05rem',
          lineHeight: 1.65,
          color: 'rgba(12, 9, 11, 0.88)',
        }}
      >
        &ldquo;Plastic pollution is a serious issue that requires quick climate action and you all
        ladies seated here can join hands to make our fight against it a successful one.&rdquo;
      </Text>
      <Group gap="sm" wrap="nowrap" align="center">
        <Box
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF007F 0%, #CC0066 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <IconQuote size={16} color="white" />
        </Box>
        <Stack gap={0}>
          <Text size="sm" fw={700} c="#0C090B">
            Oghenekevwe Emadago
          </Text>
          <Text size="xs" c="rgba(12, 9, 11, 0.55)">
            Co-founder, Girlified
          </Text>
        </Stack>
      </Group>
    </Stack>
  </Box>
);

const SLATE_DARK = '#334155';
const SLATE_MUTED = '#64748B';
const GREY_LIGHT = '#F1F3F5';
const GREY_BORDER = 'rgba(51, 65, 85, 0.14)';

const ReporterSection = ({
  index,
  name,
  participants,
  image,
  children,
}: {
  index: number;
  name: string;
  participants: string;
  image?: SectionImage;
  children: React.ReactNode;
}) => {
  const imageOnLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        radius="xl"
        p={0}
        style={{
          overflow: 'hidden',
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          border: `1px solid ${GREY_BORDER}`,
          backdropFilter: 'blur(10px)',
        }}
      >
        <Box
          px={{ base: 'lg', sm: 'xl' }}
          py="lg"
          style={{
            borderBottom: `1px solid ${GREY_BORDER}`,
            backgroundColor: GREY_LIGHT,
          }}
        >
          <Group justify="space-between" align="center" wrap="wrap" gap="sm">
            <Group gap="md" wrap="nowrap" align="center">
              <Text
                fw={800}
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.12em',
                  color: SLATE_DARK,
                }}
              >
                REPORT {String(index).padStart(2, '0')}
              </Text>
              <Box style={{ width: 1, height: 20, backgroundColor: 'rgba(51, 65, 85, 0.2)' }} />
              <Group gap="sm" wrap="nowrap">
                <Box
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: SLATE_DARK,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <IconMicrophone size={16} color="white" />
                </Box>
                <Stack gap={0}>
                  <Title
                    order={3}
                    style={{
                      fontFamily: playfair.style.fontFamily,
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      letterSpacing: '-0.3px',
                      color: SLATE_DARK,
                      lineHeight: 1.2,
                    }}
                  >
                    {name}
                  </Title>
                  <Text size="xs" c={SLATE_MUTED} fw={500}>
                    Field interviewer
                  </Text>
                </Stack>
              </Group>
            </Group>
            <Badge
              variant="outline"
              radius="xl"
              leftSection={<IconUsers size={12} color={SLATE_DARK} />}
              style={{ borderColor: 'rgba(51, 65, 85, 0.25)', color: SLATE_DARK, fontWeight: 600, backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
            >
              {participants}
            </Badge>
          </Group>
        </Box>

        {image ? (
          <Grid gutter={{ base: 0, md: 'xl' }} align="flex-start">
            {/* Mobile: image banner on top */}
            <Grid.Col span={12} hiddenFrom="md">
              <Box style={{ position: 'relative', aspectRatio: '3 / 2' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(12, 9, 11, 0.65) 0%, transparent 60%)',
                  }}
                />
                <Text
                  size="xs"
                  c="rgba(255, 255, 255, 0.9)"
                  p="md"
                  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 1.5 }}
                >
                  {image.caption}
                </Text>
              </Box>
            </Grid.Col>

            {imageOnLeft && (
              <Grid.Col span={{ base: 12, md: 5 }} visibleFrom="md">
                <Box py="xl" pl="xl" pr={{ md: 0 }}>
                  <SectionPhotoPanel {...image} />
                </Box>
              </Grid.Col>
            )}

            <Grid.Col span={{ base: 12, md: 7 }}>
              <Box p={{ base: 'lg', sm: 'xl' }} pt={{ base: 'lg', md: 'xl' }}>
                <Stack gap="md">{children}</Stack>
              </Box>
            </Grid.Col>

            {!imageOnLeft && (
              <Grid.Col span={{ base: 12, md: 5 }} visibleFrom="md">
                <Box py="xl" pr="xl" pl={{ md: 0 }}>
                  <SectionPhotoPanel {...image} />
                </Box>
              </Grid.Col>
            )}
          </Grid>
        ) : (
          <Box p={{ base: 'lg', sm: 'xl' }}>
            <Stack gap="md">{children}</Stack>
          </Box>
        )}
      </Card>
    </motion.div>
  );
};

const GirlifiedWomenAndGirlsEngagementPage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: 'transparent', overflowX: 'hidden' }}>
      {/* Full-viewport hero */}
      <Box
        component="section"
        style={{
          position: 'relative',
          width: '100vw',
          minHeight: '100vh',
          overflow: 'hidden',
        }}
      >
        <Image
          src={articleImages.hero.src}
          alt={articleImages.hero.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(12, 9, 11, 0.92) 0%, rgba(12, 9, 11, 0.5) 40%, rgba(12, 9, 11, 0.25) 100%)',
          }}
        />

        <Container
          size="xl"
          style={{
            position: 'relative',
            zIndex: 2,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingTop: 100,
            paddingBottom: 48,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Stack gap="xl">
              <Stack gap="sm" maw={760}>
                <Badge
                  size="lg"
                  radius="xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    alignSelf: 'flex-start',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  COMMUNITY INSIGHTS
                </Badge>
                <Title
                  order={1}
                  style={{
                    fontFamily: playfair.style.fontFamily,
                    fontSize: 'clamp(1.85rem, 4.5vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.5px',
                    lineHeight: 1.12,
                    color: 'white',
                  }}
                >
                  Women and Girls Engagement / Focus Group Discussion
                </Title>
              </Stack>

              <Card
                radius="xl"
                p={{ base: 'lg', sm: 'xl' }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.88)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 20px 48px rgba(12, 9, 11, 0.18)',
                }}
              >
                <Stack gap="lg">
                  <Text size="xs" c="rgba(12, 9, 11, 0.5)" style={{ lineHeight: 1.5 }}>
                    {articleImages.hero.caption}
                  </Text>
                  <Text
                    size="md"
                    maw={680}
                    style={{ lineHeight: 1.65, color: 'rgba(12, 9, 11, 0.72)' }}
                  >
                    Eighty-two residents of Rankyeng Village share honest feedback on period
                    poverty, pad preferences, and plastic pollution—shaping the future of
                    Girlified&apos;s plant-based product.
                  </Text>
                  <Group gap="sm" wrap="wrap">
                    <MetaPill
                      icon={<IconCalendar size={14} color="#FF007F" />}
                      label="17 September 2022"
                    />
                    <MetaPill
                      icon={<IconMapPin size={14} color="#FF007F" />}
                      label="Rankyeng Village, Jos South LGA"
                    />
                    <MetaPill icon={<IconClock size={14} color="#FF007F" />} label="12 min read" />
                  </Group>
                  <SimpleGrid
                    cols={{ base: 2, sm: 4 }}
                    spacing="sm"
                    style={{ borderTop: '1px solid rgba(255, 0, 127, 0.12)', paddingTop: 8 }}
                  >
                    {sessionStats.map((stat) => (
                      <Box key={stat.label} ta="center" py="xs">
                        <Text fw={800} size="xl" c="#FF007F" style={{ lineHeight: 1 }}>
                          {stat.value}
                        </Text>
                        <Text
                          size="xs"
                          mt={4}
                          fw={600}
                          c="rgba(12, 9, 11, 0.55)"
                          tt="uppercase"
                          style={{ letterSpacing: '0.06em' }}
                        >
                          {stat.label}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Card>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Article body */}
      <Box style={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255, 0, 127, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 0, 127, 0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <Box
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle, rgba(255, 0, 127, 0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        <Container size="xl" py={{ base: 48, sm: 64 }} style={{ position: 'relative', zIndex: 2 }}>
          <Stack gap={40}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card
                radius="xl"
                p={{ base: 'lg', sm: 'xl' }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.55)',
                  border: '1px solid rgba(255, 0, 127, 0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <Stack gap="xl">
                  <Stack gap={6}>
                    <Badge
                      variant="light"
                      radius="xl"
                      style={{
                        background: 'rgba(255, 0, 127, 0.08)',
                        color: '#FF007F',
                        alignSelf: 'flex-start',
                        fontWeight: 700,
                      }}
                    >
                      ABOUT THE SESSION
                    </Badge>
                    <Title
                      order={2}
                      style={{ fontSize: '1.35rem', letterSpacing: '-0.4px', color: '#0C090B' }}
                    >
                      Listening to 82 Voices in Rankyeng
                    </Title>
                  </Stack>

                  <Grid gutter="xl" align="flex-start">
                    <Grid.Col span={{ base: 12, md: 7 }}>
                      <Stack gap="md">
                        <BodyText>
                          As a step further towards getting more feedback on our product and using
                          the opportunity to engage more women and girls, we discussed with a total
                          of 82 women and girls between the ages of 12 and 48, who are all residents
                          of Rankyeng Village of Jos South LGA, Plateau State Nigeria. Rankyeng is a
                          developing community where most families are either into farming or
                          small-scale trading. Hence most of our participants were from low-income
                          households.
                        </BodyText>
                        <BodyText>
                          Present to facilitate the discussion were 7 members of our team, two guys
                          and 5 ladies who interviewed five separate focused groups while the guys
                          coordinated the session. It was an hour&apos;s engagement where our
                          co-founder, Oghenekevwe Emadago introduced the Girlified product and
                          talked about our plastic reduction goal and our plan to continue to be in
                          close contact with them—our potential customers.
                        </BodyText>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                      <PullQuoteCard />
                    </Grid.Col>
                  </Grid>

                  <Box
                    style={{
                      padding: '18px 20px',
                      borderRadius: 14,
                      backgroundColor: 'rgba(255, 0, 127, 0.05)',
                      border: '1px dashed rgba(255, 0, 127, 0.2)',
                    }}
                  >
                    <BodyText>
                      Among the numerous things he spoke about, he emphasized climate action. We
                      engaged them on several topics that border around sanitary pad use, their
                      preferences and discomfort.{' '}
                      <Text span fw={700} c="#0C090B">
                        Below are the reports from the five interviewers:
                      </Text>
                    </BodyText>
                  </Box>
                </Stack>
              </Card>
            </motion.div>

            {/* Reporter sections */}
            <Stack gap="lg">
              <ReporterSection
                index={1}
                name="Doris Gyang"
                participants="11 women — 9 teenagers, 2 adults"
                image={articleImages.nyipoji}
              >
                <BodyText>
                  I had the opportunity to engage 11 women, 9 of which were teenagers and the other
                  2 were adults. We discussed the discomfort they have while using sanitary pads and
                  I was able to deduce that the pad material isn&apos;t thick enough to hold a large
                  amount of blood. They experience a peppering feeling whenever they use certain
                  pads and they suffer from tiny rashes. Some mentioned that they do not use pads,
                  instead, they use wrappers which they wash and reuse, causing most of them to
                  suffer infections which alter their period cycle.
                </BodyText>
                <BodyText>
                  They all attested to the fact that the price of pads was rising which brought
                  about the use of wrappers for some. And those who could afford the cheaper type
                  used it though it may be discomforting for them. They mentioned that they would
                  love to have pads that are cheaper and more in number (in a pack). They all
                  answered &ldquo;No&rdquo; to the two questions I posed: &ldquo;Do you know that
                  plastic pollution is a problem today and that a conventional pad contains as much
                  as 90% plastic?&rdquo; And I educated them on what plastic pollution is and some
                  facts and figures surrounding it.
                </BodyText>
                <BodyText>
                  One lady mentioned Joyland to be her preferred sanitary pad because of the price.
                  Another mentioned Always, but she had no specific reason. If they could change
                  something about the pad what would it be, I ask them. They said the price should
                  be cheaper, the quality in terms of thickness should be improved, the quantity in
                  terms of pad pieces in a pack should be increased, the color should be changed to
                  either black or brown, and the size of the pad should also be big enough to
                  accommodate the outpour.
                </BodyText>
                <BodyText>
                  We randomly discussed how they dispose of sanitary pads and I was able to know
                  that some tie in polythene bags and throw them away into the bush, bury it
                  underground or even burn them. An exceptional reply was that of a teenager who
                  believed that her blood can be used to harm her so she washed the sanitary pad
                  before disposing of it.
                </BodyText>
              </ReporterSection>

              <ReporterSection
                index={2}
                name="Biola Adediran"
                participants="15 teenage women"
                image={articleImages.mercy}
              >
                <BodyText>
                  I had the opportunity to engage 15 women, all of which were teenagers. Talking
                  about the discomfort they experience while using sanitary pads I was able to note
                  several recurring responses which include: itches, uncomfortable feeling as a
                  result of using some sanitary pads that are methylated, and some of the ladies
                  complained of rashes that might occur after period due to the choice of sanitary
                  napkin used.
                </BodyText>
                <BodyText>
                  We went on to talk about their preferred prices for pads for which they complained
                  about the high prices of sanitary napkins and how difficult it is for some of them
                  to afford them. They suggested the price below: NGN300 ($0.69) for a pack of 8
                  pieces or even NGN250 ($0.58) for a pack of 8 pieces and NGN500 ($1.16) for a pack
                  of 12 pieces.
                </BodyText>
                <BodyText>
                  Talking about their preferred sanitary pad brand, 90% of the ladies I spoke to
                  prefer Always sanitary pad because it has a longer length compared to other
                  brands. On things they would like to change about sanitary pads the majority of
                  them mentioned thickness (some sanitary pads are very light and cannot be used
                  during a heavy menstrual flow), length and most also stated that pads should be
                  more absorbent.
                </BodyText>
              </ReporterSection>

              <ReporterSection
                index={3}
                name="Esther Danladi"
                participants="16 women and 9 girls"
                image={articleImages.kyenret}
              >
                <BodyText>
                  I had my discussion with 16 women and 9 girls and here are my findings. About the
                  discomforts experienced using sanitary pads, one of the ladies complained about
                  Drylove being too short, and some complained about Virony because it does not
                  stick well to the panties. From their responses, I gather that NDK and Drylove do
                  not take some of them throughout the day.
                </BodyText>
                <BodyText>
                  Talking about the price, most of them attested to the fact that price is a major
                  hindrance to them and that they would like the price of a pack of 8 pads to range
                  from NGN 250–300. For their awareness of plastic pollution, we spoke at length and
                  I discovered most know little about global plastic pollution and how much sanitary
                  pads contribute to this.
                </BodyText>
                <BodyText>
                  On the issue of their sanitary pad preferences, some prefer children&apos;s
                  diapers because it sticks better and lasts longer, others mentioned their love for
                  Trust sanitary pad because of their feelings and NDK because it does not leak.
                  When we got to the issue of what they would like to change in sanitary pads, I
                  noted these points: pads should be thicker and softer; manufacturers should
                  include panty liners; increase the number of pieces per pack; make it cheaper;
                  increase the quality and rate of absorption; increase the length and width; and
                  finally, the stickiness should be increased.
                </BodyText>
              </ReporterSection>

              <ReporterSection
                index={4}
                name="Faith Ameh"
                participants="17 girls"
                //   image={articleImages.mwanret}
              >
                <BodyText>
                  My discussion was with 17 girls. Discomforts experienced using sanitary pads: one
                  of the ladies complained about a burning sensation after about two hours of using
                  her sanitary pads (Always). About two of them complained about shifting of the
                  pads, which causes staining.
                </BodyText>
                <BodyText>
                  Price issues: two of the older ladies complained about the prices of pads, stating
                  that during some months, they couldn&apos;t afford pads and would have to use rags
                  and tissues as substitutes. The younger ones (early to mid-teens) stated that they
                  use Joyland pads (3 pieces in a pack) at NGN150 ($0.34), and they believe that the
                  price is okay.
                </BodyText>
                <BodyText>
                  Awareness about plastic pollution: they understood how plastic affects the
                  immediate environment by littering the place, but until the briefing, most were
                  ignorant about its effects on the ocean. Sanitary pad preferences: a lady
                  preferred Always because of its length; another likes Virony for being shorter and
                  more comfortable; young girls prefer Joyland because of the price.
                </BodyText>
                <BodyText>
                  What to change in sanitary pads: one lady would like to increase the absorbance of
                  pads because she usually has to double her pads during her periods. Others spoke
                  about length and prices. The ladies disposed of their pads by burning, burying,
                  throwing in the public dump &lsquo;bola&rsquo;, or putting them in holes in fence
                  blocks. Younger ones feel uncomfortable buying pads when males are around; their
                  periods last 2–7 days, and they use a single sanitary pad for 2–7 hours.
                </BodyText>
              </ReporterSection>

              <ReporterSection index={5} name="Sarah Dariye" participants="14 women and girls">
                <BodyText>
                  I was assigned to 14 females after the brief introduction. Quite a number
                  complained about rashes between their thighs leading to itching; specific odors
                  within 30 minutes to an hour; peeling of the top layer and scattering of cotton;
                  pain and injury between the thighs; shifting of the pad; insufficient thickness
                  and length; rough top layers; pains in the vagina; and thighs turning red.
                </BodyText>
                <BodyText>
                  Yes, the price of pads is a big problem. We would like that the quantity of pads
                  in a packet is worth the price. The price should be much more affordable—it is a
                  pain when we go to buy and after a short period the prices go up and we are left
                  with the choice of using rags.
                </BodyText>
                <BodyText>
                  A few knew about plastic pollution and others didn&apos;t. One lady explained what
                  plastic pollution was in Hausa. Preferred brands included Always (sticks to panty,
                  smooth top layer), NDK (good fragrance, comfy), Trust (holds heavy bleed), and
                  Joyland. If they could change one thing: remove mint/peppery additives; improve
                  stickiness; prevent cotton from scattering inside.
                </BodyText>
                <BodyText>
                  We had other discussions on proper disposal, biodegradable products, and
                  embarrassing public-period experiences. At the end, we held a final 20-minute
                  feedback session with 18 ladies who had tested our pads for two weeks—learning how
                  different users react and where improvements are needed.
                </BodyText>
              </ReporterSection>
            </Stack>

            {/* Conclusion — image beside text, not full bleed */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card
                radius="xl"
                p={{ base: 'lg', sm: 'xl' }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.55)',
                  border: '1px solid rgba(255, 0, 127, 0.15)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <Stack gap="lg">
                  <Badge
                    size="md"
                    radius="xl"
                    style={{
                      background: 'rgba(255, 0, 127, 0.08)',
                      color: '#FF007F',
                      border: '1px solid rgba(255, 0, 127, 0.15)',
                      alignSelf: 'flex-start',
                      fontWeight: 700,
                    }}
                  >
                    CONCLUSION
                  </Badge>

                  <Grid gutter="xl" align="center">
                    <Grid.Col span={{ base: 12, sm: 5 }}>
                      <ArticlePhoto
                        {...articleImages.conclusion}
                        aspect="landscape"
                        size="large"
                        align="start"
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 7 }}>
                      <Text size="md" style={{ lineHeight: 1.75, color: 'rgba(12, 9, 11, 0.75)' }}>
                        From the whole session, we have discovered that period poverty is indeed a
                        problem for the comfort and menstrual hygiene of a lot of ladies in our
                        region. We can draw up this conclusion since the Rankyeng community, among
                        other communities in our region, is not unique in its below-average income
                        level. For this reason, we are developing Girlified to be able to meet the
                        needs of these ladies while giving them the unique sense of saving our
                        oceans from plastics.
                      </Text>
                    </Grid.Col>
                  </Grid>
                </Stack>
              </Card>
            </motion.div>

            <Group justify="center" gap="md" wrap="wrap" pb={16}>
              <Button
                component={Link}
                href="/our-story"
                radius="xl"
                variant="outline"
                style={{ borderColor: 'rgba(255, 0, 127, 0.35)', color: '#FF007F' }}
              >
                Read Our Story
              </Button>
              <Button
                component={Link}
                href="/contact-us"
                radius="xl"
                style={{
                  background: 'linear-gradient(135deg, #FF007F 0%, #CC0066 100%)',
                  color: 'white',
                  border: 'none',
                }}
              >
                Partner With Us
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default GirlifiedWomenAndGirlsEngagementPage;
