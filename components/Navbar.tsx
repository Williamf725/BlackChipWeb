import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-4 md:px-6 ${
        scrolled ? 'py-4 bg-black/20 backdrop-blur-md' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-full mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div 
          className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
              <motion.img 
                src="https://res.cloudinary.com/dsmdtfbfd/image/upload/v1770773088/BLACKCHIP_COIN_viw7qw.jpg" 
                alt="Black Chip Coin"
                className="w-11 h-11 rounded-full object-cover relative z-10 border border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl font-['Space_Grotesk'] font-medium tracking-tight text-white leading-none">
              BKC
            </span>
            <span className="text-[0.6rem] font-['Space_Grotesk'] font-bold tracking-[0.1em] text-zinc-400 uppercase">
              Black Chip
            </span>
          </div>
        </div>

        {/* Minimalist CTA - Flow TV Style */}
        <div>
          <a 
            href="#contact"
            className="group relative inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-white/20 bg-white/[0.01] hover:bg-white/10 text-white text-[15px] font-['Space_Grotesk'] font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative z-10">Cotizar</span>
            {/* Subtle inner glow */}
            <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;