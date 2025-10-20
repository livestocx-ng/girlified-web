'use client';

import Link from 'next/link';
import { IconExternalLink } from '@tabler/icons-react';
import { Box, Burger, Button, Container, Drawer, Group, Image, rem, Stack, Text } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { navLinks } from '@/core/utilities';
import classes from './navbar.module.css';

export function Navbar() {
  const [scroll] = useWindowScroll();

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box
        component="header"
        className={classes.header}
        style={{
          transition: 'background-color 0.3s ease',
          backdropFilter: scroll.y > 0 ? 'blur(5px)' : 'none',
          WebkitBackdropFilter: scroll.y > 0 ? 'blur(5px)' : 'none',
          backgroundColor: scroll.y > 0 ? '#ffffff80' : '#ffffff00',
          borderBottom: scroll.y > 0 ? '1px solid var(--mantine-color-gray-3)' : '',
        }}
      >
        <Container size="xl" py={12}>
          <Group justify="space-between" align="center">
            {/* Left section: Logo and Navigation */}
            <Group>
              <Link href="/">
                <Image
                  w={30}
                  h="auto"
                  alt="lvx"
                  src="/icons/icon_clif.png"
                  style={{ border: '1px solid #11111120', borderRadius: '10px' }}
                />
              </Link>

              {/* Desktop navigation */}
              <Text c='#E351B7'>Girlified</Text>
            </Group>

            <Group gap={40} visibleFrom="xs">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.link}
                  target={link.target}
                  style={{
                    display: 'block',
                    lineHeight: 1,
                    padding: `${rem(8)} ${rem(12)}`,
                    borderRadius: 'var(--mantine-radius-sm)',
                    textDecoration: 'none',
                    color:
                      scroll.y > 0 ? 'var(--mantine-color-black)' : 'var(--mantine-color-black)',
                    fontSize: 'var(--mantine-font-size-sm)',
                    fontWeight: 500,
                    transition: 'background-color 150ms ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Group>
            {/* <Group>
              <Link href="https://livestocx.com" target="_blank">
                {' '}
                <Button
                  variant="filled"
                  color="primary"
                  radius="xl"
                  size="xs"
                  fw={600}
                  style={{
                    background: 'linear-gradient(135deg, #10b981 20%, #059669 50%, #047857 100%)',
                    border: 'none',
                    color: 'white',
                    fontWeight: 500,
                    transition: 'transform 0.2s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Marketplace &nbsp; <IconExternalLink size={16} />
                </Button>
              </Link>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="xs"
                size="sm"
                color={scroll.y > 0 ? 'black' : 'black'}
              />
            </Group> */}
          </Group>
        </Container>

        {/* Mobile drawer */}
        <Drawer
          opened={opened}
          onClose={toggle}
          size="100%"
          padding="md"
          hiddenFrom="xs"
          zIndex={1000000}
        >
          <Stack>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                style={{
                  display: 'block',
                  lineHeight: 1,
                  padding: `${rem(8)} ${rem(12)}`,
                  borderRadius: 'var(--mantine-radius-sm)',
                  textDecoration: 'none',
                  color: 'var(--mantine-color-black)',
                  fontSize: 'var(--mantine-font-size-sm)',
                  fontWeight: 500,
                  transition: 'background-color 150ms ease',
                }}
                onClick={toggle}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Drawer>
      </Box>
    </>
  );
}
