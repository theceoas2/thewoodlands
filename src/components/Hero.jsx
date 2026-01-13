import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import heroBg from '../assets/cutout-1.png';


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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Institutional-Grade Real Estate. <br />
            <span className="text-gold">Built on Certainty.</span>
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl font-light leading-relaxed">
            In a market defined by speculation, The Woodlands stands apart.
            <br className="hidden md:block" />
            <span className="block mt-4 text-white/80">
              Partnered with the <strong>Enugu State Government</strong>. Certified by <strong>EDGE</strong>. Verified with a <strong>Global C-of-O</strong>.
            </span>
            <span className="block mt-2">
              We trade "promises" for radical transparency and milestone-based delivery. Secure your fortress for capital in Abuja’s greenest district.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-0 mb-6">
            <a
              href="https://wa.me/2349067779344?text=Hello%2C%20I%20am%20interested%20in%20The%20Woodlands%2C%20Wuye.%20I%20would%20like%20to%20schedule%20an%20inspection."
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-coffee hover:bg-stone px-10 min-w-[200px] text-center flex items-center justify-center"
            >
              Secure Allocation
            </a>
            <a
              href="https://wa.me/2349067779344?text=Hello%2C%20I%20am%20interested%20in%20The%20Woodlands%2C%20Wuye.%20Please%20share%20the%20current%20availability%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-coffee text-white border-l border-white/20 hover:bg-navy-900 px-10 min-w-[200px] flex items-center justify-center gap-2"
            >
              View Availability <ChevronRight size={16} />
            </a>
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
