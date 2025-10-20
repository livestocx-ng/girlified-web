'use client';

import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import { IconArrowDown } from '@tabler/icons-react';
import { BackgroundImage, Box, Button, Flex, Image, Title } from '@mantine/core';

const HomeHeader = ({ documentRef }: { documentRef: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <Box px={0}>
      <BackgroundImage src="/images/image_home_3.jpg">
        <Box w="100%" h="100vh">
          <Flex h="100%" px={20} pb={{md: 140, base: 200, sm: 200}} align="end" justify="end" direction="column">
            <Flex direction="column">
              <Title order={1} size={60} c="white">
                AI-Powered
                <br />
                Climate Resilience
              </Title>
              <Button
                h={50}
                mt={20}
                w={150}
                fw={600}
                variant="filled"
                leftSection={<IconArrowDown size={16} />}
                onClick={() => {
                  documentRef?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
              <Flex mt={20} gap={20}>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1, }}>
                <Link
                  href="https://apps.apple.com/ng/app/livestocx/id6738842775?platform=iphone"
                  target="_blank"
                >
                  <Image
                    src="/icons/icon_appstore.svg"
                    alt="App Store"
                    w={{ base: 140, sm: 140, md: 160 }}
                      h="auto"
                      fit="contain"
                    />
                </Link>
                  </motion.div>
                <Link
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.livestocx.livestocx_mobile"
                >
                  <Image
                    src="/icons/icon_playstore.svg"
                    alt="Google Play"
                    w={{ base: 140, sm: 140, md: 160 }}
                    h="auto"
                    fit="contain"
                  />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default HomeHeader;
