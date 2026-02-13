import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
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
      { threshold: 0.1 }
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
        {/* Dark overlay for video readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-90"
          style={{ willChange: "transform" }}
        >
          <source src="https://res.cloudinary.com/dsmdtfbfd/video/upload/v1770768527/video_20260210_181218_edit_o8xisv.mp4" type="video/mp4" />
        </video>

      </div>

      {/* 2. Main Content */}
      <div className="relative z-30 flex flex-col items-center w-full h-full pointer-events-none">

        {/* H1 - Title (Static, Space Grotesk, Neon White) */}
        <div className="absolute top-[15%] w-full flex justify-center pointer-events-auto scale-y-110 origin-center drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]">
             <h1 className="font-['Space_Grotesk'] font-black text-white leading-[0.85] tracking-tight text-[clamp(6.5rem,26vw,20.25rem)] select-none">
                BKC
             </h1>
        </div>

        {/* Subtitle (White Neon Glow) */}
        <div className="absolute top-[68%] w-full pointer-events-auto z-20 flex flex-col items-center gap-2 md:gap-3">
            <div className="text-center opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                <span className="font-['Share_Tech_Mono'] text-white text-[1.1rem] md:text-[1.6rem] tracking-[0.15em] font-normal uppercase">
                    Tus ideas más ambiciosas
                </span>
            </div>

            <div className="text-center opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                <span className="font-['Share_Tech_Mono'] text-white text-[0.9rem] md:text-[1.4rem] tracking-[0.15em] font-normal uppercase">
                    se materializan en BKC
                </span>
            </div>
        </div>

        {/* CTA Button (Pill Shape, White Neon Glow) */}
        <div className="absolute top-[90%] pointer-events-auto scale-[0.81]">
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-12 py-4 text-lg font-['Share_Tech_Mono'] font-bold tracking-[0.2em] text-white uppercase bg-white/5 border border-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] hover:scale-105"
            >
              COMIENZA AHORA
            </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;