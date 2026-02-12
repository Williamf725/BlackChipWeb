import React, { useEffect, useRef } from 'react';
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
        <div className="absolute top-[15%] w-full flex justify-center pointer-events-auto mix-blend-screen scale-y-110 origin-center opacity-100">
             <InteractiveText 
                text="BKC"
                maxBlur={12} 
                radius={140} 
                lag={0.05} 
                className="font-['Rubik_Glitch'] text-white leading-[0.85] tracking-tight text-[clamp(7rem,28vw,22rem)] select-none drop-shadow-[4px_4px_0px_#00f0ff] glitch-skew"
            />
        </div>

        {/* Subtitle */}
        <div className="absolute top-[68%] w-full pointer-events-auto z-20 flex flex-col items-center gap-2 md:gap-3">
            <div className="text-center opacity-100">
                <InteractiveText 
                    text="Tus ideas más ambiciosas"
                    maxBlur={3} 
                    radius={60} 
                    lag={0.1} 
                    className="font-['Share_Tech_Mono'] text-[#00f0ff] text-[1.1rem] md:text-[1.6rem] tracking-[0.15em] font-normal uppercase drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]"
                />
            </div>
            
            <div className="text-center opacity-100">
                <InteractiveText 
                    text="se materializan en BKC"
                    maxBlur={3}
                    radius={60}
                    lag={0.1}
                    className="font-['Share_Tech_Mono'] text-[#00f0ff] text-[0.9rem] md:text-[1.4rem] tracking-[0.15em] font-normal uppercase drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]"
                />
            </div>
        </div>

        {/* CTA Button */}
        <div className="absolute top-[90%] pointer-events-auto scale-[0.81]">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-12 py-4 text-lg font-['Share_Tech_Mono'] font-bold tracking-[0.2em] text-[#00f0ff] uppercase bg-black/20 border-2 border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_40px_rgba(0,240,255,0.6)] hover:scale-105"
            >
              COMIENZA AHORA
            </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;