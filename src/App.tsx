import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Loading from './components/Loading';
import Particle from './components/hero/Particle';
import { Toaster } from "react-hot-toast";
function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loading onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <Particle />
      <div className="relative z-10 w-full min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
}

export default App;