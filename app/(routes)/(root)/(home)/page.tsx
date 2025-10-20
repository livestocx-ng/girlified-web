'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { Box, Button, Flex, Image, Stack, Text } from '@mantine/core';
import AboutSection from '@/core/components/home/about_section';
import FeaturedSection from '@/core/components/home/featured_section';
import Hero from '@/core/components/home/hero';
import HomeHeader from '@/core/components/home/home_header';
import ImpactSection from '@/core/components/home/impact_section';
import MissionSection from '@/core/components/home/mission_section';
import ServicesSection from '@/core/components/home/services_section';
import TestimonialSection from '@/core/components/home/testimonial_section';
import WhyChooseSection from '@/core/components/home/why_choose_section';

export default function HomePage() {
  const documentRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  const [showLinks, setShowLinks] = useState(false);

  return (
    <Box>
      {/* <HomeHeader documentRef={documentRef} /> */}
      <Hero />
      <FeaturedSection />
      <MissionSection />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialSection />
      {/* <ServicesSection />
      <ImpactSection /> */}
      {/* <Footer /> */}
    </Box>
  );
}
