import React from 'react';
import { ArrowUpRight } from 'lucide-react';

import render1 from '../assets/render-1.jpg';
import render2 from '../assets/render-2.jpg';
import render3 from '../assets/render-3.jpg';
import render4 from '../assets/render-4.jpg';
import render5 from '../assets/render-5.jpg';
import render6 from '../assets/render-6.jpg';
import render7 from '../assets/render-7.jpg';

const units = [
    {
        type: "Standard Collection",
        title: "1 Bed Apartment",
        desc: "Semi-finished standard apartment offering a smart entry into the luxury market.",
        price: "₦86,240,000",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
    },
    {
        type: "Standard Collection",
        title: "3 Bed Apartment",
        desc: "Spacious semi-finished standard apartment perfect for growing families.",
        price: "₦162,468,800",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        type: "Luxury Collection",
        title: "3 Bed Flat (Luxury)",
        desc: "Premium semi-finished flat with enhanced specifications and finishes.",
        price: "₦214,814,400",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        type: "Luxury Collection",
        title: "3 Bed Maisonette",
        desc: "Elegant semi-finished luxury maisonette split across levels for distinctive living.",
        price: "₦209,542,400",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=1000&auto=format&fit=crop"
    },
    {
        type: "Luxury Collection",
        title: "4 Flat Duplex",
        desc: "Expansive semi-finished luxury duplex designed for grandeur and comfort.",
        price: "₦436,224,000",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        type: "Luxury Collection",
        title: "4 Bed Terrace",
        desc: "Semi-finished luxury terrace with private access and premium community feel.",
        price: "₦332,528,000",
        image: "https://images.unsplash.com/photo-1600596542815-afaad309b9f1?q=80&w=1000&auto=format&fit=crop"
    },
    {
        type: "Luxury Collection",
        title: "6 Bed Standalone",
        desc: "The pinnacle of luxury: a semi-finished standalone masterpiece for the elite.",
        price: "₦581,697,600",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop"
    }
];

const UnitCards = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-[10px] font-bold tracking-widest text-gold uppercase mb-3 block">
                            The Collection
                        </span>
                        <h2 className="text-3xl md:text-4xl text-coffee font-medium max-w-md">
                            Curated Living Spaces
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {units.map((unit, index) => (
                        <a
                            href={`https://wa.me/2349067779344?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(unit.title)}%20at%20The%20Woodlands.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="group block bg-white border border-gray-100 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-[4/3] mb-6 filter sepia-[0.05] group-hover:sepia-0 transition-all duration-500">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-coffee">
                                        {unit.type}
                                    </span>
                                </div>
                                <img
                                    src={unit.image}
                                    alt={unit.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        <ArrowUpRight className="w-5 h-5 text-coffee" />
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 pb-8">
                                <h3 className="text-2xl font-heading text-coffee mb-2">
                                    {unit.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed h-10">
                                    {unit.desc}
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Outright From</span>
                                        <span className="text-coffee font-medium text-lg">{unit.price}</span>
                                    </div>
                                    <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UnitCards;
