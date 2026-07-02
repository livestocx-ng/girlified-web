'use client';

import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { IconExternalLink, IconFlask } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Badge, Box, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { researchPapers } from '@/core/utilities';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const PINK = '#FF007F';
const PINK_BORDER = 'rgba(255, 0, 127, 0.14)';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

const ResearchPaperCard = ({ title, pdfPath, previewPath }: (typeof researchPapers)[number]) => (
  <Box
    component="a"
    href={pdfPath}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      textDecoration: 'none',
      height: '100%',
    }}
  >
    <Box
      className="research-card"
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        border: `1px solid ${PINK_BORDER}`,
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 10px 30px rgba(12, 9, 11, 0.04)',
        transition:
          'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 0, 127, 0.08)';
        e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.25)';
        const img = e.currentTarget.querySelector('.preview-img') as HTMLElement;
        if (img) {
          img.style.transform = 'scale(1.04)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(12, 9, 11, 0.04)';
        e.currentTarget.style.borderColor = PINK_BORDER;
        const img = e.currentTarget.querySelector('.preview-img') as HTMLElement;
        if (img) {
          img.style.transform = 'scale(1)';
        }
      }}
    >
      <Box
        className="research-card-img-sec"
        style={{
          backgroundColor: '#F8F4EE',
          overflow: 'hidden',
        }}
      >
        <Box
          className="preview-img"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Image
            src={previewPath}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 280px"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </Box>
      </Box>

      <Stack gap="xs" p="lg" style={{ flexGrow: 1, justifyContent: 'space-between', minWidth: 0 }}>
        <Stack gap="xs">
          <Badge
            variant="filled"
            size="xs"
            style={{
              backgroundColor: 'rgba(255, 0, 127, 0.08)',
              color: PINK,
              fontWeight: 700,
              fontSize: 9,
              letterSpacing: '0.08em',
              padding: '4px 8px',
              borderRadius: 6,
              textTransform: 'uppercase',
              alignSelf: 'flex-start',
            }}
          >
            Research
          </Badge>
          <Text
            fw={600}
            c={INK}
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.45,
            }}
            lineClamp={3}
          >
            {title}
          </Text>
        </Stack>

        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <Text
            size="xs"
            fw={700}
            c={PINK}
            style={{
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Open Publication
          </Text>
          <IconExternalLink size={14} color={PINK} />
        </Box>
      </Stack>
    </Box>
  </Box>
);

const ResearchPage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#FBF6EE', overflowX: 'hidden' }}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .research-card {
          display: flex;
          flex-direction: row;
          height: 100%;
          min-height: 360px;
        }
        .research-card-img-sec {
          position: relative;
          width: 280px;
          flex-shrink: 0;
          border-right: 1px solid ${PINK_BORDER};
        }
        @media (max-width: 768px) {
          .research-card {
            flex-direction: column !important;
            min-height: auto !important;
          }
          .research-card-img-sec {
            width: 100% !important;
            height: 240px !important;
            border-right: none !important;
            border-bottom: 1px solid ${PINK_BORDER} !important;
          }
        }
      `,
        }}
      />
      <Box
        component="section"
        style={{
          position: 'relative',
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          borderBottom: `1px solid ${PINK_BORDER}`,
        }}
      >
        <Box style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/product/image_research_1.jpg"
            alt="Girlified research laboratory"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </Box>

        <Box
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(to bottom, rgba(12, 9, 11, 0.25) 0%, rgba(12, 9, 11, 0.32) 72%, rgba(12, 9, 11, 0.82) 100%)',
          }}
        />

        <Container
          size="xl"
          pt={{ base: 120, sm: 140 }}
          pb={{ base: 56, sm: 72 }}
          style={{ position: 'relative', zIndex: 2, width: '100%' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Stack gap="lg" maw={760}>
              <Badge
                radius="xl"
                size="lg"
                leftSection={<IconFlask size={14} />}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                }}
              >
                Evidence-Led Innovation
              </Badge>

              <Title
                order={1}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: 'clamp(2.2rem, 4.8vw, 3.4rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.6px',
                  lineHeight: 1.1,
                  color: '#FFFFFF',
                }}
              >
                Built on Research
                {/* Research That Guides Girlified */}
              </Title>

              <Text
                size="lg"
                style={{
                  color: '#FFFFFF',
                  lineHeight: 1.7,
                }}
              >
                Our R&D process is evidence-led, using scientific literature to build effective and
                biodegradable pads.
                {/* Girlified follows peer-reviewed scientific literature to guide our fibre science,
                material safety, and product development. From banana stem characterization to
                superabsorbent composites, published research informs how we build pads that are
                effective, biodegradable, and grounded in evidence. */}
              </Text>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      <Container size="xl" py={{ base: 48, sm: 64 }}>
        <Stack gap={40}>
          <Stack gap="sm" maw={720}>
            <Text size="xs" fw={700} c={PINK} tt="uppercase" style={{ letterSpacing: '0.1em' }}>
              Publications
            </Text>
            <Title
              order={2}
              style={{
                fontFamily: playfair.style.fontFamily,
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: INK,
              }}
            >
              Peer-reviewed publications informing our work
            </Title>
            <Text size="md" c={MUTED} style={{ lineHeight: 1.7 }}>
              Select a paper to read. Each publication supports our
              approach to plant-based absorbent materials and sustainable menstrual health
              innovation.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
            {researchPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <ResearchPaperCard {...paper} />
              </motion.div>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ResearchPage;
