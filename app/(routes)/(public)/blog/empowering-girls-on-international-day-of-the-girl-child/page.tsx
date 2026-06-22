'use client';

import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconCalendar,
  IconClock,
  IconHeartHandshake,
  IconLeaf,
  IconMapPin,
  IconSchool,
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

const EMERALD = '#059669';
const EMERALD_LIGHT = '#ECFDF5';
const EMERALD_BORDER = 'rgba(5, 150, 105, 0.2)';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

const eventStats = [
  { value: '523', label: 'Girls reached', featured: true },
  { value: '3', label: 'Core sessions', featured: false },
  { value: 'Oct 11', label: 'IDG 2023', featured: false },
  { value: '100%', label: 'Eco-friendly pads', featured: false },
];

const timelineItems = [
  {
    step: '01',
    icon: IconSchool,
    title: 'Menstrual Hygiene Education',
    body: [
      'The heart of our International Day of the Girl Child event was an interactive and enlightening session on menstrual hygiene and feminine health. We believe that every girl should have access to accurate information and the necessary resources to manage their menstrual health with confidence and dignity.',
      'Our team of experts addressed critical topics such as proper menstrual hygiene practices, debunking myths, and choosing the right sanitary products. It was an opportunity to have open and candid conversations, dispelling stigma, and ensuring that the girls left with the knowledge they need to take care of their well-being.',
    ],
    image: {
      src: '/images/blog/idgc/idgc_hygiene.jpg',
      alt: 'Girlified menstrual hygiene education session with girls on International Day of the Girl Child',
      caption:
        'An interactive session on menstrual hygiene, myth-busting, and dignified period care.',
    },
  },
  {
    step: '02',
    icon: IconLeaf,
    title: 'Environmental Awareness',
    body: [
      'At Girlified, we understand that a brighter future for girls also involves safeguarding the environment. Our event incorporated a dedicated session on environmental education and the importance of tree planting—championed by our co-founder, Emadago Oghenekevwe William, an environmental educator.',
      'We firmly believe raising a generation of environmentally conscious individuals is crucial to combating climate change and preserving our planet for future generations. During this session, we engaged the girls in an enlightening discussion about the significance of trees in reducing carbon emissions, improving air quality, and fostering a sustainable environment.',
      'We discussed the role they can play in nurturing the environment by planting trees, reducing waste, and adopting eco-friendly practices.',
    ],
    image: {
      src: '/images/blog/idgc/idgc_environment.jpg',
      alt: 'Environmental education session led by Girlified co-founder',
      caption:
        'Co-founder William led discussions on tree planting, climate action, and eco-friendly habits.',
    },
  },
  {
    step: '03',
    icon: IconHeartHandshake,
    title: 'Eco-Friendly Sanitary Pad Distribution',
    body: [
      'The highlight of our International Day of the Girl Child celebration was the distribution of our eco-friendly sanitary pads. Committed to our mission of providing affordable and sustainable menstrual solutions, we distributed our sanitary pads to all 523 girls in attendance.',
      'This initiative ensures that they have access to high-quality menstrual products that are not only safe and effective but also environmentally responsible. At Girlified, we are dedicated to providing a solution that supports girls during their menstruation while minimizing the environmental impact. Our sanitary pads are made with sustainable materials, minimizing waste and contributing to a healthier planet.',
      'We were overwhelmed with the enthusiasm and gratitude of the girls who received these pads, knowing that they now have a reliable and eco-friendly option for managing their menstrual health.',
    ],
  },
];

const partners = [
  "O'Shaughnessy Ventures LLC",
  'Naza Agape Foundation',
  'North American Association of Environmental Education',
];

const BodyText = ({ children }: { children: React.ReactNode }) => (
  <Text size="md" style={{ lineHeight: 1.75, color: MUTED }}>
    {children}
  </Text>
);

const TimelineItem = ({
  step,
  icon: Icon,
  title,
  body,
  image,
  isLast,
}: (typeof timelineItems)[0] & { isLast?: boolean }) => (
  <Grid gutter="xl" align="flex-start" pb={isLast ? 0 : 48}>
    {/* Timeline rail */}
    <Grid.Col span={{ base: 12, md: 1 }} visibleFrom="md">
      <Stack align="center" gap={0} style={{ position: 'sticky', top: 100 }}>
        <Box
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            backgroundColor: EMERALD,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 0 6px ${EMERALD_LIGHT}`,
          }}
        >
          <Icon size={20} color="white" />
        </Box>
        {!isLast && (
          <Box
            style={{
              width: 2,
              flex: 1,
              minHeight: 120,
              backgroundColor: EMERALD_BORDER,
              marginTop: 8,
            }}
          />
        )}
      </Stack>
    </Grid.Col>

    <Grid.Col span={{ base: 12, md: image ? 6 : 11 }}>
      <Stack gap="md">
        <Group gap="sm" hiddenFrom="md">
          <Badge radius="xl" style={{ backgroundColor: EMERALD, color: 'white', fontWeight: 700 }}>
            STEP {step}
          </Badge>
        </Group>
        <Title
          order={3}
          style={{
            fontFamily: playfair.style.fontFamily,
            fontSize: '1.35rem',
            fontWeight: 700,
            color: INK,
            letterSpacing: '-0.3px',
          }}
        >
          {title}
        </Title>
        {body.map((paragraph) => (
          <BodyText key={paragraph.slice(0, 48)}>{paragraph}</BodyText>
        ))}
      </Stack>
    </Grid.Col>

    {image && (
      <Grid.Col span={{ base: 12, md: 5 }}>
        <Box
          style={{
            position: 'relative',
            aspectRatio: '16 / 10',
            borderRadius: 16,
            overflow: 'hidden',
            border: `1px solid ${EMERALD_BORDER}`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Text size="xs" mt="sm" c="rgba(12, 9, 11, 0.5)" style={{ lineHeight: 1.5 }}>
          {image.caption}
        </Text>
      </Grid.Col>
    )}
  </Grid>
);

const EmpoweringGirlsOnInternationalDayOfTheGirlChildPage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#FBF6EE', overflowX: 'hidden' }}>
      <Container size="xl" pt={{ base: 110, sm: 130 }} pb={{ base: 64, sm: 80 }}>
        <Stack gap={56}>
          {/* Split editorial hero — no full-bleed overlay */}
          <Grid gutter={{ base: 'xl', md: 56 }} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
              >
                <Stack gap="lg">
                  <Badge
                    radius="xl"
                    size="lg"
                    style={{
                      backgroundColor: EMERALD_LIGHT,
                      color: EMERALD,
                      border: `1px solid ${EMERALD_BORDER}`,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      alignSelf: 'flex-start',
                    }}
                  >
                    INTERNATIONAL DAY OF THE GIRL CHILD
                  </Badge>

                  <Title
                    order={1}
                    style={{
                      fontFamily: playfair.style.fontFamily,
                      fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.8px',
                      lineHeight: 1.12,
                      color: INK,
                    }}
                  >
                    Empowering Girls: Our Remarkable Initiative
                  </Title>

                  <Text size="lg" style={{ lineHeight: 1.65, color: MUTED }}>
                    As we celebrated on October 11th, we took a significant step towards empowering
                    girls and nurturing a sustainable future—leaving{' '}
                    <Text span fw={700} c={EMERALD}>
                      523 girls
                    </Text>{' '}
                    better informed, more confident, and better equipped to embrace womanhood.
                  </Text>

                  <Group gap="md" wrap="wrap">
                    <Group gap={6}>
                      <IconCalendar size={15} color={EMERALD} />
                      <Text size="sm" fw={600} c={MUTED}>
                        12 October 2023
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <IconMapPin size={15} color={EMERALD} />
                      <Text size="sm" fw={600} c={MUTED}>
                        Nigeria
                      </Text>
                    </Group>
                    <Group gap={6}>
                      <IconClock size={15} color={EMERALD} />
                      <Text size="sm" fw={600} c={MUTED}>
                        6 min read
                      </Text>
                    </Group>
                  </Group>
                </Stack>
              </motion.div>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <Box
                  style={{
                    position: 'relative',
                    aspectRatio: '5 / 4',
                    borderRadius: 24,
                    overflow: 'hidden',
                    boxShadow: '0 24px 48px rgba(5, 150, 105, 0.12)',
                    border: `1px solid ${EMERALD_BORDER}`,
                  }}
                >
                  <Image
                    src="/images/blog/idgc/idgc_hero.jpg"
                    alt="Girlified International Day of the Girl Child celebration event"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 560px"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Bento stats — different from FGD stat row */}
          <SimpleGrid cols={{ base: 2, md: 4 }} spacing="md">
            {eventStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ gridColumn: stat.featured ? 'span 1' : undefined }}
              >
                <Box
                  p="lg"
                  h="100%"
                  style={{
                    borderRadius: stat.featured ? 20 : 14,
                    backgroundColor: stat.featured ? EMERALD : 'rgba(255, 255, 255, 0.7)',
                    border: stat.featured ? 'none' : `1px solid ${EMERALD_BORDER}`,
                    textAlign: stat.featured ? 'left' : 'center',
                    minHeight: stat.featured ? 140 : 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    fw={800}
                    style={{
                      fontSize: stat.featured ? '3rem' : '1.5rem',
                      lineHeight: 1,
                      color: stat.featured ? 'white' : EMERALD,
                    }}
                  >
                    {stat.value}
                  </Text>
                  <Text
                    size="xs"
                    mt={8}
                    fw={600}
                    tt="uppercase"
                    style={{
                      letterSpacing: '0.08em',
                      color: stat.featured ? 'rgba(255,255,255,0.85)' : MUTED,
                    }}
                  >
                    {stat.label}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>

          {/* Intro band */}
          <Box
            px={{ base: 'lg', sm: 'xl' }}
            py="xl"
            style={{
              borderRadius: 20,
              backgroundColor: EMERALD_LIGHT,
              borderLeft: `4px solid ${EMERALD}`,
            }}
          >
            <Text
              style={{
                fontFamily: playfair.style.fontFamily,
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: INK,
                fontStyle: 'italic',
              }}
            >
              With our resolute commitment to both menstrual hygiene and environmental
              sustainability, we organized an impactful event that combined education, empowerment,
              and action—because every girl deserves stigma-free conversations and products that
              protect both her health and the planet.
            </Text>
          </Box>

          {/* Timeline sections */}
          <Box>
            <Stack gap="xs" mb="xl">
              <Text
                size="xs"
                fw={800}
                c={EMERALD}
                tt="uppercase"
                style={{ letterSpacing: '0.14em' }}
              >
                Event programme
              </Text>
              <Title
                order={2}
                style={{ fontFamily: playfair.style.fontFamily, fontSize: '1.6rem', color: INK }}
              >
                Three pillars of impact
              </Title>
            </Stack>

            <Stack gap={0}>
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={item.title}
                  {...item}
                  isLast={index === timelineItems.length - 1}
                />
              ))}
            </Stack>
          </Box>

          {/* Conclusion — dark band instead of glass card */}
          <Box
            px={{ base: 'lg', sm: 'xl' }}
            py={{ base: 'xl', sm: 48 }}
            style={{
              borderRadius: 24,
              backgroundColor: '#1E293B',
              color: 'white',
            }}
          >
            <Stack gap="lg">
              <Badge
                radius="xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: 'white',
                  alignSelf: 'flex-start',
                  fontWeight: 700,
                }}
              >
                LOOKING AHEAD
              </Badge>
              <Title
                order={2}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: '1.5rem',
                  color: 'white',
                  lineHeight: 1.25,
                }}
              >
                A brighter future for girls and the environment
              </Title>
              <Text style={{ lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.78)' }}>
                Our International Day of the Girl Child event was not just a celebration but a
                powerful step towards a brighter future. By empowering girls with knowledge about
                menstrual hygiene, feminine health, and environmental sustainability, we hope to
                inspire them to become confident, informed, and eco-conscious leaders in their
                communities.
              </Text>
              <Text style={{ lineHeight: 1.75, color: 'rgba(255, 255, 255, 0.78)' }}>
                We extend our heartfelt gratitude to everyone who supported this event, from our
                partners and sponsors to the dedicated volunteers who made it all possible. At
                Girlified, we believe that the empowerment of girls and the preservation of the
                environment go hand in hand. Stay tuned for more updates as we continue to empower
                girls and nurture a greener future.
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default EmpoweringGirlsOnInternationalDayOfTheGirlChildPage;
