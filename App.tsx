import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import ChatWidget from './components/ChatWidget';
import { CONTENT } from './constants';
import { Language } from './types';
import { Mail, Award, Terminal, Server, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'cn' : 'en'));
  };

  const { sections, skills, experience, certifications } = CONTENT;

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar lang={lang} toggleLang={toggleLang} />
      
      <main className="max-w-5xl mx-auto px-5 pb-32">
        <Hero lang={lang} />

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Terminal className="text-blue-500" />
            {sections.coreCompetencies[lang]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-white/5 w-fit rounded-2xl">
                    {index === 0 ? <Server size={24} className="text-blue-400"/> : <Terminal size={24} className="text-green-400"/>}
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.title[lang]}</h3>
                <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">
                  {skill.description[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skill.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm text-zinc-200 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-24">
             <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <Briefcase className="text-blue-500" />
                {sections.professionalJourney[lang]}
             </h2>
             <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Briefcase size={120} />
                </div>
                <div className="space-y-8 relative z-10">
                    {experience.map((job, idx) => (
                        <div key={idx} className="group">
                             <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                    {job.company[lang]}
                                </h4>
                                <span className="text-sm font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                                    {job.period}
                                </span>
                             </div>
                             <p className="text-zinc-400 text-lg">{job.role[lang]}</p>
                             {idx !== experience.length - 1 && (
                                 <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 my-8" />
                             )}
                        </div>
                    ))}
                </div>
             </Card>
        </section>

        <section className="mb-32">
             <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <Award className="text-blue-500" />
                {sections.certifications[lang]}
             </h2>
             <Card className="flex flex-wrap gap-3">
                {certifications.map((cert, idx) => (
                    <span 
                        key={idx}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105 cursor-default ${
                            idx === 0 
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30' 
                                : 'bg-zinc-800 text-zinc-300 border border-zinc-700 hover:border-zinc-500'
                        }`}
                    >
                        {cert}
                    </span>
                ))}
             </Card>
        </section>

        <div className="text-center py-10">
          <h2 className="text-3xl font-bold mb-8">{sections.contact[lang]}</h2>
          <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <a
                href="mailto:25169364@qq.com"
                className="relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Mail size={20} />
                {sections.emailBtn[lang]}
              </a>
          </div>
          <p className="mt-6 text-zinc-500 font-mono">25169364@qq.com</p>
        </div>
      </main>

      <ChatWidget />
    </div>
  );
};

export default App;
