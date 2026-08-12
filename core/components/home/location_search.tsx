'use client';

import { FormEvent, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { IconMapPin, IconSearch } from '@tabler/icons-react';
import { createPortal } from 'react-dom';
import { Box, Group, Stack, Text, TextInput, UnstyledButton } from '@mantine/core';
import { MAP_FOCUS_EVENT, type MapFocusEventDetail } from '@/core/utilities/retailLocations';

const PLACES_LIBRARIES: 'places'[] = ['places'];

/** Approximate geographic bounds for Nigeria. */
const NIGERIA_BOUNDS = {
  south: 4.2,
  west: 2.6,
  north: 13.9,
  east: 14.7,
};

const isInNigeria = (lat: number, lng: number) =>
  lat >= NIGERIA_BOUNDS.south &&
  lat <= NIGERIA_BOUNDS.north &&
  lng >= NIGERIA_BOUNDS.west &&
  lng <= NIGERIA_BOUNDS.east;

const getNigeriaAutocompleteRequest = (
  input: string,
  sessionToken?: google.maps.places.AutocompleteSessionToken | null
): google.maps.places.AutocompletionRequest => ({
  input,
  componentRestrictions: { country: 'ng' },
  types: ['geocode'],
  locationRestriction: NIGERIA_BOUNDS,
  sessionToken: sessionToken ?? undefined,
});

type PlaceSuggestion = {
  placeId: string;
  description: string;
  mainText: string;
  secondaryText: string;
};

type DropdownRect = {
  top: number;
  left: number;
  width: number;
};

function focusMapOnPlace(detail: MapFocusEventDetail) {
  const trimmed = detail.query.trim();
  if (!trimmed) {
    return;
  }

  const url = new URL(window.location.href);
  url.searchParams.set('area', trimmed);
  if (typeof detail.lat === 'number' && typeof detail.lng === 'number') {
    url.searchParams.set('lat', String(detail.lat));
    url.searchParams.set('lng', String(detail.lng));
  } else {
    url.searchParams.delete('lat');
    url.searchParams.delete('lng');
  }
  url.hash = 'locations';
  window.history.replaceState({}, '', url.toString());

  window.dispatchEvent(
    new CustomEvent<MapFocusEventDetail>(MAP_FOCUS_EVENT, {
      detail: { ...detail, query: trimmed },
    })
  );

  window.setTimeout(() => {
    document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

export default function LocationSearch() {
  const apiKey = (process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? '').replace(/^['"]|['"]$/g, '');
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'girlified-google-maps',
    googleMapsApiKey: apiKey,
    libraries: PLACES_LIBRARIES,
  });

  const [locationQuery, setLocationQuery] = useState('');
  const [suggestions, setSuggestions] = useState<PlaceSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isResolving, setIsResolving] = useState(false);
  const [dropdownRect, setDropdownRect] = useState<DropdownRect | null>(null);
  const [portalReady, setPortalReady] = useState(false);

  const autocompleteService = useRef<google.maps.places.AutocompleteService | null>(null);
  const placesService = useRef<google.maps.places.PlacesService | null>(null);
  const sessionToken = useRef<google.maps.places.AutocompleteSessionToken | null>(null);
  const attributionNode = useRef<HTMLDivElement | null>(null);
  const inputWrapRef = useRef<HTMLDivElement | null>(null);
  const debounceRef = useRef<number | null>(null);

  useEffect(() => {
    setPortalReady(true);

    const styleId = 'girlified-place-suggestion';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .girlified-place-suggestion:hover {
          background-color: rgba(211, 211, 211, 0.28) !important;
          padding-left: 18px !important;
          transform: translateX(2px);
        }

        .girlified-place-suggestion:active {
          background-color: rgba(211, 211, 211, 0.28) !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded || !window.google?.maps?.places) {
      return;
    }

    autocompleteService.current = new google.maps.places.AutocompleteService();
    sessionToken.current = new google.maps.places.AutocompleteSessionToken();

    if (attributionNode.current) {
      placesService.current = new google.maps.places.PlacesService(attributionNode.current);
    }
  }, [isLoaded]);

  const updateDropdownRect = () => {
    const node = inputWrapRef.current;
    if (!node) {
      return;
    }
    const rect = node.getBoundingClientRect();
    setDropdownRect({
      top: rect.bottom + 6,
      left: rect.left,
      width: rect.width,
    });
  };

  useLayoutEffect(() => {
    if (!showSuggestions || suggestions.length === 0) {
      return;
    }

    updateDropdownRect();
    window.addEventListener('resize', updateDropdownRect);
    window.addEventListener('scroll', updateDropdownRect, true);

    return () => {
      window.removeEventListener('resize', updateDropdownRect);
      window.removeEventListener('scroll', updateDropdownRect, true);
    };
  }, [showSuggestions, suggestions.length, locationQuery]);

  useEffect(() => {
    if (!isLoaded || !autocompleteService.current) {
      return;
    }

    const query = locationQuery.trim();
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current);
    }

    debounceRef.current = window.setTimeout(() => {
      autocompleteService.current?.getPlacePredictions(
        getNigeriaAutocompleteRequest(query, sessionToken.current),
        (predictions, status) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK || !predictions) {
            setSuggestions([]);
            return;
          }

          setSuggestions(
            predictions.slice(0, 5).map((prediction) => ({
              placeId: prediction.place_id,
              description: prediction.description,
              mainText: prediction.structured_formatting.main_text,
              secondaryText: prediction.structured_formatting.secondary_text,
            }))
          );
        }
      );
    }, 250);

    return () => {
      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
      }
    };
  }, [isLoaded, locationQuery]);

  const helperText = useMemo(() => {
    if (loadError) {
      return 'Google Places could not load. Check your API key and Places API access.';
    }
    if (!apiKey) {
      return 'Google Maps API key is missing.';
    }
    if (!isLoaded) {
      return 'Loading Google location suggestions...';
    }
    return 'Search areas in Nigeria to jump to partners on the map.';
  }, [apiKey, isLoaded, loadError]);

  const resolvePlaceAndFocus = (placeId: string, label: string) => {
    if (!placesService.current) {
      setSearchError('Google Places is still loading. Try again in a moment.');
      return;
    }

    setIsResolving(true);
    setSearchError(null);

    placesService.current.getDetails(
      {
        placeId,
        fields: ['geometry', 'name', 'formatted_address'],
        sessionToken: sessionToken.current ?? undefined,
      },
      (place, status) => {
        setIsResolving(false);
        sessionToken.current = new google.maps.places.AutocompleteSessionToken();

        if (status !== google.maps.places.PlacesServiceStatus.OK || !place?.geometry?.location) {
          setSearchError('Could not resolve that location. Try another suggestion.');
          return;
        }

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        if (!isInNigeria(lat, lng)) {
          setSearchError('Please choose a location in Nigeria.');
          return;
        }

        const query = place.formatted_address || place.name || label;

        setLocationQuery(query);
        setShowSuggestions(false);
        focusMapOnPlace({ query, lat, lng });
      }
    );
  };

  const handleSuggestionSelect = (suggestion: PlaceSuggestion) => {
    setLocationQuery(suggestion.description);
    setShowSuggestions(false);
    resolvePlaceAndFocus(suggestion.placeId, suggestion.description);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = locationQuery.trim();
    if (!query) {
      setSearchError('Enter an area to search.');
      return;
    }

    if (!isLoaded || !autocompleteService.current || !placesService.current) {
      setSearchError('Google Places is still loading. Try again in a moment.');
      return;
    }

    const exact = suggestions.find(
      (item) => item.description.toLowerCase() === query.toLowerCase()
    );
    if (exact) {
      resolvePlaceAndFocus(exact.placeId, exact.description);
      return;
    }

    setIsResolving(true);
    autocompleteService.current.getPlacePredictions(
      getNigeriaAutocompleteRequest(query, sessionToken.current),
      (predictions, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK || !predictions?.[0]) {
          setIsResolving(false);
          setSearchError('No locations found in Nigeria. Try a nearby city or area.');
          return;
        }

        resolvePlaceAndFocus(predictions[0].place_id, predictions[0].description);
      }
    );
  };

  const suggestionsDropdown =
    portalReady && showSuggestions && suggestions.length > 0 && dropdownRect
      ? createPortal(
          <Box
            style={{
              position: 'fixed',
              top: dropdownRect.top,
              left: dropdownRect.left,
              width: dropdownRect.width,
              zIndex: 4000,
              backgroundColor: 'rgba(12, 9, 11, 0.45)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              borderRadius: 12,
              boxShadow: '0 10px 28px rgba(12, 9, 11, 0.28)',
              backdropFilter: 'blur(20px) saturate(140%)',
              WebkitBackdropFilter: 'blur(20px) saturate(140%)',
              overflow: 'hidden',
            }}
          >
            {suggestions.map((suggestion) => (
              <UnstyledButton
                key={suggestion.placeId}
                className="girlified-place-suggestion"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => handleSuggestionSelect(suggestion)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px 14px',
                  textAlign: 'left',
                  color: 'white',
                  backgroundColor: 'transparent',
                  transition:
                    'background-color 180ms ease, padding-left 180ms ease, transform 180ms ease',
                }}
              >
                <Text size="sm" fw={700} style={{ lineHeight: 1.3, color: 'white' }}>
                  {suggestion.mainText}
                </Text>
                {suggestion.secondaryText ? (
                  <Text size="xs" style={{ lineHeight: 1.4, color: 'rgba(255,255,255,0.7)' }}>
                    {suggestion.secondaryText}
                  </Text>
                ) : null}
              </UnstyledButton>
            ))}
          </Box>,
          document.body
        )
      : null;

  return (
    <Box
      component="form"
      onSubmit={handleSearchSubmit}
      p={{ base: 'md', sm: 'lg' }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.14)',
        border: '1px solid rgba(255, 255, 255, 0.28)',
        borderRadius: 16,
        boxShadow: '0 12px 40px rgba(12, 9, 11, 0.22)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        position: 'relative',
        zIndex: 30,
      }}
    >
      <div ref={attributionNode} style={{ display: 'none' }} aria-hidden />

      <Stack gap="sm">
        <Text fw={800} size="lg" style={{ lineHeight: 1.25, color: 'white' }}>
          Search your location
        </Text>
        <Text size="sm" style={{ lineHeight: 1.55, color: 'rgba(255,255,255,0.78)' }}>
          {helperText}
        </Text>

        <Group gap="xs" align="flex-start" wrap="nowrap">
          <Box ref={inputWrapRef} style={{ flex: 1, position: 'relative' }}>
            <TextInput
              value={locationQuery}
              onChange={(event) => {
                setLocationQuery(event.currentTarget.value);
                setSearchError(null);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                window.setTimeout(() => setShowSuggestions(false), 150);
              }}
              placeholder="Search in Nigeria (e.g. Jos, Barkin Ladi)"
              leftSection={<IconSearch size={16} color="rgba(255,255,255,0.75)" />}
              radius="xl"
              size="md"
              disabled={!apiKey || Boolean(loadError)}
              styles={{
                input: {
                  borderColor: 'rgba(255, 255, 255, 0.28)',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: 'white',
                  '::placeholder': {
                    color: 'rgba(255, 255, 255, 0.55)',
                  },
                },
              }}
              aria-label="Search your location on the map"
              aria-autocomplete="list"
            />
          </Box>

          {/* <UnstyledButton
            type="submit"
            disabled={isResolving || !apiKey || Boolean(loadError)}
            style={{
              flexShrink: 0,
              height: 42,
              padding: '0 18px',
              borderRadius: 999,
              backgroundColor: 'rgba(255, 0, 127, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: 'white',
              fontWeight: 700,
              fontSize: 14,
              opacity: isResolving || !apiKey || Boolean(loadError) ? 0.7 : 1,
            }}
          >
            {isResolving ? '...' : 'Search'}
          </UnstyledButton> */}
        </Group>

        {searchError && (
          <Text size="xs" fw={600} style={{ color: '#FFB3D4' }}>
            {searchError}
          </Text>
        )}
      </Stack>

      {suggestionsDropdown}
    </Box>
  );
}
