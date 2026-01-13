import React, { useRef, useState } from 'react';
import { PlayCircle, PauseCircle } from 'lucide-react';
import projectVideo from '../assets/project-tour-h264.mp4';
import projectPoster from '../assets/project-poster.jpg';
import render4 from '../assets/render-4.png';
import cutout4 from '../assets/cutout-4.png';
import cutout5 from '../assets/cutout-5.png';

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
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Cutouts */}
            {/* Decorative Cutouts */}
            <img src={cutout4} alt="" className="absolute top-0 right-0 w-64 md:w-96 opacity-10 -rotate-12 pointer-events-none" />
            <img src={cutout5} alt="" className="absolute bottom-1/4 left-0 w-80 md:w-[500px] opacity-10 rotate-12 pointer-events-none" />

            <div className="container mx-auto relative z-10">
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
                            playsInline
                            poster={projectPoster}
                        >
                            <source src={projectVideo} type="video/mp4" />
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
                            <div className="space-y-6 text-gray-600 font-light leading-relaxed mb-8">
                                <p>
                                    Located in the rapidly appreciating district of Wuye, The Woodlands offers a rare escape.
                                    We combine "Quiet Luxury" with EDGE-Certified sustainability.
                                </p>
                                <p>
                                    Enjoy 24/7 power via inverter solar systems, double-glazed noise cancellation, and a community designed for wellness.
                                </p>
                            </div>
                            <img src={render4} alt="The Woodlands Architecture" className="w-full rounded-none shadow-xl border border-coffee/10" />
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

                    <div className="grid md:grid-cols-2 gap-8 text-sm">
                        {/* Kitchen */}
                        <div className="bg-sand/20 p-8 border border-coffee/5 hover:border-gold transition-colors">
                            <h4 className="font-heading font-bold text-coffee mb-4 text-base tracking-wide uppercase text-xs">Kitchen</h4>
                            <ul className="space-y-3 text-gray-600 font-light leading-relaxed">
                                <li className="flex gap-2"> Low emission engineered wood, FSC-certified timber.</li>
                                <li className="flex gap-2"> Stainless steel integrated sink with chrome mono-bloc mixer tap.</li>
                                <li className="flex gap-2"> Low energy ceiling down lights and under-cabinet lighting.</li>
                                <li className="flex gap-2"> Concealed white multi-gang appliance panel.</li>
                                <li className="flex gap-2"> Wood-look tile flooring.</li>
                                <li className="flex gap-2"> Frame-less ceramic glass hob & Recirculating extractor hood.</li>
                                <li className="flex gap-2"> Integrated stainless steel electric oven, microwave & dishwasher.</li>
                                <li className="flex gap-2"> Matt lacquer timber veneer finish to cupboard units.</li>
                            </ul>
                        </div>

                        {/* Bathrooms */}
                        <div className="bg-sand/20 p-8 border border-coffee/5 hover:border-gold transition-colors">
                            <h4 className="font-heading font-bold text-coffee mb-4 text-base tracking-wide uppercase text-xs">Bathrooms & Showers</h4>
                            <ul className="space-y-3 text-gray-600 font-light leading-relaxed">
                                <li className="flex gap-2"> White counter-top wash hand basin with wall-mounted chrome mixer tap.</li>
                                <li className="flex gap-2"> Low flow faucet, dual flush toilets, low flow shower heads.</li>
                                <li className="flex gap-2"> Chrome effect thermostatically controlled electric towel rails.</li>
                                <li className="flex gap-2"> Tiled/Spv finish to all walls with feature tiling.</li>
                                <li className="flex gap-2"> Fitted wall cabinet with mirrored door, shelves, and shaver socket.</li>
                                <li className="flex gap-2"> Feature niche with glass shelving and downlights above WC and bath.</li>
                                <li className="flex gap-2"> Chrome ceiling mounted shower head & thermostatic mixer.</li>
                            </ul>
                        </div>

                        {/* Interior & Balconies */}
                        <div className="bg-sand/20 p-8 border border-coffee/5 hover:border-gold transition-colors">
                            <h4 className="font-heading font-bold text-coffee mb-4 text-base tracking-wide uppercase text-xs">Interior & Balconies</h4>
                            <ul className="space-y-3 text-gray-600 font-light leading-relaxed">
                                <li className="flex gap-2"> Well proportioned balconies/terraces with decking and glass balustrade.</li>
                                <li className="flex gap-2"> 2.4m matt finished internal doors with feature trim.</li>
                                <li className="flex gap-2"> Veneered solid core entrance door with feature trim.</li>
                                <li className="flex gap-2"> Tiled skirting & timber architraves.</li>
                                <li className="flex gap-2"> Polished chrome door handles throughout.</li>
                                <li className="flex gap-2"> Fitted wardrobe with mirrored sliding doors.</li>
                                <li className="flex gap-2"> Tiled/Marble/Wooden flooring.</li>
                            </ul>
                        </div>

                        {/* Electric Fittings */}
                        <div className="bg-sand/20 p-8 border border-coffee/5 hover:border-gold transition-colors">
                            <h4 className="font-heading font-bold text-coffee mb-4 text-base tracking-wide uppercase text-xs">Electric Fittings</h4>
                            <ul className="space-y-3 text-gray-600 font-light leading-relaxed">
                                <li className="flex gap-2"> Low energy ceiling down-lights throughout with motion sensors.</li>
                                <li className="flex gap-2"> Automatic lighting to cupboards.</li>
                                <li className="flex gap-2"> TV (terrestrial and satellite) points to principal living area and bedrooms.</li>
                                <li className="flex gap-2"> Telephone points to living area and bedrooms.</li>
                                <li className="flex gap-2"> Grey electrical fittings at high and low levels.</li>
                                <li className="flex gap-2"> Energy saving efficient external light for balcony/terrace.</li>
                                <li className="flex gap-2"> Chrome exposed thermostatic.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectOverview;
