'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    const words = text.split(" ");

    return (
        <span ref={ref} className={cn("inline-block", className)}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.05,
                        ease: "easeOut"
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}
