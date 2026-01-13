import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import Hero from './components/Hero';
import PerspectiveTabs from './components/PerspectiveTabs';
import EquityCalculator from './components/EquityCalculator';
import ConstructionTracker from './components/ConstructionTracker';
import UnitCards from './components/UnitCards';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-coffee/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-bold font-heading text-white tracking-widest uppercase">
          The Woodlands
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Project</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Investment</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Units</a>
          <button className="btn btn-gold text-xs py-3 px-6 shadow-none hover:bg-white hover:text-coffee">
            Book Inspection
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-coffee border-t border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-xl">
          <a href="#" className="text-white/80 hover:text-white font-medium">Project</a>
          <a href="#" className="text-white/80 hover:text-white font-medium">Investment</a>
          <a href="#" className="text-white/80 hover:text-white font-medium">Units</a>
          <button className="btn btn-gold w-full mt-2">Book Inspection</button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-coffee text-white pt-24 pb-12 border-t border-white/5">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-heading font-medium tracking-widest uppercase mb-6">The Woodlands</h2>
          <p className="text-white/60 max-w-sm mb-8 leading-relaxed font-light">
            A sanctuary of luxury in the heart of Wuye.
            Engineered for wealth preservation and elevated living.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-coffee transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-coffee transition-all duration-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-coffee transition-all duration-300">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xs uppercase tracking-widest mb-6 text-gold">Project</h3>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">The Residences</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Construction Update</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Neighborhood</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Developer Profile</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xs uppercase tracking-widest mb-6 text-gold">Contact</h3>
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-gold" /> +234 800 WOODLANDS</li>
            <li>sales@thewoodlands.ng</li>
            <li>Plot 804, Wuye District, Abuja</li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest">
        <p>&copy; 2024 Tout-Moi Ltd. All rights reserved.</p>
        <p>Privacy Policy • Terms of Service</p>
      </div>
    </div>
  </footer>
);

import { Routes, Route, useLocation } from 'react-router-dom';
import MilestonesPage from './pages/MilestonesPage';
import TrustSection from './components/TrustSection';
import ProjectOverview from './components/ProjectOverview';
import Gallery from './components/Gallery';
import FloorPlans from './components/FloorPlans';
import LeadMagnet from './components/LeadMagnet';

// ... (Navbar and Footer components remain unchanged)

const HomePage = () => (
  <>
    <Hero />
    <ProjectOverview />
    <FloorPlans />
    <Gallery />
    <PerspectiveTabs />
    <ConstructionTracker />
    <EquityCalculator />
    <UnitCards />
    <TrustSection />
  </>
);

const App = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-sans antialiased text-charcoal bg-sand selection:bg-gold selection:text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/milestones" element={<MilestonesPage />} />
      </Routes>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-white border-t border-coffee/10">
        <button className="w-full btn btn-primary shadow-xl py-4 text-sm font-bold uppercase tracking-widest">
          WhatsApp Us Now
        </button>
      </div>
    </div>
  );
};

export default App;
