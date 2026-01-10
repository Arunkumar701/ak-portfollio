
import React from 'react';
import { NETWORK_DATA } from '../constants';

const Network: React.FC = () => {
  return (
    <section id="network" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-500 rounded-full text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
            Infrastructure_Scan
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            NETWORK <span className="text-blue-500">OPERATIONS</span>
          </h2>
        </div>

        <div className="grid gap-8">
          {NETWORK_DATA.map((item, idx) => (
            <div key={item.id} className="group relative bg-gray-900/30 border border-gray-800 p-8 rounded-2xl flex flex-col md:flex-row gap-8 hover:border-blue-500/40 transition-all">
              <div className="md:w-1/4 flex flex-col justify-center items-center md:items-start">
                <div className="text-4xl font-black text-gray-800 group-hover:text-blue-500/20 transition-colors font-mono">
                  0{idx + 1}
                </div>
                <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                  {item.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-blue-900/10 border border-blue-900/30 text-blue-500 rounded text-[9px] font-mono uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-[1px] flex-1 bg-gray-800 group-hover:bg-blue-900/50 transition-colors"></div>
                  <button className="text-[10px] font-mono text-gray-600 hover:text-blue-500 transition-colors uppercase tracking-widest">
                    Request_Case_Study
                  </button>
                </div>
              </div>

              {/* Decorative side line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-blue-500 transition-colors rounded-l-2xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-950 border border-gray-800 rounded-xl flex flex-col items-center text-center">
             <span className="text-2xl mb-2">🌐</span>
             <span className="text-white font-bold text-sm mb-1">VLAN Mastery</span>
             <span className="text-gray-600 text-[10px] font-mono uppercase">L2 / L3 Logic</span>
          </div>
          <div className="p-6 bg-gray-950 border border-gray-800 rounded-xl flex flex-col items-center text-center">
             <span className="text-2xl mb-2">🛡️</span>
             <span className="text-white font-bold text-sm mb-1">Hardened Firewalls</span>
             <span className="text-gray-600 text-[10px] font-mono uppercase">Traffic Audit</span>
          </div>
          <div className="p-6 bg-gray-950 border border-gray-800 rounded-xl flex flex-col items-center text-center">
             <span className="text-2xl mb-2">📡</span>
             <span className="text-white font-bold text-sm mb-1">Cisco Protocol</span>
             <span className="text-gray-600 text-[10px] font-mono uppercase">Routing Logic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
