'use client';

import React from 'react';
import {
  IconCalendar,
  IconClock,
  IconEye,
  IconHeart,
  IconMessageCircle,
  IconSearch,
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
  Grid,
  Group,
  Image,
  Pagination,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Girlified Women and Girls Engagement/Focus Group Discussion',
      excerpt:
        'We engaged 82 women and girls (ages 12–48) in Rankyeng Village, Jos South, to understand period challenges, affordability, disposal practices, and desired improvements in pad comfort, thickness, and absorption.',
      author: 'Girlified Team',
      date: '2022-09-17',
      readTime: '8 min read',
      category: 'Community Engagement',
      image: '/images/image_blog_header.jpg',
      views: 1250,
      likes: 89,
      comments: 12,
      tags: ['Community Engagement', 'Focus Group', 'Period Poverty', 'Research'],
    },
    {
      id: 2,
      title: 'The Environmental Impact of Traditional Sanitary Products',
      excerpt:
        'A deep dive into how conventional menstrual products contribute to plastic pollution and what eco-friendly alternatives exist.',
      author: 'Maria Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Sustainability',
      image: '/images/image_blog_header.jpg',
      views: 980,
      likes: 67,
      comments: 8,
      tags: ['Environment', 'Plastic Pollution', 'Sustainability'],
    },
    {
      id: 3,
      title: 'Banana Fiber Innovation: The Future of Menstrual Hygiene',
      excerpt:
        'Discover how upcycled banana stem fiber is revolutionizing menstrual care with superior absorbency and biodegradability.',
      author: 'Dr. Amina Hassan',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Innovation',
      image: '/images/image_blog_header.jpg',
      views: 1450,
      likes: 112,
      comments: 15,
      tags: ['Innovation', 'Banana Fiber', 'Technology'],
    },
    {
      id: 4,
      title: 'Breaking Taboos: Menstrual Health Education in Schools',
      excerpt:
        'How comprehensive menstrual health education can empower young girls and break down cultural barriers.',
      author: 'Jennifer Kim',
      date: '2024-01-01',
      readTime: '4 min read',
      category: 'Education',
      image: '/images/image_blog_header.jpg',
      views: 890,
      likes: 54,
      comments: 6,
      tags: ['Education', 'Youth', 'Breaking Taboos'],
    },
    {
      id: 5,
      title: 'Sustainable Period Care: A Complete Guide',
      excerpt:
        'Everything you need to know about making your menstrual routine more environmentally friendly and sustainable.',
      author: 'Dr. Lisa Chen',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Sustainability',
      image: '/images/image_blog_header.jpg',
      views: 1120,
      likes: 78,
      comments: 11,
      tags: ['Sustainability', 'Guide', 'Eco-Friendly'],
    },
  ];

  const popularTags = [
    'Period Poverty',
    'Sustainability',
    'Women Empowerment',
    'Innovation',
    'Health',
    'Environment',
  ];

  return (
    <Box>
      {/* Hero Header */}
      <Box style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
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
          <Stack
            align="center"
            justify="center"
            ta="center"
            gap={24}
            style={{ height: '100%', color: 'white' }}
          >
            <Title order={1} fz={{ base: 40, md: 60 }} fw={900} c="white">
              Girlified Blog
            </Title>
            <Text fz={{ base: 18, md: 20 }} c="white" maw={800}>
              Insights, stories, and innovations in menstrual health, sustainability, and women's
              empowerment
            </Text>

            {/* Search Bar */}
            <Box w="100%" maw={600}>
              <TextInput
                placeholder="Search articles..."
                leftSection={<IconSearch size={20} />}
                size="lg"
                radius="xl"
                styles={{
                  input: {
                    background: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    '&:focus': {
                      background: 'white',
                    },
                  },
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container size="lg" py={{ base: 40, md: 60 }}>
        <Grid gutter={32}>
          {/* Main Content */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            {/* Category Filter */}
            {/* <Group gap={12} mb={32} wrap="wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === 'All' ? 'filled' : 'outline'}
                  size="sm"
                  radius="xl"
                  color={category === 'All' ? '#111111' : undefined}
                  style={{
                    borderColor: category !== 'All' ? '#E351B7' : undefined,
                    color: category !== 'All' ? '#E351B7' : undefined,
                  }}
                >
                  {category}
                </Button>
              ))}
            </Group> */}

            {/* Blog Posts Grid */}
            <Stack gap={32}>
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  padding={0}
                  radius="lg"
                  withBorder
                  shadow="sm"
                  style={{ overflow: 'hidden' }}
                >
                  <Grid gutter={0}>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                      <Box style={{ height: 200, background: 'rgba(0,0,0,0.04)' }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          height={200}
                          fit="cover"
                          fallbackSrc="/images/about-mission.jpg"
                        />
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 8 }}>
                      <Stack p={24} gap={16} style={{ height: '100%' }}>
                        <Group gap={12} wrap="wrap">
                          <Badge color="#E351B7" variant="light" size="sm">
                            {post.category}
                          </Badge>
                          <Group gap={4} c="dimmed">
                            <IconCalendar size={14} />
                            <Text size="sm">{post.date}</Text>
                          </Group>
                          <Group gap={4} c="dimmed">
                            <IconClock size={14} />
                            <Text size="sm">{post.readTime}</Text>
                          </Group>
                        </Group>

                        <Title order={3} fz={{ base: 20, sm: 24 }} lineClamp={2}>
                          <Anchor
                            href={`/blog/${post.id}`}
                            c="dark"
                            style={{ textDecoration: 'none' }}
                            fw={600}
                          >
                            {post.title}
                          </Anchor>
                        </Title>

                        <Text c="dimmed" lineClamp={3}>
                          {post.excerpt}
                        </Text>

                        <Group justify="space-between" mt="auto">
                          <Group gap={16}>
                            <Group gap={4} c="dimmed">
                              <IconUser size={14} />
                              <Text size="sm">{post.author}</Text>
                            </Group>
                            <Group gap={4} c="dimmed">
                              <IconEye size={14} />
                              <Text size="sm">{post.views}</Text>
                            </Group>
                            <Group gap={4} c="dimmed">
                              <IconHeart size={14} />
                              <Text size="sm">{post.likes}</Text>
                            </Group>
                            <Group gap={4} c="dimmed">
                              <IconMessageCircle size={14} />
                              <Text size="sm">{post.comments}</Text>
                            </Group>
                          </Group>
                          <Button
                            component="a"
                            href={`/blog/${post.id}`}
                            size="sm"
                            radius="xl"
                            variant="gradient"
                            gradient={{ from: '#111', to: '#111', deg: 45 }}
                          >
                            Read More
                          </Button>
                        </Group>

                        <Group gap={8} wrap="wrap">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" size="xs" color="#E351B7">
                              {tag}
                            </Badge>
                          ))}
                        </Group>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Card>
              ))}
            </Stack>

            {/* Pagination */}
            <Group justify="center" mt={48}>
              <Pagination total={3} size="md" radius="xl" color="#111" />
            </Group>
          </Grid.Col>

          {/* Sidebar */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap={32}>
              {/* Popular Tags */}
              <Card padding={24} radius="lg" withBorder shadow="sm">
                <Stack gap={16}>
                  <Title order={4}>Popular Tags</Title>
                  <Group gap={8} wrap="wrap">
                    {popularTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        size="sm"
                        color="#E351B7"
                        style={{ cursor: 'pointer' }}
                      >
                        <Group gap={4}>
                          <IconTag size={12} />
                          <span>{tag}</span>
                        </Group>
                      </Badge>
                    ))}
                  </Group>
                </Stack>
              </Card>

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

              {/* Recent Posts */}
              <Card padding={24} radius="lg" withBorder shadow="sm">
                <Stack gap={16}>
                  <Title order={4}>Recent Posts</Title>
                  <Stack gap={16}>
                    {blogPosts.slice(0, 3).map((post) => (
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
                            fallbackSrc="/images/about-mission.jpg"
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
                  <Title order={4}>About Our Blog</Title>
                  <Text size="sm" c="dimmed">
                    We're passionate about menstrual health, sustainability, and women's
                    empowerment. Our blog covers the latest research, innovations, and stories from
                    our community.
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

export default BlogPage;
