'use client';

import { Box, Card, Container, Group, Image, Stack, Text, Title, Badge } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF007F" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
  </svg>
);

const TractionSection = () => {
  const testimonials = [
    {
      quote: "Girlified sticks better than other pads. It is very healthy, very affordable, it doesn't give me rashes, and is highly accessible.",
      author: 'Nenman',
      role: 'Early User & Outreach Participant',
      avatar: '/images/testimonials/avatar_nenman.png',
    },
    {
      quote: "I love Girlified because it's very long in length, it lasts longer than regular pads, and it is very, very comfortable. No friction rashes at all.",
      author: 'Maureen',
      role: 'School Workshop Tester',
      avatar: '/images/testimonials/avatar_maureen.png',
    },
    {
      quote: "Maximum comfort, excellent length, and protects all day long. Feels great to support a brand that reduces plastic waste and eco-emissions.",
      author: 'Aisha',
      role: 'Eco-conscious Customer',
      avatar: '/images/testimonials/avatar_aisha.png',
    },
    {
      quote: "As a medical practitioner, I highly recommend these plant-based pads. Being free from chlorine and synthetic toxins prevents chronic vaginal irritation.",
      author: 'Dr. Elizabeth',
      role: 'Outreach Gynecologist',
      avatar: '/images/testimonials/avatar_elizabeth.png',
    },
    {
      quote: "I bought these for my daughters after attending their sensitization campaign. It's affordable, safe, and they have had zero complaints about discomfort.",
      author: 'Chidinma',
      role: 'Parent & Community Buyer',
      avatar: '/images/testimonials/avatar_chidinma.png',
    },
    {
      quote: "Knowing that these sanitary pads decompose completely in 6 months compared to 500 years for standard plastic pads is a massive win for Sub-Saharan Africa.",
      author: 'Funmi',
      role: 'Sustainability Researcher',
      avatar: '/images/testimonials/avatar_funmi.png',
    },
    {
      quote: "Empowering local women through production jobs while solving period poverty is a double victory. The community feedback has been overwhelmingly positive.",
      author: 'Blessing',
      role: 'Outreach Volunteer',
      avatar: '/images/testimonials/avatar_blessing.png',
    },
  ];

  // Duplicate the list to achieve a perfect seamless scrolling loop
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <Box
      component="section"
      id="traction"
      py={{ base: 80, md: 120 }}
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <style>{`
        @keyframes scrollMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .testimonial-marquee-container {
          display: flex;
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          padding: 20px 0;
        }
        .testimonial-marquee-track {
          display: flex;
          width: max-content;
          gap: 32px;
          animation: scrollMarquee 50s linear infinite;
        }
        .testimonial-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

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

      {/* Decorative background radial light */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 127, 0.03) 0%, transparent 60%)',
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
                border: '1px solid rgba(255, 0, 127, 0.15)',
                fontWeight: 700,
                letterSpacing: '1px',
              }}
            >
              TESTIMONIALS
            </Badge> */}
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
              Loved by Women, Approved by Nature
            </Title>
            <Text
              size="md"
              style={{
                lineHeight: 1.6,
                maxWidth: 600,
                letterSpacing: '-0.3px',
                color: 'rgba(12, 9, 11, 0.7)',
              }}
            >
              Read direct feedback from school outreach workshops and early testers who transitioned from plastic pads to upcycled plant fiber.
            </Text>
          </Stack>

          {/* Testimonial Scrolling Row */}
          <Box className="testimonial-marquee-container">
            <Box className="testimonial-marquee-track">
              {scrollingTestimonials.map((test, index) => (
                <Box
                  key={`${test.author}-${index}`}
                  style={{
                    width: 380,
                    flexShrink: 0,
                  }}
                >
                  <Card
                    radius="20px"
                    p="32px"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(255, 0, 127, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      boxShadow: '0 8px 30px rgba(255, 0, 127, 0.02)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.22)';
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 0, 127, 0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 0, 127, 0.02)';
                    }}
                  >
                    {/* Giant background quote mark */}
                    <IconQuote
                      size={56}
                      color="#FF007F"
                      style={{
                        position: 'absolute',
                        top: 24,
                        right: 24,
                        opacity: 0.05,
                        pointerEvents: 'none',
                      }}
                    />

                    <Stack gap="md" style={{ flexGrow: 1 }}>
                      {/* Rating Stars */}
                      <Group gap={3}>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </Group>

                      {/* Quote Content */}
                      <Text
                        size="md"
                        style={{
                          lineHeight: 1.6,
                          letterSpacing: '-0.3px',
                          color: '#212529',
                          fontWeight: 500,
                          fontStyle: 'italic',
                        }}
                      >
                        "{test.quote}"
                      </Text>
                    </Stack>

                    {/* Author Profile Information */}
                    <Group gap="sm" mt="32px" align="center" style={{ borderTop: '1px solid rgba(255, 0, 127, 0.08)', paddingTop: 20 }}>
                    <Image
                      src={test.avatar}
                      alt={test.author}
                      w={40}
                      h={40}
                      radius="50%"
                      style={{
                        objectFit: 'cover',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                      <Stack gap={2}>
                        <Group gap={6} align="center" wrap="nowrap">
                          <Text fw={700} size="sm" style={{ color: '#0C090B', letterSpacing: '-0.2px' }}>
                            {test.author}
                          </Text>
                          {/* Verified Mark */}
                          <Box
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: 14,
                              height: 14,
                              borderRadius: '50%',
                              backgroundColor: 'rgba(34, 197, 94, 0.15)',
                            }}
                          >
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </Box>
                        </Group>
                        <Text size="xs" fw={500} style={{ color: 'rgba(12, 9, 11, 0.5)' }}>
                          {test.role}
                        </Text>
                      </Stack>
                    </Group>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TractionSection;
