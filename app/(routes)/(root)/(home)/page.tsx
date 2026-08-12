'use client';

import { Box } from '@mantine/core';
import Hero from '@/core/components/home/hero';
import ImpactSection from '@/core/components/home/impact_section';
import ProblemSection from '@/core/components/home/problem_section';
import TractionSection from '@/core/components/home/traction_section';
import FeaturedSection from '@/core/components/home/featured_section';
import WhyChooseSection from '@/core/components/home/why_choose_section';
import TechnologySection from '@/core/components/home/technology_section';
import LocationsMapSection from '@/core/components/home/locations_map_section';

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

