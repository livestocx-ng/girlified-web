'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Badge, Box, Card, Container, Flex, Grid, Stack, Text, Title } from '@mantine/core';

// Animated Custom SVG Graphics
const CO2Graphic = () => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Soft inner glow circle - pulsing */}
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      fill="white"
      animate={{ opacity: [0.08, 0.16, 0.08], scale: [0.98, 1.03, 0.98] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '50px' }}
    />

    {/* Recycle arrows - rotating as a single group with their heads */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
      style={{ originX: '50px', originY: '50px' }}
    >
      <path
        d="M50 22 C65 22, 78 35, 78 50 C78 53, 77 56, 75 59"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M50 78 C35 78, 22 65, 22 50 C22 47, 23 44, 25 41"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M72 61 L77 59 L75 53"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 39 L23 41 L25 47"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.g>

    {/* Floating CO2 pill */}
    <motion.g
      filter="url(#glow)"
      animate={{ y: [-1.5, 1.5, -1.5] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      <rect
        x="35"
        y="40"
        width="30"
        height="20"
        rx="10"
        fill="#FFF0F6"
        stroke="white"
        strokeWidth="2"
      />
      <text
        x="50"
        y="51"
        fontFamily="system-ui, sans-serif"
        fontSize="9"
        fontWeight="800"
        fill="#FF007F"
        textAnchor="middle"
        dominantBaseline="central"
      >
        CO₂
      </text>
    </motion.g>

    {/* Floating eco leaves */}
    <motion.path
      d="M18 26 C22 24, 26 27, 24 32 C20 34, 17 31, 18 26 Z"
      fill="#FFE066"
      animate={{ y: [0, -5, 0], x: [0, 2, 0], rotate: [0, 15, 0], opacity: [0.45, 0.85, 0.45] }}
      transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut' }}
      style={{ originX: '21px', originY: '29px' }}
    />
    <motion.path
      d="M79 69 C82 66, 87 67, 87 72 C83 76, 78 74, 79 69 Z"
      fill="#FFE066"
      animate={{ y: [0, 4, 0], x: [0, -2, 0], rotate: [0, -14, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.4 }}
      style={{ originX: '83px', originY: '71px' }}
    />

    {/* Tiny drifting particles */}
    <motion.circle
      cx="23"
      cy="58"
      r="1.8"
      fill="white"
      animate={{ y: [0, -6, 0], opacity: [0.25, 0.65, 0.25] }}
      transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="76"
      cy="37"
      r="1.6"
      fill="white"
      animate={{ y: [0, 5, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut', delay: 0.3 }}
    />
  </motion.svg>
);

const BananaGraphic = () => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
  >
    {/* Soft inner glow circle - pulsing */}
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      fill="white"
      animate={{ opacity: [0.08, 0.16, 0.08], scale: [0.98, 1.03, 0.98] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '50px' }}
    />

    {/* Main stem/stalk - swaying slightly */}
    <motion.path
      d="M50 82 C50 60, 53 38, 62 25"
      stroke="white"
      strokeWidth="4.5"
      strokeLinecap="round"
      animate={{ rotate: [-1, 1, -1] }}
      transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '82px' }}
    />

    {/* Leaves - swaying organically */}
    <motion.path
      d="M50 68 C34 62, 28 52, 33 46 C38 40, 46 54, 49 64"
      fill="white"
      opacity="0.8"
      animate={{ rotate: [-2.5, 2.5, -2.5] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '68px' }}
    />
    <motion.path
      d="M51 50 C29 45, 24 34, 32 27 C40 20, 47 34, 51 44"
      fill="white"
      animate={{ rotate: [2.5, -2.5, 2.5] }}
      transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      style={{ originX: '51px', originY: '50px' }}
    />
    <motion.path
      d="M50 72 C66 68, 73 60, 71 53 C69 46, 59 55, 52 66"
      fill="white"
      opacity="0.8"
      animate={{ rotate: [2.5, -2.5, 2.5] }}
      transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '72px' }}
    />
    <motion.path
      d="M52 56 C71 52, 78 41, 73 34 C68 27, 59 41, 52 50"
      fill="white"
      animate={{ rotate: [-3.5, 3.5, -3.5] }}
      transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
      style={{ originX: '52px', originY: '56px' }}
    />

    {/* Banana Bunch (Gold Highlight) - floating and swaying */}
    <motion.g
      transform="translate(48, 55)"
      animate={{ y: [-1.5, 1.5, -1.5], rotate: [-4, 4, -4] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      style={{ originX: '5px', originY: '2px' }}
    >
      <path d="M0 0 C2 4, 8 4, 10 0 C8 -2, 2 -2, 0 0 Z" fill="#FFE066" />
      <path d="M-2 2 C0 6, 6 6, 8 2 C6 0, 0 0, -2 2 Z" fill="#FFE066" />
    </motion.g>

    {/* Floating mini leaves around the bunch */}
    <motion.path
      d="M20 22 C23 20, 27 22, 26 26 C23 28, 20 27, 20 22 Z"
      fill="#FFE066"
      animate={{ y: [0, -6, 0], rotate: [0, 18, 0], opacity: [0.35, 0.8, 0.35] }}
      transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut' }}
      style={{ originX: '23px', originY: '24px' }}
    />
    <motion.path
      d="M76 26 C79 24, 82 26, 81 30 C78 32, 75 30, 76 26 Z"
      fill="#FFE066"
      animate={{ y: [0, 5, 0], rotate: [0, -16, 0], opacity: [0.3, 0.75, 0.3] }}
      transition={{ repeat: Infinity, duration: 4.1, ease: 'easeInOut', delay: 0.5 }}
      style={{ originX: '78px', originY: '28px' }}
    />

    {/* Dew drops */}
    <motion.circle
      cx="32"
      cy="35"
      r="1.8"
      fill="white"
      animate={{ y: [0, 4, 0], opacity: [0.25, 0.65, 0.25] }}
      transition={{ repeat: Infinity, duration: 3.3, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="69"
      cy="61"
      r="1.6"
      fill="white"
      animate={{ y: [0, -4, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ repeat: Infinity, duration: 3.7, ease: 'easeInOut', delay: 0.4 }}
    />
  </motion.svg>
);

const OceanGraphic = () => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
  >
    {/* Soft inner glow circle - pulsing */}
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      fill="white"
      animate={{ opacity: [0.08, 0.16, 0.08], scale: [0.98, 1.03, 0.98] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '50px' }}
    />

    {/* Floating bottle - bobbing up/down & rotating slightly */}
    <motion.g
      animate={{ y: [-2, 2, -2], rotate: [-4, 4, -4] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '45px' }}
    >
      <rect
        x="44"
        y="30"
        width="12"
        height="6"
        rx="1.5"
        fill="white"
        stroke="white"
        strokeWidth="2.5"
      />
      <rect
        x="39"
        y="36"
        width="22"
        height="26"
        rx="5"
        fill="#FFF0F6"
        stroke="white"
        strokeWidth="2.5"
      />
      <path d="M42 44 H58" stroke="white" strokeWidth="2" opacity="0.5" />
      <path d="M42 52 H58" stroke="white" strokeWidth="2" opacity="0.5" />
    </motion.g>

    {/* Waves - swaying horizontally */}
    <motion.path
      d="M15 70 Q32 65 50 70 T85 70 L85 85 L15 85 Z"
      fill="white"
      opacity="0.3"
      animate={{ x: [-4, 4, -4] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    />
    <motion.path
      d="M10 75 Q30 71 50 75 T90 75 L90 85 L10 85 Z"
      fill="white"
      opacity="0.6"
      animate={{ x: [4, -4, 4] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
    />

    {/* Warn Circle (Gold/White Accent) - pulsing slightly */}
    <motion.g
      animate={{ scale: [0.97, 1.03, 0.97] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '48px' }}
    >
      <circle cx="50" cy="48" r="24" stroke="#FFE066" strokeWidth="4.5" />
      <line x1="33" y1="31" x2="67" y2="65" stroke="#FFE066" strokeWidth="4.5" />
    </motion.g>

    {/* Raindrops */}
    <motion.path
      d="M24 18 L22 24"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      animate={{ y: [0, 7, 0], opacity: [0.2, 0.8, 0.2] }}
      transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
    />
    <motion.path
      d="M50 14 L48 20"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      animate={{ y: [0, 8, 0], opacity: [0.25, 0.85, 0.25] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
    />
    <motion.path
      d="M75 19 L73 25"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      animate={{ y: [0, 6, 0], opacity: [0.2, 0.75, 0.2] }}
      transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut', delay: 0.6 }}
    />

    {/* Rising bubbles */}
    <motion.circle
      cx="24"
      cy="78"
      r="2"
      fill="white"
      animate={{ y: [0, -10, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="72"
      cy="80"
      r="1.7"
      fill="white"
      animate={{ y: [0, -9, 0], opacity: [0.2, 0.65, 0.2] }}
      transition={{ repeat: Infinity, duration: 3.1, ease: 'easeInOut', delay: 0.5 }}
    />
  </motion.svg>
);

const WomenGraphic = () => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.1 }}
    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
  >
    {/* Soft inner glow circle - pulsing */}
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      fill="white"
      animate={{ opacity: [0.08, 0.16, 0.08], scale: [0.98, 1.03, 0.98] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      style={{ originX: '50px', originY: '50px' }}
    />

    {/* Empowered Hands - raising, swaying, and stretching upwards */}
    <motion.path
      d="M32 82 V58 C32 55, 35 53, 37 55 L40 58 V82"
      fill="white"
      opacity="0.7"
      animate={{ y: [0, -3, 0], rotate: [0, -2, 0] }}
      transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 0.2 }}
      style={{ originX: '32px', originY: '82px' }}
    />
    <motion.path
      d="M46 82 V48 C46 45, 49 43, 51 43 C53 43, 56 45, 56 48 V82"
      fill="white"
      animate={{ y: [0, -4, 0], scaleY: [1, 1.04, 1] }}
      transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
      style={{ originX: '51px', originY: '82px' }}
    />
    <motion.path
      d="M62 82 V55 C62 52, 65 50, 67 52 L70 55 V82"
      fill="white"
      opacity="0.8"
      animate={{ y: [0, -3, 0], rotate: [0, 2, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 0.4 }}
      style={{ originX: '62px', originY: '82px' }}
    />

    {/* Sparkles (Gold Accent) - scaling, pulsing, and rotating */}
    <motion.path
      d="M51 22 L53 26 L57 27 L53 28 L51 32 L49 28 L45 27 L49 26 Z"
      fill="#FFE066"
      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.6, 1, 0.6], rotate: [0, 90, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
      style={{ originX: '51px', originY: '27px' }}
    />
    <motion.path
      d="M26 38 L27 40 L29 41 L27 42 L26 44 L25 42 L23 41 L25 40 Z"
      fill="#FFE066"
      animate={{ scale: [1.2, 0.8, 1.2], opacity: [1, 0.6, 1], rotate: [0, -90, 0] }}
      transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
      style={{ originX: '26px', originY: '41px' }}
    />
    <motion.path
      d="M74 34 L75 36 L77 37 L75 38 L74 40 L73 38 L71 37 L73 36 Z"
      fill="#FFE066"
      animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.7, 1, 0.7], rotate: [0, 45, 0] }}
      transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      style={{ originX: '74px', originY: '37px' }}
    />

    {/* Floating petals / leaves around community graphic */}
    <motion.path
      d="M17 30 C20 28, 24 29, 23 33 C20 36, 16 34, 17 30 Z"
      fill="#FFE066"
      animate={{ y: [0, -5, 0], x: [0, 2, 0], rotate: [0, 20, 0], opacity: [0.35, 0.8, 0.35] }}
      transition={{ repeat: Infinity, duration: 3.9, ease: 'easeInOut' }}
      style={{ originX: '20px', originY: '32px' }}
    />
    <motion.path
      d="M80 56 C83 54, 87 56, 86 60 C83 63, 79 61, 80 56 Z"
      fill="#FFE066"
      animate={{ y: [0, 5, 0], x: [0, -2, 0], rotate: [0, -18, 0], opacity: [0.3, 0.75, 0.3] }}
      transition={{ repeat: Infinity, duration: 4.2, ease: 'easeInOut', delay: 0.5 }}
      style={{ originX: '83px', originY: '58px' }}
    />

    {/* Soft floating dots */}
    <motion.circle
      cx="31"
      cy="24"
      r="1.7"
      fill="white"
      animate={{ y: [0, -4, 0], opacity: [0.2, 0.55, 0.2] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="68"
      cy="22"
      r="1.5"
      fill="white"
      animate={{ y: [0, 4, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ repeat: Infinity, duration: 3.3, ease: 'easeInOut', delay: 0.4 }}
    />
  </motion.svg>
);

// Cloud Wave overlay that masks the top of the cards to look like overlapping clouds.
// Uses #FBF6EE (page background color) to cover the top corners and edges.
const CloudWave = () => (
  <Box
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 32,
      pointerEvents: 'none',
      zIndex: 3,
      overflow: 'hidden',
    }}
  >
    {/* Underlayer Cloud (Soft Pink/Rose for depth) */}
    <svg
      viewBox="0 0 100 16"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.25,
      }}
    >
      <path
        d="M0 0 L 100 0 L 100 14 C 90 14, 85 8, 75 8 C 65 8, 60 14, 50 14 C 40 14, 35 6, 25 6 C 15 6, 10 12, 0 12 Z"
        fill="#FF007F"
      />
    </svg>
    {/* Main Mask Cloud (matching page background #FBF6EE) */}
    <svg
      viewBox="0 0 100 16"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <path
        d="M0 0 L 100 0 L 100 12 C 92 12, 88 6, 80 6 C 72 6, 68 12, 60 12 C 52 12, 48 4, 40 4 C 32 4, 28 10, 20 10 C 12 10, 8 12, 0 12 Z"
        fill="#FBF6EE"
      />
    </svg>
  </Box>
);

const CardAmbientGraphics = ({ variant }: { variant: 'environmental' | 'social' }) => (
  <Box
    style={{
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden',
    }}
  >
    {/* soft top-right glow */}
    <motion.div
      animate={{ x: [0, 14, -8, 0], y: [0, -10, 8, 0], opacity: [0.18, 0.28, 0.18] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        top: '-18%',
        right: '-10%',
        width: '45%',
        height: '45%',
        borderRadius: '999px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.28) 0%, transparent 70%)',
      }}
    />

    {/* drifting leaves across entire card */}
    <motion.div
      animate={{ x: [0, 26, -8, 0], y: [0, -22, 12, 0], rotate: [0, 18, -10, 0], opacity: [0.18, 0.36, 0.18] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        top: '14%',
        left: '8%',
        width: 16,
        height: 10,
        borderRadius: '100% 0 100% 0',
        backgroundColor: '#FFE066',
      }}
    />
    <motion.div
      animate={{ x: [0, -18, 12, 0], y: [0, 18, -14, 0], rotate: [0, -16, 12, 0], opacity: [0.14, 0.3, 0.14] }}
      transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      style={{
        position: 'absolute',
        bottom: '18%',
        right: '10%',
        width: 14,
        height: 9,
        borderRadius: '100% 0 100% 0',
        backgroundColor: '#FFE066',
      }}
    />

    {/* light particles */}
    <motion.div
      animate={{ y: [0, -12, 0], opacity: [0.12, 0.4, 0.12] }}
      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        top: '28%',
        right: '18%',
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.75)',
      }}
    />
    <motion.div
      animate={{ y: [0, 10, 0], opacity: [0.1, 0.34, 0.1] }}
      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      style={{
        position: 'absolute',
        bottom: '26%',
        left: '14%',
        width: 5,
        height: 5,
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.7)',
      }}
    />

    {variant === 'environmental' ? (
      <>
        {/* environmental card: extra rising leaves */}
        <motion.div
          animate={{ x: [0, 8, -6, 0], y: [0, -20, -6, 0], rotate: [0, 20, 0], opacity: [0.12, 0.3, 0.12] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '22%',
            width: 12,
            height: 8,
            borderRadius: '100% 0 100% 0',
            backgroundColor: '#FFE066',
          }}
        />
      </>
    ) : (
      <>
        {/* social/ocean card: gentle raindrops + bubble */}
        <motion.div
          animate={{ y: [0, 14, 0], opacity: [0.08, 0.28, 0.08] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '12%',
            left: '24%',
            width: 2,
            height: 11,
            borderRadius: 2,
            backgroundColor: 'rgba(255,255,255,0.8)',
          }}
        />
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.08, 0.25, 0.08] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
          style={{
            position: 'absolute',
            top: '16%',
            left: '30%',
            width: 2,
            height: 9,
            borderRadius: 2,
            backgroundColor: 'rgba(255,255,255,0.75)',
          }}
        />
        <motion.div
          animate={{ y: [0, -16, 0], opacity: [0.08, 0.28, 0.08] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '12%',
            right: '24%',
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.72)',
          }}
        />
      </>
    )}
  </Box>
);

const ImpactSection = () => {
  return (
    <Box
      component="section"
      id="impact"
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
      <Box
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.03) 0%, transparent 70%)',
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
              OUR FOOTPRINT
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
              Tangible Change in Numbers
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
              Since 2022, every pack purchased and every researcher feedback has contributed to
              scaling our environmental and community resilience.
            </Text>
          </Stack>

          {/* Stats Display Grid */}
          <Grid gutter={{ base: 'xl', md: 40 }}>
            {/* Column 1: Environmental Footprint */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  radius="24px"
                  pt={{ base: '55px', sm: '70px' }}
                  pb={{ base: '40px', sm: '50px' }}
                  px={{ base: '24px', sm: '40px' }}
                  style={{
                    background: 'linear-gradient(135deg, #FF6EA7 0%, #FF007F 100%)',
                    boxShadow: '0 20px 45px rgba(255, 0, 127, 0.15)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    border: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(255, 0, 127, 0.28)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(255, 0, 127, 0.15)';
                  }}
                >
                  <CardAmbientGraphics variant="environmental" />
                  <CloudWave />
                  <Stack gap="xl" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Stat 1: Greenhouse Gases */}
                    <Flex
                      direction={{ base: 'column', sm: 'row' }}
                      align={{ base: 'center', sm: 'flex-start' }}
                      gap="xl"
                    >
                      <Box style={{ flexShrink: 0 }}>
                        <CO2Graphic />
                      </Box>
                      <Flex
                        direction="column"
                        gap="xs"
                        align={{ base: 'center', sm: 'flex-start' }}
                        ta={{ base: 'center', sm: 'left' }}
                      >
                        <Text
                          fw={850}
                          style={{
                            fontSize: 'clamp(2.1rem, 4.5vw, 2.75rem)',
                            color: 'white',
                            lineHeight: 1.1,
                            letterSpacing: '-1.5px',
                            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                          }}
                        >
                          <CountUp end={143} duration={3} separator="," /> kgCO2e
                        </Text>
                        <Title
                          order={3}
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'white',
                            letterSpacing: '-0.3px',
                          }}
                        >
                          Greenhouse Gases Saved
                        </Title>
                        <Text
                          size="sm"
                          style={{
                            color: 'rgba(255, 255, 255, 0.88)',
                            lineHeight: 1.6,
                            letterSpacing: '-0.2px',
                          }}
                        >
                          By opting for plant-based menstrual care instead of petrochemical pads,
                          our customers prevent carbon emissions from landfills and raw
                          manufacturing.
                        </Text>
                      </Flex>
                    </Flex>

                    {/* Divider */}
                    <Box
                      style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', margin: '10px 0' }}
                    />

                    {/* Stat 2: Banana Stems */}
                    <Flex
                      direction={{ base: 'column', sm: 'row' }}
                      align={{ base: 'center', sm: 'flex-start' }}
                      gap="xl"
                    >
                      <Box style={{ flexShrink: 0 }}>
                        <BananaGraphic />
                      </Box>
                      <Flex
                        direction="column"
                        gap="xs"
                        align={{ base: 'center', sm: 'flex-start' }}
                        ta={{ base: 'center', sm: 'left' }}
                      >
                        <Text
                          fw={850}
                          style={{
                            fontSize: 'clamp(2.1rem, 4.5vw, 2.75rem)',
                            color: 'white',
                            lineHeight: 1.1,
                            letterSpacing: '-1.5px',
                            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                          }}
                        >
                          <CountUp end={30000} duration={3} separator="," />+ Stems
                        </Text>
                        <Title
                          order={3}
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'white',
                            letterSpacing: '-0.3px',
                          }}
                        >
                          Banana Stems Upcycled
                        </Title>
                        <Text
                          size="sm"
                          style={{
                            color: 'rgba(255, 255, 255, 0.88)',
                            lineHeight: 1.6,
                            letterSpacing: '-0.2px',
                          }}
                        >
                          Over 60% of agricultural banana biomass is discarded post-harvest,
                          creating decay gases. We upcycle these stems into absorbent organic
                          fibers.
                        </Text>
                      </Flex>
                    </Flex>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>

            {/* Column 2: Social & Oceans */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  radius="24px"
                  pt={{ base: '55px', sm: '70px' }}
                  pb={{ base: '40px', sm: '50px' }}
                  px={{ base: '24px', sm: '40px' }}
                  style={{
                    background: 'linear-gradient(135deg, #FF6EA7 0%, #FF007F 100%)',
                    boxShadow: '0 20px 45px rgba(255, 0, 127, 0.15)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    border: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 30px 60px rgba(255, 0, 127, 0.28)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(255, 0, 127, 0.15)';
                  }}
                >
                  <CardAmbientGraphics variant="social" />
                  <CloudWave />
                  <Stack gap="xl" style={{ position: 'relative', zIndex: 2 }}>
                    {/* Stat 3: Ocean Plastics */}
                    <Flex
                      direction={{ base: 'column', sm: 'row' }}
                      align={{ base: 'center', sm: 'flex-start' }}
                      gap="xl"
                    >
                      <Box style={{ flexShrink: 0 }}>
                        <OceanGraphic />
                      </Box>
                      <Flex
                        direction="column"
                        gap="xs"
                        align={{ base: 'center', sm: 'flex-start' }}
                        ta={{ base: 'center', sm: 'left' }}
                      >
                        <Text
                          fw={850}
                          style={{
                            fontSize: 'clamp(2.1rem, 4.5vw, 2.75rem)',
                            color: 'white',
                            lineHeight: 1.1,
                            letterSpacing: '-1.5px',
                            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                          }}
                        >
                          <CountUp end={90000} duration={3} separator="," />+ kg
                        </Text>
                        <Title
                          order={3}
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'white',
                            letterSpacing: '-0.3px',
                          }}
                        >
                          Plastics Kept out of Oceans
                        </Title>
                        <Text
                          size="sm"
                          style={{
                            color: 'rgba(255, 255, 255, 0.88)',
                            lineHeight: 1.6,
                            letterSpacing: '-0.2px',
                          }}
                        >
                          Replacing standard sanitary pads (which are 90% plastic) prevents macro
                          and microplastics from polluting our coastlines and entering marine food
                          chains.
                        </Text>
                      </Flex>
                    </Flex>

                    {/* Divider */}
                    <Box
                      style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', margin: '10px 0' }}
                    />

                    {/* Stat 4: Girls Empowered */}
                    <Flex
                      direction={{ base: 'column', sm: 'row' }}
                      align={{ base: 'center', sm: 'flex-start' }}
                      gap="xl"
                    >
                      <Box style={{ flexShrink: 0 }}>
                        <WomenGraphic />
                      </Box>
                      <Flex
                        direction="column"
                        gap="xs"
                        align={{ base: 'center', sm: 'flex-start' }}
                        ta={{ base: 'center', sm: 'left' }}
                      >
                        <Text
                          fw={850}
                          style={{
                            fontSize: 'clamp(2.1rem, 4.5vw, 2.75rem)',
                            color: 'white',
                            lineHeight: 1.1,
                            letterSpacing: '-1.5px',
                            textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                          }}
                        >
                          <CountUp end={70000} duration={3} separator="," />+ Girls
                        </Text>
                        <Title
                          order={3}
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 700,
                            color: 'white',
                            letterSpacing: '-0.3px',
                          }}
                        >
                          Women & Girls Empowered
                        </Title>
                        <Text
                          size="sm"
                          style={{
                            color: 'rgba(255, 255, 255, 0.88)',
                            lineHeight: 1.6,
                            letterSpacing: '-0.2px',
                          }}
                        >
                          Our campaigns provide sensitization, sexual health awareness, menstrual
                          workshops, and steady manufacturing jobs for local women in Nigeria.
                        </Text>
                      </Flex>
                    </Flex>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default ImpactSection;
