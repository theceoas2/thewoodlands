import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroBg from '../assets/hero-bg-2.png';


const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center text-white overflow-hidden bg-coffee">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase">
              Plot 804 • Wuye, Abuja
            </span>
            <div className="h-px w-12 bg-white/30"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
            Own the Future of Wuye. <br />
            <span className="text-gold">83% Appreciation</span> in 12 Months*.
          </h1>
          <p className="text-lg text-white/90 mb-10 max-w-xl font-light leading-relaxed">
            Secure a Government-Partnered, EDGE-Certified asset in Abuja's fastest-growing district.
            Global C-of-O. Unmatched Returns.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-0 mb-6">
            <button className="btn bg-white text-coffee hover:bg-stone px-10 min-w-[200px]">
              Secure Allocation
            </button>
            <button className="btn bg-coffee text-white border-l border-white/20 hover:bg-navy-900 px-10 min-w-[200px] flex items-center gap-2">
              View Availability <ChevronRight size={16} />
            </button>
          </div>

          <p className="text-[10px] text-white/40 italic">
            *Source: Nigeria Property Centre Market Data (Jan 2024 - Jan 2025). Past performance does not guarantee future results.
          </p>
        </motion.div>

        {/* Floating Trust Badge / Ticker Bottom Right */}
        <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:block">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-none border-l-2 border-gold max-w-sm">
            <p className="text-sm text-white/80 italic mb-4">
              "Seemlessly blending advanced digital tools with trusted local expertise."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-coffee font-bold text-xs">A</div>
              <div>
                <p className="text-xs font-bold">Official JV</p>
                <p className="text-[10px] text-white/60">Enugu State Govt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
