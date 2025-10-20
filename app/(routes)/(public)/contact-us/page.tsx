'use client';

import React from 'react';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconLocation,
  IconMail,
  IconMessageCircle,
  IconPhone,
} from '@tabler/icons-react';
import {
  Anchor,
  AspectRatio,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // eslint-disable-next-line no-console
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: IconLocation,
      title: 'Our Location',
      content: 'Jos, Nigeria',
      description: 'Visit our office',
    },
    {
      icon: IconPhone,
      title: 'Phone',
      content: '+234 81325 49273',
      description: 'Mon-Fri, 9am-5pm',
    },
    {
      icon: IconMail,
      title: 'Email',
      content: 'info@girlified.com.ng',
      description: "We'll respond within 24hrs",
    },
    {
      icon: IconMessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us',
      description: 'Instant support',
    },
  ];

  const faqs = [
    {
      question: 'Where can I buy Girlified products?',
      answer:
        'Our products are available online and at select retailers across Nigeria. You can also order directly through our website.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        "Currently, we ship within Nigeria only, but we're working on expanding our reach internationally soon!",
    },
    {
      question: 'Are your products suitable for sensitive skin?',
      answer:
        'Yes! All Girlified products are hypoallergenic and dermatologically tested, making them safe for sensitive skin.',
    },
    {
      question: 'How can I become a Girlified ambassador?',
      answer:
        "We'd love to have you! Please fill out our contact form with 'Ambassador Program' in the subject line, and our team will reach out with more information.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        style={{
          background: 'linear-gradient(0deg, rgba(255,111,183,0.08), rgba(199,76,245,0.08))',
        }}
      >
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Stack align="center" ta="center" gap={16}>
            <Title order={1} fz={{ base: 40, md: 60 }} fw={900}>
              Get in Touch
            </Title>
            <Text fz={{ base: 18, md: 20 }} c="dimmed" maw={800}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Container size="lg" py={{ base: 40, md: 64 }}>
        <Grid columns={12} gutter={24}>
          {contactInfo.map((info) => (
            <Grid.Col key={info.title} span={{ base: 12, sm: 6, lg: 3 }}>
              <Card padding={24} radius="lg" withBorder shadow="sm" style={{ cursor: 'pointer' }}>
                <Stack align="center" ta="center" gap={16}>
                  <Box
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 999,
                      background: 'linear-gradient(135deg, #FF6FB7, #C74CF5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <info.icon size={24} color="#fff" />
                  </Box>
                  <Title order={4}>{info.title}</Title>
                  <Text fw={600} c="#E351B7">
                    {info.content}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {info.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* Contact Form & Map */}
      <Container size="lg" py={{ base: 40, md: 80 }}>
        <Grid columns={12} gutter={48}>
          {/* Contact Form */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap={24}>
              <Title order={2}>Send us a Message</Title>
              <Card padding={32} radius="lg" withBorder shadow="sm">
                <form onSubmit={handleSubmit}>
                  <Stack gap={20}>
                    <div>
                      <Text fw={500} mb={8}>
                        Your Name
                      </Text>
                      <TextInput
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        radius="lg"
                        variant="default"
                        styles={{
                          input: { borderColor: '#b2b1b2' },
                        }}
                      />
                    </div>

                    <div>
                      <Text fw={500} mb={8}>
                        Email Address
                      </Text>
                      <TextInput
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        radius="lg"
                        variant="default"
                        styles={{
                          input: { borderColor: '#b2b1b2' },
                        }}
                      />
                    </div>

                    <div>
                      <Text fw={500} mb={8}>
                        Subject
                      </Text>
                      <TextInput
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        radius="lg"
                        variant="default"
                        styles={{
                          input: { borderColor: '#b2b1b2' },
                        }}
                      />
                    </div>

                    <div>
                      <Text fw={500} mb={8}>
                        Message
                      </Text>
                      <Textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more..."
                        rows={6}
                        radius="lg"
                        variant="default"
                        styles={{
                          input: { borderColor: '#b2b1b2' },
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      bg={'black'}
                      size="lg"
                      radius="xl"
                      variant="gradient"
                      gradient={{ from: '#FF6FB7', to: '#C74CF5', deg: 45 }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </form>
              </Card>
            </Stack>
          </Grid.Col>

          {/* Map & Additional Info */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap={32}>
              <div>
                <Title order={2} mb={24}>
                  Find Us
                </Title>
                <Card radius="lg" withBorder shadow="sm" style={{ overflow: 'hidden' }}>
                  <AspectRatio ratio={16 / 9}>
                    <Box
                      style={{
                        background: 'rgba(0,0,0,0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Stack align="center" ta="center" gap={16}>
                        <IconLocation size={64} color="#E351B7" />
                        <Text fz={18} fw={600}>
                          Our Location
                        </Text>
                        <Text c="dimmed">Jos, Nigeria</Text>
                      </Stack>
                    </Box>
                  </AspectRatio>
                </Card>
              </div>

              <Card padding={32} radius="lg" withBorder shadow="sm">
                <Stack gap={16}>
                  <Title order={3}>Follow Us</Title>
                  <Text c="dimmed">
                    Stay connected with us on social media for updates, tips, and exclusive offers.
                  </Text>
                  <Group gap={12}>
                    <Anchor href="https://www.linkedin.com/company/girlified" target="_blank" rel="noopener noreferrer">
                      <Box
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 999,
                          background: 'rgba(227,81,183,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconBrandLinkedin size={20} color="#E351B7" />
                      </Box>
                    </Anchor>
                    <Anchor href="https://web.facebook.com/girlifiedng" target="_blank" rel="noopener noreferrer">
                      <Box
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 999,
                          background: 'rgba(227,81,183,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconBrandFacebook size={20} color="#E351B7" />
                      </Box>
                    </Anchor>
                    <Anchor href="https://twitter.com/Girlified2" target="_blank" rel="noopener noreferrer">
                      <Box
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 999,
                          background: 'rgba(227,81,183,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconBrandTwitter size={20} color="#E351B7" />
                      </Box>
                    </Anchor>
                  </Group>
                </Stack>
              </Card>

              {/* <Card
                padding={32}
                radius="lg"
                style={{ background: 'linear-gradient(90deg, #E351B7, #C74CF5)', color: 'white' }}
              >
                <Stack gap={16}>
                  <Title order={3}>Need Immediate Assistance?</Title>
                  <Text>
                    For urgent inquiries, reach out to us directly on WhatsApp for instant support.
                  </Text>
                  <Button variant="white" c="#E351B7" radius="xl" size="lg">
                    <Group gap={8}>
                      <IconMessageCircle size={18} />
                      <span>Chat on WhatsApp</span>
                    </Group>
                  </Button>
                </Stack>
              </Card> */}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* FAQ Section */}
      <Box style={{ background: 'rgba(0,0,0,0.04)' }}>
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Stack align="center" ta="center" gap={16} mb={48}>
            <Title order={2} fz={{ base: 32, md: 40 }}>
              Frequently Asked Questions
            </Title>
            <Text c="dimmed">Quick answers to common questions</Text>
          </Stack>

          <Stack gap={16} maw={900} mx="auto">
            {faqs.map((faq) => (
              <Card key={faq.question} padding={24} radius="lg" withBorder shadow="sm">
                <Stack gap={8}>
                  <Title order={4}>{faq.question}</Title>
                  <Text c="dimmed">{faq.answer}</Text>
                </Stack>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;
