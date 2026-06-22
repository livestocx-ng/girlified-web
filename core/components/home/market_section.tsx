'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Box, Container, Grid, Stack, Text, Title } from '@mantine/core';
import { IconBuildingStore, IconPaw, IconCurrencyDollar, IconTemperature } from '@tabler/icons-react';

const MarketSection = () => {
  const stats = [
    {
      icon: IconBuildingStore,
      value: 1.4,
      prefix: '$',
      suffix: 'T',
      decimals: 1,
      label: 'Global livestock market',
      color: '#5cc494',
    },
    {
      icon: IconPaw,
      value: 90,
      prefix: '',
      suffix: 'M',
      decimals: 0,
      label: 'Cattle in the United States',
      color: '#38bdf8',
    },
    {
      icon: IconCurrencyDollar,
      value: 170,
      prefix: '$',
      suffix: 'B',
      decimals: 0,
      label: 'U.S. beef + dairy annually',
      color: '#fbbf24',
    },
    {
      icon: IconTemperature,
      value: 1.5,
      prefix: '$',
      suffix: 'B+/yr',
      decimals: 1,
      label: 'Heat stress losses, U.S. dairy alone',
      color: '#fb923c',
    },
  ];

  return (
    <Box
      component="section"
      id="market"
      style={{
        background: '#0a1f14',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Grid gutter={0} align="stretch">
        {/* LEFT — Stats Content */}
        <Grid.Col span={{ base: 12, lg: 6 }} style={{ order: 2 }}>
          <Box py={{ base: 64, lg: 96 }} px={{ base: 24, sm: 40, lg: 64 }}>
            <Stack gap="xl">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
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
                  MARKET OPPORTUNITY
                </Box>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Title
                  order={2}
                  c="white"
                  style={{
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                    lineHeight: 1.2,
                  }}
                >
                  A{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #5cc494, #22a366)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Multi-Billion Dollar
                  </span>{' '}
                  Problem. A Materials-Driven Solution.
                </Title>
              </motion.div>

              {/* Stat cards */}
              <Grid gutter="md">
                {stats.map((stat, i) => (
                  <Grid.Col key={i} span={{ base: 6 }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: `1px solid rgba(255,255,255,0.08)`,
                          borderRadius: 16,
                          padding: '20px 16px',
                          backdropFilter: 'blur(10px)',
                          transition: 'border-color 0.2s, background 0.2s',
                          cursor: 'default',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = stat.color + '55';
                          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                        }}
                      >
                        <stat.icon size={20} color={stat.color} style={{ marginBottom: 8 }} />
                        <Text
                          fw={900}
                          style={{ fontSize: '1.5rem', color: stat.color, lineHeight: 1 }}
                        >
                          {stat.prefix}
                          <CountUp end={stat.value} duration={3} decimals={stat.decimals} />
                          {stat.suffix}
                        </Text>
                        <Text size="xs" c="rgba(255,255,255,0.5)" mt={6} style={{ lineHeight: 1.4 }}>
                          {stat.label}
                        </Text>
                      </Box>
                    </motion.div>
                  </Grid.Col>
                ))}
              </Grid>

              {/* Expansion callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Box
                  style={{
                    background: 'rgba(34,163,102,0.08)',
                    border: '1px solid rgba(34,163,102,0.2)',
                    borderRadius: 16,
                    padding: '20px 24px',
                  }}
                >
                  <Text c="rgba(255,255,255,0.85)" style={{ lineHeight: 1.7, fontSize: 14 }}>
                    🎯{' '}
                    <span style={{ color: '#5cc494', fontWeight: 600 }}>First market:</span> Grow-NY
                    region commercial dairy farms (Finger Lakes, Central NY, Southern Tier).
                    <br />
                    <br />
                    🌍{' '}
                    <span style={{ color: '#5cc494', fontWeight: 600 }}>Long-term:</span> Africa, Asia,
                    and Latin America — where rising temperatures and limited cooling infrastructure
                    create urgent demand.
                  </Text>
                </Box>
              </motion.div>
            </Stack>
          </Box>
        </Grid.Col>

        {/* RIGHT — Aerial Farm Image */}
        <Grid.Col
          span={{ base: 12, lg: 6 }}
          style={{ position: 'relative', minHeight: 500, order: 1 }}
        >
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              // backgroundImage: 'url(/images/image_root_3.jpg)',
              // backgroundImage: 'url(/images/image_farm.jpg)',
              backgroundImage: 'url(/images/image_market_farm_aerial.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Subtle green overlay */}
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(10,31,20,0.6) 100%)',
            }}
          />

          {/* Pulsing hotspot markers on barns */}
          {[
            { top: '38%', left: '48%' },
            { top: '62%', left: '40%' },
            { top: '68%', left: '60%' },
          ].map((pos, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                top: pos.top,
                left: pos.left,
                width: 20,
                height: 20,
                zIndex: 5,
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
            >
              <Box
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'rgba(34,163,102,0.8)',
                  border: '2px solid #5cc494',
                  boxShadow: '0 0 12px rgba(34,163,102,0.8)',
                }}
              />
            </motion.div>
          ))}

          {/* Farm label card */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: 24,
              right: 24,
              background: 'rgba(10,31,20,0.9)',
              backdropFilter: 'blur(16px)',
              borderRadius: 12,
              border: '1px solid rgba(34,163,102,0.3)',
              padding: '12px 18px',
              zIndex: 10,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Text size="xs" c="climate.4" fw={700}>
              📍 Grow-NY Region
            </Text>
            <Text size="xs" c="rgba(255,255,255,0.6)" mt={2}>
              Finger Lakes · Central NY · Southern Tier
            </Text>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default MarketSection;
