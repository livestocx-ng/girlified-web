import React, { createContext, useContext } from 'react';
import { MantineTheme, useMantineTheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { AccountInfo, ListItemInfo } from '../sdk/account';
import { AvailableStateInfo } from '../sdk/auth';
import { TestimonialInfo } from '../sdk/communication';
import { ProductInfo } from '../sdk/marketplace';
import {
  ChargeResponse,
  PaymentMethod,
  PremiumSubscriptionPlanDescription,
  ProductUploadSubscriptionPlanInfo,
  PromotionPlanDescription,
  VendorInfo,
} from '../sdk/vendor';
import { ClimateResilienceForecastInfo } from '../sdk/public';

interface AppContextProps {
  authToken: string;
  listItems: ListItemInfo[];
  productInfo: ProductInfo | null;
  marketplaceProducts: ProductInfo[];
  theme: MantineTheme | null;
  vendorInfo: VendorInfo | null;
  paymentMethods: PaymentMethod[];
  accountInfo: AccountInfo | null;
  testimonials: TestimonialInfo[];
  climateResilienceForecast: ClimateResilienceForecastInfo[];
  currentSubscriptionPlanId: number;
  chargeResponse: ChargeResponse | null;
  availableStates: AvailableStateInfo[];
  marketPlaceProductsTotalPages: number;
  marketPlaceProductsHasNextPage: boolean;
  marketPlaceProductsCurrentPage: number;
  promotionPlans: PromotionPlanDescription[];
  setAuthToken: (authToken: string) => void;
  setMarketPlaceProductsTotalPages: (authToken: number) => void;
  setListItems: (values: ListItemInfo[]) => void;
  setPaymentMethods: (methods: PaymentMethod[]) => void;
  setCurrentSubscriptionPlanId: (planId: number) => void;
  setProductInfo: (productInfo: ProductInfo) => void;
  setMarketPlaceProducts: (authToken: ProductInfo[]) => void;
  setMarketPlaceProductsCurrentPage: (value: number) => void;
  setMarketPlaceProductsHasNextPage: (value: boolean) => void;
  setAvailableStates: (availableStates: AvailableStateInfo[]) => void;
  setPromotionPlans: (plans: PromotionPlanDescription[]) => void;
  setVendorInfo: (vendorInfo: VendorInfo) => void;
  setChargeResponse: (chargeResponse: ChargeResponse | null) => void;
  setAccountInfo: (accountInfo: AccountInfo) => void;
  premiumSubscriptionPlans: PremiumSubscriptionPlanDescription[];
  productUploadSubscriptionPlan: ProductUploadSubscriptionPlanInfo | null;
  setTestimonials: (data: TestimonialInfo[]) => void;
  setPremiumSubscriptionPlans: (data: PremiumSubscriptionPlanDescription[]) => void;
  setProductUploadSubscriptionPlan: (data: ProductUploadSubscriptionPlanInfo) => void;
  setClimateResilienceForecast: (climateResilienceForecast: ClimateResilienceForecastInfo[]) => void;
}

export const AppContext = createContext<AppContextProps>({
  theme: null,
  authToken: '',
  listItems: [],
  productInfo: null,
  vendorInfo: null,
  testimonials: [],
  promotionPlans: [],
  availableStates: [],
  accountInfo: null,
  chargeResponse: null,
  paymentMethods: [],
  marketplaceProducts: [],
  climateResilienceForecast: [],
  currentSubscriptionPlanId: 0,
  premiumSubscriptionPlans: [],
  marketPlaceProductsCurrentPage: 1,
  marketPlaceProductsHasNextPage: false,
  productUploadSubscriptionPlan: null,
  marketPlaceProductsTotalPages: 0,
  setClimateResilienceForecast: () => {},
  setListItems: () => {},
  setProductInfo: () => {},
  setVendorInfo: () => {},
  setAuthToken: () => {},
  setAccountInfo: () => {},
  setTestimonials: () => {},
  setPaymentMethods: () => {},
  setPromotionPlans: () => {},
  setChargeResponse: () => {},
  setAvailableStates: () => {},
  setMarketPlaceProducts: () => {},
  setPremiumSubscriptionPlans: () => {},
  setCurrentSubscriptionPlanId: () => {},
  setProductUploadSubscriptionPlan: () => {},
  setMarketPlaceProductsTotalPages: () => {},
  setMarketPlaceProductsCurrentPage: () => {},
  setMarketPlaceProductsHasNextPage: () => {},
});

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();

  const [authToken, setAuthToken] = useLocalStorage<string>({
    key: 'authToken',
  });

  const [testimonials, setTestimonials] = useLocalStorage<TestimonialInfo[]>({
    key: 'testimonials',
    defaultValue: [],
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [accountInfo, setAccountInfo] = useLocalStorage<AccountInfo>({
    defaultValue: undefined,
    key: 'accountInfo',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [productUploadSubscriptionPlan, setProductUploadSubscriptionPlan] =
    useLocalStorage<ProductUploadSubscriptionPlanInfo>({
      defaultValue: undefined,
      key: 'productUploadSubscriptionPlan',
      deserialize(value) {
        return JSON.parse(value ?? '');
      },
    });

  const [premiumSubscriptionPlans, setPremiumSubscriptionPlans] = useLocalStorage<
    PremiumSubscriptionPlanDescription[]
  >({
    defaultValue: [],
    key: 'premiumSubscriptionPlans',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [vendorInfo, setVendorInfo] = useLocalStorage<VendorInfo>({
    defaultValue: undefined,
    key: 'vendorInfo',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [availableStates, setAvailableStates] = useLocalStorage<AvailableStateInfo[]>({
    defaultValue: [],
    key: 'availableStates',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [chargeResponse, setChargeResponse] = useLocalStorage<ChargeResponse | null>({
    defaultValue: undefined,
    key: 'chargeResponse',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [paymentMethods, setPaymentMethods] = useLocalStorage<PaymentMethod[]>({
    defaultValue: [],
    key: 'paymentMethods',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [currentSubscriptionPlanId, setCurrentSubscriptionPlanId] = useLocalStorage<number>({
    defaultValue: 0,
    key: 'currentSubscriptionPlanId',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [marketplaceProducts, setMarketPlaceProducts] = useLocalStorage<ProductInfo[]>({
    defaultValue: [],
    key: 'marketplaceProducts',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [marketPlaceProductsTotalPages, setMarketPlaceProductsTotalPages] = useLocalStorage<number>({
    defaultValue: 0,
    key: 'marketPlaceProductsTotalPages',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [promotionPlans, setPromotionPlans] = useLocalStorage<PromotionPlanDescription[]>({
    defaultValue: [],
    key: 'promotionPlans',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  const [marketPlaceProductsCurrentPage, setMarketPlaceProductsCurrentPage] =
    useLocalStorage<number>({
      defaultValue: 1,
      key: 'marketPlaceProductsCurrentPage',
      deserialize(value) {
        return JSON.parse(value ?? '');
      },
    });

  const [listItems, setListItems] =
    useLocalStorage<ListItemInfo[]>({
      defaultValue: [],
      key: 'listItems',
      deserialize(value) {
        return JSON.parse(value ?? '');
      },
    });

  const [marketPlaceProductsHasNextPage, setMarketPlaceProductsHasNextPage] =
    useLocalStorage<boolean>({
      defaultValue: false,
      key: 'marketPlaceProductsHasNextPage',
      deserialize(value) {
        return JSON.parse(value ?? '');
      },
    });

  const [productInfo, setProductInfo] = useLocalStorage<ProductInfo | null>({
    defaultValue: null,
    key: 'productInfo',
    deserialize(value) {
        return JSON.parse(value ?? '');
      },
    });

  const [climateResilienceForecast, setClimateResilienceForecast] = useLocalStorage<ClimateResilienceForecastInfo[]>({
    defaultValue: [],
    key: 'climateResilienceForecast',
    deserialize(value) {
      return JSON.parse(value ?? '');
    },
  });

  return (
    <AppContext.Provider
      value={{
        theme,
        productInfo,
        setProductInfo,
        listItems,
        authToken,
        vendorInfo,
        accountInfo,
        setListItems,
        testimonials,
        setAuthToken,
        setVendorInfo,
        setAccountInfo,
        chargeResponse,
        paymentMethods,
        promotionPlans,
        setTestimonials,
        availableStates,
        setPaymentMethods,
        setChargeResponse,
        setPromotionPlans,
        setAvailableStates,
        marketplaceProducts,
        setMarketPlaceProducts,
        premiumSubscriptionPlans,
        climateResilienceForecast,
        currentSubscriptionPlanId,
        setPremiumSubscriptionPlans,
        setClimateResilienceForecast,
        setCurrentSubscriptionPlanId,
        productUploadSubscriptionPlan,
        marketPlaceProductsTotalPages,
        marketPlaceProductsCurrentPage,
        marketPlaceProductsHasNextPage,
        setMarketPlaceProductsTotalPages,
        setProductUploadSubscriptionPlan,
        setMarketPlaceProductsCurrentPage,
        setMarketPlaceProductsHasNextPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
