import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TRANSFORMATION_FEATURES } from '../constants';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

const DigitalTransformation: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="transformation" className="py-24 bg-zinc-950 relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>

        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-bold text-white tracking-wide uppercase">Ingeniería de Vanguardia</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1] drop-shadow-2xl"
          >
            TU IDEA. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 animate-gradient-x drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">TRANSFORMADA.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            Sin importar el tamaño de tu negocio o lo ambiciosa que sea tu visión.
            Construimos ecosistemas digitales <span className="text-white font-semibold underline decoration-purple-500/50 underline-offset-4">profesionales, seguros y escalables</span>.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {TRANSFORMATION_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-zinc-800/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-purple-500/50 shadow-lg">
                  <feature.icon className="w-7 h-7 text-zinc-300 group-hover:text-purple-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 font-['Space_Grotesk'] tracking-tight">{feature.title}</h3>
                <p className="text-zinc-400 group-hover:text-zinc-300 text-base leading-relaxed transition-colors">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          {/* Banner Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-black to-zinc-900/40"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                ¿Listo para el siguiente nivel?
              </h3>
              <p className="text-zinc-400 text-lg">
                Ofrecemos <span className="text-cyan-400 font-semibold">calidad de agencia internacional</span> con precios optimizados para startups y empresas en crecimiento.
              </p>
            </div>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
            >
              <Zap className="w-5 h-5 fill-black" />
              COTIZAR AHORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DigitalTransformation;
