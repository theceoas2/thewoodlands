import React from 'react';
import { motion } from 'framer-motion';

const trustItems = [
    { icon: '🏛️', text: 'Official JV — Enugu State Govt' },
    { icon: '📄', text: 'Global C of O — Verified at Ministry of Lands' },
    { icon: '🔨', text: 'Breaking Ground Q1 2026 — Construction Underway' },
];

const TrustBar = () => {
    return (
        <section className="bg-coffee border-t border-white/10">
            <div className="container mx-auto py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-3 justify-center text-center md:text-left"
                        >
                            <span className="text-2xl" role="img" aria-hidden="true">{item.icon}</span>
                            <span className="text-sm text-white/90 font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
