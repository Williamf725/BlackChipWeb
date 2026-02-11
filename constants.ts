import { Code2, Rocket, ShieldCheck, LineChart, BrainCircuit, Gem } from 'lucide-react';
import { NavItem, ServiceItem, StatItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#services' },
  { label: 'Visión', href: '#vision' },
  { label: 'Trayectoria', href: '#stats' },
  { label: 'Contacto', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Desarrollo Web Premium',
    description: 'Creamos experiencias digitales inmersivas y rápidas. No solo hacemos webs, construimos activos digitales que venden.',
    icon: Code2,
  },
  {
    title: 'Transformación de Negocios',
    description: '¿Tienes una pequeña empresa? La convertimos en una marca escalable y automatizada con tecnología de punta.',
    icon: Rocket,
  },
  {
    title: 'Consultoría Estratégica',
    description: '¿No tienes ideas claras? Nosotros diseñamos el plan de acción, la identidad y la estrategia por ti.',
    icon: BrainCircuit,
  },
  {
    title: 'SEO y Posicionamiento',
    description: 'Hacemos que tus clientes te encuentren. Estrategias orgánicas para dominar tu nicho de mercado.',
    icon: LineChart,
  },
  {
    title: 'Seguridad y Mantenimiento',
    description: 'Protección blindada para tu negocio digital. Tu tranquilidad es nuestra prioridad técnica.',
    icon: ShieldCheck,
  },
  {
    title: 'Diseño UX/UI de Alto Nivel',
    description: 'Estética futurista, elegante y funcional. Diseñamos para impresionar y convertir visitantes en clientes.',
    icon: Gem,
  },
];

export const STATS: StatItem[] = [
  { value: '+150', label: 'Proyectos Exitosos' },
  { value: '300%', label: 'Retorno de Inversión Promedio' },
  { value: '24/7', label: 'Soporte Dedicado' },
  { value: 'Global', label: 'Alcance de Mercado' },
];