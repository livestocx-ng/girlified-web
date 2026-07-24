'use client';

import Link from 'next/link';
import { Anchor } from '@mantine/core';
import {
  ARTICLE_LINK,
  BlogArticleShell,
  BodyText,
  ExtLink,
} from '@/core/components/blog/plain_article';

const MVenturesAcceleratorPage = () => {
  return (
    <BlogArticleShell
      hero={{
        imageSrc: '/images/blog/m-ventures/image_m-ventures.jpg',
        imageAlt:
          'Girlified research team in lab coats presenting sanitary pads and plant-fiber material',
        title:
          'Girlified Selected for the M Ventures Accelerator to Advance Next-Generation Sustainable Menstrual Technology',
        badge: 'Partnership',
        date: 'July 2026',
        readTime: '5 min read',
        objectPosition: 'center 30%',
      }}
    >
      <BodyText>
        We are excited to announce that{' '}
        <Anchor
          component={Link}
          href="/"
          underline="always"
          style={{ color: ARTICLE_LINK, fontWeight: 400, textUnderlineOffset: 2 }}
        >
          Girlified
        </Anchor>{' '}
        has been selected for the $30,000{' '}
        <ExtLink href="https://www.menstrualventures.org/">M Ventures Accelerator</ExtLink>, a
        global program supporting innovators developing the next generation of sustainable menstrual
        health solutions. <ExtLink href="https://www.menstrualventures.org/">M Ventures</ExtLink> is
        a program of <ExtLink href="https://capital-m.org/">Capital M</ExtLink> - an initiative by
        the <ExtLink href="https://shfund.org/">UN&apos;s Sanitation and Hygiene Fund (SHF)</ExtLink>{' '}
        - and implemented by <ExtLink href="https://bopinc.org/">Bopinc</ExtLink>. This milestone
        shows our commitment to advancing research-based solutions to provide accessible and
        affordable menstrual solutions to women and girls in underserved communities.
      </BodyText>

      <BodyText>
        Since launching commercially in 2023, Girlified has grown into one of Nigeria&apos;s leading
        biodegradable menstrual health enterprises. Built on years of research and community
        engagement, we have sold over 2 million sanitary pads and reached over 70,000 women and girls
        across Northern Nigeria through schools, pharmacies, retailers, NGOs, and institutional
        partnerships.
      </BodyText>

      <BodyText>
        Through the <ExtLink href="https://www.menstrualventures.org/">M Ventures Accelerator</ExtLink>
        , we will embark on an ambitious research and development pilot to create the next generation
        of Girlified sanitary pads. This pilot will focus on two major innovations. First, we will
        use nanoparticle-driven engineering of plant fiber structures to improve absorbency and
        moisture wicking, increasing our current absorbency performance from approximately 67% to at
        least 85% without increasing the retail price. This will provide greater comfort, reduce
        leakage, and allow women and girls to use fewer pads during their menstrual cycle, lowering
        their overall menstrual costs. Secondly, we will ensure full biodegradability of our menstrual
        pad.
      </BodyText>

      <BodyText>
        Over the years, we have always believed that menstrual health should not force women to
        choose between affordability, quality, and environmental responsibility. Participation in{' '}
        <ExtLink href="https://www.menstrualventures.org/">M Ventures</ExtLink> provides us access to
        world-class technical mentors, menstrual health experts, researchers, and industry partners
        who will help validate our technology, strengthen our product design, and generate the
        scientific evidence needed to scale our innovation across West Africa. The knowledge and
        partnerships developed through this accelerator will play a critical role in helping us bring
        a fully biodegradable, high-performance menstrual product to millions of women and girls.
      </BodyText>

      <BodyText>
        We are grateful to the <ExtLink href="https://www.menstrualventures.org/">M Ventures</ExtLink>{' '}
        team for believing in our vision and look forward to sharing the outcomes of this exciting
        next chapter. Together, we are proving that the future of menstrual health can be innovative,
        sustainable, and built in Africa.
      </BodyText>
    </BlogArticleShell>
  );
};

export default MVenturesAcceleratorPage;
