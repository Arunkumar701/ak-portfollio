
import React from 'react';
import { PROJECTS } from '../constants';
import SecureImage from './SecureImage';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-green-500">03.</span> Key Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.title}
              className="flex flex-col bg-gray-950 border border-gray-800 rounded-xl overflow-hidden group hover:border-green-500/30 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden border-b border-gray-800">
                <SecureImage 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full opacity-40 group-hover:opacity-80 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 px-2 py-1 bg-gray-900/80 rounded border border-gray-700 text-[10px] font-mono text-green-500 uppercase tracking-widest">
                  {project.tech[0]}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-green-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                      Features
                    </h4>
                    <ul className="text-[11px] space-y-1 text-gray-500">
                      {project.features.slice(0, 2).map(f => <li key={f} className="line-clamp-1">• {f}</li>)}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-1">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] font-mono px-2 py-0.5 bg-gray-900 border border-gray-800 text-gray-500 rounded lowercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
