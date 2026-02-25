import React from 'react';
import { motion } from 'framer-motion';

const fears = [
    {
        question: '"Is this legitimate?"',
        answer: 'JV signed with Enugu State Government. Land title verified at Ministry of Lands. Not "in process" — done.',
        icon: '🏛️',
    },
    {
        question: '"Will I lose my money?"',
        answer: "Payments are tied to construction milestones. If we don't build, you don't pay.",
        icon: '🛡️',
    },
    {
        question: '"Will it actually be delivered?"',
        answer: 'Breaking ground Q1 2026. Weekly site update videos. Delivery: Q2 2028.',
        icon: '📹',
    },
    {
        question: '"Is the price worth it?"',
        answer: "You're buying at 2026 off-plan rates. Conservative 35% appreciation projected by Q2 2028 handover.",
        icon: '📈',
    },
];

const WhyThisIsSafe = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-coffee mb-4">
                        We've answered the hard questions before you ask them.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {fears.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-sand/40 border border-coffee/5 p-8 hover:border-gold/40 transition-all duration-300 group"
                        >
                            <span className="text-3xl mb-4 block" role="img" aria-hidden="true">{item.icon}</span>
                            <h3 className="text-lg font-bold text-coffee mb-3 group-hover:text-gold transition-colors">
                                {item.question}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.answer}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyThisIsSafe;
