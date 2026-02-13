import React, { useRef, useState, useEffect } from 'react';

interface OfflineOverlayProps {
  onEnterOfflineMode: () => void;
}

const OfflineOverlay: React.FC<OfflineOverlayProps> = ({ onEnterOfflineMode }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imgDim, setImgDim] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current) {
        setImgDim({
          width: imageRef.current.clientWidth,
          height: imageRef.current.clientHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial calculation
    handleResize();

    // Also update on load
    const img = imageRef.current;
    if (img && img.complete) {
      handleResize();
    } else if (img) {
      img.onload = handleResize;
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden animate-in fade-in duration-300">
      {/*
        This container centers the image.
        The image uses object-contain to never be cropped.
      */}
      <div className="relative flex items-center justify-center w-full h-full p-4 md:p-8">
        <img
          ref={imageRef}
          src="https://res.cloudinary.com/dvpnkr2i9/image/upload/v1771016493/unnamed_1_kcihqq.png"
          alt="Conexión Interrumpida"
          className="max-w-[85%] max-h-[85vh] object-contain drop-shadow-2xl select-none"
          draggable={false}
        />

        {/*
          Overlay Container that matches the EXACT size of the rendered image.
          This ensures percentages for button placement are accurate regardless of screen size.
        */}
        {imgDim.width > 0 && (
          <div
            className="absolute z-10 pointer-events-none"
            style={{
              width: imgDim.width,
              height: imgDim.height,
            }}
          >
            {/* The actual clickable area */}
            <div
              onClick={onEnterOfflineMode}
              className="absolute left-1/2 -translate-x-1/2 cursor-pointer hover:bg-white/5 rounded-xl transition-colors pointer-events-auto"
              style={{
                bottom: '14%', // Tuned to align with the drawn button
                width: '32%',  // Width of the button area
                height: '10%'  // Height of the button area
              }}
              aria-label="Ver información offline"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onEnterOfflineMode();
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OfflineOverlay;
