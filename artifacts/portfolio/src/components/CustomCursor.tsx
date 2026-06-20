import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

type CursorState = 'default' | 'link' | 'card' | 'detail' | 'download' | 'projects' | 'send';

const SPRING = { stiffness: 500, damping: 38, mass: 0.5 };
const SLOW_SPRING = { stiffness: 200, damping: 28, mass: 0.8 };

const CURSOR_CONFIG: Record<CursorState, {
  label: string | null;
  dotColor: string;
  dotSize: number;
  ringSize: number;
  ringBorder: string;
  ringBg: string;
}> = {
  default:  { label: null,  dotColor: '#3b82f6', dotSize: 8,  ringSize: 36, ringBorder: '1.5px solid rgba(59,130,246,0.5)',  ringBg: 'rgba(59,130,246,0.12)' },
  link:     { label: '🔗', dotColor: '#22d3ee', dotSize: 8,  ringSize: 44, ringBorder: '1.5px solid rgba(34,211,238,0.7)',  ringBg: 'rgba(34,211,238,0.12)' },
  card:     { label: '👁️', dotColor: '#3b82f6', dotSize: 10, ringSize: 56, ringBorder: '1.5px solid rgba(59,130,246,0.5)',  ringBg: 'rgba(59,130,246,0.1)'  },
  detail:   { label: '📄', dotColor: '#22d3ee', dotSize: 8,  ringSize: 50, ringBorder: '1.5px solid rgba(34,211,238,0.6)',  ringBg: 'rgba(34,211,238,0.1)'  },
  download: { label: '📥', dotColor: '#3b82f6', dotSize: 8,  ringSize: 50, ringBorder: '1.5px solid rgba(59,130,246,0.6)',  ringBg: 'rgba(59,130,246,0.1)'  },
  projects: { label: '🚀', dotColor: '#3b82f6', dotSize: 10, ringSize: 52, ringBorder: '1.5px solid rgba(59,130,246,0.6)',  ringBg: 'rgba(59,130,246,0.12)' },
  send:     { label: '✉️', dotColor: '#3b82f6', dotSize: 8,  ringSize: 50, ringBorder: '1.5px solid rgba(59,130,246,0.6)',  ringBg: 'rgba(59,130,246,0.1)'  },
};

function classifyEl(el: Element): CursorState {
  const dataCursor = el.closest('[data-cursor]')?.getAttribute('data-cursor');
  if (dataCursor) {
    if (dataCursor === 'card')     return 'card';
    if (dataCursor === 'detail')   return 'detail';
    if (dataCursor === 'download') return 'download';
    if (dataCursor === 'projects') return 'projects';
    if (dataCursor === 'send')     return 'send';
    if (dataCursor === 'link')     return 'link';
  }
  if (el.closest('a[href]')) return 'link';
  return 'default';
}

export default function CustomCursor() {
  const [visible, setVisible]         = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isTouchDevice, setIsTouch]   = useState(false);

  const dotX  = useSpring(0, SPRING);
  const dotY  = useSpring(0, SPRING);
  const ringX = useSpring(0, SLOW_SPRING);
  const ringY = useSpring(0, SLOW_SPRING);

  const updatePos = useCallback((e: MouseEvent) => {
    dotX.set(e.clientX);
    dotY.set(e.clientY);
    ringX.set(e.clientX);
    ringY.set(e.clientY);
  }, [dotX, dotY, ringX, ringY]);

  useEffect(() => {
    const touch = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;
    if (touch) { setIsTouch(true); return; }

    const onMove = (e: MouseEvent) => {
      setVisible(true);
      updatePos(e);
      setCursorState(classifyEl(e.target as Element));
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', () => setVisible(false));
    document.addEventListener('mouseenter', () => setVisible(true));

    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, [updatePos]);

  if (isTouchDevice) return null;

  const cfg = CURSOR_CONFIG[cursorState];

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* Dot */}
      <motion.div
        style={{
          x: dotX, y: dotY,
          translateX: '-50%', translateY: '-50%',
          position: 'fixed', top: 0, left: 0,
          borderRadius: '50%',
          backgroundColor: cfg.dotColor,
          boxShadow: `0 0 10px ${cfg.dotColor}`,
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: visible ? 1 : 0,
        }}
        animate={{ width: cfg.dotSize, height: cfg.dotSize }}
        transition={{ duration: 0.15 }}
      />

      {/* Ring */}
      <motion.div
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          position: 'fixed', top: 0, left: 0,
          borderRadius: '50%',
          border: cfg.ringBorder,
          background: cfg.ringBg,
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{ width: cfg.ringSize, height: cfg.ringSize }}
        transition={{ duration: 0.18 }}
      >
        {cfg.label && (
          <motion.span
            key={cfg.label}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.15 }}
            style={{
              fontSize: cfg.label.length > 2 ? '11px' : '14px',
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            {cfg.label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
