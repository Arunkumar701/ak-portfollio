
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

// Lazy load new sections
const Certifications = lazy(() => import('./components/Certifications'));
const Network = lazy(() => import('./components/Network'));

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: string) => {
    if (page === activePage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <Hero onExplore={() => handlePageChange('projects')} />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'certifications': return <Certifications />;
      case 'network': return <Network />;
      case 'experience': return <Experience />;
      case 'contact': return <Contact />;
      default: return <Hero onExplore={() => handlePageChange('projects')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-green-500 selection:text-black font-sans">
      {/* Decorative Scan Line */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <div className="scan-line absolute w-full top-0"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>

      <Navbar activePage={activePage} onNavigate={handlePageChange} isScrolled={isScrolled} />
      
      <main className={`relative z-10 min-h-screen transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
        <Suspense fallback={<div className="flex items-center justify-center h-screen font-mono text-green-500">DECRYPTING_CONTENT...</div>}>
          {renderPage()}
        </Suspense>
      </main>

      <footer className="py-12 border-t border-gray-800 text-center relative z-10 bg-gray-950/50">
        <p className="text-gray-500 text-sm mb-4">
          Arun Kumar K &copy; {new Date().getFullYear()} | Secure Architecture
        </p>
        <div className="flex justify-center items-center gap-2 text-green-500 font-mono text-xs animate-pulse">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          CONNECTION_ENCRYPTED_AES_256
        </div>
      </footer>

    </div>
  );
};

export default App;
