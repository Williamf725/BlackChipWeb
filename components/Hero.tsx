import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from './ui/gradient-button';

// --- INTERACTIVE TEXT COMPONENT (Slow "Trapped Ball" Focus) ---
interface InteractiveTextProps {
  text: string;
  className?: string;
  maxBlur?: number; // Maximum blur intensity in px
  radius?: number; // Radius of the "spot" in px
  lag?: number; // 0 to 1 (lower is slower/heavier)
  containerClass?: string;
}

const InteractiveText: React.FC<InteractiveTextProps> = ({ 
  text, 
  className = "", 
  maxBlur = 8, 
  radius = 80,
  lag = 0.08, // Very slow/heavy movement by default
  containerClass = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  
  // Mouse position (Target)
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // The "Ball" current position (Interpolated)
  const ballRef = useRef({ x: 0, y: 0 });
  const isFirstFrame = useRef(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const loop = () => {
      if (containerRef.current) {
        // 1. Get Boundaries (The "Trap")
        const rect = containerRef.current.getBoundingClientRect();

        // Initialize ball position to center of text on first frame to avoid flying in
        if (isFirstFrame.current) {
            ballRef.current = { 
                x: rect.left + rect.width / 2, 
                y: rect.top + rect.height / 2 
            };
            mouseRef.current = { // Also set mouse ref to avoid initial jump
                x: rect.left + rect.width / 2, 
                y: rect.top + rect.height / 2 
            };
            isFirstFrame.current = false;
        }

        // 2. Calculate Target Point (Clamped within bounds)
        // This is where the ball *wants* to go
        const targetX = Math.max(rect.left, Math.min(mouseRef.current.x, rect.right));
        const targetY = Math.max(rect.top, Math.min(mouseRef.current.y, rect.bottom));

        // 3. Interpolate Ball Position (The "Slowness" logic)
        // Move current ball position slightly towards target
        ballRef.current.x += (targetX - ballRef.current.x) * lag;
        ballRef.current.y += (targetY - ballRef.current.y) * lag;

        const virtualX = ballRef.current.x;
        const virtualY = ballRef.current.y;

        // 4. Apply Effect to each letter based on the Slow Ball position
        lettersRef.current.forEach((span) => {
          if (!span) return;
          
          const spanRect = span.getBoundingClientRect();
          const spanCenterX = spanRect.left + spanRect.width / 2;
          const spanCenterY = spanRect.top + spanRect.height / 2;

          // Calculate distance from the Slow Ball to the Letter
          const dist = Math.sqrt(
            Math.pow(virtualX - spanCenterX, 2) + 
            Math.pow(virtualY - spanCenterY, 2)
          );

          // 5. Calculate Blur Magnitude
          let blurAmount = 0;
          
          if (dist < radius) {
            // Normalize distance (0 to 1)
            const normalizedDist = dist / radius;
            // Smooth easing (Bell curve-ish)
            const intensity = Math.max(0, 1 - normalizedDist);
            blurAmount = intensity * maxBlur;
          }

          // Apply styles
          if (blurAmount > 0.1) {
            span.style.filter = `blur(${blurAmount.toFixed(2)}px)`;
            // Subtle opacity change
            span.style.opacity = `${1 - (blurAmount / maxBlur) * 0.2}`; // Slight dimming on blur
          } else {
            span.style.filter = 'none';
            span.style.opacity = '1';
          }
        });
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [maxBlur, radius, lag]);

  return (
    <div ref={containerRef} className={`relative inline-block cursor-default ${containerClass}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => { lettersRef.current[i] = el; }}
          className={`inline-block ${className}`}
          style={{ 
            willChange: 'filter, opacity',
            padding: '0em', 
            margin: '0em',
            // No CSS transition here because we are doing physics in JS
            whiteSpace: 'pre'
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
      
      {/* 1. Background Video Container - Full Height */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for contrast */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
        >
          <source src="https://res.cloudinary.com/dsmdtfbfd/video/upload/v1770768527/video_20260210_181218_edit_o8xisv.mp4" type="video/mp4" />
        </video>
        {/* Gradient fade at bottom of video to merge slightly with the black bar */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-20 flex flex-col items-center w-full h-full pointer-events-none">
        
        {/* H1 - Massive Title with SLOW TRAPPED BALL BLUR */}
        <div className="absolute top-[15%] w-full flex justify-center pointer-events-auto mix-blend-screen scale-y-110 origin-center opacity-90">
             <InteractiveText 
                text="BKC"
                maxBlur={12} // Reduced blur (subtle)
                radius={140} // Small "ball" size relative to huge text
                lag={0.05} // VERY slow movement (heavy fluid feel)
                // CHANGED: Added metallic asphalt gradient (white -> zinc-600)
                className="font-['Space_Grotesk'] font-medium bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent leading-[0.85] tracking-tight text-[clamp(7rem,28vw,22rem)] select-none"
            />
        </div>

        {/* Subtitle - Now with Interactive Blur Effect */}
        {/* Gap minimized to almost zero with slight margin (gap-0 mobile, gap-2px desktop) */}
        <div className="absolute top-[68%] w-full pointer-events-auto z-20 flex flex-col items-center gap-0 md:gap-[2px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center"
            >
                {/* Applied InteractiveText to subtitle line 1 */}
                <InteractiveText 
                    text="Tus ideas más ambiciosas"
                    maxBlur={3} // Less blur for smaller text to keep it somewhat readable
                    radius={60} // Smaller ball
                    lag={0.1} // Slightly faster reaction than title
                    // CHANGED: Added Gradient & changed font-light to font-normal
                    className="font-['Space_Grotesk'] bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent text-[1.425rem] md:text-[1.9rem] tracking-wide font-normal"
                />
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }} // Slight delay for second line
                className="text-center"
            >
                {/* Applied InteractiveText to subtitle line 2 */}
                <InteractiveText 
                    text="se materializan en BKC"
                    maxBlur={3}
                    radius={60}
                    lag={0.1}
                    // CHANGED: Added Gradient & changed font-light to font-normal
                    className="font-['Space_Grotesk'] bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent text-[1.18rem] md:text-[1.66rem] tracking-wide font-normal"
                />
            </motion.div>
        </div>

        {/* CTA Button */}
        {/* Scale reduced by 10% (0.9 -> 0.81) */}
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