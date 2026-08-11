'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Anchor, Box, Stack, Text } from '@mantine/core';
import { IconMapPin, IconPhone } from '@tabler/icons-react';
import {
  getMapBounds,
  MAP_CENTER,
  type RetailLocation,
  retailLocations,
} from '@/core/utilities/retailLocations';

const PINK = '#FF007F';
const INK = '#0C090B';
const MUTED = 'rgba(12, 9, 11, 0.68)';

const mapContainerStyle = { width: '100%', height: '100%' };

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
  scrollwheel: false,
  clickableIcons: false,
  mapTypeId: 'roadmap',
  colorScheme: 'LIGHT',
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ],
};

declare global {
  interface Window {
    gm_authFailure?: () => void;
  }
}

if (typeof window !== 'undefined') {
  window.gm_authFailure = () => undefined;
}

const AUTH_DIALOG_MARKERS = [
  "can't load Google Maps correctly",
  'Do you own this website',
] as const;

/** Remove Google's billing/auth modal (plain div overlay — no dialog role). */
function dismissGoogleMapsAuthDialog() {
  const ownershipLinks = Array.from(document.querySelectorAll('a')).filter((anchor) =>
    (anchor.textContent ?? '').includes('Do you own this website')
  );

  for (const link of ownershipLinks) {
    let node: HTMLElement | null = link;

    while (node && node !== document.body) {
      const text = node.textContent ?? '';
      const hasErrorCopy = AUTH_DIALOG_MARKERS.every((marker) => text.includes(marker));
      const ok = Array.from(node.querySelectorAll('button')).find(
        (button) => button.textContent?.trim() === 'OK'
      );
      // Dialog copy is short; avoid removing large map/page ancestors.
      const isCompactCard = text.length < 400;

      if (hasErrorCopy && ok && isCompactCard) {
        ok.click();
        node.remove();
        break;
      }

      node = node.parentElement;
    }
  }
}

function useSuppressGoogleMapsAuthDialog() {
  useEffect(() => {
    window.gm_authFailure = () => undefined;

    const style = document.createElement('style');
    style.setAttribute('data-girlified-maps', 'true');
    style.textContent = `
      .gm-err-container {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    dismissGoogleMapsAuthDialog();

    const observer = new MutationObserver(() => {
      dismissGoogleMapsAuthDialog();
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    const pollId = window.setInterval(dismissGoogleMapsAuthDialog, 250);
    const stopPollId = window.setTimeout(() => window.clearInterval(pollId), 20000);

    return () => {
      observer.disconnect();
      window.clearInterval(pollId);
      window.clearTimeout(stopPollId);
      style.remove();
    };
  }, []);
}

function pinIcon(active: boolean): google.maps.Symbol {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    scale: active ? 12 : 9,
    fillColor: PINK,
    fillOpacity: 1,
    strokeColor: '#ffffff',
    strokeWeight: active ? 3 : 2,
  };
}

function LocationInfoWindow({ location }: { location: RetailLocation }) {
  return (
    <Box
      p="md"
      style={{
        backgroundColor: 'white',
        border: '1px solid rgba(255, 0, 127, 0.2)',
        borderRadius: 12,
        boxShadow: '0 8px 32px rgba(12, 9, 11, 0.12)',
        maxWidth: 300,
        pointerEvents: 'auto',
      }}
    >
      <Stack gap="xs">
        <Text size="xs" fw={700} c={PINK} tt="uppercase" style={{ letterSpacing: '0.1em' }}>
          Location details
        </Text>
        <Text fw={800} size="md" c={INK} style={{ lineHeight: 1.25 }}>
          {location.name}
        </Text>
        <Box style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <Box pt={2}>
            <IconMapPin size={15} color={PINK} />
          </Box>
          <Text size="sm" c={MUTED} style={{ lineHeight: 1.5 }}>
            {location.address}
          </Text>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <Box pt={2}>
            <IconPhone size={15} color={PINK} />
          </Box>
          {/* <Text size="sm" c={MUTED}>
            <Anchor href={`tel:${location.phone}`} c={INK} underline="always" fw={600}>
              {location.phone}
            </Anchor>
          </Text> */}
        </Box>
      </Stack>
    </Box>
  );
}

function MapStatus({ message }: { message: string }) {
  return (
    <Box
      style={{
        height: '100%',
        borderRadius: 16,
        border: '1px solid rgba(255, 0, 127, 0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 0, 127, 0.06)',
        padding: 24,
      }}
    >
      <Text size="sm" c={MUTED} ta="center">
        {message}
      </Text>
    </Box>
  );
}

export default function LocationsMapView() {
  useSuppressGoogleMapsAuthDialog();

  const apiKey = (process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? '').replace(/^['"]|['"]$/g, '');
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'girlified-google-maps',
    googleMapsApiKey: apiKey,
  });

  const [hoveredLocation, setHoveredLocation] = useState<RetailLocation | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const center = useMemo(() => ({ lat: MAP_CENTER[0], lng: MAP_CENTER[1] }), []);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    const [[south, west], [north, east]] = getMapBounds();
    const bounds = new google.maps.LatLngBounds(
      { lat: south, lng: west },
      { lat: north, lng: east }
    );
    mapInstance.fitBounds(bounds, 40);
    // Dialog often appears right after the map finishes initializing.
    window.setTimeout(dismissGoogleMapsAuthDialog, 0);
    window.setTimeout(dismissGoogleMapsAuthDialog, 500);
    window.setTimeout(dismissGoogleMapsAuthDialog, 1500);
  }, []);

  const handleHover = (location: RetailLocation) => {
    setHoveredLocation(location);
    setActiveId(location.id);
  };

  const handleLeave = () => {
    setHoveredLocation(null);
    setActiveId(null);
  };

  const handleSelect = (location: RetailLocation) => {
    setHoveredLocation(location);
    setActiveId(location.id);
  };

  if (!apiKey) {
    return (
      <MapStatus message="Google Maps API key is missing. Set NEXT_PUBLIC_GOOGLE_MAP_API_KEY in your environment." />
    );
  }

  if (loadError) {
    return (
      <MapStatus message="Unable to load Google Maps. Check your API key and Maps JavaScript API access." />
    );
  }

  if (!isLoaded) {
    return <MapStatus message="Loading map..." />;
  }

  return (
    <Box
      className="girlified-locations-map"
      style={{
        position: 'relative',
        height: '100%',
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid rgba(107, 107, 107, 0.357)',
      }}
      onMouseLeave={handleLeave}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        options={mapOptions}
        onLoad={onLoad}
      >
        {retailLocations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            icon={pinIcon(activeId === location.id)}
            onMouseOver={() => handleHover(location)}
            onClick={() => handleSelect(location)}
            zIndex={activeId === location.id ? 2 : 1}
          />
        ))}
      </GoogleMap>

      {hoveredLocation && (
        <Box
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <LocationInfoWindow location={hoveredLocation} />
        </Box>
      )}
    </Box>
  );
}
