'use client';

import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { Anchor, Box, Container, Grid, Group, Image, Stack, Text } from '@mantine/core';

const storeButtons = [
  {
    href: 'https://apps.apple.com/ng/app/saifeai/id6760655286',
    icon: '/icons/icon_appstore.png',
    label: 'Download on the',
    store: 'App Store',
    alt: 'Download SaifeAI on the App Store',
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.girlified.girlified',
    icon: '/icons/icon_playstore.png',
    label: 'Get it on',
    store: 'Google Play',
    alt: 'Get SaifeAI on Google Play',
  },
];

const SOCIAL_HOVER = '#FF007F';

const socialLinks = [
  { href: 'https://x.com/girlified2', icon: IconBrandTwitter, label: 'X (Twitter)' },
  {
    href: 'https://www.instagram.com/girlified_ltd/',
    icon: IconBrandInstagram,
    label: 'Instagram',
  },
  { href: 'https://www.tiktok.com/@girlified1', icon: IconBrandTiktok, label: 'TikTok' },
  { href: 'https://web.facebook.com/girlifiedng', icon: IconBrandFacebook, label: 'Facebook' },
  {
    href: 'https://www.linkedin.com/company/girlified/',
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
  },
];

function SocialIconButton({ href, icon: Icon, label }: (typeof socialLinks)[number]) {
  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      underline="never"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.55)',
        transition: 'border-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = SOCIAL_HOVER;
        e.currentTarget.style.color = SOCIAL_HOVER;
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Icon size={20} stroke={1.75} />
    </Anchor>
  );
}

function StoreDownloadButton({ href, icon, label, store, alt }: (typeof storeButtons)[number]) {
  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      underline="never"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px',
        height: 50, // Standard Mantine md button height
        minWidth: 144,
        borderRadius: 10,
        border: '1px solid rgba(255, 255, 255, 0.14)',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06)',
        transition:
          'transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.45)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 0, 127, 0.12)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 0, 127, 0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
        e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255, 255, 255, 0.06)';
      }}
    >
      <Image src={icon} alt={alt} w={30} h={30} fit="contain" />

      <Stack gap={-10} style={{ lineHeight: 0 }}>
        <Text size="8px" c="gray.5" fw={500} style={{ letterSpacing: '0.1px' }}>
          {label}
        </Text>
        <Text size="xs" c="white" fw={700} style={{ letterSpacing: '-0.1px' }}>
          {store}
        </Text>
      </Stack>
    </Anchor>
  );
}

export function Footer() {
  return (
    <Box
      bg="#0C090B"
      py={{ base: 'xl', sm: 60 }}
      style={{ color: 'white', borderTop: '1px solid #1E141B' }}
    >
      <Container size="xl">
        <Grid gutter={{ base: 'xl', sm: 'xl' }} justify="space-between">
          {/* Left Section - Company Info */}
          <Grid.Col span={{ base: 12, sm: 5 }} mb={{ base: 'xl', sm: 0 }}>
            <Stack gap="md">
              <Link
                href="/"
                style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
              >
                <Image
                  src="/icons/logo-white.svg"
                  alt="Girlified Logo"
                  h={30}
                  w="auto"
                  fit="contain"
                />
              </Link>

              <Text size="sm" c="gray.4" style={{ letterSpacing: '-0.3px', lineHeight: 1.6 }}>
                More Comfort. Less Expense. Less Pollution.
                <br />
                Pioneering eco-friendly menstrual health tech in Sub-Saharan Africa.
              </Text>
              <Anchor
                href="mailto:support@girlified.co"
                size="sm"
                c="primary.2"
                style={{ transition: 'color 0.2s' }}
              >
                support@girlified.co
              </Anchor>

              <Stack gap="sm" mt="xs">
                <Text
                  size="xs"
                  fw={700}
                  c="gray.5"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.8px' }}
                >
                  Locations
                </Text>
                <Stack gap="xs">
                  <Text size="sm" c="gray.4" style={{ lineHeight: 1.6 }}>
                    No 17 Sabon Lugbe, Airport Road, Abuja, Nigeria.
                  </Text>
                  <Text size="sm" c="gray.4" style={{ lineHeight: 1.6 }}>
                    No 3 Longwa Phase 1 Opposite Solomon Lar Amusement Park, Jos, Nigeria
                  </Text>
                </Stack>
              </Stack>

              <Stack gap="sm" mt="xs">
                <Text
                  size="xs"
                  fw={700}
                  c="gray.5"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.8px' }}
                >
                  Get the App
                </Text>
                <Group gap="sm" wrap="wrap">
                  {storeButtons.map((button) => (
                    <StoreDownloadButton key={button.store} {...button} />
                  ))}
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Right Section - Links and Social */}
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Grid justify="space-between">
              {/* Company */}
              <Grid.Col span={{ base: 6, sm: 4 }}>
                <Stack gap="sm">
                  <Text
                    size="xs"
                    fw={700}
                    c="gray.5"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.8px' }}
                  >
                    Company
                  </Text>

                  <Anchor
                    component={Link}
                    href="/about-us"
                    size="sm"
                    c="gray.3"
                    style={{ textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    About Us
                  </Anchor>
                  <Anchor
                    component={Link}
                    href="/our-story"
                    size="sm"
                    c="gray.3"
                    style={{ textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    Our Story
                  </Anchor>
                  <Anchor
                    component={Link}
                    href="/smart-pad"
                    size="sm"
                    c="gray.3"
                    style={{ textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    Smart Pad
                  </Anchor>
                  <Anchor
                    component={Link}
                    href="/contact-us"
                    size="sm"
                    c="gray.3"
                    style={{ textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    Support
                  </Anchor>
                </Stack>
              </Grid.Col>

              {/* Legal */}
              <Grid.Col span={{ base: 6, sm: 4 }}>
                <Stack gap="sm">
                  <Text
                    size="xs"
                    fw={700}
                    c="gray.5"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.8px' }}
                  >
                    Legal
                  </Text>
                  <Anchor
                    component={Link}
                    href="/privacy-policy"
                    size="sm"
                    c="gray.3"
                    style={{ textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    Privacy Policy
                  </Anchor>
                  <Anchor
                    component={Link}
                    href="/terms-of-service"
                    size="sm"
                    c="gray.3"
                    style={{ textDecoration: 'none', transition: 'color 0.2s' }}
                  >
                    Terms of Service
                  </Anchor>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>

      <Box mt={40} pt="md" style={{ borderTop: '1px solid #564f54' }}>
        <Container size="xl">
          <Group justify="space-between" align="center" wrap="wrap" gap="md">
            <Text size="xs" c="gray.5">
              Copyright © {new Date().getFullYear()} Girlified. All Rights Reserved
            </Text>
            <Group gap="sm" wrap="wrap">
              {socialLinks.map((link) => (
                <SocialIconButton key={link.label} {...link} />
              ))}
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
