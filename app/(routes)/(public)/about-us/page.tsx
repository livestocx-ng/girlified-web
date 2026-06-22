'use client';

import { motion } from 'framer-motion';
import { Box, Card, Container, Grid, Group, Stack, Text, Title, Badge, Image, SimpleGrid } from '@mantine/core';
import { IconBuildingFactory2, IconCheck, IconDroplet, IconFlask2, IconLeaf, IconSchool, IconUsers } from '@tabler/icons-react';

const AboutUs = () => {
  const challengeBlocks = [
    {
      title: 'Menstrual Access Gap',
      icon: IconUsers,
      color: '#FF007F',
      description:
        'Period poverty affects an estimated 500 million people globally. In Nigeria, cost barriers still prevent many menstruators from accessing safe products consistently.',
      note: 'Source context: public health studies, UNICEF and Girlified field insights.',
    },
    {
      title: 'Plastic Burden',
      icon: IconDroplet,
      color: '#fb6704',
      description:
        'Many conventional pads rely on plastic-heavy absorbent layers. Reports from UNEP-linked lifecycle research indicate these materials can persist in landfills for centuries.',
      note: 'Source context: UNEP Life Cycle Initiative summaries.',
    },
    {
      title: 'Local Circular Opportunity',
      icon: IconLeaf,
      color: '#e848ba',
      description:
        'Agricultural residues like banana stem fiber can be transformed into high-value menstrual products, creating income pathways while reducing waste and emissions.',
      note: 'Source context: Girlified product model and circular-economy practice.',
    },
  ];

  const processSteps = [
    {
      title: 'Source',
      description:
        'Banana pseudo-stems and other plant fibers are recovered from post-harvest agro-waste streams, converting low-value biomass into useful raw material.',
      icon: IconLeaf,
      color: '#FF007F',
    },
    {
      title: 'Engineer',
      description:
        'Through fibre-to-fluff R&D, plant-based absorbent cores are developed to replace plastic-dependent SAP layers while maintaining comfort and performance.',
      icon: IconFlask2,
      color: '#fb6704',
    },
    {
      title: 'Scale',
      description:
        'Localized production and community partnerships improve affordability, support menstrual-health access, and create jobs for women across value chains.',
      icon: IconBuildingFactory2,
      color: '#e848ba',
    },
  ];

  const whoWeServe = [
    {
      title: 'Students & Young Women',
      icon: IconSchool,
      description:
        'Affordable, reliable pads help reduce period-related school disruption and support confidence during daily routines.',
    },
    {
      title: 'Low-to-Middle Income Households',
      icon: IconUsers,
      description:
        'Cost-effective products make safer menstrual care more accessible where affordability is a major barrier.',
    },
    {
      title: 'Climate-Conscious Consumers',
      icon: IconDroplet,
      description:
        'Users seeking lower-plastic, biodegradable options can align personal care choices with environmental values.',
    },
  ];

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
          right: '-10%',
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
          left: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(255, 183, 213, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Stack gap="80px">
          {/* Header */}
          <Grid gutter={{ base: 'xl', lg: 72 }} align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="md" maw={860}>
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
                  WHO WE ARE
                </Badge>
                <Title
                  order={1}
                  style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                    fontWeight: 850,
                    letterSpacing: '-2px',
                    lineHeight: 1.05,
                    background: 'linear-gradient(135deg, #0C090B 10%, #CC0066 60%, #FF007F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Building Better Period Care for People and Planet
                </Title>
                <Text
                  size="lg"
                  style={{
                    lineHeight: 1.65,
                    maxWidth: 760,
                    letterSpacing: '-0.25px',
                    color: 'rgba(12, 9, 11, 0.72)',
                  }}
                >
                  Girlified pioneers sustainable menstrual hygiene across Africa. We upcycle post-harvest banana stem agro-waste into affordable, biodegradable, and chemical-free sanitary pads that keep menstruators confident while reducing plastic pollution.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  radius="xl"
                  p="xl"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(255, 0, 127, 0.15)',
                    boxShadow: '0 14px 35px rgba(12, 9, 11, 0.08)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <Stack gap="md">
                    <Text size="xs" fw={800} style={{ letterSpacing: '1.2px', color: '#FF007F', textTransform: 'uppercase' }}>
                      Impact Snapshot
                    </Text>
                    <Group justify="space-between" align="flex-end">
                      <Title order={3} style={{ fontSize: '2rem', lineHeight: 1, color: '#0C090B' }}>
                        70,000+
                      </Title>
                      <Text size="sm" fw={600} style={{ color: 'rgba(12, 9, 11, 0.65)' }}>
                        Women impacted
                      </Text>
                    </Group>
                    <Box style={{ borderTop: '1px solid rgba(255, 0, 127, 0.12)' }} />
                    <Group justify="space-between" align="flex-end">
                      <Title order={3} style={{ fontSize: '1.6rem', lineHeight: 1, color: '#0C090B' }}>
                        100%
                      </Title>
                      <Text size="sm" fw={600} style={{ color: 'rgba(12, 9, 11, 0.65)' }}>
                        Plastic-free core
                      </Text>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Why This Matters - Research Backed Snapshot */}
          <Box
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.55)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              borderRadius: 28,
              padding: '40px 32px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 18px 36px rgba(12, 9, 11, 0.08)',
            }}
          >
            <Stack gap="lg">
              <Stack gap={6}>
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
                  WHY THIS MATTERS
                </Badge>
                <Title order={2} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-1px', color: '#0C090B' }}>
                  Health, Dignity, and Environmental Responsibility
                </Title>
                <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)', maxWidth: 860 }}>
                  Girlified was built around one belief: menstrual products should protect users and the planet at the same time. Our approach combines menstrual-health safety, affordability, and circular material innovation.
                </Text>
              </Stack>

              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                {challengeBlocks.map((block) => {
                  const Icon = block.icon;
                  return (
                    <Card
                      key={block.title}
                      radius="lg"
                      p="lg"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(255, 0, 127, 0.12)',
                        boxShadow: '0 10px 24px rgba(12, 9, 11, 0.05)',
                      }}
                    >
                      <Stack gap="sm">
                        <Box
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            backgroundColor: `${block.color}18`,
                            border: `1px solid ${block.color}33`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon size={20} color={block.color} />
                        </Box>
                        <Title order={3} style={{ fontSize: '1.2rem', lineHeight: 1.25, color: '#0C090B' }}>
                          {block.title}
                        </Title>
                        <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.74)' }}>
                          {block.description}
                        </Text>
                        <Text size="xs" style={{ color: 'rgba(12, 9, 11, 0.55)' }}>
                          {block.note}
                        </Text>
                      </Stack>
                    </Card>
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Box>

          {/* Crisis Comparison Grid */}
          <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title
                  order={2}
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    color: '#0C090B',
                    lineHeight: 1.2,
                  }}
                >
                  Addressing Period Poverty and Menstrual Hygiene
                </Title>
                <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)', letterSpacing: '-0.2px' }}>
                  Globally, gaps in sanitation, affordability, and menstrual-health education continue to limit safe period management for millions of women and girls. These barriers influence school participation, work consistency, confidence, and long-term wellbeing.
                </Text>
                <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)', letterSpacing: '-0.2px' }}>
                  In Nigeria, <span style={{ color: '#FF007F', fontWeight: 600 }}>37% of menstruators cannot afford menstrual products</span>. 
                  In many cases, this means girls cannot attend school or carry out daily activities. 
                  Girlified addresses this challenge with a highly cost-effective, locally manufactured alternative built for comfort, dignity, and routine use.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  style={{
                    borderRadius: 24,
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 0, 127, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 0 40px rgba(255, 0, 127, 0.06)',
                  }}
                >
                  <Image
                    src="/images/image_period-poverty.jpg"
                    alt="Menstrual hygiene sensitization outreach"
                    style={{ display: 'block', width: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* How Girlified Works */}
          <Box
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.55)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              borderRadius: 28,
              padding: '40px 32px',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 18px 36px rgba(12, 9, 11, 0.08)',
            }}
          >
            <Stack gap="lg">
              <Stack gap={6}>
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
                  HOW GIRLIFIED WORKS
                </Badge>
                <Title order={2} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-1px', color: '#0C090B' }}>
                  From Agro-Waste to Safer Menstrual Care
                </Title>
                <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)', maxWidth: 860 }}>
                  The Girlified model combines climate action, research, and health-centered product design into one circular system focused on measurable social impact.
                </Text>
              </Stack>

              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <Card
                      key={step.title}
                      radius="lg"
                      p="lg"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.78)',
                        border: '1px solid rgba(255, 0, 127, 0.12)',
                        boxShadow: '0 10px 24px rgba(12, 9, 11, 0.05)',
                      }}
                    >
                      <Stack gap="sm">
                        <Box
                          style={{
                            width: 42,
                            height: 42,
                            borderRadius: 12,
                            backgroundColor: `${step.color}18`,
                            border: `1px solid ${step.color}33`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon size={20} color={step.color} />
                        </Box>
                        <Title order={3} style={{ fontSize: '1.2rem', lineHeight: 1.25, color: '#0C090B' }}>
                          {step.title}
                        </Title>
                        <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.74)' }}>
                          {step.description}
                        </Text>
                      </Stack>
                    </Card>
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Box>

          {/* Research & Growth Section */}
          <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  style={{
                    borderRadius: 24,
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 0, 127, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 0 40px rgba(255, 0, 127, 0.06)',
                  }}
                >
                  <Image
                    src="https://girlified.com.ng/wp-content/uploads/2023/11/journey-1024x706.jpg"
                    alt="Girlified product development and manufacturing journey"
                    style={{ display: 'block', width: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
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
                  RESEARCH & GROWTH
                </Badge>
                <Title
                  order={2}
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    color: '#0C090B',
                    lineHeight: 1.2,
                  }}
                >
                  Building a Scalable African Menstrual Health Brand
                </Title>
                <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                  Girlified has evolved from a research project into a scaling impact venture supported by cross-sector collaborations. Public updates cite expanded production capacity and a continued commitment to replacing plastic-intensive materials in everyday hygiene products.
                </Text>
                <Stack gap="sm">
                  <Text size="sm" style={{ color: 'rgba(12, 9, 11, 0.8)' }}>
                    <span style={{ fontWeight: 700, color: '#0C090B' }}>Production progress:</span> Public reports mention capacity expansion to about 30,000 sanitary napkins per day.
                  </Text>
                  <Text size="sm" style={{ color: 'rgba(12, 9, 11, 0.8)' }}>
                    <span style={{ fontWeight: 700, color: '#0C090B' }}>Material innovation:</span> Ongoing fibre-to-fluff research targets broader replacement of unsustainable non-woven plastics.
                  </Text>
                  <Text size="sm" style={{ color: 'rgba(12, 9, 11, 0.8)' }}>
                    <span style={{ fontWeight: 700, color: '#0C090B' }}>Scale pathway:</span> Partnerships across research, manufacturing, and ecosystem financing are being used to accelerate reach across Africa.
                  </Text>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>

          {/* Who We Serve */}
          <Box
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              borderRadius: 28,
              padding: '42px 32px',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 18px 36px rgba(12, 9, 11, 0.08)',
            }}
          >
            <Stack gap="lg">
              <Stack gap={6}>
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
                  WHO WE SERVE
                </Badge>
                <Title order={2} style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-1px', color: '#0C090B' }}>
                  Built for Everyday Users and Ecosystem Partners
                </Title>
              </Stack>
              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                {whoWeServe.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.1 }}
                    >
                      <Card
                        radius="lg"
                        p="lg"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.78)',
                          border: '1px solid rgba(255, 0, 127, 0.12)',
                          boxShadow: '0 10px 24px rgba(12, 9, 11, 0.05)',
                          height: '100%',
                        }}
                      >
                        <Stack gap="sm">
                          <Box
                            style={{
                              width: 42,
                              height: 42,
                              borderRadius: 12,
                              backgroundColor: 'rgba(255, 0, 127, 0.1)',
                              border: '1px solid rgba(255, 0, 127, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <Icon size={20} color="#FF007F" />
                          </Box>
                          <Title order={3} style={{ fontSize: '1.15rem', color: '#0C090B', lineHeight: 1.25 }}>
                            {item.title}
                          </Title>
                          <Text size="sm" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.74)' }}>
                            {item.description}
                          </Text>
                        </Stack>
                      </Card>
                    </motion.div>
                  );
                })}
              </SimpleGrid>
            </Stack>
          </Box>

          {/* Plastic Pollution Section */}
          <Box
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              borderRadius: 28,
              padding: '60px 40px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 40px rgba(12, 9, 11, 0.08)',
            }}
          >
            <Grid gutter={{ base: 'xl', lg: 60 }} align="center">
              <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
                <Box
                  style={{
                    borderRadius: 20,
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 0, 127, 0.12)',
                    boxShadow: '0 10px 30px rgba(12, 9, 11, 0.12)',
                  }}
                >
                  <Image
                    src="/images/image_ocean-pollution.jpg"
                    alt="Plastic pollution in oceans"
                    style={{ display: 'block', width: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
                <Stack gap="xl">
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
                    THE ENVIRONMENT
                  </Badge>
                  <Title
                    order={2}
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      letterSpacing: '-1px',
                      color: '#0C090B',
                      lineHeight: 1.2,
                    }}
                  >
                    Combating Plastic Pollution in Menstrual Products
                  </Title>
                  <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                    Conventional sanitary pads are often plastic-heavy, which contributes to long-lived waste streams. UNEP-linked lifecycle analyses highlight how single-use menstrual products can persist in landfill systems for hundreds of years and may contribute to microplastic leakage.
                  </Text>
                  <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                    This is why Girlified focuses on plant-based absorbent innovation and local circular manufacturing — reducing plastic dependence while keeping products accessible for everyday users.
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>

          {/* Innovation Section */}
          <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Title
                  order={2}
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    color: '#0C090B',
                    lineHeight: 1.2,
                  }}
                >
                  Introducing a Sustainable Solution
                </Title>
                <Text size="md" style={{ lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                  Girlified replaces the plastic-based Super Absorbent Polymers (SAP) core used in conventional napkins with upcycled plant fibers. 
                  Our research-backed combination of banana stem fiber and organic cotton is completely plastic-free and fully biodegrades within 6 months.
                </Text>

                <Stack gap="md" mt="md">
                  <Group gap="md" wrap="nowrap" align="flex-start">
                    <Box
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 0, 127, 0.15)',
                        border: '1px solid rgba(255, 0, 127, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconCheck size={16} color="#FF007F" stroke={3} />
                    </Box>
                    <Text size="sm" style={{ color: 'rgba(12, 9, 11, 0.78)', lineHeight: 1.5 }}>
                      <span style={{ color: '#0C090B', fontWeight: 600 }}>Agro-Waste Valorization</span>: Upcycles discarded post-harvest banana stems, generating income for local farmers.
                    </Text>
                  </Group>
                  <Group gap="md" wrap="nowrap" align="flex-start">
                    <Box
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 0, 127, 0.15)',
                        border: '1px solid rgba(255, 0, 127, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconCheck size={16} color="#FF007F" stroke={3} />
                    </Box>
                    <Text size="sm" style={{ color: 'rgba(12, 9, 11, 0.78)', lineHeight: 1.5 }}>
                      <span style={{ color: '#0C090B', fontWeight: 600 }}>Safe & Gentle Core</span>: Chemical-free, hypoallergenic materials eliminate skin irritation, friction rashes, and toxicity.
                    </Text>
                  </Group>
                  <Group gap="md" wrap="nowrap" align="flex-start">
                    <Box
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 0, 127, 0.15)',
                        border: '1px solid rgba(255, 0, 127, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconCheck size={16} color="#FF007F" stroke={3} />
                    </Box>
                    <Text size="sm" style={{ color: 'rgba(12, 9, 11, 0.78)', lineHeight: 1.5 }}>
                      <span style={{ color: '#0C090B', fontWeight: 600 }}>Designed for Scale</span>: Local production and distributed partnerships help Girlified expand impact across schools, communities, and retail channels.
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box
                  style={{
                    borderRadius: 20,
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 0, 127, 0.2)',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.08), 0 0 40px rgba(255, 0, 127, 0.06)',
                  }}
                >
                  <Image
                    src="/images/image_pad-waste.jpg"
                    alt="Raw banana stem fiber processing"
                    style={{ display: 'block', width: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Call to Action */}
          <Card
            radius="lg"
            p="50px"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 0, 127, 0.15)',
              textAlign: 'center',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 40px rgba(12, 9, 11, 0.08)',
            }}
          >
            <Stack gap="md" align="center">
              <Title order={2} style={{ letterSpacing: '-1px', color: '#0C090B' }}>
                Pioneering Innovation in Africa
              </Title>
              <Text size="md" style={{ maxWidth: 700, lineHeight: 1.6, color: 'rgba(12, 9, 11, 0.72)' }}>
                Girlified is one of the global pioneers in developing post-harvest plant-based sanitary napkins. 
                Our team integrates cost-effectiveness, menstrual health safety, and microplastic prevention to support menstruators across Sub-Saharan Africa.
              </Text>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
