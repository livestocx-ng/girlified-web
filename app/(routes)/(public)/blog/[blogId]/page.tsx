'use client';

import React from 'react';
import Link from 'next/link';
import {
  IconArrowLeft,
  IconCalendar,
  IconClock,
  IconEye,
  IconHeart,
  IconMessageCircle,
  IconQuote,
  IconShare,
  IconTag,
  IconUser,
} from '@tabler/icons-react';
import {
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  List,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

const BlogPostPage = () => {
  const blogPost = {
    id: 1,
    title: 'Girlified Women and Girls Engagement/Focus Group Discussion',
    date: 'September 17, 2022',
    readTime: '8 min read',
    author: 'Girlified Team',
    category: 'Community Engagement',
    views: 1250,
    likes: 89,
    comments: 12,
    tags: ['Community Engagement', 'Focus Group', 'Period Poverty', 'Research'],
    image: '/images/image_blog_header.jpg',
    content: {
      introduction:
        'As a step further towards getting more feedback on our product and using the opportunity to engage more women and girls, we discussed with a total of 82 women and girls between the ages of 12 and 48, who are all residents of Rankyeng Village of Jos South LGA, Plateau State Nigeria.',
      quote:
        'Plastic pollution is a serious issue that requires quick climate action and you all ladies seated here can join hands to make our fight against it a successful one',
      quoteAuthor: 'Oghenekevwe Emadago, Co-founder',
      findings: [
        {
          interviewer: 'Nyipoji Kani',
          participants: '11 women (9 teenagers, 2 adults)',
          keyFindings: [
            "Pad material isn't thick enough to hold large amounts of blood",
            'Peppering feeling and tiny rashes from certain pads',
            'Some use wrappers instead of pads due to cost',
            'Price of pads is rising, affecting affordability',
            'No awareness of plastic pollution in sanitary products',
            'Preference for cheaper pads with more pieces per pack',
          ],
          disposalMethods: [
            'Tie in polythene bags and throw in bush',
            'Bury underground',
            'Burn them',
            'Wash before disposing (for protection)',
          ],
        },
        {
          interviewer: 'Mercy Kevin',
          participants: '15 teenage women',
          keyFindings: [
            'Itches and uncomfortable feelings from methylated pads',
            'Rashes occurring after period due to pad choice',
            'High prices make pads difficult to afford',
            '90% prefer Always brand due to longer length',
            'Desire for thicker, more absorbent pads',
          ],
          pricePreferences: [
            'NGN300 ($0.69) for 8 pieces',
            'NGN250 ($0.58) for 8 pieces',
            'NGN500 ($1.16) for 12 pieces',
          ],
        },
        {
          interviewer: 'Kyenret Daluwa',
          participants: '16 women and 9 girls',
          keyFindings: [
            'Drylove pads too short for some users',
            "Virony doesn't stick well to panties",
            "NDK and Drylove don't last throughout the day",
            'Price is a major hindrance (prefer NGN 250-300 for 8 pads)',
            'Little awareness of global plastic pollution',
            "Some prefer children's diapers for better sticking and longevity",
          ],
          improvements: [
            'Pads should be thicker and softer',
            'Include panty liners',
            'Increase pieces per pack',
            'Make cheaper',
            'Increase absorption rate',
            'Increase length and width',
            'Improve stickiness',
          ],
        },
        {
          interviewer: 'Mwanret Gar',
          participants: '17 girls',
          keyFindings: [
            'Burning sensation after 2 hours of using Always pads',
            'Pad shifting causes staining',
            'Price issues force some to use rags and tissues',
            'Younger girls use Joyland pads (3 pieces for NGN150)',
            "Limited awareness of plastic's effect on oceans",
          ],
          disposalMethods: [
            'Burning',
            'Burying',
            'Throwing in public dump',
            'Putting in fence holes',
          ],
          usagePatterns: [
            'Periods last 2-7 days',
            'Single pad used for 2-7 hours',
            'Uncomfortable buying pads when males are around',
          ],
        },
        {
          interviewer: 'Idoko Divine',
          participants: '14 females (women and girls)',
          keyFindings: [
            'Rashes between thighs leading to itching',
            'Specific odors from pads after 30 mins to 1 hour',
            'Peeling of top layer and cotton scattering',
            'Pain and injury between thighs',
            'Pad shifting issues',
            'Thickness and length problems',
            'Rough top layer causing discomfort',
          ],
          brandPreferences: [
            'NDK - good fragrance and comfort',
            'Always - sticks well, smooth top layer',
            'Trust - holds heavy flow without staining',
          ],
        },
      ],
      conclusion:
        'From the whole session, we have discovered that period poverty is indeed a problem for the comfort and menstrual hygiene of a lot of ladies in our region. We can draw up this conclusion since the Rankyeng community, among other communities in our region, is not unique in its below-average income level. For this reason, we are developing Girlified to be able to meet the needs of these ladies while giving them the unique sense of saving our oceans from plastics.',
    },
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Empowering Girls on International Day of the Girl Child',
      excerpt: 'Our remarkable initiative to empower young girls and break down barriers.',
      date: '2024-01-10',
      readTime: '5 min read',
      image: '/images/image_blog_header.jpg',
    },
    {
      id: 3,
      title: '10 Million Sanitary Napkins Every Year Now Achievable',
      excerpt: "How we're scaling our production to meet growing demand.",
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/images/image_blog_header.jpg',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box style={{ position: 'relative', height: '50vh', overflow: 'hidden' }}>
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/images/image_blog_header.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,111,183,0.1), rgba(199,76,245,0.5))',
            }}
          />
        </Box>
        <Container size="lg" style={{ position: 'relative', zIndex: 1, height: '100%' }}>
          <Stack justify="center" style={{ height: '100%', color: 'white' }} gap={16}>
            <Link href="/blog" passHref>
              <Button
                variant="white"
                size="sm"
                radius="xl"
                leftSection={<IconArrowLeft size={16} />}
                component="a"
                style={{ alignSelf: 'flex-start' }}
              >
                Back to Blog
              </Button>
            </Link>
            <Title order={1} fz={{ base: 32, md: 48 }} fw={900} c="white">
              {blogPost.title}
            </Title>
            <Group gap={24} wrap="wrap">
              <Group gap={8} c="white">
                <IconCalendar size={16} />
                <Text size="sm">{blogPost.date}</Text>
              </Group>
              <Group gap={8} c="white">
                <IconClock size={16} />
                <Text size="sm">{blogPost.readTime}</Text>
              </Group>
              <Group gap={8} c="white">
                <IconUser size={16} />
                <Text size="sm">{blogPost.author}</Text>
              </Group>
            </Group>
          </Stack>
        </Container>
      </Box>

      <Container size="lg" py={{ base: 40, md: 60 }}>
        <Grid gutter={48}>
          {/* Main Content */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Stack gap={32}>
              {/* Article Meta */}
              <Group justify="space-between" wrap="wrap">
                <Group gap={12} wrap="wrap">
                  <Badge color="#E351B7" variant="light" size="lg">
                    {blogPost.category}
                  </Badge>
                  {blogPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" size="sm" color="#E351B7">
                      {tag}
                    </Badge>
                  ))}
                </Group>
                <Group gap={16}>
                  <Group gap={4} c="dimmed">
                    <IconEye size={16} />
                    <Text size="sm">{blogPost.views}</Text>
                  </Group>
                  <Group gap={4} c="dimmed">
                    <IconHeart size={16} />
                    <Text size="sm">{blogPost.likes}</Text>
                  </Group>
                  <Group gap={4} c="dimmed">
                    <IconMessageCircle size={16} />
                    <Text size="sm">{blogPost.comments}</Text>
                  </Group>
                  <Button
                    variant="outline"
                    size="sm"
                    radius="xl"
                    leftSection={<IconShare size={16} />}
                  >
                    Share
                  </Button>
                </Group>
              </Group>

              {/* Introduction */}
              <Paper p={24} radius="lg" withBorder shadow="sm">
                <Text fz={{ base: 'md', md: 'lg' }} lh={1.7}>
                  {blogPost.content.introduction}
                </Text>
              </Paper>

              {/* Quote */}
              <Paper
                p={32}
                radius="lg"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,111,183,0.1), rgba(199,76,245,0.1))',
                }}
              >
                <Stack gap={16}>
                  <IconQuote size={32} color="#E351B7" />
                  <Text fz={{ base: 'lg', md: 'xl' }} fw={500} fs="italic" c="#E351B7">
                    "{blogPost.content.quote}"
                  </Text>
                  <Text fw={600} c="dimmed" ta="right">
                    — {blogPost.content.quoteAuthor}
                  </Text>
                </Stack>
              </Paper>

              {/* Findings */}
              <Stack gap={24}>
                <Title order={2} fz={{ base: 28, md: 36 }}>
                  Focus Group Findings
                </Title>
                <Text c="dimmed" fz={{ base: 'md', md: 'lg' }}>
                  Our team conducted interviews with five separate focus groups. Below are the
                  detailed reports from each interviewer:
                </Text>

                {blogPost.content.findings.map((finding, index) => (
                  <Card key={index} padding={24} radius="lg" withBorder shadow="sm">
                    <Stack gap={20}>
                      <Group gap={16}>
                        <Box
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: 999,
                            background: 'linear-gradient(135deg, #FF6FB7, #C74CF5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Stack gap={4}>
                          <Title order={3} fz={20}>
                            {finding.interviewer}
                          </Title>
                          <Text c="dimmed" size="sm">
                            Interviewed {finding.participants}
                          </Text>
                        </Stack>
                      </Group>

                      <Stack gap={16}>
                        <Title order={4} fz={18}>
                          Key Findings:
                        </Title>
                        <List spacing={8} size="sm">
                          {finding.keyFindings.map((item, itemIndex) => (
                            <List.Item key={itemIndex}>{item}</List.Item>
                          ))}
                        </List>
                      </Stack>

                      {finding.pricePreferences && (
                        <Stack gap={12}>
                          <Title order={4} fz={16}>
                            Price Preferences:
                          </Title>
                          <Group gap={8} wrap="wrap">
                            {finding.pricePreferences.map((price, priceIndex) => (
                              <Badge key={priceIndex} variant="light" color="#E351B7">
                                {price}
                              </Badge>
                            ))}
                          </Group>
                        </Stack>
                      )}

                      {finding.disposalMethods && (
                        <Stack gap={12}>
                          <Title order={4} fz={16}>
                            Disposal Methods:
                          </Title>
                          <Group gap={8} wrap="wrap">
                            {finding.disposalMethods.map((method, methodIndex) => (
                              <Badge key={methodIndex} variant="outline" color="#E351B7">
                                {method}
                              </Badge>
                            ))}
                          </Group>
                        </Stack>
                      )}

                      {finding.improvements && (
                        <Stack gap={12}>
                          <Title order={4} fz={16}>
                            Suggested Improvements:
                          </Title>
                          <Group gap={8} wrap="wrap">
                            {finding.improvements.map((improvement, improvementIndex) => (
                              <Badge key={improvementIndex} variant="outline" color="#E351B7">
                                {improvement}
                              </Badge>
                            ))}
                          </Group>
                        </Stack>
                      )}

                      {finding.brandPreferences && (
                        <Stack gap={12}>
                          <Title order={4} fz={16}>
                            Brand Preferences:
                          </Title>
                          <List spacing={8} size="sm">
                            {finding.brandPreferences.map((brand, brandIndex) => (
                              <List.Item key={brandIndex}>{brand}</List.Item>
                            ))}
                          </List>
                        </Stack>
                      )}

                      {finding.usagePatterns && (
                        <Stack gap={12}>
                          <Title order={4} fz={16}>
                            Usage Patterns:
                          </Title>
                          <Group gap={8} wrap="wrap">
                            {finding.usagePatterns.map((pattern, patternIndex) => (
                              <Badge key={patternIndex} variant="light" color="#E351B7">
                                {pattern}
                              </Badge>
                            ))}
                          </Group>
                        </Stack>
                      )}
                    </Stack>
                  </Card>
                ))}
              </Stack>

              {/* Conclusion */}
              <Paper
                p={32}
                radius="lg"
                withBorder
                shadow="sm"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,111,183,0.05), rgba(199,76,245,0.05))',
                }}
              >
                <Stack gap={16}>
                  <Title order={2} fz={{ base: 24, md: 32 }}>
                    Conclusion
                  </Title>
                  <Text fz={{ base: 'md', md: 'lg' }} lh={1.7}>
                    {blogPost.content.conclusion}
                  </Text>
                </Stack>
              </Paper>

              {/* Action Buttons */}
              <Group justify="center" gap={16} wrap="wrap">
                <Button
                  size="lg"
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: '#FF6FB7', to: '#C74CF5', deg: 45 }}
                >
                  Learn More About Our Mission
                </Button>
                <Button size="lg" radius="xl" variant="outline" color="#E351B7">
                  Support Our Cause
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          {/* Sidebar */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap={32}>
              {/* Newsletter Signup */}
              <Card
                padding={24}
                radius="lg"
                withBorder
                shadow="sm"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,111,183,0.1), rgba(199,76,245,0.1))',
                }}
              >
                <Stack gap={16} ta="center">
                  <Title order={4}>Stay Updated</Title>
                  <Text size="sm" c="dimmed">
                    Get the latest articles and insights delivered to your inbox
                  </Text>
                  <Stack gap={12}>
                    <TextInput
                      placeholder="Enter your email"
                      size="sm"
                      radius="xl"
                      styles={{
                        input: { borderColor: '#E351B7' },
                      }}
                    />
                    <Button
                      size="sm"
                      radius="xl"
                      variant="gradient"
                      gradient={{ from: '#FF6FB7', to: '#C74CF5', deg: 45 }}
                      fullWidth
                    >
                      Subscribe
                    </Button>
                  </Stack>
                </Stack>
              </Card>

              {/* Related Posts */}
              <Card padding={24} radius="lg" withBorder shadow="sm">
                <Stack gap={16}>
                  <Title order={4}>Related Articles</Title>
                  <Stack gap={16}>
                    {relatedPosts.map((post) => (
                      <Group key={post.id} gap={12} wrap="nowrap">
                        <Box
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 8,
                            background: 'rgba(0,0,0,0.04)',
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={post.image}
                            alt={post.title}
                            height={60}
                            fit="cover"
                            fallbackSrc="/images/image_blog_header.jpg"
                          />
                        </Box>
                        <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
                          <Text size="sm" fw={500} lineClamp={2}>
                            <Anchor
                              href={`/blog/${post.id}`}
                              c="dark"
                              style={{ textDecoration: 'none' }}
                            >
                              {post.title}
                            </Anchor>
                          </Text>
                          <Group gap={8}>
                            <Text size="xs" c="dimmed">
                              {post.date}
                            </Text>
                            <Text size="xs" c="dimmed">
                              •
                            </Text>
                            <Text size="xs" c="dimmed">
                              {post.readTime}
                            </Text>
                          </Group>
                        </Stack>
                      </Group>
                    ))}
                  </Stack>
                </Stack>
              </Card>

              {/* About Section */}
              <Card padding={24} radius="lg" withBorder shadow="sm">
                <Stack gap={16}>
                  <Title order={4}>About Our Research</Title>
                  <Text size="sm" c="dimmed">
                    Our focus group discussions help us understand the real challenges women and
                    girls face with menstrual hygiene products. This research drives our innovation
                    and ensures our solutions meet actual community needs.
                  </Text>
                  <Button
                    component="a"
                    href="/about"
                    size="sm"
                    radius="xl"
                    variant="outline"
                    color="#E351B7"
                    fullWidth
                  >
                    Learn More About Us
                  </Button>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPostPage;
