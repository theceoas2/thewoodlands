import React from 'react';
import { Check, Hammer, MapPin, FileCheck, Building2, Key, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import cutout2 from '../assets/cutout-2.png';

const milestones = [
    { id: 1, title: "Land Acquisition & Title Perfection", status: "completed", date: "Q1 2024", icon: MapPin },
    { id: 2, title: "Enugu State Govt JV Signed", status: "completed", date: "Q2 2024", icon: FileCheck },
    { id: 3, title: "Breaking Ground & Foundation", status: "active", date: "NOW", icon: Hammer },
    { id: 4, title: "First Floor Slab Casting", status: "pending", date: "Q2 2025", icon: Building2 },
    { id: 5, title: "Roofing & Top Out", status: "pending", date: "Q4 2026", icon: Building2 },
    { id: 6, title: "Handover", status: "pending", date: "Jan 1, 2028", icon: Key },
];

const ConstructionTracker = () => {
    return (
        <section className="py-12 md:py-24 bg-sand relative overflow-hidden">
            {/* Decorative Element */}
            <img src={cutout2} alt="" className="absolute top-0 right-0 w-64 md:w-96 opacity-10 rotate-180 pointer-events-none" />
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20">
                    <div>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-gold mb-2 block">Development Timeline</span>
                        <h2 className="text-2xl md:text-4xl font-medium text-coffee">Project Milestones</h2>
                    </div>
                    <p className="text-gray-500 max-w-md text-sm mt-4 md:mt-0 leading-relaxed text-xs md:text-sm">
                        We believe in transparency. Track every stage from acquisition to final handover.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-coffee/10 -translate-x-1/2 md:translate-x-0"></div>

                    <div className="space-y-8 md:space-y-16">
                        {milestones.map((step, index) => {
                            const isEven = index % 2 === 0;
                            const isActive = step.status === 'active';
                            const isCompleted = step.status === 'completed';

                            return (
                                <div key={step.id} className={`relative flex items-center md:justify-between ${isEven ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}>

                                    {/* Left Side (Content for Even, Empty for Odd) */}
                                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-24 md:text-right' : 'md:pl-24'}`}>
                                        <div className={isEven ? '' : 'hidden md:block'}>
                                            {isEven && (
                                                <>
                                                    <span className={`text-[10px] font-bold tracking-widest uppercase mb-2 block ${isActive ? 'text-gold' : 'text-gray-400'}`}>
                                                        {step.date}
                                                    </span>
                                                    <h3 className={`text-2xl font-heading mb-2 ${isActive ? 'text-coffee' : 'text-gray-400'}`}>{step.title}</h3>
                                                    {isActive && (
                                                        <button className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-coffee border border-coffee/20 px-4 py-2 hover:bg-coffee hover:text-white transition-colors">
                                                            <Video className="w-3 h-3" /> WATCH UPDATE
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* Center Node */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                                        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center
                      ${isActive || isCompleted ? 'bg-coffee border-coffee' : 'bg-sand border-gray-300'}
                      ${isActive ? 'scale-150 ring-4 ring-coffee/20' : ''}
                    `}>
                                            {/* Minimalist dot, no icons inside small dots to keep it clean */}
                                        </div>
                                    </div>

                                    {/* Right Side */}
                                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${!isEven ? 'md:pr-24 md:text-right' : 'md:pl-24'}`}>
                                        <div className={!isEven ? '' : 'hidden md:block'}>
                                            {!isEven && (
                                                <>
                                                    <span className={`text-[10px] font-bold tracking-widest uppercase mb-2 block ${isActive ? 'text-gold' : 'text-gray-400'}`}>
                                                        {step.date}
                                                    </span>
                                                    <h3 className={`text-2xl font-heading mb-2 ${isActive ? 'text-coffee' : 'text-gray-400'}`}>{step.title}</h3>
                                                    {isActive && (
                                                        <button className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-coffee border border-coffee/20 px-4 py-2 hover:bg-coffee hover:text-white transition-colors">
                                                            <Video className="w-3 h-3" /> WATCH UPDATE
                                                        </button>
                                                    )}
                                                </>
                                            )}
                                            {/* Mobile View for the 'other side' content */}
                                            <div className="md:hidden">
                                                <span className={`text-[10px] font-bold tracking-widest uppercase mb-1 block ${isActive ? 'text-gold' : 'text-gray-400'}`}>
                                                    {step.date}
                                                </span>
                                                <h3 className={`text-lg font-heading mb-1 leading-tight ${isActive ? 'text-coffee' : 'text-gray-400'}`}>{step.title}</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    {/* View Full Developments Button */}
                    <div className="mt-16 text-center">
                        <Link to="/milestones" className="inline-flex items-center gap-2 btn btn-primary shadow-xl hover:scale-105 transition-transform uppercase tracking-widest text-xs font-bold">
                            See Full Development Timeline <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConstructionTracker;
