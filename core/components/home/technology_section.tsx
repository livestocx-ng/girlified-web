'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Container, Grid, Group, Image, Stack, Text, Title, Badge } from '@mantine/core';
import { IconCpu, IconLeaf, IconUsers } from '@tabler/icons-react';

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Highly Absorbent Core',
      description:
        'Upcycled banana stem agricultural waste fiber is naturally three times more absorbent than wood pulp or traditional cotton fillers, locking in moisture to keep you secure and dry.',
      benefit: '3x More Absorbent than paper cores',
      icon: IconLeaf,
      image: 'https://girlified.com.ng/wp-content/uploads/2023/11/journey-1024x706.jpg',
    },
    {
      title: '100% Biodegradable',
      description:
        'By completely eliminating plastic layers and petrochemical Super Absorbent Polymers (SAP), our pads fully decompose in landfills or compost bins within six months.',
      benefit: 'Decomposes completely in 6 months',
      icon: IconCpu,
      image: 'https://girlified.com.ng/wp-content/uploads/2025/03/picture.jpg',
    },
    {
      title: 'Hypoallergenic & Rash-Free',
      description:
        'No synthetic bleach, chlorine, or chemical fragrances. The natural plant-based core prevents vaginal irritation, friction rashes, and corporate toxic chemical exposures.',
      benefit: 'Zero chemicals, zero rashes guaranteed',
      icon: IconUsers,
      image: 'https://girlified.com.ng/wp-content/uploads/2025/03/pic1.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeTab, tabs.length]);

  return (
    <Box
      component="section"
      id="technology"
      py={{ base: 80, md: 120 }}
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Background Grid Lines */}
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

      {/* Background Soft Glow Orb */}
      <motion.div
        animate={{
          x: [0, -15, 10, 0],
          y: [0, 15, -20, 0],
          scale: [1, 1.06, 0.94, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Stack gap="60px">
          {/* Header */}
          <Stack align="center" ta="center" gap="md">
            {/* <Badge
              size="lg"
              radius="xl"
              style={{
                background: 'rgba(255, 0, 127, 0.08)',
                color: '#FF007F',
                border: '1px solid rgba(255, 0, 127, 0.2)',
                fontWeight: 700,
                letterSpacing: '1px',
              }}
            >
              OUR SOLUTION
            </Badge> */}
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-1.5px',
                color: '#0C090B',
                maxWidth: 700,
              }}
            >
              The Next Generation of Natural Menstrual Care
            </Title>
            <Text
              size="md"
              c="dimmed"
              style={{
                lineHeight: 1.6,
                maxWidth: 600,
                letterSpacing: '-0.3px',
              }}
            >
              We replace petroleum-based plastics in traditional pads with agricultural agro-waste, 
              delivering medical-grade absorbency and eco-conscious decomposition.
            </Text>
          </Stack>

          {/* Interactive Switcher */}
          <Grid gutter={{ base: 'xl', lg: 80 }} align="center">
            {/* Left Side - Vertical Tab Selection */}
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Stack gap="md">
                {tabs.map((tab, index) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === index;
                  return (
                    <motion.div
                      key={tab.title}
                      onClick={() => setActiveTab(index)}
                      initial={false}
                      animate={{
                        backgroundColor: isActive ? '#f9f0e2' : 'rgba(249, 240, 226, 0)',
                        boxShadow: isActive
                          ? '0 8px 25px rgba(137, 137, 137, 0.3)'
                          : '0 0px 0px rgba(137, 137, 137, 0)',
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={!isActive ? { backgroundColor: 'rgba(255, 0, 127, 0.02)' } : undefined}
                      style={{
                        padding: '24px',
                        borderRadius: 20,
                        cursor: 'pointer',
                      }}
                    >
                      <Group gap="md" align="flex-start" wrap="nowrap">
                        <motion.div
                          animate={{
                            backgroundColor: isActive ? '#FF007F' : 'rgba(255, 0, 127, 0.06)',
                            boxShadow: isActive
                              ? '0 4px 15px rgba(255, 0, 127, 0.25)'
                              : '0 0px 0px rgba(255, 0, 127, 0)',
                            scale: isActive ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <motion.div
                            animate={isActive ? {
                              rotate: tab.title === 'Highly Absorbent Core' ? [-4, 4, -4] : 0,
                              scale: tab.title === '100% Biodegradable' ? [0.95, 1.05, 0.95] : 1,
                              y: tab.title === 'Hypoallergenic & Rash-Free' ? [-1.5, 1.5, -1.5] : 0,
                            } : {}}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            <Icon size={22} color={isActive ? 'white' : '#FF007F'} />
                          </motion.div>
                        </motion.div>
                        <Stack gap="xs">
                          <Title
                            order={3}
                            style={{
                              fontSize: '1.25rem',
                              fontWeight: 700,
                              letterSpacing: '-0.5px',
                              color: isActive ? '#FF007F' : '#0C090B',
                              transition: 'color 0.3s ease',
                            }}
                          >
                            {tab.title}
                          </Title>
                          <Text
                            size="sm"
                            c={isActive ? '#2B161B' : 'dimmed'}
                            style={{
                              lineHeight: 1.5,
                              letterSpacing: '-0.2px',
                            }}
                          >
                            {isActive ? tab.description : `${tab.description.slice(0, 95)}...`}
                          </Text>
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.div
                                key="benefit"
                                initial={{ opacity: 0, height: 0, y: -4 }}
                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -4 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                style={{ overflow: 'hidden' }}
                              >
                                <Text
                                  size="xs"
                                  fw={700}
                                  c="#FF007F"
                                  mt="xs"
                                  style={{ letterSpacing: '0.2px' }}
                                >
                                  ⚡ BENEFIT: {tab.benefit}
                                </Text>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Stack>
                      </Group>
                    </motion.div>
                  );
                })}
              </Stack>
            </Grid.Col>

            {/* Right Side - Dynamic Image Switch */}
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Box
                style={{
                  position: 'relative',
                  height: 520,
                  width: '100%',
                  borderRadius: 24,
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.06), 0 0 40px rgba(255, 0, 127, 0.04)',
                  border: '1px solid rgba(255, 0, 127, 0.1)',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: -20 }}
                    transition={{ duration: 0.4 }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <Image
                      src={tabs[activeTab].image}
                      alt={tabs[activeTab].title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 24,
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default TechnologySection;
