import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DigitalTransformation from './components/DigitalTransformation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Premium separator: Subtle gradient creating a "depth" transition between black sections
const SectionDivider = () => (
  <div className="w-full h-24 bg-gradient-to-b from-black via-zinc-900/30 to-black pointer-events-none relative z-10" aria-hidden="true" />
);

function App() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />

        {/* Hero transitions to black via its own internal overlay.
            Services starts with black background.
            No divider needed here to keep the video fade seamless. */}
        <Services />

        {/* New Transformation Section with Divider */}
        <SectionDivider />
        <DigitalTransformation />

        {/* Soft gradient transition between Transformation and About */}
        <SectionDivider />

        <About />

        {/* Soft gradient transition between About and Contact */}
        <SectionDivider />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;