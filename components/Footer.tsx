import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { DotScreenShader } from './ui/dot-shader-background';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden relative">
      {/* 1. Background Shader Effect */}
      <div className="absolute inset-0 z-0 opacity-60">
        <DotScreenShader />
      </div>

      {/* Ambient background glow for footer (kept as secondary overlay) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-zinc-900/50 blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pointer-events-auto">
          <div className="col-span-1 md:col-span-2">
            
            {/* Large Animated Logo */}
            <div className="flex items-center gap-6 mb-8">
              <motion.div
                animate={{ 
                  y: [-10, 10, -10], // Floating up and down
                  rotate: [0, 5, -5, 0] // Subtle tilt
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                 {/* Shadow casting below the coin to enhance levitation */}
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/80 blur-lg rounded-full"></div>
                 
                 <img 
                    src="https://res.cloudinary.com/dsmdtfbfd/image/upload/v1770773088/BLACKCHIP_COIN_viw7qw.jpg" 
                    alt="Black Chip Coin" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                 />
              </motion.div>

              <div className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black tracking-tighter text-white">BKC</span>
                <span className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase mt-1">Global Agency</span>
              </div>
            </div>

            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed font-light">
              Transformando ideas abstractas en imperios digitales. <br/>
              <strong className="text-white font-medium">Black Chip</strong> es tu ventaja competitiva en la era tecnológica.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:scale-110 transition-all duration-300">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4 inline-block">Servicios</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              {['Desarrollo Web', 'Diseño UI/UX', 'E-Commerce', 'SEO & Marketing'].map((item) => (
                 <li key={item}>
                    <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-zinc-700 rounded-full group-hover:bg-white transition-colors"></span>
                      {item}
                    </a>
                 </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4 inline-block">Legal</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              {['Privacidad', 'Términos', 'Cookies'].map((item) => (
                 <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 pointer-events-auto">
          <p className="text-zinc-600 text-xs text-center md:text-left uppercase tracking-wider">
            © {new Date().getFullYear()} Black Chip (BKC). Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <p className="text-zinc-500 text-xs font-mono uppercase">
               System Operational
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;