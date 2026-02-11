'use client';

import { motion, useInView, Variant } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'blur-in';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    viewport?: { once?: boolean; margin?: string };
}

const variants: Record<AnimationType, { hidden: Variant; visible: Variant }> = {
    'fade-up': {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-down': {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-left': {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
    'fade-right': {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    'zoom-in': {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    'blur-in': {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: { opacity: 1, filter: 'blur(0px)' },
    },
};

export default function ScrollAnimation({
    children,
    className,
    animation = 'fade-up',
    delay = 0,
    duration = 0.5,
    viewport = { once: false, margin: '-50px' },
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport as any);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants[animation]}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1], // "Luxury" easing
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
