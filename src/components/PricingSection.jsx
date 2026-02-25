import React from 'react';
import { motion } from 'framer-motion';

const WHATSAPP_URL = "https://wa.me/2348092555222?text=Hello%2C%20I%20am%20interested%20in%20The%20Woodlands%2C%20please%20send%20me%20the%20full%20pricing%20breakdown.";

const units = [
    { type: '1 Bed Apartment', price: '₦86,240,000', deposit: '35% deposit, 12–18 months' },
    { type: '3 Bed Apartment', price: '₦162,468,800', deposit: '35% deposit, 12–18 months' },
    { type: '3 Bed Flat (Luxury)', price: '₦214,814,400', deposit: '35% deposit, 12–18 months' },
    { type: '3 Bed Maisonette', price: '₦209,542,400', deposit: '35% deposit, 12–18 months' },
    { type: '4 Bed Terrace', price: '₦332,528,000', deposit: '35% deposit, 12–18 months' },
];

const PricingSection = () => {
    return (
        <section className="py-20 md:py-28 bg-sand/50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-coffee mb-3">
                        Clear prices. No hidden fees.
                    </h2>
                    <p className="text-gray-600">
                        Secure your unit today at 2026 off-plan rates.
                    </p>
                </motion.div>

                {/* Desktop Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl mx-auto hidden md:block"
                >
                    <div className="overflow-hidden border border-coffee/10">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-coffee text-white">
                                    <th className="text-left py-4 px-6 text-xs uppercase tracking-widest font-bold">Unit Type</th>
                                    <th className="text-left py-4 px-6 text-xs uppercase tracking-widest font-bold">Outright Price</th>
                                    <th className="text-left py-4 px-6 text-xs uppercase tracking-widest font-bold">Flexible Plan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {units.map((unit, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b border-coffee/5 ${index % 2 === 0 ? 'bg-white' : 'bg-sand/30'} hover:bg-gold/5 transition-colors`}
                                    >
                                        <td className="py-4 px-6 font-medium text-coffee">{unit.type}</td>
                                        <td className="py-4 px-6 text-coffee font-semibold">{unit.price}</td>
                                        <td className="py-4 px-6 text-gray-600 text-sm">{unit.deposit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4 max-w-lg mx-auto">
                    {units.map((unit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white p-5 border border-coffee/5"
                        >
                            <h3 className="font-bold text-coffee mb-2">{unit.type}</h3>
                            <p className="text-xl font-semibold text-coffee mb-1">{unit.price}</p>
                            <p className="text-xs text-gray-500">{unit.deposit}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-12 max-w-2xl mx-auto"
                >
                    <p className="text-sm text-gray-500 mb-6">
                        Other unit types available. Ask our property consultant on WhatsApp for the full pricing sheet.
                    </p>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex btn bg-coffee text-white hover:bg-gold px-10 py-4 font-bold text-sm tracking-wide"
                    >
                        Get Pricing Breakdown on WhatsApp →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingSection;
