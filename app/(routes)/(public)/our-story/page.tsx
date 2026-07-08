'use client';

import { motion } from 'framer-motion';
import { Partners, platformFaqs, teamMembers } from '@/core/utilities';
import {
  Accordion,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Badge,
  Image,
} from '@mantine/core';
import {
  IconCpu,
  IconFlask2,
  IconHeart,
  IconLeaf,
  IconSchool,
  IconTimeline,
  IconUsers,
  IconUsersGroup,
} from '@tabler/icons-react';

const journeyStats = [
  { value: '2022', label: 'Product launched' },
  { value: '18,000+', label: 'Lives via NAF ecosystem' },
  { value: '30,000', label: 'Pads/day capacity' },
  { value: '6 months', label: 'Full biodegradation' },
];

const timelineMilestones = [
  {
    year: '2018',
    title: 'Naza Agape Foundation Founded',
    description: 'Prayer Nwagboso launches NAF to provide education, welfare, and empowerment for displaced and underserved communities.',
  },
  {
    year: '2019',
    title: 'William Joins NAF',
    description: 'Oghenekevwe William Emadago joins as State Director, expanding humanitarian reach across Plateau State and beyond.',
  },
  {
    year: '2021',
    title: 'Girlified R&D Begins',
    description: 'Research at the University of Jos converts banana pseudostem fibre into absorbent non-woven materials for sanitary pads.',
  },
  {
    year: '2022',
    title: 'Girlified Product Launched',
    description: 'Eco-friendly sanitary pads made from banana fibre and natural cotton enter the market as a plastic-free alternative.',
  },
  {
    year: '2023',
    title: "O'Shaughnessy Fellowship",
    description: 'William receives a $100,000 fellowship grant to continue researching and scaling the Girlified sanitary pad.',
  },
  {
    year: '2023+',
    title: 'Afri-Plastics Scaling',
    description: 'With Canadian Government support, production scales to 30,000 pads per day, targeting 1,000+ tons of plastic eliminated.',
  },
];

const coreValues = [
  {
    title: 'Dedication',
    description: 'Relentless commitment to ending period poverty and plastic pollution in every community we serve.',
    icon: IconHeart,
    color: '#FF007F',
  },
  {
    title: 'Passion',
    description: 'Deep care for girls, women, and the planet drives every product decision and outreach programme.',
    icon: IconLeaf,
    color: '#fb6704',
  },
  {
    title: 'Team Work',
    description: 'Innovators, researchers, and community advocates working together to create lasting impact.',
    icon: IconUsersGroup,
    color: '#e848ba',
  },
];

const prayerHighlights = [
  {
    title: 'Community Outreach',
    description: 'Free pad distributions and menstrual hygiene workshops reaching 5,000+ women through Girlified and NAF campaigns in rural communities.',
    icon: IconHeart,
    color: '#FF007F',
  },
  {
    title: 'Education & Welfare',
    description: 'NAF provides free education and support for displaced children, widows, and underserved communities across Africa.',
    icon: IconSchool,
    color: '#fb6704',
  },
  {
    title: 'Accelerate Action',
    description: 'Breaking barriers and creating opportunities so every woman and girl can reach her full potential—aligned with IWD 2025.',
    icon: IconUsers,
    color: '#e848ba',
  },
];

const williamHighlights = [
  {
    title: 'Fibre-to-Fluff R&D',
    description: 'Converts banana pseudostem and natural cotton into highly absorbent, plastic-free non-woven cores.',
    icon: IconFlask2,
    color: '#FF007F',
  },
  {
    title: 'Academic Research',
    description: 'Published work on menstrual materials sustainability; physics background from the University of Jos.',
    icon: IconLeaf,
    color: '#fb6704',
  },
  {
    title: 'Climate Innovation',
    description: "O'Shaughnessy Fellowship grantee and Afri-Plastics Challenge participant scaling eco-friendly production.",
    icon: IconCpu,
    color: '#e848ba',
  },
];

const cardHoverHandlers = {
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(-6px)';
    e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.45)';
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 0, 127, 0.15)';
  },
  onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.15)';
    e.currentTarget.style.boxShadow = 'none';
  },
};

const OurStoryPage = () => {
  return (
    <Box
      py={{ base: 120, sm: 160 }}
      style={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Grid Pattern */}
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

      {/* Decorative Radial Glowing Orbs */}
      <Box
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(255, 183, 213, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Stack gap="80px">
          {/* Hero — Split Layout with Image */}
          <Stack gap="xl">
            <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Stack gap="md">
                    <Badge
                      size="lg"
                      radius="xl"
                      style={{
                        background: 'rgba(255, 0, 127, 0.08)',
                        color: '#FF007F',
                        border: '1px solid rgba(255, 0, 127, 0.15)',
                        fontWeight: 700,
                        letterSpacing: '1px',
                        alignSelf: 'flex-start',
                      }}
                    >
                      OUR STORY
                    </Badge>
                    <Title
                      order={1}
                      style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.0rem)',
                        fontWeight: 800,
                        letterSpacing: '-2px',
                        lineHeight: 1.1,
                        background: 'linear-gradient(135deg, #0C090B 10%, #CC0066 60%, #FF007F 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Built with Passion
                    </Title>
                    <Text
                      size="lg"
                      style={{
                        lineHeight: 1.65,
                        letterSpacing: '-0.25px',
                        color: 'rgba(12, 9, 11, 0.72)',
                      }}
                    >
                      Girlified grew from a University of Jos research project under Naza Agape Foundation into a
                      commercial product, combining Prayer&apos;s advocacy and community outreach with William&apos;s
                      materials R&D and climate-tech entrepreneurship.
                    </Text>
                    <Text
                      size="md"
                      style={{
                        lineHeight: 1.65,
                        color: 'rgba(12, 9, 11, 0.65)',
                      }}
                    >
                      From banana plantations to the research lab, our founders built an eco-friendly sanitary pad
                      that tackles period poverty and plastic pollution across Africa.
                    </Text>
                  </Stack>
                </motion.div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Image
                    src="/images/product/image_research_2.jpg"
                    alt="Field research sourcing banana stem fibre in a plantation"
                    radius="xl"
                    style={{
                      border: '1px solid rgba(255, 0, 127, 0.15)',
                      boxShadow: '0 18px 36px rgba(12, 9, 11, 0.1)',
                      width: '100%',
                      maxHeight: 520,
                      objectFit: 'cover',
                    }}
                  />
                </motion.div>
              </Grid.Col>
            </Grid>

            {/* Journey Snapshot — below hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
                {journeyStats.map((stat) => (
                  <Card
                    key={stat.label}
                    radius="lg"
                    p="lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid rgba(255, 0, 127, 0.12)',
                      backdropFilter: 'blur(12px)',
                      textAlign: 'center',
                    }}
                  >
                    <Stack gap={4} align="center">
                      <Title order={3} style={{ fontSize: '1.75rem', lineHeight: 1, color: '#0C090B' }}>
                        {stat.value}
                      </Title>
                      <Text size="xs" fw={600} style={{ color: 'rgba(12, 9, 11, 0.6)' }}>
                        {stat.label}
                      </Text>
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
            </motion.div>
          </Stack>

          {/* How It Started */}
          <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                      letterSpacing: '0.8px',
                    }}
                  >
                    HOW IT STARTED
                  </Badge>
                  <Title order={2} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-1px', color: '#0C090B' }}>
                    From Research Lab to Real Impact
                  </Title>
                  <Text size="md" style={{ lineHeight: 1.65, color: 'rgba(12, 9, 11, 0.72)' }}>
                    What began as fibre-to-fluff research at the University of Jos, under the Naza Agape Foundation,
                    identified a dual crisis: period poverty affecting girls in remote communities and plastic pollution
                    from conventional sanitary pads.
                  </Text>
                  <Text size="md" style={{ lineHeight: 1.65, color: 'rgba(12, 9, 11, 0.72)' }}>
                    With support from the Canadian Government under the Afri-Plastics Challenge, that research became
                    Girlified a biodegradable pad made from banana stem fibre, organic cotton, and cassava starch that
                    decomposes fully in six months.
                  </Text>
                </Stack>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Image
                  src="/images/product/image_research_1.jpg"
                  alt="Lab research comparing raw banana fibre to processed absorbent fluff"
                  radius="xl"
                  style={{
                    border: '1px solid rgba(255, 0, 127, 0.15)',
                    boxShadow: '0 18px 36px rgba(12, 9, 11, 0.1)',
                  }}
                />
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Founders Grid — Enhanced */}
          <Box>
            <Flex justify="center" mb={40} direction="column" align="center">
              <Title order={2} style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.8px', color: '#0C090B' }}>
                Meet the Founders
              </Title>
              <Text size="md" ta="center" maw={640} mt="sm" style={{ color: 'rgba(12, 9, 11, 0.65)', lineHeight: 1.6 }}>
                Together with a team of innovators and market strategists, Girlified became possible.
              </Text>
            </Flex>
            <Grid gutter="xl" justify="center">
              {teamMembers.map((member, index) => (
                <Grid.Col key={member.name} span={{ base: 12, md: 6 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    style={{ height: '100%' }}
                  >
                    <Card
                      radius="lg"
                      p="36px"
                      style={{
                        height: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        border: '1px solid rgba(255, 0, 127, 0.15)',
                        display: 'flex',
                        flexDirection: 'column',
                        backdropFilter: 'blur(16px)',
                        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                      }}
                      {...cardHoverHandlers}
                    >
                      <Stack gap="xl" align="center" ta="center">
                        <Box
                          style={{
                            padding: 4,
                            borderRadius: '50%',
                            border: '2px dashed #FF007F',
                            width: 190,
                            height: 190,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.65)',
                          }}
                        >
                          <Image
                            width={172}
                            height={172}
                            alt={member.name}
                            src={member.image}
                            style={{ borderRadius: '50%', objectFit: 'cover' }}
                          />
                        </Box>
                        <Stack gap={8}>
                          <Title order={3} style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0C090B', letterSpacing: '-0.5px' }}>
                            {member.name}
                          </Title>
                          <Badge
                            style={{
                              background: 'rgba(255, 0, 127, 0.08)',
                              color: '#FF007F',
                              border: '1px solid rgba(255, 0, 127, 0.15)',
                              fontWeight: 700,
                            }}
                            size="md"
                          >
                            {member.role}
                          </Badge>
                          <Group gap={6} justify="center" mt={4}>
                            {member.highlights.map((highlight) => (
                              <Badge
                                key={highlight}
                                size="xs"
                                variant="outline"
                                style={{
                                  borderColor: 'rgba(255, 0, 127, 0.2)',
                                  color: 'rgba(12, 9, 11, 0.7)',
                                  fontWeight: 600,
                                }}
                              >
                                {highlight}
                              </Badge>
                            ))}
                          </Group>
                        </Stack>
                        <Text size="sm" fs="italic" style={{ color: 'rgba(12, 9, 11, 0.8)', lineHeight: 1.6 }}>
                          &ldquo;{member.bio}&rdquo;
                        </Text>
                        {'extendedBio' in member && (
                          <Text size="sm" style={{ color: 'rgba(12, 9, 11, 0.65)', lineHeight: 1.6 }}>
                            {member.extendedBio}
                          </Text>
                        )}
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid.Col>
              ))}
            </Grid>
          </Box>

          {/* Prayer — Advocacy & Community Spotlight */}
          <Box
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.55)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              borderRadius: 28,
              padding: '48px 36px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 18px 36px rgba(12, 9, 11, 0.08)',
            }}
          >
            <Grid gutter={{ base: 'xl', lg: 60 }} align="center">
              <Grid.Col span={{ base: 12, md: 5 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/naza/image_naza_1.jpg"
                    alt="Mrs Prayer Nwagboso with students during a Naza Agape Foundation community outreach"
                    radius="lg"
                    style={{
                      border: '1px solid rgba(255, 0, 127, 0.12)',
                      boxShadow: '0 12px 28px rgba(12, 9, 11, 0.08)',
                    }}
                  />
                </motion.div>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 7 }}>
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
                    ADVOCACY & COMMUNITY
                  </Badge>
                  <Title order={2} style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.8px', color: '#0C090B' }}>
                    Mrs Prayer Nwagboso — Empowering Girls on the Ground
                  </Title>
                  <Text size="md" style={{ lineHeight: 1.65, color: 'rgba(12, 9, 11, 0.72)' }}>
                    As Founder & CEO of Naza Agape Foundation, Mrs Prayer (Chinaza) Nwagboso channels over eight years of
                    humanitarian work into Girlified&apos;s community programmes, free pad distributions, school
                    sensitization, and menstrual hygiene education for girls in rural and underserved communities who
                    would otherwise miss school.
                  </Text>
                  <Text size="md" style={{ lineHeight: 1.65, color: 'rgba(12, 9, 11, 0.72)' }}>
                    For International Women&apos;s Day 2025, Naza Agape Foundation embraced the theme{' '}
                    <Text span fw={700} c="#FF007F">
                      #AccelerateAction
                    </Text>
                    &nbsp; calling on all of us to break barriers, create opportunities, and uplift young girls to reach their
                    full potential. Through education, empowerment, and action, Mrs Prayer is building a future where
                    every woman and girl thrives.
                  </Text>
                  <Box
                    style={{
                      padding: '16px 20px',
                      borderRadius: 14,
                      borderLeft: '3px solid #FF007F',
                      backgroundColor: 'rgba(255, 0, 127, 0.06)',
                    }}
                  >
                    <Text size="sm" fs="italic" style={{ lineHeight: 1.65, color: 'rgba(12, 9, 11, 0.78)' }}>
                      &ldquo;At Naza Agape Foundation, we believe in the power of education, empowerment, and action to
                      transform lives. Together, let&apos;s build a future where every woman and girl thrives.&rdquo;
                    </Text>
                    <Text size="xs" mt={8} fw={600} style={{ color: 'rgba(12, 9, 11, 0.55)' }}>
                      — Naza Agape Foundation, International Women&apos;s Day 2025
                    </Text>
                  </Box>
                 
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>

          {/* William — Innovation & Research Spotlight */}
          <Box
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.55)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              borderRadius: 28,
              padding: '48px 36px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 18px 36px rgba(12, 9, 11, 0.08)',
            }}
          >
            <Grid gutter={{ base: 'xl', lg: 60 }} align="center">
              <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: 1 }}>
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
                    INNOVATION & RESEARCH
                  </Badge>
                  <Title order={2} style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.8px', color: '#0C090B' }}>
                    Oghenekevwe William — From Agro-Waste to Absorbent Core
                  </Title>
                  <Text size="md" style={{ lineHeight: 1.65, color: 'rgba(12, 9, 11, 0.72)' }}>
                    With a physics background from the University of Jos, William leads the fibre-to-fluff process
                    that converts post-harvest banana pseudostem into highly absorbent, plastic-free sanitary pad cores,
                    replacing conventional super absorbent polymers with plant-based materials.
                  </Text>
                  <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
                    {williamHighlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Card
                          key={item.title}
                          radius="md"
                          p="md"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.75)',
                            border: '1px solid rgba(255, 0, 127, 0.1)',
                          }}
                        >
                          <Stack gap="xs">
                            <Box
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: 10,
                                backgroundColor: `${item.color}18`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon size={18} color={item.color} />
                            </Box>
                            <Text fw={700} size="sm" c="#0C090B">
                              {item.title}
                            </Text>
                            <Text size="xs" style={{ lineHeight: 1.5, color: 'rgba(12, 9, 11, 0.65)' }}>
                              {item.description}
                            </Text>
                          </Stack>
                        </Card>
                      );
                    })}
                  </SimpleGrid>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: 2 }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/product/image_pad_2.jpg"
                    alt="Girlified eco-friendly sanitary pad product"
                    radius="lg"
                    style={{
                      border: '1px solid rgba(255, 0, 127, 0.12)',
                      boxShadow: '0 12px 28px rgba(12, 9, 11, 0.08)',
                    }}
                  />
                </motion.div>
              </Grid.Col>
            </Grid>
          </Box>

          {/* Company Timeline */}
          <Box>
            <Flex justify="center" mb={40} direction="column" align="center">
              <Badge
                size="md"
                radius="xl"
                mb="sm"
                style={{
                  background: 'rgba(255, 0, 127, 0.08)',
                  color: '#FF007F',
                  border: '1px solid rgba(255, 0, 127, 0.15)',
                  fontWeight: 700,
                }}
              >
                <Group gap={6}>
                  <IconTimeline size={14} />
                  OUR JOURNEY
                </Group>
              </Badge>
              <Title order={2} style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.8px', color: '#0C090B' }}>
                Milestones That Shaped Girlified
              </Title>
            </Flex>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
              {timelineMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year + milestone.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card
                    radius="lg"
                    p="lg"
                    style={{
                      height: '100%',
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid rgba(255, 0, 127, 0.12)',
                      backdropFilter: 'blur(10px)',
                      transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                    {...cardHoverHandlers}
                  >
                    <Stack gap="sm">
                      <Badge
                        size="sm"
                        style={{
                          background: 'rgba(255, 0, 127, 0.1)',
                          color: '#FF007F',
                          fontWeight: 800,
                          alignSelf: 'flex-start',
                        }}
                      >
                        {milestone.year}
                      </Badge>
                      <Title order={4} style={{ fontSize: '1.05rem', color: '#0C090B', letterSpacing: '-0.3px' }}>
                        {milestone.title}
                      </Title>
                      <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.68)' }}>
                        {milestone.description}
                      </Text>
                    </Stack>
                  </Card>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>

          {/* Core Values */}
          <Box>
            <Flex justify="center" mb={40} direction="column" align="center">
              <Title order={2} style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.8px', color: '#0C090B' }}>
                Core Values
              </Title>
            </Flex>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={value.title}
                    radius="lg"
                    p="xl"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid rgba(255, 0, 127, 0.12)',
                      textAlign: 'center',
                    }}
                  >
                    <Stack gap="md" align="center">
                      <Box
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 14,
                          backgroundColor: `${value.color}18`,
                          border: `1px solid ${value.color}33`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={24} color={value.color} />
                      </Box>
                      <Title order={3} style={{ fontSize: '1.2rem', color: '#0C090B' }}>
                        {value.title}
                      </Title>
                      <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.68)' }}>
                        {value.description}
                      </Text>
                    </Stack>
                  </Card>
                );
              })}
            </SimpleGrid>
          </Box>

          {/* Recognition & Backing */}
          <Box>
            <Flex justify="center" mb={32} direction="column" align="center">
              <Title order={2} style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.8px', color: '#0C090B' }}>
                Recognition & Backing
              </Title>
              <Text size="md" ta="center" maw={560} mt="sm" style={{ color: 'rgba(12, 9, 11, 0.65)' }}>
                Backed by global innovation and impact partners
              </Text>
            </Flex>
            <Box
              style={{
                overflow: 'hidden',
                borderRadius: 20,
                border: '1px solid rgba(255, 0, 127, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.55)',
                padding: '28px 0',
                backdropFilter: 'blur(10px)',
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ overflow: 'hidden' }}
              >
                <motion.div
                  style={{
                    display: 'flex',
                    width: 'max-content',
                    alignItems: 'center',
                  }}
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{ duration: 30, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                >
                  {[...Partners, ...Partners].map((partner, index) => (
                    <Box
                      key={`${partner.name}-${index}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 120,
                      }}
                    >
                      <Image
                        height={72}
                        src={partner.image}
                        alt={partner.name}
                        style={{ objectFit: 'contain', maxWidth: 140 }}
                      />
                    </Box>
                  ))}
                </motion.div>
              </motion.div>
            </Box>
          </Box>

          {/* Mission & Vision Section */}
          <Box
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              borderRadius: 28,
              padding: '60px 40px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 40px rgba(12, 9, 11, 0.08)',
              color: '#0C090B',
            }}
          >
            <Grid gutter={{ base: 'xl', lg: 60 }}>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="md">
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
                    MISSION
                  </Badge>
                  <Title order={2} c="#0C090B" style={{ letterSpacing: '-0.8px', fontSize: '1.6rem' }}>
                    Empower Through Sustainable Hygiene
                  </Title>
                  <Text size="sm" c="rgba(12, 9, 11, 0.72)" style={{ lineHeight: 1.6 }}>
                    To empower women and girls through affordable and sustainable menstrual hygiene products,
                    promoting their well-being, while simultaneously reducing plastic waste and pollution from
                    disposable sanitary pads.
                  </Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }} style={{ borderLeft: '1px solid rgba(12,9,11,0.08)' }}>
                <Stack gap="md" pl={{ base: 0, md: 'xl' }} pt={{ base: 'xl', md: 0 }}>
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
                    VISION
                  </Badge>
                  <Title order={2} c="#0C090B" style={{ letterSpacing: '-0.8px', fontSize: '1.6rem' }}>
                    Leading Period Care Across Africa
                  </Title>
                  <Text size="sm" c="rgba(12, 9, 11, 0.72)" style={{ lineHeight: 1.6 }}>
                    To become the leading sanitary pad brand in Africa that meets the most neglected hygiene needs
                    of local women and girls while empowering them to reduce pollution and live their best lives.
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>

          {/* FAQ Accordion Section */}
          <Box>
            <Flex justify="center" mb={40} direction="column" align="center">
              <Title order={2} style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.8px', color: '#0C090B' }}>
                Frequently Asked Questions
              </Title>
            </Flex>
            <Container size="md">
              <Accordion
                variant="separated"
                styles={{
                  item: {
                    border: '1px solid rgba(255, 0, 127, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: 12,
                    marginBottom: 16,
                    padding: '8px',
                    backdropFilter: 'blur(10px)',
                  },
                  control: {
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '-0.3px',
                    color: '#0C090B',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  },
                  panel: {
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'rgba(12, 9, 11, 0.72)',
                  },
                }}
              >
                {platformFaqs.map((faq) => (
                  <Accordion.Item key={faq.value} value={faq.value}>
                    <Accordion.Control>{faq.value}</Accordion.Control>
                    <Accordion.Panel>{faq.description}</Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Container>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default OurStoryPage;
