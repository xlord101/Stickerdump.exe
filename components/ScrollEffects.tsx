import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

/**
 * Hero component that starts full size and shrinks on scroll
 */
export const HeroScrollWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { scrollY } = useScroll();
    // Scale down from 1 to 0.8 as user scrolls from 0 to 500px
    const scale = useTransform(scrollY, [0, 500], [1, 0.85]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.8]);
    const borderRadius = useTransform(scrollY, [0, 500], ["0px", "24px"]);

    return (
        <motion.div
            style={{ scale, opacity, borderRadius }}
            className="w-full h-full flex items-center justify-center origin-center transition-all duration-75"
        >
            {children}
        </motion.div>
    );
};

/**
 * Standard section wrapper that starts shrunk and grows to full size when in view
 */
export const SectionScrollTrigger: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        amount: 0.3, // Trigger when 30% of element is in view
        margin: "0px 0px -100px 0px"
    });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0.6 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
};
