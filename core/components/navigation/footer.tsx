import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';

export function Footer() {
  return (
    <Box bg="#000" py={{ base: 28, sm: 40 }} style={{ color: 'white' }}>
      <Container size="xl">
        <Grid gutter={{ base: 24, sm: 36 }} justify="space-between" align="flex-start">
          {/* Brand and description */}
          <Grid.Col span={{ base: 12, md: 4 }} mb={{ base: 24, md: 0 }}>
            <Stack gap={12}>
              <Flex gap={4}>
                <Image
                  w={30}
                  h="auto"
                  alt="Girlified Icon"
                  src="/icons/icon_clif.png"
                  style={{ border: '1px solid #ffffff80', borderRadius: '10px' }}
                />
                <Title order={3} c="#FF4FA9">
                  Girlified
                </Title>
              </Flex>
              <Text c="gray.3" size="sm">
                Empowering girls with sustainable, comfortable menstrual care products.
              </Text>
              <Group gap="sm">
                <Anchor href="https://twitter.com/Girlified2" target='_blank' c="gray.2" aria-label="Instagram">
                  <IconBrandInstagram size={20} />
                </Anchor>
                <Anchor href="https://web.facebook.com/girlifiedng" target={'_blank'} c="gray.2" aria-label="Facebook">
                  <IconBrandFacebook size={20} />
                </Anchor>
                <Anchor href="https://www.linkedin.com/company/girlified/" target={'_blank'} c="gray.2" aria-label="LinkedIn">
                  <IconBrandLinkedin size={20} />
                </Anchor>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Quick Links */}
          <Grid.Col span={{ base: 12, sm: 4, md: 2 }} mb={{ base: 24, md: 0 }}>
            <Stack gap={10}>
              <Title order={5}>Quick Links</Title>
              <Anchor href="/" c="gray.2" size="sm">
                Home
              </Anchor>
              <Anchor href="/about" c="gray.2" size="sm">
                About Us
              </Anchor>
              <Anchor href="/marketplace" c="gray.2" size="sm">
                Products
              </Anchor>
              <Anchor href="/contact-us" c="gray.2" size="sm">
                Contact
              </Anchor>
            </Stack>
          </Grid.Col>

          {/* Our Products */}
          <Grid.Col span={{ base: 12, sm: 4, md: 3 }} mb={{ base: 24, md: 0 }}>
            <Stack gap={10}>
              <Title order={5}>Our Products</Title>
              <Text c="gray.2" size="sm">
                Girlified Pads
              </Text>
              <Text c="gray.2" size="sm">
                Feminine Wipes
              </Text>
              <Text c="gray.2" size="sm">
                Menstrual Kits
              </Text>
              <Text c="gray.2" size="sm">
                Period Essentials
              </Text>
            </Stack>
          </Grid.Col>

          {/* Contact */}
          <Grid.Col span={{ base: 12, sm: 4, md: 3 }}>
            <Stack gap={10}>
              <Title order={5}>Get in Touch</Title>
              <Group gap={8}>
                <IconMapPin size={18} />
                <Text c="gray.2" size="sm">
                  Jos, Nigeria
                </Text>
              </Group>
              {/* <Group gap={8}>
                <IconPhone size={18} />
                <Text c="gray.2" size="sm">
                  +234 XXX XXX XXXX
                </Text>
              </Group> */}
              <Group gap={8}>
                <IconMail size={18} />
                <Anchor href="mailto:hello@girlified.com.ng" c="gray.2" size="sm">
                  info@girlified.com.ng
                </Anchor>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      <Box mt={24} pt={16} style={{ borderTop: '1px solid #222' }}>
        <Container size="xl">
          <Text size="xs" ta="center" c="gray.4">
            © {new Date().getFullYear()} Girlified. All rights reserved. Empowering Girls, Period.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
