
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Security', 'Frontend', 'Backend', 'Tools'];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-green-500">02.</span> Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat} className="p-6 rounded-xl border border-gray-800 bg-gray-900/30 hover:border-green-500/50 transition-all duration-300 group">
              <h3 className="text-lg font-bold mb-6 text-green-400 flex items-center gap-2 font-mono">
                <span className="text-green-500">[</span>
                {cat.toUpperCase()}
                <span className="text-green-500">]</span>
              </h3>
              <div className="space-y-3">
                {SKILLS.filter(s => s.category === cat).map(skill => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                  >
                    <span className="text-green-500 font-mono">#</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
