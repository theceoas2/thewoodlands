import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import render1 from '../assets/render-1.jpg';
import render2 from '../assets/render-2.jpg';
import render3 from '../assets/render-3.jpg';
import render4 from '../assets/render-4.jpg';
import render5 from '../assets/render-5.jpg';
import render6 from '../assets/render-6.jpg';
import render7 from '../assets/render-7.jpg';

const plans = [
    { id: 1, name: "1 Bed Apartment", type: "Standard", size: "65m²", beds: 1, baths: 1.5, image: render1 },
    { id: 2, name: "3 Bed Apartment", type: "Standard", size: "145m²", beds: 3, baths: 3.5, image: render2 },
    { id: 3, name: "3 Bed Flat", type: "Luxury", size: "180m²", beds: 3, baths: 3.5, image: render3 },
    { id: 4, name: "3 Bed Maisonette", type: "Luxury", size: "210m²", beds: 3, baths: 3.5, image: render4 },
    { id: 5, name: "4 Flat Duplex", type: "Luxury", size: "320m²", beds: 4, baths: 4.5, image: render5 },
    { id: 6, name: "4 Bed Terrace", type: "Luxury", size: "280m²", beds: 4, baths: 4.5, image: render6 },
    { id: 7, name: "6 Bed Standalone", type: "Luxury", size: "550m²", beds: 6, baths: 7, image: render7 },
];

const FloorPlans = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 bg-white border-t border-coffee/5">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold tracking-widest text-gold uppercase mb-3 block">
                        Space & Layout
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-medium text-coffee mb-6">
                        Floor Plans
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Sidebar / List */}
                    <div className="w-full lg:w-1/3 bg-sand/20 p-8 border border-coffee/5">
                        <h3 className="font-bold text-coffee mb-6 uppercase tracking-wider text-xs">Select Unit Type</h3>
                        <div className="space-y-2">
                            {plans.map((plan, index) => (
                                <button
                                    key={plan.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`w-full text-left px-6 py-4 flex justify-between items-center transition-all duration-300
                                    ${activeTab === index
                                            ? 'bg-coffee text-white shadow-lg'
                                            : 'bg-white hover:bg-white/80 text-gray-500'}`}
                                >
                                    <span className="font-heading font-medium">{plan.name}</span>
                                    {activeTab === index && <ArrowRight className="w-4 h-4" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Preview Area */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative bg-sand overflow-hidden group min-h-[500px] flex items-center justify-center">
                            <img
                                src={plans[activeTab].image}
                                alt={plans[activeTab].name}
                                className="w-full h-full object-contain max-h-[600px]"
                            />
                            {/* Overlay Info */}
                            <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-8 border-t border-coffee/10">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{plans[activeTab].type} Collection</p>
                                        <h3 className="text-3xl font-heading text-coffee">{plans[activeTab].name}</h3>
                                    </div>
                                    <div className="flex gap-8 text-coffee/80">
                                        <div className="text-center">
                                            <span className="block font-bold text-xl">{plans[activeTab].size}</span>
                                            <span className="text-[10px] uppercase opacity-60">Total Area</span>
                                        </div>
                                        <div className="text-center">
                                            <span className="block font-bold text-xl">{plans[activeTab].beds}</span>
                                            <span className="text-[10px] uppercase opacity-60">Bedrooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloorPlans;
