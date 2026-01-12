import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Home, Shield, Zap, MapPin, Users } from 'lucide-react';

const PerspectiveTabs = () => {
    const [activeTab, setActiveTab] = useState('investor'); // 'investor' or 'homeowner'

    return (
        <section className="py-24 bg-cream">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Choose Your Perspective</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Whether you are building wealth or building a home, The Woodlands is engineered for you.
                    </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-200 inline-flex relative">
                        <button
                            onClick={() => setActiveTab('investor')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${activeTab === 'investor' ? 'text-white' : 'text-gray-500 hover:text-navy'}`}
                        >
                            For The Investor
                        </button>
                        <button
                            onClick={() => setActiveTab('homeowner')}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${activeTab === 'homeowner' ? 'text-white' : 'text-gray-500 hover:text-navy'}`}
                        >
                            For The Homeowner
                        </button>

                        {/* Sliding Background */}
                        <motion.div
                            className="absolute top-1.5 bottom-1.5 rounded-full bg-navy shadow-md"
                            initial={false}
                            animate={{
                                left: activeTab === 'investor' ? '6px' : '50%',
                                width: activeTab === 'investor' ? 'calc(50% - 6px)' : 'calc(50% - 6px)',
                                x: activeTab === 'investor' ? 0 : 0
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        {activeTab === 'investor' ? (
                            <motion.div
                                key="investor"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-3 gap-8"
                            >
                                <Card
                                    icon={<TrendingUp className="w-6 h-6 text-gold" />}
                                    title="Capital Appreciation Guaranteed"
                                    desc="Buy Low, Sell High. Secure at 2025 Off-Plan rates and exit at 2028 market maturity. We project a conservative 35% growth by handover."
                                />
                                <Card
                                    icon={<Zap className="w-6 h-6 text-gold" />}
                                    title="High Rental Yield"
                                    desc="EDGE Certification reduces tenant utility bills by 20%, allowing you to command a premium on rent while lowering vacancy rates."
                                />
                                <Card
                                    icon={<Shield className="w-6 h-6 text-gold" />}
                                    title="Zero Risk Security"
                                    desc="Backed by a signed JV with the Enugu State Govt. No demolition stories, no land grabbers. Just clear, Supreme Court verified title."
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="homeowner"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-3 gap-8"
                            >
                                <Card
                                    icon={<Home className="w-6 h-6 text-forest" />}
                                    title="A Sanctuary That Pays Back"
                                    desc="Inflation-Proof Living. Smart metering, thermal glass, and insulation cut your monthly energy spend drastically."
                                />
                                <Card
                                    icon={<MapPin className="w-6 h-6 text-forest" />}
                                    title="The Wuye Advantage"
                                    desc="8 mins to CBD means less fuel, less traffic, and more time with family. Located in the heart of Abuja's most rapidly appreciating district."
                                />
                                <Card
                                    icon={<Users className="w-6 h-6 text-forest" />}
                                    title="Curated Community"
                                    desc="A private enclave of just 12 units and select terraces. No overcrowding. Just privacy, security, and like-minded neighbors."
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const Card = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100">
        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-navy mb-3 font-heading">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
            {desc}
        </p>
    </div>
);

export default PerspectiveTabs;
