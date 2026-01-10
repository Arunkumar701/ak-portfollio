
import React from 'react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, isScrolled }) => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Network', id: 'network' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Experience', id: 'experience' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800 py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="text-xl font-bold tracking-tighter flex items-center gap-2 group focus:outline-none"
        >
          <span className="text-green-500 group-hover:animate-pulse font-mono">&gt;</span>
          <span className="text-white">arun.kumar</span>
          <span className="text-gray-500">.tech</span>
        </button>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-[9px] lg:text-[10px] font-mono tracking-[0.1em] lg:tracking-[0.2em] uppercase transition-all duration-300 px-1 py-1 relative group focus:outline-none ${
                activePage === link.id ? 'text-green-500' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {link.name}
              {activePage === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-green-500 animate-pulse"></span>
              )}
            </button>
          ))}
          <button
            onClick={() => onNavigate('contact')}
            className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-md text-[9px] lg:text-[10px] font-mono tracking-widest transition-all duration-300 border ${
              activePage === 'contact' 
                ? 'bg-green-600 border-green-500 text-white' 
                : 'bg-green-600/5 border-green-500/30 text-green-500 hover:bg-green-600 hover:text-white hover:border-green-600'
            }`}
          >
            Contact US
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex gap-2">
           <select 
             className="bg-gray-900 border border-gray-800 text-xs text-green-500 font-mono rounded px-2 py-1 outline-none"
             value={activePage}
             onChange={(e) => onNavigate(e.target.value)}
           >
             {navLinks.map(link => (
               <option key={link.id} value={link.id}>{link.name.toUpperCase()}</option>
             ))}
             <option value="contact">CONTACT</option>
           </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
