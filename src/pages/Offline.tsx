import React, { useState } from 'react';
import errorConexionImage from '../assets/images/ErrorConexionimage.png';
import OfflineModal from '../components/OfflineModal';

const Offline: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-full h-screen bg-black overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${errorConexionImage})` }}
      >
        {/* Invisible Overlay Button - Positioned approx bottom 15% */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 w-[320px] h-[100px] cursor-pointer z-50 bg-transparent"
          aria-label="Ver detalles de conexión"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsModalOpen(true);
            }
          }}
        />
      </div>

      {isModalOpen && <OfflineModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Offline;
