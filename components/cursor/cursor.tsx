'use client';

import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'motion/react';
import { cn } from '@/utils/cn';

type CursorProps = {
  children: React.ReactNode;
  className?: string;
  springConfig?: Parameters<typeof useSpring>[1];
  attachToParent?: boolean;
  transition?: Parameters<typeof motion.div>[0]['transition'];
  variants?: Parameters<typeof motion.div>[0]['variants'];
  onPositionChange?: (x: number, y: number) => void;
};

export function Cursor({
  children,
  className,
  springConfig,
  attachToParent = false,
  variants,
  transition,
  onPositionChange,
}: CursorProps) {
  const cursorX = useMotionValue(window.innerWidth / 2);
  const cursorY = useMotionValue(window.innerHeight / 2);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!attachToParent);

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      onPositionChange?.(e.clientX, e.clientY);
    };

    document.body.style.cursor = attachToParent ? 'auto' : 'none';
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY, onPositionChange, attachToParent]);

  // Smooth cursor motion
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Handle visibility when attaching to parent
  useEffect(() => {
    if (!attachToParent || !cursorRef.current) return;

    const parent = cursorRef.current.parentElement;
    if (!parent) return;

    const handleMouseEnter = () => {
      parent.style.cursor = 'none';
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      parent.style.cursor = 'auto';
      setIsVisible(false);
    };

    parent.addEventListener('mouseenter', handleMouseEnter);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [attachToParent]);

  return (
    <motion.div
      ref={cursorRef}
      className={cn('pointer-events-none fixed left-0 top-0 z-50', className)}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
