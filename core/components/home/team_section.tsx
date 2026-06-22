'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Container, Grid, Group, Stack, Text, Title, Anchor } from '@mantine/core';
import { IconBrandLinkedin, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const bgImages = [
  // '/images/image_team.jpg',
  // '/images/image_team_2.jpg',
  '/images/image_team_3.jpg',
  // '/images/image_team_4.jpg',
  '/images/image_root_1.jpg',
];

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      const { clientWidth, children } = scrollRef.current;
      const cardWidth = (children[0] as HTMLElement)?.offsetWidth || clientWidth;
      scrollRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      const { clientWidth, children } = scrollRef.current;
      const cardWidth = (children[0] as HTMLElement)?.offsetWidth || clientWidth;
      scrollRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll(); // Initialize scroll state
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollNext();
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const team = [
    {
      name: 'Oghenekevwe Emadago',
      role: 'CEO / Co-founder',
      bio: 'Award-winning nanochemist and materials scientist leading climate-smart livestock solutions for 13,000+ users across Africa and the US. Recognized globally as an O\'Shaughnessy Fellow and AfriPlastics Prize winner.',
      highlights: [
        '$100K O\'Shaughnessy Fellow',
        '£100K AfriPlastics Prize',
        'Materials Science Innovator',
      ],
      linkedin: 'https://www.linkedin.com/in/oghenekevwe-emadago/',
    },
    {
      name: 'Idokoh Divine',
      role: 'COO / Agricultural Economist',
      bio: 'Agricultural Economist with 5+ years driving livestock value chains and farmer engagement. Scaled adoption to 13,000+ rural farmers while managing high-impact projects funded by the EU, GIZ, and the U.S. Chamber of Commerce.',
      highlights: [
        '13,000+ Farmers Scaled',
        'EU & GIZ Project Manager',
        'Livestock Value Chain Expert',
      ],
      linkedin: '#',
    },
    {
      name: 'Dr. Virtous Luka',
      role: 'Veterinary Research Lead',
      bio: 'Expert researcher with 7+ years of veterinary and biochemical experience, including key roles at Nigeria’s National Veterinary Research Institute. Holds a PhD in Animal Health from Wageningen University.',
      highlights: [
        'PhD Wageningen University',
        '7+ Years Veterinary Research',
        'Biochemical Systems Expert',
      ],
      linkedin: '#',
    },
    {
      name: 'Yada Martins',
      role: 'CTO / Full-Stack AI Engineer',
      bio: 'Innovative full-stack AI engineer specializing in predictive disease and climate systems. Backed by multiple innovation awards including major GIZ contracts and UNDP grants for high-impact climate-tech infrastructure.',
      highlights: [
        '$50K GIZ Contract',
        'UNDP Youth4Climate Grant',
        'Predictive AI Specialist',
      ],
      linkedin: 'https://www.linkedin.com/in/yada-martins',
    },
    {
      name: 'Asalu Temitope',
      role: 'Lead AI Systems Engineer',
      bio: 'Expert AI engineer focusing on predictive data models and machine learning pipelines for climate-resilient agriculture. Specializes in optimizing thermal management systems through advanced IoT sensor integrations.',
      highlights: [
        'Predictive Modeling Expert',
        'IoT Data Integration',
        'AI for Agriculture',
      ],
      linkedin: '#',
    },
  ];

  return (
    <Box
      component="section"
      id="team"
      style={{ background: '#0a1f14', overflow: 'hidden', position: 'relative' }}
    >
      <Grid gutter={0} align="stretch">
        {/* LEFT — Lab image */}
        <Grid.Col span={{ base: 12, lg: 7 }} style={{ position: 'relative', minHeight: 520 }}>
          {bgImages.map((src, idx) => (
            <Box
              key={src}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: bgIndex === idx ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            />
          ))}
          {/* Right fade to dark on desktop */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, transparent 50%, #0a1f14 100%)',
            }}
            display={{ base: 'none', lg: 'block' }}
          />
          {/* Bottom overlay on mobile */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, #0a1f14 100%)',
            }}
            display={{ base: 'block', lg: 'none' }}
          />

          {/* Lab label card */}
          {/* <motion.div
            style={{
              position: 'absolute',
              bottom: 24,
              right: 24,
              background: 'rgba(10,31,20,0.92)',
              backdropFilter: 'blur(16px)',
              borderRadius: 12,
              border: '1px solid rgba(34,163,102,0.3)',
              padding: '12px 18px',
              zIndex: 10,
            }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Text size="xs" c="climate.4" fw={700}>
              🔬 University of Wyoming
            </Text>
            <Text size="xs" c="rgba(255,255,255,0.6)" mt={2}>
              Nanoparticles Lab — Active R&D Partner
            </Text>
          </motion.div> */}
        </Grid.Col>

        {/* RIGHT — Team cards */}
        <Grid.Col span={{ base: 12, lg: 5 }}>
          <Box py={{ base: 64, lg: 96 }} px={{ base: 24, sm: 40, lg: 64 }}>
            <Stack gap="xl">
              {/* Label + Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Stack gap="md">
                  <Box
                    style={{
                      display: 'inline-block',
                      background: 'rgba(34,163,102,0.1)',
                      border: '1px solid rgba(34,163,102,0.3)',
                      borderRadius: 50,
                      padding: '6px 20px',
                      color: '#22a366',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                    }}
                  >
                    THE TEAM
                  </Box>
                  <Title
                    order={2}
                    c="white"
                    style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2 }}
                  >
                    Award-Winning Scientists & Engineers
                  </Title>
                  <Text c="rgba(255,255,255,0.6)" style={{ lineHeight: 1.7 }}>
                    Our founding team brings together deep expertise in nanotechnology, AI, and
                    full-stack engineering — backed by world-class institutions.
                  </Text>
                </Stack>
              </motion.div>

              {/* Team member cards */}
              <Box 
                style={{ position: 'relative' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {canScrollLeft && (
                  <Box
                    onClick={scrollPrev}
                    style={{
                      position: 'absolute',
                      left: -20,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 10,
                      background: 'rgba(10,31,20,0.8)',
                      border: '1px solid rgba(34,163,102,0.4)',
                      borderRadius: '50%',
                      padding: 8,
                      cursor: 'pointer',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconChevronLeft size={24} color="#5cc494" />
                  </Box>
                )}

                {canScrollRight && (
                  <Box
                    onClick={scrollNext}
                    style={{
                      position: 'absolute',
                      right: -20,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 10,
                      background: 'rgba(10,31,20,0.8)',
                      border: '1px solid rgba(34,163,102,0.4)',
                      borderRadius: '50%',
                      padding: 8,
                      cursor: 'pointer',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconChevronRight size={24} color="#5cc494" />
                  </Box>
                )}

                <Box
                  ref={scrollRef}
                  onScroll={handleScroll}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    paddingBottom: '24px',
                    scrollbarWidth: 'none',
                  }}
                >
                {team.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    style={{
                      flex: '0 0 100%',
                      minWidth: '100%',
                      scrollSnapAlign: 'start',
                    }}
                  >
                    <Box
                      style={{
                        height: '100%',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(34,163,102,0.2)',
                        borderRadius: 20,
                        padding: '28px',
                        backdropFilter: 'blur(10px)',
                        transition: 'border-color 0.3s, box-shadow 0.3s',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,163,102,0.5)';
                        (e.currentTarget as HTMLElement).style.boxShadow =
                          '0 0 40px rgba(34,163,102,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,163,102,0.2)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    >
                      <Group justify="space-between" mb="md" align="flex-start">
                        <Stack gap={4}>
                          <Text fw={700} c="white" size="lg">
                            {member.name}
                          </Text>
                          <Text size="sm" c="climate.4" fw={500}>
                            {member.role}
                          </Text>
                        </Stack>
                        <Anchor href={member.linkedin} target="_blank">
                          <Box
                            style={{
                              background: 'rgba(34,163,102,0.15)',
                              border: '1px solid rgba(34,163,102,0.3)',
                              borderRadius: 8,
                              padding: 8,
                              transition: 'background 0.2s',
                            }}
                          >
                            <IconBrandLinkedin size={20} color="#5cc494" />
                          </Box>
                        </Anchor>
                      </Group>
  
                      <Text
                        c="rgba(255,255,255,0.65)"
                        size="sm"
                        style={{ lineHeight: 1.7 }}
                        mb="md"
                      >
                        {member.bio}
                      </Text>
  
                      {/* Highlights */}
                      <Group gap="sm" wrap="wrap">
                        {member.highlights.map((h, j) => (
                          <Box
                            key={j}
                            style={{
                              background: 'rgba(34,163,102,0.1)',
                              border: '1px solid rgba(34,163,102,0.25)',
                              borderRadius: 50,
                              padding: '4px 12px',
                              color: '#5cc494',
                              fontSize: 12,
                              fontWeight: 500,
                            }}
                          >
                            ✓ {h}
                          </Box>
                        ))}
                      </Group>
                    </Box>
                  </motion.div>
                ))}
              </Box>
              </Box>
            </Stack>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default TeamSection;
