'use client';

import { useState } from 'react';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBuildingStore,
  IconClock,
  IconHeartHandshake,
  IconLocation,
  IconMail,
  IconMessageCircle,
  IconUsers,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import useContactUsMutation from '@/core/hooks/public/useContactUsMutation';
import { ContactUsDTO } from '@/core/sdk/account';
import { validateContactForm } from '@/core/validations/public.validations';

const contactTopics = [
  {
    title: 'Product & Orders',
    description: 'Questions about Girlified pads, availability, pricing, or bulk orders.',
    icon: IconBuildingStore,
    color: '#FF007F',
  },
  {
    title: 'Partnerships',
    description: 'NGO collaborations, distribution, research, or impact programme enquiries.',
    icon: IconHeartHandshake,
    color: '#fb6704',
  },
  {
    title: 'Community Outreach',
    description: 'School sensitization, pad donations, and menstrual health workshops.',
    icon: IconUsers,
    color: '#e848ba',
  },
  {
    title: 'General Enquiries',
    description: 'Press, feedback, careers, or anything else—we would love to hear from you.',
    icon: IconMessageCircle,
    color: '#CC0066',
  },
];

const socialLinks = [
  { href: 'https://www.tiktok.com/@girlified1', icon: IconBrandTiktok, label: 'TikTok' },
  {
    href: 'https://www.instagram.com/girlified_ltd/',
    icon: IconBrandInstagram,
    label: 'Instagram',
  },
  { href: 'https://x.com/girlified2', icon: IconBrandTwitter, label: 'X(Twitter)' },
  { href: 'https://web.facebook.com/girlifiedng', icon: IconBrandFacebook, label: 'Facebook' },
  {
    href: 'https://www.linkedin.com/company/girlified/',
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
  },
];

const SLATE = '#334155';
const SLATE_LIGHT = '#F1F3F5';
const SLATE_BORDER = 'rgba(51, 65, 85, 0.14)';
const SLATE_BORDER_STRONG = 'rgba(51, 65, 85, 0.25)';

const formInputStyles = {
  label: { fontSize: '14px', fontWeight: 600, color: 'rgba(12, 9, 11, 0.85)', marginBottom: 6 },
  input: {
    fontSize: '14px',
    border: `1px solid ${SLATE_BORDER_STRONG}`,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#0C090B',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    '&:focus': {
      borderColor: 'rgba(51, 65, 85, 0.45)',
      boxShadow: '0 0 0 3px rgba(51, 65, 85, 0.08)',
    },
  },
};

const ContactUs = () => {
  const { isPending, mutate } = useContactUsMutation();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const submitHandler = async (payload: ContactUsDTO) => {
    const message = validateContactForm(payload);

    if (message !== '') {
      showNotification({
        message,
        color: 'red',
        title: 'Message Validation',
        autoClose: 3000,
      });
      return;
    }

    mutate(payload);
  };

  const handleTopicSelect = (title: string) => {
    setSelectedTopic(title);
    form.setFieldValue('subject', title);
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box
      py={{ base: 120, sm: 160 }}
      style={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Grid Pattern */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255, 0, 127, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 127, 0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Decorative Radial Glowing Orbs */}
      <Box
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 0, 127, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(255, 183, 213, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Stack gap="80px">
          {/* Hero */}
          <Grid gutter={{ base: 'xl', lg: 72 }} align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Stack gap="md" maw={720}>
                  <Badge
                    size="lg"
                    radius="xl"
                    style={{
                      background: 'rgba(255, 0, 127, 0.08)',
                      color: '#FF007F',
                      border: '1px solid rgba(255, 0, 127, 0.15)',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    CONTACT US
                  </Badge>
                  <Title
                    order={1}
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontWeight: 800,
                      letterSpacing: '-2px',
                      lineHeight: 1.08,
                      background: 'linear-gradient(135deg, #0C090B 10%, #CC0066 60%, #FF007F 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Let&apos;s Build a Better Period Future Together
                  </Title>
                  <Text
                    size="lg"
                    style={{
                      lineHeight: 1.65,
                      letterSpacing: '-0.25px',
                      color: 'rgba(12, 9, 11, 0.72)',
                    }}
                  >
                    Whether you&apos;re interested in our products, partnerships, community
                    programmes, or press enquiries—we&apos;re here to help. Reach out and our team
                    will get back to you.
                  </Text>
                </Stack>
              </motion.div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card
                  radius="xl"
                  p={0}
                  style={{
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 0, 127, 0.15)',
                    boxShadow: '0 18px 36px rgba(12, 9, 11, 0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <Image
                    src="/images/product/image_pad_1.jpg"
                    alt="Girlified eco-friendly sanitary pad"
                    h={220}
                    fit="cover"
                  />
                  <Stack gap="sm" p="lg">
                    <Group gap="sm">
                      <Box
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          backgroundColor: 'rgba(255, 0, 127, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconClock size={18} color="#FF007F" />
                      </Box>
                      <Stack gap={0}>
                        <Text size="sm" fw={700} c="#0C090B">
                          Typical response time
                        </Text>
                        <Text size="xs" c="rgba(12, 9, 11, 0.6)">
                          Within 1–2 business days
                        </Text>
                      </Stack>
                    </Group>
                    <Group gap="sm">
                      <Box
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: 10,
                          backgroundColor: 'rgba(255, 0, 127, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconMail size={18} color="#FF007F" />
                      </Box>
                      <Stack gap={0}>
                        <Text size="sm" fw={700} c="#0C090B">
                          support@girlified.co
                        </Text>
                        <Text size="xs" c="rgba(12, 9, 11, 0.6)">
                          Primary support channel
                        </Text>
                      </Stack>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          </Grid>

          {/* Contact Topics */}
          <Box>
            <Stack gap="lg" mb="xl" align="center" ta="center">
              <Badge
                size="md"
                radius="xl"
                style={{
                  background: 'rgba(255, 0, 127, 0.08)',
                  color: '#FF007F',
                  border: '1px solid rgba(255, 0, 127, 0.15)',
                  fontWeight: 700,
                }}
              >
                HOW WE CAN HELP
              </Badge>
              <Title
                order={2}
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  letterSpacing: '-0.8px',
                  color: '#0C090B',
                }}
              >
                What Would You Like to Discuss?
              </Title>
            </Stack>
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
              {contactTopics.map((topic, index) => {
                const Icon = topic.icon;
                const isSelected = selectedTopic === topic.title;

                return (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <Card
                      radius="lg"
                      p="lg"
                      role="button"
                      tabIndex={0}
                      onClick={() => handleTopicSelect(topic.title)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleTopicSelect(topic.title);
                        }
                      }}
                      style={{
                        height: '100%',
                        cursor: 'pointer',
                        backgroundColor: isSelected
                          ? 'rgba(255, 255, 255, 0.9)'
                          : 'rgba(255, 255, 255, 0.6)',
                        border: isSelected
                          ? `1px solid ${topic.color}`
                          : '1px solid rgba(255, 0, 127, 0.12)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: isSelected ? `0 10px 24px ${topic.color}22` : 'none',
                        transition:
                          'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (isSelected) {return};
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.3)';
                        e.currentTarget.style.boxShadow = '0 10px 24px rgba(255, 0, 127, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        if (isSelected) {return};
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.12)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Stack gap="sm">
                        <Box
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 12,
                            backgroundColor: `${topic.color}18`,
                            border: `1px solid ${topic.color}33`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon size={20} color={topic.color} />
                        </Box>
                        <Text fw={700} size="sm" c="#0C090B">
                          {topic.title}
                        </Text>
                        <Text
                          size="xs"
                          style={{ lineHeight: 1.55, color: 'rgba(12, 9, 11, 0.65)' }}
                        >
                          {topic.description}
                        </Text>
                      </Stack>
                    </Card>
                  </motion.div>
                );
              })}
            </SimpleGrid>
          </Box>

          {/* Contact Form + Info */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              radius="xl"
              p={{ base: 'xl', md: '2xl' }}
              style={{
                border: `1px solid ${SLATE_BORDER}`,
                backgroundColor: 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 24px 48px rgba(51, 65, 85, 0.08)',
              }}
            >
              <Grid gutter={{ base: 'xl', lg: 48 }} align="stretch">
                {/* Info column */}
                <Grid.Col span={{ base: 12, md: 5 }}>
                  <Paper
                    p={{ base: 'xl', md: 36 }}
                    h="100%"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: 20,
                      border: `1px solid ${SLATE_BORDER}`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Stack gap="xl">
                      <Stack gap="xs">
                        <Badge
                          size="md"
                          radius="xl"
                          style={{
                            background: SLATE_LIGHT,
                            color: SLATE,
                            border: `1px solid ${SLATE_BORDER}`,
                            alignSelf: 'flex-start',
                            fontWeight: 700,
                          }}
                        >
                          GET IN TOUCH
                        </Badge>
                        <Title order={3} c="#0C090B" style={{ letterSpacing: '-0.5px' }}>
                          Contact Information
                        </Title>
                        <Text size="sm" c="rgba(12, 9, 11, 0.65)" style={{ lineHeight: 1.6 }}>
                          Connect with us directly or follow Girlified on social media for product
                          updates and impact stories.
                        </Text>
                      </Stack>

                      <Stack gap="lg">
                        <Flex align="center" gap="md">
                          <Box
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 12,
                              backgroundColor: SLATE_LIGHT,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <IconMail color={SLATE} size={22} />
                          </Box>
                          <Stack gap={2}>
                            <Text
                              size="xs"
                              fw={700}
                              c="rgba(12, 9, 11, 0.5)"
                              tt="uppercase"
                              style={{ letterSpacing: '0.8px' }}
                            >
                              Email
                            </Text>
                            <Text
                              component="a"
                              href="mailto:support@girlified.co"
                              c="rgba(12, 9, 11, 0.85)"
                              size="sm"
                              fw={600}
                              style={{ textDecoration: 'none' }}
                            >
                              support@girlified.co
                            </Text>
                          </Stack>
                        </Flex>
                        <Flex align="flex-start" gap="md">
                          <Box
                            style={{
                              width: 44,
                              height: 44,
                              borderRadius: 12,
                              backgroundColor: SLATE_LIGHT,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <IconLocation color={SLATE} size={22} />
                          </Box>
                          <Stack gap={2}>
                            <Text
                              size="xs"
                              fw={700}
                              c="rgba(12, 9, 11, 0.5)"
                              tt="uppercase"
                              style={{ letterSpacing: '0.8px' }}
                            >
                              Location
                            </Text>
                            <Text
                              c="rgba(12, 9, 11, 0.85)"
                              size="sm"
                              fw={600}
                              style={{ lineHeight: 1.5 }}
                            >
                              No 17 Sabon Lugbe, Airport Road, Abuja, Nigeria.
                            </Text>
                          </Stack>
                        </Flex>
                      </Stack>
                    </Stack>

                    <Stack gap="md" mt="xl">
                      <Text
                        size="xs"
                        fw={700}
                        c="rgba(12, 9, 11, 0.5)"
                        tt="uppercase"
                        style={{ letterSpacing: '0.8px' }}
                      >
                        Follow Us
                      </Text>
                      <Group gap="sm">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                          <Button
                            key={label}
                            component="a"
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            variant="outline"
                            radius="xl"
                            p={0}
                            style={{
                              width: 44,
                              height: 44,
                              minWidth: 44,
                              border: `1px solid ${SLATE_BORDER_STRONG}`,
                              backgroundColor: SLATE_LIGHT,
                              transition: 'all 0.25s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = SLATE;
                              e.currentTarget.style.backgroundColor = 'rgba(51, 65, 85, 0.12)';
                              e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = SLATE_BORDER_STRONG;
                              e.currentTarget.style.backgroundColor = SLATE_LIGHT;
                              e.currentTarget.style.transform = 'translateY(0)';
                            }}
                          >
                            <Icon size={20} color={SLATE} />
                          </Button>
                        ))}
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>

                {/* Form column */}
                <Grid.Col span={{ base: 12, md: 7 }}>
                  <Stack gap="md" mb="lg">
                    <Title order={3} c="#0C090B" style={{ letterSpacing: '-0.5px' }}>
                      Send Us a Message
                    </Title>
                    <Text size="sm" c="rgba(12, 9, 11, 0.65)" style={{ lineHeight: 1.6 }}>
                      Fill in the form below and we&apos;ll respond as soon as possible.
                    </Text>
                  </Stack>
                  <form
                    style={{ width: '100%' }}
                    onSubmit={form.onSubmit((values) => {
                      submitHandler(values);
                    })}
                  >
                    <Stack gap="lg">
                      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                        <TextInput
                          size="md"
                          radius="md"
                          withAsterisk
                          label="Name"
                          placeholder="Your name"
                          styles={formInputStyles}
                          {...form.getInputProps('name')}
                        />
                        <TextInput
                          size="md"
                          radius="md"
                          withAsterisk
                          label="Email"
                          placeholder="name@email.com"
                          styles={formInputStyles}
                          {...form.getInputProps('email')}
                        />
                      </SimpleGrid>
                      <TextInput
                        key={form.key('subject')}
                        size="md"
                        radius="md"
                        withAsterisk
                        label="Subject"
                        placeholder="Product enquiry, partnership, outreach..."
                        styles={formInputStyles}
                        {...form.getInputProps('subject')}
                      />
                      <Textarea
                        withAsterisk
                        label="Message"
                        placeholder="Tell us how we can help..."
                        minRows={6}
                        maxRows={12}
                        autosize
                        radius="md"
                        styles={formInputStyles}
                        {...form.getInputProps('message')}
                      />

                      <Button
                        radius="xl"
                        h={52}
                        variant="filled"
                        type="submit"
                        loading={isPending}
                        style={{
                          background: `linear-gradient(135deg, ${SLATE} 0%, #1E293B 100%)`,
                          color: 'white',
                          fontWeight: 600,
                          transition: 'all 0.2s',
                          boxShadow: '0 4px 15px rgba(51, 65, 85, 0.25)',
                          border: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(51, 65, 85, 0.35)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(51, 65, 85, 0.25)';
                        }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </Grid.Col>
              </Grid>
            </Paper>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactUs;
