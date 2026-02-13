import React from 'react';
import { X, WifiOff } from 'lucide-react';

interface OfflineModalProps {
  onClose: () => void;
}

const OfflineModal: React.FC<OfflineModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-black/90 border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(255,255,255,0.1)] animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
          aria-label="Cerrar modal"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] ring-1 ring-white/10">
            <WifiOff size={32} className="text-white/80" />
          </div>

          <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-white tracking-wide uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Conexión Interrumpida
          </h2>

          <p className="font-['Share_Tech_Mono'] text-white/70 text-sm md:text-base leading-relaxed max-w-[90%]">
            Tu acceso a la red se ha desvanecido, pero tu visión sigue intacta.
            Restablece tu señal para continuar la experiencia BKC.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="group relative inline-flex items-center justify-center px-10 py-3 text-sm font-['Share_Tech_Mono'] font-bold tracking-[0.2em] text-white uppercase bg-white/5 border border-white/30 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 mt-2"
          >
            <span className="relative z-10">Reintentar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfflineModal;
