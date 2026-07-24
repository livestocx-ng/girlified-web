'use client';

import {
  BlogArticleShell,
  BodyImage,
  BodyText,
} from '@/core/components/blog/plain_article';

const EmpoweringGirlsOnInternationalDayOfTheGirlChildPage = () => {
  return (
    <BlogArticleShell
      hero={{
        imageSrc: '/images/blog/idgc/idgc_hero.jpg',
        imageAlt: 'Girlified International Day of the Girl Child celebration event',
        title: 'Empowering Girls: Our Remarkable Initiative',
        badge: 'Impact',
        date: '12 October 2023',
        readTime: '6 min read',
        objectPosition: 'center',
      }}
    >
      <BodyText>
        As we celebrated on October 11th, we took a significant step towards empowering girls and
        nurturing a sustainable future—leaving 523 girls better informed, more confident, and better
        equipped to embrace womanhood. Our International Day of the Girl Child event tied menstrual
        hygiene education with environmental sustainability, creating a stigma-free space for
        information and eco-friendly products.
      </BodyText>

      <BodyText>
        The heart of our International Day of the Girl Child event was an interactive and
        enlightening session on menstrual hygiene and feminine health. We believe that every girl
        should have access to accurate information and the necessary resources to manage their
        menstrual health with confidence and dignity.
      </BodyText>

      <BodyImage
        src="/images/blog/idgc/idgc_hygiene.jpg"
        alt="Girlified menstrual hygiene education session with girls on International Day of the Girl Child"
        caption="An interactive session on menstrual hygiene, myth-busting, and dignified period care."
      />

      <BodyText>
        Our team of experts addressed critical topics such as proper menstrual hygiene practices,
        debunking myths, and choosing the right sanitary products. It was an opportunity to have open
        and candid conversations, dispelling stigma, and ensuring that the girls left with the
        knowledge they need to take care of their well-being.
      </BodyText>

      <BodyText>
        At Girlified, we understand that a brighter future for girls also involves safeguarding the
        environment. Our event incorporated a dedicated session on environmental education and the
        importance of tree planting—championed by our co-founder, Emadago Oghenekevwe William, an
        environmental educator.
      </BodyText>

      <BodyImage
        src="/images/blog/idgc/idgc_environment.jpg"
        alt="Environmental education session led by Girlified co-founder"
        caption="Co-founder William led discussions on tree planting, climate action, and eco-friendly habits."
      />

      <BodyText>
        We firmly believe raising a generation of environmentally conscious individuals is crucial
        to combating climate change and preserving our planet for future generations. During this
        session, we engaged the girls in an enlightening discussion about the significance of trees
        in reducing carbon emissions, improving air quality, and fostering a sustainable environment.
        We discussed the role they can play in nurturing the environment by planting trees, reducing
        waste, and adopting eco-friendly practices.
      </BodyText>

      <BodyText>
        The highlight of our International Day of the Girl Child celebration was the distribution of
        our eco-friendly sanitary pads. Committed to our mission of providing affordable and
        sustainable menstrual solutions, we distributed our sanitary pads to all 523 girls in
        attendance.
      </BodyText>

      <BodyText>
        This initiative ensures that they have access to high-quality menstrual products that are not
        only safe and effective but also environmentally responsible. At Girlified, we are dedicated
        to providing a solution that supports girls during their menstruation while minimizing the
        environmental impact. Our sanitary pads are made with sustainable materials, minimizing waste
        and contributing to a healthier planet. We were overwhelmed with the enthusiasm and gratitude
        of the girls who received these pads, knowing that they now have a reliable and eco-friendly
        option for managing their menstrual health.
      </BodyText>

      <BodyText>
        Our International Day of the Girl Child event was not just a celebration but a powerful step
        towards a brighter future. By empowering girls with knowledge about menstrual hygiene,
        feminine health, and environmental sustainability, we hope to inspire them to become
        confident, informed, and eco-conscious leaders in their communities.
      </BodyText>

      <BodyText>
        We extend our heartfelt gratitude to everyone who supported this event, from our partners and
        sponsors to the dedicated volunteers who made it all possible. At Girlified, we believe that
        the empowerment of girls and the preservation of the environment go hand in hand. Stay tuned
        for more updates as we continue to empower girls and nurture a greener future.
      </BodyText>
    </BlogArticleShell>
  );
};

export default EmpoweringGirlsOnInternationalDayOfTheGirlChildPage;
