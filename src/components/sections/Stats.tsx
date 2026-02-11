'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const stats = [
    { label: 'Mutlu Müşteri', value: 5000, suffix: '+' },
    { label: 'Yıllık Tecrübe', value: 12, suffix: ' Yıl' },
    { label: 'Araç Bakımı', value: 15000, suffix: '+' },
    { label: 'Uzman Personel', value: 8, suffix: '' },
];

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = to;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        } else {
            setCount(0); // Reset when out of view
        }
    }, [isInView, to]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
    return (
        <section className="py-12 lg:py-24 bg-black relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: false }}
                                className="mb-2 md:mb-4"
                            >
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-1 md:mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                    <CountUp to={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-[var(--color-text-secondary)] text-[0.6rem] md:text-sm uppercase tracking-[0.2em] font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                            <div className="w-8 md:w-12 h-0.5 md:h-1 bg-[var(--color-primary)] mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
