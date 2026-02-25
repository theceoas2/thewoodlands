import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Dr. Adebayo O.',
        role: 'Diaspora Investor (USA)',
        quote: 'I was skeptical about buying off-plan from abroad. The weekly video updates and document clarity gave me peace of mind.',
    },
    {
        id: 2,
        name: 'Mrs. Nkechi I.',
        role: 'Business Owner, Abuja',
        quote: "Tout-Moi delivered my keys 2 months early on my last unit. That's why I'm buying Woodlands.",
    },
];

const SocialProof = () => {
    return (
        <section className="py-20 md:py-28 bg-sand/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-coffee">
                        Real buyers. Real results.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                            className="bg-white p-8 border-t-4 border-gold relative"
                        >
                            <Quote className="absolute top-6 right-6 text-coffee/8 w-10 h-10" />
                            <p className="text-gray-600 mb-8 italic leading-relaxed text-base">
                                "{t.quote}"
                            </p>
                            <div>
                                <p className="font-bold text-coffee">{t.name}</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center mt-8 text-xs text-gray-400">
                    Verified buyers. Previous Tout-Moi project.
                </p>
            </div>
        </section>
    );
};

export default SocialProof;
