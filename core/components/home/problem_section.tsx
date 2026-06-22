'use client';

import { motion } from 'framer-motion';
import { Box, Card, Container, SimpleGrid, Stack, Text, Title, Badge, Image } from '@mantine/core';
import { IconDroplet, IconRecycleOff, IconWallet } from '@tabler/icons-react';

const ProblemSection = () => {
  const problems = [
    {
      tag: 'Affordability',
      title: 'Period Poverty',
      description:
        'In Nigeria, 37% of women and girls cannot afford conventional period products. This lack of access drives school and work absenteeism, limiting critical life opportunities.',
      stat: '37%',
      substat: 'of menstruators affected locally',
      color: '#FF007F',
      icon: IconWallet,
      // image: '/images/period_poverty.png',
      image: '/images/image_period-poverty.jpg',
    },
    {
      tag: 'Waste',
      title: 'Sanitary Pads Waste',
      description:
        'Conventional pads contain up to 90% petrochemical plastic. An average menstruator throws away 200kg of menstrual products in their lifetime—taking up to 500 years to degrade.',
      stat: '500 Years',
      substat: 'estimated time to decompose',
      color: '#fb6704',
      icon: IconRecycleOff,
      // image: '/images/pads_waste.png',
      image: '/images/image_pad-waste.jpg',
    },
    {
      tag: 'Pollution',
      title: 'Oceans Plastic Pollution',
      description:
        'A single conventional pack of sanitary pads contains the equivalent plastic of five plastic bags. Over 11 million tons of plastic waste enter our oceans annually, harming marine life.',
      stat: '5 Bags',
      substat: 'worth of plastic per pack',
      color: '#e848ba',
      icon: IconDroplet,
      // image: '/images/ocean_pollution.png',
      image: '/images/image_ocean-pollution.jpg',
    },
  ];

  return (
    <Box
      component="section"
      id="problem"
      py={{ base: 80, md: 120 }}
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Background Grid Pattern */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255, 0, 127, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 127, 0.015) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Decorative Radial Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.08, 0.95, 1],
          opacity: [0.8, 1, 0.9, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vw',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.03) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Stack gap="50px">
          {/* Header section */}
          <Stack gap="md" align="center" ta="center" style={{ maxWidth: 760, marginInline: 'auto' }}>
            <Badge
              size="lg"
              radius="xl"
              style={{
                background: 'rgba(255, 0, 127, 0.08)',
                color: '#FF007F',
                border: '1px solid rgba(255, 0, 127, 0.15)',
                fontWeight: 700,
                letterSpacing: '1px',
              }}
            >
              THE CRISIS
            </Badge>
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-1.5px',
                background: 'linear-gradient(135deg, #0C090B 0%, #CC0066 60%, #FF007F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tackling a Dual Crisis of Poverty and Pollution
            </Title>
            <Text
              size="md"
              style={{
                lineHeight: 1.6,
                letterSpacing: '-0.3px',
                color: 'rgba(12, 9, 11, 0.7)',
              }}
            >
              Conventional period products impose heavy costs on both young menstruators and the environment. 
              We believe period care shouldn't come at the cost of your health or the planet.
            </Text>
          </Stack>

          {/* Cards Grid */}
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {problems.map((prob, index) => {
              const Icon = prob.icon;
              return (
                <motion.div
                  key={prob.title}
                  initial={{ opacity: 0, y: 40, scale: 0.96, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                  viewport={{ once: false, margin: '-100px' }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover="hover"
                >
                  <Card
                    radius="lg"
                    p="24px"
                    style={{
                      height: '100%',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(255, 0, 127, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)',
                      transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.25)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 0, 127, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.08)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.02)';
                    }}
                  >
                    <Stack gap="xl">
                      {/* Image Header */}
                      <Card.Section style={{ overflow: 'hidden' }}>
                        <Box style={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                          <motion.div
                            variants={{
                              hover: { scale: 1.05 }
                            }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            style={{ width: '100%', height: '100%' }}
                          >
                            <Image
                              src={prob.image}
                              alt={prob.title}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          </motion.div>
                        </Box>
                      </Card.Section>

                      <Stack gap="sm">
                        {/* Icon & Tag Container */}
                        <Box style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <motion.div
                            variants={{
                              hover: {
                                scale: 1.12,
                                rotate: prob.title === 'Sanitary Pads Waste' ? -15 : prob.title === 'Period Poverty' ? 10 : 0,
                                y: prob.title === 'Oceans Plastic Pollution' ? -3 : 0,
                              }
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                            style={{
                              width: 42,
                              height: 42,
                              borderRadius: 12,
                              backgroundColor: `${prob.color}14`,
                              border: `1px solid ${prob.color}29`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={20} color={prob.color} stroke={1.8} />
                          </motion.div>
                          <Text
                            fw={700}
                            style={{
                              fontSize: '0.7rem',
                              textTransform: 'uppercase',
                              letterSpacing: '1.5px',
                              color: prob.color,
                            }}
                          >
                            {prob.tag}
                          </Text>
                        </Box>

                        <Title
                          order={3}
                          style={{
                            fontSize: '1.35rem',
                            fontWeight: 700,
                            letterSpacing: '-0.6px',
                            color: '#0C090B',
                            lineHeight: 1.2,
                          }}
                        >
                          {prob.title}
                        </Title>

                        <Text size="sm" style={{ lineHeight: 1.65, color: 'rgba(12, 9, 11, 0.62)', letterSpacing: '-0.2px' }}>
                          {prob.description}
                        </Text>
                      </Stack>
                    </Stack>

                    {/* Stats Display */}
                    <Box
                      mt="28px"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                        paddingTop: 18,
                      }}
                    >
                      <Box
                        style={{
                          width: 4,
                          alignSelf: 'stretch',
                          borderRadius: 4,
                          backgroundColor: prob.color,
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Text
                          fw={800}
                          style={{
                            fontSize: '2.1rem',
                            color: prob.color,
                            lineHeight: 1,
                            letterSpacing: '-1.2px',
                          }}
                        >
                          {prob.stat}
                        </Text>
                        <Text
                          size="xs"
                          fw={500}
                          style={{ color: 'rgba(12, 9, 11, 0.5)', letterSpacing: '-0.2px' }}
                          mt={5}
                        >
                          {prob.substat}
                        </Text>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProblemSection;
