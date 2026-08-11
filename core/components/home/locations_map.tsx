'use client';

import { useEffect, useState, type ComponentType } from 'react';
import { Box } from '@mantine/core';

declare global {
  interface Window {
    gm_authFailure?: () => void;
  }
}

if (typeof window !== 'undefined') {
  window.gm_authFailure = () => undefined;
}

function MapLoading() {
  return (
    <Box
      style={{
        height: '100%',
        minHeight: 360,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 0, 127, 0.06)',
        border: '1px solid rgba(255, 0, 127, 0.16)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box component="span" style={{ fontSize: 14, color: 'rgba(12, 9, 11, 0.55)' }}>
        Loading map...
      </Box>
    </Box>
  );
}

export default function LocationsMap() {
  const [MapView, setMapView] = useState<ComponentType | null>(null);

  useEffect(() => {
    window.gm_authFailure = () => undefined;
    void import('./locations_map_view').then((mod) => {
      setMapView(() => mod.default);
    });
  }, []);

  if (!MapView) {
    return <MapLoading />;
  }

  return <MapView />;
}
