import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(https://res.cloudinary.com/dvpnkr2i9/image/upload/v1771016492/unnamed_ll8rp6.png)` }}
    >
      {/* Invisible Overlay Button - Positioned approx bottom 15% */}
      <div
        onClick={() => navigate('/')}
        className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 w-[320px] h-[100px] cursor-pointer z-50 bg-transparent"
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
  );
};

export default NotFound;
