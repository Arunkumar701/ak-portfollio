
import React, { useState } from 'react';
import { CERTIFICATIONS } from '../constants';
import SecureImage from './SecureImage';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);

  return (
    <section id="certifications" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
            Validation_Checked
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            PROFESSIONAL <span className="text-green-500">CERTIFICATIONS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="aspect-[4/3] bg-gray-950 p-6 flex items-center justify-center relative overflow-hidden">
                {/* Fake Hologram Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="max-w-[80%] max-h-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 font-mono text-[8px] text-gray-700 select-none">
                  {Math.random().toString(36).substring(7).toUpperCase()}
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-green-500 font-mono text-[10px] uppercase tracking-widest mb-1 font-bold">{cert.duration}</p>
                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors leading-snug">
                  {cert.name}
                </h3>
                <p className="text-gray-500 text-xs mt-2 font-mono">{cert.provider}</p>
                
                <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-600">VERIFIED_STATUS: OK</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-gray-950 border border-gray-800 rounded-2xl text-center">
          <p className="text-gray-500 font-mono text-xs">
            "Constant learning is the only way to stay ahead of modern exploits."
          </p>
        </div>
      </div>

      {/* Full View Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full text-[10px] font-mono uppercase tracking-[0.3em] mb-4">
                    CERTIFICATE_DETAILS
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedCert.name}</h2>
                  <p className="text-green-400 font-mono">{selectedCert.provider}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Certificate Image */}
              <div className="bg-gray-950 rounded-xl p-8 mb-8 flex items-center justify-center">
                <SecureImage
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-w-full max-h-96 object-contain"  
                />
              </div>

              {/* Certificate Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-2">Duration</p>
                    <p className="text-white font-mono">{selectedCert.duration}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-2">Issuing Organization</p>
                    <p className="text-white font-mono">{selectedCert.provider}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-2">Validation Status</p>
                    <p className="text-green-400 font-mono">VERIFIED ✓ AUTHENTIC</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-2">Credential ID</p>
                    <p className="text-white font-mono">{selectedCert.credentialId}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">About This Certification</h3>
                <p className="text-gray-300 leading-relaxed">
                  This certification validates expertise in cybersecurity principles, ethical hacking methodologies, and security best practices. 
                  Demonstrates practical skills in identifying vulnerabilities, implementing robust security measures, and maintaining secure systems 
                  in enterprise environments. The credential confirms proficiency in industry-standard tools and techniques used by cybersecurity 
                  professionals worldwide.
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center">
                <p className="text-gray-500 font-mono text-xs">Click outside to close</p>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-green-500/10 border border-green-500/30 text-green-500 rounded-lg text-sm font-mono hover:bg-green-500/20 transition-colors">
                    Download PDF
                  </button>
                  <button className="px-4 py-2 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg text-sm font-mono hover:bg-gray-700 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
