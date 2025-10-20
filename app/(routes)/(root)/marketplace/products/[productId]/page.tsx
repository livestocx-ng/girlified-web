'use client';

import React, { useEffect } from 'react';
import { IconMessage, IconPhone } from '@tabler/icons-react';
import { Box, Button, Divider, Flex, List, Stack, Text, Title } from '@mantine/core';
import ProductDescriptionHeader from '@/core/components/headers/product_description_header';
import ProductMediaSlider from '@/core/components/sliders/product_media_slider';
import { useAppContext } from '@/core/context';
import useFetchProductInfoQuery from '@/core/hooks/marketplace/useFetchProductInfoQuery';
import { priceFormatter } from '@/core/middlewares';

interface PageProps {
  params: Promise<{
    productId: string;
  }>;
}

const ProductDescriptionPage = ({ params }: PageProps) => {
  const { productId } = React.use(params);

  const { productInfo } = useAppContext();

  const { refetch } = useFetchProductInfoQuery({
    productId,
    productInfo,
  });

  useEffect(() => {
    if (productInfo === null) {
      refetch();
    }
  }, [productInfo, productId]);

  return (
    <Box>
      <ProductDescriptionHeader />
      <Flex w="100%" gap={{ base: 0, sm: 0, md: 20 }}>
        <Flex w="100%" direction={{ base: 'column', sm: 'column', md: 'row' }}>
          <Box w={{ sm: '100%', md: '80%' }}>
            <ProductMediaSlider productInfo={productInfo!} />
          </Box>

          <Stack w={{ sm: '80%', md: '80%' }} px={{ base: 10, sm: 10, md: 20 }} mt={20}>
            <Box
              w="100%"
              style={{ border: '1px solid #d5d5d5', borderRadius: '10px', padding: '10px' }}
            >
              <Title order={4}>{productInfo?.name}</Title>
              <Stack gap={0} mb={10}>
                <Title order={6}>Description</Title>
                <Text>{productInfo?.description}</Text>
              </Stack>
              <Divider />
              
              <Stack gap={0} mb={10}>
                <Title order={6}>Price</Title>
              <Flex gap={10}>
                <Title order={6}>
                  {priceFormatter(parseFloat(productInfo?.price.toString() || '0') - 1000)}
                </Title>
                <Title order={6}>-</Title>
                <Title order={6}>
                  {priceFormatter(parseFloat(productInfo?.discountPrice.toString() || '0') - 1000)}
                </Title>
                </Flex>
              </Stack>

              <Divider />

              <Flex gap={10} mt={10}>
                <Button
                  fullWidth
                  style={{ backgroundColor: '#111111' }}
                  leftSection={<IconPhone size={16} />}
                  // onClick={() => window.location.href = `tel:${productInfo?.seller?.phoneNumber}`}
                >
                  Call Seller
                </Button>

                <Button
                  fullWidth
                  style={{ backgroundColor: '#111111' }}
                  leftSection={<IconMessage size={16} />}
                  onClick={() => {
                    /* Add chat functionality */
                  }}
                >
                  Chat Seller
                </Button>
              </Flex>
            </Box>
            <Box
              w="100%"
              style={{ border: '1px solid #d5d5d5', borderRadius: '10px', padding: '10px' }}
            >
              <Stack pr={15}>
                <Title order={5} c="red">
                  Safety Tips
                </Title>
                <List c="red">
                  <List.Item>
                    If you wish to meet a seller, meet in a place where there are other people
                    around and where you can easily leave if you feel uncomfortable.
                  </List.Item>
                  <List.Item>Be wary of sellers who ask for money upfront.</List.Item>
                  <List.Item>
                    Make sure the goods are what you expected and that they are in satisfactory
                    condition before you pay anything.
                  </List.Item>
                  <List.Item>
                    Review any paperwork carefully and don't pay until you are satisfied.
                  </List.Item>
                </List>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductDescriptionPage;
