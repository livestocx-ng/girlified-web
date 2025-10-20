import { useQuery } from '@tanstack/react-query';
import { productApi } from '@/core/api/sdk';
import { useAppContext } from '@/core/context';
import { ProductInfo } from '@/core/sdk/marketplace';

export default function useFetchProductInfoQuery(payload: {
  productId: string;
  productInfo: ProductInfo | null;
}) {
  const { setProductInfo } = useAppContext();

  return useQuery({
    queryKey: ['fetch-product-info'],
    queryFn: async () => {
      if (payload.productInfo !== null) {
        return null;
      }

      const response = await productApi.marketplaceControllerFetchProductDescription(
        payload.productId
      );

      return setProductInfo(response.data);
    },
  });
}
