import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-black relative">
       {/* Decorative Lines */}
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-white/5 flex flex-col lg:flex-row shadow-2xl"
        >
          
          {/* Info Side */}
          <div className="bg-white text-black p-12 lg:p-16 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-9xl font-black text-zinc-100 select-none pointer-events-none tracking-tighter opacity-50">
               BKC
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-none">
                HABLEMOS <br /> DE NEGOCIOS.
              </h3>
              <p className="text-zinc-600 mb-10 font-medium text-lg leading-relaxed">
                ¿Tienes una idea? ¿Un problema? ¿Una ambición? Escríbenos. Te responderemos con una estrategia, no con un mensaje automático.
              </p>
              
              <div className="space-y-8">
                <a href="mailto:contacto@blackchip.com" className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Email</span>
                    <span className="font-bold text-lg group-hover:underline decoration-2 underline-offset-4">contacto@blackchip.com</span>
                  </div>
                </a>
                
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                   <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Ubicación</span>
                    <span className="font-bold text-lg">Global, Remote First</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 relative z-10">
               <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                 Tiempo de respuesta promedio: <span className="text-black">2 Horas</span>
               </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 lg:p-16 lg:w-3/5 bg-zinc-950/80">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 group-focus-within:text-white transition-colors">Nombre</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-all placeholder-zinc-700 font-medium text-lg" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 group-focus-within:text-white transition-colors">Empresa</label>
                  <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-all placeholder-zinc-700 font-medium text-lg" placeholder="Tu Marca Inc." />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 group-focus-within:text-white transition-colors">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:outline-none focus:border-white transition-all placeholder-zinc-700 font-medium text-lg" placeholder="hola@ejemplo.com" />
              </div>

              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3 group-focus-within:text-white transition-colors">Tu Visión</label>
                <textarea rows={4} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-white focus:bg-zinc-900 transition-all placeholder-zinc-700 resize-none text-lg" placeholder="Cuéntanos qué quieres lograr..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-white text-black font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all group"
              >
                <span>Enviar Propuesta</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;