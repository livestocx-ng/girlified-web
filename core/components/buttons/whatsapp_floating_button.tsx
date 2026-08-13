'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Box } from '@mantine/core';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const WHATSAPP_ORDER_URL =
  'https://api.whatsapp.com/send?phone=+2348118178799&text=Hi+there%2C+I+would+like+to+order+some+Girlified+Sanitary+Pads';

const BUTTON_SIZE = 46;
const FLOAT_DURATION = 2.8;

const syncedFloat = {
  y: [0, -6, 0],
  transition: {
    duration: FLOAT_DURATION,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

const girlWalk = {
  y: [0, -6, 0],
  x: [0, 4, 0],
  rotate: [0, 4, -4, 0],
  transition: {
    duration: FLOAT_DURATION,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export function WhatsAppFloatingButton() {
  const pathname = usePathname();
  const [liftAmount, setLiftAmount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateOffset = () => {
      const footer = document.getElementById('app-footer') || document.querySelector('footer');
      if (!footer) {
        setLiftAmount(0);
        return;
      }

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const overlap = windowHeight - rect.top;

      if (overlap > 0) {
        setLiftAmount(overlap);
      } else {
        setLiftAmount(0);
      }
    };

    const handleScrollOrResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateOffset);
    };

    const footerElement = document.getElementById('app-footer') || document.querySelector('footer');

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    updateOffset();

    let observer: IntersectionObserver | null = null;
    if (footerElement && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(() => {
        updateOffset();
      });
      observer.observe(footerElement);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      cancelAnimationFrame(animationFrameId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  if (pathname === '/bnpl' || pathname?.startsWith('/bnpl/')) {
    return null;
  }

  return (
    <motion.div
      animate={{
        y: -liftAmount,
        scale: liftAmount > 0 ? 1.04 : 1,
      }}
      transition={{
        y: { type: 'spring', stiffness: 350, damping: 28 },
        scale: { duration: 0.25, ease: 'easeOut' },
      }}
      style={{
        position: 'fixed',
        bottom: 'max(24px, env(safe-area-inset-bottom, 0px))',
        right: 'max(24px, env(safe-area-inset-right, 0px))',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <motion.span
        aria-hidden
        animate={girlWalk}
        style={{
          fontSize: 26,
          lineHeight: 1,
          display: 'block',
          filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.12))',
          userSelect: 'none',
        }}
      >
        👧🏻
      </motion.span>

      <Box style={{ position: 'relative', width: BUTTON_SIZE, height: BUTTON_SIZE }}>
        {[0, 1].map((index) => (
          <motion.span
            key={index}
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              backgroundColor: '#25D366',
              pointerEvents: 'none',
            }}
            // animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeOut',
              delay: index * 1.2,
            }}
          />
        ))}

        <motion.a
          href={WHATSAPP_ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order Girlified Sanitary Pads on WhatsApp"
          animate={syncedFloat}
          whileHover={{
            scale: 1.08,
            boxShadow: '0 8px 28px rgba(37, 211, 102, 0.55)',
          }}
          whileTap={{ scale: 0.94 }}
          style={{
            position: 'relative',
            zIndex: 1,
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: '50%',
            backgroundColor: '#25D366',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
            textDecoration: 'none',
          }}
        >
          <motion.span
            style={{ display: 'flex' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: FLOAT_DURATION,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <IconBrandWhatsapp size={26} stroke={1.5} />
          </motion.span>
        </motion.a>
      </Box>
    </motion.div>
  );
}
