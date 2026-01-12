import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const units = [
    {
        type: "Apartments",
        title: "Stylish City Apartments",
        desc: "Explore urban apartments with easy access to the best city amenities.",
        price: "From ₦86.2M",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
    },
    {
        type: "Terraces",
        title: "Luxury 4-Bed Terraces",
        desc: "Spacious family living with private parking and rooftop gardens.",
        price: "From ₦332.5M",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        type: "Investment",
        title: "Prime Commercial Spaces",
        desc: "Secure high-yield commercial units serving the Wuye community.",
        price: "From ₦150M",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    }
];

const UnitCards = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl text-coffee font-medium max-w-md">
                        Real Estate Opportunities tailored to your lifestyle.
                    </h2>
                    <button className="hidden md:inline-flex items-center gap-2 text-sm font-bold border-b border-coffee pb-1 hover:text-gold transition-colors uppercase tracking-widest">
                        View All Properties <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {units.map((unit, index) => (
                        <div
                            key={index}
                            className="group block bg-white transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="relative overflow-hidden aspect-[4/3] mb-6 filter sepia-[0.1] group-hover:sepia-0 transition-all duration-500">
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

                            <h3 className="text-2xl font-heading text-coffee mb-2">
                                {unit.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                                {unit.desc}
                            </p>

                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gold"></span>
                                <span className="text-coffee font-medium">{unit.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UnitCards;
