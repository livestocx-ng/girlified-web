import React from 'react';
import { AspectRatio, Container, Paper, Stack, Text, Title } from '@mantine/core';

const FeaturedSection = () => {
  const videoUrl =
    'https://www.dw.com/en/period-poverty-how-northern-nigeria-is-tackling-stigma/video-73931799';

  const [previewSrc, setPreviewSrc] = React.useState<string>('/images/video_cover.jpg');

  React.useEffect(() => {
    let cancelled = false;
    try {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.src = videoUrl;
      video.muted = true;
      video.playsInline = true;

      const handleLoaded = () => {
        const captureTime = Math.min(Math.max(video.duration * 0.25, 0.1), 5);
        const onSeeked = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth || 1280;
          canvas.height = video.videoHeight || 720;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            try {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
              if (!cancelled) setPreviewSrc(dataUrl);
            } catch (_) {
              // ignore CORS taint errors and keep fallback image
            }
          }
          cleanup();
        };
        const cleanup = () => {
          video.removeEventListener('seeked', onSeeked);
          video.removeEventListener('loadedmetadata', handleLoaded);
        };
        video.addEventListener('seeked', onSeeked);
        try {
          video.currentTime = captureTime;
        } catch (_) {
          cleanup();
        }
      };

      video.addEventListener('loadedmetadata', handleLoaded);
    } catch (_) {
      // fallback to default preview image
    }

    return () => {
      cancelled = true;
    };
  }, [videoUrl]);

  return (
    <Container size="xl" py={{ base: 48, sm: 72 }}>
      <Paper
        radius="xl"
        p={{ base: 20, sm: 28 }}
        shadow="sm"
        withBorder
        style={{ borderColor: '#FF4FA9' }}
      >
        <Stack align="center" gap={14}>
          <Title order={2} ta="center" fz={{ base: 30, sm: 40 }} c="#3B2B36">
            We got featured!
          </Title>
          <Text ta="center" c="dimmed" fz={{ base: 'sm', sm: 'md' }}>
            Our work, featured by Deutsche Welle (DW), where our co-founder discussed our core
            mission at the heart of Girlified.
          </Text>
          <AspectRatio ratio={16 / 9} w="100%">
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: 16,
                overflow: 'hidden',
                display: 'block',
              }}
            >
              <img
                src={previewSrc}
                alt="Video preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.12), rgba(0,0,0,0.12))',
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 9999,
                    background: '#FF4FA9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(255,79,169,0.35)',
                  }}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          </AspectRatio>
        </Stack>
      </Paper>
    </Container>
  );
};

export default FeaturedSection;
