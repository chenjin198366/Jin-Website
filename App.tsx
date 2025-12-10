import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import { CONTENT } from './constants';
import { Language } from './types';
import { Mail, Award, Terminal, Server, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  // Default language set to Chinese ('cn')
  const [lang, setLang] = useState<Language>('cn');

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'cn' : 'en'));
  };

  const { sections, skills, experience, certifications } = CONTENT;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar lang={lang} toggleLang={toggleLang} />
      
      <main className="max-w-5xl mx-auto px-5 pb-32">
        <Hero lang={lang} />

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-gray-900">
            <Terminal className="text-blue-600" />
            {sections.coreCompetencies[lang]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-gray-100 w-fit rounded-2xl border border-gray-200">
                    {index === 0 ? <Server size={24} className="text-blue-600"/> : <Terminal size={24} className="text-emerald-600"/>}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{skill.title[lang]}</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {skill.description[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 border border-gray-200 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
             <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-gray-900">
                <Briefcase className="text-blue-600" />
                {sections.professionalJourney[lang]}
             </h2>
             <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                    <Briefcase size={120} className="text-black" />
                </div>
                <div className="space-y-8 relative z-10">
                    {experience.map((job, idx) => (
                        <div key={idx} className="group">
                             <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {job.company[lang]}
                                </h4>
                                <span className="text-sm font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                                    {job.period}
                                </span>
                             </div>
                             <p className="text-gray-600 text-lg">{job.role[lang]}</p>
                             {idx !== experience.length - 1 && (
                                 <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 my-8" />
                             )}
                        </div>
                    ))}
                </div>
             </Card>
        </section>

        <section className="mb-32">
             <h2 className="text-3xl font-bold mb-10 flex items-center gap-3 text-gray-900">
                <Award className="text-blue-600" />
                {sections.certifications[lang]}
             </h2>
             <Card className="flex flex-wrap gap-3">
                {certifications.map((cert, idx) => (
                    <span 
                        key={idx}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105 cursor-default ${
                            idx === 0 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-400 shadow-sm'
                        }`}
                    >
                        {cert}
                    </span>
                ))}
             </Card>
        </section>

        <div className="text-center py-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">{sections.contact[lang]}</h2>
          <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <a
                href="mailto:25169364@qq.com"
                className="relative flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-xl"
              >
                <Mail size={20} />
                {sections.emailBtn[lang]}
              </a>
          </div>
          <p className="mt-6 text-gray-500 font-mono">25169364@qq.com</p>
        </div>
      </main>
    </div>
  );
};

export default App;