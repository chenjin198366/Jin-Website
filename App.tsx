import React, { useState } from 'react';
import { RESUME_CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('cn');

  const toggleLang = () => {
    setLang(prev => prev === 'cn' ? 'en' : 'cn');
  };

  const { header, summary, education, skills, certifications, experience } = RESUME_CONTENT;

  return (
    <div className="container">
        {/* Header: Avatar, Name, Toggle */}
        <header className="header">
            <div className="profile-row">
                <div className="avatar">
                    <img 
                      src="https://chuantu.cj1983.dpdns.org/api/rfile/Gemini_Generated_Image_auo3k2auo3k2auo3.png" 
                      alt="Jin Chen" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.style.background = '#f3f4f6';
                      }}
                    />
                </div>
                <div>
                    <div className="name">{header.name[lang]}</div>
                    <div className="title">{header.title[lang]}</div>
                </div>
            </div>
            
            <button className="lang-btn" onClick={toggleLang}>
                {lang === 'cn' ? 'EN' : '中文'}
            </button>
        </header>

        {/* Intro Section */}
        <section className="section hover-block">
            <div className="section-header">{summary.title[lang]}</div>
            <p className="intro-text">
                {summary.text[lang]}
            </p>
            <div className="contact-info">
                <span>{header.location[lang]}</span>
                <span>·</span>
                <span>13918249627</span>
                <span>·</span>
                <a href="mailto:13918249627@139.com" className="contact-link">
                    13918249627@139.com
                </a>
            </div>
        </section>

        {/* Experience - Timeline View */}
        <section className="section">
            <div className="section-header">{experience.title[lang]}</div>
            
            {experience.jobs.map((job, idx) => (
                <div key={idx} className="timeline-item hover-block">
                    <div className="timeline-date">
                        {job.date[lang]}
                    </div>
                    <div className="timeline-content">
                        <h3>{job.title[lang]}</h3>
                        <span className="timeline-company">{job.company[lang]}</span>
                        
                        <div className="timeline-body">
                            {job.bullets.map((bullet, bIdx) => (
                                <div key={bIdx} className="timeline-bullet">
                                    <span>•</span>
                                    <div>
                                        {bullet.title && <strong>{bullet.title[lang]} </strong>}
                                        {bullet.content[lang]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>

        {/* Skills - List View */}
        <section className="section">
             <div className="section-header">{skills.title[lang]}</div>
             <div className="skills-grid">
                {skills.groups.map((group, idx) => (
                    <div className="skill-group hover-block" key={idx}>
                        <div className="skill-category">{group.category[lang]}</div>
                        <div className="tags-wrapper">
                             {group.tags.map((tag, tIdx) => (
                                  <span className="minimal-tag" key={tIdx}>
                                      {tag[lang]}
                                  </span>
                              ))}
                        </div>
                    </div>
                ))}
             </div>
        </section>

        {/* Certifications */}
        <section className="section">
             <div className="section-header">{certifications.title[lang]}</div>
             <div className="skills-grid">
                <div className="skill-group hover-block">
                    <div className="skill-category">{lang === 'cn' ? '证书' : 'Certs'}</div>
                    <div className="tags-wrapper">
                         {certifications.list.map((cert, idx) => (
                              <span className="minimal-tag" key={idx}>{cert[lang]}</span>
                         ))}
                    </div>
                </div>
             </div>
        </section>

        {/* Education */}
        <section className="section">
            <div className="section-header">{education.title[lang]}</div>
            {education.items?.map((edu, idx) => (
                <div className="timeline-item hover-block" style={{ marginBottom: '20px' }} key={idx}>
                    <div className="timeline-date">{edu.date?.[lang]}</div>
                    <div className="timeline-content">
                        <h3 style={{ fontSize: '1rem'}}>{edu.school?.[lang]}</h3>
                        <div className="timeline-company">{edu.major?.[lang]} · {edu.degree?.[lang]}</div>
                    </div>
                </div>
            ))}
        </section>
    </div>
  );
};

export default App;