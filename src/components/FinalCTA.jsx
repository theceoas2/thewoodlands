import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = "https://wa.me/2348092555222?text=Hello%2C%20I%20am%20interested%20in%20The%20Woodlands%2C%20please%20tell%20me%20more.";

const FinalCTA = () => {
    return (
        <section className="py-20 md:py-28 bg-coffee text-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212,175,55,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212,175,55,0.2) 0%, transparent 50%)',
                    }}
                />
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-5">
                        Ready to secure your unit?
                    </h2>
                    <p className="text-white/80 text-lg mb-10 leading-relaxed font-light">
                        Our property consultant is on WhatsApp right now. Get documents, pricing, and honest answers — instantly.
                    </p>

                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex btn bg-gold text-coffee hover:bg-white px-12 py-5 font-bold text-base tracking-wide"
                    >
                        Talk to Our Property Consultant →
                    </a>

                    <p className="mt-5 text-sm text-white/50">
                        Available 24/7 · No obligation · Takes 2 minutes
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
