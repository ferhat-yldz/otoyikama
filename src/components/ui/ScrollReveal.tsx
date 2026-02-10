'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getTransform = () => {
        switch (direction) {
            case 'up':
                return 'translateY(40px)';
            case 'down':
                return 'translateY(-40px)';
            case 'left':
                return 'translateX(40px)';
            case 'right':
                return 'translateX(-40px)';
            case 'fade':
                return 'translateY(0)';
            default:
                return 'translateY(40px)';
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate(0)' : getTransform(),
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
