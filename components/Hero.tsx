import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from './ui/gradient-button';

// --- STATIC TEXT COMPONENT (No Blur/Animation Logic) ---
interface InteractiveTextProps {
  text: string;
  className?: string;
  containerClass?: string;
}

const InteractiveText: React.FC<InteractiveTextProps> = ({ 
  text, 
  className = "", 
  containerClass = ""
}) => {
  // Simplified component: Just renders the text with the split structure 
  // to maintain the exact same gradient/layout styling as before, 
  // but without any JS animation loop or blur filters.
  return (
    <div className={`relative inline-block cursor-default ${containerClass}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`inline-block ${className}`}
          style={{ 
            padding: '0em', 
            margin: '0em',
            whiteSpace: 'pre',
            filter: 'none', // Force no blur
            opacity: 1      // Force full opacity
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-start bg-black overflow-hidden">
      
      {/* 1. Background Video Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
          style={{ willChange: "transform" }} // Hints browser to optimize video layer
        >
          <source src="https://res.cloudinary.com/dsmdtfbfd/video/upload/v1770768527/video_20260210_181218_edit_o8xisv.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-20 flex flex-col items-center w-full h-full pointer-events-none">
        
        {/* H1 */}
        <div className="absolute top-[15%] w-full flex justify-center pointer-events-auto mix-blend-screen scale-y-110 origin-center opacity-90">
             <InteractiveText 
                text="BKC"
                className="font-['Space_Grotesk'] font-medium bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent leading-[0.85] tracking-tight text-[clamp(7rem,28vw,22rem)] select-none"
            />
        </div>

        {/* Subtitle */}
        <div className="absolute top-[68%] w-full pointer-events-auto z-20 flex flex-col items-center gap-0 md:gap-[2px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center"
            >
                <InteractiveText 
                    text="Tus ideas más ambiciosas"
                    className="font-['Space_Grotesk'] bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent text-[1.425rem] md:text-[1.9rem] tracking-wide font-normal"
                />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }} 
                className="text-center"
            >
                <InteractiveText 
                    text="se materializan en BKC"
                    className="font-['Space_Grotesk'] bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent text-[1.18rem] md:text-[1.66rem] tracking-wide font-normal"
                />
            </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 0.81 }} 
            whileHover={{ scale: 0.85 }}
            whileTap={{ scale: 0.78 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-[90%] pointer-events-auto"
        >
            <GradientButton asChild className="h-14 px-10 text-lg shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]">
              <a href="#contact">
                Comienza Ahora
              </a>
            </GradientButton>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;