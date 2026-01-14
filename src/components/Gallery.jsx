import React from 'react';
import render1 from '../assets/render-1.jpg';
import render2 from '../assets/render-2.jpg';
import render3 from '../assets/render-3.jpg';
import render4 from '../assets/render-4.jpg';
import render5 from '../assets/render-5.jpg';
import render6 from '../assets/render-6.jpg';
import render7 from '../assets/render-7.jpg';
import render8 from '../assets/render-8.jpg';
import heroBg2 from '../assets/hero-bg-2.jpg';
import projectPoster from '../assets/project-poster.jpg';

import cutout1 from '../assets/cutout-1.png';
import cutout3 from '../assets/cutout-3.png';
import cutout5 from '../assets/cutout-5.png';

const galleryImages = [
    render1, render2, render3, render8, render5, render6, render7, heroBg2, projectPoster
];

const Gallery = () => {
    return (
        <section className="py-24 bg-coffee relative overflow-hidden">
            {/* Decorative Elements */}
            <img src={cutout1} alt="" className="absolute -top-20 -right-20 w-96 opacity-5 rotate-12 pointer-events-none" />
            <img src={cutout3} alt="" className="absolute bottom-20 -left-20 w-[500px] opacity-5 -rotate-12 pointer-events-none" />
            <img src={cutout5} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold tracking-widest text-gold uppercase mb-3 block">
                        Visual Tour
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6">
                        Life at The Woodlands
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
                        Immerse yourself in the vision. Every corner designed for serenity, luxury, and connection with nature.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-sm">
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
