import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Mouse position state for 3D parallax and Spotlight effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXPixel = useMotionValue(0);
  const mouseYPixel = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 40, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 40, damping: 30 });

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    
    // Calculate normalized position (-1 to 1) for tilt
    const xPos = ((clientX - left) / width - 0.5) * 2;
    const yPos = ((clientY - top) / height - 0.5) * 2;

    x.set(xPos);
    y.set(yPos);
    
    // Calculate precise pixel position for the spotlight mask
    mouseXPixel.set(clientX - left);
    mouseYPixel.set(clientY - top); 
  }

  // Transform for the 3D tilt
  const rotateX = useTransform(mouseY, [-1, 1], [5, -5]); 
  const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]);
  
  const contentX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const contentY = useTransform(mouseY, [-1, 1], [-20, 20]);

  // The Mask: A radial gradient that reveals the COLOR layer under the mouse
  const maskImage = useMotionTemplate`radial-gradient(250px circle at ${mouseXPixel}px ${mouseYPixel}px, black, transparent)`;

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
         <motion.video
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50" 
        >
          <source src="https://res.cloudinary.com/dsmdtfbfd/video/upload/v1770768527/video_20260210_181218_edit_o8xisv.mp4" type="video/mp4" />
        </motion.video>
        
        {/* Gradients to ensure text readability against video */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      {/* Main Interactive Content */}
      <motion.div 
        className="relative z-20 container mx-auto px-4 text-center transform-style-3d cursor-default"
        style={{ 
          rotateX, 
          rotateY,
          x: contentX,
          y: contentY,
          transformStyle: "preserve-3d" 
        }}
      >
        <div className="relative inline-block py-10 px-4">
          
          <div className="flex flex-col items-center justify-center relative">
            
            {/* ==============================================
                LAYER 1: BASE (ALWAYS VISIBLE)
                Elegant White/Silver Metallic Style.
               ============================================== */}
            <div className="relative z-10 select-none">
                {/* BKC BASE */}
                <h1 
                  className="font-outfit font-black text-[7.2rem] md:text-[11.7rem] lg:text-[16.2rem] leading-[0.85] tracking-tighter"
                  style={{ 
                    backgroundImage: 'linear-gradient(180deg, #FFFFFF 20%, #94a3b8 100%)', // Silver Metal
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
                  }}
                >
                  BKC
                </h1>
                
                {/* SUBTITLE BASE */}
                <h2 
                    className="mt-4 text-[1.35rem] md:text-[2.7rem] font-outfit font-bold tracking-tight uppercase"
                    style={{
                        color: '#d4d4d8', // Zinc-300 (Light Grey)
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                    }}
                >
                    Hacemos tus ideas realidad
                </h2>
            </div>

            {/* ==============================================
                LAYER 2: THE COLOR REVEAL (Interactive)
                This layer sits strictly on top and is revealed by the mouse.
                It contains the Vibrant Tech Colors.
               ============================================== */}
            <motion.div 
                className="absolute inset-0 z-20 select-none pointer-events-none"
                style={{ 
                    maskImage,
                    WebkitMaskImage: maskImage 
                }}
            >
                {/* BKC COLORFUL */}
                <h1 
                  className="font-outfit font-black text-[7.2rem] md:text-[11.7rem] lg:text-[16.2rem] leading-[0.85] tracking-tighter"
                  style={{ 
                    backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6, #10b981)', // Blue -> Purple -> Green
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.6))' // Glowing aura
                  }}
                >
                  BKC
                </h1>

                {/* SUBTITLE COLORFUL */}
                <h2 
                    className="mt-4 text-[1.35rem] md:text-[2.7rem] font-outfit font-bold tracking-tight uppercase"
                    style={{
                         backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6, #10b981)', // Matching gradient
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.5))'
                    }}
                >
                    Hacemos tus ideas realidad
                </h2>
            </motion.div>
            
          </div>

        </div>
        
        {/* Badge / Tagline */}
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="mt-12 flex justify-center relative z-40"
        >
            <div className="px-6 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/5 hover:border-white/20 transition-colors cursor-pointer group">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase flex items-center gap-2 group-hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Descubre el Futuro
              </span>
            </div>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer text-zinc-500 hover:text-white transition-colors"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;