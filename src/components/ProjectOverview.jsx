import React, { useRef, useState } from 'react';
import { PlayCircle, PauseCircle } from 'lucide-react';

const ProjectOverview = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold tracking-widest text-gold uppercase mb-3 block">
                            Living Naturally
                        </span>
                        <h2 className="text-3xl md:text-5xl font-heading font-medium text-coffee mb-6">
                            Luxury Residences with Conscience
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-light text-lg">
                            "Earth Approved" living in the heart of Wuye.
                            Experience the perfect blend of biophilic design, sustainable tech, and super-luxury amenities.
                        </p>
                    </div>

                    {/* Video Section */}
                    <div className="relative aspect-video bg-sand overflow-hidden group cursor-pointer" onClick={togglePlay}>
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            loop
                            poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop"
                        >
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-at-sunset-31976-large.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Play Overlay */}
                        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                            <button className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                {isPlaying ? (
                                    <PauseCircle className="w-10 h-10 text-white" />
                                ) : (
                                    <PlayCircle className="w-10 h-10 text-white pl-1" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
                        <div>
                            <h3 className="text-2xl font-heading font-medium text-coffee mb-6">
                                Where Nature Meets Modernity
                            </h3>
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                                <p>
                                    Located in the rapidly appreciating district of Wuye, The Woodlands offers a rare escape.
                                    We combine "Quiet Luxury" with EDGE-Certified sustainability.
                                </p>
                                <p>
                                    Enjoy 24/7 power via inverter solar systems, double-glazed noise cancellation, and a community designed for wellness.
                                </p>
                            </div>
                        </div>
                        <div className="bg-sand/30 p-8 border border-coffee/5">
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="text-xl font-heading text-gold font-bold">01</span>
                                    <div>
                                        <h4 className="font-bold text-coffee text-sm uppercase tracking-widest mb-1">Exclusive Lifestyle</h4>
                                        <p className="text-sm text-gray-500">Rooftop Restaurant, Clubhouse with Pool, and Private Gym.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-xl font-heading text-gold font-bold">02</span>
                                    <div>
                                        <h4 className="font-bold text-coffee text-sm uppercase tracking-widest mb-1">Modern Convenience</h4>
                                        <p className="text-sm text-gray-500">Capsule Conference Offices, On-site Clinic, and Finger-Scan Security.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-xl font-heading text-gold font-bold">03</span>
                                    <div>
                                        <h4 className="font-bold text-coffee text-sm uppercase tracking-widest mb-1">Sustainable Power</h4>
                                        <p className="text-sm text-gray-500">24/7 Power Supply (Solar Inverters) & Reticulated Gas Systems.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Project Specifications Section */}
                <div className="mt-24 border-t border-coffee/10 pt-16">
                    <div className="text-center mb-12">
                        <span className="text-[10px] font-bold tracking-widest text-gold uppercase mb-3 block">
                            The Finer Details
                        </span>
                        <h3 className="text-3xl font-heading font-medium text-coffee">
                            Project Specifications
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
                        {/* Development Breakdown */}
                        <div className="bg-sand/20 p-8 border border-coffee/5 hover:border-gold transition-colors">
                            <h4 className="font-heading font-bold text-coffee mb-4 text-base">The Collection</h4>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex gap-2">• 12 Nos Super Luxury 3 Bed Apartments</li>
                                <li className="flex gap-2">• 4 Nos 5 Bedroom Penthouses</li>
                                <li className="flex gap-2">• 10 Nos 7 Bedroom Luxury Stand Alones</li>
                                <li className="flex gap-2">• 5 Nos 5 Bedroom Luxury Terraces</li>
                            </ul>
                        </div>

                        {/* Amenities */}
                        <div className="bg-sand/20 p-8 border border-coffee/5 hover:border-gold transition-colors">
                            <h4 className="font-heading font-bold text-coffee mb-4 text-base">Key Features</h4>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex gap-2">• Entrance Hall with Front Desk</li>
                                <li className="flex gap-2">• Clubhouse with Swimming Pool</li>
                                <li className="flex gap-2">• Reticulated Gas & Smart Meters</li>
                                <li className="flex gap-2">• Multiple Power Sources (24/7 Supply)</li>
                                <li className="flex gap-2">• Outdoor/Indoor Living Blend with Large Balconies</li>
                            </ul>
                        </div>

                        {/* Floor Plan Highlights */}
                        <div className="bg-sand/20 p-8 border border-coffee/5 hover:border-gold transition-colors">
                            <h4 className="font-heading font-bold text-coffee mb-4 text-base">Floor Plan Highlights</h4>
                            <ul className="space-y-3 text-gray-600 font-light">
                                <li className="flex gap-2">• Apartment Ground Floor: Reception (31m²)</li>
                                <li className="flex gap-2">• Ground Floor Parking</li>
                                <li className="flex gap-2">• EDGE Certified Estate</li>
                                <li className="flex gap-2">• Well Managed Serene Environment</li>
                                <li className="flex gap-2">• Unmatched Security Infrastructure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
