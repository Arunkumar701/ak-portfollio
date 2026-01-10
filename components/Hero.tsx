
import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [text, setText] = useState('');
  const fullText = PERSONAL_INFO.tagline;
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden relative">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl w-full relative z-10 text-center md:text-left">
        <div className="inline-block py-1 px-3 mb-6 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full text-[10px] font-mono uppercase tracking-[0.3em] animate-fade-in">
          System_Authenticated: VERIFIED
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-tight">
          BUILDING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 drop-shadow-sm">
            SECURE
          </span><br />
          SOFTWARE.
        </h1>

        <p className="text-lg md:text-2xl font-mono text-gray-500 mb-10 min-h-[4rem] max-w-2xl mx-auto md:mx-0">
          <span className="text-green-500/50 mr-2">$</span>
          {text}<span className="inline-block w-2 h-5 bg-green-500 ml-1 animate-pulse align-middle"></span>
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            onClick={() => {
              // Add your logic here
            }}
            className="group relative px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-green-500 hover:text-white"
          >
            <span className="relative z-10">LIVE_PROJECTS</span>
            <div className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <div className="p-[1px] bg-gradient-to-r from-gray-800 to-gray-700 rounded-md">
            <div className="bg-gray-950 px-8 py-4 text-white font-bold text-sm tracking-widest uppercase rounded-md cursor-default">
              Arun Kumar K
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-30">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Scroll_Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-green-500/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
