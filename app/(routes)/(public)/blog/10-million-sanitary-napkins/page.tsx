'use client';

import {
  BlogArticleShell,
  BodyImage,
  BodyText,
} from '@/core/components/blog/plain_article';

const TenMillionSanitaryNapkinsPage = () => {
  return (
    <BlogArticleShell
      hero={{
        imageSrc: '/images/blog/10-million/machine.jpg',
        imageAlt: 'Girlified high-output automated sanitary napkin production machine',
        title: '10 Million Sanitary Napkins Every Year — Now Achievable',
        badge: 'Innovation',
        date: 'June 2024',
        readTime: '5 min read',
        objectPosition: 'center',
      }}
    >
      <BodyText>
        As you might have known, our goal as a company and as individuals is to put an end to period
        poverty that is affecting over 500 million women and girls around the world—a threat to their
        dignity and health. This problem is even worse in underdeveloped regions like Sub-Saharan
        Africa where we are based and is contributing to gender inequality.
      </BodyText>

      <BodyText>
        We have been working to meet the needs of these women and also increase their productivity
        through our sanitary napkin product, Girlified. Through the support of the Government of
        Canada under the Afri-plastics Challenge, we were able to convert what was purely a
        research-based project at the University of Jos, Nigeria and under Naza Agape Foundation, to
        a full product that is changing the lives of women and girls in Africa today.
      </BodyText>

      <BodyText>
        In June 2023, after Oghenekevwe was granted the OSV fellowship, we set out to get
        implementing partners who could build the machine we had designed. After a very long search,
        we came across machine manufacturers in China. After the initial agreements, they set out to
        work and got to the point where we had to physically visit and conclude all the necessary
        details of the machine before it would be brought to Nigeria. For this reason, Oghenekevwe
        travelled to do the job.
      </BodyText>

      <BodyImage
        src="/images/blog/10-million/china_partnership.jpg"
        alt="Oghenekevwe with Engr. Liu at machine manufacturers in China"
        caption="Oghenekevwe with Engr. Liu in China"
      />

      <BodyText>
        With further support from O&apos;Shaughnessy Ventures through the OSV fellowship granted to
        our co-founder Oghenekevwe, we have been able to exponentially scale our business and impact
        and will be doing so in an even grander fashion through the new machine we have built to 50×
        our current output. He spent over 7 weeks in China working with our Chinese contractors to
        customize our high-output and automated sanitary napkin machine. Throughout this time, he
        has worked with them to implement our designs and bring the machine to life—and right now,
        after this much time, we have success.
      </BodyText>

      {/* <BodyImage
        src="/images/blog/10-million/factory_visit.jpg"
        alt="Factory visit during Girlified sanitary napkin machine development in China"
        caption="On-site factory visit during machine customization in China"
      /> */}

      <BodyImage
        src="/images/blog/10-million/machine.jpg"
        alt="Girlified high-output automated sanitary napkin production machine"
        caption="Our customized high-output automated sanitary napkin machine"
      />

      <BodyText>
        Girlified now has a machine capable of producing 30,000 sanitary napkins every single day.
        Yes, you read that well. This is an exponential boost to the current state of our business
        and overall impact on local women and girls, their hygiene and overall well-being.
      </BodyText>

      <BodyText>
        As an environmentally conscious organisation, it is also a huge plus for the environment as
        our product incorporates biodegradable materials like banana stem fibre and natural cotton as
        a replacement to plastic-based materials used in conventional products. With these steps, we
        will be eliminating over 1000 tons of plastic from sanitary napkins by the end of 2025.
      </BodyText>

      <BodyText>
        Our &ldquo;fibre to fluff&rdquo; research on banana pseudo-stems is currently ongoing and we
        will be making a publication on it before the year runs out. Our end goal is not just to end
        in making sanitary napkins but to use banana stem fibre as a replacement for unsustainable
        and plastic-based materials in diapers, clothes and other non-woven products.
      </BodyText>
    </BlogArticleShell>
  );
};

export default TenMillionSanitaryNapkinsPage;
