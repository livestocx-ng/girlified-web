'use client';

import React from 'react';
import Link from 'next/link';
import {
  IconDroplet,
  IconExternalLink,
  IconHeart,
  IconMicroscope,
  IconShield,
  IconUpload,
  IconUsers,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  FileInput,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

const SmartPadPage = () => {
  const [isVisible, setIsVisible] = React.useState<Record<string, boolean>>({});
  const sectionsRef = React.useRef<Record<string, HTMLElement | null>>({});

  const [formData, setFormData] = React.useState<{
    name: string;
    email: string;
    image: File | null;
  }>({ name: '', email: '', image: null });
  const [newsletterEmail, setNewsletterEmail] = React.useState('');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const conditions = [
    {
      title: 'Endometriosis',
      image: '/images/image_condition_1.jpg',
      description:
        'Menstrual blood may contain inflammatory markers and genetic material related to endometrial cell behavior. Easier, non-invasive way to screen compared to laparoscopy (current gold standard).',
      link: 'https://www.mayoclinic.org/diseases-conditions/endometriosis/symptoms-causes/syc-20354656',
    },
    {
      title: 'Endometrial and Cervical Cancer',
      image: '/images/image_condition_2.jpg',
      description:
        'Because menstrual blood contains shed endometrial tissue, it can potentially reveal cancer-specific DNA mutations, abnormal methylation patterns, and tumor-derived biomarkers.',
      link: 'https://my.clevelandclinic.org/health/diseases/16409-uterine-cancer',
    },
    {
      title: 'Polycystic Ovary Syndrome (PCOS)',
      image: '/images/image_condition_3.jpg',
      description:
        'Hormone profiles and immune markers in menstrual blood may help characterize PCOS-related inflammation and hormonal disruptions.',
      link: 'https://my.clevelandclinic.org/health/diseases/8316-polycystic-ovary-syndrome-pcos',
    },
  ];

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate API
    // eslint-disable-next-line no-console
    console.log('Report form submitted:', formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Newsletter signup:', newsletterEmail);
  };

  return (
    <Box>
      {/* Hero */}
      <Box style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/images/image_smart_pad_women.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(227,81,183,0.1), rgba(227,81,183,0.3), var(--mantine-color-body))',
            }}
          />
        </Box>

        <Container size="lg" style={{ position: 'relative', zIndex: 1 }} py={{ base: 80, md: 140 }}>
          <Stack align="center" ta="center" gap={16} c="white">
            <Title order={1} fz={{ base: 40, md: 72 }} fw={900}>
              Introducing{' '}
              <Text component="span" inherit fw={900} c="#FFD6EF">
                Girlified Smart Pads
              </Text>
            </Title>
            <Text fz={{ base: 18, md: 22 }} maw={900}>
              Do you know that over 50% of female fertility issues and ovarian, cervical, and
              endometrial cancers can be prevented if caught early on?
            </Text>
            <Text fz={{ base: 16, md: 18 }} maw={800}>
              But to date, these problems still affect half a billion women around the world. Our
              mums, wives, sisters, and friends are included.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Medical Report Generator */}
      <Box
        id="report-generator"
        ref={(el: HTMLDivElement | null) => {
          sectionsRef.current['report-generator'] = el;
        }}
      >
        <Container size="sm" py={{ base: 40, md: 80 }}>
          <Stack align="center" ta="center" mb={12}>
            <Title order={2} fz={{ base: 32, md: 44 }}>
              Generate Medical Report
            </Title>
            <Text c="dimmed">Girlified Medical Report Generator</Text>
          </Stack>

          <Card padding={24} radius="lg" shadow="sm" withBorder>
            <form onSubmit={handleReportSubmit}>
              <Stack gap={16}>
                <div>
                  <Text fw={500} mb={6}>
                    Name
                  </Text>
                  <TextInput
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.currentTarget.value })}
                    required
                    radius="md"
                    variant="default"
                    // styles={{
                    //   input: { background: 'rgba(227,81,183,0.08)', borderColor: '#E351B780' },
                    // }}
                  />
                </div>
                <div>
                  <Text fw={500} mb={6}>
                    Email
                  </Text>
                  <TextInput
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
                    required
                    radius="md"
                    variant="default"
                    // styles={{
                    //   input: { background: 'rgba(227,81,183,0.08)', borderColor: '#E351B780' },
                    // }}
                  />
                </div>
                <div>
                  <Text fw={500} mb={6}>
                    Select an image
                  </Text>
                  <Group gap={12} wrap="nowrap">
                    <FileInput
                      // w={'100%'}
                      placeholder="Upload image"
                      accept="image/jpeg, image/jpg, image/png"
                      style={{ flex: 1 }}
                      onChange={(file) => setFormData({ ...formData, image: file })}
                      radius="md"
                      variant="default"
                      // styles={{
                      //   input: { background: 'rgba(227,81,183,0.08)', borderColor: '#E351B780' },
                      // }}
                    />
                    {/* <IconUpload size={22} color="var(--mantine-color-dimmed)" /> */}
                  </Group>
                </div>
                <Button
                  type="submit"
                  radius="xl"
                  size="lg"
                  variant="gradient"
                  gradient={{ from: '#FF6FB7', to: '#C74CF5', deg: 45 }}
                >
                  Submit Report
                </Button>
              </Stack>
            </form>
          </Card>
        </Container>
      </Box>

      {/* Science-Backed */}
      <Box
        id="science-backed"
        ref={(el: HTMLDivElement | null) => {
          sectionsRef.current['science-backed'] = el;
        }}
        style={{ background: 'linear-gradient(90deg, #E351B7, #C74CF5)', color: 'white' }}
      >
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Grid columns={12} align="center" gutter={32}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack>
                <Title order={1} fz={{ base: 44, md: 64 }}>
                  Science-
                  <br />
                  BACKED
                </Title>
                <Title order={2}>Human-Centered</Title>
                <Text fz={{ base: 16, md: 18 }}>
                  At Girlified, we believe your period is more than a cycle — it's a window into
                  your health. The Girlified Smart Pad transforms menstrual fluid into actionable
                  insights for early detection of gynecological conditions through a non-invasive,
                  comfortable, and discreet method.
                </Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                src="/images/image_smart_pad_women_2.jpg"
                alt="Science-Backed Research"
                radius="lg"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Why Menstrual Blood */}
      <Container
        id="why-menstrual"
        ref={(el: HTMLDivElement | null) => {
          sectionsRef.current['why-menstrual'] = el;
        }}
        size="lg"
        py={{ base: 40, md: 80 }}
      >
        <Stack align="center" mb={24}>
          <Title order={2} ta="center" fz={{ base: 32, md: 44 }}>
            Why Menstrual Blood{' '}
            <Text component="span" c="#E351B7">
              STANDS OUT
            </Text>
          </Title>
          <Text ta="center" c="dimmed" maw={800}>
            Menstrual blood isn't just blood, it's a complex mixture of:
          </Text>
        </Stack>

        <Grid columns={12} gutter={16} mb={24}>
          {[
            { icon: IconDroplet, text: 'Venous blood' },
            { icon: IconMicroscope, text: 'Endometrial cells (from the uterine lining)' },
            { icon: IconHeart, text: 'Cervical and vaginal secretions' },
            { icon: IconShield, text: 'Immune cells' },
            {
              icon: IconMicroscope,
              text: 'Molecular biomarkers (proteins, DNA, RNA, metabolites)',
            },
          ].map((item) => (
            <Grid.Col key={item.text} span={{ base: 12, sm: 6, lg: 4 }}>
              <Card padding={16} radius="lg" withBorder h={150}>
                <Stack align="center" ta="center">
                  <item.icon size={40} color="#E351B7" />
                  <Text fw={500}>{item.text}</Text>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        <Text ta="center" c="dimmed" maw={900}>
          This makes it a rich source of localized biological data about the female reproductive
          system. We're developing our platform alongside leading researchers, ensuring scientific
          rigor while respecting real-world variability in flow, cycle phases, and biomarker
          profiles. Your privacy and comfort are built into every layer of our technology.
        </Text>
      </Container>

      {/* What Can It Detect */}
      <Box
        id="detect"
        ref={(el: HTMLDivElement | null) => {
          sectionsRef.current['detect'] = el;
        }}
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.04), transparent)' }}
      >
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Title order={2} ta="center" fz={{ base: 32, md: 44 }} mb={24}>
            🧬 What Can Menstrual Blood{' '}
            <Text component="span" c="#E351B7">
              Help Detect?
            </Text>
          </Title>
          <Stack gap={24}>
            {conditions.map((condition) => (
              <Card key={condition.title} withBorder radius="lg">
                <Grid columns={12} gutter={24} align="center">
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Box style={{ position: 'relative' }}>
                      <Image src={condition.image} alt={condition.title} radius="lg" />
                    </Box>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack>
                      <Title order={3}>{condition.title}</Title>
                      <Text c="dimmed">{condition.description}</Text>
                      <Anchor href={condition.link} target="_blank" rel="noopener noreferrer">
                        <Group gap={6}>
                          <span>Learn More</span>
                          <IconExternalLink size={18} />
                        </Group>
                      </Anchor>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Advantages and Limitations */}
      <Box
        id="details"
        ref={(el: HTMLDivElement | null) => {
          sectionsRef.current['details'] = el;
        }}
        style={{ background: 'linear-gradient(90deg, #E351B7, #C74CF5)', color: 'white' }}
      >
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Grid columns={12} gutter={24}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card padding={24} radius="lg">
                <Title order={3} c="#E351B7">
                  Advantages Over Traditional Blood Samples
                </Title>
                <Stack gap={12} mt={12}>
                  <Group gap={4}>
                    <Text fw={700}>✓</Text>
                    <Text fz={14}>Non-invasive, pain-free, and accessible</Text>
                  </Group>
                  <Group gap={4}>
                    <Text fw={700}>✓</Text>
                    <Text fz={14}>Specific to the reproductive tract</Text>
                  </Group>
                  <Group gap={4}>
                    <Text fw={700}>✓</Text>
                    <Text fz={14}>
                      May better reflect localized uterine conditions than peripheral blood
                    </Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card padding={24} radius="lg">
                <Title order={3} c="#E351B7">
                  Limitations and Challenges
                </Title>
                <Stack gap={12} mt={12}>
                  <Group gap={4}>
                    <Text fw={700}>•</Text>
                    <Text fz={14}>Sample variability (day of cycle, flow intensity)</Text>
                  </Group>
                  <Group gap={4}>
                    <Text fw={700}>•</Text>
                    <Text fz={14}>
                      Need for standardized collection methods (e.g., smart pads, menstrual cups)
                    </Text>
                  </Group>
                  <Group gap={4}>
                    <Text fw={700}>•</Text>
                    <Text fz={14}>Biomarker validation is still ongoing for most conditions</Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Real-World Applications */}
      <Container
        id="applications"
        ref={(el: HTMLDivElement | null) => {
          sectionsRef.current['applications'] = el;
        }}
        size="lg"
        py={{ base: 40, md: 80 }}
      >
        <Stack align="center" mb={20}>
          <Title order={2} ta="center" fz={{ base: 32, md: 44 }}>
            Real-World Applications
          </Title>
        </Stack>
        <Card padding={24} radius="lg" withBorder>
          <Text c="dimmed" mb={12}>
            Startups and researchers are developing smart menstrual pads or cups that analyze
            menstrual fluid for:
          </Text>
          <Stack gap={10}>
            {[
              'HPV and cervical cancer screening',
              'Endometriosis biomarkers',
              'Fertility tracking',
            ].map((app) => (
              <Group key={app} gap={10}>
                <Box style={{ width: 8, height: 8, borderRadius: 999, background: '#E351B7' }} />
                <Text>{app}</Text>
              </Group>
            ))}
          </Stack>
        </Card>
      </Container>

      {/* Conclusion */}
      <Box
        id="conclusion"
        ref={(el: HTMLDivElement | null) => {
          sectionsRef.current['conclusion'] = el;
        }}
        style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.04), transparent)' }}
      >
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Stack align="center" ta="center" maw={900} mx="auto">
            <Title order={2}>Conclusion</Title>
            <Text c="dimmed" fz={{ base: 'md', md: 'lg' }}>
              Menstrual blood has distinct advantages for detecting some gynecological cancers and
              infertility issues due to its local origin and rich content, but it's not a total
              replacement for other blood tests — rather, it's an exciting complementary tool for
              non-invasive diagnostics in women's health.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Newsletter */}
      <Box style={{ background: 'linear-gradient(90deg, #E351B7, #C74CF5)', color: 'white' }}>
        <Container size="lg" py={{ base: 40, md: 80 }}>
          <Stack align="center" ta="center" maw={760} mx="auto">
            <Title order={2}>Sign up to our newsletter!</Title>
            <Text fs="italic">
              "To all of you who choose to look the other way everyday because you seem more
              frightened of the changes that can prevent catastrophic climate change than the
              catastrophic climate change itself. Your silence is the worst of all" – Greta Thunberg
            </Text>
            <form onSubmit={handleNewsletterSubmit}>
              <Group justify="center" gap={12} wrap="wrap">
                <TextInput
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.currentTarget.value)}
                  placeholder="Enter your email"
                  required
                  radius="xl"
                  variant="filled"
                  // styles={{
                  //   input: { background: 'rgba(227,81,183,0.12)', borderColor: '#E351B780' },
                  // }}
                  style={{ minWidth: 260 }}
                />
                <Button
                  type="submit"
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: '#FF6FB7', to: '#C74CF5', deg: 45 }}
                >
                  Subscribe
                </Button>
              </Group>
            </form>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default SmartPadPage;
