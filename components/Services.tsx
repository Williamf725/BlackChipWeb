import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white"
          >
            SOLUCIONES <span className="text-zinc-600">INTEGRALES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto font-light"
          >
            Elevamos el estándar. No vendemos solo código; construimos el ecosistema digital de tu futuro imperio.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-start h-full">
                <div className="mb-8 p-4 rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-100 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;