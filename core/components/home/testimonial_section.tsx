import React from 'react';
import type { EmblaCarouselType } from 'embla-carousel';
import { Carousel } from '@mantine/carousel';
import { Avatar, Container, Paper, Stack, Text, Title } from '@mantine/core';

const testimonials = [
  {
    name: 'Amina O.',
    text: "Girlified made me love my period again. Super soft and eco-conscious — I'm obsessed!",
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'Chioma N.',
    text: 'Finally, products made specifically for us! The quality is amazing and the packaging is so beautiful.',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'Zainab M.',
    text: 'As a young girl, Girlified has helped me feel confident during my period. Thank you for making such great products!',
    image: '/images/testimonial-3.jpg',
  },
];

const TestimonialSection = () => {
  const [embla, setEmbla] = React.useState<EmblaCarouselType | null>(null);

  React.useEffect(() => {
    if (!embla) return;
    const intervalId = setInterval(() => {
      if (!embla) return;
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [embla]);
  return (
    <Container size="xl" py={{ base: 100, sm: 72 }}>
      <Title order={2} fz={{ base: 32, sm: 44 }} ta="center" mb={6} c="#3B2B36">
        What Our Girls Say
      </Title>
      <Text ta="center" c="dimmed" mb={{ base: 20, sm: 32 }} fz={{ base: 'sm', sm: 'md' }}>
        Real stories from real girls
      </Text>

      <Carousel
        withIndicators
        slideGap={{ base: 12, sm: 16 }}
        slideSize="100%"
        styles={{ indicator: { width: 6, height: 6 } }}
        getEmblaApi={setEmbla}
      >
        {testimonials.map((t) => (
          <Carousel.Slide key={t.name}>
            <Paper radius="xl" p={{ base: 20, sm: 32 }} shadow="sm">
              <Stack align="center" gap={14}>
                <Avatar
                  src={t.image}
                  alt={t.name}
                  size={96}
                  radius={999}
                  styles={{ image: { objectFit: 'cover' } }}
                />
                <Text ta="center" fz={{ base: 16, sm: 18 }} c="dimmed" fs="italic">
                  "{t.text}"
                </Text>
                <Title order={4} c="" fz={{ base: 18, sm: 20 }}>
                  {t.name}
                </Title>
              </Stack>
            </Paper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialSection;
