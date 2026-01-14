import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';
import cutout1 from '../assets/cutout-1.png';
import cutout2 from '../assets/cutout-2.png';
import cutout3 from '../assets/cutout-3.png';

const units = [
    { id: 1, name: "1 Bed Apartment (Standard)", actualPrice: 105212800, outrightPrice: 86240000, paymentPlanPrice: 95964000 },
    { id: 2, name: "3 Bed Apartment (Standard)", actualPrice: 198211936, outrightPrice: 162468800, paymentPlanPrice: 180572800 },
    { id: 3, name: "3 Bed Flat (Luxury)", actualPrice: 262070568, outrightPrice: 214814400, paymentPlanPrice: 238683200 },
    { id: 4, name: "3 Bed Maisonette (Luxury)", actualPrice: 255643728, outrightPrice: 209542400, paymentPlanPrice: 232825600 },
    { id: 5, name: "4 Flat Duplex (Luxury)", actualPrice: 532195680, outrightPrice: 436224000, paymentPlanPrice: 467083200 },
    { id: 6, name: "4 Bed Terrace (Luxury)", actualPrice: 405684160, outrightPrice: 332528000, paymentPlanPrice: 357420800 },
    { id: 7, name: "6 Bed Standalone (Luxury)", actualPrice: 709671072, outrightPrice: 581697600, paymentPlanPrice: 620774400 },
];

const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value);
};

const EquityCalculator = () => {
    const [selectedUnitId, setSelectedUnitId] = useState(1);
    const selectedUnit = units.find(u => u.id === parseInt(selectedUnitId));

    // Animation for outright price
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });
    const displayPrice = useTransform(springValue, (value) => formatCurrency(Math.floor(value)));

    useEffect(() => {
        springValue.set(selectedUnit.outrightPrice);
    }, [selectedUnit.outrightPrice, springValue]);

    return (
        <section className="py-12 md:py-24 bg-coffee text-white relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

            {/* Decorative Elements */}
            <img src={cutout1} alt="" className="absolute -top-20 -left-20 w-64 md:w-96 opacity-5 rotate-180 pointer-events-none" />
            <img src={cutout2} alt="" className="absolute top-1/4 -right-32 w-80 md:w-[500px] opacity-5 pointer-events-none mix-blend-soft-light" />
            <img src={cutout3} alt="" className="absolute -bottom-32 left-1/4 w-80 md:w-[600px] opacity-5 rotate-45 pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">Pricing Structure</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 leading-tight">
                            Early-Stage Pricing, <br />Structured for Completion
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                            Off-plan pricing allows buyers to secure today’s price against time, inflation, and completion.
                        </p>

                        <div className="bg-white/5 border border-white/10 p-8 mb-8">
                            <label className="block text-xs font-bold uppercase tracking-widest text-white/60 mb-4">Select Unit Type</label>
                            <div className="relative">
                                <select
                                    value={selectedUnitId}
                                    onChange={(e) => setSelectedUnitId(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/30 py-4 text-2xl text-white appearance-none cursor-pointer hover:border-gold transition-colors focus:outline-none rounded-none"
                                >
                                    {units.map(unit => (
                                        <option key={unit.id} value={unit.id} className="text-coffee">{unit.name}</option>
                                    ))}
                                </select>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                    <ArrowRight className="w-5 h-5 rotate-90" />
                                </div>
                            </div>
                        </div>

                        <div className="text-white/40 text-sm leading-relaxed max-w-md space-y-4">
                            <p>
                                In Nigeria, construction costs and property prices typically adjust over time due to inflation, demand growth, and infrastructure development.
                            </p>
                            <p>
                                Off-plan buyers benefit by securing pricing earlier in the development cycle, rather than purchasing at completed-market rates.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="grid gap-6">
                            {/* Market Value */}
                            <div className="p-6 bg-sand/10 border border-white/10 backdrop-blur-sm text-white">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Standard Market Valuation</p>
                                <p className="text-2xl md:text-3xl font-heading opacity-80">{formatCurrency(selectedUnit.actualPrice)}</p>
                            </div>

                            {/* Outright Price (Hero) */}
                            <div className="p-6 md:p-8 bg-gold text-coffee relative overflow-hidden group shadow-2xl shadow-gold/20">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl transition-transform group-hover:scale-150 duration-700"></div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-coffee/80 mb-2">Early-Stage Outright Price</p>
                                <span className="text-3xl md:text-5xl font-heading block mb-1">
                                    <motion.span>{displayPrice}</motion.span>
                                </span>
                                <p className="text-[10px] text-coffee/60 italic mt-2 leading-tight">
                                    *Secure immediate administrative allocation.
                                </p>
                            </div>

                            {/* Payment Plan */}
                            <div className="p-6 md:p-8 border border-white/20 bg-white/5 text-white">
                                <div className="flex justify-between items-end mb-2">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Flexible Payment Plan</p>
                                </div>
                                <p className="text-2xl md:text-3xl font-heading text-sand">
                                    {formatCurrency(selectedUnit.paymentPlanPrice)}
                                </p>
                                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs text-white/50">
                                    <div>
                                        <span className="block uppercase tracking-wider text-[10px] mb-1">Initial</span>
                                        35% Deposit
                                    </div>
                                    <div className="text-right">
                                        <span className="block uppercase tracking-wider text-[10px] mb-1">Duration</span>
                                        12-18 Months
                                    </div>
                                </div>
                            </div>

                            <p className="text-[10px] text-white/30 text-center uppercase tracking-widest mt-2 px-4">
                                Prices, timelines, and specifications are subject to change based on construction progress, market conditions, and regulatory requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EquityCalculator;
