'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconChevronDown } from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Collapse,
  Container,
  Drawer,
  Group,
  Image,
  Menu,
  Stack,
  Text,
  UnstyledButton,
  rem,
} from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { blogPosts, navLinks } from '@/core/utilities';
import classes from './navbar.module.css';

const navLinkStyle = {
  display: 'block',
  lineHeight: 1,
  padding: `${rem(8)} ${rem(14)}`,
  borderRadius: rem(100),
  textDecoration: 'none',
  color: '#212529',
  fontSize: rem(14),
  fontWeight: 500,
  letterSpacing: '-0.3px',
  transition: 'background-color 150ms ease, color 150ms ease',
} as const;

const ACTIVE_NAV_BG = 'rgba(51, 65, 85, 0.1)';
const ACTIVE_NAV_COLOR = '#334155';
const INACTIVE_NAV_COLOR = '#212529';
const TOP_NAV_COLOR = '#FFFFFF';
const TOP_NAV_ACTIVE_BG = 'rgba(255, 255, 255, 0.18)';
const TOP_NAV_HOVER_BG = 'rgba(255, 255, 255, 0.12)';

const isNavLinkActive = (pathname: string, href: string) =>
  pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

const getNavColors = (isActive: boolean, isScrolled: boolean) => {
  if (!isScrolled) {
    return {
      color: TOP_NAV_COLOR,
      background: isActive ? TOP_NAV_ACTIVE_BG : 'transparent',
      hoverBg: TOP_NAV_HOVER_BG,
      hoverColor: TOP_NAV_COLOR,
    };
  }

  return {
    color: isActive ? ACTIVE_NAV_COLOR : INACTIVE_NAV_COLOR,
    background: isActive ? ACTIVE_NAV_BG : 'transparent',
    hoverBg: ACTIVE_NAV_BG,
    hoverColor: ACTIVE_NAV_COLOR,
  };
};

const getNavLinkStyle = (isActive: boolean, isScrolled: boolean) => {
  const { color, background } = getNavColors(isActive, isScrolled);
  return { ...navLinkStyle, color, background };
};

const handleNavMouseEnter = (e: React.MouseEvent<HTMLElement>, isScrolled: boolean) => {
  const { hoverBg, hoverColor } = getNavColors(false, isScrolled);
  e.currentTarget.style.background = hoverBg;
  e.currentTarget.style.color = hoverColor;
};

const handleNavMouseLeave = (
  e: React.MouseEvent<HTMLElement>,
  isActive: boolean,
  isScrolled: boolean,
) => {
  const { color, background } = getNavColors(isActive, isScrolled);
  e.currentTarget.style.background = background;
  e.currentTarget.style.color = color;
};

const MOBILE_INACTIVE_COLOR = '#FCF9FA';

const getMobileNavLinkStyle = (isActive: boolean) => ({
  display: 'block',
  lineHeight: 1.2,
  padding: `${rem(12)} ${rem(16)}`,
  borderRadius: rem(8),
  textDecoration: 'none',
  color: isActive ? ACTIVE_NAV_COLOR : MOBILE_INACTIVE_COLOR,
  background: isActive ? ACTIVE_NAV_BG : 'transparent',
  fontSize: rem(18),
  fontWeight: 600,
  transition: 'background-color 150ms ease, color 150ms ease',
});

const handleMobileNavMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.background = ACTIVE_NAV_BG;
  e.currentTarget.style.color = ACTIVE_NAV_COLOR;
};

const handleMobileNavMouseLeave = (e: React.MouseEvent<HTMLElement>, isActive: boolean) => {
  e.currentTarget.style.background = isActive ? ACTIVE_NAV_BG : 'transparent';
  e.currentTarget.style.color = isActive ? ACTIVE_NAV_COLOR : MOBILE_INACTIVE_COLOR;
};

export function Navbar() {
  const pathname = usePathname();
  const [scroll] = useWindowScroll();
  const [opened, { toggle }] = useDisclosure(false);
  const [blogOpened, { toggle: toggleBlog }] = useDisclosure(false);
  const primaryNavLinks = navLinks.filter((link) => link.link !== '/contact-us');
  const contactLink = navLinks.find((link) => link.link === '/contact-us');
  const isScrolled = scroll.y > 0;
  const isBlogRoute = pathname === '/blog' || pathname.startsWith('/blog/');
  const isAboutUsRoute = pathname === '/about-us' || pathname.startsWith('/about-us/');
  const isContactUsRoute = pathname === '/contact-us' || pathname.startsWith('/contact-us/');
  const isResearchRoute = pathname === '/research' || pathname.startsWith('/research/');
  const isOurStoryRoute = pathname === '/our-story' || pathname.startsWith('/our-story/');
  const useDarkNavbar =
    isScrolled || isBlogRoute || isAboutUsRoute || isContactUsRoute || isResearchRoute || isOurStoryRoute;

  return (
    <>
      <Box
        component="header"
        className={classes.header}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'blur(16px)',
          backgroundColor: isScrolled ? 'rgba(232, 232, 232, 0.35)' : 'rgba(232, 232, 232, 0.1)',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        }}
      >
        <Container size="xl" py={10}>
          <Group justify="space-between" align="center">
            {/* Left section: Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <Image
                src={useDarkNavbar ? '/icons/logo.svg' : '/icons/logo-white.svg'}
                alt="Girlified Logo"
                h={30}
                w="auto"
                fit="contain"
              />
            </Link>

            {/* Middle section: Desktop navigation */}
            <Group gap={4} visibleFrom="md">
              {primaryNavLinks.map((link) => {
                const isActive = isNavLinkActive(pathname, link.link);

                return (
                  <Link
                    key={link.label}
                    href={link.link}
                    target={link.target || undefined}
                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                    style={getNavLinkStyle(isActive, useDarkNavbar)}
                    onMouseEnter={(e) => handleNavMouseEnter(e, useDarkNavbar)}
                    onMouseLeave={(e) => handleNavMouseLeave(e, isActive, useDarkNavbar)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Menu
                width={320}
                position="bottom-start"
                offset={8}
                transitionProps={{ transition: 'pop-top-left', duration: 180 }}
                styles={{
                  dropdown: {
                    border: '1px solid rgba(255, 0, 127, 0.12)',
                    borderRadius: rem(16),
                    padding: rem(8),
                    backgroundColor: 'rgba(255, 255, 255, 0.96)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 16px 40px rgba(12, 9, 11, 0.12)',
                  },
                  item: {
                    borderRadius: rem(10),
                    padding: `${rem(10)} ${rem(12)}`,
                  },
                }}
              >
                <Menu.Target>
                  <UnstyledButton
                    style={{
                      ...getNavLinkStyle(isNavLinkActive(pathname, '/blog'), useDarkNavbar),
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: rem(4),
                      cursor: 'pointer',
                      border: 'none',
                    }}
                    onMouseEnter={(e) => handleNavMouseEnter(e, useDarkNavbar)}
                    onMouseLeave={(e) =>
                      handleNavMouseLeave(e, isNavLinkActive(pathname, '/blog'), useDarkNavbar)
                    }
                  >
                    Blog
                    <IconChevronDown size={14} stroke={2.2} />
                  </UnstyledButton>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label style={{ fontSize: rem(11), letterSpacing: '0.8px', color: '#FF007F' }}>
                    Latest Articles
                  </Menu.Label>
                  {blogPosts.map((post) => (
                    <Menu.Item
                      key={post.slug}
                      component={Link}
                      href={`/blog/${post.slug}`}
                    >
                      <Stack gap={2}>
                        <Group justify="space-between" gap="xs" wrap="nowrap">
                          <Text size="sm" fw={600} c="#0C090B" lineClamp={1}>
                            {post.title}
                          </Text>
                          <Text size="10px" c="dimmed" style={{ flexShrink: 0 }}>
                            {post.readTime}
                          </Text>
                        </Group>
                        <Text size="xs" c="dimmed" lineClamp={2} style={{ lineHeight: 1.45 }}>
                          {post.excerpt}
                        </Text>
                        <Text size="10px" fw={700} c="#FF007F" tt="uppercase" style={{ letterSpacing: '0.6px' }}>
                          {post.category}
                        </Text>
                      </Stack>
                    </Menu.Item>
                  ))}
                  <Menu.Divider />
                  <Menu.Item component={Link} href="/blog" fw={600} c="#FF007F">
                    View all articles
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {contactLink && (
                <Link
                  href={contactLink.link}
                  target={contactLink.target}
                  style={getNavLinkStyle(isNavLinkActive(pathname, contactLink.link), useDarkNavbar)}
                  onMouseEnter={(e) => handleNavMouseEnter(e, useDarkNavbar)}
                  onMouseLeave={(e) =>
                    handleNavMouseLeave(e, isNavLinkActive(pathname, contactLink.link), useDarkNavbar)
                  }
                >
                  {contactLink.label}
                </Link>
              )}
            </Group>

            <Group gap="sm">
              <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                <Button
                  variant="filled"
                  radius="xl"
                  size="sm"
                  fw={600}
                  style={{
                    background: 'linear-gradient(135deg, #FF007F 0%, #fc89bc 100%)',
                    border: 'none',
                    color: 'white',
                    fontWeight: 600,
                    letterSpacing: '-0.3px',
                    padding: '8px 24px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 14px rgba(255, 0, 127, 0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 0, 127, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(255, 0, 127, 0.35)';
                  }}
                >
                  Shop Now
                </Button>
              </Link>
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="md"
                size="sm"
                color={useDarkNavbar ? '#212529' : '#FFFFFF'}
              />
            </Group>
          </Group>
        </Container>

        {/* Mobile drawer */}
        <Drawer
          opened={opened}
          onClose={toggle}
          size="100%"
          padding="md"
          hiddenFrom="md"
          zIndex={1000000}
          styles={{
            content: {
              backgroundColor: '#0C090B',
              color: '#FCF9FA',
            },
            header: {
              backgroundColor: '#0C090B',
              color: '#FCF9FA',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            },
            close: {
              color: '#FCF9FA',
            },
          }}
        >
          <Stack gap="md" mt="xl">
            {primaryNavLinks.map((link) => {
              const isActive = isNavLinkActive(pathname, link.link);

              return (
                <Link
                  key={link.label}
                  href={link.link}
                  target={link.target || undefined}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  style={getMobileNavLinkStyle(isActive)}
                  onMouseEnter={handleMobileNavMouseEnter}
                  onMouseLeave={(e) => handleMobileNavMouseLeave(e, isActive)}
                  onClick={toggle}
                >
                  {link.label}
                </Link>
              );
            })}

            <Box>
              <UnstyledButton
                onClick={toggleBlog}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: `${rem(12)} ${rem(16)}`,
                  borderRadius: rem(8),
                  color: isNavLinkActive(pathname, '/blog') ? ACTIVE_NAV_COLOR : MOBILE_INACTIVE_COLOR,
                  background: isNavLinkActive(pathname, '/blog') ? ACTIVE_NAV_BG : 'transparent',
                  fontSize: rem(18),
                  fontWeight: 600,
                }}
              >
                Blog
                <IconChevronDown
                  size={18}
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: blogOpened ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </UnstyledButton>
              <Collapse in={blogOpened}>
                <Stack gap="xs" pl="md" pt="xs">
                  {blogPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      onClick={toggle}
                      style={{ textDecoration: 'none' }}
                    >
                      <Box
                        p="sm"
                        style={{
                          borderRadius: rem(10),
                          border: '1px solid rgba(255, 0, 127, 0.15)',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        }}
                      >
                        <Text size="sm" fw={600} c="#FCF9FA" mb={4}>
                          {post.title}
                        </Text>
                        <Text size="xs" c="gray.5" lineClamp={2} style={{ lineHeight: 1.45 }}>
                          {post.excerpt}
                        </Text>
                      </Box>
                    </Link>
                  ))}
                  <Link
                    href="/blog"
                    onClick={toggle}
                    style={{
                      display: 'block',
                      padding: `${rem(10)} ${rem(12)}`,
                      textDecoration: 'none',
                      color: '#FF007F',
                      fontSize: rem(14),
                      fontWeight: 600,
                    }}
                  >
                    View all articles
                  </Link>
                </Stack>
              </Collapse>
            </Box>

            {contactLink && (
              <Link
                href={contactLink.link}
                style={getMobileNavLinkStyle(isNavLinkActive(pathname, contactLink.link))}
                onMouseEnter={handleMobileNavMouseEnter}
                onMouseLeave={(e) =>
                  handleMobileNavMouseLeave(e, isNavLinkActive(pathname, contactLink.link))
                }
                onClick={toggle}
              >
                {contactLink.label}
              </Link>
            )}
          </Stack>
        </Drawer>
      </Box>
    </>
  );
}
