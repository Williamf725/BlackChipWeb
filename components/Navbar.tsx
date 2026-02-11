import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="relative">
                {/* Glow effect behind the coin */}
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md group-hover:bg-amber-500/40 transition-all duration-500"></div>
                <motion.img 
                  src="https://res.cloudinary.com/dsmdtfbfd/image/upload/v1770773088/BLACKCHIP_COIN_viw7qw.jpg" 
                  alt="Black Chip Coin"
                  className="w-14 h-14 rounded-full object-cover relative z-10 border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white leading-none group-hover:text-zinc-200 transition-colors">
                BKC
              </span>
              <span className="text-[0.6rem] font-bold tracking-[0.2em] text-zinc-400 group-hover:text-amber-500/80 transition-colors">
                BLACK CHIP
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-zinc-400 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium tracking-wide uppercase relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-white text-black hover:bg-zinc-200 transition-all px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                Cotizar
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium border-b border-white/5 last:border-0 text-center uppercase tracking-widest"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;