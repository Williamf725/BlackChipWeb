import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);

  // Dimensions of the actual rendered image
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
    <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/*
        This container centers the image.
        The image uses object-contain to never be cropped.
      */}
      <div className="relative flex items-center justify-center w-full h-full p-4 md:p-8">
        <img
          ref={imageRef}
          src="https://res.cloudinary.com/dvpnkr2i9/image/upload/v1771016492/unnamed_ll8rp6.png"
          alt="404 Not Found"
          className="max-w-[85%] max-h-[85vh] object-contain drop-shadow-2xl"
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
              onClick={() => navigate('/')}
              className="absolute left-1/2 -translate-x-1/2 cursor-pointer hover:bg-white/5 rounded-xl transition-colors pointer-events-auto"
              style={{
                bottom: '14%', // Tuned to align with the drawn button
                width: '32%',  // Width of the button area
                height: '10%'  // Height of the button area
              }}
              aria-label="Regresar al Inicio"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  navigate('/');
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
