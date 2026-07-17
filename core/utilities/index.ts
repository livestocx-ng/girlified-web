import { IconCpu, IconLeaf, IconUsers } from '@tabler/icons-react';
import { Partner } from '../types';

interface ProductDisplayType {
  title: string;
  value: 'RECOMMENDED' | 'POPULAR' | 'NEAR_YOU';
}

export const productDisplayTypes: ProductDisplayType[] = [
  {
    title: 'Recommended',
    value: 'RECOMMENDED',
  },
  {
    title: 'Popular',
    value: 'POPULAR',
  },
  {
    title: 'Near You',
    value: 'NEAR_YOU',
  },
];

export const navLinks = [
  { link: '/our-story', label: 'Our Story', target: '' },
  { link: '/research', label: 'Research', target: '' },
  { link: '/smart-pad', label: 'Smart Pad', target: '' },
  { link: 'https://saifeai.girlified.co', label: 'SaifeAI', target: '_blank' },
  { link: '/about-us', label: 'About Us', target: '' },
  { link: '/contact-us', label: 'Contact', target: '' },
];

export const researchPapers = [
  {
    id: 'superabsorbent-banana-fiber',
    title:
      'Preparation of superabsorbent composite(s) based on dialdehyde cellulose extracted from banana fiber waste',
    pdfPath: '/research/1-s2.0-S0144861724007306-main.pdf',
    previewPath: '/research/previews/1-s2.0-S0144861724007306-main.jpg',
  },
  {
    id: 'banana-stem-biomedical',
    title:
      'Exploring the synthesis and biomedical potential of banana stem fiber for antimicrobial and wound healing applications',
    pdfPath: '/research/s42452-025-07151-6.pdf',
    previewPath: '/research/previews/s42452-025-07151-6.jpg',
  },
];

export const blogPosts = [
  {
    slug: 'girlified-women-and-girls-engagement',
    title: 'Women & Girls Engagement / Focus Group Discussion',
    excerpt: 'Field insights from 82 women and girls in Rankyeng Village, Jos South LGA.',
    category: 'Community',
    readTime: '8 min read',
  },
  {
    slug: 'empowering-girls-on-international-day-of-the-girl-child',
    title: 'Empowering Girls on International Day of the Girl Child',
    excerpt: '523 girls reached with menstrual hygiene education, environmental awareness, and eco-friendly pad distribution.',
    category: 'Impact',
    readTime: '6 min read',
  },
  {
    slug: '10-million-sanitary-napkins',
    title: '10 Million Sanitary Napkins Every Year — Now Achievable',
    excerpt: 'Our new automated machine produces 30,000 pads daily, scaling impact 50× and cutting plastic waste.',
    category: 'Innovation',
    readTime: '5 min read',
  },
  {
    slug: 'girlified-x-mit',
    title: 'Girlified × MIT Sloan SEID Partnership',
    excerpt: 'Strategic collaboration to build a fundraising and financial growth roadmap for continental scale-up.',
    category: 'Partnership',
    readTime: '4 min read',
  },
];

export const platformFaqs = [
  {
    value: 'What is the Girlified Sanitary Pad made of?',
    description:
      'Girlified sanitary pads are made from a research-backed combination of upcycled banana stem fiber and natural cotton, replacing the plastic super absorbent polymers (SAP) core used in conventional sanitary pads.',
  },
  {
    value: 'How absorbent is the banana stem fiber core?',
    description:
      'Upcycled banana stem fiber is naturally highly absorbent and has been tested to absorb up to three times more fluid than typical wood pulp or cotton filters in traditional brands.',
  },
  {
    value: 'Does the pad contain plastics or chemicals?',
    description:
      'No. Unlike conventional sanitary pads that can contain up to 90% plastic, Girlified sanitary pads use plant-based, biodegradable materials that are chlorine-free, plastic-free, and hypoallergenic, making them gentle on the skin and free of rashes.',
  },
  {
    value: 'How long do the sanitary pads take to decompose?',
    description:
      'Because our materials are natural and organic, Girlified sanitary pads completely decompose within six months after disposal, compared to conventional plastic-based pads which take up to 500 years to degrade in landfills and oceans.',
  },
  {
    value: 'What is the Girlified Smart Pad?',
    description:
      'The Girlified Smart Pad is a diagnostic wellness pad designed to analyze menstrual blood biomarkers. It is non-invasive and provides early screening indicators for conditions like Endometriosis, PCOS, and cervical or endometrial health tracking.',
  },
  {
    value: 'How do you support local communities?',
    description:
      'We believe in female empowerment. By buying our pads and participating in our health research, you help us support local women and girls through sensitization programs, menstrual hygiene workshops, and community-based employment.',
  },
];

export const platformFeatures = [
  {
    title: 'Highly Absorbent Core',
    description:
      'Our post-harvest upcycled banana stem fiber absorbs fluid up to 3x more efficiently than wood pulp, providing leak-proof, dry comfort all day long.',
    icon: IconLeaf,
  },
  {
    title: '100% Biodegradable',
    description:
      'Replaces plastic super absorbent polymers (SAP) and back-sheet layers. Decomposes naturally within 6 months, preventing landfill and ocean waste.',
    icon: IconCpu,
  },
  {
    title: 'Hypoallergenic & Rash-Free',
    description:
      'Zero chlorine, zero synthetic fragrances, and zero chemical bleach. Safe, gentle materials prevent reproductive tract infections and skin irritation.',
    icon: IconUsers,
  },
];

export const teamMembers = [
  {
    name: 'Nwagboso Prayer',
    role: 'Co-Founder & Girls Advocate',
    bio: "As a girls and women advocate, I am very concerned about period poverty and the harmful impact plastics from sanitary pads have on our ecosystem and oceans. For that reason, we have manufactured Girlified to counter both plastic pollution and period poverty.",
    extendedBio:
      'Founder & CEO of Naza Agape Foundation, Prayer has impacted 18,000+ lives through education, welfare, and empowerment programmes across Nigeria and beyond. She leads Girlified community outreach, free pad distributions, and menstrual hygiene sensitization for underserved girls and women.',
    quote:
      'We aim to reduce plastic pollution and tackle period poverty by offering a sustainable solution that helps girls stay in school with dignity.',
    highlights: [
      'Founder & CEO, Naza Agape Foundation',
      'ForbesBLK Member',
      'Afri-Plastics Challenge Semi-Finalist',
    ],
    credentials: ['BBC News Africa', 'BusinessDay Nigeria', 'State Chair G100 Nigeria'],
    linkedin: 'https://linkedin.com/in/prayer-nwagboso-54461a174',
    image: 'https://girlified.com.ng/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-09-at-10.00.54-AM.jpg',
  },
  {
    name: 'Oghenekevwe William',
    role: 'Co-Founder & Lead Researcher',
    bio: 'I am passionate about climate change and am an entrepreneur who has put all my years of experience working with women and girls into developing eco-friendly sanitary pads. Girlified is rightly positioned to positively address the perennial issues of plastic pollution and period poverty.',
    extendedBio:
      'With a background in physics from the University of Jos, Oghenekevwe leads fibre-to-fluff R&D converting banana pseudostem and natural cotton into absorbent cores. He is Regional Director of Naza Agape Foundation and an O\'Shaughnessy Fellowship grantee.',
    quote:
      'Our mission is to eliminate plastics from pad usage while empowering women in the process.',
    highlights: [
      'Lead Researcher, Girlified',
      "O'Shaughnessy Fellowship Grantee",
      'Afri-Plastics Challenge Participant',
    ],
    credentials: ['University of Jos', 'Chatham House Member', 'Environmental Educator (NAAEE)'],
    linkedin: 'https://linkedin.com/in/oghenekevwe-emadago',
    image: 'https://girlified.com.ng/wp-content/uploads/2023/07/Untitled-design.png',
  },
];

export const appFeatures = [
  {
    id: 1,
    feature: 'Biodegradable Materials',
    custom: {
      text: 'Uses synthetic plastic SAP cores (take 500 years to degrade)',
      positive: false,
    },
    livestocx: {
      text: 'Uses upcycled banana fiber (biodegrades in 6 months)',
      positive: true,
    },
  },
  {
    id: 2,
    feature: 'Skin Safety',
    custom: {
      text: 'Often contains chemical gels and synthetic bleach causing rashes',
      positive: false,
    },
    livestocx: {
      text: 'Hypoallergenic and chemical-free to prevent irritation',
      positive: true,
    },
  },
  {
    id: 3,
    feature: 'Carbon Footprint',
    custom: {
      text: 'High emissions from petrochemical-derived plastics manufacturing',
      positive: false,
    },
    livestocx: {
      text: 'Upcycled agricultural waste prevents open burning and reduces emissions',
      positive: true,
    },
  },
];

export const Partners: Partner[] = [
  {
    name: 'AfriPlastics Challenge',
    image: '/images/sponsors/afri-plastics.png',
    detail: 'AfriPlastics Prize Winner for reduction of plastic pollution',
  },
  {
    name: 'O\'Shaughnessy Fellowship',
    image: '/images/sponsors/o\'shaugnessy.jpeg',
    detail: 'Fellowship backing climate tech innovations',
  },
  {
    name: '776 Foundation',
    image: '/images/sponsors/776_foundation.png',
    detail: 'Supporting climate tech and green solutions',
  },
  {
    name: 'Challenge Works',
    image: '/images/sponsors/challenge works.png',
    detail: 'Social enterprise designing and delivering innovation prizes',
  },
  {
    name: 'Ewabali',
    image: '/images/sponsors/ewabali.png',
    detail: 'Partner in development and social impact',
  },
  {
    name: 'GIZ',
    image: '/images/sponsors/giz.png',
    detail: 'German Agency for International Cooperation',
  },
  {
    name: 'Government of Canada',
    image: '/images/sponsors/government of canada.png',
    detail: 'International support and cooperation partner',
  },
  {
    name: 'MIT Sloan',
    image: '/images/sponsors/mit-sloan.png',
    detail: 'Business school of the Massachusetts Institute of Technology',
  },
  {
    name: 'UNDP',
    image: '/images/sponsors/undp.jpeg',
    detail: 'United Nations Development Programme',
  },
];

export const Sponsors = Partners;
