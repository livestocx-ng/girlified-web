'use client';

import { Box } from '@mantine/core';
import Hero from '@/core/components/home/hero';
import FeaturedSection from '@/core/components/home/featured_section';
import WhyChooseSection from '@/core/components/home/why_choose_section';
import ProblemSection from '@/core/components/home/problem_section';
import ImpactSection from '@/core/components/home/impact_section';
import TractionSection from '@/core/components/home/traction_section';
import TechnologySection from '@/core/components/home/technology_section';

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <FeaturedSection />
      <WhyChooseSection />
      <TechnologySection />
      <ProblemSection />
      <ImpactSection />
      <TractionSection />
    </Box>
  );
}

