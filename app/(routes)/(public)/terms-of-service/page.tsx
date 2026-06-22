'use client';

import { Playfair_Display } from 'next/font/google';
import { motion } from 'framer-motion';
import { Box, Container, List, Stack, Text, Title } from '@mantine/core';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const SLATE_BORDER = 'rgba(51, 65, 85, 0.14)';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

type TermsBlock = { type: 'paragraph'; text: string } | { type: 'list'; items: string[] };

type TermsSubsection = {
  title: string;
  blocks: TermsBlock[];
};

type TermsSection = {
  id: string;
  number: string;
  title: string;
  blocks?: TermsBlock[];
  subsections?: TermsSubsection[];
};

const termsSections: TermsSection[] = [
  {
    id: 'definitions',
    number: '1',
    title: 'Definitions',
    blocks: [
      {
        type: 'paragraph',
        text: '"Girlified" refers to Girlified Ltd and its affiliates offering the Girlified platform, including all websites, applications, services, content, and features provided under the Girlified brand.',
      },
      {
        type: 'paragraph',
        text: '"User", "you", or "your" means any individual or entity who accesses or uses the Girlified Platform.',
      },
      {
        type: 'paragraph',
        text: '"Content" means any text, data, audio, video, images, health inputs, feedback, comments, or other materials that users upload, submit, transmit, or otherwise make available through the Girlified Platform.',
      },
      {
        type: 'paragraph',
        text: '"User Data" refers to all personal data (including health-related data) and other information that users provide to Girlified in connection with their use of the Platform.',
      },
      {
        type: 'paragraph',
        text: '"Services" means all products, features, functionalities, and APIs that Girlified makes available, including but not limited to AI-driven health assessments, personalized recommendations, analytics dashboards, and support resources.',
      },
    ],
  },
  {
    id: 'acceptance',
    number: '2',
    title: 'Acceptance of Terms',
    blocks: [
      {
        type: 'paragraph',
        text: 'By accessing or using the Girlified Platform in any manner, including visiting or browsing the site, you agree to be bound by these Terms, all applicable laws, and any additional terms or policies incorporated herein by reference. If you do not agree to all these Terms, you must not access or use the Girlified Platform.',
      },
    ],
  },
  {
    id: 'eligibility',
    number: '3',
    title: 'Eligibility',
    blocks: [
      {
        type: 'paragraph',
        text: 'Users must be at least 18 years old and have full legal capacity to enter into binding agreements to use Girlified Services. Individuals under 18 years old may use the Platform only under the supervision of a parent or legal guardian, who must agree to these Terms on their behalf.',
      },
    ],
  },
  {
    id: 'account',
    number: '4',
    title: 'Account Registration and Security',
    subsections: [
      {
        title: 'Account Creation',
        blocks: [
          {
            type: 'paragraph',
            text: 'To access certain features of Girlified, you may be required to register for an account and provide a valid email address, password, and other information as prompted. You agree to provide accurate and complete information upon registration and to keep such information up to date.',
          },
        ],
      },
      {
        title: 'Account Responsibility',
        blocks: [
          {
            type: 'paragraph',
            text: 'You are solely responsible for all activities that occur under your account and for maintaining the confidentiality of your password and other credentials. You agree to notify Girlified immediately of any unauthorized use of your account or any breach of security.',
          },
        ],
      },
      {
        title: 'Account Suspension and Termination',
        blocks: [
          {
            type: 'paragraph',
            text: 'Girlified reserves the right to suspend or terminate your account at any time if you violate these Terms or if Girlified determines, in its sole discretion, that suspension or termination is necessary to protect the Platform, its users, or third parties.',
          },
        ],
      },
    ],
  },
  {
    id: 'permitted-uses',
    number: '5',
    title: 'Permitted Uses and User Obligations',
    subsections: [
      {
        title: 'Permitted Uses',
        blocks: [
          {
            type: 'paragraph',
            text: 'You may use Girlified Services solely for lawful purposes and in accordance with these Terms. Use of the Platform to generate or facilitate the creation of malicious content, espionage, fraudulent activities, or any other illicit behavior is strictly prohibited.',
          },
        ],
      },
      {
        title: 'Prohibited Conduct',
        blocks: [
          {
            type: 'paragraph',
            text: 'You shall not:',
          },
          {
            type: 'list',
            items: [
              'Infringe or violate any person\'s rights (including intellectual property, privacy, or publicity rights).',
              'Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with another person or entity.',
              'Attempt to gain unauthorized access to any portion of the Platform, or any other systems or networks connected to the Platform.',
              'Use the Platform to transmit unsolicited advertising, spam, chain letters, pyramid schemes, or any other form of solicitation.',
              'Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code or underlying algorithms of any part of the Platform.',
              'Use any automated systems (e.g., robots, spiders, scripts) to access or use the Platform unless explicitly permitted by Girlified in writing.',
            ],
          },
        ],
      },
      {
        title: 'User-Provided Content',
        blocks: [
          {
            type: 'paragraph',
            text: 'You retain ownership of all intellectual property rights in any Content you submit to Girlified. However, by uploading, posting, or otherwise submitting Content to the Platform, you grant Girlified a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to use, reproduce, modify, adapt, publish, translate, distribute, perform, and display such Content for the sole purpose of providing and improving Girlified Services.',
          },
        ],
      },
    ],
  },
  {
    id: 'intellectual-property',
    number: '6',
    title: 'Intellectual Property Rights',
    subsections: [
      {
        title: 'Girlified Ownership',
        blocks: [
          {
            type: 'paragraph',
            text: 'All intellectual property rights, including but not limited to patents, copyrights, trade secrets, trademarks, and database rights, in the Platform (including source code, object code, user interface, designs, "look and feel," and all underlying technology) are owned by Girlified or its licensors, as applicable.',
          },
        ],
      },
      {
        title: 'License to Users',
        blocks: [
          {
            type: 'paragraph',
            text: 'Subject to these Terms, Girlified grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform solely for your personal or internal business purposes.',
          },
        ],
      },
      {
        title: 'Third-Party Materials',
        blocks: [
          {
            type: 'paragraph',
            text: 'The Platform may incorporate or link to third-party software, services, or content that are subject to their own terms and conditions. Your use of such third-party materials is subject to those separate terms.',
          },
        ],
      },
    ],
  },
  {
    id: 'fees',
    number: '7',
    title: 'Fees and Payment (If Applicable)',
    blocks: [
      {
        type: 'paragraph',
        text: 'If Girlified offers premium or subscription-based Services, the following provisions shall apply:',
      },
    ],
    subsections: [
      {
        title: 'Fees',
        blocks: [
          {
            type: 'paragraph',
            text: 'You agree to pay all fees specified for any premium Services ("Fees"). All Fees are non-refundable unless otherwise stated in Girlified\'s refund policy.',
          },
        ],
      },
      {
        title: 'Billing',
        blocks: [
          {
            type: 'paragraph',
            text: 'Girlified may charge your designated payment method (e.g., credit card, debit card) on a recurring basis (e.g., monthly, annually) until you cancel. You must provide current, complete, and accurate billing information.',
          },
        ],
      },
      {
        title: 'Suspension for Non-Payment',
        blocks: [
          {
            type: 'paragraph',
            text: 'If payment is not received by the due date, Girlified reserves the right to suspend or terminate your access to premium Services.',
          },
        ],
      },
    ],
  },
  {
    id: 'disclaimers',
    number: '8',
    title: 'Disclaimers and Limitation of Liability',
    subsections: [
      {
        title: 'No Medical Advice',
        blocks: [
          {
            type: 'paragraph',
            text: 'Girlified Services are intended for informational purposes only. Nothing on the Platform constitutes professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions regarding a medical condition.',
          },
        ],
      },
      {
        title: '"AS IS" and "AS AVAILABLE"',
        blocks: [
          {
            type: 'paragraph',
            text: 'The Platform, including all content and services provided, is delivered on an "AS IS" and "AS AVAILABLE" basis. Girlified expressly disclaims all warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.',
          },
        ],
      },
      {
        title: 'Limitation of Liability',
        blocks: [
          {
            type: 'paragraph',
            text: 'To the maximum extent permitted by law, in no event shall Girlified, its affiliates, officers, directors, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages arising from or relating to these Terms or your use of (or inability to use) the Platform, even if Girlified has been advised of the possibility of such damages.',
          },
        ],
      },
      {
        title: 'Aggregate Liability',
        blocks: [
          {
            type: 'paragraph',
            text: 'Girlified\'s total liability for all claims arising from or relating to these Terms or your use of the Platform shall not exceed the total amount of fees paid by you to Girlified in the six (6) months preceding the event giving rise to the liability.',
          },
        ],
      },
    ],
  },
  {
    id: 'indemnification',
    number: '9',
    title: 'Indemnification',
    blocks: [
      {
        type: 'paragraph',
        text: 'You agree to defend, indemnify, and hold harmless Girlified, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys\' fees) arising out of or related to: (a) your use of the Platform; (b) your violation of these Terms; (c) your violation of any rights of a third party; or (d) any content you submit to the Platform.',
      },
    ],
  },
  {
    id: 'governing-law',
    number: '10',
    title: 'Governing Law and Dispute Resolution',
    subsections: [
      {
        title: 'Governing Law',
        blocks: [
          {
            type: 'paragraph',
            text: 'These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of laws principles.',
          },
        ],
      },
      {
        title: 'Dispute Resolution',
        blocks: [
          {
            type: 'paragraph',
            text: 'Any dispute, claim, or controversy arising out of or relating to these Terms or the Platform shall be resolved through good faith negotiations. If unresolved within thirty (30) days, either party may submit the dispute to binding arbitration in Lagos, Nigeria, under the Arbitration and Conciliation Act. The arbitration shall be conducted in English. Judgment on the arbitration award may be entered in any court of competent jurisdiction.',
          },
        ],
      },
      {
        title: 'Injunctive Relief',
        blocks: [
          {
            type: 'paragraph',
            text: 'Notwithstanding the foregoing, either party may seek injunctive or equitable relief in any court of competent jurisdiction to prevent actual or threatened infringement or misappropriation of intellectual property rights.',
          },
        ],
      },
    ],
  },
  {
    id: 'modifications',
    number: '11',
    title: 'Modifications to the Terms',
    blocks: [
      {
        type: 'paragraph',
        text: 'Girlified reserves the right to modify these Terms at any time in its sole discretion by posting updated Terms on the Platform. You will be deemed to have accepted the modified Terms upon your first use of the Platform following such update. If you do not agree to the new Terms, you must stop using the Platform and terminate your account.',
      },
    ],
  },
  {
    id: 'severability',
    number: '12',
    title: 'Severability and Waiver',
    blocks: [
      {
        type: 'paragraph',
        text: 'If any provision of these Terms is held invalid or unenforceable, that provision will be struck, and the remaining provisions will remain in full force and effect. No waiver of any breach or default hereunder shall be deemed a waiver of any subsequent breach or default.',
      },
    ],
  },
  {
    id: 'entire-agreement',
    number: '13',
    title: 'Entire Agreement',
    blocks: [
      {
        type: 'paragraph',
        text: 'These Terms, together with any policies or guidelines posted on the Platform, constitute the entire agreement between you and Girlified regarding your use of the Platform and supersede all prior or contemporaneous agreements, understandings, or representations, whether written or oral, regarding the subject matter herein.',
      },
    ],
  },
];

const TermsBlockRenderer = ({ block }: { block: TermsBlock }) => {
  if (block.type === 'paragraph') {
    return (
      <Text size="md" style={{ lineHeight: 1.75, color: MUTED }}>
        {block.text}
      </Text>
    );
  }

  return (
    <List spacing="sm" size="md" style={{ color: MUTED, lineHeight: 1.7 }}>
      {block.items.map((item) => (
        <List.Item key={item.slice(0, 48)}>{item}</List.Item>
      ))}
    </List>
  );
};

const TermsOfServicePage = () => {
  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#FBF6EE' }}>
      <Container size="md" pt={{ base: 120, sm: 140 }} pb={{ base: 56, sm: 80 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Stack gap={40} maw={720} mx="auto">
            <Stack gap="md" align="center" ta="center">
              <Title
                order={1}
                style={{
                  fontFamily: playfair.style.fontFamily,
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.5px',
                  color: INK,
                }}
              >
                Terms of Service
              </Title>
              <Text size="sm" c={MUTED}>
                Effective as published on the Girlified Platform. By using our services, you agree
                to these terms.
              </Text>
            </Stack>

            <Stack gap={48}>
              {termsSections.map((section) => (
                <Box
                  key={section.id}
                  id={section.id}
                  component="section"
                  style={{ scrollMarginTop: 100 }}
                >
                  <Stack gap="md">
                    <Title
                      order={2}
                      style={{
                        fontFamily: playfair.style.fontFamily,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: INK,
                        paddingBottom: 8,
                        borderBottom: `1px solid ${SLATE_BORDER}`,
                      }}
                    >
                      {section.number}. {section.title}
                    </Title>

                    {section.blocks?.map((block, i) => (
                      <TermsBlockRenderer key={`${section.id}-block-${i}`} block={block} />
                    ))}

                    {section.subsections?.map((sub) => (
                      <Stack key={sub.title} gap="sm" mt="sm">
                        <Text fw={700} size="md" c={INK}>
                          {sub.title}
                        </Text>
                        {sub.blocks.map((block, i) => (
                          <TermsBlockRenderer key={`${sub.title}-block-${i}`} block={block} />
                        ))}
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default TermsOfServicePage;
