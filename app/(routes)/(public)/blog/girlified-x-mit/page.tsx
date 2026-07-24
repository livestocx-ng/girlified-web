'use client';

import {
  BlogArticleShell,
  BodyImage,
  BodyText,
} from '@/core/components/blog/plain_article';

const GirlifiedXMitPage = () => {
  return (
    <BlogArticleShell
      hero={{
        imageSrc: '/images/blog/girlified-x-mit/partnership.jpg',
        imageAlt: 'Girlified and MIT Sloan SEID strategic partnership',
        title: 'Building a Fundraising & Financial Growth Roadmap with MIT Sloan SEID',
        badge: 'Partnership',
        date: '11 December 2025',
        readTime: '4 min read',
        objectPosition: 'center',
      }}
    >
      <BodyText>
        Girlified announces a strategic partnership with the Sloan Entrepreneurs for International
        Development (SEID) program — a milestone in our scale-up journey toward continental growth in
        the biodegradable menstrual hygiene market.
      </BodyText>

      <BodyText>
        Through this engagement, a team of graduate consultants from MIT Sloan will work closely with
        Girlified between November 2025 and January 2026 to develop a comprehensive financial
        planning and fundraising roadmap. The project will involve deep financial analysis, investor
        discovery, market benchmarking, and the development of a compelling investor-facing pitch
        deck that clearly communicates Girlified&apos;s impact, commercial potential, and long-term
        sustainability model.
      </BodyText>

      <BodyText>
        The collaboration aims to strengthen our financial architecture, refine unit economics, and
        help identify mission-aligned partners ranging from grant funders to equity and impact
        investors.
      </BodyText>

      <BodyImage
        src="/images/blog/girlified-x-mit/partnership.jpg"
        alt="Girlified and MIT Sloan SEID partnership collaboration"
        caption="Girlified × MIT Sloan SEID strategic partnership"
      />

      <BodyText>
        This partnership is centred around building Girlified&apos;s financial narrative in a manner
        that translates our technical work, R&amp;D investment, and community impact into
        investor-ready materials. The MIT team will map global funding opportunities in women&apos;s
        health, plastics reduction, circular economy, and climate innovation, while also developing
        an investor pipeline database and a multi-year fundraising strategy tailored to our scale-up
        goals.
      </BodyText>

      <BodyText>
        Beyond pitch deck development and investor research, the project will create a three-year
        roadmap detailing step-by-step actions from early fundraising to long-term capital
        mobilisation, including engagement strategies for international VCs, gender-lens funds,
        DFIs, government programs and humanitarian procurement channels.
      </BodyText>

      <BodyText>
        Project deliverables include an investor pitch deck communicating impact, commercial
        potential, and long-term sustainability; an investor pipeline database; and a 2026–2028
        fundraising plan. Leadership engagement includes interviews, financial reviews, and
        operations/impact alignment, while also exploring connections with the MIT Impact Investing
        Club and the Kuo Sharper Center.
      </BodyText>

      <BodyText>
        This partnership reinforces Girlified&apos;s commitment to building a scalable and
        investment-ready business that can transform menstrual health access in Africa while
        eliminating plastic pollution from disposable sanitary products. With over 350,000 packs
        already sold using locally sourced banana fibre and cotton, Girlified is entering a new phase
        that demands robust manufacturing capacity, equipment financing, and strategic capital
        deployment. The SEID collaboration will be instrumental in helping us unlock that growth.
      </BodyText>

      <BodyText>
        We are proud to work with the MIT Sloan SEID program, not only for the world-class expertise
        the team brings, but also because it aligns with our belief in data-driven decision-making,
        research-rooted product development, and high-impact innovation. Together, we are building a
        future where biodegradable menstrual pads are accessible, affordable, and manufactured on
        African soil at scale.
      </BodyText>

      <BodyText>
        On behalf of the entire Girlified team, our founder, Emadago Oghenekevwe William, wishes to
        thank the entire SEID team, most especially Chloe Delfau, for leading this initiative.
      </BodyText>
    </BlogArticleShell>
  );
};

export default GirlifiedXMitPage;
