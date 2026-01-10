
import React from 'react';
import { EXPERIENCES, ACADEMICS, CERTIFICATIONS } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-green-500">04.</span> Professional Experience
        </h2>

        <div className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-gray-800">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative mb-12 md:flex md:gap-12 group">
              <div className="absolute -left-[33px] top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-950 md:hidden"></div>
              <div className="md:w-1/3 mb-4 md:mb-0 md:text-right">
                <p className="text-green-500 font-mono text-sm font-bold uppercase tracking-widest">{exp.duration}</p>
                <h3 className="text-xl font-bold text-white mt-1">{exp.company}</h3>
              </div>
              <div className="md:w-2/3 md:pl-8 relative">
                <div className="hidden md:block absolute -left-[45px] top-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-950 group-hover:scale-125 transition-transform"></div>
                <h4 className="text-lg font-bold text-gray-200 mb-4">{exp.role}</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((res, ridx) => (
                    <li key={ridx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-24">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
              <span className="text-green-500">05.</span> Academic Qualification
            </h2>
            <div className="space-y-8">
              {ACADEMICS.map((edu, idx) => (
                <div key={idx} className="border-l border-gray-800 pl-6 relative">
                  <div className="absolute -left-[4.5px] top-0 w-2 h-2 rounded-full bg-gray-700"></div>
                  <p className="text-green-500 font-mono text-xs mb-1">{edu.duration}</p>
                  <h4 className="text-gray-200 font-bold">{edu.degree}</h4>
                  <p className="text-gray-500 text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-4 text-white">
              <span className="text-green-500">06.</span> Certifications
            </h2>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-gray-800 bg-gray-900/30 flex justify-between items-center group hover:border-green-500/30 transition-all">
                  <div>
                    <h4 className="text-gray-200 font-bold group-hover:text-green-400 transition-colors">{cert.name}</h4>
                    <p className="text-gray-500 text-xs mt-1">{cert.provider}</p>
                  </div>
                  <span className="text-green-500/50 font-mono text-xs">{cert.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
