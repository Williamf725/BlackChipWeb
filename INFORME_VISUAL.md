# Informe de Estética Visual y Experiencia de Usuario - Black Chip (BKC)

Este documento detalla el análisis visual, las animaciones y la experiencia estética general del sitio web de Black Chip (BKC), basado en el código fuente actual.

## 1. Identidad Visual General

El sitio web presenta una estética **"Dark Mode Premium"**, caracterizada por fondos negros profundos, tipografía sans-serif moderna y un uso intensivo de transparencias y desenfoques (Glassmorphism). La atmósfera es futurista, tecnológica y exclusiva.

*   **Paleta de Colores:**
    *   **Base:** Negro absoluto (`#000000`) y variaciones de Zinc/Gris oscuro (`zinc-900`, `zinc-950`).
    *   **Texto:** Blanco puro (`#FFFFFF`) para títulos principales y Zinc gris (`zinc-400`, `zinc-500`) para cuerpos de texto, creando una jerarquía visual clara.
    *   **Acentos:**
        *   **Ámbar/Dorado:** Usado sutilmente en el resplandor de la moneda del logo (`amber-500/20`).
        *   **Plata/Metal:** Gradientes lineales en títulos grandes (`Hero`).
        *   **Azul/Índigo:** Desenfoques de fondo en la sección de Servicios.
        *   **Esmeralda/Verde:** Indicadores de estado ("System Operational", "Crecimiento Garantizado").
*   **Tipografía:**
    *   **Principal:** `Outfit` (Sans-serif geométrica) para la mayoría de los textos, transmitiendo modernidad y limpieza.
    *   **Secundaria:** `Playfair Display` (Serif) para toques de elegancia clásica.
    *   **Acento:** `Syne` (disponible pero usada con moderación).
*   **Estilo de Scroll:**
    *   Scroll suave (`scroll-behavior: smooth`).
    *   Barra de desplazamiento personalizada: delgada (8mm), oscura (`#09090b`), con un "thumb" redondeado (`#27272a`) que se oscurece al pasar el ratón.

## 2. Análisis por Sección

### A. Navbar (Barra de Navegación)
*   **Efecto Glassmorphism:** La barra comienza transparente y, al hacer scroll (`window.scrollY > 50`), se transforma en un panel de vidrio oscuro (`bg-black/80 backdrop-blur-md`) con un borde inferior sutil (`border-white/10`).
*   **Logo Interactivo:**
    *   Una moneda ("Black Chip Coin") gira infinitamente (`rotate: 360`, duración 20s).
    *   Tiene un resplandor ámbar detrás (`bg-amber-500/20`) que se intensifica al pasar el ratón (`group-hover:bg-amber-500/40`).
*   **Menú Desktop:**
    *   Enlaces con efecto de subrayado animado: una línea blanca crece de 0% a 100% al hacer hover.
    *   Botón "Cotizar": Fondo blanco sólido que contrasta fuertemente, con sombra brillante al hacer hover (`hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]`).
*   **Menú Móvil:** Despliegue suave con animación de altura y opacidad (`AnimatePresence`).

### B. Hero (Sección Principal)
*   **Fondo de Video:**
    *   Video en bucle (`video_20260210_181218_edit_o8xisv.mp4`) que ocupa toda la pantalla.
    *   Efecto de "escala" inicial: el video comienza con zoom (1.15x) y se reduce suavemente (1.05x).
    *   **Transición de Desenfoque:** Un degradado inferior aplica un efecto `backdrop-blur` progresivo, fusionando el video con el fondo negro de la siguiente sección.
*   **Efecto 3D Parallax (Tilt):**
    *   El contenedor principal reacciona al movimiento del ratón.
    *   Calcula la posición del cursor para rotar el contenido en los ejes X e Y (`rotateX`, `rotateY`), creando una sensación de profundidad 3D.
*   **Tipografía "BKC":**
    *   Gigante (`text-[14.5rem]` en desktop).
    *   **Estilo Metálico:** Relleno con un gradiente lineal de blanco a plata (`linear-gradient(180deg, #FFFFFF 20%, #94a3b8 100%)`) y `background-clip: text`.
    *   Sombra pronunciada (`drop-shadow(0 10px 20px rgba(0,0,0,0.8))`) para separarlo del fondo.
*   **Insignia "Descubre el Futuro":**
    *   Estilo cápsula de vidrio (`bg-black/40 backdrop-blur-md`).
    *   Punto azul pulsante (`animate-pulse`) que simula actividad.
*   **Indicador de Scroll:**
    *   Icono de flecha hacia abajo (`ChevronDown`) con animación de rebote infinito (`y: [0, 10, 0]`).

### C. Servicios
*   **Fondo:** Negro sólido con una "mancha" de luz azul decorativa en la esquina superior derecha (`bg-blue-900/10 blur-[120px]`), añadiendo profundidad atmosférica.
*   **Animación de Entrada:** Títulos y tarjetas aparecen con un efecto escalonado (`staggerChildren: 0.2`).
*   **Tarjetas de Servicios:**
    *   Estilo: Paneles oscuros translúcidos (`bg-zinc-900/30`, `backdrop-blur-sm`) con bordes sutiles.
    *   **Interacción Hover:**
        1.  La tarjeta se eleva (`y: -10`).
        2.  Un degradado interno (`bg-gradient-to-br`) pasa de opacidad 0 a 100.
        3.  El icono cambia de fondo gris a un fondo más claro/blanco.
        4.  El texto descriptivo se ilumina (`text-zinc-500` -> `text-zinc-300`).

### D. About (Visión y Trayectoria)
*   **Elementos Flotantes de Fondo:**
    *   Dos grandes orbes de luz (blanco y añil) con desenfoque extremo (`blur-[120px]`).
    *   Animación de "respiración": escalan y cambian de opacidad en un ciclo infinito de 10 segundos.
*   **Indicadores de Estado:**
    *   Badge "Crecimiento Garantizado" con un punto esmeralda que emite una onda expansiva (`animate-ping`).
*   **Lista de Beneficios:** Iconos `CheckCircle2` dentro de contenedores que se iluminan al pasar el ratón.
*   **Paneles de Estadísticas (Stats):**
    *   Uso de clase utilitaria `.glass-panel`: fondo muy sutil (`rgba(255, 255, 255, 0.03)`), desenfoque y borde fino.
    *   Al hacer hover, se elevan y el fondo se aclara ligeramente.
*   **Tarjeta "Team":**
    *   Fondo degradado oscuro (`from-zinc-900 to-black`).
    *   Flecha gigante (`ArrowUpRight`) en la esquina que aumenta de opacidad al hacer hover.

### E. Contacto
*   **Contenedor Principal:**
    *   Gran tarjeta flotante con bordes muy redondeados (`rounded-[2.5rem]`).
    *   Efecto de vidrio esmerilado (`bg-zinc-900/50 backdrop-blur-sm`) con sombra profunda (`shadow-2xl`).
*   **Panel Izquierdo (Información):**
    *   Fondo blanco sólido, creando un fuerte contraste con el resto del sitio oscuro.
    *   Marca de agua gigante "BKC" en gris claro.
    *   Iconos circulares que se expanden al hacer hover (`group-hover:scale-110`).
*   **Panel Derecho (Formulario):**
    *   Fondo oscuro semitransparente (`bg-zinc-950/80`).
    *   **Inputs Minimalistas:** Sin bordes laterales ni superiores, solo una línea inferior (`border-b`) que se ilumina al hacer foco.
    *   **Botón de Envío:** Blanco sólido, con animación de escala al presionar y desplazamiento del icono de avión de papel (`Send`).

### F. Footer (Pie de Página)
*   **Atmósfera:**
    *   Brillo ambiental central (`bg-zinc-900/50 blur-[100px]`) que emana desde la parte inferior.
*   **Moneda Levitante:**
    *   Versión grande del logo que "flota" suavemente arriba y abajo (`y: [-10, 10, -10]`) mientras se inclina ligeramente (`rotate: [0, 5, -5, 0]`).
    *   Sombra dinámica debajo de la moneda que refuerza el efecto de levitación.
*   **Indicador del Sistema:**
    *   Texto "System Operational" con un punto verde pulsante, reforzando la fiabilidad técnica.
*   **Redes Sociales:** Botones circulares con borde fino que se llenan de blanco e invierten el color del icono al hacer hover.

## 3. Tecnologías de Animación

*   **Framer Motion:** Es el motor principal de todas las transiciones. Se utiliza para:
    *   Animaciones de entrada (fade-in, slide-up) cuando los elementos entran en el viewport.
    *   Gestión de estados complejos como el menú móvil (`AnimatePresence`).
    *   Parallax reactivo al ratón (`useSpring`, `useTransform`).
    *   Animaciones perpetuas (bucles de rotación y flotación).
*   **CSS Transitions:** Se usan para micro-interacciones rápidas como cambios de color (`hover:text-white`) y opacidad, gestionadas a través de las clases de utilidad de Tailwind.
