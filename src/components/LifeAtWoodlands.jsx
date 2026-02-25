import React from 'react';
import { motion } from 'framer-motion';
import render4 from '../assets/render-4.jpg';
import render6 from '../assets/render-6.jpg';
import render7 from '../assets/render-7.jpg';

const images = [
    { src: render4, alt: 'The Woodlands estate street view with luxury residences' },
    { src: render6, alt: 'The Woodlands entrance and gate render' },
    { src: render7, alt: 'The Woodlands apartment building exterior' },
];

const LifeAtWoodlands = () => {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-coffee">
                        Life at The Woodlands
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="overflow-hidden aspect-[4/3]"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LifeAtWoodlands;
