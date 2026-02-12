import React from 'react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative background element - Darkened for high contrast with glowing cards */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-zinc-900/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white"
          >
            SOLUCIONES <span className="text-zinc-600">INTEGRALES</span>
          </h2>
          <p
            className="text-xl text-zinc-400 max-w-2xl mx-auto font-light"
          >
            Elevamos el estándar. No vendemos solo código; construimos el ecosistema digital de tu futuro imperio.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <li className="list-none min-h-[14rem] h-full">
      <div className="relative h-full rounded-[1.25rem] border border-white/10 p-2 md:rounded-[1.5rem] md:p-3 bg-zinc-950/30">
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/5 bg-zinc-900/50 p-6 shadow-sm transition-colors hover:bg-zinc-900/80">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-white/10 bg-black/50 p-3 shadow-inner">
              <service.icon className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-3 mt-4">
              <h3 className="pt-0.5 text-2xl leading-tight font-bold font-['Space_Grotesk'] tracking-tight text-white">
                {service.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Services;