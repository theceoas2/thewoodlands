import React from 'react';
import { ShieldCheck, Building2, Video, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import render2 from '../assets/render-2.png';
import render3 from '../assets/render-3.png';

const TrustSection = () => {
    return (
        <section className="py-24 bg-sand border-y border-coffee/5 relative overflow-hidden">
            {/* Background Decor */}
            <img src={render2} alt="" className="absolute top-0 right-0 w-96 opacity-5 rotate-12 pointer-events-none mix-blend-multiply" />
            <img src={render3} alt="" className="absolute bottom-0 left-0 w-96 opacity-5 -rotate-6 pointer-events-none mix-blend-multiply" />

            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[10px] font-bold tracking-widest text-coffee/60 uppercase mb-2 block">
                        Safe & Secure Investment
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-medium text-coffee mb-6">
                        Invest Without the Anxiety
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-light">
                        We understand the fears of off-plan property in Nigeria. That's why The Woodlands is built on a foundation of unshakeable legal security and radical transparency.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Pillar 1: Government Partnership */}
                    <div className="bg-white p-8 border border-coffee/10 hover:border-gold transition-colors group">
                        <div className="w-12 h-12 bg-coffee/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-coffee">
                            <Building2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-coffee mb-3">Enugu State JV</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Officially partnered with the Enugu State Housing Development Corporation. A project backed by the full weight of the state government.
                        </p>
                    </div>

                    {/* Pillar 2: Title Security */}
                    <div className="bg-white p-8 border border-coffee/10 hover:border-gold transition-colors group">
                        <div className="w-12 h-12 bg-coffee/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-coffee">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-coffee mb-3">Global C-of-O</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Title is everything. The Woodlands comes with a verifiable Global Certificate of Occupancy. Start your search at the Ministry of Lands today.
                        </p>
                    </div>

                    {/* Pillar 3: Live Transparency */}
                    <div className="bg-white p-8 border border-coffee/10 hover:border-gold transition-colors group">
                        <div className="w-12 h-12 bg-coffee/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-coffee">
                            <Video className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-coffee mb-3">Radical Transparency</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">
                            Don't just take our word for it. Watch the project rise in real-time. We don't hide behind renders.
                        </p>
                        <Link to="/milestones" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gold hover:text-coffee transition-colors">
                            Watch Site Progress <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                    </div>

                    {/* Pillar 4: Payment Security */}
                    <div className="bg-white p-8 border border-coffee/10 hover:border-gold transition-colors group">
                        <div className="w-12 h-12 bg-coffee/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-white transition-colors text-coffee">
                            <FileCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-heading font-bold text-coffee mb-3">Milestone Payments</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Your funds work as the building works. Our structured payment plans are tied to construction milestones, ensuring fair value exchange.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
