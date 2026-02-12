import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { STATS } from '../constants';
import { FloatingPaths } from './ui/background-paths';

const About: React.FC = () => {
  return (
    <section id="vision" className="py-32 bg-black relative overflow-hidden">
      
      {/* 1. Background Paths */}
      <div className="absolute inset-0 z-0 opacity-60">
         <FloatingPaths position={1} />
         <FloatingPaths position={-1} />
         <div className="absolute inset-0 bg-black/80 z-10" />
      </div>

      {/* Decorative Elements - Kept but made subtle */}
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] z-0 mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Content */}
          <div className="flex-1 space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white">Crecimiento Garantizado</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
              MÁS QUE CÓDIGO. <br />
              <span className="text-zinc-500">PURA ESTRATEGIA.</span>
            </h2>

            <p className="text-xl text-zinc-300 leading-relaxed font-light">
              En <span className="text-white font-bold">Black Chip (BKC)</span>, no solo programamos. Diseñamos el motor financiero de tu empresa. Tecnología de punta accesible, diseñada para convertir visitantes en clientes leales.
            </p>

            <div className="space-y-6 pt-4">
              {[
                { title: "Acompañamiento 360°", desc: "Te guiamos desde la idea abstracta hasta la facturación." },
                { title: "ROI Obsesivo", desc: "Cada pixel está diseñado para vender más." },
                { title: "Velocidad Supersónica", desc: "Lanzamientos en tiempo récord con calidad de estudio." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 group-hover:border-white/30 transition-colors backdrop-blur-sm">
                     <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-zinc-200 transition-colors">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div id="stats" className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center text-center cursor-default transition-all duration-300 bg-black/40 hover:bg-white/5 hover:-translate-y-1"
                >
                  <span className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-8 bg-gradient-to-r from-zinc-900/80 to-black/80 rounded-3xl border border-white/10 relative overflow-hidden group backdrop-blur-md hover:scale-[1.02] transition-transform duration-300">
               <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                 <ArrowUpRight className="w-20 h-20 text-white" />
               </div>
               <p className="text-xl md:text-2xl font-serif italic text-zinc-200 relative z-10">
                 "Tu éxito no es negociable. Es nuestra única métrica."
               </p>
               <div className="mt-6 flex items-center gap-4 relative z-10">
                 <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-black text-sm">BKC</div>
                 <div>
                   <p className="text-sm font-bold text-white uppercase tracking-widest">Black Chip Team</p>
                   <p className="text-xs text-zinc-500">Global Agency</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;