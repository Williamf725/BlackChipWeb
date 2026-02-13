import React from 'react';
import { TRANSFORMATION_FEATURES, STATS } from '../constants';
import { WifiOff, Zap, Eye, Target } from 'lucide-react';

const OfflineContent: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9998] bg-black text-white overflow-y-auto font-['Space_Grotesk'] animate-in slide-in-from-bottom duration-500">

      {/* Warning Header */}
      <div className="sticky top-0 z-50 bg-red-900/90 backdrop-blur-md border-b border-red-500/20 px-6 py-3 flex items-center justify-center space-x-3 shadow-lg">
        <WifiOff size={20} className="text-red-200 animate-pulse" />
        <span className="text-sm md:text-base font-bold text-red-100 uppercase tracking-widest">
          Modo Offline Activado
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24">

        {/* Hero Section */}
        <section className="text-center space-y-8">
          <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-4">
            <Zap size={48} className="text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            TU VISIÓN SIGUE INTACTA
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            La conexión se ha perdido, pero el progreso no se detiene. Mientras recuperas la señal, explora la filosofía que impulsa a Black Chip.
          </p>
        </section>

        {/* Vision Section */}
        <section className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Eye size={200} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center space-x-3">
            <Target className="text-blue-500" />
            <span>Nuestra Misión</span>
          </h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl leading-relaxed text-white/80">
              En un mundo saturado de ruido digital, no buscamos ser una agencia más.
              <span className="text-white font-bold"> Black Chip</span> nace para redefinir los límites de lo posible.
              Creemos en la tecnología no como un fin, sino como el medio definitivo para potenciar la ambición humana.
            </p>
            <p className="text-lg leading-relaxed text-white/60 mt-6">
              Cada línea de código, cada píxel y cada estrategia que diseñamos tiene un único propósito:
              convertir ideas abstractas en realidades tangibles y escalables.
            </p>
          </div>
        </section>

        {/* Transformation Features Grid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center uppercase tracking-widest opacity-80">
            Pilares de Transformación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TRANSFORMATION_FEATURES.map((feature, index) => (
              <div
                key={index}
                className="group bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-white/40 mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-t border-white/10 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk']">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/40 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-white/30 text-sm pt-20 pb-10">
          <p>© {new Date().getFullYear()} Black Chip. Esperando reconexión...</p>
        </footer>

      </div>
    </div>
  );
};

export default OfflineContent;
