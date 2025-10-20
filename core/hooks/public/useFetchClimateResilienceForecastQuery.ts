import { weatherApi } from '@/core/api/sdk';
import { useAppContext } from '@/core/context';
import { useQuery } from '@tanstack/react-query';

export default function useFetchClimateResilienceForecastQuery() {
  const { climateResilienceForecast, setClimateResilienceForecast } = useAppContext();

  return useQuery({
    queryKey: ['get-climate-resilience-forecast'],
    queryFn: async () => {
      if (climateResilienceForecast?.length > 0) {
        return climateResilienceForecast;
      }

      const response = await weatherApi.weatherControllerFetchClimateResilienceForecast();

      const data = response.data;

      setClimateResilienceForecast(data);

      return data;
    },
  });
}
