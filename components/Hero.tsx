import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from './ui/gradient-button';

// --- STATIC TEXT COMPONENT (Optimized: Blur Removed) ---
interface InteractiveTextProps {
  text: string;
  className?: string;
  // Props kept for compatibility but ignored for performance
  maxBlur?: number;
  radius?: number;
  lag?: number;
  containerClass?: string;
}

const InteractiveText: React.FC<InteractiveTextProps> = ({ 
  text, 
  className = "", 
  containerClass = ""
}) => {
  // Optimization: Removed the heavy requestAnimationFrame loop that calculated blur per-character.
  // This was the primary cause of lag on scroll.
  // We keep the structure to maintain consistent styling (gradients, spacing).
  
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
            // Ensure no filter is applied
            filter: 'none',
            opacity: 1
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};


const Hero: React.FC = () => {
  // Optimization: Pause video when not in viewport to save resources
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-start bg-black overflow-hidden">
      
      {/* 1. Background Video Container */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
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
                maxBlur={12} 
                radius={140} 
                lag={0.05} 
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
                    maxBlur={3} 
                    radius={60} 
                    lag={0.1} 
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
                    maxBlur={3}
                    radius={60}
                    lag={0.1}
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