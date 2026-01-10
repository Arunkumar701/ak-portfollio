
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-gray-800 bg-gray-950">
              <img 
                src="/img/penetration_testing.png" 
                alt="Arun Kumar K" 
                className="object-cover w-full h-full opacity-60 group-hover:opacity-90 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 font-mono text-xs text-green-500 bg-gray-950/80 px-2 py-1 border border-green-500/20 backdrop-blur-sm">
                PEN_TESTER_MODE: ACTIVE
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tighter">
              WHO IS <span className="text-green-500 italic underline decoration-1 underline-offset-8">ARUN?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
              {PERSONAL_INFO.intro}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="p-4 bg-gray-900/40 border-l-2 border-green-500/40">
                <p className="text-green-500 font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">Known Languages</p>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.languages.map(lang => (
                    <span key={lang} className="text-gray-300 text-sm">{lang}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-gray-900/40 border-l-2 border-blue-500/40">
                <p className="text-blue-500 font-mono text-[10px] uppercase tracking-widest mb-2 font-bold">Deployment Hub</p>
                <p className="text-gray-300 text-sm">{PERSONAL_INFO.location}</p>
              </div>
            </div>

            <div className="bg-gray-900/20 p-6 border border-gray-800 rounded-xl">
              <p className="text-gray-400 leading-relaxed text-sm italic">
                {PERSONAL_INFO.aboutDetailed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
