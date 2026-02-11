import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Mouse position state for 3D parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

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
  }

  // Transform for the 3D tilt
  const rotateX = useTransform(mouseY, [-1, 1], [5, -5]); 
  const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]);
  
  const contentX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const contentY = useTransform(mouseY, [-1, 1], [-20, 20]);

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
          className="w-full h-full object-cover brightness-110" // Brighter, no opacity
        >
          <source src="https://res.cloudinary.com/dsmdtfbfd/video/upload/v1770768527/video_20260210_181218_edit_o8xisv.mp4" type="video/mp4" />
        </motion.video>
        
        {/* Blur Transition Layer */}
        {/* Starts clear and becomes blurry towards the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] z-10" />

        {/* Gradient to Black Layer */}
        {/* Ensures smooth transition to the next section (solid black) */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
      </div>

      {/* Main Interactive Content */}
      <motion.div 
        className="relative z-30 container mx-auto px-4 text-center transform-style-3d cursor-default"
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
            
            {/* SINGLE LAYER: Static Elegant Style */}
            <div className="relative z-10 select-none">
                {/* BKC Title - Reduced Size (~10% smaller) */}
                <h1 
                  className="font-outfit font-black text-[6.5rem] md:text-[10.5rem] lg:text-[14.5rem] leading-[0.85] tracking-tighter"
                  style={{ 
                    backgroundImage: 'linear-gradient(180deg, #FFFFFF 20%, #94a3b8 100%)', // Silver Metal
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.8))' // Increased shadow for contrast
                  }}
                >
                  BKC
                </h1>
                
                {/* SUBTITLE - Reduced Size (~10% smaller) */}
                <h2 
                    className="mt-4 text-[1.2rem] md:text-[2.4rem] font-outfit font-bold tracking-tight uppercase"
                    style={{
                        color: '#d4d4d8', // Zinc-300 (Light Grey)
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)' // Increased shadow
                    }}
                >
                    Hacemos tus ideas realidad
                </h2>
            </div>
            
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
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 cursor-pointer text-zinc-500 hover:text-white transition-colors"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;